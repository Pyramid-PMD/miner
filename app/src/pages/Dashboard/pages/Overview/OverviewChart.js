import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import ReactEcharts from 'echarts-for-react';

const OverviewChart = (props) => {
    // Blue: #537de7
    // Orange: #d88d71
    const renderChart = () => {
        const option = {
            backgroundColor: 'transparent',
            series: [
                {
                    name: 'Overview',
                    type:'pie',
                    radius : '80%',
                    center: ['50%', '50%'],
                    label: {
                        show: false
                    },
                    data:[
                        {
                            name:'mining profit',
                            value: props.miningProfit,
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#6087e7' // color at 0% position
                                    }, {
                                        offset: 1, color: '#2457e3' // color at 100% position 2457e3
                                    }]
                                },
                                shadowColor: 'rgba(47, 97, 229, 0.7)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20
                            },
                        },
                        {
                            name:'other incoming',
                            value: props.otherIncoming,
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#dba687' // color at 0% position
                                    }, {
                                        offset: 1, color: '#d56751' // color at 100% position
                                    }]
                                },
                                shadowColor: 'rgba(213, 117, 92, 0.7)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20
                            },
                        },

                    ],
                    roseType: 'radius'
                }
            ]
        };

        return (
            <ReactEcharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
               />
        );
    };

    const { pmdAll, miningProfit, otherIncoming, balanceInSelectedCurrency, currency} = props;
        return (
            <I18n>
                {
                    (t) => (
                        <section className="has-separator d-flex align-items-center">
                            <div className="flex-1">
                                {/*<img className="img-fluid" src="./assets/img/pages/overview/image-pie.png"/>*/}
                                { renderChart() }
                            </div>
                            <div className="flex-1 d-flex justify-content-end">
                                <div>
                                    <div className="has-separator">
                                        <p>
                                            <span className="number number-big margin-right-4">{ pmdAll }</span>
                                            <span className="text-small">PMD</span>
                                        </p>
                                        <p className="text-small text-secondary"><span className="margin-right-4">≈ { currency ? (currency.rate * pmdAll).toPrecision(5) : null }</span><span className="text-uppercase">{ currency ? currency.name : null }</span></p>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li>
                                            <p>
                                                <span className="number number-big">{ otherIncoming }</span><span className="margin-right-4">%</span>
                                                <span className="text-secondary text-small">
                                            {t('dashboard:overview.orange') + ': ' + t('dashboard:overview.otherIncoming') }
                                        </span>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span className="number number-big">{ miningProfit }</span><span className="margin-right-4">%</span>
                                                <span className="text-secondary text-small">
                                            {t('dashboard:overview.blue') + ': ' + t('dashboard:overview.miningProfit') }
                                        </span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </section>
                    )
                }
            </I18n>
        );
}

export default OverviewChart;