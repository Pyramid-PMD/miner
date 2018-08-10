import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import option from './ProfitChartConfig';

class ProfitChart extends Component {
   chartInstance;

   componentDidMount() {
       if (this.chartInstance) {
           option.series[0].data = this.props.data.bonus;
           option.xAxis.data = this.props.data.date;
           this.chartInstance.setOption(option);
       }
   }

   getChartInstance = (chart) => {
      if (chart) {
          this.chartInstance = chart.getEchartsInstance();
      }
   }


    componentWillReceiveProps(nextProps) {
       if (this.props.data !== nextProps.data) {
           if (this.chartInstance) {
               option.series[0].data = nextProps.data.bonus;
               option.xAxis.data = nextProps.data.date;
               this.chartInstance.setOption(option);
           }
       }
    }

   render() {
       return (
           <ReactEcharts option={option} ref={(e) => this.getChartInstance(e)}/>
       );
   }

}

export default ProfitChart;