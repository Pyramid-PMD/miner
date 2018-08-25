import React, {Component} from 'react';
import { UncontrolledTooltip } from 'reactstrap';

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
        <div>
            <div className={`network-indicator d-flex align-items-center justify-content-center ${status}`} id="UncontrolledTooltipExample">
                { !this.state.online ?
                    <span className="diagonal">
                    </span> : null }
                <span className={`icon icon-miner d-flex align-items-center justify-content-center`}>
                </span>
            </div>
            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                { this.props.t('common:interface.netTest') }
            </UncontrolledTooltip>
        </div>

        );
    }
}

export default NetworkIndicator;