import React from 'react';

const NotificationItem = (props) => {
    const { notification } = props;
    return (
        <tr className="has-separator notification-item">
            <td className="pb-4 pt-4"><span className="number number-big mr-1">{ notification.day }</span><span>{ notification.month }</span></td>
            <td className="pb-4 pt-4" style={{width: '100%'}}>
                <p className="text-secondary">{ notification.title }</p>
                <p className="content">{ notification.content }</p>
            </td>
        </tr>
    );
};

export default NotificationItem;