import React, { Component } from 'react';
import { connect } from 'react-redux';


import OverviewChart from "./OverviewChart";
import ExchangeIndex from "./ExchangeIndex";
import OverviewActions, { OverviewSelectors } from './OverviewRedux';
import { SettingsSelectors } from '../Settings/SettingsRedux';
import * as moment from "moment";

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getOverview();
    }

    render() {
        return (
            <div>
                <OverviewChart
                    miningProfit={this.props.miningProfit}
                    otherIncoming={this.props.otherIncoming}
                    balanceInSelectedCurrency={this.props.balanceInSelectedCurrency}
                    currency={this.props.currency}
                    pmdAll={this.props.pmdAll} />
                <ExchangeIndex exchangeIndex={ this.props.exchangeIndex } currency={this.props.currency}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        exchangeIndex: OverviewSelectors.selectExchangeIndex(state),
        miningProfit: OverviewSelectors.selectMiningProfit(state),
        otherIncoming: OverviewSelectors.selectOtherIncoming(state),
        pmdAll: OverviewSelectors.selectPmdAll(state),
        balanceInSelectedCurrency: SettingsSelectors.selectBalance(state),
        currency: SettingsSelectors.selectUserCurrency(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOverview: () => dispatch(OverviewActions.overviewRequest())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Overview);