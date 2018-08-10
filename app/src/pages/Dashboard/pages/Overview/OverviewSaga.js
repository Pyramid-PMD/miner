import { put, call } from 'redux-saga/effects';
import OverviewActions from './OverviewRedux';

export function * getOverview(api, action) {
    const res = yield call(api.getOverview);
    console.log('overview res', res);
    let errorMsg;
    switch (res.data.code) {
        case "0":
            console.log('overview success', res.data.data);
            yield put(OverviewActions.overviewSuccess(res.data.data));
            break;
    }
}