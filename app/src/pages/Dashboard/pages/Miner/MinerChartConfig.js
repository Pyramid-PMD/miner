import i18n from '../../../../config/i18n/i18next.client.config';

export default () => {
    return {
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:[ /*i18n.t('dashboard:miner.globalHashRate'),*/ i18n.t('dashboard:miner.localHashRate')],
            textStyle: {
                color: '#fff'
            }
        },
        xAxis : [
            {
                type : 'category',
                data : []
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                }
            },
            {
                type : 'value',
                show: false,
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : [
            // {
            //     name: i18n.t('dashboard:miner.globalHashRate'),
            //     type:'line',
            //     data: []
            // },
            {
                name: i18n.t('dashboard:miner.localHashRate'),
                type:'bar',
                data: []
            }

        ]
    };
}

