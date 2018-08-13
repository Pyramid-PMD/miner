import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Overview from "./pages/Overview/Overview";
import Transactions from "./pages/Transactions/Transactions";
import Miner from "./pages/Miner/Miner";
import Withdraw from "./pages/Withdraw/Withdraw";
import Faq from "./pages/Faq/Faq";
import Settings from "./pages/Settings/Settings";
import Profit from "./pages/Profit/Profit";
import Menu from "./components/Menu/Menu";
import Notifications from "./pages/Notifications/Nofications";
import config from '../../config/app.config';
import PageHeader from "./components/PageHeader/PageHeader";

import SettingsActions, { SettingsSelectors } from './pages/Settings/SettingsRedux';
import StartupActions, { StartupSelectors } from '../../Redux/StartupRedux';
import LoginActions from '../Login/LoginRedux';

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class Dashboard extends Component {
    //TODO: Use redux-observable in polling miner
    componentWillMount() {
        this.startPoll();
        // Load default settings
        this.props.loadSettings();

    }

    startPoll() {
        const interval = (60 * 60 * 1000) + 20;
        this.props.pollMiner();
        setTimeout(() => {
            this.startPoll();
        }, interval);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <div className="d-flex align-items-stretch root-container">
                <div>
                    <Menu balance={ this.props.balance} currency={ this.props.currency } alias={ this.props.alias } logout={this.props.logout}/>
                </div>
                <div className="page" style={pageStyles}>
                    <div className="page-container">
                        <PageHeader />
                            <Switch>
                                <Route path={ this.props.match.url + '/miner'} component={Miner}/>
                                <Route path={ this.props.match.url + '/transactions'} component={Transactions}/>
                                <Route path={ this.props.match.url + '/withdraw'} component={Withdraw}/>
                                <Route path={ this.props.match.url + '/faqs'} component={Faq}/>
                                <Route path={ this.props.match.url + '/notifications'} component={Notifications}/>
                                <Route path={ this.props.match.url + '/settings'} component={Settings}/>
                                <Route path={ this.props.match.url + '/profit'} component={Profit}/>
                                <Route path={ this.props.match.url} component={Overview}/>
                            </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        balance: SettingsSelectors.selectAdjustedBalance(state),
        currency: SettingsSelectors.selectUserCurrency(state),
        miner: null,
        alias: SettingsSelectors.selectAlias(state),
        isPollingMiner: StartupSelectors.selectMinerPolling(state)
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