import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    qrCodeRequest: null,
    qrCodeSuccess: ['qrCode'],
    qrCodeFailure: ['error'],
    autoLoginRequest: null,
    autoLoginSuccess: ['user'],
    autoLoginFailure: ['error'],
    startAutoLogin: null,
    stopAutoLogin: null,
});

export const QrCodeLoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    qrCode: null,
    error: null,
    user: null,
    token: null,
    loading: true,
};

/* ------------- Selectors ------------- */

export const QrCodeLoginSelectors = {
    selectError: state => state.qrCodeLogin.error,
    selectQrCode: state => state.qrCodeLogin.qrCode,
    selectIsAuthenticated: state => state.qrCodeLogin.token,
    selectUser: state => state.qrCodeLogin.user,
    selectLoading: state => state.qrCodeLogin.loading,
};

/* ------------- Reducers ------------- */

export const request = (state) => {
    return ({ ...state, qrCode: null, error: null })
};


export const success = (state, action) => {
    const { qrCode } = action;
    return ({ ...state, qrCode})
};

export const failure = (state, action) =>
    ({ ...state, error: action.error , qrCode: null });

export const loginRequest = (state) => {
    return ({ ...state, loading: true, error: null })
};

export const loginSuccess = (state, action) => {
    const { user } = action;
    return ({ ...state, loading: false, error: null, user, token: user.token })
};

export const loginFailure = (state, action) => {
    return ({ ...state, loading: false, error: action.error , user: null, token: null });
};


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.QR_CODE_REQUEST]: request,
    [Types.QR_CODE_SUCCESS]: success,
    [Types.QR_CODE_FAILURE]: failure,
    [Types.AUTO_LOGIN_REQUEST]: loginRequest,
    [Types.AUTO_LOGIN_SUCCESS]: loginSuccess,
    [Types.AUTO_LOGIN_FAILURE]: loginFailure
});
