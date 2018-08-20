import { put, call } from 'redux-saga/effects';
import LoginActions from './LoginRedux';
import LoadingIndicatorActions from '../../components/LoadingIndicator/LoadingIndicatorRedux';
import { handleGenericNetworkErrors } from '../../Redux/StartupSagas';
import { replace } from 'connected-react-router';
import i18n from '../../config/i18n/i18next.client.config';


export function * loginSaga(api, action) {
    const { credentials } = action;
    try {
        yield put(LoadingIndicatorActions.showLoadingIndicator(true));
        const res = yield call(api.login, credentials);
        if (res.data.code === "0") {
            yield localStorage.setItem('token', res.data.data.token);
            yield localStorage.setItem('user', JSON.stringify(res.data.data));
            yield api.instance.addRequestTransform(request => {
                request.headers['token'] = res.data.data.token;
                request.headers['uid'] = res.data.data.uid;
            });
            yield put(LoginActions.loginSuccess(res.data.data));
            if (res.data.data.isNew === 1) {
                yield put(replace('/alias'));
            } else {
                yield put(replace('/'));
            }
        } else {
            let errorMsg;
            switch (res.data.code) {
                // Email not registered
                case -11:
                    errorMsg = i18n.t('auth:login.errors.emailNotRegistered');
                    // errorMsg = 'not registered';
                    yield put(LoginActions.loginFailure(errorMsg));
                    break;
                // Wrong password
                case -12:
                    errorMsg = i18n.t('auth:login.errors.wrongPassword');
                    yield put(LoginActions.loginFailure(errorMsg));
                    break;
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(LoginActions.loginFailure(errorMsg));

        }

    } catch (error) {
        console.log('error', error);
    }

    yield put(LoadingIndicatorActions.showLoadingIndicator(false));

}



export function * logoutSaga() {
    yield put(LoadingIndicatorActions.showLoadingIndicator(true));
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('user');
    yield put(LoginActions.logoutSuccess());
    yield put(LoadingIndicatorActions.showLoadingIndicator(false));
    yield put(replace('/login'));
}