import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    qrCodeRequest: null,
    qrCodeSuccess: ['qrCode'],
    qrCodeFailure: ['error']
});

export const QrCodeLoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    qrCode: null,
    error: null
});

/* ------------- Selectors ------------- */

export const QrCodeLoginSelectors = {
    selectError: state => state.qrCodeLogin.error,
    selectQrCode: state => state.qrCodeLogin.qrCode,
};

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) => {
    return ({ ...state, qrCode: null, error: null })
}


// successful avatar lookup
export const success = (state, action) => {
    const { qrCode } = action;
    console.log('login success', qrCode);
    return ({ ...state, qrCode})
}

// failed to get the avatar
export const failure = (state, action) =>
    ({ ...state, error: action.error , qrCode: null });


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.QR_CODE_REQUEST]: request,
    [Types.QR_CODE_SUCCESS]: success,
    [Types.QR_CODE_FAILURE]: failure
});
