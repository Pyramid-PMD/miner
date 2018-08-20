(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./app/src/pages/Dashboard/components/TransactionForm/TradePasswordModal.js":
/*!**********************************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/TransactionForm/TradePasswordModal.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form-validation */ \"./node_modules/redux-form-validation/lib/index.js\");\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form_validation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\nclass TradePasswordModal extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.submitHandler = values => {\n            this.props.onTradePasswordEnter(values.trade_pwd);\n        }, _temp;\n    }\n\n    render() {\n        const { handleSubmit } = this.props;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'form',\n                { onSubmit: handleSubmit(this.submitHandler), className: 'text-center container' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'field-underlined mb-5' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n                        className: 'form-control',\n                        component: 'input',\n                        type: 'password',\n                        placeholder: t('dashboard:tradePasswordModal.enterTradePassword'),\n                        name: 'trade_pwd' })\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'button',\n                    { className: 'btn form-button submit-btn', type: 'submit' },\n                    t('common:interface.done')\n                )\n            )\n        );\n    }\n}\n\nconst validations = {\n    trade_pwd: {\n        required: true\n    }\n};\n\nTradePasswordModal = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__[\"reduxForm\"])(_extends({\n    form: 'tradePassword'\n}, Object(redux_form_validation__WEBPACK_IMPORTED_MODULE_2__[\"generateValidation\"])(validations)))(TradePasswordModal);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradePasswordModal);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/TransactionForm/TradePasswordModal.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/TransactionForm/TransactionForm.js":
/*!*******************************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/TransactionForm/TransactionForm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-widgets */ \"./node_modules/react-widgets/lib/index.js\");\n/* harmony import */ var react_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_widgets__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form-validation */ \"./node_modules/redux-form-validation/lib/index.js\");\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_form_validation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n/* harmony import */ var _SendTransactionRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SendTransactionRedux */ \"./app/src/pages/Dashboard/components/TransactionForm/SendTransactionRedux.js\");\n/* harmony import */ var _pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/Settings/SettingsRedux */ \"./app/src/pages/Dashboard/pages/Settings/SettingsRedux.js\");\n/* harmony import */ var _TradePasswordModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TradePasswordModal */ \"./app/src/pages/Dashboard/components/TransactionForm/TradePasswordModal.js\");\n/* harmony import */ var react_widgets_dist_css_react_widgets_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-widgets/dist/css/react-widgets.css */ \"./node_modules/react-widgets/dist/css/react-widgets.css\");\n/* harmony import */ var react_widgets_dist_css_react_widgets_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_widgets_dist_css_react_widgets_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Services_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Services/Utils */ \"./app/src/Services/Utils.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass TransactionForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\n    constructor(props) {\n        super(props);\n        this.trade_pwd = null;\n        this.transaction = {};\n\n        this.submitHandler = values => {\n            if (!this.trade_pwd) {\n                this.transaction = _extends({}, values);\n                this.toggle();\n            } else {\n                this.transaction = _extends({}, values, { trade_pwd: this.trade_pwd });\n                this.props.sendTransaction(this.transaction, this.props.transactionType);\n            }\n        };\n\n        this.onTradePasswordHandler = trade_pwd => {\n            this.toggle();\n            this.trade_pwd = trade_pwd;\n            this.transaction.trade_pwd = trade_pwd;\n            this.submitHandler(this.transaction);\n        };\n\n        this.setMax = () => {\n            this.props.change('amount', this.props.balance);\n        };\n\n        this.state = {\n            modal: false\n        };\n        this.toggle = this.toggle.bind(this);\n    }\n\n    componentDidMount() {\n        this.props.getAddressList();\n    }\n\n    toggle() {\n        this.setState({\n            modal: !this.state.modal\n        });\n    }\n\n    // TODO: Save address to local storage\n\n\n    renderComboBoxList({ input, data, valueField, textField, placeholder, meta }) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_widgets__WEBPACK_IMPORTED_MODULE_4__[\"Combobox\"], _extends({}, input, {\n                    className: 'address-dropdown margin-bottom-16',\n                    data: data,\n                    valueField: valueField,\n                    placeholder: placeholder,\n                    textField: textField })),\n                input.name === 'to_addr' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    redux_form_validation__WEBPACK_IMPORTED_MODULE_5___default.a,\n                    { tagName: 'ul', meta: meta, className: 'form-errors list-unstyled' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        { when: 'promise' },\n                        t('dashboard:transaction.errors.invalidAddress')\n                    )\n                ) : null\n            )\n        );\n    }\n\n    renderTradePasswordModal() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Modal\"],\n                { isOpen: this.state.modal, toggle: this.toggle, className: 'trade-pwd-modal', centered: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"ModalHeader\"], { toggle: this.toggle }),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"ModalBody\"],\n                    null,\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TradePasswordModal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { onTradePasswordEnter: this.onTradePasswordHandler })\n                )\n            )\n        );\n    }\n\n    showErrorMessage() {\n        if (this.props.sendError) {\n            this.trade_pwd = null;\n            this.transaction.trade_pwd = null;\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"UncontrolledAlert\"],\n                { color: 'danger', fade: false },\n                this.props.error\n            );\n            // return <div className=\"error mb-4 alert alert-danger\">{ this.props.sendError }</div>\n        }\n    }\n\n    render() {\n        const { handleSubmit } = this.props;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                this.showErrorMessage(),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'form',\n                    { onSubmit: handleSubmit(this.submitHandler), className: `has-separator transaction-form ${this.props.classes}` },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n                            name: 'to_addr',\n                            component: this.renderComboBoxList,\n                            filter: 'startsWith',\n                            messages: {\n                                emptyList: t('dashboard:transaction.noSavedAddresses'),\n                                emptyFilter: t('dashboard:transaction.addressNotfound')\n                            },\n                            placeholder: t('dashboard:transaction.enterWalletAddress'),\n                            data: this.props.addressList\n                        })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'form-row align-items-stretch m-0' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'div',\n                            { className: 'flex-grow-1 mr-2 d-flex justify-content-between align-items-end field-underlined' },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n                                className: 'form-control',\n                                component: 'input',\n                                name: 'amount' }),\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'button',\n                                { onClick: this.setMax, type: 'button' },\n                                t('common:interface.max')\n                            )\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'div',\n                            { className: 'col-auto' },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'button',\n                                { type: 'submit', className: 'btn btn-primary submit-btn d-flex justify-content-center', disabled: this.props.loading },\n                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                    'span',\n                                    null,\n                                    this.props.transactionType === 'outer' ? t('common:interface.withdraw') : t('common:interface.send'),\n                                    ' '\n                                ),\n                                this.props.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: './src/assets/img/loaders/oval.svg' }) : null\n                            )\n                        )\n                    )\n                ),\n                this.renderTradePasswordModal()\n            )\n        );\n    }\n}\n\nconst mapStateToProps = state => {\n    return {\n        addressList: _SendTransactionRedux__WEBPACK_IMPORTED_MODULE_7__[\"SendTransactionSelectors\"].selectAddressList(state),\n        balance: _pages_Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_8__[\"SettingsSelectors\"].selectBalance(state),\n        sendError: _SendTransactionRedux__WEBPACK_IMPORTED_MODULE_7__[\"SendTransactionSelectors\"].selectError(state),\n        loading: _SendTransactionRedux__WEBPACK_IMPORTED_MODULE_7__[\"SendTransactionSelectors\"].selectLoading(state)\n    };\n};\n\nconst mapDispatchToProps = dispatch => {\n    return {\n        getAddressList: () => dispatch(_SendTransactionRedux__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getSavedAddressList())\n        // changeFormField: (form, field, value) => {dispatch(changeFieldValue(form, field, value))}\n    };\n};\n\nconst validations = {\n    to_addr: {\n        required: true,\n        promise: function (fieldName, fieldValue, dispatch) {\n            return new Promise((resolve, reject) => {\n                if (Object(_Services_Utils__WEBPACK_IMPORTED_MODULE_11__[\"isAddress\"])(fieldValue)) {\n                    resolve();\n                } else {\n                    reject();\n                }\n            });\n        },\n        validateOnBlur: true\n    },\n    amount: {\n        required: true\n    }\n};\n\nTransactionForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__[\"reduxForm\"])(_extends({\n    initialValues: {\n        amount: '0'\n    }\n}, Object(redux_form_validation__WEBPACK_IMPORTED_MODULE_5__[\"generateValidation\"])(validations)))(TransactionForm);\n\nTransactionForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(TransactionForm);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionForm);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/TransactionForm/TransactionForm.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistory.js":
/*!*************************************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistory.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TransactionHistoryItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionHistoryItem */ \"./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistoryItem.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n\n\n\n\n\nconst TransactionHistory = props => {\n    const { transactionHistory } = props;\n    const renderHistory = () => {\n        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(transactionHistory, (value, key) => {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18n\"],\n                { key: key },\n                t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'tr',\n                    { className: 'has-separator' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'td',\n                        null,\n                        key\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'td',\n                        { className: 'pr-0 pl-0 pb-0 pt-1' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'table',\n                            null,\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'thead',\n                                null,\n                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                    'tr',\n                                    null,\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                        'th',\n                                        null,\n                                        t('common:interface.address')\n                                    ),\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                        'th',\n                                        null,\n                                        t('common:interface.amount')\n                                    ),\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                        'th',\n                                        { className: 'text-center' },\n                                        t('common:interface.state')\n                                    )\n                                )\n                            ),\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'tbody',\n                                null,\n                                lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(value, item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TransactionHistoryItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { transaction: item, key: item.create_at }))\n                            )\n                        )\n                    )\n                )\n            );\n        });\n    };\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'table-responsive transaction-history' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'table',\n            { className: 'history-table table' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'tbody',\n                null,\n                renderHistory()\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionHistory);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistory.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistoryItem.js":
/*!*****************************************************************************************!*\
  !*** ./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistoryItem.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst TransactionHistoryItem = props => {\n    const { transaction } = props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'tr',\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'td',\n            null,\n            transaction.addr\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'td',\n            null,\n            transaction.amount\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'td',\n            { className: `${transaction.statusName.value} text-right` },\n            transaction.statusName.title\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionHistoryItem);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/components/TransactionHistory/TransactionHistoryItem.js?");

/***/ })

}]);