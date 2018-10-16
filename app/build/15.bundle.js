(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./app/src/pages/Dashboard/pages/Faq/Faq.js":
/*!**************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Faq/Faq.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Settings/SettingsRedux */ \"./app/src/pages/Dashboard/pages/Settings/SettingsRedux.js\");\n/* harmony import */ var _faq_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.json */ \"./app/src/pages/Dashboard/pages/Faq/faq.json\");\nvar _faq_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./faq.json */ \"./app/src/pages/Dashboard/pages/Faq/faq.json\", 1);\n/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-accessible-accordion */ \"./node_modules/react-accessible-accordion/dist/umd/index.js\");\n/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FaqItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FaqItem */ \"./app/src/pages/Dashboard/pages/Faq/FaqItem.js\");\n\n\n\n\n\n\n\n\n// import 'react-accessible-accordion/dist/fancy-example.css';\n\nclass Faq extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    renderFaqItems() {\n        const faqItems = _faq_json__WEBPACK_IMPORTED_MODULE_3__[this.props.language.code];\n        return faqItems.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FaqItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { faq: item, key: item.id }));\n    }\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_accessible_accordion__WEBPACK_IMPORTED_MODULE_4__[\"Accordion\"],\n            { className: 'faq-item' },\n            this.renderFaqItems()\n        );\n    }\n}\n\nconst mapStateToProps = state => ({\n    language: _Settings_SettingsRedux__WEBPACK_IMPORTED_MODULE_2__[\"SettingsSelectors\"].selectLanguage(state)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Faq));\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Faq/Faq.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/pages/Faq/FaqItem.js":
/*!******************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Faq/FaqItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ \"./node_modules/react-accessible-accordion/dist/umd/index.js\");\n/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst FaqItem = props => {\n    const { faq } = props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__[\"AccordionItem\"],\n        { className: \"faq-item mb-3\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__[\"AccordionItemTitle\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"h3\",\n                null,\n                faq.head\n            )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__[\"AccordionItemBody\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"p\",\n                { className: \"faq-body text-secondary\" },\n                faq.body\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FaqItem);\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Faq/FaqItem.js?");

/***/ }),

/***/ "./app/src/pages/Dashboard/pages/Faq/faq.json":
/*!****************************************************!*\
  !*** ./app/src/pages/Dashboard/pages/Faq/faq.json ***!
  \****************************************************/
/*! exports provided: en, cn, default */
/***/ (function(module) {

eval("module.exports = {\"en\":[{\"id\":1,\"head\":\"Pyramid 为什么能为你带来更多的收益 english\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"},{\"id\":2,\"head\":\"Pyramid 为什么能为你带来更多的收益\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"},{\"id\":3,\"head\":\"Pyramid 为什么能为你带来更多的收益\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"},{\"id\":4,\"head\":\"Pyramid 为什么能为你带来更多的收益\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"}],\"cn\":[{\"id\":1,\"head\":\"Pyramid 为什么能为你带来更多的收益\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"},{\"id\":2,\"head\":\"Pyramid 为什么能为你带来更多的收益\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"},{\"id\":3,\"head\":\"Pyramid 为什么能为你带来更多的收益\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"},{\"id\":4,\"head\":\"Pyramid 为什么能为你带来更多的收益\",\"body\":\"Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益Pyramid 为什么能为你带来更多的收益\"}]};\n\n//# sourceURL=webpack:///./app/src/pages/Dashboard/pages/Faq/faq.json?");

/***/ })

}]);