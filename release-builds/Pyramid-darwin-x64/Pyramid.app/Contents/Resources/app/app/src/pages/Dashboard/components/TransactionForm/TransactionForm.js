import React, { Component } from 'react';
import { reduxForm, Field, change as changeFieldValue } from 'redux-form';
import { connect } from 'react-redux';
import { I18n } from 'react-i18next';
import {Combobox} from 'react-widgets';
import SendTransactionActions, { SendTransactionSelectors} from './SendTransactionRedux';
// import 'react-widgets/dist/css/react-widgets.css';
import {SettingsSelectors} from "../../pages/Settings/SettingsRedux";

class TransactionForm extends Component {

    componentDidMount() {
        this.props.getAddressList();
    }

    // TODO: Save address to local storage
    submitHandler = (values) => {
        const transaction = { ...values, trade_pwd: 'final30788'};
        this.props.sendTransaction(transaction, this.props.transactionType);
    }

    setMax = () => {
        this.props.change('amount', this.props.balance);
    }

    renderComboBoxList ({ input, data, valueField, textField, placeholder }) {
        return (<Combobox {...input}
                              data={data}
                              valueField={valueField}
                              placeholder={placeholder}
                              textField={textField} />);
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <I18n>
                {
                    (t) => (
                        <form onSubmit={handleSubmit(this.submitHandler)} className={`has-separator transaction-form ${this.props.classes}`}>
                            <div>
                                <Field
                                    className="address-dropdown margin-bottom-16"
                                    name="to_addr"
                                    component={Combobox}
                                    filter="startsWith"
                                    messages={{
                                        emptyList: t('dashboard:transaction.noSavedAddresses'),
                                        emptyFilter: t('dashboard:transaction.addressNotfound'),
                                    }}
                                    placeholder={t('dashboard:transaction.enterWalletAddress')}
                                    data={this.props.addressList}
                                />
                            </div>
                            <div className="form-row align-items-stretch m-0">
                                <div className="flex-grow-1 mr-2 d-flex justify-content-between align-items-end field-underlined">
                                    <Field
                                        className="form-control"
                                        component="input"
                                        name="amount">
                                    </Field>
                                    <button onClick={this.setMax} type="button">{ t('common:interface.max')}</button>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary submit-btn">
                                    {this.props.transactionType === 'outer' ?  t('common:interface.withdraw') : t('common:interface.send')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )
                }
            </I18n>
        );
    }
}

// const validations = {
//     to_addr: {
//         required: true
//     },
//     amount: {
//         required: true
//     }
// };

const mapStateToProps = (state) => {
    return {
        addressList: SendTransactionSelectors.selectAddressList(state),
        balance: SettingsSelectors.selectBalance(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAddressList: () => dispatch(SendTransactionActions.getSavedAddressList()),
        // changeFormField: (form, field, value) => {dispatch(changeFieldValue(form, field, value))}
    }
};

TransactionForm = reduxForm({
    initialValues: {
        to_addr: '0x863D0C461818D74D7012443E362DC21B7E4A9C52',
        amount: '1'
    }
})(TransactionForm);



TransactionForm = connect(mapStateToProps, mapDispatchToProps)(TransactionForm);


export default TransactionForm;