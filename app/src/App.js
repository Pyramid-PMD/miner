import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './styles/main.scss';

import StartupActions from './Redux/StartupRedux';
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Register from "./pages/Register/Register";
// import Alias from "./pages/MinerAlias/Alias";
// import Login from "./pages/Login/Login";
// import NotFound from "./pages/NotFound/NotFound";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import { LoadingIndicatorSelectors } from "./components/LoadingIndicator/LoadingIndicatorRedux";
import AsyncComponent from './hoc/AsyncComponent';

const AsyncDashboard = AsyncComponent(() => {
    return import("./pages/Dashboard/Dashboard");
});

const AsyncRegister = AsyncComponent(() => {
    return import("./pages/Register/Register");
});

const AsyncAlias = AsyncComponent(() => {
    return import("./pages/MinerAlias/Alias");
});

const AsyncLogin = AsyncComponent(() => {
    return import("./pages/Login/Login");
});

const AsyncQrCodeLogin = AsyncComponent(() => {
    return import("./pages/QrCodeLogin/QrCodeLogin");
});

const AsyncNotFound = AsyncComponent(() => {
    return import("./pages/NotFound/NotFound");
});

class App extends Component {
    componentDidMount() {
        this.props.checkAuthStatus();
    }

    render() {
        let routes;
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/alias" component={AsyncAlias}/>
                    <Route path="/page-not-found" component={AsyncNotFound}/>
                    <Route path="/dashboard" component={AsyncDashboard}/>
                    <Redirect from="/" to="/dashboard"/>
                </Switch>
            );
        } else {
            routes = (
                <Switch>
                    <Route path="/register" component={AsyncRegister}/>
                    <Route path="/login" component={AsyncLogin}/>
                    <Route path="/qr-code-login" component={AsyncQrCodeLogin}/>
                    <Redirect to="/qr-code-login"/>
                </Switch>
            );
        }
        return (
            <div className={`${this.props.currentLanguage} full-height`}>
                <LoadingIndicator show={this.props.showLoading} />
                <ConnectedRouter history={this.props.history}>
                    {routes}
                </ConnectedRouter>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthStatus: () => dispatch(StartupActions.checkAuthStatus()),
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
        user: state.auth.user,
        currentLanguage: 'cn',
        showLoading: LoadingIndicatorSelectors.selectLoadingIndicator(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);