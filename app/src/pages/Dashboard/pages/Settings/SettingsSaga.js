import { put, call, select } from 'redux-saga/effects';
import SettingsActions, { SettingsSelectors } from './SettingsRedux';
import i18n from '../../../../config/i18n/i18next.client.config';
import {getDriveList, setMomentLocale} from "../../../../Services/Utils";
const config = require('../../../../config/app.config');
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';


export function * getUserInfoSaga(api) {
    const res = yield call(api.getUserInfo);
    if (res) {
        if (res.data.code === "0") {
            yield put(SettingsActions.userInfoSuccess(res.data.data));
        } else {
            let errorMsg;
            switch (res.data.code) {
                default:
                    errorMsg = yield call(handleGenericNetworkErrors, res);
            }
            yield put(SettingsActions.userInfoFailure(errorMsg));
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
    if (!currency) {
        localStorage.setItem('currency', JSON.stringify(defaultRate[0]));
    }
    return JSON.parse(localStorage.getItem('currency'))
}

export function saveUserCurrency(currency) {
    localStorage.setItem('currency', JSON.stringify(currency));
}

export function saveUserDisk(disk) {
    localStorage.setItem('disk', disk);
}

export function * getUserSavedDisk(defaultDisk) {
    const disk = localStorage.getItem('disk');
    if (!disk) {
        localStorage.setItem('disk', defaultDisk);
    }
    return localStorage.getItem('disk');
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
    const lang = yield call(getSavedLanguage);
    if (lang) {
        yield i18n.changeLanguage(lang.code);
        yield call(setMomentLocale, lang.code);
        try {
            const drivelist = yield call(getDriveList);
            if (drivelist && drivelist.length > 0) {
                yield getUserInfoSaga(api);
                yield getExchangeRates(api);
                const currency = yield call(getUserCurrency);
                console.log('drivelist', drivelist);
                const selectedDrive = yield call(getUserSavedDisk, drivelist[drivelist.length - 1]);
                if (currency && selectedDrive) {
                    yield put(SettingsActions.loadDefaultSuccess(lang, currency, drivelist, selectedDrive));
                }
            }

        } catch (e) {
            console.log(e);
        }


    }

}

export function * saveNewSettingsSaga(api, action) {
    //check form values
    const { machine_name, language, currency, partition } = action.settings;
    // TODO: save machine name only if user changes it
    const savedAlias = yield select(SettingsSelectors.selectAlias);
    if (machine_name !== savedAlias) {
        try {
            yield call(api.createMinerAlias, machine_name);

        } catch (error) {
            // TODO: dispatch error saving machine name
            console.log('error');
        }
    }

    yield i18n.changeLanguage(language.code);
    yield call(setMomentLocale, language.code);
    yield saveUserCurrency(currency);
    yield saveUserDisk(partition);
    yield setLanguage(language);
    yield loadDefaultSettingsSaga(api);
    yield put(SettingsActions.saveSettingsSuccess(action.settings));

}