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

/***/ "./src/blocks/animation/animation.js":
/*!*******************************************!*\
  !*** ./src/blocks/animation/animation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animation; });
/* harmony import */ var _js_util_cloud_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/util/cloud-animation.js */ "./src/js/util/cloud-animation.js");

function animation() {
  console.log('animation.js');
  var WORD_DELAY = 50;
  var isChatAnimate = true;
  var about = document.querySelector(".about");
  var chatMessages = document.querySelectorAll(".chat__item");
  var cta = document.querySelector(".cta");
  var consultation = document.querySelector(".consultation");
  function getCoords(elem) {
    // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
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
    var _loop = function _loop(i) {
      setTimeout(function () {
        txt.innerHTML = txt.innerHTML + wordArray[i];
      }, WORD_DELAY * i);
    };
    for (var i = 0; i < wordArray.length; i++) {
      _loop(i);
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
  var deliveryNumbers = document.querySelectorAll(".page-info__number");
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

  // Анимация облаков ****************************************************
  var wordsWrappers = document.querySelectorAll(".page-info__item--img");
  if (wordsWrappers) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      wordsWrappers.forEach(function (it) {
        Object(_js_util_cloud_animation_js__WEBPACK_IMPORTED_MODULE_0__["cloudAnimation"])(it);
      });
    }
  }
}

/***/ }),

/***/ "./src/blocks/field/field.js":
/*!***********************************!*\
  !*** ./src/blocks/field/field.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return field; });
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

function field() {
  var inputs = document.querySelectorAll('.field__input');
  if (inputs) {
    var fixTextareaSize = function fixTextareaSize(textarea) {
      textarea.style.height = textarea.scrollHeight + 2 + "px";
    };
    console.log('field.js');
    var phones = document.querySelectorAll(".field__input--phone");
    var textareas = document.querySelectorAll('.field__textarea');
    var phoneOption = {
      mask: '{+7} (000) 000-00-00',
      lazy: true
    };
    textareas.forEach(function (item) {
      item.addEventListener('input', function (e) {
        fixTextareaSize(e.target);
      });
      fixTextareaSize(item);
    });

    // Инициализация маски для телефона
    phones.forEach(function (item) {
      var mask = Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(item, phoneOption);
      item.addEventListener('focus', function () {
        // если true - то подсказка при фокусе не появляется, если false подсказка появляется сразу
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
          item.parentNode.classList.remove('field--no-empty');
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/blocks/form/form.js":
/*!*********************************!*\
  !*** ./src/blocks/form/form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return form; });
/* harmony import */ var _blocks_popup_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/popup/popup.js */ "./src/blocks/popup/popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function form() {
  var forms = document.querySelectorAll("form");
  if (forms && forms.length > 0) {
    console.log('form.js');
    var popupThanks = document.querySelector(".popup--thanks");

    //валидация
    var formValidate = function formValidate(form) {
      var fields = form.elements;
      //первичный флаг проверки установлен в true
      var result = true;
      var phoneRegular = /^\d+$/;
      [].forEach.call(fields, function (el) {
        if (el.type === 'hidden') {
          return;
        }
        var parent = el.parentElement;
        var label = parent.querySelector('label');

        // Переопределяем если у элемента отсутствует label (кнопки управления, кастомные селекты)
        if (!label) {
          // Проверяем элемент на наличие кнопки отправки
          if (parent.classList.contains('offers__controls')) {
            return; // Прерывает только текущую итерацию функции
          }
          // Проверяем элемент на наличие кнопки отправки
          if (parent.classList.contains('offers__btn')) {
            return; // Прерывает только текущую итерацию функции
          }
          // Переопределяем в кастомном селекте
          label = parent.closest('.offers__item').querySelector('label');
        }
        var tel = el.classList.contains('field__input--phone');
        var errorMessage = parent.dataset.message;
        var labelText = label.getAttribute('data-description');
        console.log({
          labelText: labelText
        });
        if (
        //если это поле required и это поле пустое
        el.required && el.value.length < 1 ||
        // или если это поле телефона и количество строк меньше 18 и телефон не проходит тест ругулярки
        tel && el.value.length < 18 && !phoneRegular.test(el.value) ||
        //или если это поле email и это поле пустое или введен один символ и у поле нет @
        el.inputMode === 'email' && el.value.length >= 1 && el.value.indexOf("@") < 1) {
          // если поле пустое даем label новое значение
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

    //отправка данных
    var postData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(url, {
                method: "POST",
                body: data
              }).then( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context.next = 3;
                          break;
                        }
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return _context.abrupt("return", Promise.reject(new Error("Looks like there was a problem. Status Code: ".concat(response.status))));
                      case 3:
                        console.log('success');
                        _context.next = 6;
                        return response.json();
                      case 6:
                        return _context.abrupt("return", _context.sent);
                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 2:
              response = _context2.sent;
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function postData(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
    var send = function send(evt) {
      evt.preventDefault();
      var target = evt.target;
      var formData = new FormData(target);

      // Перебираем содержимое FormData
      var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          console.log(pair[0] + ': ' + pair[1]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (formValidate(target)) {
        //обаботка в зависимости от результата отправки
        postData("vendor/action-form.php", formData).then(function (data) {
          console.log({
            data: data
          });
          target.reset();

          //показываем модалку благодарности
          new _blocks_popup_popup_js__WEBPACK_IMPORTED_MODULE_0__["PopupThanks"](popupThanks).openPopup();
        })["catch"](function (err) {
          console.log(err);
          alert(err.message);

          //можем показать модалку с ошибкой
        })["finally"](function () {
          //
        });
      } else {
        console.log("error form validate");
      }
    };
    forms.forEach(function (item) {
      if (!item.classList.contains("offers__form--volume")) {
        item.addEventListener("submit", function (evt) {
          send(evt);
        });
      }
    });
  }
}

/***/ }),

/***/ "./src/blocks/map/map.js":
/*!*******************************!*\
  !*** ./src/blocks/map/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapBox; });
/* harmony import */ var _js_util_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/util/map */ "./src/js/util/map.js");

function mapBox() {
  var mapBox = document.querySelector("#map");
  if (mapBox) {
    console.log('map.js');
    Object(_js_util_map__WEBPACK_IMPORTED_MODULE_0__["map"])();
  }
}

/***/ }),

/***/ "./src/blocks/popup/popup.js":
/*!***********************************!*\
  !*** ./src/blocks/popup/popup.js ***!
  \***********************************/
/*! exports provided: PopupThanks, popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupThanks", function() { return PopupThanks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
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
    console.log({
      name: name
    });
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
function popup() {
  var popups = document.querySelectorAll(".popup");
  if (popups) {
    console.log('popups.js');
    popups.forEach(function (it) {
      new Popup(it);
    });
  }
}


/***/ }),

/***/ "./src/blocks/promo/promo.js":
/*!***********************************!*\
  !*** ./src/blocks/promo/promo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promo; });
function promo() {
  var infinity = document.querySelector('.promo__accent b');
  if (infinity) {
    var addInfinity = function addInfinity() {
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
    };
    console.log('promo.js');
    addInfinity();
  }
}

/***/ }),

/***/ "./src/blocks/scroll-links/scroll-links.js":
/*!*************************************************!*\
  !*** ./src/blocks/scroll-links/scroll-links.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollLinks; });
function scrollLinks() {
  var scrollLinks = document.querySelectorAll('.scroll-link');
  if (scrollLinks) {
    scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
}

/***/ }),

/***/ "./src/blocks/tabs/tabs.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/tabs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs; });
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
      var el = this._target.querySelectorAll("[".concat(this.DEFAULT_OPTION.DATA_TAB, "]"));
      return el;
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
function tabs() {
  var tabs = document.querySelectorAll(".tabs");
  if (tabs) {
    console.log('tabs.js');
    tabs.forEach(function (item) {
      return new Tabs(item);
    });
  }
}

/***/ }),

/***/ "./src/blocks/video/video.js":
/*!***********************************!*\
  !*** ./src/blocks/video/video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return video; });
function video() {
  console.log('video.js');
  document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
      console.log('IntersectionObserver');
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
}

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
      // this.init();
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
/* harmony import */ var _modules_promo_promo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/promo/promo */ "./src/blocks/promo/promo.js");
/* harmony import */ var _modules_field_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/field/field */ "./src/blocks/field/field.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/popup/popup */ "./src/blocks/popup/popup.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/form/form.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/tabs/tabs.js");
/* harmony import */ var _modules_scroll_links_scroll_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/scroll-links/scroll-links */ "./src/blocks/scroll-links/scroll-links.js");
/* harmony import */ var _modules_animation_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/animation/animation */ "./src/blocks/animation/animation.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/map/map.js");
/* harmony import */ var _modules_video_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/video/video */ "./src/blocks/video/video.js");


 // подсчет до бесконечности
 // настройка динмаической высоты для textarea, маска телефона, добалвение классо для идетификации пустое или нет при вводе в текстовое поле
 // инициализация попапов, их открытие и закрытие
 // валидация и отправка данных через форму
 // табы
 // плавный скролл с кнопки до формы рассчета



var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();
var context = __webpack_require__("./src/js/controllers sync recursive \\.js$");
application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));
Object(_modules_promo_promo__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_field_field__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_popup_popup__WEBPACK_IMPORTED_MODULE_4__["popup"])();
Object(_modules_form_form__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_scroll_links_scroll_links__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_animation_animation__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_modules_map_map__WEBPACK_IMPORTED_MODULE_9__["default"])();
Object(_modules_video_video__WEBPACK_IMPORTED_MODULE_10__["default"])();

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

/***/ })

/******/ });
//# sourceMappingURL=general.js.map