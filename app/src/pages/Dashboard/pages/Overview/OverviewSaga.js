import { put, call } from 'redux-saga/effects';
import OverviewActions from './OverviewRedux';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';

export function * getOverview(api, action) {
    const res = yield call(api.getOverview);
    let errorMsg;
    if (res) {
        if (res.data.code === "0") {
            yield put(OverviewActions.overviewSuccess(res.data.data));

        }
        else {
            switch (res.data.code) {
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(OverviewActions.overviewFailure(errorMsg));
        }

    }

}