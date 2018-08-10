import { takeLatest, all, call } from 'redux-saga/effects'
import API from '../Services/Api';

/* ------------- Types ------------- */
import {LoginTypes} from "../pages/Login/LoginRedux";
import {RegisterTypes } from '../pages/Register/RegisterRedux';
import {VerifyEmailTypes} from '../pages/Register/VerifyEmailRedux';
import {AliasTypes} from '../pages/MinerAlias/AliasRedux';
import {StartupTypes} from './StartupRedux';
import {OverviewTypes} from '../pages/Dashboard/pages/Overview/OverviewRedux';
import {TransactionTypes} from '../pages/Dashboard/pages/Transactions/TransactionRedux';
import {SendTransactionTypes} from '../pages/Dashboard/components/TransactionForm/SendTransactionRedux';
import {WithdrawTypes} from '../pages/Dashboard/pages/Withdraw/WithdrawRedux';
import {NotificationTypes} from '../pages/Dashboard/pages/Notifications/NotificationsRedux';
import {MinerTypes} from '../pages/Dashboard/pages/Miner/MinerRedux';
import {SettingsTypes} from '../pages/Dashboard/pages/Settings/SettingsRedux';
import {ProfitTypes} from '../pages/Dashboard/pages/Profit/ProfitRedux';

/* ------------- Sagas ------------- */
import {loginSaga} from "../pages/Login/LoginSaga";
import {registerSaga} from '../pages/Register/RegisterSaga';
import {verifyEmailSaga} from '../pages/Register/VerifyEmailSaga';
import {createAliasSaga} from '../pages/MinerAlias/AliasSaga';
import {checkAuthStatus, pollMinerSaga} from './StartupSagas';
import {getOverview} from '../pages/Dashboard/pages/Overview/OverviewSaga';
import {getTransaction} from '../pages/Dashboard/pages/Transactions/TransactionSaga';
import {sendTransaction, getAddressList} from '../pages/Dashboard/components/TransactionForm/SendTransactionSaga';
import {getOuterList} from '../pages/Dashboard/pages/Withdraw/WithdrawSaga';
import {getNotifications} from '../pages/Dashboard/pages/Notifications/NotificationsSaga';
import {getMinerChartSaga, getMinerFutureSaga} from '../pages/Dashboard/pages/Miner/MinerSaga';
import { saveNewSettingsSaga, loadDefaultSettingsSaga } from '../pages/Dashboard/pages/Settings/SettingsSaga';
import { getProfitChartSaga } from '../pages/Dashboard/pages/Profit/ProfitSaga';



/* ------------- API ------------- */

// TODO: Refactor to utils.js file
const getDiskId = () => {
    console.log('process', process);
    if (process.env.NODE_ENV === 'development') return new Promise((resolve, reject) => resolve('7654321'));
    const os = require('os');
    if (os.platform() === 'win32') {
        const exec = require('child_process').exec;
        const winCmd = 'wmic DISKDRIVE get SerialNumber';
        return exec(winCmd);
    } else {
        return new Promise((resolve, reject) => resolve('7654321'))
    }
};

const api = API.create();

api.instance.addRequestTransform(async request => {
    let diskId;
    try {
        diskId = await getDiskId();
        request.headers['disk_id'] = diskId;
    } catch (err) {
        diskId = '7654321';
    }
    request.headers['disk_id'] = diskId;
});

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
    yield all([
        takeLatest(StartupTypes.CHECK_AUTH_STATUS, checkAuthStatus, api),
        takeLatest(LoginTypes.LOGIN_REQUEST, loginSaga, api),
        takeLatest(RegisterTypes.REGISTER_REQUEST, registerSaga, api),
        takeLatest(VerifyEmailTypes.VERIFY_EMAIL_REQUEST, verifyEmailSaga, api),
        takeLatest(AliasTypes.ALIAS_REQUEST, createAliasSaga, api),
        takeLatest(OverviewTypes.OVERVIEW_REQUEST, getOverview, api),
        takeLatest(TransactionTypes.TRANSACTION_REQUEST, getTransaction, api),
        takeLatest(SendTransactionTypes.SEND_TRANSACTION_REQUEST, sendTransaction, api),
        takeLatest(WithdrawTypes.OUTER_LIST_REQUEST, getOuterList, api),
        takeLatest(NotificationTypes.NOTIFICATION_REQUEST, getNotifications, api),
        takeLatest(MinerTypes.MINER_CHART_REQUEST, getMinerChartSaga, api),
        takeLatest(MinerTypes.MINER_FUTURE_REQUEST, getMinerFutureSaga, api),
        // takeLatest(SettingsTypes.USER_INFO_REQUEST, getUserInfoSaga, api),
        takeLatest(SettingsTypes.LOAD_DEFAULT_SETTINGS, loadDefaultSettingsSaga, api),
        takeLatest(SettingsTypes.SAVE_SETTINGS_REQUEST, saveNewSettingsSaga, api),
        takeLatest(SendTransactionTypes.GET_SAVED_ADDRESS_LIST, getAddressList),
        takeLatest(ProfitTypes.PROFIT_CHART_REQUEST, getProfitChartSaga, api),
        takeLatest(StartupTypes.POLL_MINER_REQUEST, pollMinerSaga, api),
    ]);
};


