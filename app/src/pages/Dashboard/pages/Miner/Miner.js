import React, { Component } from 'react';
import { connect } from 'react-redux';
import MinerActions, { MinerSelectors} from './MinerRedux';
import MinerChart from "./MinerChart";
import { I18n } from "react-i18next";


class Miner extends Component {
    componentDidMount() {
        this.props.getMinerInfo();
        this.props.getMinerFuture();
    }

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            <MinerChart localChart={ this.props.localChart } globalChart={this.props.globalChart} />
                            { this.props.future ?
                                <p className="text-secondary text-center">
                                    {t('dashboard:miner.estimateIncoming')} <span className="number number-big text-primary">{this.props.future}</span> PMDC
                                </p> : null }
                        </div>
                    )
                }

            </I18n>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        loading: MinerSelectors.selectLoading(state),
        localChart: MinerSelectors.selectChart(state, 'chart_local'),
        globalChart: MinerSelectors.selectChart(state, 'chart_global'),
        future: MinerSelectors.selectFuture(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMinerInfo: () => dispatch(MinerActions.minerChartRequest()),
        getMinerFuture: () => dispatch(MinerActions.minerFutureRequest())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Miner);