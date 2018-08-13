import { createActions, createReducer} from 'reduxsauce';

const { Types, Creators } = createActions({
    checkAuthStatus: null,
    isAuthenticated: ['status'],
    pollMinerRequest: ['speed'],
    pollMinerSuccess: null,
    pollMinerFailure: ['error'],
    pollMinerStop: null,

});

export const StartupTypes = Types;
export default Creators;


const INITIAL_STATE = {
    isAuthenticated: false,
    isMinerPolling: null,
    miner: null
};

export const StartupSelectors = {
    selectMiner: state => state.startup.miner,
    selectMinerPolling: state => state.startup.isMinerPolling
};

export const isAuthenticated = (state, action) => {
   const { isAuthenticated } = action;
   return { ...state, isAuthenticated};
};

export const minerRequest = (state, action) => {
    return { ...state, isMinerPolling: true }
};

export const minerSuccess = (state, action) => {
    return { ...state, isMinerPolling: false, miner: true }
};

export const minerFailure = (state, action) => {
    return { ...state, isMinerPolling: false, miner: false }
};
export const reducer = createReducer(INITIAL_STATE, {
    [Types.IS_AUTHENTICATED]: isAuthenticated,
    [Types.POLL_MINER_REQUEST]: minerRequest,
    [Types.POLL_MINER_SUCCESS]: minerSuccess,
    [Types.POLL_MINER_FAILURE]: minerFailure
});