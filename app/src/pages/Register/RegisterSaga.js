import { put, call } from 'redux-saga/effects';
import RegisterActions from './RegisterRedux';
import LoadingIndicatorActions from '../../components/LoadingIndicator/LoadingIndicatorRedux';
import { handleGenericNetworkErrors } from '../../Redux/StartupSagas';
import { replace } from 'connected-react-router';
import i18n from '../../config/i18n/i18next.client.config';


export function * registerSaga(api, action) {
    const { user } = action;
    console.log(user);
    yield put(LoadingIndicatorActions.showLoadingIndicator(true));
    const res = yield call(api.register, user);
    if (res) {
        if (res.data.code === "0") {
            yield put(replace('/login'));
            yield put(RegisterActions.registerSuccess());
        } else {
            let errorMsg;
            switch (res.data.code) {
                case -3:
                    errorMsg = i18n.t('auth:register.errors.wrongRepeatPass');
                    break;
                case -4:
                    errorMsg = i18n.t('auth:register.errors.wrongPasswordFormat');
                    break;
                case -5:
                    errorMsg = i18n.t('auth:register.errors.emailNotVerified');
                    break;
                case -6:
                    errorMsg = i18n.t('auth:register.errors.verificationCodeExpired');
                    break;
                case -7:
                    errorMsg = i18n.t('auth:register.errors.wrongVerificationCode');
                    break;
                case -8:
                    errorMsg = i18n.t('auth:register.errors.registrationError');
                    break;
                case -13:
                    errorMsg = i18n.t('auth:register.errors.emailRegistered');
                    break;
                case -16:
                    // Machine has a user
                    errorMsg = i18n.t('auth:register.errors.machineHasUser');
                    break;
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(RegisterActions.registerFailure(errorMsg));
        }
    }
    yield put(LoadingIndicatorActions.showLoadingIndicator(false));
}
