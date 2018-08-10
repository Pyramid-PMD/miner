import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { connect } from 'react-redux';

import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";
import SendTransactionActions from '../../components/TransactionForm/SendTransactionRedux';
import WithdrawActions, { WithdrawSelectors } from './WithdrawRedux';

export class Withdraw extends Component {
    componentDidMount() {
        this.props.getOuterList();
    }

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            <TransactionForm
                                form="withdrawForm"
                                classes="withdrawal-form"
                                transactionType="outer"
                                sendTransaction={this.props.sendTransaction}/>

                            <TransactionHistory history={ this.props.history } />
                        </div>
                    )
                }
            </I18n>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        history: WithdrawSelectors.selectList(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOuterList: () => dispatch(WithdrawActions.outerListRequest()),
        sendTransaction: (transaction, type) => dispatch(SendTransactionActions.sendTransactionRequest(transaction, type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);