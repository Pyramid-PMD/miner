import { put, call } from 'redux-saga/effects';
import NotificationActions from './NotificationsRedux';
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';

export function * getNotifications(api, action) {
    const res = yield call(api.getNotifications);
    console.log('notifications res', res);
    if (res.status === 200) {
        if (res.data.code === "0") {
            yield put(NotificationActions.notificationSuccess(res.data.data));
            yield put(NotificationActions.filterNotifications(0));
        } else {
            let errorMsg;
            switch (res.data.code) {
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(NotificationActions.notificationFailure(errorMsg));
        }
    }
}
