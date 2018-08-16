import { put, call } from 'redux-saga/effects';
import AliasActions from './AliasRedux';
import { handleGenericNetworkErrors } from '../../Redux/StartupSagas';
import i18n from '../../config/i18n/i18next.client.config';

import { replace } from 'connected-react-router';

export function * createAliasSaga(api, action) {
    const { alias } = action;
    const res = yield call(api.createMinerAlias, alias);
    if (res) {
        if (res.data.code === "0") {
            yield put(AliasActions.aliasSuccess());
            yield put(replace('/dashboard'));
        } else {
            let errorMsg;
            switch (res.data.code) {
                case -1:
                    // Invalid email
                    errorMsg = i18n.t('auth:alias.errors.emailInvalid');
                    break;
                case -2:
                    // Server failed to send email
                    errorMsg = i18n.t('auth:alias.errors.sendEmailFailed');
                    break;
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(AliasActions.aliasFailure(errorMsg));
        }
    }
}