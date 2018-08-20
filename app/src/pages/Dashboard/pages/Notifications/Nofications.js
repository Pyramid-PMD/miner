import React, { Component } from 'react';
// import { NavLink, Switch, Route} from 'react-router-dom';
import { I18n } from 'react-i18next';
import { connect } from 'react-redux';

// import System from "./pages/System";
// import Transactions from "./pages/Transactions";
// import Withdraw from "./pages/Withdraw";
import NotificationActions, { NotificationSelectors } from './NotificationsRedux';
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
    componentDidMount() {
        this.props.getNotifications();
        this.addActiveLinks(0);
    }

    renderNotificationItems() {
        return this.props.notifications.map(notification => <NotificationItem notification={notification} key={notification.id}/>)
    }

    filterNotifications(category = 0) {
        // TODO: Search for a react way to do this
        this.addActiveLinks(category);
        this.props.filterNotifications(category);
    }

    addActiveLinks(category) {
        document.querySelectorAll(`.nav-item .btn`).forEach(el => el.classList.remove('active'));
        document.querySelector(`.btn.category-${category}`).classList.add('active');
    }

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div className="page-notifications">
                            <nav className="has-separator pb-4 mb-2">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <button className="btn btn-link category-0" onClick={this.filterNotifications.bind(this, 0)}>{ t('dashboard:notifications.system')}</button>
                                        {/*<NavLink  exact className="nav-link" to={`${this.props.match.url}`}>{ t('dashboard:notifications.system')}</NavLink>*/}
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-link category-1" onClick={this.filterNotifications.bind(this, 1)}>{ t('dashboard:notifications.transactions')}</button>
                                        {/*<NavLink  exact className="nav-link"  to={`${this.props.match.url}/transactions`}>{ t('dashboard:notifications.transactions')}</NavLink>*/}
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-link category-2" onClick={this.filterNotifications.bind(this, 2)}>{ t('dashboard:notifications.withdraw')}</button>
                                        {/*<NavLink  exact className="nav-link"  to={`${this.props.match.url}/withdraw`}>{ t('dashboard:notifications.withdraw')}</NavLink>*/}
                                    </li>
                                </ul>
                            </nav>
                            <div>
                                {
                                    this.props.filtered && this.props.filtered.length > 0 ?
                                        <table>
                                            <tbody>
                                            { this.renderNotificationItems() }
                                            </tbody>
                                        </table>
                                    : !this.props.loading ? <div>{ t('dashboard:notifications.noNotifications')}</div> : null

                                }


                                {/*<div>*/}
                                    {/*<Switch>*/}
                                        {/*<Route path={`${this.props.match.url}`} component={System} exact/>*/}
                                        {/*<Route path={`${this.props.match.url}/transactions`} component={Transactions}/>*/}
                                        {/*<Route path={`${this.props.match.url}/withdraw`} component={Withdraw}/>*/}
                                    {/*</Switch>*/}
                                {/*</div>*/}
                            </div>

                        </div>
                    )
                }
            </I18n>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.notifications.loading,
        notifications: NotificationSelectors.selectNotifications(state),
        filtered: NotificationSelectors.selectFiltered(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: () => dispatch(NotificationActions.notificationRequest()),
        filterNotifications: (category) => dispatch(NotificationActions.filterNotifications(category)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);