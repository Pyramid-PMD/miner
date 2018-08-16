import { createActions, createReducer} from 'reduxsauce';

const { Types, Creators} = createActions({
    aliasRequest: ['alias'],
    aliasSuccess: null,
    aliasFailure: ['error']
});

export const AliasTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
    loading: null,
    error: null
};

export const AliasSelectors = {
    selectError: state => state.alias.error
};

/* ------------- Reducers ------------- */

const request = (state, action) => {
    return { ...state, loading: true, error: null };
}

export const success = (state) => {
    return { ...state, loading: false, error: null };
};

export const failure = (state, action) => {
    return { ...state, loading: false, error: action.error };
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.ALIAS_REQUEST]: request,
    [Types.ALIAS_SUCCESS]: success,
    [Types.ALIAS_FAILURE]: failure
});