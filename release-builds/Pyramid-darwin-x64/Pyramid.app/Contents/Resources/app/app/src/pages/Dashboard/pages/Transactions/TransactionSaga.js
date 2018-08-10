import { put, call } from 'redux-saga/effects';
import TransactionActions from './TransactionRedux';

export function * getTransaction(api, action) {
    const res = yield call(api.getTransaction);
    console.log('transaction res', res);
    let errorMsg = '';
    switch (res.data.code) {
        case "0":
            yield put(TransactionActions.transactionSuccess(res.data.data));
            break;
        default:
            yield put(TransactionActions.transactionFailure(errorMsg));
    }
}
