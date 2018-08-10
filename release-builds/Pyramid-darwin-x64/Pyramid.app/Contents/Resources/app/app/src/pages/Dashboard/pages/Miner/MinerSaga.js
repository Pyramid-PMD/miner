import { put, call} from 'redux-saga/effects';
import MinerActions from './MinerRedux';

export function * getMinerChartSaga(api, action) {
    const res = yield call(api.getMinerChart);
    if (res) {
        console.log(res);
        if (res.data.code === "0") {
            yield put(MinerActions.minerChartSuccess(res.data.data));
        } else {
            yield put(MinerActions.minerChartFailure('error'));
        }
    }
}


export function * getMinerFutureSaga(api, action) {
    const res = yield call(api.getMinerFuture);
    if (res) {
        console.log(res);
        if (res.data.code === "0") {
            yield put(MinerActions.minerFutureSuccess(res.data.data.future));
        } else {
            yield put(MinerActions.minerFutureFailure('error'));
        }
    }
}