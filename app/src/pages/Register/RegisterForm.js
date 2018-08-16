import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { generateValidation } from 'redux-form-validation';
import FormMessages from 'redux-form-validation';
import { UncontrolledAlert } from 'reactstrap';
import { VerifyEmailSelectors } from './VerifyEmailRedux';


import RegisterActions, {RegisterSelectors} from './RegisterRedux';
import VerifyEmailActions from './VerifyEmailRedux';

import { connect } from 'react-redux';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class RegisterForm extends Component {

    handleSubmit = (values) => {
        const user = {
            ...values,
            trade_pwd: values.pwd,
            trade_pwd_repeat: values.pwd
        };
        this.props.register(user);
    }

    verifyEmail = () => {
        const { email, verifyEmail } = this.props;
        if (email) {
            verifyEmail(email);
        }
    };

    renderEmailErrors(meta, t) {
        return (
            <FormMessages tagName="ul" meta={meta} className="form-errors list-unstyled">
                <li when="email">
                    { t('auth:login:errors.wrongEmailFormat')}
                </li>
                <li when="required">
                    {t('auth:login.errors.emailRequired')}
                </li>
            </FormMessages>
        );
    }

    renderPasswordErrors(meta, t) {
        return (
            <FormMessages tagName="ul" meta={meta} className="form-errors list-unstyled">
                <li when="required">
                    {t('auth:login.errors.passwordRequired')}
                </li>

                <li when="minLength">
                    {t('auth:register.errors.passwordMinLength')}
                </li>

                <li when="maxLength">
                    {t('auth:register.errors.passwordMaxLength')}
                </li>
            </FormMessages>
        );
    }

    renderConfirmPasswordErrors(meta, t) {
        return (
            <FormMessages tagName="ul" meta={meta} className="form-errors list-unstyled">
                <li when="required">
                    {t('auth:login.errors.passwordRequired')}
                </li>

                <li when="matchField">
                    {t('auth:register.errors.passwordMismatch')}
                </li>
            </FormMessages>
        );
    }

    renderVerifyCodeErrors(meta, t) {
        return (
            <FormMessages tagName="ul" meta={meta} className="form-errors list-unstyled">
                <li when="required">
                    {t('auth:register.errors.enterValidCode')}
                </li>
            </FormMessages>
        );
    }

    showVerifiedEmailMessage(t) {
        if (this.props.isEmailVerified) {
            return (
                <UncontrolledAlert color="success">
                    {t('auth:register.emailVerifiedSuccess', { email: this.props.email })}
                </UncontrolledAlert>
            );
        }
    }

    renderErrors(input, meta, t) {
        switch (input.name) {
            case 'email':
                return this.renderEmailErrors(meta, t);
            case 'pwd':
                return this.renderPasswordErrors(meta, t);
            case 'pwd_repeat':
                return this.renderConfirmPasswordErrors(meta, t);
            case 'verify_code':
                return this.renderVerifyCodeErrors(meta, t);
        }
    }


    renderInputField = ({ input, label, type, placeholder, meta}) => {
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            <input
                                { ...input }
                                className="form-control form-field"
                                type={type}
                                placeholder={placeholder}
                            />
                            {this.renderErrors(input, meta, t)}
                        </div>
                    )
                }
            </I18n>

        );
    };

    renderCodeField = ({ input, label, type, placeholder, meta}) => {
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            <div className="form-group row">
                                <div className="col-10">
                                    <input
                                        { ...input }
                                        className="form-control form-field"
                                        type={type}
                                        placeholder={placeholder}
                                    />
                                </div>

                                <button type="button" className="btn col-2 form-link" onClick={this.verifyEmail}>{ t('auth:sendCode')}</button>
                            </div>
                            {
                                this.props.verified.error ? <div>{t('auth:register.errors.codeVerificationError')}</div> : null
                            }
                            {this.renderErrors(input, meta, t)}
                        </div>
                    )
                }
            </I18n>

        );
    };

    showErrorMessage() {
        return this.props.error ? <div className="error mb-4 alert alert-danger">{ this.props.error }</div> : null;
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            { this.showErrorMessage() }
                            { this.showVerifiedEmailMessage(t)}
                            <form onSubmit={handleSubmit(this.handleSubmit)} noValidate>
                                <div className="form-group">
                                    <Field
                                        name="email"
                                        type="email"
                                        component={ this.renderInputField }
                                        placeholder={ t('auth:email')}
                                    />
                                </div>


                                <Field
                                    name="verify_code"
                                    type="text"
                                    component={ this.renderCodeField }
                                    placeholder={ t('auth:code')}
                                />

                                <div className="form-group">
                                    <Field
                                        className="form-control form-field"
                                        name="pwd"
                                        type="password"
                                        component={this.renderInputField}
                                        placeholder={ t('auth:password')}
                                    />
                                </div>


                                <div className="form-group">
                                    <Field
                                        className="form-control form-field"
                                        name="pwd_repeat"
                                        type="password"
                                        component={this.renderInputField}
                                        placeholder={ t('auth:confirmPassword')}
                                    />
                                </div>

                                <div className="d-flex justify-content-center margin-bottom-10">
                                    <button type="submit" className="btn btn-primary form-button">
                                        { t('common:interface.next') }
                                    </button>
                                </div>
                                <p className="text-center">
                                    <span className="text-secondary margin-right-4">{ t('auth:haveAccount') }</span>
                                    <Link to="/login" className="form-link">{ t('auth:login.title') }</Link>
                                </p>
                            </form>
                        </div>
                    )
                }
            </I18n>
        );
    }
}

const validations = {
    email: {
        required: true,
        email: true,
        validateOnBlur: true,
    },
    verify_code: {
        required: true
    },
    pwd: {
        required: true,
        minLength: 6,
        maxLength: 15,
        // pattern: "^[a-zA-Z0-9]*$",
        validateOnBlur: true,
    },
    pwd_repeat: {
        required: true,
        matchField: 'pwd',
        validateOnBlur: true
    }

};
const mapDispatchToProps = (dispatch) => ({
    register: (user) => dispatch(RegisterActions.registerRequest(user)),
    verifyEmail: (email) => dispatch(VerifyEmailActions.verifyEmailRequest(email))
});

const mapStateToProps = (state) => {
    const selector = formValueSelector('registerForm');
    const email = selector(state, 'email');
    return {
        email,
        verified: state.verifyEmail,
        isEmailVerified: VerifyEmailSelectors.isVerified(state),
        error: RegisterSelectors.selectError(state)
    }
};


export default reduxForm({
    form: 'registerForm',
    // initialValues: {
    //     email: null,
    //     pwd: null,
    //     verify_code: null,
    //     pwd_repeat: null
    // },
    ...generateValidation(validations)
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));