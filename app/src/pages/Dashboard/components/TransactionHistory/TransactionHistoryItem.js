import React from 'react';

const TransactionHistoryItem = (props) => {
    const { transaction } = props;
    return (
        <tr>
            <td>{ transaction.addr }</td>
            <td className="text-center">{ transaction.amount }</td>
            <td className={`${ transaction.statusName.value } text-center`}>{ transaction.statusName.title }</td>
            <td className="text-center">{ transaction.fee } <span className="text-small">PMD</span></td>
        </tr>
    );
};

export default TransactionHistoryItem;