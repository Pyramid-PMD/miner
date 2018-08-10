import apisauce from 'apisauce';
// const url = process.env.NODE_ENV === 'development' ? '/api': 'http://101.132.161.0/api';

const url = 'http://101.132.161.0/api';

const create  =  (baseURL = url) => {
    let diskId = '7654321';
    // try {
    //     diskId = await getDiskId();
    //     console.log('disk is', diskId);
    // } catch (err) {
    //     diskId = '7654321';
    // }
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'disk_id': diskId, // 123456
            'version': '1.0.0'
        },
        timeout: 100000
    });

    const getRoot = () => api.get('');

    // Auth
    const login = (credentials) => api.post('login', credentials);
    const register = (user) => api.post('register', user);
    const verifyEmail = (email) => api.get('sendVerify', {email});
    const createMinerAlias = (machine_name) => api.post('machine/set', { machine_name });

    // Dashboard
    const getOverview = () => api.get('overview');
    const getTransaction = () => api.get('transaction');
    const sendTransaction = (transaction, type) => api.post(`transaction/${type}`, transaction);
    const getTransactionList = (type) => api.get(`transaction/${type}/list`);
    const getMinerChart = () => api.get('miner/chart');
    const getUserInfo = () => api.get('user/info');
    const getExchangeRates = () => api.get('exchange/rate');
    const getProfitChart = (q) => api.get('bonus/info', {q});
    const pollMiner = (speed) => api.post('miner', { speed });
    const getMinerFuture = () => api.get('miner/future');

    // Todo: Add pagination
    const getNotifications = () => api.get('msg/list');

    return {
        instance: api,
        getRoot,
        login,
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

export default {
    create
};
