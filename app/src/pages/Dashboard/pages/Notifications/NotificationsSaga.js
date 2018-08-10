import { put, call } from 'redux-saga/effects';
import NotificationActions from './NotificationsRedux';

export function * getNotifications(api, action) {
    const res = yield call(api.getNotifications);
    console.log('notifications res', res);
    if (res.data.code === "0") {
        yield put(NotificationActions.notificationSuccess(res.data.data));
        yield put(NotificationActions.filterNotifications(0));
    } else {
        let errorMsg = '';
        yield put(NotificationActions.notificationFailure(errorMsg));
    }
}
