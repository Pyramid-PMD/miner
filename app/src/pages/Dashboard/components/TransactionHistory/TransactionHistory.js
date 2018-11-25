import React from 'react';
import _ from 'lodash';
import TransactionHistoryItem from "./TransactionHistoryItem";
import { I18n } from 'react-i18next';

const TransactionHistory = (props) => {
    const { transactionHistory } = props;
    const renderHistory = () => {
        return _.map(transactionHistory, (value, key) => {
            return (
                <I18n key={key}>
                    {
                        (t) => (
                            <tr className="has-separator">
                                <td>{ key }</td>
                                <td className="pr-0 pl-0 pb-0 pt-1">
                                    <table className="history-table">
                                        <thead>
                                        <tr>
                                            <th style={{width: '60%'}}>{ t('common:interface.address') }</th>
                                            <th style={{width: '10%'}} className="text-center">{ t('common:interface.amount') }</th>
                                            <th style={{width: '15%'}} className="text-center">{ t('common:interface.state') }</th>
                                            <th  style={{width: '15%'}}className="text-center">{ t('common:interface.fee') }</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            _.map(value, (item) => <TransactionHistoryItem transaction={item} key={item.create_at}/>)
                                        }
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        )
                    }
                </I18n>

            );
        });
    };

    return (
        <div className="table-responsive transaction-history">
            <table className="table">
                <tbody>
                { renderHistory()}
                </tbody>
            </table>
        </div>
    );

}

export default TransactionHistory;