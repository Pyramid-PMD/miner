import { createActions, createReducer} from 'reduxsauce';

const { Types, Creators } = createActions({
    overviewRequest: null,
    overviewSuccess: ['overview'],
    overviewFailure: ['error']
});

export const OverviewTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: null,
    overview: null,
    error: null
};

/* ------------- Selectors ------------- */

export const OverviewSelectors = {
    selectExchangeIndex: (state) => {
        if (state.overview.overview) return state.overview.overview.exchangeIndex;
    },
    selectMiningProfit: state => state.overview.overview ? state.overview.overview.mining_profit: null,
    selectOtherIncoming: state => state.overview.overview ? state.overview.overview.other_incoming: null,
    selectPmdAll: state => state.overview.overview ? state.overview.overview.pmd_all: null
};

export const request = (state) => {
    return { ...state, loading: true };
};

export const success = (state, action) => {
    const { overview } = action;
    return { ...state, loading: false, overview, error: null };
};

export const failure = (state, action) => {
    const { error } = action;
    return { ...state, loading: false, overview: null, error };
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.OVERVIEW_REQUEST]: request,
    [Types.OVERVIEW_SUCCESS]: success,
    [Types.OVERVIEW_FAILURE]: failure,
});