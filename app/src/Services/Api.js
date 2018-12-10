import apisauce from 'apisauce';
const { ipcRenderer } =  require('electron')
const { app } =  require('electron').remote;
// const url = process.env.NODE_ENV === 'development' ? '/api': 'http://101.132.161.0/api';

const url = 'http://101.132.161.0/api/desk';

// TODO: get disk id by ipcMain

let encryptedDiskInfo;
encryptedDiskInfo = ipcRenderer.sendSync('encryption');
// console.log('encryptedDiskInfo', encryptedDiskInfo);

//TODO: dynamic or static version?
const headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    // 'disk_id': 'S314JA0FA71976', // 123456
    'version': '1.0.0' //app.getVersion()
};

const create  =  (baseURL = url) => {

    if (encryptedDiskInfo && encryptedDiskInfo !== '') {
        headers['tx'] = encryptedDiskInfo;
    }
    const api = apisauce.create({
        baseURL,
        headers,
        timeout: 30 * 1000
    });

    // Root api
    const ping = () => api.get('');

    // Auth
    const login = (credentials) => api.post('/login', credentials);
    const autoLogin = () => api.post('/autologin');
    const register = (user) => api.post('/register', user);
    const verifyEmail = (email) => api.get('/sendVerify', {email});
    const createMinerAlias = (machine_name) => api.post('/machine/set', { machine_name });

    // Dashboard
    const getOverview = () => api.get('/overview');
    const getTransaction = () => api.get('/transaction');
    const sendTransaction = (transaction, type) => api.post(`/transaction/${type}`, transaction);
    const getTransactionList = (type) => api.get(`/transaction/${type}/list`);
    const getMinerChart = () => api.get('/miner/chart');
    const getUserInfo = () => api.get('/user/info');
    const getExchangeRates = () => api.get('/exchange/rate');
    const getProfitChart = (q) => api.get('/bonus/info', {q});
    const pollMiner = (speed) => api.post('/miner', { speed });
    const getMinerFuture = () => api.get('/miner/future');
    const getNotifications = () => api.get('/msg/list');

    // Response interceptor for generic error handling

    return {
        instance: api,
        ping,
        login,
        autoLogin,
        register,
        verifyEmail,
        createMinerAlias,
        getOverview,
        getTransaction,
        sendTransaction,
        getTransactionList,
        getNotifications,
        getMinerChart,
        getUserInfo,
        getExchangeRates,
        getProfitChart,
        pollMiner,
        getMinerFuture
    };
};

export const pingApi = apisauce.create({
        url: 'http://101.132.161.0/',
        headers,
        timeout: 10 * 1000
});

export const ping = () => pingApi.get('');

export const addTokenToRequestHeaders = (api, token, uid) => {
    api.instance.addRequestTransform(request => {
        request.headers['token'] = token;
        request.headers['uid'] = uid;
    });
};

export const addDiskIdToRequestHeaders = (api, diskId) => {
    api.instance.addRequestTransform(request => {
        request.headers['disk_id'] = diskId;
    });
};

export default {
    create
};


// Handle generic errors
// -502 is wrong token so logout user