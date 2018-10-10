import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    qrCodeRequest: null,
    qrCodeSuccess: ['qrCode'],
    qrCodeFailure: ['error'],
    autoLoginRequest: null,
    autoLoginSuccess: ['user'],
    autoLoginFailure: ['error']
});

export const QrCodeLoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    qrCode: null,
    error: null,
    user: null,
    token: null,
    loading: null
});

/* ------------- Selectors ------------- */

export const QrCodeLoginSelectors = {
    selectError: state => state.qrCodeLogin.error,
    selectQrCode: state => state.qrCodeLogin.qrCode,
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
    return ({ ...state, loading: true, user: null, error: null, token: null })
};

export const loginSuccess = (state) => {
    const { user } = action;
    return ({ ...state, loading: false, error: null, user, token: user.token })
};

export const loginFailure = (state) => {
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
