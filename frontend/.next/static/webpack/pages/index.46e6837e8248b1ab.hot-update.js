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

/***/ "./components/Header/Menu/Menu.js":
/*!****************************************!*\
  !*** ./components/Header/Menu/Menu.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuWeb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Modal_BasicModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modal/BasicModal */ \"./components/Modal/BasicModal/index.js\");\n/* harmony import */ var _Auth_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth/Auth */ \"./components/Auth/Auth.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MenuWeb() {\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [titleModal, settitleModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Iniciar Sesion\");\n    const onShowModal = ()=>setShowModal(true);\n    const onCloseModal = ()=>setShowModal(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {\n                            className: \"menu__left\",\n                            width: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuPlatforms, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {\n                            className: \"menu__right\",\n                            width: 10,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOptions, {\n                                onShowModal: onShowModal\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal_BasicModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                show: showModal,\n                setShow: setShowModal,\n                title: \"Inicia sesion o Crea tu cuenta\",\n                size: \"small\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Auth_Auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onCloseModal: onCloseModal\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(MenuWeb, \"INMHIWXr79j2s3C7fyveRRsucJI=\");\n_c = MenuWeb;\nfunction MenuPlatforms() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/play-station\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                    name: \"P\",\n                    children: \"PlayStation\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/xbox\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                    name: \"X\",\n                    children: \"XboX\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/switch\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                    name: \"S\",\n                    children: \"Switch\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_c1 = MenuPlatforms;\nfunction MenuOptions(props) {\n    const { onShowModal  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n            onClick: onShowModal,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                    name: \"user outline\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                \"Mi cuenta\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\components\\\\Header\\\\Menu\\\\Menu.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c2 = MenuOptions;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MenuWeb\");\n$RefreshReg$(_c1, \"MenuPlatforms\");\n$RefreshReg$(_c2, \"MenuOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9NZW51L01lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpQztBQUNKO0FBQzBDO0FBQ3ZCO0FBQ2I7QUFFcEIsU0FBU1MsVUFBVTs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1jLGNBQWMsSUFBTUgsYUFBYSxJQUFJO0lBQzNDLE1BQU1JLGVBQWUsSUFBTUosYUFBYSxLQUFLO0lBRTdDLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Ysd0RBQVNBOzBCQUNSLDRFQUFDRSxtREFBSUE7O3NDQUNILDhEQUFDQSwwREFBVzs0QkFBQ2EsV0FBVTs0QkFBYUUsT0FBTztzQ0FDekMsNEVBQUNDOzs7Ozs7Ozs7O3NDQUVILDhEQUFDaEIsMERBQVc7NEJBQUNhLFdBQVU7NEJBQWNFLE9BQU87c0NBQzFDLDRFQUFDRTtnQ0FBWVAsYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWhDLDhEQUFDUCx5REFBVUE7Z0JBQ1RlLE1BQU1aO2dCQUNOYSxTQUFTWjtnQkFDVGEsT0FBTTtnQkFDTkMsTUFBSzswQkFFTCw0RUFBQ2pCLGtEQUFJQTtvQkFBQ08sY0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7R0E5QnVCTjtLQUFBQTtBQWdDeEIsU0FBU1csZ0JBQWdCO0lBQ3ZCLHFCQUNFLDhEQUFDakIsbURBQUlBOzswQkFDSCw4REFBQ0Ysa0RBQUlBO2dCQUFDeUIsTUFBSzswQkFDVCw0RUFBQ3ZCLHdEQUFTO29CQUFDeUIsTUFBSzs4QkFBSzs7Ozs7Ozs7Ozs7MEJBR3ZCLDhEQUFDM0Isa0RBQUlBO2dCQUFDeUIsTUFBSzswQkFDVCw0RUFBQ3ZCLHdEQUFTO29CQUFDeUIsTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7MEJBR3RCLDhEQUFDM0Isa0RBQUlBO2dCQUFDeUIsTUFBSzswQkFDVCw0RUFBQ3ZCLHdEQUFTO29CQUFDeUIsTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUI7TUFoQlNSO0FBaUJULFNBQVNDLFlBQVlRLEtBQUssRUFBRTtJQUMxQixNQUFNLEVBQUVmLFlBQVcsRUFBRSxHQUFHZTtJQUN4QixxQkFDRSw4REFBQzFCLG1EQUFJQTtrQkFDSCw0RUFBQ0Esd0RBQVM7WUFBQzJCLFNBQVNoQjs7OEJBQ2xCLDhEQUFDVCxtREFBSUE7b0JBQUN1QixNQUFLOzs7Ozs7Z0JBQWlCOzs7Ozs7Ozs7Ozs7QUFLcEM7TUFWU1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvTWVudS9NZW51LmpzP2FkNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIE1lbnUsIEdyaWQsIEljb24sIE1vZGFsIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBCYXNpY01vZGFsIGZyb20gXCIuLi8uLi9Nb2RhbC9CYXNpY01vZGFsXCI7XHJcbmltcG9ydCBBdXRoIGZyb20gXCIuLi8uLi9BdXRoL0F1dGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVXZWIoKSB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlTW9kYWwsIHNldHRpdGxlTW9kYWxdID0gdXNlU3RhdGUoXCJJbmljaWFyIFNlc2lvblwiKTtcclxuXHJcbiAgY29uc3Qgb25TaG93TW9kYWwgPSAoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIGNsYXNzTmFtZT1cIm1lbnVfX2xlZnRcIiB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgIDxNZW51UGxhdGZvcm1zIC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIGNsYXNzTmFtZT1cIm1lbnVfX3JpZ2h0XCIgd2lkdGg9ezEwfT5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb25zIG9uU2hvd01vZGFsPXtvblNob3dNb2RhbH0gLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEJhc2ljTW9kYWxcclxuICAgICAgICBzaG93PXtzaG93TW9kYWx9XHJcbiAgICAgICAgc2V0U2hvdz17c2V0U2hvd01vZGFsfVxyXG4gICAgICAgIHRpdGxlPVwiSW5pY2lhIHNlc2lvbiBvIENyZWEgdHUgY3VlbnRhXCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEF1dGggb25DbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9IC8+XHJcbiAgICAgIDwvQmFzaWNNb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lbnVQbGF0Zm9ybXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TGluayBocmVmPVwiL3BsYXktc3RhdGlvblwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0gbmFtZT1cIlBcIj57XCJQbGF5U3RhdGlvblwifTwvTWVudS5JdGVtPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3hib3hcIj5cclxuICAgICAgICA8TWVudS5JdGVtIG5hbWU9XCJYXCI+WGJvWDwvTWVudS5JdGVtPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3N3aXRjaFwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0gbmFtZT1cIlNcIj5Td2l0Y2g8L01lbnUuSXRlbT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn1cclxuZnVuY3Rpb24gTWVudU9wdGlvbnMocHJvcHMpIHtcclxuICBjb25zdCB7IG9uU2hvd01vZGFsIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17b25TaG93TW9kYWx9PlxyXG4gICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyIG91dGxpbmVcIiAvPlxyXG4gICAgICAgIE1pIGN1ZW50YVxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJNZW51IiwiR3JpZCIsIkljb24iLCJNb2RhbCIsIkJhc2ljTW9kYWwiLCJBdXRoIiwiTWVudVdlYiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRpdGxlTW9kYWwiLCJzZXR0aXRsZU1vZGFsIiwib25TaG93TW9kYWwiLCJvbkNsb3NlTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJDb2x1bW4iLCJ3aWR0aCIsIk1lbnVQbGF0Zm9ybXMiLCJNZW51T3B0aW9ucyIsInNob3ciLCJzZXRTaG93IiwidGl0bGUiLCJzaXplIiwiaHJlZiIsIkl0ZW0iLCJuYW1lIiwicHJvcHMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Menu/Menu.js\n"));

/***/ })

});