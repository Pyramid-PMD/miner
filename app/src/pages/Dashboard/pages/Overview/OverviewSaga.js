import { put, call } from 'redux-saga/effects';
import OverviewActions from './OverviewRedux';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';

export function * getOverview(api) {
    // yield put(LoadingIndicatorActions.showLoadingIndicator(true));
    const res = yield call(api.getOverview);
    let errorMsg;
    if (res.status === 200) {
        if (res.data.code === "0") {
            yield put(OverviewActions.overviewSuccess(res.data.data));

        }
        else {
            errorMsg = yield call(handleGenericNetworkErrors, res);
            yield put(OverviewActions.overviewFailure(errorMsg));
        }
    }

    // yield put(LoadingIndicatorActions.showLoadingIndicator(false));
}