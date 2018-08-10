import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import config from '../../config/app.config';
import AppLogo from "../../components/AppLogo/AppLogo";
import { connect } from 'react-redux';
import LoginForm from "./LoginForm";

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class Login extends Component {
    login() {

    }
    render() {
        return (
            <I18n>
            {
                (t) => (
                    <div className="page page-login full-height d-flex justify-content-center align-items-center" style={pageStyles}>
                        <div className="page-container">
                            <AppLogo />
                            <div className="form-container">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                 )
            }
            </I18n>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.login
    }
}

export default connect(mapStateToProps, {})(Login);