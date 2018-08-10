import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators} = createActions({
    profitChartRequest: ['interval'],
    profitChartSuccess: ['chart'],
    profitChartFailure: ['error']
});

export const ProfitTypes = Types;
export default Creators;


const INITIAL_STATE = {
    loading: null,
    chart: null,
    error: null
};

export const ProfitSelectors = {
    selectChart: (state, type) => {
        if (state.profit.chart) {
            return transaformData(state.profit.chart.chart);
        }
    },
};
export const request = (state, action) => {
    return { ...state, loading: true };
};

export const success = (state, action) => {
    return { ...state, loading: false, chart: action.chart, error: false };
};

export const failure = (state, action) => {
    return { ...state, loading: true, error: action.error  };
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.PROFIT_CHART_REQUEST]: request,
    [Types.PROFIT_CHART_SUCCESS]: success,
    [Types.PROFIT_CHART_FAILURE]: failure,
});

function transaformData(array) {
    // if (array.length === 0) return array;
    const series = {
        date: [],
        bonus: []
    };
    if (array.length > 0) {
        array.forEach((item) => {
            series.date.push(item.date);
            series.bonus.push(item.bonus);
        });
    }

    return series;
}