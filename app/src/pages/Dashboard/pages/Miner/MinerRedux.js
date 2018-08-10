import { createActions, createReducer} from 'reduxsauce';
import _ from 'lodash';

const { Types, Creators } = createActions({
    minerChartRequest: null,
    minerChartSuccess: ['chart'],
    minerChartFailure: ['error'],
    minerFutureRequest: null,
    minerFutureSuccess: ['future'],
    minerFutureFailure: ['error']
});

export const MinerTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: null,
    chart: null,
    error: null,
    future: null
};

export const MinerSelectors = {
    selectChart: (state, type) => {
        if (state.miner.chart) {
           return transaformData(state.miner.chart[type]);
        }
    },
    selectLoading: (state) => state.miner.loading,
    selectFuture: state => state.miner.future
};

export const request = (state, action) => ({ ...state, loading: true });
export const success = (state, action) => ({ ...state, loading: false, chart: action.chart, error: null });
export const failure = (state, action) => ({ ...state, loading: false, chart: null, error: action.error });
// export const futureRequest = (state, action) => ({ ...state, loading: true });
export const futureSuccess = (state, action) => ({ ...state, future: action.future  });
// export const futureFailure = (state, action) => ({ ...state, loading: false, chart: null, error: action.error });

export const reducer = createReducer(INITIAL_STATE, {
    [Types.MINER_CHART_REQUEST]: request,
    [Types.MINER_CHART_SUCCESS]: success,
    [Types.MINER_CHART_FAILURE]: failure,
    [Types.MINER_FUTURE_SUCCESS]: futureSuccess
});


function transaformData(array) {
    const series = {
        time: [],
        hash: []
    };
    array.forEach((item) => {
        series.time.push(item.t);
        series.hash.push(item.hashrate);
    });

    return series;
}