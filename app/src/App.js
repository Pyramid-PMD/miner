import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './styles/main.scss';

import StartupActions from './Redux/StartupRedux';
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

const AsyncStartUp = AsyncComponent(() => {
    return import("./pages/StartUp/StartUp");
});

class App extends Component {
    componentDidMount() {
        // this.props.checkAuthStatus();
    }

    render() {
        const routes = (
            <Switch>
                <Route path="/app-start-up" component={AsyncStartUp}/>
                <Route path="/alias" component={AsyncAlias}/>
                <Route path="/page-not-found" component={AsyncNotFound}/>
                <Route path="/dashboard" component={AsyncDashboard}/>
                <Route path="/register" component={AsyncRegister}/>
                <Route path="/login" component={AsyncLogin}/>
                <Route path="/qr-code-login" component={AsyncQrCodeLogin}/>
                <Redirect to="/app-start-up"/>
            </Switch>
        );
        // if (this.props.isAuthenticated) {
        //     routes = (
        //         <Switch>
        //             <Route path="/alias" component={AsyncAlias}/>
        //             <Route path="/page-not-found" component={AsyncNotFound}/>
        //             <Route path="/dashboard" component={AsyncDashboard}/>
        //             <Redirect from="/" to="/dashboard"/>
        //         </Switch>
        //     );
        // } else {
        //     routes = (
        //         <Switch>
        //             <Route path="/register" component={AsyncRegister}/>
        //             <Route path="/login" component={AsyncLogin}/>
        //             <Route path="/qr-code-login" component={AsyncQrCodeLogin}/>
        //             <Route path="/app-start-up" component={AsyncStartUp}/>
        //             <Redirect to="/app-start-up"/>
        //         </Switch>
        //     );
        // }
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
        isAuthenticated: state.qrCodeLogin.token !== null,
        user: state.qrCodeLogin.user,
        currentLanguage: 'cn',
        showLoading: LoadingIndicatorSelectors.selectLoadingIndicator(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);