(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./app/src/pages/Dashboard/pages/Profit/Profit.js":
/*!********************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Profit/Profit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ \"./node_modules/react-tabs/esm/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _ProfitRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfitRedux */ \"./app/src/pages/Dashboard/pages/Profit/ProfitRedux.js\");\n/* harmony import */ var _ProfitChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfitChart */ \"./app/src/pages/Dashboard/pages/Profit/ProfitChart.js\");\n\n\n\n\n\n\n\n\nclass Profit extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(props) {\n        super(props);\n\n        this.onTabSelectHandler = tabIndex => {\n            this.props.getProfitChart(tabIndex);\n        };\n\n        this.updateChart = chart => {\n            console.log('chart', chart);\n        };\n\n        this.state = { tabIndex: 0 };\n    }\n    componentDidMount() {\n        this.props.getProfitChart(0);\n        console.log('chart', this.props.chart);\n    }\n\n    //0-Today 1-three days 2-seven days 3-one month 4-all\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    null,\n                    this.props.chart ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfitChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { data: this.props.chart }) : null\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"Tabs\"],\n                    { onSelect: this.onTabSelectHandler },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"TabList\"],\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"],\n                            null,\n                            '3 days'\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"],\n                            null,\n                            '7 days'\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"],\n                            null,\n                            '1 month'\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"],\n                            null,\n                            'All'\n                        )\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"TabPanel\"], null),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"TabPanel\"], null),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"TabPanel\"], null),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__[\"TabPanel\"], null)\n                )\n            )\n        );\n    }\n}\n\nconst mapStateToProps = state => {\n    return {\n        chart: _ProfitRedux__WEBPACK_IMPORTED_MODULE_4__[\"ProfitSelectors\"].selectChart(state)\n    };\n};\n\nconst mapDispatchToProps = dispatch => {\n    return {\n        getProfitChart: interval => dispatch(_ProfitRedux__WEBPACK_IMPORTED_MODULE_4__[\"default\"].profitChartRequest(interval))\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Profit));\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Profit/Profit.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/pages/Profit/ProfitChart.js":
/*!*************************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Profit/ProfitChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts-for-react */ \"./node_modules/echarts-for-react/lib/index.js\");\n/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts_for_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfitChartConfig */ \"./app/src/pages/Dashboard/pages/Profit/ProfitChartConfig.js\");\n\n\n\n\nclass ProfitChart extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.getChartInstance = chart => {\n            if (chart) {\n                this.chartInstance = chart.getEchartsInstance();\n            }\n        }, _temp;\n    }\n\n    componentDidMount() {\n        if (this.chartInstance) {\n            _ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].series[0].data = this.props.data.bonus;\n            _ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xAxis.data = this.props.data.date;\n            this.chartInstance.setOption(_ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        }\n    }\n\n    componentWillReceiveProps(nextProps) {\n        if (this.props.data !== nextProps.data) {\n            if (this.chartInstance) {\n                _ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].series[0].data = nextProps.data.bonus;\n                _ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xAxis.data = nextProps.data.date;\n                this.chartInstance.setOption(_ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            }\n        }\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(echarts_for_react__WEBPACK_IMPORTED_MODULE_1___default.a, { option: _ProfitChartConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"], ref: e => this.getChartInstance(e) });\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfitChart);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Profit/ProfitChart.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/pages/Profit/ProfitChartConfig.js":
/*!*******************************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Profit/ProfitChartConfig.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst option = {\n    textStyle: {\n        color: '#fff'\n    },\n    tooltip: {\n        trigger: 'axis',\n        position: function (pt) {\n            return [pt[0], '10%'];\n        }\n    },\n    xAxis: {\n        type: 'category',\n        show: true,\n        boundaryGap: false,\n        data: [],\n        axisLine: {\n            lineStyle: {\n                color: '#fff'\n            }\n        }\n    },\n    yAxis: {\n        type: 'value',\n        show: false,\n        boundaryGap: [0, '100%']\n    },\n    series: [{\n        name: 'profit',\n        type: 'line',\n        itemStyle: {\n            normal: {\n                color: '#41cff5'\n            }\n        },\n        areaStyle: {\n            normal: {\n                color: new echarts__WEBPACK_IMPORTED_MODULE_0___default.a.graphic.LinearGradient(0, 0, 0, 1, [{\n                    offset: 0,\n                    color: '#3a3d44'\n                }, {\n                    offset: 1,\n                    color: 'transparent'\n\n                }])\n            }\n        },\n        data: []\n    }]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (option);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Profit/ProfitChartConfig.js?");

/***/ })

}]);