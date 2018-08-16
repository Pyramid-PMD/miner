import { put, call} from 'redux-saga/effects';
import MinerActions from './MinerRedux';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';

export function * getMinerChartSaga(api, action) {
    const res = yield call(api.getMinerChart);
    if (res) {
        console.log(res);
        if (res.data.code === "0") {
            yield put(MinerActions.minerChartSuccess(res.data.data));
        } else {
            let errorMsg;
            switch (res.data.code) {
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(MinerActions.minerChartFailure(errorMsg));
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