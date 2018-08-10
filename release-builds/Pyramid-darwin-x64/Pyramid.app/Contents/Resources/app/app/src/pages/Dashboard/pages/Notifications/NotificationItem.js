import React from 'react';

const NotificationItem = (props) => {
    const { notification } = props;
    return (
        <tr className="has-separator notification-item">
            <td className="pb-4 pt-4"><span className="number mr-1">{ notification.day }</span><span className="text-small">{ notification.month }</span></td>
            <td className="pb-4 pt-4">
                <p className="text-secondary text-small">{ notification.title }</p>
                <p>{ notification.content }</p>
            </td>
        </tr>
    );
};

export default NotificationItem;