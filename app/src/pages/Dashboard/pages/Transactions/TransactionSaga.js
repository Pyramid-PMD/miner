import { put, call } from 'redux-saga/effects';
import TransactionActions from './TransactionRedux';
import i18n from '../../../../config/i18n/i18next.client.config';

export function * getTransaction(api, action) {
    const res = yield call(api.getTransaction);
    let errorMsg;
    if (res) {
        if (res.data.code === "0") {
            yield put(TransactionActions.transactionSuccess(res.data.data));
        } else {
            // switch (res.data.code) {
            //     case -21:
            //         errorMsg = i18n.t('dashboard:transaction.errors.wrongAmount');
            //         break;
            //     case -22:
            //         errorMsg = i18n.t('dashboard:transaction.errors.wrongAddress');
            //         break;
            //     case -23:
            //         errorMsg = i18n.t('dashboard:transaction.errors.wrongPassword');
            //         break;
            //     case -24:
            //         errorMsg = i18n.t('dashboard:transaction.errors.notEnoughBalance');
            //         break;
            //     case -25:
            //         errorMsg = i18n.t('dashboard:transaction.errors.errorSavingTransaction');
            //         break;
            //     default:
            // }
            yield put(TransactionActions.transactionFailure(errorMsg));
        }
    }
}
