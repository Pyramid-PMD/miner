(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./app/src/components/AppLogo/AppLogo.js":
/*!***********************************************!*\
  !*** ./app/src/components/AppLogo/AppLogo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app.config */ \"./app/src/config/app.config.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_app_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst AppLogo = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n        null,\n        t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'app-logo' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _config_app_config__WEBPACK_IMPORTED_MODULE_2___default.a.brand.logo, alt: 'App logo' }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'p',\n                { className: 'text-uppercase text-center' },\n                _config_app_config__WEBPACK_IMPORTED_MODULE_2___default.a.brand.name\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLogo);\n\n//# sourceURL=webpack:///./app/src/components/AppLogo/AppLogo.js?");

/***/ }),

/***/ "./app/src/pages/Register/Register.js":
/*!********************************************!*\
  !*** ./app/src/pages/Register/Register.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app.config */ \"./app/src/config/app.config.js\");\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_app_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AppLogo/AppLogo */ \"./app/src/components/AppLogo/AppLogo.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegisterForm */ \"./app/src/pages/Register/RegisterForm.js\");\n/* harmony import */ var _Redux_StartupRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Redux/StartupRedux */ \"./app/src/Redux/StartupRedux.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\nconst pageStyles = {\n    backgroundImage: `url(${_config_app_config__WEBPACK_IMPORTED_MODULE_2___default.a.brand.pageBg})`\n};\n\nclass Register extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(props) {\n        super(props);\n\n        this.onCopy = () => {\n            this.setState({ copied: true });\n            setTimeout(() => {\n                this.setState({ copied: false });\n            }, 2000);\n        };\n\n        this.state = {\n            copied: false\n        };\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'page page-register full-height', style: pageStyles },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'page-container d-flex flex-column full-height' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'h2',\n                        { className: 'text-center text-capitalize' },\n                        t('auth:register.title')\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'form-container' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'p',\n                            { className: 'text-secondary' },\n                            t('auth:register.introText')\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'mt-auto d-flex align-items-baseline' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'span',\n                            { className: 'text-secondary mr-2' },\n                            t('common:interface.diskSerial'),\n                            ': '\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'span',\n                            null,\n                            this.props.disk_id\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__[\"CopyToClipboard\"],\n                            { text: this.props.disk_id, className: 'btn', onCopy: this.onCopy },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                                'span',\n                                null,\n                                t('common:interface.copy')\n                            )\n                        ),\n                        this.state.copied ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'span',\n                            null,\n                            t('common:interface.copiedToCB')\n                        ) : null\n                    )\n                )\n            )\n        );\n    }\n}\n\nconst mapStateToProps = state => {\n    return {\n        disk_id: _Redux_StartupRedux__WEBPACK_IMPORTED_MODULE_6__[\"StartupSelectors\"].selectDiskSerial(state)\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, {})(Register));\n\n//# sourceURL=webpack:///./app/src/pages/Register/Register.js?");

/***/ }),

/***/ "./app/src/pages/Register/RegisterForm.js":
/*!************************************************!*\
  !*** ./app/src/pages/Register/RegisterForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form-validation */ \"./node_modules/redux-form-validation/lib/index.js\");\n/* harmony import */ var redux_form_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_form_validation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n/* harmony import */ var _VerifyEmailRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VerifyEmailRedux */ \"./app/src/pages/Register/VerifyEmailRedux.js\");\n/* harmony import */ var _RegisterRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RegisterRedux */ \"./app/src/pages/Register/RegisterRedux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\nclass RegisterForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.handleSubmit = values => {\n            const user = _extends({}, values, {\n                trade_pwd: values.pwd,\n                trade_pwd_repeat: values.pwd\n            });\n            this.props.register(user);\n        }, this.verifyEmail = () => {\n            const { email, verifyEmail } = this.props;\n            if (email) {\n                verifyEmail(email);\n            }\n        }, this.renderInputField = ({ input, label, type, placeholder, meta }) => {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n                null,\n                t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    null,\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, input, {\n                        className: 'form-control form-field',\n                        type: type,\n                        placeholder: placeholder\n                    })),\n                    this.renderErrors(input, meta, t)\n                )\n            );\n        }, this.renderCodeField = ({ input, label, type, placeholder, meta }) => {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n                null,\n                t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    null,\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'form-group row' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'div',\n                            { className: 'col-10' },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, input, {\n                                className: 'form-control form-field',\n                                type: type,\n                                placeholder: placeholder\n                            }))\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'button',\n                            { type: 'button', className: 'btn col-2 form-link', onClick: this.verifyEmail },\n                            t('auth:sendCode')\n                        )\n                    ),\n                    this.props.verified.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        null,\n                        t('auth:register.errors.codeVerificationError')\n                    ) : null,\n                    this.renderErrors(input, meta, t)\n                )\n            );\n        }, _temp;\n    }\n\n    renderEmailErrors(meta, t) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            redux_form_validation__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { tagName: 'ul', meta: meta, className: 'form-errors list-unstyled' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'email' },\n                t('auth:login:errors.wrongEmailFormat')\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'required' },\n                t('auth:login.errors.emailRequired')\n            )\n        );\n    }\n\n    renderPasswordErrors(meta, t) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            redux_form_validation__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { tagName: 'ul', meta: meta, className: 'form-errors list-unstyled' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'required' },\n                t('auth:login.errors.passwordRequired')\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'minLength' },\n                t('auth:register.errors.passwordMinLength')\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'maxLength' },\n                t('auth:register.errors.passwordMaxLength')\n            )\n        );\n    }\n\n    renderConfirmPasswordErrors(meta, t) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            redux_form_validation__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { tagName: 'ul', meta: meta, className: 'form-errors list-unstyled' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'required' },\n                t('auth:login.errors.passwordRequired')\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'matchField' },\n                t('auth:register.errors.passwordMismatch')\n            )\n        );\n    }\n\n    renderVerifyCodeErrors(meta, t) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            redux_form_validation__WEBPACK_IMPORTED_MODULE_4___default.a,\n            { tagName: 'ul', meta: meta, className: 'form-errors list-unstyled' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { when: 'required' },\n                t('auth:register.errors.enterValidCode')\n            )\n        );\n    }\n\n    showVerifiedEmailMessage(t) {\n        if (this.props.isEmailVerified) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"UncontrolledAlert\"],\n                { color: 'success' },\n                t('auth:register.emailVerifiedSuccess', { email: this.props.email })\n            );\n        }\n    }\n\n    renderErrors(input, meta, t) {\n        switch (input.name) {\n            case 'email':\n                return this.renderEmailErrors(meta, t);\n            case 'pwd':\n                return this.renderPasswordErrors(meta, t);\n            case 'pwd_repeat':\n                return this.renderConfirmPasswordErrors(meta, t);\n            case 'verify_code':\n                return this.renderVerifyCodeErrors(meta, t);\n        }\n    }\n\n    showErrorMessage() {\n        if (this.props.error) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"UncontrolledAlert\"],\n                { color: 'danger', fade: false },\n                this.props.error\n            );\n        }\n        // return this.props.error ? <div className=\"error mb-4 alert alert-danger\">{ this.props.error }</div> : null;\n    }\n\n    render() {\n        const { handleSubmit } = this.props;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"I18n\"],\n            null,\n            t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                this.showErrorMessage(),\n                this.showVerifiedEmailMessage(t),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'form',\n                    { onSubmit: handleSubmit(this.handleSubmit), noValidate: true },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'form-group' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n                            name: 'email',\n                            type: 'email',\n                            component: this.renderInputField,\n                            placeholder: t('auth:email')\n                        })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n                        name: 'verify_code',\n                        type: 'text',\n                        component: this.renderCodeField,\n                        placeholder: t('auth:code')\n                    }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'form-group' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n                            className: 'form-control form-field',\n                            name: 'pwd',\n                            type: 'password',\n                            component: this.renderInputField,\n                            placeholder: t('auth:password')\n                        })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'form-group' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n                            className: 'form-control form-field',\n                            name: 'pwd_repeat',\n                            type: 'password',\n                            component: this.renderInputField,\n                            placeholder: t('auth:confirmPassword')\n                        })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'd-flex justify-content-center margin-bottom-10' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'button',\n                            { type: 'submit', className: 'btn btn-primary form-button' },\n                            t('common:interface.next')\n                        )\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'p',\n                        { className: 'text-center' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'span',\n                            { className: 'text-secondary margin-right-4' },\n                            t('auth:haveAccount')\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"],\n                            { to: '/login', className: 'form-link' },\n                            t('auth:login.title')\n                        )\n                    )\n                )\n            )\n        );\n    }\n}\n\nconst validations = {\n    email: {\n        required: true,\n        email: true,\n        validateOnBlur: true\n    },\n    verify_code: {\n        required: true\n    },\n    pwd: {\n        required: true,\n        minLength: 6,\n        maxLength: 15,\n        // pattern: \"^[a-zA-Z0-9]*$\",\n        validateOnBlur: true\n    },\n    pwd_repeat: {\n        required: true,\n        matchField: 'pwd',\n        validateOnBlur: true\n    }\n\n};\nconst mapDispatchToProps = dispatch => ({\n    register: user => dispatch(_RegisterRedux__WEBPACK_IMPORTED_MODULE_7__[\"default\"].registerRequest(user)),\n    verifyEmail: email => dispatch(_VerifyEmailRedux__WEBPACK_IMPORTED_MODULE_6__[\"default\"].verifyEmailRequest(email))\n});\n\nconst mapStateToProps = state => {\n    const selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"formValueSelector\"])('registerForm');\n    const email = selector(state, 'email');\n    return {\n        email,\n        verified: state.verifyEmail,\n        isEmailVerified: _VerifyEmailRedux__WEBPACK_IMPORTED_MODULE_6__[\"VerifyEmailSelectors\"].isVerified(state),\n        error: _RegisterRedux__WEBPACK_IMPORTED_MODULE_7__[\"RegisterSelectors\"].selectError(state)\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"reduxForm\"])(_extends({\n    form: 'registerForm'\n}, Object(redux_form_validation__WEBPACK_IMPORTED_MODULE_4__[\"generateValidation\"])(validations)))(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, mapDispatchToProps)(RegisterForm)));\n\n//# sourceURL=webpack:///./app/src/pages/Register/RegisterForm.js?");

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar deselectCurrent = __webpack_require__(/*! toggle-selection */ \"./node_modules/toggle-selection/index.js\");\n\nvar defaultMessage = 'Copy to clipboard: #{key}, Enter';\n\nfunction format(message) {\n  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';\n  return message.replace(/#{\\s*key\\s*}/g, copyKey);\n}\n\nfunction copy(text, options) {\n  var debug, message, reselectPrevious, range, selection, mark, success = false;\n  if (!options) { options = {}; }\n  debug = options.debug || false;\n  try {\n    reselectPrevious = deselectCurrent();\n\n    range = document.createRange();\n    selection = document.getSelection();\n\n    mark = document.createElement('span');\n    mark.textContent = text;\n    // reset user styles for span element\n    mark.style.all = 'unset';\n    // prevents scrolling to the end of the page\n    mark.style.position = 'fixed';\n    mark.style.top = 0;\n    mark.style.clip = 'rect(0, 0, 0, 0)';\n    // used to preserve spaces and line breaks\n    mark.style.whiteSpace = 'pre';\n    // do not inherit user-select (it may be `none`)\n    mark.style.webkitUserSelect = 'text';\n    mark.style.MozUserSelect = 'text';\n    mark.style.msUserSelect = 'text';\n    mark.style.userSelect = 'text';\n\n    document.body.appendChild(mark);\n\n    range.selectNode(mark);\n    selection.addRange(range);\n\n    var successful = document.execCommand('copy');\n    if (!successful) {\n      throw new Error('copy command was unsuccessful');\n    }\n    success = true;\n  } catch (err) {\n    debug && console.error('unable to copy using execCommand: ', err);\n    debug && console.warn('trying IE specific stuff');\n    try {\n      window.clipboardData.setData('text', text);\n      success = true;\n    } catch (err) {\n      debug && console.error('unable to copy using clipboardData: ', err);\n      debug && console.error('falling back to prompt');\n      message = format('message' in options ? options.message : defaultMessage);\n      window.prompt(message, text);\n    }\n  } finally {\n    if (selection) {\n      if (typeof selection.removeRange == 'function') {\n        selection.removeRange(range);\n      } else {\n        selection.removeAllRanges();\n      }\n    }\n\n    if (mark) {\n      document.body.removeChild(mark);\n    }\n    reselectPrevious();\n  }\n\n  return success;\n}\n\nmodule.exports = copy;\n\n\n//# sourceURL=webpack:///./node_modules/copy-to-clipboard/index.js?");

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/Component.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CopyToClipboard = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _copyToClipboard = __webpack_require__(/*! copy-to-clipboard */ \"./node_modules/copy-to-clipboard/index.js\");\n\nvar _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CopyToClipboard = exports.CopyToClipboard = function (_React$PureComponent) {\n  _inherits(CopyToClipboard, _React$PureComponent);\n\n  function CopyToClipboard() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CopyToClipboard);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {\n      var _this$props = _this.props,\n          text = _this$props.text,\n          onCopy = _this$props.onCopy,\n          children = _this$props.children,\n          options = _this$props.options;\n\n\n      var elem = _react2.default.Children.only(children);\n\n      var result = (0, _copyToClipboard2.default)(text, options);\n\n      if (onCopy) {\n        onCopy(text, result);\n      }\n\n      // Bypass onClick if it was present\n      if (elem && elem.props && typeof elem.props.onClick === 'function') {\n        elem.props.onClick(event);\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CopyToClipboard, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          _text = _props.text,\n          _onCopy = _props.onCopy,\n          _options = _props.options,\n          children = _props.children,\n          props = _objectWithoutProperties(_props, ['text', 'onCopy', 'options', 'children']);\n\n      var elem = _react2.default.Children.only(children);\n\n      return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));\n    }\n  }]);\n\n  return CopyToClipboard;\n}(_react2.default.PureComponent);\n\nCopyToClipboard.defaultProps = {\n  onCopy: undefined,\n  options: undefined\n};\n\n//# sourceURL=webpack:///./node_modules/react-copy-to-clipboard/lib/Component.js?");

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ./Component */ \"./node_modules/react-copy-to-clipboard/lib/Component.js\"),\n    CopyToClipboard = _require.CopyToClipboard;\n\nCopyToClipboard.CopyToClipboard = CopyToClipboard;\nmodule.exports = CopyToClipboard;\n\n//# sourceURL=webpack:///./node_modules/react-copy-to-clipboard/lib/index.js?");

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nmodule.exports = function () {\n  var selection = document.getSelection();\n  if (!selection.rangeCount) {\n    return function () {};\n  }\n  var active = document.activeElement;\n\n  var ranges = [];\n  for (var i = 0; i < selection.rangeCount; i++) {\n    ranges.push(selection.getRangeAt(i));\n  }\n\n  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML\n    case 'INPUT':\n    case 'TEXTAREA':\n      active.blur();\n      break;\n\n    default:\n      active = null;\n      break;\n  }\n\n  selection.removeAllRanges();\n  return function () {\n    selection.type === 'Caret' &&\n    selection.removeAllRanges();\n\n    if (!selection.rangeCount) {\n      ranges.forEach(function(range) {\n        selection.addRange(range);\n      });\n    }\n\n    active &&\n    active.focus();\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/toggle-selection/index.js?");

/***/ })

}]);