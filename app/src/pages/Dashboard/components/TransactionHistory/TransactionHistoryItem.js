import React from 'react';

const TransactionHistoryItem = (props) => {
    const { transaction } = props;
    return (
        <tr>
            <td>{ transaction.addr }</td>
            <td>{ transaction.amount }</td>
            <td className={`${ transaction.statusName.value } text-right`}>{ transaction.statusName.title }</td>
        </tr>
    );
};

export default TransactionHistoryItem;