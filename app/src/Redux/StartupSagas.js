import { put, call, take, race, select } from 'redux-saga/effects';
import LoginActions from '../pages/Login/LoginRedux';
import StartupActions, {StartupTypes} from "./StartupRedux";
import { getSavedLanguage } from '../pages/Dashboard/pages/Settings/SettingsSaga';
import {getDiskId} from "../Services/Utils";
import i18n from '../config/i18n/i18next.client.config';
import {QrCodeLoginTypes} from "../pages/QrCodeLogin/QrLoginRedux";
import {addDiskIdToRequestHeaders} from "../Services/Api";
import {api} from "./rootSaga";
import {delay} from "redux-saga";
import {handleAutoLoginResponse} from "../pages/QrCodeLogin/QrCodeLoginSaga";

export function * checkAuthStatus(api, action) {
    const lang = yield getSavedLanguage();
    if (lang) {
        yield i18n.changeLanguage(lang.code);
    }
    // Get saved user and token
    const token = yield localStorage.getItem('token');
    const user = yield JSON.parse(localStorage.getItem('user'));


    // Get disk id and transform apis to include token in header
    const diskId = yield call(getDiskId);
    if (diskId) {
        yield put(StartupActions.diskSerialSuccess(diskId));
        yield api.instance.addRequestTransform(request => {
            request.headers['disk_id'] = diskId;
        });
    }

    // Get default language
    // if (!token) {
    //     yield put(LoginActions.loginFailure())
    // } else {
    //     yield api.instance.addRequestTransform(request => {
    //         request.headers['token'] = token;
    //         request.headers['uid'] = user.uid;
    //     });
    //     yield put(LoginActions.loginSuccess(user))
    // }
}

export function measureUploadSpeed() {
    const settings = {
        endpoint:  'http://101.132.161.0/server.php',
        upload: {
            data: {
                // The amount of data to initially use.
                size:  1 * 1024 * 1024, // 2 MB in 172.492 s
                multiplier: 2
            }
        }
    };
    const net = new Network(settings);

    return new Promise((resolve, reject) => {
        net.upload
            .on('start', function(dataSize) {
        })
            .on('end', function(averageSpeed) {
                console.log('average speed', averageSpeed);
                resolve(Math.floor(averageSpeed / 1024));
            })
            // .on('error', (error) => reject(error))
            .start();
        net.upload.abort();
    });
}

// export function * pollMinerSaga(api) {
//     const speed = yield measureUploadSpeed() || 168;
//     const res = yield call(api.pollMiner, speed);
//     if (res.data.code === "0") {
//         yield put(StartupActions.pollMinerSuccess())
//     } else {
//         switch (res.data.code) {
//
//         }
//         yield put(StartupActions.pollMinerFailure('error'));
//     }
//
// }


export function * handleGenericNetworkErrors (response) {
    // Dispatch generic errors if code not equal "0"
    // -500: Wrong parameter
    // -501: Wrong version
    // -502: Wrong token, logout user
    // -503: Wrong header
    const { code } = response.data;
    let errorMsg;
    switch(code) {
        case -502:
            // Dispatch logout action and show token expired message
            yield put(LoginActions.logoutRequest());
            errorMsg = i18n.t('common:networkErrors.tokenExpired');
            break;
        case -501:
            errorMsg = i18n.t('common:networkErrors.installNewUpdate');
            break;
        default:
            // Something went wrong message
            errorMsg = i18n.t('common:networkErrors.somethingWentWrong');
    }
    return errorMsg;

}

export function* pollMinerSagaWatcher() {
    while (true) {
        yield take(StartupTypes.START_MINER_POLL);
        yield race([
            call(pollMinerSaga),
            take(StartupTypes.STOP_MINER_POLL)
        ]);
    }
}

const POLL_MINER_INTERVAL = 5 * 1000;

export function* pollMinerSaga() {
    while (true) {
        console.log('poll miner saga called');
        let speed = 168;
        try {
            speed = yield measureUploadSpeed();
        } catch (error) {
            console.log('error', error);
        }
        const res = yield call(api.pollMiner, speed);
        if (res.status === 200) {
            if (res.data.code === "0") {
                yield put(StartupActions.pollMinerSuccess())
            } else {
                yield put(StartupActions.pollMinerFailure('error'));
            }
        } else {
            yield put(StartupActions.pollMinerFailure('error'));
        }
        yield call(delay, POLL_MINER_INTERVAL);
    }
}

