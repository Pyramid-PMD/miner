import React, { Component } from 'react';
import { reduxForm, Field, change as changeFieldValue } from 'redux-form';
import { connect } from 'react-redux';
import { I18n } from 'react-i18next';
import {Combobox} from 'react-widgets';
import SendTransactionActions, { SendTransactionSelectors} from './SendTransactionRedux';
import {SettingsSelectors} from "../../pages/Settings/SettingsRedux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'react-widgets/dist/css/react-widgets.css';


class TransactionForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
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

    renderTradePasswordModal() {
        return (
        <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>

        );
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