import { createActions, createReducer } from 'reduxsauce';
const config = require('../../../../config/app.config');

const { Types, Creators } = createActions({
    userInfoRequest: null,
    userInfoSuccess: ['user'],
    userInfoFailure: ['error'],
    saveSettingsRequest: ['settings'],
    saveSettingsSuccess: ['settings'],
    saveSettingsFailure: null,
    loadDefaultSettings: null,
    loadDefaultSuccess: ['language', 'currency', 'driveList', 'selectedDrive'],
    loadDefaultFailure: ['error'],
    savedLanguageRequest: null,
    savedLanguageSuccess: ['language'],
    exchangeRateSuccess: ['rates'],
    exchangeRateFailure: ['error'],
    setDefaultAppSettings: null,
    cancelSettingsChanges: null
});

export const SettingsTypes = Types;
export default Creators;


const INITIAL_STATE = {
    user: null,
    loading: null,
    language: null,
    rates: null,
    selectedRate: null,
    driveList: null,
    selectedDrive: null,
    loadDefault: false
};

export const SettingsSelectors = {
    selectLoading: (state) => state.settings.loading,
    selectAlias: (state) => state.settings.user ? state.settings.user.machine_nick : null,
    selectLanguage: (state) => state.settings.language ? state.settings.language : null,
    selectRates: (state) =>  state.settings.rates ? state.settings.rates.list : null,
    selectBalance: (state) => {
        if (state.settings.user) {
            return state.settings.user.balance;
        }
    },
    selectAdjustedBalance: (state) => {
        if (state.settings.user  && state.settings.selectedRate) {
            return (state.settings.user.balance * state.settings.selectedRate.rate).toPrecision(5);
        }
    },
    selectUserCurrency: state => state.settings.selectedRate ? state.settings.selectedRate : null,
    selectUserDrive: state => state.settings.selectedDrive ? state.settings.selectedDrive : state.settings.driveList[state.settings.driveList.length - 1],
    selectDriveList: state => state.settings.driveList,
    selectDefaultDrive: state => state.settings.driveList ? state.settings.driveList[state.settings.driveList.length - 1] : null,
    selectDefaultLanguage: () => config.i18n.initialLang,
    selectDefaultCurrency: state => {
        if (state.settings.rates && state.settings.rates.list.length > 0) {
            return state.settings.rates.list.find(rate => rate.name === config.defaultCurrency)
        }
    }
};

export const selectInitialValues =  (state) => {
    const initialValue = {
        machine_name: SettingsSelectors.selectAlias(state),
    };
    if (state.settings.loadDefault) {
        return {
            ...initialValue,
            language: SettingsSelectors.selectDefaultLanguage(),
            currency: SettingsSelectors.selectDefaultCurrency(state),
            partition : SettingsSelectors.selectDefaultDrive(state),
        }
    } else {
        return {
            ...initialValue,
            language: SettingsSelectors.selectLanguage(state),
            currency: SettingsSelectors.selectUserCurrency(state),
            partition : SettingsSelectors.selectUserDrive(state)
        }
    }
};
export const userInfoRequest = (state) => ({ ...state, loading: true});
export const userInfoSuccess = (state, action) => ({ ...state, user: action.user });
export const userInfoFailure = (state, action) => ({ ...state, user: null, error: action.error });
export const savedLanguageSuccess = (state, action) => ({ ...state, language: action.language });
export const loadDefaultSuccess = (state, action) => ({ ...state, loading: false, language: action.language, selectedRate: action.currency, driveList: action.driveList, selectedDrive: action.selectedDrive });
export const exchangeRateSuccess = (state, action) => ({ ...state, rates: action.rates });
export const saveSettingsSuccess = (state, action) => ({ ...state, loadDefault: false, language: action.settings.language, selectedRate: action.settings.currency  });

export const setDefaultAppSettings = (state) => ({ ...state, loadDefault: true });
export const cancelSettingsChanges = (state, action) => {
    return { ...state, loadDefault: false }
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_INFO_REQUEST]: userInfoRequest,
    [Types.USER_INFO_SUCCESS]: userInfoSuccess,
    [Types.USER_INFO_FAILURE]: userInfoFailure,
    [Types.SAVED_LANGUAGE_SUCCESS]: savedLanguageSuccess,
    [Types.LOAD_DEFAULT_SUCCESS]: loadDefaultSuccess,
    [Types.EXCHANGE_RATE_SUCCESS]: exchangeRateSuccess,
    [Types.SAVE_SETTINGS_SUCCESS]: saveSettingsSuccess,
    [Types.LOAD_DEFAULT_SUCCESS]: loadDefaultSuccess,
    [Types.SET_DEFAULT_APP_SETTINGS]: setDefaultAppSettings,
    [Types.CANCEL_SETTINGS_CHANGES]: cancelSettingsChanges,
    // [Types.SELECTED_RATE_REQUEST]: selectedRateRequest
    // [Types.EXCHANGE_RATE_REQUEST]: exchangeRateRequest
    //[Types.SAVE_SETTINGS_REQUEST]: userInfoRequest,
});