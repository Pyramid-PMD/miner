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

/***/ "./app/src/pages/Login/Login.js":
/*!**************************************!*\
  !*** ./app/src/pages/Login/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app.config */ \"./app/src/config/app.config.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_app_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AppLogo/AppLogo */ \"./app/src/components/AppLogo/AppLogo.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ \"./app/src/pages/Login/LoginForm.js\");\n\n\n\n\n\n\n\nconst pageStyles = {\n    backgroundImage: `url(${_config_app_config__WEBPACK_IMPORTED_MODULE_2___default.a.brand.pageBg})`\n};\n\nclass Login extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    login() {}\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'page page-login full-height d-flex justify-content-center align-items-center', style: pageStyles },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'page-container' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'form-container' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'p',\n                            { className: 'text-secondary' },\n                            t('auth:login.introText')\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n                    )\n                )\n            )\n        );\n    }\n}\n\nfunction mapStateToProps(state) {\n    return {\n        books: state.login\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, {})(Login));\n\n//# sourceURL=webpack:///./app/src/pages/Login/Login.js?");

/***/ }),

/***/ "./app/src/pages/Login/LoginForm.js":
/*!******************************************!*\
  !*** ./app/src/pages/Login/LoginForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form-validation */ \"./node_modules/redux-form-validation/lib/index.js\");\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_form_validation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n/* harmony import */ var _LoginRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginRedux */ \"./app/src/pages/Login/LoginRedux.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\n\n\n\n\nclass LoginForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.submitHandler = values => {\n            this.props.login(values);\n            // this.props.history.push(\"/alias\");\n        }, this.renderInputField = ({ input, label, type, meta, placeholder }) => {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n                null,\n                t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'form-group' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, input, {\n                        className: 'form-control form-field',\n                        type: type,\n                        placeholder: placeholder\n                    })),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        redux_form_validation__WEBPACK_IMPORTED_MODULE_5___default.a,\n                        { tagName: 'ul', meta: meta, className: 'form-errors list-unstyled' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'li',\n                            { when: 'required' },\n                            input.name === 'email' ? t('auth:login.errors.emailRequired') : t('auth:login.errors.passwordRequired')\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'li',\n                            { when: 'email' },\n                            t('auth:login:errors.wrongEmailFormat')\n                        )\n                    )\n                )\n            );\n        }, _temp;\n    }\n\n    showErrorMessage() {\n        if (this.props.error) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"UncontrolledAlert\"],\n                { color: 'danger', fade: false },\n                this.props.error\n            );\n        }\n        // return this.props.error ? <div className=\"error mb-4 alert alert-danger\">{ this.props.error }</div> : null;\n    }\n\n    render() {\n        const { handleSubmit } = this.props;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            null,\n            this.showErrorMessage(),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'form',\n                { onSubmit: handleSubmit(this.submitHandler), noValidate: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n                    null,\n                    t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n                            name: 'email',\n                            type: 'email',\n                            component: this.renderInputField,\n                            placeholder: t('auth:email')\n                        }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n                            name: 'pwd',\n                            type: 'password',\n                            component: this.renderInputField,\n                            placeholder: t('auth:password')\n                        }),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'div',\n                            { className: 'd-flex justify-content-center margin-bottom-10' },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'button',\n                                { type: 'submit', className: 'btn btn-primary form-button' },\n                                t('common:interface.next')\n                            )\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'p',\n                            { className: 'text-center' },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'span',\n                                { className: 'text-secondary margin-right-4' },\n                                t('auth:noAccount')\n                            ),\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"],\n                                { to: '/register', className: 'form-link' },\n                                t('auth:register.title')\n                            )\n                        )\n                    )\n                )\n            )\n        );\n    }\n}\n\nconst validations = {\n    email: {\n        required: true,\n        email: true,\n        validateOnBlur: true\n    },\n    pwd: {\n        required: true,\n        validateOnBlur: true\n    }\n};\n\nconst mapStateToProps = state => {\n    return {\n        loading: _LoginRedux__WEBPACK_IMPORTED_MODULE_7__[\"LoginSelectors\"].selectLoading(state),\n        error: _LoginRedux__WEBPACK_IMPORTED_MODULE_7__[\"LoginSelectors\"].selectError(state),\n        user: _LoginRedux__WEBPACK_IMPORTED_MODULE_7__[\"LoginSelectors\"].selectUser(state)\n    };\n};\n\nconst mapDispatchToProps = dispatch => ({\n    login: credentials => dispatch(_LoginRedux__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loginRequest(credentials))\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"reduxForm\"])(_extends({\n    // initialValues: {\n    //     email: 'nada-hakim@hotmail.com',\n    //     pwd: 'final30788'\n    // },\n    form: 'loginForm'\n}, Object(redux_form_validation__WEBPACK_IMPORTED_MODULE_5__[\"generateValidation\"])(validations)))(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, mapDispatchToProps)(LoginForm))));\n\n//# sourceURL=webpack:///./app/src/pages/Login/LoginForm.js?");

/***/ })

}]);