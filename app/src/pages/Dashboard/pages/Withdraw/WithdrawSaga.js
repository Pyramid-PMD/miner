import { put, call } from 'redux-saga/effects';
import WithdrawActions from './WithdrawRedux';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';

export function * getOuterList(api, action) {
    const res = yield call(api.getTransactionList, 'outer');
    if (res.status === 200) {
        if (res.data.code === "0") {
            console.log('withdraw history', res);
            yield put(WithdrawActions.outerListSuccess(res.data.data));
        } else {
            let errorMsg;
            switch (res.data.code) {
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(WithdrawActions.outerListFailure(errorMsg));
        }
    }

}