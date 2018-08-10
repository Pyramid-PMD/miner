import echarts from 'echarts';

const option = {
    textStyle: {
        color: '#fff'
    },
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    xAxis: {
        type: 'category',
        show: true,
        boundaryGap: false,
        data: [],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        show: false,
        boundaryGap: [0, '100%']
    },
    series: [
        {
            name: 'profit',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#41cff5'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3a3d44'
                    }, {
                        offset: 1,
                        color: 'transparent'

                    }])
                }
            },
            data: []
        }
    ]
};

export default option;