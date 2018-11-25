import { createActions, createReducer } from 'reduxsauce';
import _ from 'lodash';
import moment from 'moment';

const { Types, Creators } = createActions({
    outerListRequest: null,
    outerListSuccess: ['list'],
    outerListFailure: ['error'],
});

export const WithdrawTypes = Types;
export default Creators;


const INITIAL_STATE = {
    loading: null,
    list: null,
    error: null
};

export const WithdrawSelectors = {
    selectList: (state) => {
        if (state.withdraw.list) {
            const list = [...state.withdraw.list.list];
            // TODO: Check if I can mutate state here
            list.map(item => {
                item.statusName = item.status === 1 ? { title: "Received", value: 'received'} : { title: "In progress", value: 'in_progress'};
                item.date = moment.unix(item.create_at).format("DD MMM");
            });
            return _.groupBy(list, 'date');
        }
    }
};

export const request = (state) => ({...state, loading: true, list: null, error: null });
export const success = (state, action) => ({...state, loading: false, list: action.list, error: null });
export const failure = (state, action) => ({...state, loading: false, list: null, error: action.error });


export const reducer = createReducer(INITIAL_STATE, {
    [Types.OUTER_LIST_REQUEST]: request,
    [Types.OUTER_LIST_SUCCESS]: success,
    [Types.OUTER_LIST_FAILURE]: failure
});