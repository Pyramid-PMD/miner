import { call, put} from 'redux-saga/effects';
import _ from 'lodash';

import SendTransactionActions from './SendTransactionRedux';
import TransactionActions from '../../pages/Transactions/TransactionRedux';
import WithdrawActions from '../../pages/Withdraw/WithdrawRedux';


export function * getAddressList() {
    const addressList = yield localStorage.getItem('addressList');
    yield put (SendTransactionActions.getSavedAddressListSuccess(JSON.parse(addressList)));
    return addressList ? JSON.parse(addressList) : [];
}

export function * saveAddress(address) {
    let saved = yield getAddressList();
    saved = yield _.uniq(saved.push(address));
    console.log('saved', saved);
    yield localStorage.setItem('addressList', JSON.stringify(saved));
}

export function * sendTransaction(api, action) {
    const { transaction, transactionType } = action;
    const res = yield call(api.sendTransaction, transaction, transactionType);
    yield call(saveAddress, transaction.to_addr);
    if (res.data.code === "0") {
        yield put(SendTransactionActions.sendTransactionSuccess(null));
        if (transactionType === 'inner') {
            yield put (TransactionActions.transactionRequest());
        } else {
            yield put (WithdrawActions.outerListRequest());
        }
    } else {
        let errorMsg;
        switch (res.data.code) {
            // Wrong transaction amount
            case -21:
                errorMsg = 'Wrong transaction amount';
                break;
            // Wrong transaction address
            case -22:
                errorMsg = 'Wrong transaction amount';
                break;
            // Wrong trade password
            case -23:
                errorMsg = 'Wrong transaction amount';
                break;
            // Balance not enough
            case -24:
                errorMsg = 'Wrong transaction amount';
                break;
            default:
                errorMsg = 'Wrong transaction amount';
        }
        yield put(SendTransactionActions.sendTransactionFailure(errorMsg));
    }

}