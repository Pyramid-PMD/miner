import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateValidation } from 'redux-form-validation';
import FormMessages from 'redux-form-validation';

import LoginActions, { LoginSelectors } from './LoginRedux';


class LoginForm extends Component {
    submitHandler = (values) => {
        this.props.login(values);
        // this.props.history.push("/alias");
    };

    renderInputField = ({ input, label, type, meta, placeholder}) => {
        return (
            <I18n>
                {
                    (t) => (
                        <div className="form-group">
                            <input
                                { ...input }
                                className="form-control form-field"
                                type={type}
                                placeholder={placeholder}
                            />
                            <FormMessages tagName="ul" meta={meta} className="form-errors list-unstyled">
                                <li when="required">
                                    {
                                        input.name === 'email'? t('auth:login.errors.emailRequired') : t('auth:login.errors.passwordRequired')
                                    }
                                </li>
                                <li when="email">
                                    { t('auth:login:errors.wrongEmailFormat')}
                                </li>
                            </FormMessages>
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
            <div>
                { this.showErrorMessage() }
                <form onSubmit={handleSubmit(this.submitHandler)} noValidate>
                    <I18n>
                        {
                            (t) => (
                                <div>
                                    <Field
                                        name="email"
                                        type="email"
                                        component={this.renderInputField}
                                        placeholder={ t('auth:email')}
                                    />

                                    <Field
                                        name="pwd"
                                        type="password"
                                        component={this.renderInputField}
                                        placeholder={ t('auth:password')}
                                    />
                                    <div className="d-flex justify-content-center margin-bottom-10">
                                        <button type="submit" className="btn btn-primary form-button">
                                            { t('common:interface.next') }
                                        </button>
                                    </div>
                                    <p className="text-center">
                                        <span className="text-secondary margin-right-4">{ t('auth:noAccount') }</span>
                                        <Link to="/register" className="form-link">{ t('auth:register.title') }</Link>
                                    </p>
                                </div>
                            )
                        }
                    </I18n>
                </form>
            </div>
        );
    }
}


const validations = {
    email: {
        required: true,
        email:true,
        validateOnBlur: true
    },
    pwd: {
        required: true,
        validateOnBlur: true
    }
};

const mapStateToProps = (state) => {
    return {
        loading: LoginSelectors.selectLoading(state),
        error: LoginSelectors.selectError(state),
        user: LoginSelectors.selectUser(state)
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (credentials) => dispatch(LoginActions.loginRequest(credentials))
});

export default withRouter(reduxForm({
    form: 'loginForm',
    ...generateValidation(validations)
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm)));