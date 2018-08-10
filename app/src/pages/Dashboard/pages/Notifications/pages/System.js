import React, {Component} from 'react';
import NotificationItem from "../NotificationItem";

class System extends Component {
    renderNotifications() {
        const notifications = [
            {
                "date": "10 Jun",
                "title": "Notification 1",
                "body": "Notification 1 body"
            },
            {
                "date": "2 Jun",
                "title": "Notification 2",
                "body": "Notification 2 body"
            }
        ];

        return notifications.map(notification => <NotificationItem notification={notification} key={notification.title}/>)

    }
    render() {
        return(
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                     { this.renderNotifications()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default System;