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
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>{ t('common:interface.address') }</th>
                                            <th>{ t('common:interface.amount') }</th>
                                            <th className="text-center">{ t('common:interface.state') }</th>
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
            <table className="history-table table">
                <tbody>
                { renderHistory()}
                </tbody>
            </table>
        </div>
    );

}

export default TransactionHistory;