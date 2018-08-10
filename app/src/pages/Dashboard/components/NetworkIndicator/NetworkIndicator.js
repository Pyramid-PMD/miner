import React, {Component} from 'react';

class NetworkIndicator extends Component {
    state = {
        online: false
    };

    checkNetworkStatus() {
        this.setState({online: navigator.onLine});
        window.addEventListener('offline', (e) => {
            this.setState({online: false});
        });
        window.addEventListener('online', (e) => {
            this.setState({online: true });
        });
    }

    componentDidMount() {
        this.checkNetworkStatus();
    }

    render() {
        const status = this.state.online ? 'online' : 'offline';
        return (
            <div className={`network-indicator d-flex align-items-center justify-content-center ${status}`}>
                { !this.state.online ?
                    <span className="diagonal">
                    </span> : null }
                <span className={`icon icon-miner d-flex align-items-center justify-content-center`}>
                </span>
            </div>
        );
    }
}

export default NetworkIndicator;