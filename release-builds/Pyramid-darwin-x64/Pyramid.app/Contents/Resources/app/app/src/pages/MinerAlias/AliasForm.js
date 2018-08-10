import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AliasActions from './AliasRedux';

class AliasForm extends Component {
    submitHandler = (values) => {
        this.props.createAlias(values.alias);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            <form onSubmit={handleSubmit(this.submitHandler)}>
                                <div className="form-group">
                                    <Field
                                        className="form-control form-field"
                                        name="alias"
                                        type="text"
                                        component="input"
                                        placeholder={ t('auth:alias.title')}
                                    />
                                </div>
                                <div className="d-flex justify-content-center margin-bottom-10">
                                    <button type="submit" className="btn btn-primary form-button">
                                        { t('common:interface.next') }
                                    </button>
                                </div>
                                <p className="text-center">
                                    <Link to="/" className="form-link">{ t('common:interface.skip') }</Link>
                                </p>
                            </form>
                        </div>
                    )
                }
            </I18n>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    createAlias: (alias) => dispatch(AliasActions.aliasRequest(alias))
});

export default reduxForm({
    form: 'aliasForm'
})(withRouter(connect(null, mapDispatchToProps)(AliasForm)));