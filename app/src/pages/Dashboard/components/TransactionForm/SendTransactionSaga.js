import { call, put} from 'redux-saga/effects';
import _ from 'lodash';
import i18n from '../../../../config/i18n/i18next.client.config';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';


import SendTransactionActions from './SendTransactionRedux';
import TransactionActions from '../../pages/Transactions/TransactionRedux';
import WithdrawActions from '../../pages/Withdraw/WithdrawRedux';




export function * getAddressList() {
    const addressList = yield localStorage.getItem('addressList');
    yield put (SendTransactionActions.getSavedAddressListSuccess(JSON.parse(addressList)));
    return addressList ? JSON.parse(addressList) : [];
}

export function * saveAddress(address) {
    const saved = yield getAddressList();
    if (saved) {
        saved.push(address);
        const uniqueSaved = _.uniq(saved);
        yield localStorage.setItem('addressList', JSON.stringify(uniqueSaved));
        yield put (SendTransactionActions.getSavedAddressListSuccess(uniqueSaved));
    }

}

export function * sendTransaction(api, action) {
    const { transaction, transactionType } = action;
    yield call(saveAddress, transaction.to_addr);
    const res = yield call(api.sendTransaction, transaction, transactionType);
    if (res.data.code === "0") {
        yield put(SendTransactionActions.sendTransactionSuccess());
        if (transactionType === 'inner') {
            yield put (TransactionActions.transactionRequest());
        } else {
            yield put (WithdrawActions.outerListRequest());
        }
    } else {
        let errorMsg;
        switch (res.data.code) {
            case -21:
                errorMsg = i18n.t('dashboard:transaction.errors.wrongAmount');
                break;
            case -22:
                errorMsg = i18n.t('dashboard:transaction.errors.wrongAddress');
                break;
            case -23:
                errorMsg = i18n.t('dashboard:transaction.errors.wrongPassword');
                break;
            case -24:
                errorMsg = i18n.t('dashboard:transaction.errors.notEnoughBalance');
                break;
            case -25:
                errorMsg = i18n.t('dashboard:transaction.errors.errorSavingTransaction');
                break;
            default:
                errorMsg = yield call(handleGenericNetworkErrors, res);
        }
        yield put(SendTransactionActions.sendTransactionFailure(errorMsg));
    }

}