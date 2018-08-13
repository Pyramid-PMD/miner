import { put, call } from 'redux-saga/effects';
import OverviewActions from './OverviewRedux';

export function * getOverview(api, action) {
    const res = yield call(api.getOverview);
    let errorMsg;
    if (res) {
        switch (res.data.code) {
            case "0":
                console.log('overview success', res.data.data);
                yield put(OverviewActions.overviewSuccess(res.data.data));
                break;
        }
    }

}