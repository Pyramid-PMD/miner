import { put, call, select } from 'redux-saga/effects';
import SettingsActions, { SettingsSelectors } from './SettingsRedux';
import i18n from '../../../../config/i18n/i18next.client.config';
import {generateDataFiles, getDriveList, setMomentLocale} from "../../../../Services/Utils";
const config = require('../../../../config/app.config');
import { handleGenericNetworkErrors } from '../../../../Redux/StartupSagas';


export function * getUserInfoSaga(api) {
    const res = yield call(api.getUserInfo);
    if (res.status === 200) {
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
    console.log('res', res);
    if (res) {
        if (res.data.code === "0") {
            yield put(SettingsActions.exchangeRateSuccess(res.data.data));
        } else {
            yield put(SettingsActions.exchangeRateFailure('error'));
        }
    }
}

export function getUserCurrency(defaultCurrency) {
    const currency = localStorage.getItem('currency');
    // const defaultRate = yield select(SettingsSelectors.selectRates);
    if (!currency) {
        localStorage.setItem('currency', JSON.stringify(defaultCurrency));
        return defaultCurrency;
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

export function getSavedLanguage() {
    const lang = localStorage.getItem('lang');
    if (!lang) {
       localStorage.setItem('lang', JSON.stringify(config.i18n.initialLang));
       return config.i18n.initialLang
    }
    return JSON.parse(localStorage.getItem('lang'));
}

export function setLanguage(lang) {
    return localStorage.setItem('lang', JSON.stringify(lang));
}


export function * loadDefaultSettingsSaga(api, action) {
    const lang = yield call(getSavedLanguage);
    console.log('lang', lang);
    // if (lang) {
        yield i18n.changeLanguage(lang.code);
        yield call(setMomentLocale, lang.code);
        try {
            let rates, currency;
            const ratesRes = yield call(api.getExchangeRates);
            if (ratesRes.status === 200) {
                if (ratesRes.data.code === "0" && ratesRes.data.data) {
                    rates = ratesRes.data.data.list;
                    currency = yield call(getUserCurrency, rates[0]);
                }
            }

            const drivelist = yield call(getDriveList);
            console.log('drivelist', drivelist);
            // if (drivelist && drivelist.length > 0) {


            console.log('drivelist', drivelist, 'rates', rates);
            const selectedDrive = yield call(getUserSavedDisk, drivelist[drivelist.length - 1]);
            generateSettingsDataFiles(selectedDrive);
            yield put(SettingsActions.loadDefaultSuccess(lang, currency, drivelist, rates, selectedDrive));
            yield getUserInfoSaga(api);
            // if (currency && selectedDrive) {
            // }
            // }

        } catch (e) {
            console.log(e);
        }


    // }

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

    generateSettingsDataFiles(partition);

    yield i18n.changeLanguage(language.code);
    yield call(setMomentLocale, language.code);
    yield saveUserCurrency(currency);
    yield saveUserDisk(partition);
    yield setLanguage(language);
    yield loadDefaultSettingsSaga(api);
    yield put(SettingsActions.saveSettingsSuccess(action.settings));
}

export function generateSettingsDataFiles(partition) {
    try {
        generateDataFiles(partition);
    } catch (error) {

    }
}