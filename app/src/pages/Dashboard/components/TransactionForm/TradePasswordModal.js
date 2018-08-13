import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { generateValidation } from 'redux-form-validation';
import FormMessages from 'redux-form-validation';

class TradePasswordModal extends Component {
    submitHandler = (values) => {
        console.log('values', values);
        this.props.onTradePasswordEnter(values.trade_pwd);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submitHandler)} className="text-center container">
                <div className="field-underlined mb-5">
                    <Field
                        className="form-control"
                        component="input"
                        type="password"
                        placeholder="Enter trade password"
                        name="trade_pwd">
                    </Field>
                </div>
                <button className="btn form-button" type="submit">Done</button>
            </form>
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

