import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { generateValidation } from 'redux-form-validation';
import FormMessages from 'redux-form-validation';
import { I18n } from 'react-i18next';

class TradePasswordModal extends Component {
    submitHandler = (values) => {
        this.props.onTradePasswordEnter(values.trade_pwd);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <I18n>
                {
                    (t) => (
                        <form onSubmit={handleSubmit(this.submitHandler)} className="text-center container">
                            <div className="field-underlined mb-5">
                                <Field
                                    className="form-control"
                                    component="input"
                                    type="password"
                                    placeholder={t('dashboard:tradePasswordModal.enterTradePassword')}
                                    name="trade_pwd">
                                </Field>
                            </div>
                            <button className="btn form-button submit-btn" type="submit">{t('common:interface.done')}</button>
                        </form>
                    )
                }

            </I18n>
        );
    }
}

const validations = {
    trade_pwd: {
        required: true
    }
};

TradePasswordModal = reduxForm({
    form: 'tradePassword',
    ...generateValidation(validations)
})(TradePasswordModal);

export default TradePasswordModal;

