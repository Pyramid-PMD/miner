import {put, call, take, race, select} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import { replace } from 'connected-react-router';
import {getMacAddress, getDiskId, generateQrCode} from "../../Services/Utils";
import QrCodeLoginActions, {QrCodeLoginTypes} from './QrLoginRedux';
import {api} from '../../Redux/rootSaga';
import {addTokenToRequestHeaders, addDiskIdToRequestHeaders} from "../../Services/Api";


export const selectUser = state => state.qrCodeLogin.user;

export function* getQrCodeSaga(api, action) {
    try {
        // Windows mac and disk
        // MAC: DE-15-D3-D3-13-B2
        // DISK: S314JA0FA71976

        const macAddress = yield call(getMacAddress);
        // const macAddress = 'DE-15-D3-D3-13-B2';
        const diskId = yield call(getDiskId);
        yield addDiskIdToRequestHeaders(api, diskId);
        const source = `mac:${macAddress}\rdisk:${diskId}`;
        const qrCode = yield call(generateQrCode, source);
        console.log('macAddress', macAddress);
        console.log('disk id', diskId);
        console.log('qrcode', qrCode);
        yield put(QrCodeLoginActions.qrCodeSuccess(qrCode));
    } catch (error) {
        console.log('error', error);
    }
}


export function* autoLoginSagaWatcher() {
    console.log('auto login watcher fired');
    while (true) {
        yield take(QrCodeLoginTypes.START_AUTO_LOGIN);
        yield race([
            call(autoLoginSaga),
            take(QrCodeLoginTypes.STOP_AUTO_LOGIN)
        ]);
    }
}

export function* autoLoginSaga() {
    console.log('auto login fired');
    while (true) {
        try {
            const diskId = yield call(getDiskId);
            // const diskId = 'S314JA0FA71976';
            yield addDiskIdToRequestHeaders(api, diskId);
            const res = yield call(api.autoLogin);
            console.log('autologin response', res);
            yield call(handleAutoLoginResponse, res);
            yield call(delay, 30000);
        } catch (err) {
            console.log('error', err);
            // yield put(getDataFailureAction(err));
        }
    }
}

export function* handleAutoLoginResponse(res) {
    if (res.data) {
        if (res.data.code === '0') {
            yield call(handleAutoLoginSuccess, res);
        } else {
            yield call(handleAutoLoginFailure, res);
        }
    } else {
        // TODO: handle generic errors

    }
}

export function* handleAutoLoginSuccess(res) {
    const initialUser = yield select(selectUser);
    const user = res.data.data;
    const {token, uid, isNew} = user;
    yield call(addTokenToRequestHeaders, api, token, uid);
    yield put(QrCodeLoginActions.autoLoginSuccess(user));
    yield call(saveTokenToStorage, token, user);
    console.log('initial user', initialUser);
    if (!initialUser) {

        if (isNew === 1) {
            yield put(replace('/alias'));
        } else {
            yield put(replace('/dashboard'));
        }
    }
}

export function* handleAutoLoginFailure(res) {
    // TODO: Ask backend developer for error codes
    switch (res.data.code) {
        case -500:
            console.log('wating scan');
            break;
        case -10203:
            console.log('no user in disk id');
            break;
    }
    yield put(replace('/qr-code-login'));
    yield put(QrCodeLoginActions.autoLoginFailure('login error'));
}

export function* saveTokenToStorage(token, user) {
    yield localStorage.setItem('token', token.toString());
    yield localStorage.setItem('user', JSON.stringify(user));
}



