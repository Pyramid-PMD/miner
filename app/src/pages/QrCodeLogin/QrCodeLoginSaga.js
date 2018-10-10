import {put, call} from 'redux-saga/effects';
import {getMacAddress, getDiskId, generateQrCode} from "../../Services/Utils";
import QrCodeLoginActions from './QrLoginRedux';

export function* getQrCode () {
    try {
        const macAddress = yield call(getMacAddress);
        const diskId = yield call(getDiskId);
        const source = `MAC:${macAddress}\rDISK:${diskId}`;
        const qrCode = yield call(generateQrCode, source);
        console.log('macAddress', macAddress, diskId, qrCode);
        yield put(QrCodeLoginActions.qrCodeSuccess(qrCode));
    } catch (error) {
        console.log('error', error);
    }
}

