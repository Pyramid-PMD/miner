import React, { Component } from 'react';
import { reduxForm, Field, change as changeFieldValue } from 'redux-form';
import { connect } from 'react-redux';
import { I18n } from 'react-i18next';
import {Combobox} from 'react-widgets';
import { generateValidation } from 'redux-form-validation';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormMessages from 'redux-form-validation';

import SendTransactionActions, { SendTransactionSelectors} from './SendTransactionRedux';
import {SettingsSelectors} from "../../pages/Settings/SettingsRedux";
import TradePasswordModal from "./TradePasswordModal";
// import 'react-widgets/dist/css/react-widgets.css';


class TransactionForm extends Component {
    trade_pwd = null;
    transaction = {};

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.props.getAddressList();
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    // TODO: Save address to local storage
    submitHandler = (values) => {
        if (!this.trade_pwd) {
            this.transaction = { ...values };
            this.toggle();
        } else {
            this.transaction = { ...values, trade_pwd: this.trade_pwd};
            this.props.sendTransaction(this.transaction, this.props.transactionType);
        }
    }

    onTradePasswordHandler = (trade_pwd) => {
        this.toggle();
        this.trade_pwd = trade_pwd;
        this.transaction.trade_pwd = trade_pwd;
        console.log(this.transaction);
        this.submitHandler(this.transaction);
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

    renderTradePasswordModal() {
        return (
        <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="trade-pwd-modal">
                <ModalHeader toggle={this.toggle}></ModalHeader>
                <ModalBody>
                    <TradePasswordModal onTradePasswordEnter={this.onTradePasswordHandler} />
                </ModalBody>
            </Modal>
        </div>

        );
    }


    showErrorMessage() {
        if (this.props.sendError) {
            this.trade_pwd = null;
            this.transaction.trade_pwd = null;
            return <div className="error mb-4 alert alert-danger">{ this.props.sendError }</div>
        }
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            { this.showErrorMessage() }

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
                            { this.renderTradePasswordModal()}
                        </div>
                    )
                }
            </I18n>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        addressList: SendTransactionSelectors.selectAddressList(state),
        balance: SettingsSelectors.selectBalance(state),
        sendError: SendTransactionSelectors.selectError(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAddressList: () => dispatch(SendTransactionActions.getSavedAddressList()),
        // changeFormField: (form, field, value) => {dispatch(changeFieldValue(form, field, value))}
    }
};

const validations = {
    to_addr: {
        required: true
    },
    amount: {
        required: true
    }
};

TransactionForm = reduxForm({
    initialValues: {
        to_addr: null,
        amount: '0'
    },
    ...generateValidation(validations)
})(TransactionForm);



TransactionForm = connect(mapStateToProps, mapDispatchToProps)(TransactionForm);


export default TransactionForm;