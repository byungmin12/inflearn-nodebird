/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/byungminkim/1.inflearn/Nodebird/client/components/PostForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PostForm() {\n  _s();\n\n  var _this = this;\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.post;\n  }),\n      imagePaths = _useSelector.imagePaths;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var onChangeText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {\n    setText(e.target.valuse);\n  }, []);\n  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.addPost);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {\n      style: {\n        margin: \"10px\"\n      },\n      encType: \"multipart/form-data\",\n      onFinish: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.TextArea, {\n        value: text,\n        onChange: onChangeText,\n        maxLength: 140,\n        placeholder: \"\\uC5B4\\uB5A4 \\uC2E0\\uAE30\\uD55C \\uC77C\\uC774 \\uC788\\uC5C8\\uB098\\uC694?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"file\",\n          multiple: true,\n          hidden: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n          children: \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n          type: \"primary\",\n          style: {\n            \"float\": \"right\"\n          },\n          htmlType: \"submit\",\n          children: \"\\uC9F9\\uC9F9\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: imagePaths.map(function (v) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n              display: \"inline-block\"\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: v,\n              style: {\n                width: \"200px\"\n              },\n              alt: v\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 30\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              children: \"\\uC81C\\uAC70\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 30\n            }, _this)]\n          }, v, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PostForm, \"ecduRBrj5BL2CkbdATiK7qbMOKM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];\n});\n\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcz83OWM1Il0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNoYW5nZVRleHQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1c2UiLCJvblN1Ym1pdCIsImFkZFBvc3QiLCJtYXJnaW4iLCJtYXAiLCJ2IiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxxQkFDS0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQURoQjtBQUFBLE1BQ1RDLFVBRFMsZ0JBQ1RBLFVBRFM7O0FBQUEsa0JBRVFDLCtDQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQUdoQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyxrREFBVyxDQUM1QixVQUFDQyxDQUFELEVBQU87QUFDSEwsV0FBTyxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsTUFBVixDQUFQO0FBQ0gsR0FIMkIsRUFJNUIsRUFKNEIsQ0FBaEM7QUFNQSxNQUFNQyxRQUFRLEdBQUdKLGtEQUFXLENBQUMsWUFBSTtBQUM3QkgsWUFBUSxDQUFDUSxtREFBRCxDQUFSO0FBQ0gsR0FGMkIsRUFFMUIsRUFGMEIsQ0FBNUI7QUFJQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHNDQUFEO0FBQU0sV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBRztBQUFWLE9BQWI7QUFBZ0MsYUFBTyxFQUFDLHFCQUF4QztBQUE4RCxjQUFRLEVBQUVGLFFBQXhFO0FBQUEsOEJBQ0ksOERBQUMsZ0RBQUQ7QUFDSSxhQUFLLEVBQUVULElBRFg7QUFFSSxnQkFBUSxFQUFFSSxZQUZkO0FBR0ksaUJBQVMsRUFBRSxHQUhmO0FBSUksbUJBQVcsRUFBQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFPSTtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsTUFBM0I7QUFBNEIsZ0JBQU07QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLDhEQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMsd0NBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUF1QixlQUFLLEVBQUU7QUFBQyxxQkFBTztBQUFSLFdBQTlCO0FBQWdELGtCQUFRLEVBQUMsUUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosZUFZSTtBQUFBLGtCQUVRTixVQUFVLENBQUNjLEdBQVgsQ0FBZSxVQUFBQyxDQUFDO0FBQUEsOEJBQ1o7QUFBYSxpQkFBSyxFQUFFO0FBQUNDLHFCQUFPLEVBQUU7QUFBVixhQUFwQjtBQUFBLG9DQUNDO0FBQUssaUJBQUcsRUFBRUQsQ0FBVjtBQUFhLG1CQUFLLEVBQUU7QUFBQ0UscUJBQUssRUFBRTtBQUFSLGVBQXBCO0FBQXNDLGlCQUFHLEVBQUVGO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBLGFBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWTtBQUFBLFNBQWhCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThCSDs7R0E1Q1FuQixRO1VBQ2dCQyxvRCxFQUVKUSxvRDs7O0tBSFpULFE7QUE4Q1QsK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICx7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Rm9ybSwgSW5wdXQsIEJ1dHRvbn0gZnJvbSAnYW50ZCcgXG5pbXBvcnQge3VzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xuXG5mdW5jdGlvbiBQb3N0Rm9ybSgpIHtcbiAgICBjb25zdCB7aW1hZ2VQYXRoc30gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KVxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1c2UpXG4gICAgICAgIH0sXG4gICAgICAgIFtdLFxuICAgIClcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpPT57XG4gICAgICAgIGRpc3BhdGNoKGFkZFBvc3QpXG4gICAgfSxbXSkgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvcm0gc3R5bGU9e3ttYXJnaW4gOiBcIjEwcHhcIn19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE0MH0gXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuynueynuTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlUGF0aHMubWFwKHY9PihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dn0gc3R5bGU9e3t3aWR0aDogXCIyMDBweFwifX0gYWx0PXt2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7KCc6rGwICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostForm.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; }\n/* harmony export */ });\n/* harmony import */ var _home_byungminkim_1_inflearn_Nodebird_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_byungminkim_1_inflearn_Nodebird_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_byungminkim_1_inflearn_Nodebird_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar dummyPost = {\n  id: 2,\n  content: '더미데이터입니다.',\n  User: {\n    id: 1,\n    nickname: '제로초'\n  },\n  Images: [],\n  Comments: []\n};\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: '제로초'\n    },\n    content: '첫 번째 게시글',\n    Images: [{\n      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '우와 개정판이 나왔군요~'\n    }, {\n      User: {\n        nickname: 'hero'\n      },\n      content: '얼른 사고싶어요~'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n  type: ADD_POST\n};\n\nvar post = function post() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost].concat((0,_home_byungminkim_1_inflearn_Nodebird_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(mainPosts)),\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImR1bW15UG9zdCIsImlkIiwiY29udGVudCIsIlVzZXIiLCJuaWNrbmFtZSIsIkltYWdlcyIsIkNvbW1lbnRzIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic3JjIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJwb3N0Iiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRztBQUNkQyxJQUFFLEVBQUUsQ0FEVTtBQUVkQyxTQUFPLEVBQUUsV0FGSztBQUdkQyxNQUFJLEVBQUU7QUFDSkYsTUFBRSxFQUFFLENBREE7QUFFSkcsWUFBUSxFQUFFO0FBRk4sR0FIUTtBQU9kQyxRQUFNLEVBQUUsRUFQTTtBQVFkQyxVQUFRLEVBQUU7QUFSSSxDQUFsQjtBQVdPLElBQU1DLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFFLENBQUM7QUFDVlAsTUFBRSxFQUFFLENBRE07QUFFVkUsUUFBSSxFQUFFO0FBQ0pGLFFBQUUsRUFBRSxDQURBO0FBRUpHLGNBQVEsRUFBRTtBQUZOLEtBRkk7QUFNVkYsV0FBTyxFQUFFLFVBTkM7QUFPVkcsVUFBTSxFQUFFLENBQUM7QUFDUEksU0FBRyxFQUFFO0FBREUsS0FBRCxFQUVMO0FBQ0RBLFNBQUcsRUFBRTtBQURKLEtBRkssRUFJTDtBQUNEQSxTQUFHLEVBQUU7QUFESixLQUpLLENBUEU7QUFjVkgsWUFBUSxFQUFFLENBQUM7QUFDVEgsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURHO0FBSVRGLGFBQU8sRUFBRTtBQUpBLEtBQUQsRUFLUDtBQUNEQyxVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BREw7QUFJREYsYUFBTyxFQUFFO0FBSlIsS0FMTztBQWRBLEdBQUQsQ0FEYTtBQTJCeEJRLFlBQVUsRUFBRSxFQTNCWTtBQTRCeEJDLFdBQVMsRUFBRTtBQTVCYSxDQUFyQjtBQStCUCxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7QUFDbkJDLE1BQUksRUFBRUY7QUFEYSxDQUFoQjs7QUFNUCxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFvQztBQUFBLE1BQW5DQyxLQUFtQyx1RUFBM0JULFlBQTJCO0FBQUEsTUFBWlUsTUFBWTs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBRUEsU0FBS0YsUUFBTDtBQUNJLDZDQUNPSSxLQURQO0FBRUlSLGlCQUFTLEdBQUdSLFNBQUgsd0pBQWlCUSxTQUFqQixFQUZiO0FBR0lHLGlCQUFTLEVBQUU7QUFIZjs7QUFNSjtBQUNJLGFBQU9LLEtBQVA7QUFWSjtBQVlILENBYkQ7O0FBZ0JBLCtEQUFlRCxJQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGR1bW15UG9zdCA9IHtcbiAgICBpZDogMixcbiAgICBjb250ZW50OiAn642U66+4642w7J207YSw7J6F64uI64ukLicsXG4gICAgVXNlcjoge1xuICAgICAgaWQ6IDEsXG4gICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXG4gICAgfSxcbiAgICBJbWFnZXM6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtYWluUG9zdHM6IFt7XG4gICAgICBpZDogMSxcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAnLFxuICAgICAgSW1hZ2VzOiBbe1xuICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXG4gICAgICB9XSxcbiAgICAgIENvbW1lbnRzOiBbe1xuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUficsXG4gICAgICB9LCB7XG4gICAgICAgIFVzZXI6IHtcbiAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiAn7Ja866W4IOyCrOqzoOyLtuyWtOyalH4nLFxuICAgICAgfV1cbiAgICB9XSxcbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxuICB9O1xuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCdcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICAgIHR5cGU6IEFERF9QT1NUXG59XG5cblxuXG5jb25zdCBwb3N0ID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCAgYWN0aW9uICkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBcbiAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLm1haW5Qb3N0c10sXG4gICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWVcbiAgICAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

});