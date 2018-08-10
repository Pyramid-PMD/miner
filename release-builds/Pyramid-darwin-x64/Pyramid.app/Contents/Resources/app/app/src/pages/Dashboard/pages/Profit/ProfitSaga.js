import { call, put } from 'redux-saga/effects';
import ProfitActions from './ProfitRedux';

export function * getProfitChartSaga(api, action) {
    const { interval } = action;
    const res = yield call(api.getProfitChart, interval);
    if (res) {
        if (res.data.code === "0") {
            yield put(ProfitActions.profitChartSuccess(res.data.data));
        } else {
            yield put(ProfitActions.profitChartFailure('error'));
        }
    }
}