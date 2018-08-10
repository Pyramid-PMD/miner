import { put, call } from 'redux-saga/effects';
import WithdrawActions from './WithdrawRedux';

export function * getOuterList(api, action) {
    const res = yield call(api.getTransactionList, 'outer');
    console.log(res);
    if (res.data.code === "0") {
        yield put(WithdrawActions.outerListSuccess(res.data.data));
    } else {
        yield put(WithdrawActions.outerListFailure('error'));
    }
}