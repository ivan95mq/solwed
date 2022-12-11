/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/token.js":
/*!**********************!*\
  !*** ./api/token.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getToken\": () => (/* binding */ getToken),\n/* harmony export */   \"hasExpiredToken\": () => (/* binding */ hasExpiredToken),\n/* harmony export */   \"removeToken\": () => (/* binding */ removeToken),\n/* harmony export */   \"setToken\": () => (/* binding */ setToken)\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction setToken(token) {\n    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN, token);\n}\nfunction getToken() {\n    return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN);\n}\nfunction removeToken() {\n    localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN);\n}\nfunction hasExpiredToken(token) {\n    const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);\n    const expireDate = tokenDecode.exp * 1000;\n    const currentDate = new Date().getTime();\n    if (currentDate > expireDate) {\n        return true;\n    }\n    return false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvdG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNSO0FBRTVCLFNBQVNFLFNBQVNDLEtBQUssRUFBRTtJQUM5QkMsYUFBYUMsT0FBTyxDQUFDTCxtREFBS0EsRUFBRUc7QUFDOUIsQ0FBQztBQUVNLFNBQVNHLFdBQVc7SUFDekIsT0FBT0YsYUFBYUcsT0FBTyxDQUFDUCxtREFBS0E7QUFDbkMsQ0FBQztBQUVNLFNBQVNRLGNBQWM7SUFDNUJKLGFBQWFLLFVBQVUsQ0FBQ1QsbURBQUtBO0FBQy9CLENBQUM7QUFFTSxTQUFTVSxnQkFBZ0JQLEtBQUssRUFBRTtJQUNyQyxNQUFNUSxjQUFjVixpREFBU0EsQ0FBQ0U7SUFDOUIsTUFBTVMsYUFBYUQsWUFBWUUsR0FBRyxHQUFHO0lBQ3JDLE1BQU1DLGNBQWMsSUFBSUMsT0FBT0MsT0FBTztJQUN0QyxJQUFJRixjQUFjRixZQUFZO1FBQzVCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFDRCxPQUFPLEtBQUs7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sd2VkLy4vYXBpL3Rva2VuLmpzP2RhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVE9LRU4gfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbih0b2tlbikge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOLCB0b2tlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzRXhwaXJlZFRva2VuKHRva2VuKSB7XHJcbiAgY29uc3QgdG9rZW5EZWNvZGUgPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gIGNvbnN0IGV4cGlyZURhdGUgPSB0b2tlbkRlY29kZS5leHAgKiAxMDAwO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgaWYgKGN1cnJlbnREYXRlID4gZXhwaXJlRGF0ZSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG4iXSwibmFtZXMiOlsiVE9LRU4iLCJqd3REZWNvZGUiLCJzZXRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsInJlbW92ZVRva2VuIiwicmVtb3ZlSXRlbSIsImhhc0V4cGlyZWRUb2tlbiIsInRva2VuRGVjb2RlIiwiZXhwaXJlRGF0ZSIsImV4cCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImdldFRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/token.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    auth: undefined,\n    login: ()=>null,\n    logout: ()=>null,\n    setReloadUser: ()=>null\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyw0QkFBY0Qsb0RBQWFBLENBQUM7SUFDaENFLE1BQU1DO0lBQ05DLE9BQU8sSUFBTSxJQUFJO0lBQ2pCQyxRQUFRLElBQU0sSUFBSTtJQUNsQkMsZUFBZSxJQUFNLElBQUk7QUFDM0I7QUFFQSxpRUFBZUwsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbHdlZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIGF1dGg6IHVuZGVmaW5lZCxcclxuICBsb2dpbjogKCkgPT4gbnVsbCxcclxuICBsb2dvdXQ6ICgpID0+IG51bGwsXHJcbiAgc2V0UmVsb2FkVXNlcjogKCkgPT4gbnVsbCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImF1dGgiLCJ1bmRlZmluZWQiLCJsb2dpbiIsImxvZ291dCIsInNldFJlbG9hZFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/token */ \"./api/token.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/global.scss */ \"./scss/global.scss\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [reloadUser, setReloadUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = (0,_api_token__WEBPACK_IMPORTED_MODULE_5__.getToken)();\n        if (token) {\n            setAuth({\n                token,\n                idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token).id\n            });\n        } else {\n            setAuth(null);\n        }\n        setReloadUser(false);\n    }, [\n        reloadUser\n    ]);\n    const login = (token)=>{\n        (0,_api_token__WEBPACK_IMPORTED_MODULE_5__.setToken)(token);\n        setAuth({\n            token,\n            idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token).id\n        });\n    };\n    const logout = ()=>{\n        if (auth) {\n            (0,_api_token__WEBPACK_IMPORTED_MODULE_5__.removeToken)();\n            setAuth(null);\n            router.push(\"/\");\n        }\n    };\n    const authData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            auth,\n            login,\n            logout,\n            setReloadUser\n        }), [\n        auth\n    ]);\n    if (auth === undefined) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n        value: authData,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            \";\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 5000,\n                hideProgressBar: true,\n                newestOnTop: true,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: false,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Demon\\\\Documents\\\\Git-Hub\\\\solwed\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ0U7QUFDcEI7QUFDYztBQUNjO0FBQ3ZCO0FBQ1g7QUFDYTtBQUNLO0FBRWhDLFNBQVNXLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN0RCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUNlO0lBQ2pDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQUMsS0FBSztJQUVsRCxNQUFNa0IsU0FBU1Qsc0RBQVNBO0lBRXhCUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWtCLFFBQVFaLG9EQUFRQTtRQUN0QixJQUFJWSxPQUFPO1lBQ1RMLFFBQVE7Z0JBQ05LO2dCQUNBQyxRQUFRaEIsaURBQVNBLENBQUNlLE9BQU9FLEVBQUU7WUFDN0I7UUFDRixPQUFPO1lBQ0xQLFFBQVEsSUFBSTtRQUNkLENBQUM7UUFDREcsY0FBYyxLQUFLO0lBQ3JCLEdBQUc7UUFBQ0Q7S0FBVztJQUVmLE1BQU1NLFFBQVEsQ0FBQ0gsUUFBVTtRQUN2QmIsb0RBQVFBLENBQUNhO1FBQ1RMLFFBQVE7WUFDTks7WUFDQUMsUUFBUWhCLGlEQUFTQSxDQUFDZSxPQUFPRSxFQUFFO1FBQzdCO0lBQ0Y7SUFFQSxNQUFNRSxTQUFTLElBQU07UUFDbkIsSUFBSVYsTUFBTTtZQUNSTCx1REFBV0E7WUFDWE0sUUFBUSxJQUFJO1lBQ1pJLE9BQU9NLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSDtJQUNBLE1BQU1DLFdBQVcxQiw4Q0FBT0EsQ0FDdEIsSUFBTztZQUNMYztZQUNBUztZQUNBQztZQUNBTjtRQUNGLElBQ0E7UUFBQ0o7S0FBSztJQUdSLElBQUlBLFNBQVNFLFdBQVcsT0FBTyxJQUFJO0lBRW5DLHFCQUNFLDhEQUFDVixxRUFBb0I7UUFBQ3NCLE9BQU9GOzswQkFDM0IsOERBQUNkO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OztZQUFJOzBCQUM1Qiw4REFBQ1YsMERBQWNBO2dCQUNiMEIsVUFBUztnQkFDVEMsV0FBVztnQkFDWEMsZUFBZTtnQkFDZkMsV0FBVztnQkFDWEMsWUFBWTtnQkFDWkMsS0FBSyxLQUFLO2dCQUNWQyxrQkFBa0IsS0FBSztnQkFDdkJDLFNBQVM7Z0JBQ1RDLFlBQVk7Ozs7Ozs7Ozs7OztBQUlwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sd2VkLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IHNldFRva2VuLCBnZXRUb2tlbiwgcmVtb3ZlVG9rZW4gfSBmcm9tIFwiLi4vYXBpL3Rva2VuXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgXCIuLi9zY3NzL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW3JlbG9hZFVzZXIsIHNldFJlbG9hZFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRBdXRoKHtcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICBpZFVzZXI6IGp3dERlY29kZSh0b2tlbikuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QXV0aChudWxsKTtcclxuICAgIH1cclxuICAgIHNldFJlbG9hZFVzZXIoZmFsc2UpO1xyXG4gIH0sIFtyZWxvYWRVc2VyXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHRva2VuKSA9PiB7XHJcbiAgICBzZXRUb2tlbih0b2tlbik7XHJcbiAgICBzZXRBdXRoKHtcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIGlkVXNlcjogand0RGVjb2RlKHRva2VuKS5pZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGlmIChhdXRoKSB7XHJcbiAgICAgIHJlbW92ZVRva2VuKCk7XHJcbiAgICAgIHNldEF1dGgobnVsbCk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGF1dGhEYXRhID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIGF1dGgsXHJcbiAgICAgIGxvZ2luLFxyXG4gICAgICBsb2dvdXQsXHJcbiAgICAgIHNldFJlbG9hZFVzZXIsXHJcbiAgICB9KSxcclxuICAgIFthdXRoXVxyXG4gICk7XHJcblxyXG4gIGlmIChhdXRoID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRoRGF0YX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyXHJcbiAgICAgICAgbmV3ZXN0T25Ub3BcclxuICAgICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgICBydGw9e2ZhbHNlfVxyXG4gICAgICAgIHBhdXNlT25Gb2N1c0xvc3M9e2ZhbHNlfVxyXG4gICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgIHBhdXNlT25Ib3ZlclxyXG4gICAgICAvPlxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0Iiwiand0RGVjb2RlIiwiQXV0aENvbnRleHQiLCJzZXRUb2tlbiIsImdldFRva2VuIiwicmVtb3ZlVG9rZW4iLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF1dGgiLCJzZXRBdXRoIiwidW5kZWZpbmVkIiwicmVsb2FkVXNlciIsInNldFJlbG9hZFVzZXIiLCJyb3V0ZXIiLCJ0b2tlbiIsImlkVXNlciIsImlkIiwibG9naW4iLCJsb2dvdXQiLCJwdXNoIiwiYXV0aERhdGEiLCJQcm92aWRlciIsInZhbHVlIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsImNsb3NlT25DbGljayIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJkcmFnZ2FibGUiLCJwYXVzZU9uSG92ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_PATH\": () => (/* binding */ BASE_PATH),\n/* harmony export */   \"CART\": () => (/* binding */ CART),\n/* harmony export */   \"TOKEN\": () => (/* binding */ TOKEN),\n/* harmony export */   \"TOKEN_STRAPI\": () => (/* binding */ TOKEN_STRAPI)\n/* harmony export */ });\nconst BASE_PATH = \"http://localhost:1337/api\";\nconst TOKEN = \"token\";\nconst TOKEN_STRAPI = \"316f2d0900e7c84a57a5f84181e1b9f1bebc49225ebc863c459e160c1d423eb5366e66edd385809bb43246ad80fa56521864ff8f0676cfaa4fe05d666fb3630246982ab5dd4b973151e922124a941e53edfed8b33d5a293729b6ca1f35aeba3af6a68829b6165b98524de276decadf8cbc67efcb8fd55741a134478ab00d441a\";\nconst CART = \"cart\"; //export const STRIPE_TOKEN =\"pk_test_51HkF5rLlg8czBHMMsWjtoCTXXsNDB6JNmtzHs7Ai3MeOkAnKmhQpmtZUnLbZF5CepEdFFaiDO3JcXReuXsjQkoYU00HFfamQeq\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFlBQVksNEJBQTRCO0FBQzlDLE1BQU1DLFFBQVEsUUFBUTtBQUN0QixNQUFNQyxlQUNYLG1RQUFtUTtBQUM5UCxNQUFNQyxPQUFPLE9BQU8sQ0FDM0IsMklBQTJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sd2VkLy4vdXRpbHMvY29uc3RhbnRzLmpzP2Y5YjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJBU0VfUEFUSCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaVwiO1xyXG5leHBvcnQgY29uc3QgVE9LRU4gPSBcInRva2VuXCI7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9TVFJBUEkgPVxyXG4gIFwiMzE2ZjJkMDkwMGU3Yzg0YTU3YTVmODQxODFlMWI5ZjFiZWJjNDkyMjVlYmM4NjNjNDU5ZTE2MGMxZDQyM2ViNTM2NmU2NmVkZDM4NTgwOWJiNDMyNDZhZDgwZmE1NjUyMTg2NGZmOGYwNjc2Y2ZhYTRmZTA1ZDY2NmZiMzYzMDI0Njk4MmFiNWRkNGI5NzMxNTFlOTIyMTI0YTk0MWU1M2VkZmVkOGIzM2Q1YTI5MzcyOWI2Y2ExZjM1YWViYTNhZjZhNjg4MjliNjE2NWI5ODUyNGRlMjc2ZGVjYWRmOGNiYzY3ZWZjYjhmZDU1NzQxYTEzNDQ3OGFiMDBkNDQxYVwiO1xyXG5leHBvcnQgY29uc3QgQ0FSVCA9IFwiY2FydFwiO1xyXG4vL2V4cG9ydCBjb25zdCBTVFJJUEVfVE9LRU4gPVwicGtfdGVzdF81MUhrRjVyTGxnOGN6QkhNTXNXanRvQ1RYWHNOREI2Sk5tdHpIczdBaTNNZU9rQW5LbWhRcG10WlVuTGJaRjVDZXBFZEZGYWlETzNKY1hSZXVYc2pRa29ZVTAwSEZmYW1RZXFcIjtcclxuIl0sIm5hbWVzIjpbIkJBU0VfUEFUSCIsIlRPS0VOIiwiVE9LRU5fU1RSQVBJIiwiQ0FSVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./scss/global.scss":
/*!**************************!*\
  !*** ./scss/global.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();