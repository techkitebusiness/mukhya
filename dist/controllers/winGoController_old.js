"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _express = _interopRequireDefault(require("express"));
var _excluded = ["id", "phone", "code", "invite", "level", "game"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();
var winGoPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("bet/wingo/win.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function winGoPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var winGoPage3 = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("bet/wingo/win3.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function winGoPage3(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var winGoPage5 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("bet/wingo/win5.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function winGoPage5(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var winGoPage10 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("bet/wingo/win10.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function winGoPage10(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var isNumber = function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};
function formateT(params) {
  var result = params < 10 ? "0" + params : params;
  return result;
}
function timerJoin() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var date = '';
  if (params) {
    date = new Date(Number(params));
  } else {
    date = new Date();
  }
  var years = formateT(date.getFullYear());
  var months = formateT(date.getMonth() + 1);
  var days = formateT(date.getDate());
  var hours = formateT(date.getHours());
  var minutes = formateT(date.getMinutes());
  var seconds = formateT(date.getSeconds());
  return years + '-' + months + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds;
}
var rosesPlus = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(auth, money) {
    var _yield$connection$que, _yield$connection$que2, user, userInfo, _yield$connection$que3, _yield$connection$que4, f1, _yield$connection$que5, _yield$connection$que6, level, level0, infoF1, rosesF1;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 2:
          _yield$connection$que = _context5.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          user = _yield$connection$que2[0];
          userInfo = user[0];
          _context5.next = 8;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank`, `level` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [userInfo.invite]);
        case 8:
          _yield$connection$que3 = _context5.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          f1 = _yield$connection$que4[0];
          _context5.next = 13;
          return _connectDB["default"].query('SELECT * FROM level WHERE level = ?', [f1[0].level]);
        case 13:
          _yield$connection$que5 = _context5.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          level = _yield$connection$que6[0];
          level0 = level[0];
          if (!(money >= 300)) {
            _context5.next = 23;
            break;
          }
          if (!(f1.length > 0)) {
            _context5.next = 23;
            break;
          }
          infoF1 = f1[0];
          rosesF1 = money / 100 * level0.f1;
          _context5.next = 23;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f1 = roses_f1 + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF1, rosesF1, rosesF1, rosesF1, infoF1.phone]);
        case 23:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function rosesPlus(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
// const rosesPlus = async (auth, money) => {
//     const [level] = await connection.query('SELECT * FROM level WHERE id = ?', [1]);
//     let level0 = level[0];

//     const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
//     let userInfo = user[0];

//     if (money >= 1) {
//         if (userInfo.code) {
//             let referralLevels = [
//                 { level: 1, percentage: 2, selfReferral: 2 },
//                 { level: 2, percentage: 2, selfReferral: 5 },
//                 { level: 3, percentage: 2, selfReferral: 8 },
//                 { level: 4, percentage: 2, selfReferral: 11 },
//                 { level: 5, percentage: 2, selfReferral: 14 },
//                 { level: 6, percentage: 2, selfReferral: 17 },
//                 { level: 7, percentage: 2, selfReferral: 20 },
//                 { level: 8, percentage: 2, selfReferral: 23 },
//                 { level: 9, percentage: 2, selfReferral: 26 },
//                 { level: 10, percentage: 2, selfReferral: 29 },
//                 { level: 11, percentage: 2, selfReferral: 32 },
//                 { level: 12, percentage: 2, selfReferral: 35 },
//                 { level: 13, percentage: 2, selfReferral: 38 },
//                 { level: 14, percentage: 2, selfReferral: 41 },
//                 { level: 15, percentage: 2, selfReferral: 44 }
//             ];

//             for (const referralLevel of referralLevels) {
//                 if (userInfo.code >= referralLevel.selfReferral) {
//                     let roses = money * referralLevel.percentage;
//                     await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [roses, roses, roses, userInfo.phone]);
//                 }
//             }
//         }
//     }
// };

var betWinGo = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body, typeid, join, x, money, auth, gameJoin, _yield$connection$que7, _yield$connection$que8, winGoNow, _yield$connection$que9, _yield$connection$que10, user, userInfo, period, fee, total, timeNow, check, date, years, months, days, id_product, formatTime, color, checkJoin, result, timerJoin, checkTime, sql, _yield$connection$que11, _yield$connection$que12, users, _yield$connection$que13, _yield$connection$que14, level, level0, sql2, total_m, f1, f2, f3, f4;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          timerJoin = function _timerJoin() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var date = '';
            if (params) {
              date = new Date(Number(params));
            } else {
              date = new Date();
            }
            var years = formateT(date.getFullYear());
            var months = formateT(date.getMonth() + 1);
            var days = formateT(date.getDate());
            return years + '-' + months + '-' + days;
          };
          _req$body = req.body, typeid = _req$body.typeid, join = _req$body.join, x = _req$body.x, money = _req$body.money;
          auth = req.cookies.auth;
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 5:
          gameJoin = '';
          if (typeid == 1) gameJoin = 'wingo';
          if (typeid == 3) gameJoin = 'wingo3';
          if (typeid == 5) gameJoin = 'wingo5';
          if (typeid == 10) gameJoin = 'wingo10';
          _context6.next = 12;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = '".concat(gameJoin, "' ORDER BY id DESC LIMIT 1 "));
        case 12:
          _yield$connection$que7 = _context6.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          winGoNow = _yield$connection$que8[0];
          _context6.next = 17;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 17:
          _yield$connection$que9 = _context6.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          user = _yield$connection$que10[0];
          if (!(!winGoNow[0] || !user[0] || !isNumber(x) || !isNumber(money))) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 22:
          userInfo = user[0];
          period = winGoNow[0].period;
          fee = x * money * 0.02;
          total = x * money - fee;
          timeNow = Date.now();
          check = userInfo.money - total;
          date = new Date();
          years = formateT(date.getFullYear());
          months = formateT(date.getMonth() + 1);
          days = formateT(date.getDate());
          id_product = years + months + days + Math.floor(Math.random() * 1000000000000000);
          formatTime = timerJoin();
          color = '';
          if (join == 'l') {
            color = 'big';
          } else if (join == 'n') {
            color = 'small';
          } else if (join == 't') {
            color = 'violet';
          } else if (join == 'd') {
            color = 'red';
          } else if (join == 'x') {
            color = 'green';
          } else if (join == '0') {
            color = 'red-violet';
          } else if (join == '5') {
            color = 'green-violet';
          } else if (join % 2 == 0) {
            color = 'red';
          } else if (join % 2 != 0) {
            color = 'green';
          }
          checkJoin = '';
          if (!isNumber(join) && join == 'l' || join == 'n') {
            checkJoin = "\n        <div data-v-a9660e98=\"\" class=\"van-image\" style=\"width: 30px; height: 30px;\">\n            <img src=\"/images/".concat(join == 'n' ? 'small' : 'big', ".png\" class=\"van-image__img\">\n        </div>\n        ");
          } else {
            checkJoin = "\n        <span data-v-a9660e98=\"\">".concat(isNumber(join) ? join : '', "</span>\n        ");
          }
          result = "\n    <div data-v-a9660e98=\"\" issuenumber=\"".concat(period, "\" addtime=\"").concat(formatTime, "\" rowid=\"1\" class=\"hb\">\n        <div data-v-a9660e98=\"\" class=\"item c-row\">\n            <div data-v-a9660e98=\"\" class=\"result\">\n                <div data-v-a9660e98=\"\" class=\"select select-").concat(color, "\">\n                    ").concat(checkJoin, "\n                </div>\n            </div>\n            <div data-v-a9660e98=\"\" class=\"c-row c-row-between info\">\n                <div data-v-a9660e98=\"\">\n                    <div data-v-a9660e98=\"\" class=\"issueName\">\n                        ").concat(period, "\n                    </div>\n                    <div data-v-a9660e98=\"\" class=\"tiem\">").concat(formatTime, "</div>\n                </div>\n            </div>\n        </div>\n        <!---->\n    </div>\n    ");
          checkTime = timerJoin(date.getTime());
          if (!(check >= 0)) {
            _context6.next = 70;
            break;
          }
          sql = "INSERT INTO minutes_1 SET \n        id_product = ?,\n        phone = ?,\n        code = ?,\n        invite = ?,\n        stage = ?,\n        level = ?,\n        money = ?,\n        amount = ?,\n        fee = ?,\n        get = ?,\n        game = ?,\n        bet = ?,\n        status = ?,\n        today = ?,\n        time = ?";
          _context6.next = 44;
          return _connectDB["default"].execute(sql, [id_product, userInfo.phone, userInfo.code, userInfo.invite, period, userInfo.level, total, x, fee, 0, gameJoin, join, 0, checkTime, timeNow]);
        case 44:
          _context6.next = 46;
          return _connectDB["default"].execute('UPDATE `users` SET `money` = `money` - ? WHERE `token` = ? ', [money * x, auth]);
        case 46:
          _context6.next = 48;
          return _connectDB["default"].query('SELECT `money`, `level` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 48:
          _yield$connection$que11 = _context6.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          users = _yield$connection$que12[0];
          _context6.next = 53;
          return rosesPlus(auth, money * x);
        case 53:
          _context6.next = 55;
          return _connectDB["default"].query('SELECT * FROM level ');
        case 55:
          _yield$connection$que13 = _context6.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          level = _yield$connection$que14[0];
          level0 = level[0];
          sql2 = "INSERT INTO roses SET \n        phone = ?,\n        code = ?,\n        invite = ?,\n        f1 = ?,\n        f2 = ?,\n        f3 = ?,\n        f4 = ?,\n        time = ?";
          total_m = money * x;
          f1 = total_m / 100 * level0.f1;
          f2 = total_m / 100 * level0.f2;
          f3 = total_m / 100 * level0.f3;
          f4 = total_m / 100 * level0.f4;
          _context6.next = 67;
          return _connectDB["default"].execute(sql2, [userInfo.phone, userInfo.code, userInfo.invite, f1, f2, f3, f4, timeNow]);
        case 67:
          return _context6.abrupt("return", res.status(200).json({
            message: 'Successful bet',
            status: true,
            data: result,
            change: users[0].level,
            money: users[0].money
          }));
        case 70:
          return _context6.abrupt("return", res.status(200).json({
            message: 'The amount is not enough',
            status: false
          }));
        case 71:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function betWinGo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var listOrderOld = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, typeid, pageno, pageto, auth, _yield$connection$que15, _yield$connection$que16, user, game, _yield$connection$que17, _yield$connection$que18, wingo, _yield$connection$que19, _yield$connection$que20, wingoAll, _yield$connection$que21, _yield$connection$que22, period, page;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body2 = req.body, typeid = _req$body2.typeid, pageno = _req$body2.pageno, pageto = _req$body2.pageto;
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context7.next = 3;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 3:
          if (!(pageno < 0 || pageto < 0)) {
            _context7.next = 5;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          _context7.next = 8;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 8:
          _yield$connection$que15 = _context7.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          user = _yield$connection$que16[0];
          game = '';
          if (typeid == 1) game = 'wingo';
          if (typeid == 3) game = 'wingo3';
          if (typeid == 5) game = 'wingo5';
          if (typeid == 10) game = 'wingo10';
          _context7.next = 18;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(pageno, ", ").concat(pageto, " "));
        case 18:
          _yield$connection$que17 = _context7.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          wingo = _yield$connection$que18[0];
          _context7.next = 23;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status != 0 AND game = '".concat(game, "' "));
        case 23:
          _yield$connection$que19 = _context7.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          wingoAll = _yield$connection$que20[0];
          _context7.next = 28;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 28:
          _yield$connection$que21 = _context7.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          period = _yield$connection$que22[0];
          if (wingo[0]) {
            _context7.next = 33;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 33:
          if (!(!pageno || !pageto || !user[0] || !wingo[0] || !period[0])) {
            _context7.next = 35;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 35:
          page = Math.ceil(wingoAll.length / 10);
          return _context7.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Receive success",
            data: {
              gameslist: wingo
            },
            period: period[0].period,
            page: page,
            status: true
          }));
        case 37:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function listOrderOld(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var GetMyEmerdList = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body3, typeid, pageno, pageto, auth, game, _yield$connection$que23, _yield$connection$que24, user, _yield$connection$que25, _yield$connection$que26, minutes_1, _yield$connection$que27, _yield$connection$que28, minutes_1All, page, datas;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body3 = req.body, typeid = _req$body3.typeid, pageno = _req$body3.pageno, pageto = _req$body3.pageto; // if (!pageno || !pageto) {
          //     pageno = 0;
          //     pageto = 10;
          // }
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context8.next = 3;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 3:
          if (!(pageno < 0 || pageto < 0)) {
            _context8.next = 5;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          game = '';
          if (typeid == 1) game = 'wingo';
          if (typeid == 3) game = 'wingo3';
          if (typeid == 5) game = 'wingo5';
          if (typeid == 10) game = 'wingo10';
          _context8.next = 13;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
        case 13:
          _yield$connection$que23 = _context8.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          user = _yield$connection$que24[0];
          _context8.next = 18;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(Number(pageno) + ',' + Number(pageto)), [user[0].phone]);
        case 18:
          _yield$connection$que25 = _context8.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          minutes_1 = _yield$connection$que26[0];
          _context8.next = 23;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC "), [user[0].phone]);
        case 23:
          _yield$connection$que27 = _context8.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          minutes_1All = _yield$connection$que28[0];
          if (minutes_1[0]) {
            _context8.next = 28;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 28:
          if (!(!pageno || !pageto || !user[0] || !minutes_1[0])) {
            _context8.next = 30;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 30:
          page = Math.ceil(minutes_1All.length / 10);
          datas = minutes_1.map(function (data) {
            var id = data.id,
              phone = data.phone,
              code = data.code,
              invite = data.invite,
              level = data.level,
              game = data.game,
              others = _objectWithoutProperties(data, _excluded);
            return others;
          });
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Receive success",
            data: {
              gameslist: datas
            },
            page: page,
            status: true
          }));
        case 33:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function GetMyEmerdList(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var addWinGo = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(game) {
    var join, _yield$connection$que29, _yield$connection$que30, winGoNow, _yield$connection$que31, _yield$connection$que32, setting, period, amount, timeNow, nextResult, newArr, result, arr, check, i, sql;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          join = '';
          if (game == 1) join = 'wingo';
          if (game == 3) join = 'wingo3';
          if (game == 5) join = 'wingo5';
          if (game == 10) join = 'wingo10';
          _context9.next = 8;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = \"".concat(join, "\" ORDER BY id DESC LIMIT 1 "));
        case 8:
          _yield$connection$que29 = _context9.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          winGoNow = _yield$connection$que30[0];
          _context9.next = 13;
          return _connectDB["default"].query('SELECT * FROM `admin` ');
        case 13:
          _yield$connection$que31 = _context9.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          setting = _yield$connection$que32[0];
          period = winGoNow[0].period; // cầu hiện tại
          amount = Math.floor(Math.random() * 10); // xanh đỏ tím
          timeNow = Date.now();
          nextResult = '';
          if (game == 1) nextResult = setting[0].wingo1;
          if (game == 3) nextResult = setting[0].wingo3;
          if (game == 5) nextResult = setting[0].wingo5;
          if (game == 10) nextResult = setting[0].wingo10;
          newArr = '';
          if (!(nextResult == '-1')) {
            _context9.next = 31;
            break;
          }
          _context9.next = 28;
          return _connectDB["default"].execute("UPDATE wingo SET amount = ?,status = ? WHERE period = ? AND game = \"".concat(join, "\""), [amount, 1, period]);
        case 28:
          newArr = '-1';
          _context9.next = 38;
          break;
        case 31:
          result = '';
          arr = nextResult.split('|');
          check = arr.length;
          if (check == 1) {
            newArr = '-1';
          } else {
            for (i = 1; i < arr.length; i++) {
              newArr += arr[i] + '|';
            }
            newArr = newArr.slice(0, -1);
          }
          result = arr[0];
          _context9.next = 38;
          return _connectDB["default"].execute("UPDATE wingo SET amount = ?,status = ? WHERE period = ? AND game = \"".concat(join, "\""), [result, 1, period]);
        case 38:
          sql = "INSERT INTO wingo SET \n        period = ?,\n        amount = ?,\n        game = ?,\n        status = ?,\n        time = ?";
          _context9.next = 41;
          return _connectDB["default"].execute(sql, [Number(period) + 1, 0, join, 0, timeNow]);
        case 41:
          if (game == 1) join = 'wingo1';
          if (game == 3) join = 'wingo3';
          if (game == 5) join = 'wingo5';
          if (game == 10) join = 'wingo10';
          _context9.next = 47;
          return _connectDB["default"].execute("UPDATE admin SET ".concat(join, " = ?"), [newArr]);
        case 47:
          _context9.next = 52;
          break;
        case 49:
          _context9.prev = 49;
          _context9.t0 = _context9["catch"](0);
          if (_context9.t0) {
            console.log(_context9.t0);
          }
        case 52:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 49]]);
  }));
  return function addWinGo(_x17) {
    return _ref9.apply(this, arguments);
  };
}();
var handlingWinGo1P = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(typeid) {
    var game, _yield$connection$que33, _yield$connection$que34, winGoNow, result, _yield$connection$exe, _yield$connection$exe2, order, i, orders, _result, bet, total, id, phone, nhan_duoc, _yield$connection$exe3, _yield$connection$exe4, users, totals, sql;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          game = '';
          if (typeid == 1) game = 'wingo';
          if (typeid == 3) game = 'wingo3';
          if (typeid == 5) game = 'wingo5';
          if (typeid == 10) game = 'wingo10';
          _context10.next = 7;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 7:
          _yield$connection$que33 = _context10.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          winGoNow = _yield$connection$que34[0];
          _context10.next = 12;
          return _connectDB["default"].execute("UPDATE minutes_1 SET result = ? WHERE status = 0 AND game = '".concat(game, "'"), [winGoNow[0].amount]);
        case 12:
          result = Number(winGoNow[0].amount);
          _context10.t0 = result;
          _context10.next = _context10.t0 === 0 ? 16 : _context10.t0 === 1 ? 19 : _context10.t0 === 2 ? 22 : _context10.t0 === 3 ? 25 : _context10.t0 === 4 ? 28 : _context10.t0 === 5 ? 31 : _context10.t0 === 6 ? 34 : _context10.t0 === 7 ? 37 : _context10.t0 === 8 ? 40 : _context10.t0 === 9 ? 43 : 46;
          break;
        case 16:
          _context10.next = 18;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"0\" AND bet != \"t\" "), []);
        case 18:
          return _context10.abrupt("break", 47);
        case 19:
          _context10.next = 21;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"1\" "), []);
        case 21:
          return _context10.abrupt("break", 47);
        case 22:
          _context10.next = 24;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"2\" "), []);
        case 24:
          return _context10.abrupt("break", 47);
        case 25:
          _context10.next = 27;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"3\" "), []);
        case 27:
          return _context10.abrupt("break", 47);
        case 28:
          _context10.next = 30;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"4\" "), []);
        case 30:
          return _context10.abrupt("break", 47);
        case 31:
          _context10.next = 33;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"5\" AND bet != \"t\" "), []);
        case 33:
          return _context10.abrupt("break", 47);
        case 34:
          _context10.next = 36;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"6\" "), []);
        case 36:
          return _context10.abrupt("break", 47);
        case 37:
          _context10.next = 39;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"7\" "), []);
        case 39:
          return _context10.abrupt("break", 47);
        case 40:
          _context10.next = 42;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"8\" "), []);
        case 42:
          return _context10.abrupt("break", 47);
        case 43:
          _context10.next = 45;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"9\" "), []);
        case 45:
          return _context10.abrupt("break", 47);
        case 46:
          return _context10.abrupt("break", 47);
        case 47:
          if (!(result < 5)) {
            _context10.next = 52;
            break;
          }
          _context10.next = 50;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet = \"l\" "), []);
        case 50:
          _context10.next = 54;
          break;
        case 52:
          _context10.next = 54;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet = \"n\" "), []);
        case 54:
          _context10.next = 56;
          return _connectDB["default"].execute("SELECT * FROM minutes_1 WHERE status = 0 AND game = '".concat(game, "' "));
        case 56:
          _yield$connection$exe = _context10.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          order = _yield$connection$exe2[0];
          i = 0;
        case 60:
          if (!(i < order.length)) {
            _context10.next = 83;
            break;
          }
          orders = order[i];
          _result = orders.result;
          bet = orders.bet;
          total = orders.money;
          id = orders.id;
          phone = orders.phone;
          nhan_duoc = 0; // x - green
          // t - Violet
          // d - red 
          // Sirf 1-4 aur 6-9 tk hi *9 aana chahiye
          // Aur 0 aur 5 pe *4.5
          // Aur red aur green pe *2
          // 1,2,3,4,6,7,8,9
          if (bet == 'l' || bet == 'n') {
            nhan_duoc = total * 2;
          } else {
            if (_result == 0 || _result == 5) {
              if (bet == 'd' || bet == 'x') {
                nhan_duoc = total * 4.5;
              } else if (bet == 't') {
                nhan_duoc = total * 4.5;
              } else if (bet == "0" || bet == "5") {
                nhan_duoc = total * 4.5;
              }
            } else {
              if (_result == 1 && bet == "1") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 1 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 2 && bet == "2") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 2 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 3 && bet == "3") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 3 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 4 && bet == "4") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 4 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 6 && bet == "6") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 6 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 7 && bet == "7") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 7 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 8 && bet == "8") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 8 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 9 && bet == "9") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 9 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
            }
          }
          _context10.next = 71;
          return _connectDB["default"].execute('SELECT `money` FROM `users` WHERE `phone` = ?', [phone]);
        case 71:
          _yield$connection$exe3 = _context10.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          users = _yield$connection$exe4[0];
          totals = users[0].money + nhan_duoc;
          _context10.next = 77;
          return _connectDB["default"].execute('UPDATE `minutes_1` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [nhan_duoc, id]);
        case 77:
          sql = 'UPDATE `users` SET `money` = ? WHERE `phone` = ? ';
          _context10.next = 80;
          return _connectDB["default"].execute(sql, [totals, phone]);
        case 80:
          i++;
          _context10.next = 60;
          break;
        case 83:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function handlingWinGo1P(_x18) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  winGoPage: winGoPage,
  betWinGo: betWinGo,
  listOrderOld: listOrderOld,
  GetMyEmerdList: GetMyEmerdList,
  handlingWinGo1P: handlingWinGo1P,
  addWinGo: addWinGo,
  winGoPage3: winGoPage3,
  winGoPage5: winGoPage5,
  winGoPage10: winGoPage10
};