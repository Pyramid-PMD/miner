import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import ChartTheme from './ChartTheme';
import getOptions from './MinerChartConfig';



class MinerChart extends Component  {
    chartInstance;
    option;
    componentWillMount() {
        this.option = getOptions();
        echarts.registerTheme('hashrate', ChartTheme);
    }

    componentDidMount() {
       this.drawChart(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.localChart) {
            if (this.props.localChart !== nextProps.localChart) {
                this.drawChart(nextProps)
            }
        }

    }

    drawChart = (props) => {
        if (props.localChart) {
            const { localChart, globalChart } = props;
            if (this.chartInstance) {
                this.option.xAxis.data = globalChart.time;
                // this.option.series[0].data = globalChart.hash;
                // this.option.series[1].data = localChart.hash;
                this.option.series[0].data = localChart.hash;
                this.chartInstance.setOption(this.option);
            }
        }
    }

    getChartInstance = (chart) => {
        if (chart) {
            console.log('chart', chart);
            this.chartInstance = chart.getEchartsInstance();
        }
    }


    render() {
        return (
            <ReactEcharts
                theme="hashrate"
                option={this.option}
                style={{height: '500px', width: '100%'}}
                ref={(e) => this.getChartInstance(e)}
            />

        );
    }
}

export default MinerChart;


