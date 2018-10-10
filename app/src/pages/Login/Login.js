import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import config from '../../config/app.config';
import AppLogo from "../../components/AppLogo/AppLogo";
import LoginForm from "./LoginForm";

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class Login extends Component {
    render() {
        return (
            <I18n>
            {
                (t) => (
                    <div className="page page-login full-height d-flex justify-content-center align-items-center" style={pageStyles}>
                        <div className="page-container">
                            <AppLogo />
                            <div className="form-container">
                                <p className="text-secondary">{t('auth:login.introText')}</p>
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

export default Login;