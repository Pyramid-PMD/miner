import {put, call} from 'redux-saga/effects';
import {getMacAddress, getDiskId, generateQrCode} from "../../Services/Utils";
import QrCodeLoginActions from './QrLoginRedux';

export function* getQrCodeSaga () {
    try {
        // Windows mac and disk
        // MAC: DE-15-D3-D3-13-B2
        // DISK: S314JA0FA71976

        // const macAddress = yield call(getMacAddress);
        // const diskId = yield call(getDiskId);

        const macAddress = 'DE-15-D3-D3-13-B2';
        const diskId = 'S314JA0FA71976';
        const source = `MAC:${macAddress}\rDISK:${diskId}`;
        const qrCode = yield call(generateQrCode, source);
        console.log('macAddress', macAddress, diskId, qrCode);
        yield put(QrCodeLoginActions.qrCodeSuccess(qrCode));
    } catch (error) {
        console.log('error', error);
    }
}

export function* autoLoginSaga(api, action) {
    try {
        const res = yield call(api.autoLogin);
        console.log('res', res);
    } catch (error) {
        console.log('error', error);
    }
}

