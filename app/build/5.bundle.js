(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./app/src/components/AppLogo/AppLogo.js":
/*!***********************************************!*\
  !*** ./app/src/components/AppLogo/AppLogo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app.config */ \"./app/src/config/app.config.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_app_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst AppLogo = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n        null,\n        t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'app-logo' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _config_app_config__WEBPACK_IMPORTED_MODULE_2___default.a.brand.logo, alt: 'App logo' }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'p',\n                { className: 'text-uppercase text-center' },\n                _config_app_config__WEBPACK_IMPORTED_MODULE_2___default.a.brand.name\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLogo);\n\n//# sourceURL=webpack:///./app/src/components/AppLogo/AppLogo.js?");

/***/ }),

/***/ "./app/src/components/IconButton/IconButton.js":
/*!*****************************************************!*\
  !*** ./app/src/components/IconButton/IconButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst IconButton = ({ name }) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"button\",\n        { className: \"icon-button text-secondary d-flex align-items-center justify-content-center\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: `icon icon-${name} d-flex align-items-center justify-content-center` })\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconButton);\n\n//# sourceURL=webpack:///./app/src/components/IconButton/IconButton.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/Dashboard.js":
/*!**********************************************!*\
  !*** ./app/src/pages/Dashboard/Dashboard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Menu/Menu */ \"./app/src/pages/Dashboard/components/Menu/Menu.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/app.config */ \"./app/src/config/app.config.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_app_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PageHeader/PageHeader */ \"./app/src/pages/Dashboard/components/PageHeader/PageHeader.js\");\n/* harmony import */ var _hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hoc/AsyncComponent */ \"./app/src/hoc/AsyncComponent.js\");\n/* harmony import */ var _pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Settings/SettingsRedux */ \"./app/src/pages/Dashboard/pages/Settings/SettingsRedux.js\");\n/* harmony import */ var _Redux_StartupRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Redux/StartupRedux */ \"./app/src/Redux/StartupRedux.js\");\n/* harmony import */ var _Login_LoginRedux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Login/LoginRedux */ \"./app/src/pages/Login/LoginRedux.js\");\n\n\n\n\n// import Overview from \"./pages/Overview/Overview\";\n// import Transactions from \"./pages/Transactions/Transactions\";\n// import Miner from \"./pages/Miner/Miner\";\n// import Withdraw from \"./pages/Withdraw/Withdraw\";\n// import Faq from \"./pages/Faq/Faq\";\n// import Settings from \"./pages/Settings/Settings\";\n// import Profit from \"./pages/Profit/Profit\";\n\n// import Notifications from \"./pages/Notifications/Nofications\";\n\n\n\n\n\nconst AsyncOverview = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./pages/Overview/Overview */ \"./app/src/pages/Dashboard/pages/Overview/Overview.js\")));\nconst AsyncTransactions = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(19), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./pages/Transactions/Transactions */ \"./app/src/pages/Dashboard/pages/Transactions/Transactions.js\")));\nconst AsyncMiner = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./pages/Miner/Miner */ \"./app/src/pages/Dashboard/pages/Miner/Miner.js\")));\nconst AsyncWithdraw = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./pages/Withdraw/Withdraw */ \"./app/src/pages/Dashboard/pages/Withdraw/Withdraw.js\")));\nconst AsyncFaq = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(20), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./pages/Faq/Faq */ \"./app/src/pages/Dashboard/pages/Faq/Faq.js\")));\nconst AsyncSettings = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ./pages/Settings/Settings */ \"./app/src/pages/Dashboard/pages/Settings/Settings.js\")));\nconst AsyncProfit = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(18), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ./pages/Profit/Profit */ \"./app/src/pages/Dashboard/pages/Profit/Profit.js\")));\nconst AsyncNotifications = Object(_hoc_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(() => __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./pages/Notifications/Notifications */ \"./app/src/pages/Dashboard/pages/Notifications/Notifications.js\")));\n\n\n\n\n\nconst pageStyles = {\n    backgroundImage: `url(${_config_app_config__WEBPACK_IMPORTED_MODULE_4___default.a.brand.pageBg})`\n};\n\nclass Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    //TODO: Use redux-observable in polling miner\n    componentWillMount() {\n        this.startPoll();\n        // Load default settings\n        this.props.loadSettings();\n    }\n\n    startPoll() {\n        const interval = 60 * 60 * 1000 + 20;\n        this.props.pollMiner();\n        setTimeout(() => {\n            this.startPoll();\n        }, interval);\n    }\n\n    componentWillUnmount() {\n        clearTimeout(this.timeout);\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'd-flex align-items-stretch root-container' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    balance: this.props.balance,\n                    adjustedBalance: this.props.adjustedBalance,\n                    currency: this.props.currency,\n                    alias: this.props.alias, logout: this.props.logout })\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'page', style: pageStyles },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'page-container' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url + '/miner', component: AsyncMiner }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url + '/transactions', component: AsyncTransactions }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url + '/withdraw', component: AsyncWithdraw }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url + '/faqs', component: AsyncFaq }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url + '/notifications', component: AsyncNotifications }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url + '/settings', component: AsyncSettings }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url + '/profit', component: AsyncProfit }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: this.props.match.url, component: AsyncOverview })\n                    )\n                )\n            )\n        );\n    }\n}\n\nconst mapStateToProps = state => {\n    return {\n        balance: _pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_7__[\"SettingsSelectors\"].selectBalance(state),\n        adjustedBalance: _pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_7__[\"SettingsSelectors\"].selectAdjustedBalance(state),\n        currency: _pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_7__[\"SettingsSelectors\"].selectUserCurrency(state),\n        miner: null,\n        alias: _pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_7__[\"SettingsSelectors\"].selectAlias(state),\n        isPollingMiner: _Redux_StartupRedux__WEBPACK_IMPORTED_MODULE_8__[\"StartupSelectors\"].selectMinerPolling(state)\n    };\n};\n\nconst mapDispatchToProps = dispatch => {\n    return {\n        loadSettings: () => dispatch(_pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loadDefaultSettings()),\n        loadUser: () => dispatch(_pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_7__[\"default\"].userInfoRequest()),\n        pollMiner: () => dispatch(_Redux_StartupRedux__WEBPACK_IMPORTED_MODULE_8__[\"default\"].pollMinerRequest()),\n        logout: () => dispatch(_Login_LoginRedux__WEBPACK_IMPORTED_MODULE_9__[\"default\"].logoutRequest())\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Dashboard));\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/Dashboard.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/Menu/Menu.js":
/*!*********************************************************!*\
  !*** ./app/src/pages/Dashboard/components/Menu/Menu.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ \"./app/src/pages/Dashboard/components/Menu/MenuItem.js\");\n/* harmony import */ var _MenuHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuHeader */ \"./app/src/pages/Dashboard/components/Menu/MenuHeader.js\");\n/* harmony import */ var _MenuFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuFooter */ \"./app/src/pages/Dashboard/components/Menu/MenuFooter.js\");\n\n\n\n\n\n\nconst Menu = props => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n        null,\n        t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'nav',\n            { className: 'main-menu d-flex flex-column' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { balance: props.balance, adjustedBalance: props.adjustedBalance, currency: props.currency })\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'main-menu-links' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'ul',\n                    { className: 'list-unstyled' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:overview'), url: '/dashboard', exact: true, icon: 'overview' })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:transactions'), url: '/dashboard/transactions', icon: 'transactions' })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:miner'), url: '/dashboard/miner', icon: 'miner' })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:profit'), url: '/dashboard/profit', icon: 'profit' })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:withdraw'), url: '/dashboard/withdraw', icon: 'withdraw' })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:notifications'), url: '/dashboard/notifications', icon: 'notification' })\n                    )\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'ul',\n                    { className: 'list-unstyled' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:settings'), url: '/dashboard/settings', icon: 'setting' })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: t('menu:faqs'), url: '/dashboard/faqs', icon: 'faq' })\n                    )\n                )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { style: { marginTop: 'auto' } },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { alias: props.alias, logout: props.logout })\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/Menu/Menu.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/Menu/MenuFooter.js":
/*!***************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/Menu/MenuFooter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n\n\n\n\nconst MenuFooter = ({ alias, logout }) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"I18n\"],\n        null,\n        t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'text-small d-flex align-items-center justify-content-center' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                { className: 'text-secondary text-capitalize mr-1' },\n                t('auth:alias.title'),\n                ': ',\n                alias\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'button',\n                { className: 'btn form-link form-link-small', onClick: logout },\n                t('common:interface.logout')\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuFooter);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/Menu/MenuFooter.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/Menu/MenuHeader.js":
/*!***************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/Menu/MenuHeader.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/AppLogo/AppLogo */ \"./app/src/components/AppLogo/AppLogo.js\");\n\n\n\nconst MenuHeader = props => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"main-menu-header text-center\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"p\",\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"span\",\n                { className: \"margin-right-4 number\" },\n                props.balance\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"span\",\n                { className: \"text-uppercase\" },\n                \"PMD\"\n            )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"p\",\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"span\",\n                { className: \"margin-right-4 number\" },\n                \"\\u2248\",\n                props.adjustedBalance\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"span\",\n                { className: \"text-uppercase\" },\n                props.currency ? props.currency.name : null\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuHeader);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/Menu/MenuHeader.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/Menu/MenuItem.js":
/*!*************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/Menu/MenuItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\n\n\nconst MenuItem = ({ icon, url, title, exact }) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"],\n        { to: url, className: 'main-menu-item', exact: exact },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'd-flex align-items-center' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: `icon icon-${icon}` }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                title\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItem);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/Menu/MenuItem.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/NetworkIndicator/NetworkIndicator.js":
/*!*********************************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/NetworkIndicator/NetworkIndicator.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n\n\n\nclass NetworkIndicator extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.state = {\n            online: false\n        }, _temp;\n    }\n\n    checkNetworkStatus() {\n        this.setState({ online: navigator.onLine });\n        window.addEventListener('offline', e => {\n            this.setState({ online: false });\n        });\n        window.addEventListener('online', e => {\n            this.setState({ online: true });\n        });\n    }\n\n    componentDidMount() {\n        this.checkNetworkStatus();\n    }\n\n    render() {\n        const status = this.state.online ? 'online' : 'offline';\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: `network-indicator d-flex align-items-center justify-content-center ${status}`, id: 'UncontrolledTooltipExample' },\n                !this.state.online ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: 'diagonal' }) : null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: `icon icon-miner d-flex align-items-center justify-content-center` })\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"UncontrolledTooltip\"],\n                { placement: 'right', target: 'UncontrolledTooltipExample' },\n                this.props.t('common:interface.netTest')\n            )\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NetworkIndicator);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/NetworkIndicator/NetworkIndicator.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/PageHeader/PageHeader.js":
/*!*********************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/PageHeader/PageHeader.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/IconButton/IconButton */ \"./app/src/components/IconButton/IconButton.js\");\n/* harmony import */ var _NetworkIndicator_NetworkIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NetworkIndicator/NetworkIndicator */ \"./app/src/pages/Dashboard/components/NetworkIndicator/NetworkIndicator.js\");\n\n\n\n\n\nconst PageHeader = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n        null,\n        t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'header',\n            { className: 'has-separator page-header d-flex justify-content-between' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'h1',\n                    { className: 'text-uppercase' },\n                    t('common:brand.name')\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'p',\n                    { className: 'text-secondary' },\n                    t('common:brand.slogan')\n                )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NetworkIndicator_NetworkIndicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { t: t })\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageHeader);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/PageHeader/PageHeader.js?");

/***/ })

}]);