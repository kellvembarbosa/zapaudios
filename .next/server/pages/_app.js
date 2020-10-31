module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/data.ts":
/*!***************************!*\
  !*** ./constants/data.ts ***!
  \***************************/
/*! exports provided: dataList, DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataList\", function() { return dataList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_THEME\", function() { return DEFAULT_THEME; });\nconst dataList = [];\nconst DEFAULT_THEME = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvZGF0YS50cz83MDdkIl0sIm5hbWVzIjpbImRhdGFMaXN0IiwiREVGQVVMVF9USEVNRSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsUUFBUSxHQUFHLEVBQWpCO0FBRUEsTUFBTUMsYUFBYSxHQUFHLElBQXRCIiwiZmlsZSI6Ii4vY29uc3RhbnRzL2RhdGEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGF0YUxpc3QgPSBbXVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USEVNRSA9IHRydWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/data.ts\n");

/***/ }),

/***/ "./contexts/theme.tsx":
/*!****************************!*\
  !*** ./contexts/theme.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/data */ \"./constants/data.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _recoils_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recoils/atoms */ \"./recoils/atoms.ts\");\n\nvar _jsxFileName = \"/Users/kellvembarobsa/projetos/zapaudios/site/contexts/theme.tsx\";\n\n\n\n\n\n\n\nfunction ThemeRecoilProvider({\n  children\n}) {\n  const [isDarkMode, setDarkMode] = Object(recoil__WEBPACK_IMPORTED_MODULE_5__[\"useRecoilState\"])(_recoils_atoms__WEBPACK_IMPORTED_MODULE_6__[\"themeState\"]);\n  const {\n    0: monted,\n    1: setMonted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const themeLocalID = localStorage.getItem('DARK_MODE');\n    console.log(\"themeID ========> \", themeLocalID);\n    setDarkMode(themeLocalID ? themeLocalID === 'true' : _constants_data__WEBPACK_IMPORTED_MODULE_4__[\"DEFAULT_THEME\"]);\n    setMonted(true);\n  }, []);\n\n  if (!monted) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: isDarkMode ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"DARK_THEME\"] : _styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"LIGHT_THEME\"],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeRecoilProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy90aGVtZS50c3g/YjIyNyJdLCJuYW1lcyI6WyJUaGVtZVJlY29pbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0RhcmtNb2RlIiwic2V0RGFya01vZGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInRoZW1lU3RhdGUiLCJtb250ZWQiLCJzZXRNb250ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRoZW1lTG9jYWxJRCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiREVGQVVMVF9USEVNRSIsIkRBUktfVEhFTUUiLCJMSUdIVF9USEVNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsbUJBQVQsQ0FBNkI7QUFBRUM7QUFBRixDQUE3QixFQUEyQztBQUN2QyxRQUFNLENBQUNDLFVBQUQsRUFBYUMsV0FBYixJQUE0QkMsNkRBQWMsQ0FBQ0MseURBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsS0FBRCxDQUFwQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFyQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0osWUFBbEM7QUFDQVAsZUFBVyxDQUFDTyxZQUFZLEdBQUdBLFlBQVksS0FBSyxNQUFwQixHQUE2QkssNkRBQTFDLENBQVg7QUFDQVIsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsTUFBRyxDQUFDRCxNQUFKLEVBQVc7QUFDUCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQywrREFBRDtBQUFlLFNBQUssRUFBRUosVUFBVSxHQUFHYyx3REFBSCxHQUFnQkMseURBQWhEO0FBQUEsY0FDTWhCO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRWNELGtGQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvdGhlbWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERBUktfVEhFTUUsIExJR0hUX1RIRU1FIH0gZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9USEVNRSB9IGZyb20gXCIuLi9jb25zdGFudHMvZGF0YVwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHRoZW1lU3RhdGUgfSBmcm9tIFwiLi4vcmVjb2lscy9hdG9tc1wiO1xuaW1wb3J0IHsgY2hhbmdlTW9kZSB9IGZyb20gXCIuLi9yZWNvaWxzL3NlbGVjdG9yc1wiO1xuXG5mdW5jdGlvbiBUaGVtZVJlY29pbFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VSZWNvaWxTdGF0ZSh0aGVtZVN0YXRlKVxuICAgIGNvbnN0IFttb250ZWQsIHNldE1vbnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW1lTG9jYWxJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdEQVJLX01PREUnKVxuICAgICAgICBjb25zb2xlLmxvZyhcInRoZW1lSUQgPT09PT09PT0+IFwiLCB0aGVtZUxvY2FsSUQpXG4gICAgICAgIHNldERhcmtNb2RlKHRoZW1lTG9jYWxJRCA/IHRoZW1lTG9jYWxJRCA9PT0gJ3RydWUnIDogREVGQVVMVF9USEVNRSlcbiAgICAgICAgc2V0TW9udGVkKHRydWUpXG4gICAgfSwgW10pXG5cbiAgICBpZighbW9udGVkKXtcbiAgICAgICAgcmV0dXJuIDxkaXYgLz5cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2lzRGFya01vZGUgPyBEQVJLX1RIRU1FIDogTElHSFRfVEhFTUUgfT5cbiAgICAgICAgICAgIHsgY2hpbGRyZW59XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lUmVjb2lsUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/theme.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_createGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/createGlobal */ \"./styles/createGlobal.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/theme */ \"./contexts/theme.tsx\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/kellvembarobsa/projetos/zapaudios/site/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(recoil__WEBPACK_IMPORTED_MODULE_4__[\"RecoilRoot\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_reset__WEBPACK_IMPORTED_MODULE_2__[\"Reset\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_createGlobal__WEBPACK_IMPORTED_MODULE_3__[\"GlobalStyle\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSxxRUFBQyxpREFBRDtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQUEsOEJBQ0UscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZXNldCB9IGZyb20gJ3N0eWxlZC1yZXNldCdcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2NyZWF0ZUdsb2JhbCdcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgVGhlbWVSZWNvaWxQcm92aWRlciBmcm9tICcuLi9jb250ZXh0cy90aGVtZSdcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWNvaWxSb290PlxuICAgICAgPFRoZW1lUmVjb2lsUHJvdmlkZXI+XG4gICAgICAgIDxSZXNldCAvPlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVJlY29pbFByb3ZpZGVyPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./recoils/atoms.ts":
/*!**************************!*\
  !*** ./recoils/atoms.ts ***!
  \**************************/
/*! exports provided: themeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeState\", function() { return themeState; });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/data */ \"./constants/data.ts\");\n\n\nconst themeState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'themeState',\n  default: _constants_data__WEBPACK_IMPORTED_MODULE_1__[\"DEFAULT_THEME\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWNvaWxzL2F0b21zLnRzPzNmOGUiXSwibmFtZXMiOlsidGhlbWVTdGF0ZSIsImF0b20iLCJrZXkiLCJkZWZhdWx0IiwiREVGQVVMVF9USEVNRSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFUSxNQUFNQSxVQUFVLEdBQUdDLG1EQUFJLENBQUM7QUFDM0JDLEtBQUcsRUFBRSxZQURzQjtBQUUzQkMsU0FBTyxFQUFFQyw2REFBYUE7QUFGSyxDQUFELENBQXZCIiwiZmlsZSI6Ii4vcmVjb2lscy9hdG9tcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20sIHNlbGVjdG9yIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgREVGQVVMVF9USEVNRSB9IGZyb20gXCIuLi9jb25zdGFudHMvZGF0YVwiO1xuXG4gZXhwb3J0IGNvbnN0IHRoZW1lU3RhdGUgPSBhdG9tKHtcbiAgICAga2V5OiAndGhlbWVTdGF0ZScsXG4gICAgIGRlZmF1bHQ6IERFRkFVTFRfVEhFTUVcbiB9KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./recoils/atoms.ts\n");

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9hcHAuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/app.css\n");

/***/ }),

/***/ "./styles/createGlobal.tsx":
/*!*********************************!*\
  !*** ./styles/createGlobal.tsx ***!
  \*********************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n    body {\n        font-family: 'Roboto', sans-serif;\n        background-color: ${({\n  theme\n}) => theme.colors.MainBackgroundColor};\n        color: ${({\n  theme\n}) => theme.colors.textColor};\n    }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY3JlYXRlR2xvYmFsLnRzeD9mOWYwIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ0aGVtZSIsImNvbG9ycyIsIk1haW5CYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxXQUFXLEdBQUdDLG1FQUFrQjtBQUM3QztBQUNBO0FBQ0EsNEJBQTZCLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxtQkFBcUI7QUFDNUUsaUJBQWlCLENBQUM7QUFBQ0Y7QUFBRCxDQUFELEtBQWFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxTQUFVO0FBQ3JEO0FBQ0EsQ0FOTyIsImZpbGUiOiIuL3N0eWxlcy9jcmVhdGVHbG9iYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgKHt0aGVtZX0pID0+IHRoZW1lLmNvbG9ycy5NYWluQmFja2dyb3VuZENvbG9yIH07XG4gICAgICAgIGNvbG9yOiAkeyh7dGhlbWV9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/createGlobal.tsx\n");

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: DARK_THEME, LIGHT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DARK_THEME\", function() { return DARK_THEME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIGHT_THEME\", function() { return LIGHT_THEME; });\nconst DARK_THEME = {\n  colors: {\n    primaryColor: \"#4447E2\",\n    secundaryColor: \"#5F5F6E\",\n    MainBackgroundColor: \"#131419\",\n    SecundaryBackgroundColor: \"#1C1C24\",\n    cardColor: \"#2D2D3A\",\n    textColor: \"#fff\",\n    secundaryTextColor: \"#fdfdfd\",\n    textDarkColor: \"#000\",\n    secundaryTextDarkColor: \"#333\",\n    switchSun: \"#ffd700\",\n    switchMoon: \"#ffffff\"\n  },\n  breakpoints: {\n    sm: '576px',\n    md: '768px',\n    lg: '992px',\n    xl: '1200px'\n  }\n};\nconst LIGHT_THEME = {\n  colors: {\n    primaryColor: \"#4447E2\",\n    secundaryColor: \"#5F5F6E\",\n    MainBackgroundColor: \"#ffffff\",\n    SecundaryBackgroundColor: \"#f3f3f3\",\n    cardColor: \"#fdfdfd\",\n    textColor: \"#000\",\n    secundaryTextColor: \"#333\",\n    textDarkColor: \"#fff\",\n    secundaryTextDarkColor: \"#fdfdfd\",\n    switchSun: \"#ffd700\",\n    switchMoon: \"#ffffff\"\n  },\n  breakpoints: {\n    sm: '576px',\n    md: '768px',\n    lg: '992px',\n    xl: '1200px'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdGhlbWUudHM/ODlhNiJdLCJuYW1lcyI6WyJEQVJLX1RIRU1FIiwiY29sb3JzIiwicHJpbWFyeUNvbG9yIiwic2VjdW5kYXJ5Q29sb3IiLCJNYWluQmFja2dyb3VuZENvbG9yIiwiU2VjdW5kYXJ5QmFja2dyb3VuZENvbG9yIiwiY2FyZENvbG9yIiwidGV4dENvbG9yIiwic2VjdW5kYXJ5VGV4dENvbG9yIiwidGV4dERhcmtDb2xvciIsInNlY3VuZGFyeVRleHREYXJrQ29sb3IiLCJzd2l0Y2hTdW4iLCJzd2l0Y2hNb29uIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIkxJR0hUX1RIRU1FIl0sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxVQUF3QixHQUFHO0FBQ3BDQyxRQUFNLEVBQUU7QUFDSkMsZ0JBQVksRUFBRSxTQURWO0FBRUpDLGtCQUFjLEVBQUUsU0FGWjtBQUdKQyx1QkFBbUIsRUFBRSxTQUhqQjtBQUlKQyw0QkFBd0IsRUFBRSxTQUp0QjtBQUtKQyxhQUFTLEVBQUUsU0FMUDtBQU9KQyxhQUFTLEVBQUUsTUFQUDtBQVFKQyxzQkFBa0IsRUFBRSxTQVJoQjtBQVVKQyxpQkFBYSxFQUFFLE1BVlg7QUFXSkMsMEJBQXNCLEVBQUUsTUFYcEI7QUFhSkMsYUFBUyxFQUFFLFNBYlA7QUFjSkMsY0FBVSxFQUFFO0FBZFIsR0FENEI7QUFrQnBDQyxhQUFXLEVBQUU7QUFDVEMsTUFBRSxFQUFFLE9BREs7QUFFVEMsTUFBRSxFQUFFLE9BRks7QUFHVEMsTUFBRSxFQUFFLE9BSEs7QUFJVEMsTUFBRSxFQUFFO0FBSks7QUFsQnVCLENBQWpDO0FBMEJBLE1BQU1DLFdBQXlCLEdBQUc7QUFDckNqQixRQUFNLEVBQUU7QUFDSkMsZ0JBQVksRUFBRSxTQURWO0FBRUpDLGtCQUFjLEVBQUUsU0FGWjtBQUdKQyx1QkFBbUIsRUFBRSxTQUhqQjtBQUlKQyw0QkFBd0IsRUFBRSxTQUp0QjtBQUtKQyxhQUFTLEVBQUUsU0FMUDtBQU9KQyxhQUFTLEVBQUUsTUFQUDtBQVFKQyxzQkFBa0IsRUFBRSxNQVJoQjtBQVVKQyxpQkFBYSxFQUFFLE1BVlg7QUFXSkMsMEJBQXNCLEVBQUUsU0FYcEI7QUFhSkMsYUFBUyxFQUFFLFNBYlA7QUFjSkMsY0FBVSxFQUFFO0FBZFIsR0FENkI7QUFrQnJDQyxhQUFXLEVBQUU7QUFDVEMsTUFBRSxFQUFFLE9BREs7QUFFVEMsTUFBRSxFQUFFLE9BRks7QUFHVEMsTUFBRSxFQUFFLE9BSEs7QUFJVEMsTUFBRSxFQUFFO0FBSks7QUFsQndCLENBQWxDIiwiZmlsZSI6Ii4vc3R5bGVzL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIlxuaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBEQVJLX1RIRU1FOiBEZWZhdWx0VGhlbWUgPSB7XG4gICAgY29sb3JzOiB7XG4gICAgICAgIHByaW1hcnlDb2xvcjogXCIjNDQ0N0UyXCIsXG4gICAgICAgIHNlY3VuZGFyeUNvbG9yOiBcIiM1RjVGNkVcIixcbiAgICAgICAgTWFpbkJhY2tncm91bmRDb2xvcjogXCIjMTMxNDE5XCIsXG4gICAgICAgIFNlY3VuZGFyeUJhY2tncm91bmRDb2xvcjogXCIjMUMxQzI0XCIsXG4gICAgICAgIGNhcmRDb2xvcjogXCIjMkQyRDNBXCIsXG5cbiAgICAgICAgdGV4dENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgc2VjdW5kYXJ5VGV4dENvbG9yOiBcIiNmZGZkZmRcIixcblxuICAgICAgICB0ZXh0RGFya0NvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgc2VjdW5kYXJ5VGV4dERhcmtDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgIFxuICAgICAgICBzd2l0Y2hTdW46IFwiI2ZmZDcwMFwiLFxuICAgICAgICBzd2l0Y2hNb29uOiBcIiNmZmZmZmZcIlxuICAgIH0sXG5cbiAgICBicmVha3BvaW50czoge1xuICAgICAgICBzbTogJzU3NnB4JyxcbiAgICAgICAgbWQ6ICc3NjhweCcsXG4gICAgICAgIGxnOiAnOTkycHgnLFxuICAgICAgICB4bDogJzEyMDBweCcsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgTElHSFRfVEhFTUU6IERlZmF1bHRUaGVtZSA9IHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgcHJpbWFyeUNvbG9yOiBcIiM0NDQ3RTJcIixcbiAgICAgICAgc2VjdW5kYXJ5Q29sb3I6IFwiIzVGNUY2RVwiLFxuICAgICAgICBNYWluQmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgU2VjdW5kYXJ5QmFja2dyb3VuZENvbG9yOiBcIiNmM2YzZjNcIixcbiAgICAgICAgY2FyZENvbG9yOiBcIiNmZGZkZmRcIixcblxuICAgICAgICB0ZXh0Q29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBzZWN1bmRhcnlUZXh0Q29sb3I6IFwiIzMzM1wiLFxuXG4gICAgICAgIHRleHREYXJrQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBzZWN1bmRhcnlUZXh0RGFya0NvbG9yOiBcIiNmZGZkZmRcIixcblxuICAgICAgICBzd2l0Y2hTdW46IFwiI2ZmZDcwMFwiLFxuICAgICAgICBzd2l0Y2hNb29uOiBcIiNmZmZmZmZcIlxuICAgIH0sXG5cbiAgICBicmVha3BvaW50czoge1xuICAgICAgICBzbTogJzU3NnB4JyxcbiAgICAgICAgbWQ6ICc3NjhweCcsXG4gICAgICAgIGxnOiAnOTkycHgnLFxuICAgICAgICB4bDogJzEyMDBweCcsXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recoil\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNvaWxcIj82YTYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlY29pbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29pbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///recoil\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-reset\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtcmVzZXRcIj9kYzdjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0eWxlZC1yZXNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1yZXNldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-reset\n");

/***/ })

/******/ });