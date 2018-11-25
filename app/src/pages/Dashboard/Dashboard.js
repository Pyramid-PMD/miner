import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import Overview from "./pages/Overview/Overview";
// import Transactions from "./pages/Transactions/Transactions";
// import Miner from "./pages/Miner/Miner";
// import Withdraw from "./pages/Withdraw/Withdraw";
// import Faq from "./pages/Faq/Faq";
// import Settings from "./pages/Settings/Settings";
// import Profit from "./pages/Profit/Profit";
import Menu from "./components/Menu/Menu";
// import Notifications from "./pages/Notifications/Nofications";
import config from '../../config/app.config';
import PageHeader from "./components/PageHeader/PageHeader";

import AsyncComponent from '../../hoc/AsyncComponent';

const AsyncOverview = AsyncComponent(() => import("./pages/Overview/Overview"));
const AsyncTransactions = AsyncComponent(() => import("./pages/Transactions/Transactions"));
const AsyncMiner = AsyncComponent(() => import("./pages/Miner/Miner"));
const AsyncWithdraw = AsyncComponent(() => import("./pages/Withdraw/Withdraw"));
const AsyncFaq = AsyncComponent(() => import("./pages/Faq/Faq"));
const AsyncSettings = AsyncComponent(() => import("./pages/Settings/Settings"));
const AsyncProfit = AsyncComponent(() => import("./pages/Profit/Profit"));
const AsyncNotifications = AsyncComponent(() => import("./pages/Notifications/Notifications"));



import SettingsActions, { SettingsSelectors } from './pages/Settings/SettingsRedux';
import StartupActions, { StartupSelectors } from '../../Redux/StartupRedux';
import LoginActions from '../Login/LoginRedux';

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class Dashboard extends Component {
    //TODO: Use redux-observable in polling miner
    componentDidMount() {
        this.props.loadSettings();
    }

    componentWillMount() {
        this.startPoll();
    }

    startPoll() {
        const interval = (60 * 5 * 1000);
        this.props.pollMiner();
        setTimeout(() => {
            this.startPoll();
        }, interval);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        // if (this.props.loading) {
        //     return (<div className="d-flex align-items-stretch root-container">
        //         <p>loading</p>
        //     </div>);
        // }
        return (
            <div className="d-flex align-items-stretch root-container">
                <div>
                    <Menu
                        balance={ this.props.balance}
                        adjustedBalance={this.props.adjustedBalance}
                        currency={ this.props.currency }
                        alias={ this.props.alias } logout={this.props.logout}/>
                </div>
                <div className="page" style={pageStyles}>
                    <div className="page-container">
                        <PageHeader />
                            <Switch>
                                <Route path={ this.props.match.url + '/miner'} component={AsyncMiner}/>
                                <Route path={ this.props.match.url + '/transactions'} component={AsyncTransactions}/>
                                <Route path={ this.props.match.url + '/withdraw'} component={AsyncWithdraw}/>
                                <Route path={ this.props.match.url + '/faqs'} component={AsyncFaq}/>
                                <Route path={ this.props.match.url + '/notifications'} component={AsyncNotifications}/>
                                <Route path={ this.props.match.url + '/settings'} component={AsyncSettings}/>
                                <Route path={ this.props.match.url + '/profit'} component={AsyncProfit}/>
                                <Route path={ this.props.match.url} component={AsyncOverview}/>
                            </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        balance: SettingsSelectors.selectBalance(state),
        adjustedBalance: SettingsSelectors.selectAdjustedBalance(state),
        currency: SettingsSelectors.selectUserCurrency(state),
        loading: SettingsSelectors.selectLoading(state),
        miner: null,
        alias: SettingsSelectors.selectAlias(state),
        isPollingMiner: StartupSelectors.selectMinerPolling(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadSettings: () => dispatch(SettingsActions.loadDefaultSettings()),
        loadUser: () => dispatch(SettingsActions.userInfoRequest()),
        pollMiner: () => dispatch(StartupActions.pollMinerRequest()),
        logout: () => dispatch(LoginActions.logoutRequest()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);