import { createActions, createReducer } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators} = createActions({
    verifyEmailRequest: ['email'],
    verifyEmailSuccess: null,
    verifyEmailFailure: null
});

export const VerifyEmailTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
    fetching: null,
    error: null
};

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

export const request = (state) => {
    return { ...state, fetching: true, error: null };
};

export const success = (state) => {
    return { ...state, fetching: false, error: null };
};

export const failure = (state, action) => {
    return { ...state, fetching: false, error: true };
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.VERIFY_EMAIL_REQUEST]: request,
    [Types.VERIFY_EMAIL_SUCCESS]: success,
    [Types.VERIFY_EMAIL_FAILURE]: failure
});