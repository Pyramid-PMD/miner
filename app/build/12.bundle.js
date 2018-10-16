(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./app/src/pages/Dashboard/pages/Transactions/Transactions.js":
/*!********************************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Transactions/Transactions.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wallet */ \"./app/src/pages/Dashboard/pages/Transactions/Wallet.js\");\n/* harmony import */ var _components_TransactionForm_TransactionForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TransactionForm/TransactionForm */ \"./app/src/pages/Dashboard/components/TransactionForm/TransactionForm.js\");\n/* harmony import */ var _components_TransactionHistory_TransactionHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TransactionHistory/TransactionHistory */ \"./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistory.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TransactionRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionRedux */ \"./app/src/pages/Dashboard/pages/Transactions/TransactionRedux.js\");\n/* harmony import */ var _components_TransactionForm_SendTransactionRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TransactionForm/SendTransactionRedux */ \"./app/src/pages/Dashboard/components/TransactionForm/SendTransactionRedux.js\");\n\n\n\n\n\n\n\n\nclass Transactions extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    componentDidMount() {\n        this.props.getTransaction();\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"div\",\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { address: this.props.address, balance: this.props.balance }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TransactionForm_TransactionForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                form: \"transactionForm\",\n                transactionType: \"inner\",\n                sendTransaction: this.props.sendTransaction }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TransactionHistory_TransactionHistory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { transactionHistory: this.props.transactionHistory })\n        );\n    }\n}\n\nconst mapStateToProps = state => {\n    return {\n        address: _TransactionRedux__WEBPACK_IMPORTED_MODULE_5__[\"TransactionSelectors\"].selectWalletAddress(state),\n        balance: _TransactionRedux__WEBPACK_IMPORTED_MODULE_5__[\"TransactionSelectors\"].selectBalance(state),\n        transactionHistory: _TransactionRedux__WEBPACK_IMPORTED_MODULE_5__[\"TransactionSelectors\"].selectHistory(state)\n    };\n};\n\nconst mapDispatchToProps = dispatch => {\n    return {\n        getTransaction: () => dispatch(_TransactionRedux__WEBPACK_IMPORTED_MODULE_5__[\"default\"].transactionRequest()),\n        sendTransaction: (transaction, type) => dispatch(_components_TransactionForm_SendTransactionRedux__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sendTransactionRequest(transaction, type))\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Transactions));\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Transactions/Transactions.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/pages/Transactions/Wallet.js":
/*!**************************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Transactions/Wallet.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Wallet extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.state = {\n            copied: false\n        }, this.onCopy = () => {\n            this.setState({ copied: true });\n            setTimeout(() => {\n                this.setState({ copied: false });\n            }, 2000);\n        }, _temp;\n    }\n\n    render() {\n        const { address, balance } = this.props;\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'section',\n                { className: 'wallet has-separator margin-bottom-16' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'ul',\n                    { className: 'list-unstyled' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'h2',\n                            { className: 'text-secondary text-small' },\n                            t('dashboard:transaction.walletAddress')\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'div',\n                            { className: 'd-flex justify-content-between align-items-center text-secondary' },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'p',\n                                null,\n                                address\n                            ),\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__[\"CopyToClipboard\"],\n                                { text: address, className: 'btn btn-link', onCopy: this.onCopy },\n                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                    'p',\n                                    null,\n                                    t('common:interface.copy')\n                                )\n                            )\n                        ),\n                        this.state.copied ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'p',\n                            null,\n                            t('common:interface.copiedToCB')\n                        ) : null\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'h2',\n                            { className: 'text-secondary text-small' },\n                            t('dashboard:transaction.balance')\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'p',\n                            null,\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'span',\n                                { className: 'number number-big margin-right-4' },\n                                balance\n                            ),\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'span',\n                                { className: 'text-small' },\n                                'PMD'\n                            )\n                        )\n                    )\n                )\n            )\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Transactions/Wallet.js?");

/***/ })

}]);