import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
    sendTransactionRequest: ['transaction', 'transactionType'],
    sendTransactionSuccess: null,
    sendTransactionFailure: ['error'],
    getSavedAddressList: null,
    getSavedAddressListSuccess: ['addressList']
});

export const SendTransactionTypes = Types;
export default Creators;


const INITIAL_STATE = {
    loading: null,
    error: null,
    addressList: null
};

export const SendTransactionSelectors = {
    selectAddressList: (state) => state.sendTransaction.addressList || [],
    selectError: state => state.sendTransaction.error
};

export const request = (state) => ({...state, loading: true, error: null });
export const success = (state, action) => ({...state, loading: false, error: null });
export const failure = (state, action) => ({...state, loading: false, error: action.error });
export const getSavedAddressListSuccess = (state, action) => ({...state, addressList: action.addressList });


export const reducer = createReducer(INITIAL_STATE, {
    [Types.SEND_TRANSACTION_REQUEST]: request,
    [Types.SEND_TRANSACTION_SUCCESS]: success,
    [Types.SEND_TRANSACTION_FAILURE]: failure,
    [Types.GET_SAVED_ADDRESS_LIST_SUCCESS]: getSavedAddressListSuccess
});