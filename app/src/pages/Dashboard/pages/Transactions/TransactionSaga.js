import { put, call } from 'redux-saga/effects';
import TransactionActions from './TransactionRedux';
import i18n from '../../../../config/i18n/i18next.client.config';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';

export function * getTransaction(api, action) {
    const res = yield call(api.getTransaction);
    if (res.status === 200) {
        if (res.data.code === "0") {
            yield put(TransactionActions.transactionSuccess(res.data.data));
        } else {
            let errorMsg;
            switch (res.data.code) {
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(TransactionActions.transactionFailure(errorMsg));
        }
    }
}
