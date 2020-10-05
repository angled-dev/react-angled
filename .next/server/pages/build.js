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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = __webpack_require__(/*! react */ "react"),
    t = __webpack_require__(/*! styled-components */ "styled-components");

function o(e) {
  return e && "object" == typeof e && "default" in e ? e : {
    default: e
  };
}

var a = o(e),
    r = o(t);
const n = {
  primary: "#333",
  secondary: "#808080",
  confirm: "rgba(80, 220, 100, 0.9)",
  cancel: "rgba(255, 40, 0, 0.8)",
  whitegrey: "#ececec",
  darkgrey: "#9c9c9c",
  overlay: "rgba(236,236,236, 0.8)",
  blue: "rgb(0, 128, 255)"
},
      i = {
  primary: n.secondary,
  secondary: n.primary
},
      s = t.keyframes`
  0% {
      background-position: 90%;
  }
  20% {
    background-position: 80%;
}
  100% {
      background-position: 0%;
  }
`,
      l = (t.keyframes`
  0% {
      background-position: 0%;
  }
  20% {
    background-position: 20%;
}
  100% {
      background-position: 90%;
  }
`, r.default.div.withConfig({
  displayName: "Title",
  componentId: "sc-1bqi4vp"
})`
  font-family: "Asap";
  text-align: center;
  font-size: 2.75em;
  height: 1.2em;
  min-height: 1.2em;
`),
      c = r.default.div.withConfig({
  displayName: "Body",
  componentId: "sc-1n6529d"
})`
  margin: 0 3% 0 3%;
  min-height: 30%;
`,
      d = r.default.div.withConfig({
  displayName: "Buttons",
  componentId: "sc-3l7aih"
})`
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 2em;
`;
const p = t.css`
  @keyframes fadeIn {
    0% {
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
    20% {
      background-position: 20%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.02);
    }
    100% {
      background-position: 100%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
  }

  @keyframes fadeOut {
    0% {
      background-position: 100%;
    }
    20% {
      color: ${n.whitegrey};
      background-position: 80%;
    }
    75% {
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
    100% {
      color: ${n.primary};
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
  }
`,
      u = r.default(function ({
  className: e,
  modalClassName: t,
  style: o,
  title: r,
  body: n,
  buttons: i,
  onAnimationEnd: s,
  passRef: p,
  visible: u,
  customHTML: m
}) {
  return a.default.createElement("div", {
    className: e + " " + t,
    style: o,
    onAnimationEnd: s,
    ref: p
  }, u && !m && a.default.createElement(l, null, r), u && !m && a.default.createElement(c, null, n), u && !m && a.default.createElement(d, null, i), u && m);
}).withConfig({
  displayName: "Modal",
  componentId: "sc-1idweqk"
})`
  ${({
  customKeyframes: e
}) => e || p};
  transition: height 0.25s, width 0.25s;

  margin: 15vh auto;
  width: ${({
  width: e
}) => e};
  height: ${({
  height: e
}) => e};

  padding: 1.4em 3.3em;
  border-radius: 6px;

  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);

  color: ${n.whitegrey};
  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({
  color: e
}) => e || n.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
  overflow-y: hidden;
`,
      m = a.default.createContext({}),
      x = r.default(({
  visible: t,
  setProps: o,
  hide: r,
  callback: n,
  className: i,
  modalClassName: s,
  overlayClassName: l,
  height: c,
  width: d,
  position: p,
  title: m,
  body: x,
  buttons: g,
  duration: b,
  customHTML: h,
  color: f
}) => {
  const [v, y] = e.useState(!1),
        w = e.useRef(null);
  e.useEffect(() => {
    t ? y(!0) : b && k();
  }, [t]);

  const k = () => {
    y(!1), n && n(), o({});
  };

  return v ? a.default.createElement("div", {
    className: i + " " + l,
    onClick: e => {
      w && w.current && w.current.contains(e.target) || r();
    }
  }, a.default.createElement(u, {
    style: {
      animation: "" + (b ? "fadeOut " + 1 * b + "ms linear" : t ? "fadeIn 1s ease-out" : "fadeOut .4s ease-out")
    },
    title: m,
    body: x,
    buttons: g,
    onAnimationEnd: b ? void 0 : () => {
      t || k();
    },
    passRef: w,
    height: c,
    width: d,
    position: p,
    modalClassName: s,
    customHTML: h,
    visible: t,
    color: f
  })) : a.default.createElement(a.default.Fragment, null);
}).withConfig({
  displayName: "Alert",
  componentId: "sc-sg0yid"
})`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: ${({
  overlayColor: e
}) => e || n.overlay};
`;
x.defaultProps = {
  visible: !1,
  height: "350px",
  width: "500px"
};
const g = r.default(({
  className: e,
  children: t,
  onClick: o
}) => a.default.createElement("button", {
  className: e,
  onClick: o
}, t)).withConfig({
  displayName: "Button",
  componentId: "sc-jkmrhb"
})`
  font-family: "Asap";
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({
  reverseColor: e,
  variant: t
}) => e ? n.whitegrey : n[t]};

  animation: 0.6s linear 0s 1 ${s};

  border: 0.1em solid
    ${({
  reverseColor: e,
  variant: t
}) => e ? n.whitegrey : n[t]};
  border-radius: 24px;

  width: fit-content;
  padding: 1.4em 3.3em;
  cursor: pointer;

  transition: background 600ms ease-in-out, color 600ms ease-in-out;

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({
  reverseColor: e,
  variant: t
}) => e ? n.whitegrey : n[t]}
      50%
  );
  background-position: 25%;
  background-size: 400%;

  &:hover:not(:active) {
    color: ${({
  reverseColor: e
}) => e ? n.primary : n.whitegrey};
    background-position: 90%;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transition: background 100ms ease-in-out;
    background-position: 25%;
  }
`;
g.defaultProps = {
  reverseColor: !1,
  variant: "primary"
};

var b = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
},
    h = e.createContext && e.createContext(b),
    f = function () {
  return (f = Object.assign || function (e) {
    for (var t, o = 1, a = arguments.length; o < a; o++) for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);

    return e;
  }).apply(this, arguments);
},
    v = function (e, t) {
  var o = {};

  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (o[a] = e[a]);

  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var r = 0;

    for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && (o[a[r]] = e[a[r]]);
  }

  return o;
};

function y(t) {
  return t && t.map(function (t, o) {
    return e.createElement(t.tag, f({
      key: o
    }, t.attr), y(t.child));
  });
}

function w(t) {
  return function (o) {
    return e.createElement(k, f({
      attr: f({}, t.attr)
    }, o), y(t.child));
  };
}

function k(t) {
  var o = function (o) {
    var a,
        r = t.size || o.size || "1em";
    o.className && (a = o.className), t.className && (a = (a ? a + " " : "") + t.className);
    var n = t.attr,
        i = t.title,
        s = v(t, ["attr", "title"]);
    return e.createElement("svg", f({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, n, s, {
      className: a,
      style: f({
        color: t.color || o.color
      }, o.style, t.style),
      height: r,
      width: r,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && e.createElement("title", null, i), t.children);
  };

  return void 0 !== h ? e.createElement(h.Consumer, null, function (e) {
    return o(e);
  }) : o(b);
}

const C = ({
  icon: e,
  size: t,
  onClick: o,
  variant: r,
  color: n,
  hover: i
}) => a.default.createElement(N, {
  onClick: o,
  variant: r,
  color: n,
  hover: i
}, a.default.createElement(e, {
  size: t
})),
      N = r.default(({
  className: e,
  onClick: t,
  children: o
}) => a.default.createElement("div", {
  className: e,
  onClick: t
}, o)).withConfig({
  displayName: "_IconButton",
  componentId: "sc-1qrr2qi"
})`
  display: flex;
  align-items: center;
  color: ${({
  variant: e,
  color: t
}) => t || n[e]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({
  variant: e,
  hover: t
}) => t || i[e]};
  }

  &:active {
    color: black;
  }
`;

C.defaultProps = {
  icon: function (e) {
    return w({
      tag: "svg",
      attr: {
        viewBox: "0 0 448 512"
      },
      child: [{
        tag: "path",
        attr: {
          d: "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
        }
      }]
    })(e);
  },
  size: 25,
  variant: "primary"
}, exports.AlertContext = m, exports.AlertProvider = function ({
  children: t
}) {
  const [o, r] = e.useState(!1),
        [n, i] = e.useState({});
  var s;

  const l = () => {
    r(!1);
  };

  return a.default.createElement(m.Provider, {
    value: {
      show: e => {
        s && clearTimeout(s), i(e), r(!0), e.duration && (s = setTimeout(() => l(), e.duration));
      },
      hide: l
    }
  }, a.default.createElement(x, Object.assign({}, Object.assign(Object.assign({}, n), {
    visible: o,
    setProps: i,
    hide: l
  }))), t);
}, exports.Button = g, exports.Example = () => a.default.createElement("div", {
  role: "heading"
}, "My Component"), exports.IconButton = C;

/***/ }),

/***/ "./pages/build.js":
/*!************************!*\
  !*** ./pages/build.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return build; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build */ "./build/index.js");
/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Code\\Angled\\react-angled\\pages\\build.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function build() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_build__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Button"));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZSIsInJlcXVpcmUiLCJ0IiwibyIsImRlZmF1bHQiLCJhIiwiciIsIm4iLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29uZmlybSIsImNhbmNlbCIsIndoaXRlZ3JleSIsImRhcmtncmV5Iiwib3ZlcmxheSIsImJsdWUiLCJpIiwicyIsImtleWZyYW1lcyIsImwiLCJkaXYiLCJ3aXRoQ29uZmlnIiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnRJZCIsImMiLCJkIiwicCIsImNzcyIsInUiLCJjbGFzc05hbWUiLCJtb2RhbENsYXNzTmFtZSIsInN0eWxlIiwidGl0bGUiLCJib2R5IiwiYnV0dG9ucyIsIm9uQW5pbWF0aW9uRW5kIiwicGFzc1JlZiIsInZpc2libGUiLCJjdXN0b21IVE1MIiwibSIsImNyZWF0ZUVsZW1lbnQiLCJyZWYiLCJjdXN0b21LZXlmcmFtZXMiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3JlYXRlQ29udGV4dCIsIngiLCJzZXRQcm9wcyIsImhpZGUiLCJjYWxsYmFjayIsIm92ZXJsYXlDbGFzc05hbWUiLCJwb3NpdGlvbiIsImciLCJkdXJhdGlvbiIsImIiLCJoIiwiZiIsInYiLCJ5IiwidXNlU3RhdGUiLCJ3IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiayIsIm9uQ2xpY2siLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhbmltYXRpb24iLCJGcmFnbWVudCIsIm92ZXJsYXlDb2xvciIsImRlZmF1bHRQcm9wcyIsImNoaWxkcmVuIiwicmV2ZXJzZUNvbG9yIiwidmFyaWFudCIsInNpemUiLCJhdHRyIiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibWFwIiwidGFnIiwia2V5IiwiY2hpbGQiLCJzdHJva2UiLCJmaWxsIiwic3Ryb2tlV2lkdGgiLCJ4bWxucyIsIkNvbnN1bWVyIiwiQyIsImljb24iLCJob3ZlciIsIk4iLCJ2aWV3Qm94IiwiQWxlcnRDb250ZXh0IiwiQWxlcnRQcm92aWRlciIsIlByb3ZpZGVyIiwic2hvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCdXR0b24iLCJFeGFtcGxlIiwicm9sZSIsIkljb25CdXR0b24iLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FB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QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNURCxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYnVpbGQuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1yZXF1aXJlKFwicmVhY3RcIiksdD1yZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJlwiZGVmYXVsdFwiaW4gZT9lOntkZWZhdWx0OmV9fXZhciBhPW8oZSkscj1vKHQpO2NvbnN0IG49e3ByaW1hcnk6XCIjMzMzXCIsc2Vjb25kYXJ5OlwiIzgwODA4MFwiLGNvbmZpcm06XCJyZ2JhKDgwLCAyMjAsIDEwMCwgMC45KVwiLGNhbmNlbDpcInJnYmEoMjU1LCA0MCwgMCwgMC44KVwiLHdoaXRlZ3JleTpcIiNlY2VjZWNcIixkYXJrZ3JleTpcIiM5YzljOWNcIixvdmVybGF5OlwicmdiYSgyMzYsMjM2LDIzNiwgMC44KVwiLGJsdWU6XCJyZ2IoMCwgMTI4LCAyNTUpXCJ9LGk9e3ByaW1hcnk6bi5zZWNvbmRhcnksc2Vjb25kYXJ5Om4ucHJpbWFyeX0scz10LmtleWZyYW1lc2BcbiAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlO1xuICB9XG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODAlO1xufVxuICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xuICB9XG5gLGw9KHQua2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcbiAgfVxuICAyMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJTtcbn1cbiAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XG4gIH1cbmAsci5kZWZhdWx0LmRpdi53aXRoQ29uZmlnKHtkaXNwbGF5TmFtZTpcIlRpdGxlXCIsY29tcG9uZW50SWQ6XCJzYy0xYnFpNHZwXCJ9KWBcbiAgZm9udC1mYW1pbHk6IFwiQXNhcFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi43NWVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBtaW4taGVpZ2h0OiAxLjJlbTtcbmApLGM9ci5kZWZhdWx0LmRpdi53aXRoQ29uZmlnKHtkaXNwbGF5TmFtZTpcIkJvZHlcIixjb21wb25lbnRJZDpcInNjLTFuNjUyOWRcIn0pYFxuICBtYXJnaW46IDAgMyUgMCAzJTtcbiAgbWluLWhlaWdodDogMzAlO1xuYCxkPXIuZGVmYXVsdC5kaXYud2l0aENvbmZpZyh7ZGlzcGxheU5hbWU6XCJCdXR0b25zXCIsY29tcG9uZW50SWQ6XCJzYy0zbDdhaWhcIn0pYFxuICBoZWlnaHQ6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWluLWhlaWdodDogMmVtO1xuYDtjb25zdCBwPXQuY3NzYFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCA4cHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBjb2xvcjogJHtuLndoaXRlZ3JleX07XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4MCU7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBjb2xvcjogJHtuLnByaW1hcnl9O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCA4cHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG4gIH1cbmAsdT1yLmRlZmF1bHQoKGZ1bmN0aW9uKHtjbGFzc05hbWU6ZSxtb2RhbENsYXNzTmFtZTp0LHN0eWxlOm8sdGl0bGU6cixib2R5Om4sYnV0dG9uczppLG9uQW5pbWF0aW9uRW5kOnMscGFzc1JlZjpwLHZpc2libGU6dSxjdXN0b21IVE1MOm19KXtyZXR1cm4gYS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOmUrXCIgXCIrdCxzdHlsZTpvLG9uQW5pbWF0aW9uRW5kOnMscmVmOnB9LHUmJiFtJiZhLmRlZmF1bHQuY3JlYXRlRWxlbWVudChsLG51bGwsciksdSYmIW0mJmEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGMsbnVsbCxuKSx1JiYhbSYmYS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZCxudWxsLGkpLHUmJm0pfSkpLndpdGhDb25maWcoe2Rpc3BsYXlOYW1lOlwiTW9kYWxcIixjb21wb25lbnRJZDpcInNjLTFpZHdlcWtcIn0pYFxuICAkeyh7Y3VzdG9tS2V5ZnJhbWVzOmV9KT0+ZXx8cH07XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjI1cywgd2lkdGggMC4yNXM7XG5cbiAgbWFyZ2luOiAxNXZoIGF1dG87XG4gIHdpZHRoOiAkeyh7d2lkdGg6ZX0pPT5lfTtcbiAgaGVpZ2h0OiAkeyh7aGVpZ2h0OmV9KT0+ZX07XG5cbiAgcGFkZGluZzogMS40ZW0gMy4zZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgY29sb3I6ICR7bi53aGl0ZWdyZXl9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgdHJhbnNwYXJlbnQgNTAlLFxuICAgICR7KHtjb2xvcjplfSk9PmV8fG4ucHJpbWFyeX0gNTAlXG4gICk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjY0JTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG5gLG09YS5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pLHg9ci5kZWZhdWx0KCh7dmlzaWJsZTp0LHNldFByb3BzOm8saGlkZTpyLGNhbGxiYWNrOm4sY2xhc3NOYW1lOmksbW9kYWxDbGFzc05hbWU6cyxvdmVybGF5Q2xhc3NOYW1lOmwsaGVpZ2h0OmMsd2lkdGg6ZCxwb3NpdGlvbjpwLHRpdGxlOm0sYm9keTp4LGJ1dHRvbnM6ZyxkdXJhdGlvbjpiLGN1c3RvbUhUTUw6aCxjb2xvcjpmfSk9Pntjb25zdFt2LHldPWUudXNlU3RhdGUoITEpLHc9ZS51c2VSZWYobnVsbCk7ZS51c2VFZmZlY3QoKCk9Pnt0P3koITApOmImJmsoKX0sW3RdKTtjb25zdCBrPSgpPT57eSghMSksbiYmbigpLG8oe30pfTtyZXR1cm4gdj9hLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6aStcIiBcIitsLG9uQ2xpY2s6ZT0+e3cmJncuY3VycmVudCYmdy5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KXx8cigpfX0sYS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodSx7c3R5bGU6e2FuaW1hdGlvbjpcIlwiKyhiP1wiZmFkZU91dCBcIisxKmIrXCJtcyBsaW5lYXJcIjp0P1wiZmFkZUluIDFzIGVhc2Utb3V0XCI6XCJmYWRlT3V0IC40cyBlYXNlLW91dFwiKX0sdGl0bGU6bSxib2R5OngsYnV0dG9uczpnLG9uQW5pbWF0aW9uRW5kOmI/dm9pZCAwOigpPT57dHx8aygpfSxwYXNzUmVmOncsaGVpZ2h0OmMsd2lkdGg6ZCxwb3NpdGlvbjpwLG1vZGFsQ2xhc3NOYW1lOnMsY3VzdG9tSFRNTDpoLHZpc2libGU6dCxjb2xvcjpmfSkpOmEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGEuZGVmYXVsdC5GcmFnbWVudCxudWxsKX0pLndpdGhDb25maWcoe2Rpc3BsYXlOYW1lOlwiQWxlcnRcIixjb21wb25lbnRJZDpcInNjLXNnMHlpZFwifSlgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoe292ZXJsYXlDb2xvcjplfSk9PmV8fG4ub3ZlcmxheX07XG5gO3guZGVmYXVsdFByb3BzPXt2aXNpYmxlOiExLGhlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCI1MDBweFwifTtjb25zdCBnPXIuZGVmYXVsdCgoe2NsYXNzTmFtZTplLGNoaWxkcmVuOnQsb25DbGljazpvfSk9PmEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTplLG9uQ2xpY2s6b30sdCkpLndpdGhDb25maWcoe2Rpc3BsYXlOYW1lOlwiQnV0dG9uXCIsY29tcG9uZW50SWQ6XCJzYy1qa21yaGJcIn0pYFxuICBmb250LWZhbWlseTogXCJBc2FwXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICR7KHtyZXZlcnNlQ29sb3I6ZSx2YXJpYW50OnR9KT0+ZT9uLndoaXRlZ3JleTpuW3RdfTtcblxuICBhbmltYXRpb246IDAuNnMgbGluZWFyIDBzIDEgJHtzfTtcblxuICBib3JkZXI6IDAuMWVtIHNvbGlkXG4gICAgJHsoe3JldmVyc2VDb2xvcjplLHZhcmlhbnQ6dH0pPT5lP24ud2hpdGVncmV5Om5bdF19O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMS40ZW0gMy4zZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDYwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciA2MDBtcyBlYXNlLWluLW91dDtcblxuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgdHJhbnNwYXJlbnQgNTAlLFxuICAgICR7KHtyZXZlcnNlQ29sb3I6ZSx2YXJpYW50OnR9KT0+ZT9uLndoaXRlZ3JleTpuW3RdfVxuICAgICAgNTAlXG4gICk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDI1JTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xuXG4gICY6aG92ZXI6bm90KDphY3RpdmUpIHtcbiAgICBjb2xvcjogJHsoe3JldmVyc2VDb2xvcjplfSk9PmU/bi5wcmltYXJ5Om4ud2hpdGVncmV5fTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjUlO1xuICB9XG5gO2cuZGVmYXVsdFByb3BzPXtyZXZlcnNlQ29sb3I6ITEsdmFyaWFudDpcInByaW1hcnlcIn07dmFyIGI9e2NvbG9yOnZvaWQgMCxzaXplOnZvaWQgMCxjbGFzc05hbWU6dm9pZCAwLHN0eWxlOnZvaWQgMCxhdHRyOnZvaWQgMH0saD1lLmNyZWF0ZUNvbnRleHQmJmUuY3JlYXRlQ29udGV4dChiKSxmPWZ1bmN0aW9uKCl7cmV0dXJuKGY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG89MSxhPWFyZ3VtZW50cy5sZW5ndGg7bzxhO28rKylmb3IodmFyIHIgaW4gdD1hcmd1bWVudHNbb10pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQscikmJihlW3JdPXRbcl0pO3JldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSx2PWZ1bmN0aW9uKGUsdCl7dmFyIG89e307Zm9yKHZhciBhIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsYSkmJnQuaW5kZXhPZihhKTwwJiYob1thXT1lW2FdKTtpZihudWxsIT1lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj0wO2ZvcihhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7cjxhLmxlbmd0aDtyKyspdC5pbmRleE9mKGFbcl0pPDAmJihvW2Fbcl1dPWVbYVtyXV0pfXJldHVybiBvfTtmdW5jdGlvbiB5KHQpe3JldHVybiB0JiZ0Lm1hcCgoZnVuY3Rpb24odCxvKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KHQudGFnLGYoe2tleTpvfSx0LmF0dHIpLHkodC5jaGlsZCkpfSkpfWZ1bmN0aW9uIHcodCl7cmV0dXJuIGZ1bmN0aW9uKG8pe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoayxmKHthdHRyOmYoe30sdC5hdHRyKX0sbykseSh0LmNoaWxkKSl9fWZ1bmN0aW9uIGsodCl7dmFyIG89ZnVuY3Rpb24obyl7dmFyIGEscj10LnNpemV8fG8uc2l6ZXx8XCIxZW1cIjtvLmNsYXNzTmFtZSYmKGE9by5jbGFzc05hbWUpLHQuY2xhc3NOYW1lJiYoYT0oYT9hK1wiIFwiOlwiXCIpK3QuY2xhc3NOYW1lKTt2YXIgbj10LmF0dHIsaT10LnRpdGxlLHM9dih0LFtcImF0dHJcIixcInRpdGxlXCJdKTtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsZih7c3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcImN1cnJlbnRDb2xvclwiLHN0cm9rZVdpZHRoOlwiMFwifSxvLmF0dHIsbixzLHtjbGFzc05hbWU6YSxzdHlsZTpmKHtjb2xvcjp0LmNvbG9yfHxvLmNvbG9yfSxvLnN0eWxlLHQuc3R5bGUpLGhlaWdodDpyLHdpZHRoOnIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifSksaSYmZS5jcmVhdGVFbGVtZW50KFwidGl0bGVcIixudWxsLGkpLHQuY2hpbGRyZW4pfTtyZXR1cm4gdm9pZCAwIT09aD9lLmNyZWF0ZUVsZW1lbnQoaC5Db25zdW1lcixudWxsLChmdW5jdGlvbihlKXtyZXR1cm4gbyhlKX0pKTpvKGIpfWNvbnN0IEM9KHtpY29uOmUsc2l6ZTp0LG9uQ2xpY2s6byx2YXJpYW50OnIsY29sb3I6bixob3ZlcjppfSk9PmEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE4se29uQ2xpY2s6byx2YXJpYW50OnIsY29sb3I6bixob3ZlcjppfSxhLmRlZmF1bHQuY3JlYXRlRWxlbWVudChlLHtzaXplOnR9KSksTj1yLmRlZmF1bHQoKHtjbGFzc05hbWU6ZSxvbkNsaWNrOnQsY2hpbGRyZW46b30pPT5hLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6ZSxvbkNsaWNrOnR9LG8pKS53aXRoQ29uZmlnKHtkaXNwbGF5TmFtZTpcIl9JY29uQnV0dG9uXCIsY29tcG9uZW50SWQ6XCJzYy0xcXJyMnFpXCJ9KWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7KHt2YXJpYW50OmUsY29sb3I6dH0pPT50fHxuW2VdfTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3Zlcjpub3QoOmFjdGl2ZSkge1xuICAgIGNvbG9yOiAkeyh7dmFyaWFudDplLGhvdmVyOnR9KT0+dHx8aVtlXX07XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gO0MuZGVmYXVsdFByb3BzPXtpY29uOmZ1bmN0aW9uKGUpe3JldHVybiB3KHt0YWc6XCJzdmdcIixhdHRyOnt2aWV3Qm94OlwiMCAwIDQ0OCA1MTJcIn0sY2hpbGQ6W3t0YWc6XCJwYXRoXCIsYXR0cjp7ZDpcIk0yMjQgNTEyYzM1LjMyIDAgNjMuOTctMjguNjUgNjMuOTctNjRIMTYwLjAzYzAgMzUuMzUgMjguNjUgNjQgNjMuOTcgNjR6bTIxNS4zOS0xNDkuNzFjLTE5LjMyLTIwLjc2LTU1LjQ3LTUxLjk5LTU1LjQ3LTE1NC4yOSAwLTc3LjctNTQuNDgtMTM5LjktMTI3Ljk0LTE1NS4xNlYzMmMwLTE3LjY3LTE0LjMyLTMyLTMxLjk4LTMycy0zMS45OCAxNC4zMy0zMS45OCAzMnYyMC44NEMxMTguNTYgNjguMSA2NC4wOCAxMzAuMyA2NC4wOCAyMDhjMCAxMDIuMy0zNi4xNSAxMzMuNTMtNTUuNDcgMTU0LjI5LTYgNi40NS04LjY2IDE0LjE2LTguNjEgMjEuNzEuMTEgMTYuNCAxMi45OCAzMiAzMi4xIDMyaDM4My44YzE5LjEyIDAgMzItMTUuNiAzMi4xLTMyIC4wNS03LjU1LTIuNjEtMTUuMjctOC42MS0yMS43MXpcIn19XX0pKGUpfSxzaXplOjI1LHZhcmlhbnQ6XCJwcmltYXJ5XCJ9LGV4cG9ydHMuQWxlcnRDb250ZXh0PW0sZXhwb3J0cy5BbGVydFByb3ZpZGVyPWZ1bmN0aW9uKHtjaGlsZHJlbjp0fSl7Y29uc3RbbyxyXT1lLnVzZVN0YXRlKCExKSxbbixpXT1lLnVzZVN0YXRlKHt9KTt2YXIgcztjb25zdCBsPSgpPT57cighMSl9O3JldHVybiBhLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtLlByb3ZpZGVyLHt2YWx1ZTp7c2hvdzplPT57cyYmY2xlYXJUaW1lb3V0KHMpLGkoZSkscighMCksZS5kdXJhdGlvbiYmKHM9c2V0VGltZW91dCgoKT0+bCgpLGUuZHVyYXRpb24pKX0saGlkZTpsfX0sYS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoeCxPYmplY3QuYXNzaWduKHt9LE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxuKSx7dmlzaWJsZTpvLHNldFByb3BzOmksaGlkZTpsfSkpKSx0KX0sZXhwb3J0cy5CdXR0b249ZyxleHBvcnRzLkV4YW1wbGU9KCk9PmEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JvbGU6XCJoZWFkaW5nXCJ9LFwiTXkgQ29tcG9uZW50XCIpLGV4cG9ydHMuSWNvbkJ1dHRvbj1DO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9idWlsZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=