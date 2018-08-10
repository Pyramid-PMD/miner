import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import config from '../../config/app.config';
import AppLogo from "../../components/AppLogo/AppLogo";
import { connect } from 'react-redux';
import RegisterForm from "./RegisterForm";

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class Register extends Component {
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div className="page page-register full-height" style={pageStyles}>
                            <div className="page-container">
                                <AppLogo />
                                <h2 className="text-center text-capitalize">{ t('auth:register.title') }</h2>
                                <div className="form-container">
                                    <p className="text-secondary">{ t('auth:register.introText') }</p>
                                    <RegisterForm />
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

export default connect(mapStateToProps, {})(Register);