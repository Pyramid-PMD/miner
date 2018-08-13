import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'
import { I18n } from "react-i18next";

import ProfitActions, { ProfitSelectors } from './ProfitRedux';
import ProfitChart from "./ProfitChart";



class Profit extends Component {
    constructor(props) {
       super(props) ;
       this.state = { tabIndex: 0 };
    }
    componentDidMount() {
        this.props.getProfitChart(0);
        console.log('chart', this.props.chart);
    }

    onTabSelectHandler = (tabIndex) => {
        this.props.getProfitChart(tabIndex);
    }

    updateChart = (chart) => {
        console.log('chart', chart);
    }

    //0-Today 1-three days 2-seven days 3-one month 4-all

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div>
                            {/*<img className="img-fluid" src="./assets/img/pages/profit.jpg"/>*/}
                            <div>
                                { this.props.chart ? <ProfitChart data={this.props.chart}/> : null }
                            </div>
                            <Tabs onSelect={this.onTabSelectHandler}>
                                <TabList>
                                    {/*<Tab>Today</Tab>*/}
                                    <Tab>3 days</Tab>
                                    <Tab>7 days</Tab>
                                    <Tab>1 month</Tab>
                                    <Tab>All</Tab>
                                </TabList>
                                {/*<TabPanel></TabPanel>*/}
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                            </Tabs>
                        </div>
                    )
                }

            </I18n>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        chart: ProfitSelectors.selectChart(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProfitChart: (interval) => dispatch(ProfitActions.profitChartRequest(interval))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profit);