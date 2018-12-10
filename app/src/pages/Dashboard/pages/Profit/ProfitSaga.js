import { call, put } from 'redux-saga/effects';
import ProfitActions from './ProfitRedux';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';

export function * getProfitChartSaga(api, action) {
    const { interval } = action;
    const res = yield call(api.getProfitChart, interval);
    if (res && res.status === 200) {
        if (res.data.code === "0") {
            yield put(ProfitActions.profitChartSuccess(res.data.data));
        } else {
            let errorMsg;
            switch (res.data.code) {
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(ProfitActions.profitChartFailure(errorMsg));
        }
    }
}