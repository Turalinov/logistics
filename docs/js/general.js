/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/general.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/popup/popup.js":
/*!***********************************!*\
  !*** ./src/blocks/popup/popup.js ***!
  \***********************************/
/*! exports provided: Popup, PopupThanks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupThanks", function() { return PopupThanks; });
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popup = /*#__PURE__*/function () {
  function Popup(popup) {
    _classCallCheck(this, Popup);
    this.popup = popup;
    this.name = this.popup.getAttribute('data-popup');
    this.open_btn = document.querySelectorAll('.get-popup[data-popup="' + this.name + '"]');
    this.popupClose = this.popup.querySelector('.popup__close');
    this.closer = this.popup.querySelector('.button--close');
    this.events();
  }
  return _createClass(Popup, [{
    key: "events",
    value: function events() {
      var _this = this;
      this.open_btn.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
          evt.preventDefault();
          _this.openPopup();
        });
      });
      if (this.closer) {
        this.closer.addEventListener('click', function () {
          _this.hidePopup();
        });
      }
      document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup__wrapper')) {
          _this.hidePopup();
        }
      });
      this.popupClose.addEventListener('click', function () {
        _this.hidePopup();
      });
      window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
          _this.hidePopup();
        }
      });
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      var prevPopup = document.querySelector('.popup.opened');
      if (prevPopup) {
        prevPopup.classList.remove('opened');
      }
      this.popup.classList.add('opened');
      document.body.classList.add('lock');
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.popup.classList.remove('opened');
      document.body.classList.remove('lock');
    }
  }]);
}();
var PopupThanks = /*#__PURE__*/function (_Popup) {
  function PopupThanks(popup) {
    var _this2;
    _classCallCheck(this, PopupThanks);
    _this2 = _callSuper(this, PopupThanks, [popup]);
    _this2.isOpened = false;
    _this2.closer = _this2.popup.querySelector('.popup__close');
    return _this2;
  }
  _inherits(PopupThanks, _Popup);
  return _createClass(PopupThanks, [{
    key: "events",
    value: function events() {
      this.hidePopup();
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      _get(_getPrototypeOf(PopupThanks.prototype), "openPopup", this).call(this);
      this.isOpened = true;
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      _get(_getPrototypeOf(PopupThanks.prototype), "hidePopup", this).call(this);
      this.isOpened = false;
    }
  }]);
}(Popup);


/***/ }),

/***/ "./src/blocks/tabs/tabs.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/tabs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tabs = /*#__PURE__*/function () {
  function Tabs(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Tabs);
    this._target = target;
    this.setOptions(options);
    this.init();
  }
  return _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.getTabs().forEach(function (item) {
        item.addEventListener("click", function () {
          _this.toggleTab(item);
        });
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(x) {
      return this.DEFAULT_OPTION = {
        DATA_TAB: x.dataTab && x.dataTab !== "" ? x.dataTab : "data-tab",
        DATA_CONTENT: x.dataContent && x.dataContent !== "" ? x.dataContent : "data-content",
        TAB_ACTIVE_CLASS: x.tabsItemActive && x.tabsItemActive !== "" ? x.tabsItemActive : "tabs__item--active",
        CONTENT_ACTIVE_CLASS: x.tabsContentActive && x.tabsContentActive !== "" ? x.tabsContentActive : "tabs__content--active"
      };
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return this._target.querySelectorAll("[".concat(this.DEFAULT_OPTION.DATA_TAB, "]"));
    }
  }, {
    key: "toggleTab",
    value: function toggleTab(item) {
      var id = item.getAttribute(this.DEFAULT_OPTION.DATA_TAB);
      var content = this._target.querySelector("[".concat(this.DEFAULT_OPTION.DATA_CONTENT, "=\"").concat(id, "\"]"));
      var activeTab = this._target.querySelector(".".concat(this.DEFAULT_OPTION.TAB_ACTIVE_CLASS, "[").concat(this.DEFAULT_OPTION.DATA_TAB, "]"));
      var activeContent = this._target.querySelector(".".concat(this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS, "[").concat(this.DEFAULT_OPTION.DATA_CONTENT, "]"));
      this.toggleClass(activeTab, item, this.DEFAULT_OPTION.TAB_ACTIVE_CLASS);
      this.toggleClass(activeContent, content, this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(activeTarget, disableTarget, activeClass) {
      activeTarget.classList.remove(activeClass);
      disableTarget.classList.add(activeClass);
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/js/controllers sync recursive \\.js$":
/*!***************************************!*\
  !*** ./src/js/controllers sync \.js$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hero_controller.js": "./src/js/controllers/hero_controller.js",
	"./influence-controller.js": "./src/js/controllers/influence-controller.js",
	"./language_controller.js": "./src/js/controllers/language_controller.js",
	"./menu_controller.js": "./src/js/controllers/menu_controller.js",
	"./reviews_controller.js": "./src/js/controllers/reviews_controller.js",
	"./select_controller.js": "./src/js/controllers/select_controller.js",
	"./slider-abilities_controller.js": "./src/js/controllers/slider-abilities_controller.js",
	"./slider-about_controller.js": "./src/js/controllers/slider-about_controller.js",
	"./slider-block_controller.js": "./src/js/controllers/slider-block_controller.js",
	"./slider-center_controller.js": "./src/js/controllers/slider-center_controller.js",
	"./slider-description_controller.js": "./src/js/controllers/slider-description_controller.js",
	"./slider-guarantees_controller.js": "./src/js/controllers/slider-guarantees_controller.js",
	"./slider-infinity_controller.js": "./src/js/controllers/slider-infinity_controller.js",
	"./test_controller.js": "./src/js/controllers/test_controller.js",
	"./type-writer_controller.js": "./src/js/controllers/type-writer_controller.js",
	"./volume_controller.js": "./src/js/controllers/volume_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/js/controllers sync recursive \\.js$";

/***/ }),

/***/ "./src/js/controllers/hero_controller.js":
/*!***********************************************!*\
  !*** ./src/js/controllers/hero_controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (window.matchMedia('(min-width: 1199px)').matches) {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 'auto',
        spaceBetween: 49,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/influence-controller.js":
/*!****************************************************!*\
  !*** ./src/js/controllers/influence-controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var items = document.querySelectorAll(".influence__item");
var influenceButtons = document.querySelectorAll(".influence__button");
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "toggle",
    value: function toggle(e) {
      e.preventDefault();
      var item = e.target.closest(".influence__item");
      var button = item.querySelector(".influence__button");
      if (!item.classList.contains("influence__item--opened")) {
        this.close();
      }
      item.classList.toggle("influence__item--opened");
      button.classList.toggle("influence__button--opened");
    }
  }, {
    key: "close",
    value: function close() {
      items.forEach(function (it) {
        if (it.classList.contains("influence__item--opened")) {
          it.classList.remove("influence__item--opened");
        }
      });
      influenceButtons.forEach(function (it) {
        if (it.classList.contains("influence__button--opened")) {
          it.classList.remove("influence__button--opened");
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);
_defineProperty(_default, "targets", ["link"]);


/***/ }),

/***/ "./src/js/controllers/language_controller.js":
/*!***************************************************!*\
  !*** ./src/js/controllers/language_controller.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        var list = this.listTarget;
        var target = e.target.closest("li");
        if (target && target.classList.contains("language__item--current")) {
          e.preventDefault();
          list.classList.toggle("header__language--opened");
        }
      }
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);
_defineProperty(_default, "targets", ["list"]);


/***/ }),

/***/ "./src/js/controllers/menu_controller.js":
/*!***********************************************!*\
  !*** ./src/js/controllers/menu_controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var menu = document.querySelector(".menu__wrapper");
var burger = document.querySelector(".menu__burger");
var logo = document.querySelector(".header__logo");
var overlay = document.querySelector(".overlay-menu");
var lang = document.querySelector(".header__right");
var logoImg = logo.querySelector("img");
var logoWhiteSrc = "img/logo.svg";
var logoDarkSrc = "img/logo@dark.svg";
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "toggle",
    value: function toggle(e) {
      e.preventDefault();

      // Проверяем наличие классов для внутренних страниц с логотипом другого цвета

      // Меняем лого
      // if (logo.classList.contains(`header-inside__logo`) && !logo.classList.contains(`header__logo--opened`)) {
      //   logoImg.src = logoWhiteSrc;
      // }

      // if (logo.classList.contains(`header-inside__logo`) && logo.classList.contains(`header__logo--opened`)) {
      //   logoImg.src = logoDarkSrc;
      // }
      //

      if (window.matchMedia("(max-width: 1199px)").matches) {
        lang.classList.toggle("header__right--opened");
      }
      menu.classList.toggle("menu__wrapper--opened");
      burger.classList.toggle("menu__burger--opened");
      logo.classList.toggle("header__logo--opened");
      overlay.classList.toggle("overlay-menu--opened");
      document.body.classList.toggle("overlay-body__body");
    }
  }, {
    key: "toggleSublist",
    value: function toggleSublist(e) {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        if (e.target.tagName === "A") {
          e.preventDefault();
        }
        var container = e.target.closest("li");
        var title = container.querySelector("p");
        var sublist = container.querySelector(".menu__sub-list");
        title.classList.toggle("menu__sub-title--opened");
        sublist.classList.toggle("menu__sub-list--opened");
      }
    }
  }, {
    key: "close",
    value: function close(e) {
      e.preventDefault();

      // if (logo.classList.contains(`header-inside__logo`) && !logo.classList.contains(`header__logo--opened`)) {
      //   logoImg.src = logoWhiteSrc;
      // }

      // if (logo.classList.contains(`header-inside__logo`) && logo.classList.contains(`header__logo--opened`)) {
      //   logoImg.src = logoDarkSrc;
      // }
      //
      if (window.matchMedia("(max-width: 1199px)").matches) {
        lang.classList.toggle("header__right--opened");
      }
      menu.classList.toggle("menu__wrapper--opened");
      burger.classList.toggle("menu__burger--opened");
      logo.classList.toggle("header__logo--opened");
      overlay.classList.toggle("overlay-menu--opened");
      document.body.classList.toggle("overlay-body__body");
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);
_defineProperty(_default, "targets", ["link", "close-link", "trigger"]);


/***/ }),

/***/ "./src/js/controllers/reviews_controller.js":
/*!**************************************************!*\
  !*** ./src/js/controllers/reviews_controller.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        loop: true,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 50
          },
          1200: {
            slidesPerView: 'auto',
            spaceBetween: 157
          }
        }
      });
      this.innerTargets.forEach(function (item) {
        var inner = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](item, {
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1200: {
              slidesPerView: 'auto',
              autoplay: false
            }
          }
        });
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next", "inner"]);


/***/ }),

/***/ "./src/js/controllers/select_controller.js":
/*!*************************************************!*\
  !*** ./src/js/controllers/select_controller.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      new nativejs_select__WEBPACK_IMPORTED_MODULE_0___default.a({
        selector: '.select__input'
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["input"]);


/***/ }),

/***/ "./src/js/controllers/slider-abilities_controller.js":
/*!***********************************************************!*\
  !*** ./src/js/controllers/slider-abilities_controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (window.matchMedia('(max-width: 1199px)').matches) {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/slider-about_controller.js":
/*!*******************************************************!*\
  !*** ./src/js/controllers/slider-about_controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/slider-block_controller.js":
/*!*******************************************************!*\
  !*** ./src/js/controllers/slider-block_controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/slider-center_controller.js":
/*!********************************************************!*\
  !*** ./src/js/controllers/slider-center_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (window.matchMedia('(max-width: 1199px)').matches) {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/slider-description_controller.js":
/*!*************************************************************!*\
  !*** ./src/js/controllers/slider-description_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (window.matchMedia('(max-width: 1199px)').matches) {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/slider-guarantees_controller.js":
/*!************************************************************!*\
  !*** ./src/js/controllers/slider-guarantees_controller.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (window.matchMedia('(max-width: 1199px)').matches) {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/slider-infinity_controller.js":
/*!**********************************************************!*\
  !*** ./src/js/controllers/slider-infinity_controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.containerTarget, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget
        }
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);
_defineProperty(_default, "targets", ["container", "prev", "next"]);


/***/ }),

/***/ "./src/js/controllers/test_controller.js":
/*!***********************************************!*\
  !*** ./src/js/controllers/test_controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "greet",
    value: function greet() {
      console.log("Hello, folder controller");
    }
  }, {
    key: "name",
    get: function get() {
      return this.nameTarget.value;
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);
_defineProperty(_default, "targets", ["name"]);


/***/ }),

/***/ "./src/js/controllers/type-writer_controller.js":
/*!******************************************************!*\
  !*** ./src/js/controllers/type-writer_controller.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import { Controller } from "stimulus";
// import Typewriter from 'typewriter-effect/dist/core';
// // https://www.npmjs.com/package/typewriter-effect Документация
//
// export default class extends Controller {
//   static targets = [ `target` ]
//
//   connect() {
//     this.init();
//   }
//
//   init() {
//     const words = this.targetTarget.getAttribute(`data-words`);
//     new Typewriter(this.targetTarget, {
//       strings: words,
//       autoStart: true,
//       loop: false,
//       delay: 50,
//       cursor: ''
//     });
//   }
// }

/***/ }),

/***/ "./src/js/controllers/volume_controller.js":
/*!*************************************************!*\
  !*** ./src/js/controllers/volume_controller.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "calculate",
    value: function calculate(e) {
      var form = this.formTarget;
      var errors = 0;
      var field = form.querySelectorAll("input");
      field.forEach(function (it) {
        if (!it.value || it.value < 0) {
          errors += 1;
        }
      });
      if (!errors) {
        e.preventDefault();
        var phis = this.quantityTarget.value * this.weightTarget.value;
        var vol = this.quantityTarget.value * this.lengthTarget.value * this.widthTarget.value * this.heightTarget.value * 167;
        var diff = vol - phis;
        this.phisTarget.innerHTML = phis.toFixed(2);
        this.volTarget.innerHTML = vol.toFixed(2);
        if (diff < 0) {
          this.differenceTarget.innerHTML = "";
        } else {
          this.differenceTarget.innerHTML = diff.toFixed(2);
        }
      }
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);
_defineProperty(_default, "targets", ["quantity", "length", "width", "height", "weight", "phis", "vol", "difference", "form"]);


/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/js/util/index.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/tabs/tabs.js");
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typewriter-effect/dist/core */ "./node_modules/typewriter-effect/dist/core.js");
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_cloud_animation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/cloud-animation.js */ "./src/js/util/cloud-animation.js");
/* harmony import */ var _util_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/map */ "./src/js/util/map.js");
/* harmony import */ var _blocks_popup_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/popup/popup */ "./src/blocks/popup/popup.js");









// import {send} from './util/send-form';

var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();
var context = __webpack_require__("./src/js/controllers sync recursive \\.js$");
var WORD_DELAY = 50;
var infinity = document.querySelector('.promo__accent b');
var inputs = document.querySelectorAll('.field__input');
var phones = document.querySelectorAll(".field__input--phone");
var textareas = document.querySelectorAll('.field__textarea');
var tabs = document.querySelectorAll(".tabs");
var phoneOption = {
  mask: '{+7} (000) 000-00-00',
  lazy: true
};
application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));
function fixTextareaSize(textarea) {
  textarea.style.height = textarea.scrollHeight + 2 + "px";
}
function addInfinity() {
  var _loop = function _loop(i) {
    setTimeout(function () {
      if (i === 200) {
        infinity.innerHTML = '∞';
        infinity.parentNode.classList.add('promo__accent--big');
      } else {
        infinity.innerHTML = i;
      }
    }, i * 17);
  };
  for (var i = 2; i <= 200; i++) {
    _loop(i);
  }
}
tabs.forEach(function (item) {
  return new _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_4__["default"](item);
});

// Инициализация маски для телефона
phones.forEach(function (item) {
  var mask = Object(imask__WEBPACK_IMPORTED_MODULE_2__["default"])(item, phoneOption);
  item.addEventListener('focus', function () {
    mask.updateOptions({
      lazy: false
    });
  }, true);
  item.addEventListener('blur', function () {
    mask.updateOptions({
      lazy: true
    });
    if (!mask.masked.rawInputValue) {
      mask.value = '';
      item.parentNode.classList.remove('field--no-empty');
    }
  }, true);
});
inputs.forEach(function (item) {
  item.addEventListener('input', function () {
    if (item.value.length > 0) {
      item.parentNode.classList.add('field--no-empty');
    } else {
      console.log('ff');
      item.parentNode.classList.remove('field--no-empty');
    }
  });
});
textareas.forEach(function (item) {
  item.addEventListener('input', function (e) {
    fixTextareaSize(e.target);
  });
  fixTextareaSize(item);
});
if (infinity) {
  addInfinity();
}
var stepsButton = document.querySelector(".how-order__button");
var stepsList = document.querySelector(".steps");
if (stepsList) {
  stepsButton.addEventListener("click", function () {
    stepsList.classList.remove("steps--hidden");
    stepsButton.style.display = "none";
  });
}
function getCoords(elem) {
  // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
var about = document.querySelector(".about");
var cta = document.querySelector(".cta");
var consultation = document.querySelector(".consultation");
var chatMessages = document.querySelectorAll(".chat__item");
var deliveryNumbers = document.querySelectorAll(".page-info__number");
var isChatAnimate = true;
window.addEventListener("scroll", function () {
  if (about) {
    if (window.pageYOffset >= getCoords(about).top - 150) {
      if (isChatAnimate) {
        animateChat();
      }
    }
  }
  if (cta) {
    if (window.pageYOffset >= getCoords(cta).top - 150) {
      cta.classList.add("cta--active");
    }
  }
  if (consultation) {
    if (window.pageYOffset >= getCoords(consultation).top - 150) {
      consultation.classList.add("consultation--active");
    }
  }
  if (deliveryNumbers) {
    deliveryNumbers.forEach(function (it) {
      if (window.pageYOffset >= getCoords(it).top - 500) {
        it.classList.add("page-info__number--active");
      }
    });
  }
});
function animateChat() {
  // Массив временных промежутков, за каждый из которых текст полностью печатается в определенном блоке
  var timerArray = getTimeArray();

  // Объявляем переменную задержки времени между блоками
  var time;
  chatMessages.forEach(function (item, index) {
    var text = item.querySelector(".chat__text");
    // const time = text.getAttribute(`data-time`);

    // Переопределяем задержку времени для кажого блока в зависимости от итерации
    timerArray[index] == 0 ? time = 0 : time = time + timerArray[index] + 1100;

    // Отрисовываем текст
    setTimeout(function () {
      // Отображаем блок
      item.classList.add("chat__item--active");
      setTimeout(function () {
        writeText(text);
      }, 300);
    }, time);
  });
  isChatAnimate = false;
}

/**
 * Автоматический набор текста
  txt : блок с текстом
  word : текст из дата атрибута
  wordArray : разбивает строку текста на отдельные буквы и записывает в массив
 *
 */
var writeText = function writeText(txt) {
  var word = txt.getAttribute("data-word");
  var wordArray = word.split('');
  var _loop2 = function _loop2(i) {
    setTimeout(function () {
      txt.innerHTML = txt.innerHTML + wordArray[i];
    }, WORD_DELAY * i);
  };
  for (var i = 0; i < wordArray.length; i++) {
    _loop2(i);
  }
};

// Получает массив задержек, за сколько отрисовывается КАЖДЫЙ текст в блоке по отдельности, задержку от нулевого индекса приравниваем к 0
var getTimeArray = function getTimeArray() {
  var timer = [0];
  chatMessages.forEach(function (item) {
    // Находит длину каждого текста и умножает на задержку между буквами
    var time = item.querySelector(".chat__text").getAttribute("data-word").length * WORD_DELAY;
    // Пушит новое значение в массив
    timer.push(time);
  });
  return timer;
};
document.addEventListener("DOMContentLoaded", function () {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }
          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });
    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

// ТЕСТ ФОРМ ******************************************************

var popupThanks = document.querySelector(".popup--thanks");
var ajaxSend = function ajaxSend(url, method, data) {
  return fetch(url, {
    method: method,
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    body: data
  }).then(function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    console.log('success');
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var formValidate = function formValidate(form) {
  var fields = form.elements;
  var result = true;
  var phoneRegular = /^\d+$/;
  [].forEach.call(fields, function (el) {
    var parent = el.parentElement;
    var label = parent.querySelector('label');
    // Переопределяем если у элемента отсутствует label (кнопки управления, кастомные селекты)
    if (!label) {
      // Проверяем элемент на наличие кнопки отправки
      if (parent.classList.contains('offers__controls')) {
        return;
      }
      // Переопределяем в кастомном селекте
      label = parent.closest('.offers__item').querySelector('label');
    }
    var tel = el.classList.contains('field__input--phone');
    var errorMessage = parent.dataset.message;
    var labelText = label.getAttribute('data-description');
    if (el.required && el.value.length < 1 || tel && el.value.length < 18 && !phoneRegular.test(el.value) || el.inputMode === 'email' && el.value.length >= 1 && el.value.indexOf("@") < 1) {
      if (el.value.length < 1) {
        label.innerHTML = 'Поле должно быть заполнено';
      } else {
        label.innerHTML = errorMessage;
      }
      parent.classList.add('field--no-empty');
      parent.classList.add('field--error');
      setTimeout(function () {
        parent.classList.remove('field--error');
        label.innerHTML = labelText;
        if (el.value.length === 0) {
          parent.classList.remove('field--no-empty');
        }
      }, 2000);
      result = false;
    }
  });
  return result;
};
var send = function send(evt) {
  evt.preventDefault();
  var target = evt.target;
  var formData = new FormData(target);
  if (formValidate(target)) {
    ajaxSend(window.global.ajax_url, 'post', formData).then(function (data) {
      return console.log(data);
    });
    target.reset();
    new _blocks_popup_popup__WEBPACK_IMPORTED_MODULE_8__["PopupThanks"](popupThanks).openPopup();
  } else {
    console.log("error");
  }
};
var forms = document.querySelectorAll("form");
forms.forEach(function (item) {
  if (!item.classList.contains("offers__form--volume")) {
    item.addEventListener("submit", function (evt) {
      send(evt);
    });
  }
});

// ******************************************************************

// Анимация облаков ****************************************************
var wordsWrappers = document.querySelectorAll(".page-info__item--img");
if (window.matchMedia("(min-width: 1200px)").matches) {
  wordsWrappers.forEach(function (it) {
    Object(_util_cloud_animation_js__WEBPACK_IMPORTED_MODULE_6__["cloudAnimation"])(it);
  });
}
// *******************************************************************

var mapBox = document.querySelector("#map");
if (mapBox) {
  Object(_util_map__WEBPACK_IMPORTED_MODULE_7__["map"])();
}
var popups = document.querySelectorAll(".popup");
popups.forEach(function (it) {
  new _blocks_popup_popup__WEBPACK_IMPORTED_MODULE_8__["Popup"](it);
});

/***/ }),

/***/ "./src/js/util/cloud-animation.js":
/*!****************************************!*\
  !*** ./src/js/util/cloud-animation.js ***!
  \****************************************/
/*! exports provided: cloudAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudAnimation", function() { return cloudAnimation; });
var cloudAnimation = function cloudAnimation(it) {
  var cloudBox = it.querySelector(".page-info__cloud-wrapper");
  var startCloudCoords = {
    x: cloudBox.offsetLeft,
    y: cloudBox.offsetTop
  };
  var shiftCount = {
    x: 0,
    y: 0
  };
  it.addEventListener("mouseenter", function (e) {
    var startCoords = {
      x: e.clientX,
      y: e.clientY
    };
    var mouseMoveHandler = function mouseMoveHandler(moveEvent) {
      moveEvent.preventDefault();
      var shift = {
        x: moveEvent.clientX - startCoords.x,
        y: moveEvent.clientY - startCoords.y
      };
      shiftCount = {
        x: shiftCount.x + shift.x,
        y: shiftCount.y + shift.y
      };
      startCoords = {
        x: moveEvent.clientX,
        y: moveEvent.clientY
      };
      var newCloudCoords = {
        x: cloudBox.offsetLeft - shift.x,
        y: cloudBox.offsetTop - shift.y
      };
      if (Math.abs(shiftCount.x) >= 80) {
        cloudBox.style.left = newCloudCoords.x + 'px';
        shiftCount.x = 0;
      }
      if (Math.abs(shiftCount.y) >= 80) {
        cloudBox.style.top = newCloudCoords.y + 'px';
        shiftCount.y = 0;
      }
    };
    var mouseLeaveHandler = function mouseLeaveHandler(leaveEvent) {
      leaveEvent.preventDefault();
      cloudBox.style = "transition:1s;";
      cloudBox.style.left = startCloudCoords.x + 'px';
      cloudBox.style.top = startCloudCoords.y + 'px';
      it.removeEventListener('mousemove', mouseMoveHandler);
      it.removeEventListener('mouseleave', mouseLeaveHandler);
      setTimeout(function () {
        cloudBox.style = "transition:0s;";
      }, 1000);
    };
    it.addEventListener('mousemove', mouseMoveHandler);
    it.addEventListener('mouseleave', mouseLeaveHandler);
  });
};

/***/ }),

/***/ "./src/js/util/debounce.js":
/*!*********************************!*\
  !*** ./src/js/util/debounce.js ***!
  \*********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
;

/***/ }),

/***/ "./src/js/util/index.js":
/*!******************************!*\
  !*** ./src/js/util/index.js ***!
  \******************************/
/*! exports provided: $, $$, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./src/js/util/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["$$"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "./src/js/util/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]; });




/***/ }),

/***/ "./src/js/util/map.js":
/*!****************************!*\
  !*** ./src/js/util/map.js ***!
  \****************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
// Кастомные стили для пина
var styles = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}];
var image = '/app/themes/Capitals/resources/assets/img/custom-pin.svg';
var map = function map() {
  // google.maps.event.addDomListener(window, 'load', initMap);

  window.onload = function () {
    initMap();
  };
  var markers = [];
  function initMap() {
    // Список городов для переключения
    var list = document.querySelector(".contacts__list");
    // Активный элемент при загрузке страницы
    var startCity = list.querySelector(".tabs__item--active");
    // получаем дата атрибут этого элемента
    var startCoords = startCity.getAttribute("data-coordinates").split(",");

    // Начальные координаты для карты
    var myLatLng = {
      lat: +startCoords[0],
      lng: +startCoords[1]
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 10,
      styles: styles
    });
    addMarker(myLatLng);

    // Инициализация новых маркеров
    function addMarker(location) {
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image
      });
      markers.push(marker);
    }

    // Добавляем маркер на карту
    function setMapOnAll(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

    // Удаляем все маркеры с карты
    function clearMarkers() {
      setMapOnAll(null);
    }
    list.addEventListener("click", function (e) {
      var item = e.target;
      if (item.tagName === 'LI') {
        // Инициализация нового центра карты/пина
        var coords = item.getAttribute("data-coordinates").split(",");

        // Очищаем карту от пинов
        clearMarkers();

        // Добавляем новый маркер активного города и центруем карту
        addMarker({
          lat: +coords[0],
          lng: +coords[1]
        });
        map.setCenter({
          lat: +coords[0],
          lng: +coords[1]
        });
      }
    });
  }
};

/***/ }),

/***/ "./src/js/util/query.js":
/*!******************************!*\
  !*** ./src/js/util/query.js ***!
  \******************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
function $(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return scope.querySelector(selector);
}
function $$(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(scope.querySelectorAll(selector));
}

/***/ })

/******/ });
//# sourceMappingURL=general.js.map