import { put, call } from 'redux-saga/effects';
import LoginActions from './LoginRedux';
import { replace } from 'connected-react-router';
import i18n from '../../config/i18n/i18next.client.config';


export function * loginSaga(api, action) {
    const { credentials } = action;
    const res = yield call(api.login, credentials);
    let errorMsg;
    switch (res.data.code) {
        // Login success
        case "0":
            yield localStorage.setItem('token', res.data.data.token);
            yield localStorage.setItem('user', JSON.stringify(res.data.data));
            yield api.instance.addRequestTransform(request => {
                request.headers['token'] = res.data.data.token;
                request.headers['uid'] = res.data.data.uid;
            });
            yield put(LoginActions.loginSuccess(res.data.data));
            if (res.data.data.isNew === 0) {
                yield put(replace('/alias'));
            } else {
                yield put(replace('/'));
            }
            break;
        // Email not registered
        case -11:
            errorMsg = i18n.t('auth:login.errors.emailNotRegistered');
            // errorMsg = 'not registered';
            yield put(LoginActions.loginFailure(errorMsg));
            break;
        // Wrong password
        case -12:
            errorMsg = 'wrong password';
            yield put(LoginActions.loginFailure(errorMsg));
            errorMsg = i18n.t('auth:login.errors.wrongPassword');
            break;
        default:
            yield put(LoginActions.loginFailure(errorMsg));
    }
}



export function * logoutSaga() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('user');
    yield put(LoginActions.logoutSuccess());
    yield put(replace('/login'));
}