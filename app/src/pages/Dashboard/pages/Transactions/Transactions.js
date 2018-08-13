import React, { Component } from 'react';
import Wallet from "./Wallet";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";
import { connect } from 'react-redux';
import TransactionActions, { TransactionSelectors} from './TransactionRedux';
import SendTransactionActions from '../../components/TransactionForm/SendTransactionRedux';

class Transactions extends Component {
    componentDidMount() {
        this.props.getTransaction();
    }

    render() {
        return (
            <div>
                <Wallet address={ this.props.address } balance={ this.props.balance }/>
                <TransactionForm
                    form="transactionForm"
                    transactionType="inner"
                    sendTransaction={this.props.sendTransaction}/>
                <TransactionHistory transactionHistory={ this.props.transactionHistory }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        address: TransactionSelectors.selectWalletAddress(state),
        balance: TransactionSelectors.selectBalance(state),
        transactionHistory: TransactionSelectors.selectHistory(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTransaction: () => dispatch(TransactionActions.transactionRequest()),
        sendTransaction: (transaction, type) => dispatch(SendTransactionActions.sendTransactionRequest(transaction, type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);