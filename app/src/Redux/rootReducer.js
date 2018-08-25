import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    // nav: routerReducer,
    form: formReducer,
    auth: require('../pages/Login/LoginRedux').reducer,
    register: require('../pages/Register/RegisterRedux').reducer,
    verifyEmail: require('../pages/Register/VerifyEmailRedux').reducer,
    alias: require('../pages/MinerAlias/AliasRedux').reducer,
    overview: require('../pages/Dashboard/pages/Overview/OverviewRedux').reducer,
    transaction: require('../pages/Dashboard/pages/Transactions/TransactionRedux').reducer,
    sendTransaction: require('../pages/Dashboard/components/TransactionForm/SendTransactionRedux').reducer,
    withdraw: require('../pages/Dashboard/pages/Withdraw/WithdrawRedux').reducer,
    notifications: require('../pages/Dashboard/pages/Notifications/NotificationsRedux').reducer,
    miner: require('../pages/Dashboard/pages/Miner/MinerRedux').reducer,
    settings: require('../pages/Dashboard/pages/Settings/SettingsRedux').reducer,
    profit: require('../pages/Dashboard/pages/Profit/ProfitRedux').reducer,
    startup: require('./StartupRedux').reducer,
    loadingIndicator: require('../components/LoadingIndicator/LoadingIndicatorRedux').reducer,
});

export default rootReducer;