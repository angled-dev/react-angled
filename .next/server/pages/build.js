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
    ${n.primary} 50%
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
  customHTML: h
}) => {
  const [f, v] = e.useState(!1),
        y = e.useRef(null);
  e.useEffect(() => {
    t ? v(!0) : b && w();
  }, [t]);

  const w = () => {
    v(!1), n && n(), o({});
  };

  return f ? a.default.createElement("div", {
    className: i + " " + l,
    onClick: e => {
      y && y.current && y.current.contains(e.target) || r();
    }
  }, a.default.createElement(u, {
    style: {
      animation: "" + (b ? "fadeOut " + 1 * b + "ms linear" : t ? "fadeIn 1s ease-out" : "fadeOut .4s ease-out")
    },
    title: m,
    body: x,
    buttons: g,
    onAnimationEnd: b ? void 0 : () => {
      t || w();
    },
    passRef: y,
    height: c,
    width: d,
    position: p,
    modalClassName: s,
    customHTML: h,
    visible: t
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
  background-color: ${n.overlay};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZSIsInJlcXVpcmUiLCJ0IiwibyIsImRlZmF1bHQiLCJhIiwiciIsIm4iLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29uZmlybSIsImNhbmNlbCIsIndoaXRlZ3JleSIsImRhcmtncmV5Iiwib3ZlcmxheSIsImJsdWUiLCJpIiwicyIsImtleWZyYW1lcyIsImwiLCJkaXYiLCJ3aXRoQ29uZmlnIiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnRJZCIsImMiLCJkIiwicCIsImNzcyIsInUiLCJjbGFzc05hbWUiLCJtb2RhbENsYXNzTmFtZSIsInN0eWxlIiwidGl0bGUiLCJib2R5IiwiYnV0dG9ucyIsIm9uQW5pbWF0aW9uRW5kIiwicGFzc1JlZiIsInZpc2libGUiLCJjdXN0b21IVE1MIiwibSIsImNyZWF0ZUVsZW1lbnQiLCJyZWYiLCJjdXN0b21LZXlmcmFtZXMiLCJ3aWR0aCIsImhlaWdodCIsImNyZWF0ZUNvbnRleHQiLCJ4Iiwic2V0UHJvcHMiLCJoaWRlIiwiY2FsbGJhY2siLCJvdmVybGF5Q2xhc3NOYW1lIiwicG9zaXRpb24iLCJnIiwiZHVyYXRpb24iLCJiIiwiaCIsImYiLCJ2IiwidXNlU3RhdGUiLCJ5IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidyIsIm9uQ2xpY2siLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhbmltYXRpb24iLCJGcmFnbWVudCIsImRlZmF1bHRQcm9wcyIsImNoaWxkcmVuIiwicmV2ZXJzZUNvbG9yIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsImF0dHIiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJtYXAiLCJ0YWciLCJrZXkiLCJjaGlsZCIsImsiLCJzdHJva2UiLCJmaWxsIiwic3Ryb2tlV2lkdGgiLCJ4bWxucyIsIkNvbnN1bWVyIiwiQyIsImljb24iLCJob3ZlciIsIk4iLCJ2aWV3Qm94IiwiQWxlcnRDb250ZXh0IiwiQWxlcnRQcm92aWRlciIsIlByb3ZpZGVyIiwic2hvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCdXR0b24iLCJFeGFtcGxlIiwicm9sZSIsIkljb25CdXR0b24iLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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IFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYnVpbGQuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1yZXF1aXJlKFwicmVhY3RcIiksdD1yZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJlwiZGVmYXVsdFwiaW4gZT9lOntkZWZhdWx0OmV9fXZhciBhPW8oZSkscj1vKHQpO2NvbnN0IG49e3ByaW1hcnk6XCIjMzMzXCIsc2Vjb25kYXJ5OlwiIzgwODA4MFwiLGNvbmZpcm06XCJyZ2JhKDgwLCAyMjAsIDEwMCwgMC45KVwiLGNhbmNlbDpcInJnYmEoMjU1LCA0MCwgMCwgMC44KVwiLHdoaXRlZ3JleTpcIiNlY2VjZWNcIixkYXJrZ3JleTpcIiM5YzljOWNcIixvdmVybGF5OlwicmdiYSgyMzYsMjM2LDIzNiwgMC44KVwiLGJsdWU6XCJyZ2IoMCwgMTI4LCAyNTUpXCJ9LGk9e3ByaW1hcnk6bi5zZWNvbmRhcnksc2Vjb25kYXJ5Om4ucHJpbWFyeX0scz10LmtleWZyYW1lc2BcbiAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlO1xuICB9XG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODAlO1xufVxuICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xuICB9XG5gLGw9KHQua2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcbiAgfVxuICAyMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJTtcbn1cbiAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XG4gIH1cbmAsci5kZWZhdWx0LmRpdi53aXRoQ29uZmlnKHtkaXNwbGF5TmFtZTpcIlRpdGxlXCIsY29tcG9uZW50SWQ6XCJzYy0xYnFpNHZwXCJ9KWBcbiAgZm9udC1mYW1pbHk6IFwiQXNhcFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi43NWVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBtaW4taGVpZ2h0OiAxLjJlbTtcbmApLGM9ci5kZWZhdWx0LmRpdi53aXRoQ29uZmlnKHtkaXNwbGF5TmFtZTpcIkJvZHlcIixjb21wb25lbnRJZDpcInNjLTFuNjUyOWRcIn0pYFxuICBtYXJnaW46IDAgMyUgMCAzJTtcbiAgbWluLWhlaWdodDogMzAlO1xuYCxkPXIuZGVmYXVsdC5kaXYud2l0aENvbmZpZyh7ZGlzcGxheU5hbWU6XCJCdXR0b25zXCIsY29tcG9uZW50SWQ6XCJzYy0zbDdhaWhcIn0pYFxuICBoZWlnaHQ6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWluLWhlaWdodDogMmVtO1xuYDtjb25zdCBwPXQuY3NzYFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCA4cHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBjb2xvcjogJHtuLndoaXRlZ3JleX07XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4MCU7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBjb2xvcjogJHtuLnByaW1hcnl9O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCA4cHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG4gIH1cbmAsdT1yLmRlZmF1bHQoKGZ1bmN0aW9uKHtjbGFzc05hbWU6ZSxtb2RhbENsYXNzTmFtZTp0LHN0eWxlOm8sdGl0bGU6cixib2R5Om4sYnV0dG9uczppLG9uQW5pbWF0aW9uRW5kOnMscGFzc1JlZjpwLHZpc2libGU6dSxjdXN0b21IVE1MOm19KXtyZXR1cm4gYS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOmUrXCIgXCIrdCxzdHlsZTpvLG9uQW5pbWF0aW9uRW5kOnMscmVmOnB9LHUmJiFtJiZhLmRlZmF1bHQuY3JlYXRlRWxlbWVudChsLG51bGwsciksdSYmIW0mJmEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGMsbnVsbCxuKSx1JiYhbSYmYS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZCxudWxsLGkpLHUmJm0pfSkpLndpdGhDb25maWcoe2Rpc3BsYXlOYW1lOlwiTW9kYWxcIixjb21wb25lbnRJZDpcInNjLTFpZHdlcWtcIn0pYFxuICAkeyh7Y3VzdG9tS2V5ZnJhbWVzOmV9KT0+ZXx8cH07XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjI1cywgd2lkdGggMC4yNXM7XG5cbiAgbWFyZ2luOiAxNXZoIGF1dG87XG4gIHdpZHRoOiAkeyh7d2lkdGg6ZX0pPT5lfTtcbiAgaGVpZ2h0OiAkeyh7aGVpZ2h0OmV9KT0+ZX07XG5cbiAgcGFkZGluZzogMS40ZW0gMy4zZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgY29sb3I6ICR7bi53aGl0ZWdyZXl9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgdHJhbnNwYXJlbnQgNTAlLFxuICAgICR7bi5wcmltYXJ5fSA1MCVcbiAgKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyNjQlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbmAsbT1hLmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSkseD1yLmRlZmF1bHQoKHt2aXNpYmxlOnQsc2V0UHJvcHM6byxoaWRlOnIsY2FsbGJhY2s6bixjbGFzc05hbWU6aSxtb2RhbENsYXNzTmFtZTpzLG92ZXJsYXlDbGFzc05hbWU6bCxoZWlnaHQ6Yyx3aWR0aDpkLHBvc2l0aW9uOnAsdGl0bGU6bSxib2R5OngsYnV0dG9uczpnLGR1cmF0aW9uOmIsY3VzdG9tSFRNTDpofSk9Pntjb25zdFtmLHZdPWUudXNlU3RhdGUoITEpLHk9ZS51c2VSZWYobnVsbCk7ZS51c2VFZmZlY3QoKCk9Pnt0P3YoITApOmImJncoKX0sW3RdKTtjb25zdCB3PSgpPT57dighMSksbiYmbigpLG8oe30pfTtyZXR1cm4gZj9hLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6aStcIiBcIitsLG9uQ2xpY2s6ZT0+e3kmJnkuY3VycmVudCYmeS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KXx8cigpfX0sYS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodSx7c3R5bGU6e2FuaW1hdGlvbjpcIlwiKyhiP1wiZmFkZU91dCBcIisxKmIrXCJtcyBsaW5lYXJcIjp0P1wiZmFkZUluIDFzIGVhc2Utb3V0XCI6XCJmYWRlT3V0IC40cyBlYXNlLW91dFwiKX0sdGl0bGU6bSxib2R5OngsYnV0dG9uczpnLG9uQW5pbWF0aW9uRW5kOmI/dm9pZCAwOigpPT57dHx8dygpfSxwYXNzUmVmOnksaGVpZ2h0OmMsd2lkdGg6ZCxwb3NpdGlvbjpwLG1vZGFsQ2xhc3NOYW1lOnMsY3VzdG9tSFRNTDpoLHZpc2libGU6dH0pKTphLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhLmRlZmF1bHQuRnJhZ21lbnQsbnVsbCl9KS53aXRoQ29uZmlnKHtkaXNwbGF5TmFtZTpcIkFsZXJ0XCIsY29tcG9uZW50SWQ6XCJzYy1zZzB5aWRcIn0pYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7bi5vdmVybGF5fTtcbmA7eC5kZWZhdWx0UHJvcHM9e3Zpc2libGU6ITEsaGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjUwMHB4XCJ9O2NvbnN0IGc9ci5kZWZhdWx0KCh7Y2xhc3NOYW1lOmUsY2hpbGRyZW46dCxvbkNsaWNrOm99KT0+YS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIix7Y2xhc3NOYW1lOmUsb25DbGljazpvfSx0KSkud2l0aENvbmZpZyh7ZGlzcGxheU5hbWU6XCJCdXR0b25cIixjb21wb25lbnRJZDpcInNjLWprbXJoYlwifSlgXG4gIGZvbnQtZmFtaWx5OiBcIkFzYXBcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogJHsoe3JldmVyc2VDb2xvcjplLHZhcmlhbnQ6dH0pPT5lP24ud2hpdGVncmV5Om5bdF19O1xuXG4gIGFuaW1hdGlvbjogMC42cyBsaW5lYXIgMHMgMSAke3N9O1xuXG4gIGJvcmRlcjogMC4xZW0gc29saWRcbiAgICAkeyh7cmV2ZXJzZUNvbG9yOmUsdmFyaWFudDp0fSk9PmU/bi53aGl0ZWdyZXk6blt0XX07XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxLjRlbSAzLjNlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNjAwbXMgZWFzZS1pbi1vdXQsIGNvbG9yIDYwMG1zIGVhc2UtaW4tb3V0O1xuXG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICA0NWRlZyxcbiAgICB0cmFuc3BhcmVudCA1MCUsXG4gICAgJHsoe3JldmVyc2VDb2xvcjplLHZhcmlhbnQ6dH0pPT5lP24ud2hpdGVncmV5Om5bdF19XG4gICAgICA1MCVcbiAgKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjUlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XG5cbiAgJjpob3Zlcjpub3QoOmFjdGl2ZSkge1xuICAgIGNvbG9yOiAkeyh7cmV2ZXJzZUNvbG9yOmV9KT0+ZT9uLnByaW1hcnk6bi53aGl0ZWdyZXl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMDBtcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyNSU7XG4gIH1cbmA7Zy5kZWZhdWx0UHJvcHM9e3JldmVyc2VDb2xvcjohMSx2YXJpYW50OlwicHJpbWFyeVwifTt2YXIgYj17Y29sb3I6dm9pZCAwLHNpemU6dm9pZCAwLGNsYXNzTmFtZTp2b2lkIDAsc3R5bGU6dm9pZCAwLGF0dHI6dm9pZCAwfSxoPWUuY3JlYXRlQ29udGV4dCYmZS5jcmVhdGVDb250ZXh0KGIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4oZj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQsbz0xLGE9YXJndW1lbnRzLmxlbmd0aDtvPGE7bysrKWZvcih2YXIgciBpbiB0PWFyZ3VtZW50c1tvXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxyKSYmKGVbcl09dFtyXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHY9ZnVuY3Rpb24oZSx0KXt2YXIgbz17fTtmb3IodmFyIGEgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxhKSYmdC5pbmRleE9mKGEpPDAmJihvW2FdPWVbYV0pO2lmKG51bGwhPWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPTA7Zm9yKGE9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtyPGEubGVuZ3RoO3IrKyl0LmluZGV4T2YoYVtyXSk8MCYmKG9bYVtyXV09ZVthW3JdXSl9cmV0dXJuIG99O2Z1bmN0aW9uIHkodCl7cmV0dXJuIHQmJnQubWFwKChmdW5jdGlvbih0LG8pe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQodC50YWcsZih7a2V5Om99LHQuYXR0cikseSh0LmNoaWxkKSl9KSl9ZnVuY3Rpb24gdyh0KXtyZXR1cm4gZnVuY3Rpb24obyl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChrLGYoe2F0dHI6Zih7fSx0LmF0dHIpfSxvKSx5KHQuY2hpbGQpKX19ZnVuY3Rpb24gayh0KXt2YXIgbz1mdW5jdGlvbihvKXt2YXIgYSxyPXQuc2l6ZXx8by5zaXplfHxcIjFlbVwiO28uY2xhc3NOYW1lJiYoYT1vLmNsYXNzTmFtZSksdC5jbGFzc05hbWUmJihhPShhP2ErXCIgXCI6XCJcIikrdC5jbGFzc05hbWUpO3ZhciBuPXQuYXR0cixpPXQudGl0bGUscz12KHQsW1wiYXR0clwiLFwidGl0bGVcIl0pO3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixmKHtzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwiY3VycmVudENvbG9yXCIsc3Ryb2tlV2lkdGg6XCIwXCJ9LG8uYXR0cixuLHMse2NsYXNzTmFtZTphLHN0eWxlOmYoe2NvbG9yOnQuY29sb3J8fG8uY29sb3J9LG8uc3R5bGUsdC5zdHlsZSksaGVpZ2h0OnIsd2lkdGg6cix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9KSxpJiZlLmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLG51bGwsaSksdC5jaGlsZHJlbil9O3JldHVybiB2b2lkIDAhPT1oP2UuY3JlYXRlRWxlbWVudChoLkNvbnN1bWVyLG51bGwsKGZ1bmN0aW9uKGUpe3JldHVybiBvKGUpfSkpOm8oYil9Y29uc3QgQz0oe2ljb246ZSxzaXplOnQsb25DbGljazpvLHZhcmlhbnQ6cixjb2xvcjpuLGhvdmVyOml9KT0+YS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTix7b25DbGljazpvLHZhcmlhbnQ6cixjb2xvcjpuLGhvdmVyOml9LGEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGUse3NpemU6dH0pKSxOPXIuZGVmYXVsdCgoe2NsYXNzTmFtZTplLG9uQ2xpY2s6dCxjaGlsZHJlbjpvfSk9PmEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTplLG9uQ2xpY2s6dH0sbykpLndpdGhDb25maWcoe2Rpc3BsYXlOYW1lOlwiX0ljb25CdXR0b25cIixjb21wb25lbnRJZDpcInNjLTFxcnIycWlcIn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHsoe3ZhcmlhbnQ6ZSxjb2xvcjp0fSk9PnR8fG5bZV19O1xuICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dDtcblxuICAmOmhvdmVyOm5vdCg6YWN0aXZlKSB7XG4gICAgY29sb3I6ICR7KHt2YXJpYW50OmUsaG92ZXI6dH0pPT50fHxpW2VdfTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmA7Qy5kZWZhdWx0UHJvcHM9e2ljb246ZnVuY3Rpb24oZSl7cmV0dXJuIHcoe3RhZzpcInN2Z1wiLGF0dHI6e3ZpZXdCb3g6XCIwIDAgNDQ4IDUxMlwifSxjaGlsZDpbe3RhZzpcInBhdGhcIixhdHRyOntkOlwiTTIyNCA1MTJjMzUuMzIgMCA2My45Ny0yOC42NSA2My45Ny02NEgxNjAuMDNjMCAzNS4zNSAyOC42NSA2NCA2My45NyA2NHptMjE1LjM5LTE0OS43MWMtMTkuMzItMjAuNzYtNTUuNDctNTEuOTktNTUuNDctMTU0LjI5IDAtNzcuNy01NC40OC0xMzkuOS0xMjcuOTQtMTU1LjE2VjMyYzAtMTcuNjctMTQuMzItMzItMzEuOTgtMzJzLTMxLjk4IDE0LjMzLTMxLjk4IDMydjIwLjg0QzExOC41NiA2OC4xIDY0LjA4IDEzMC4zIDY0LjA4IDIwOGMwIDEwMi4zLTM2LjE1IDEzMy41My01NS40NyAxNTQuMjktNiA2LjQ1LTguNjYgMTQuMTYtOC42MSAyMS43MS4xMSAxNi40IDEyLjk4IDMyIDMyLjEgMzJoMzgzLjhjMTkuMTIgMCAzMi0xNS42IDMyLjEtMzIgLjA1LTcuNTUtMi42MS0xNS4yNy04LjYxLTIxLjcxelwifX1dfSkoZSl9LHNpemU6MjUsdmFyaWFudDpcInByaW1hcnlcIn0sZXhwb3J0cy5BbGVydENvbnRleHQ9bSxleHBvcnRzLkFsZXJ0UHJvdmlkZXI9ZnVuY3Rpb24oe2NoaWxkcmVuOnR9KXtjb25zdFtvLHJdPWUudXNlU3RhdGUoITEpLFtuLGldPWUudXNlU3RhdGUoe30pO3ZhciBzO2NvbnN0IGw9KCk9PntyKCExKX07cmV0dXJuIGEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG0uUHJvdmlkZXIse3ZhbHVlOntzaG93OmU9PntzJiZjbGVhclRpbWVvdXQocyksaShlKSxyKCEwKSxlLmR1cmF0aW9uJiYocz1zZXRUaW1lb3V0KCgpPT5sKCksZS5kdXJhdGlvbikpfSxoaWRlOmx9fSxhLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh4LE9iamVjdC5hc3NpZ24oe30sT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG4pLHt2aXNpYmxlOm8sc2V0UHJvcHM6aSxoaWRlOmx9KSkpLHQpfSxleHBvcnRzLkJ1dHRvbj1nLGV4cG9ydHMuRXhhbXBsZT0oKT0+YS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cm9sZTpcImhlYWRpbmdcIn0sXCJNeSBDb21wb25lbnRcIiksZXhwb3J0cy5JY29uQnV0dG9uPUM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2J1aWxkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==