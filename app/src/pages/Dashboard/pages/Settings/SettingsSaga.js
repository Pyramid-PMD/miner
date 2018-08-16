import { put, call, select } from 'redux-saga/effects';
import SettingsActions, { SettingsSelectors } from './SettingsRedux';
import i18n from '../../../../config/i18n/i18next.client.config';
import {getDriveList} from "../../../../Services/Utils";
const config = require('../../../../config/app.config');


export function * getUserInfoSaga(api) {
    const res = yield call(api.getUserInfo);
    if (res) {
        if (res.data.code === "0") {
            yield put(SettingsActions.userInfoSuccess(res.data.data));
        } else {
            yield put(SettingsActions.userInfoFailure('error'));
        }
    }
}


export function * getExchangeRates(api) {
    const res = yield call(api.getExchangeRates);
    if (res) {
        if (res.data.code === "0") {
            yield put(SettingsActions.exchangeRateSuccess(res.data.data));
        } else {
            yield put(SettingsActions.exchangeRateFailure('error'));
        }
    }
}

export function * getUserCurrency() {
    const currency = localStorage.getItem('currency');
    const defaultRate = yield select(SettingsSelectors.selectRates);
    console.log('currency', currency, defaultRate);
    if (!currency) {
        localStorage.setItem('currency', JSON.stringify(defaultRate[0]));
    }
    return JSON.parse(localStorage.getItem('currency'))
}

export function saveUserCurrency(currency) {
    localStorage.setItem('currency', JSON.stringify(currency));
}

export function * getSavedLanguage() {
    const lang = localStorage.getItem('lang');
    if (!lang) {
       return localStorage.setItem('lang', JSON.stringify(config.i18n.initialLang));
    }
    return JSON.parse(localStorage.getItem('lang'));
}

export function setLanguage(lang) {
    return localStorage.setItem('lang', JSON.stringify(lang));
}


export function * loadDefaultSettingsSaga(api, action) {
    console.log('load default settings');
    const lang = yield call(getSavedLanguage);
    console.log('lang', lang);
    if (lang) {
        yield i18n.changeLanguage(lang.code);
        let drivelist = ['A'];
        try {
             drivelist = yield call(getDriveList);
        } catch (e) {
            console.log(e);
        }

        yield getUserInfoSaga(api);
        yield getExchangeRates(api);
        const currency = yield call(getUserCurrency);
        if (currency) {
            yield put(SettingsActions.loadDefaultSuccess(lang, currency, drivelist));
        }
    }

}

export function * saveNewSettingsSaga(api, action) {
    //check form values
    const { machine_name, language, currency } = action.settings;
    yield call(api.createMinerAlias, machine_name);
    yield i18n.changeLanguage(language.code);
    yield saveUserCurrency(currency);
    yield setLanguage(language);
    yield loadDefaultSettingsSaga(api);
    yield put(SettingsActions.saveSettingsSuccess(action.settings));

}