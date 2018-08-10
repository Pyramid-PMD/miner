import React from 'react';

const TransactionHistoryItem = (props) => {
    console.log('history component', props.transaction);
    const { transaction } = props;
    return (
        <tr>
            <td>{ transaction.addr }</td>
            <td>{ transaction.amount }</td>
            <td className={`${ transaction.status.value } text-right`}>{ transaction.status.title }</td>
        </tr>
    );
};

export default TransactionHistoryItem;