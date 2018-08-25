import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { I18n } from 'react-i18next';
import { connect } from 'react-redux';
import { DropdownList } from 'react-widgets';
import SettingsActions, { SettingsSelectors } from './SettingsRedux';
const languages = require('../../../../config/app.config').i18n.languages;


class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages
        };
        this.resetForm = this.resetForm.bind(this);
    }


    submitHandler = (values) => {
        this.props.saveSettings(values);
    };

    renderDropdownList ({ input, data, valueField, textField }) {
        return (<DropdownList {...input}
                      data={data}
                      className="drop-down-dark"
                      valueField={valueField}
                      textField={textField} />);
    }

    resetForm() {
        this.props.reset();
        this.props.cancelChangedSettings()
    }



    render() {
        const { handleSubmit } = this.props;
        return (
            <I18n>
                {
                    (t) => (
                        <form className="settings-form" onSubmit={handleSubmit(this.submitHandler)}>
                            <section>
                                <h2>{ t('dashboard:settings.mining') }</h2>
                                <div className="form-group row">
                                    <label className="col-form-label col-2 text-secondary text-small">{ t('common:interface.disk') }</label>
                                    <div className="col-6">
                                        <Field
                                            name="partition"
                                            className="drop-down-dark"
                                            component={this.renderDropdownList}
                                            data={this.props.driveList}
                                            valueField="value"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-2 text-secondary text-small">{ t('auth:alias.title') }</label>
                                    <div className="col-6">
                                        <Field
                                            className="form-control form-field"
                                            name="machine_name"
                                            type="text"
                                            component="input"
                                            defaultValue={ this.props.alias}
                                            placeholder={ t('auth:alias.title')}
                                        />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2>{ t('common:interface.currency') }</h2>
                                <div className="form-group row currency-drop-down">
                                    <label className="col-form-label col-2 text-secondary text-small">{ t('common:interface.currency') }</label>
                                    <div className="col-6">
                                        <Field
                                            name="currency"
                                            className="drop-down-dark"
                                            component={this.renderDropdownList}
                                            data={this.props.rates}
                                            textField="name"
                                        />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2>{ t('common:interface.ui') }</h2>
                                <div className="form-group row">
                                    <label className="col-form-label col-2 text-secondary text-small">{ t('common:interface.language') }</label>
                                    <div className="col-6">
                                        <Field
                                            name="language"
                                            className="drop-down-dark"
                                            component={this.renderDropdownList}
                                            data={this.state.languages}
                                            textField="title"
                                        />
                                    </div>
                                </div>
                            </section>

                            <div className="row offset-2 mt-4">
                                <div className="d-flex w-100 col-auto pl-1 settings-buttons">
                                    <button type="button"
                                            onClick={this.props.setDefaultSettings}
                                            className="btn button-calm mr-5">{ t('dashboard:settings.defaultSettings') }</button>
                                    <div className="ml-auto">
                                        <button type="submit" className="btn button-calm btn-primary mr-3">{ t('common:interface.save') }</button>
                                        <button type="button" className="btn button-calm btn-primary" onClick={this.resetForm }>{ t('common:interface.cancel') }</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    )
                }
            </I18n>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        alias: SettingsSelectors.selectAlias()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: () => dispatch(SettingsActions.userInfoRequest())
    }
};

SettingsForm = connect((state, ownProps) => {
    return {
        initialValues: ownProps.initialValues
    }
} )(SettingsForm);


export default reduxForm({
    form: 'settingsForm',
    enableReinitialize: true
})(SettingsForm);