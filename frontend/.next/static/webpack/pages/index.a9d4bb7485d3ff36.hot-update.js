"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Auth/Auth.js":
/*!*********************************!*\
  !*** ./components/Auth/Auth.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LoginForm_LoginForms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm/LoginForms */ \"./components/Auth/LoginForm/LoginForms.js\");\n/* harmony import */ var _RegisterForm_RegisterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterForm/RegisterForm */ \"./components/Auth/RegisterForm/RegisterForm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Auth(props) {\n    _s();\n    const { onCloseModal  } = props;\n    const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const showLoginForm = ()=>setShowLogin(true);\n    const showRegisterForm = ()=>setShowLogin(false);\n    return showLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginForm_LoginForms__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        showRegisterForm: showRegisterForm\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Auth\\\\Auth.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegisterForm_RegisterForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        showLoginForms: showLoginForm\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Auth\\\\Auth.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Auth, \"hK6/FgY2GrTdUGkfw1fADmf2vdE=\");\n_c = Auth;\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGgvQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1E7QUFDTztBQUV4QyxTQUFTSSxLQUFLQyxLQUFLLEVBQUU7O0lBQ2xDLE1BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUdEO0lBQ3pCLE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1RLGdCQUFnQixJQUFNRCxhQUFhLElBQUk7SUFDN0MsTUFBTUUsbUJBQW1CLElBQU1GLGFBQWEsS0FBSztJQUVqRCxPQUFPRCwwQkFDTCw4REFBQ0wsNkRBQVVBO1FBQUNRLGtCQUFrQkE7Ozs7OzZCQUU5Qiw4REFBQ1Asa0VBQVlBO1FBQUNRLGdCQUFnQkY7Ozs7O1lBQy9CO0FBQ0gsQ0FBQztHQVp1Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanM/MWZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luRm9ybXMgZnJvbSBcIi4vTG9naW5Gb3JtL0xvZ2luRm9ybXNcIjtcclxuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tIFwiLi9SZWdpc3RlckZvcm0vUmVnaXN0ZXJGb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKHByb3BzKSB7XHJcbiAgY29uc3QgeyBvbkNsb3NlTW9kYWwgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3Qgc2hvd0xvZ2luRm9ybSA9ICgpID0+IHNldFNob3dMb2dpbih0cnVlKTtcclxuICBjb25zdCBzaG93UmVnaXN0ZXJGb3JtID0gKCkgPT4gc2V0U2hvd0xvZ2luKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIHNob3dMb2dpbiA/IChcclxuICAgIDxMb2dpbkZvcm1zIHNob3dSZWdpc3RlckZvcm09e3Nob3dSZWdpc3RlckZvcm19IC8+XHJcbiAgKSA6IChcclxuICAgIDxSZWdpc3RlckZvcm0gc2hvd0xvZ2luRm9ybXM9e3Nob3dMb2dpbkZvcm19IC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luRm9ybXMiLCJSZWdpc3RlckZvcm0iLCJBdXRoIiwicHJvcHMiLCJvbkNsb3NlTW9kYWwiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJzaG93TG9naW5Gb3JtIiwic2hvd1JlZ2lzdGVyRm9ybSIsInNob3dMb2dpbkZvcm1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Auth/Auth.js\n"));

/***/ })

});