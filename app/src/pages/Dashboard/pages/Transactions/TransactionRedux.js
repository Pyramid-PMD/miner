import { createActions, createReducer } from 'reduxsauce';
import _ from 'lodash';
import moment from 'moment';

const { Types, Creators } = createActions({
    transactionRequest: null,
    transactionSuccess: ['transaction'],
    transactionFailure: ['error'],
});

export const TransactionTypes = Types;
export default Creators;


const INITIAL_STATE = {
    loading: null,
    transaction: null,
    error: null
};

export const TransactionSelectors = {
    selectWalletAddress: (state) => state.transaction.transaction ? state.transaction.transaction.wallet_addr : null,
    selectBalance: (state) => state.transaction.transaction ? state.transaction.transaction.balance : null,
    selectHistory: (state) => {
        const newState = { ...state };
        if (state.transaction.transaction) {
        // TODO: Check if I can mutate state here
            newState.transaction.transaction.history.map(item => {
                item.statusName = item.status === 1 ? { title: "Received", value: 'received'} : { title: "In progress", value: 'in_progress'};
                item.date = moment.unix(item.create_at).format("DD MMM");
            });
            return _.groupBy(newState.transaction.transaction.history, 'date');
        }
    }
};

export const request = (state) => ({...state, loading: true, transaction: null, error: null });
export const success = (state, action) => ({...state, loading: false, transaction: action.transaction, error: null });
export const failure = (state, action) => ({...state, loading: false, transaction: null, error: action.error });


export const reducer = createReducer(INITIAL_STATE, {
    [Types.TRANSACTION_REQUEST]: request,
    [Types.TRANSACTION_SUCCESS]: success,
    [Types.TRANSACTION_FAILURE]: failure
});