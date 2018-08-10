import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './styles/main.scss';

import StartupActions from './Redux/StartupRedux';
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Alias from "./pages/MinerAlias/Alias";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";


class App extends Component {
    componentDidMount() {
        console.log('Hello app')
        this.props.checkAuthStatus();
    }
    render() {
        let routes;
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/alias" component={Alias}/>
                    <Route path="/page-not-found" component={NotFound}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Redirect from="/" to="/dashboard"/>
                </Switch>
            );
        } else {
            routes = (
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Redirect to="/login"/>
                </Switch>
            );
        }
        return (
            <ConnectedRouter history={this.props.history}>
                {routes}
            </ConnectedRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthStatus: () => dispatch(StartupActions.checkAuthStatus())
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);