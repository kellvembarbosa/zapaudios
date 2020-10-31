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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "OFM2":
/***/ (function(module, exports) {



/***/ }),

/***/ "P47O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ themeState; });

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__("XGOH");

// CONCATENATED MODULE: ./constants/data.ts
const dataList = [];
const DEFAULT_THEME = true;
// CONCATENATED MODULE: ./recoils/atoms.ts


const themeState = Object(external_recoil_["atom"])({
  key: 'themeState',
  default: DEFAULT_THEME
});

/***/ }),

/***/ "XGOH":
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-reset"
var external_styled_reset_ = __webpack_require__("x6ND");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./styles/createGlobal.tsx

const GlobalStyle = external_styled_components_["createGlobalStyle"]`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${({
  theme
}) => theme.colors.MainBackgroundColor};
        color: ${({
  theme
}) => theme.colors.textColor};
    }
`;
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__("XGOH");

// CONCATENATED MODULE: ./styles/theme.ts
const DARK_THEME = {
  colors: {
    primaryColor: "#4447E2",
    secundaryColor: "#5F5F6E",
    MainBackgroundColor: "#131419",
    SecundaryBackgroundColor: "#1C1C24",
    cardColor: "#2D2D3A",
    textColor: "#fff",
    secundaryTextColor: "#fdfdfd",
    textDarkColor: "#000",
    secundaryTextDarkColor: "#333",
    switchSun: "#ffd700",
    switchMoon: "#ffffff"
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
const LIGHT_THEME = {
  colors: {
    primaryColor: "#4447E2",
    secundaryColor: "#5F5F6E",
    MainBackgroundColor: "#ffffff",
    SecundaryBackgroundColor: "#f3f3f3",
    cardColor: "#fdfdfd",
    textColor: "#000",
    secundaryTextColor: "#333",
    textDarkColor: "#fff",
    secundaryTextDarkColor: "#fdfdfd",
    switchSun: "#ffd700",
    switchMoon: "#ffffff"
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
// EXTERNAL MODULE: ./recoils/atoms.ts + 1 modules
var atoms = __webpack_require__("P47O");

// CONCATENATED MODULE: ./contexts/theme.tsx







function ThemeRecoilProvider({
  children
}) {
  const [isDarkMode, setDarkMode] = Object(external_recoil_["useRecoilState"])(atoms["a" /* themeState */]);
  const {
    0: monted,
    1: setMonted
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const themeLocalID = localStorage.getItem('DARK_MODE');
    setDarkMode(themeLocalID === 'true');
    setMonted(true);
  }, []);

  if (!monted) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_styled_components_["ThemeProvider"], {
    theme: isDarkMode ? DARK_THEME : LIGHT_THEME,
    children: children
  });
}

/* harmony default export */ var theme = (ThemeRecoilProvider);
// EXTERNAL MODULE: ./styles/app.css
var app = __webpack_require__("OFM2");

// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_recoil_["RecoilRoot"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(theme, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_styled_reset_["Reset"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyle, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "x6ND":
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ })

/******/ });