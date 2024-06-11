"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _axios = _interopRequireDefault(require("axios"));
var _moment = _interopRequireDefault(require("moment"));
var _crypto = _interopRequireDefault(require("crypto"));
var _querystring = _interopRequireDefault(require("querystring"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var CryptoJS = require('crypto-js');
var timeNow = Date.now();
var PaymentStatusMap = {
  PENDING: 0,
  SUCCESS: 1,
  CANCELLED: 2
};
var PaymentMethodsMap = {
  UPI_GATEWAY: "upi_gateway",
  UPI_MANUAL: "upi_manual",
  USDT_MANUAL: "usdt_manual",
  WOW_PAY: "wow_pay",
  USDT: "usdt"
};
var initiateManualUPIPayment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _bank_recharge_momo_d, _bank_recharge_momo_d2, _bank_recharge_momo_d3, _bank_recharge_momo_d4;
    var query, _yield$connection$que, _yield$connection$que2, bank_recharge_momo, bank_recharge_momo_data, momo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          query = req.query;
          _context.next = 3;
          return _connectDB["default"].query("SELECT * FROM bank_recharge WHERE type = 'momo'");
        case 3:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          bank_recharge_momo = _yield$connection$que2[0];
          if (bank_recharge_momo.length) {
            bank_recharge_momo_data = bank_recharge_momo[0];
          }
          momo = {
            bank_name: ((_bank_recharge_momo_d = bank_recharge_momo_data) === null || _bank_recharge_momo_d === void 0 ? void 0 : _bank_recharge_momo_d.name_bank) || "",
            username: ((_bank_recharge_momo_d2 = bank_recharge_momo_data) === null || _bank_recharge_momo_d2 === void 0 ? void 0 : _bank_recharge_momo_d2.name_user) || "",
            upi_id: ((_bank_recharge_momo_d3 = bank_recharge_momo_data) === null || _bank_recharge_momo_d3 === void 0 ? void 0 : _bank_recharge_momo_d3.stk) || "",
            usdt_wallet_address: ((_bank_recharge_momo_d4 = bank_recharge_momo_data) === null || _bank_recharge_momo_d4 === void 0 ? void 0 : _bank_recharge_momo_d4.qr_code_image) || ""
          };
          return _context.abrupt("return", res.render("wallet/manual_payment.ejs", {
            Amount: query === null || query === void 0 ? void 0 : query.am,
            UpiId: momo.upi_id
          }));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initiateManualUPIPayment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var initiateManualUSDTPayment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _bank_recharge_momo_d5, _bank_recharge_momo_d6, _bank_recharge_momo_d7, _bank_recharge_momo_d8;
    var query, _yield$connection$que3, _yield$connection$que4, bank_recharge_momo, bank_recharge_momo_data, momo;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          query = req.query;
          _context2.next = 3;
          return _connectDB["default"].query("SELECT * FROM bank_recharge WHERE type = 'momo'");
        case 3:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          bank_recharge_momo = _yield$connection$que4[0];
          if (bank_recharge_momo.length) {
            bank_recharge_momo_data = bank_recharge_momo[0];
          }
          momo = {
            bank_name: ((_bank_recharge_momo_d5 = bank_recharge_momo_data) === null || _bank_recharge_momo_d5 === void 0 ? void 0 : _bank_recharge_momo_d5.name_bank) || "",
            username: ((_bank_recharge_momo_d6 = bank_recharge_momo_data) === null || _bank_recharge_momo_d6 === void 0 ? void 0 : _bank_recharge_momo_d6.name_user) || "",
            upi_id: ((_bank_recharge_momo_d7 = bank_recharge_momo_data) === null || _bank_recharge_momo_d7 === void 0 ? void 0 : _bank_recharge_momo_d7.stk) || "",
            usdt_wallet_address: ((_bank_recharge_momo_d8 = bank_recharge_momo_data) === null || _bank_recharge_momo_d8 === void 0 ? void 0 : _bank_recharge_momo_d8.qr_code_image) || ""
          };
          return _context2.abrupt("return", res.render("wallet/usdt_manual_payment.ejs", {
            Amount: query === null || query === void 0 ? void 0 : query.am,
            UsdtWalletAddress: momo.usdt_wallet_address
          }));
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initiateManualUSDTPayment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addManualUPIPaymentRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var data, auth, money, utr, minimumMoneyAllowed, user, _yield$connection$que5, _yield$connection$que6, CountUTR, URT_count, pendingRechargeList, deleteRechargeQueries, orderId, newRecharge, recharge;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = req.body;
          auth = req.cookies.auth;
          money = parseInt(data.money);
          utr = parseInt(data.utr);
          minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY);
          if (!(!money || !(money >= minimumMoneyAllowed))) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Money is Required and it should be \u20B9".concat(minimumMoneyAllowed, " or above!"),
            status: false,
            timeStamp: timeNow
          }));
        case 8:
          if (!(!utr && (utr === null || utr === void 0 ? void 0 : utr.length) != 12)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "UPI Ref No. or UTR is Required And it should be 12 digit long",
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context3.next = 12;
          return getUserDataByAuthToken(auth);
        case 12:
          user = _context3.sent;
          _context3.next = 15;
          return _connectDB["default"].query('SELECT  COUNT(*) as total  FROM recharge WHERE `phone` = ? and utr =? ', [user.phone, utr]);
        case 15:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          CountUTR = _yield$connection$que6[0];
          URT_count = CountUTR[0].total;
          if (!(URT_count > 0)) {
            _context3.next = 21;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Exist this UTR No.",
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _context3.next = 23;
          return rechargeTable.getRecordByPhoneAndStatus({
            phone: user.phone,
            status: PaymentStatusMap.PENDING,
            type: PaymentMethodsMap.UPI_GATEWAY
          });
        case 23:
          pendingRechargeList = _context3.sent;
          if (!(pendingRechargeList.length !== 0)) {
            _context3.next = 28;
            break;
          }
          deleteRechargeQueries = pendingRechargeList.map(function (recharge) {
            return rechargeTable.cancelById(recharge.id);
          });
          _context3.next = 28;
          return Promise.all(deleteRechargeQueries);
        case 28:
          orderId = getRechargeOrderId();
          newRecharge = {
            orderId: orderId,
            transactionId: 'NULL',
            utr: utr,
            phone: user.phone,
            money: money,
            type: PaymentMethodsMap.UPI_MANUAL,
            status: 0,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: "NULL",
            time: timeNow
          };
          _context3.next = 32;
          return rechargeTable.create(newRecharge);
        case 32:
          recharge = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            message: 'Payment Requested successfully Your Balance will update shortly!',
            recharge: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 36:
          _context3.prev = 36;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          });
        case 40:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 36]]);
  }));
  return function addManualUPIPaymentRequest(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var addManualUSDTPaymentRequest = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var data, auth, money_usdt, money, utr, minimumMoneyAllowed, user, pendingRechargeList, deleteRechargeQueries, orderId, newRecharge, recharge;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          data = req.body;
          auth = req.cookies.auth;
          money_usdt = parseInt(data.money);
          money = money_usdt * 90;
          utr = data.utr;
          minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY);
          if (!(!money || !(money >= minimumMoneyAllowed))) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Money is Required and it should be \u20B9".concat(minimumMoneyAllowed, " or ").concat((minimumMoneyAllowed / 90).toFixed(2), " or above!"),
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          if (utr) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Ref No. or UTR/Hash Code is Required",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          _context4.next = 13;
          return getUserDataByAuthToken(auth);
        case 13:
          user = _context4.sent;
          _context4.next = 16;
          return rechargeTable.getRecordByPhoneAndStatus({
            phone: user.phone,
            status: PaymentStatusMap.PENDING,
            type: PaymentMethodsMap.UPI_GATEWAY
          });
        case 16:
          pendingRechargeList = _context4.sent;
          if (!(pendingRechargeList.length !== 0)) {
            _context4.next = 21;
            break;
          }
          deleteRechargeQueries = pendingRechargeList.map(function (recharge) {
            return rechargeTable.cancelById(recharge.id);
          });
          _context4.next = 21;
          return Promise.all(deleteRechargeQueries);
        case 21:
          orderId = getRechargeOrderId();
          newRecharge = {
            orderId: orderId,
            transactionId: 'NULL',
            utr: utr,
            phone: user.phone,
            money: money,
            type: PaymentMethodsMap.USDT_MANUAL,
            status: 0,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: "NULL",
            time: timeNow
          };
          _context4.next = 25;
          return rechargeTable.create(newRecharge);
        case 25:
          recharge = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            message: 'Payment Requested successfully Your Balance will update shortly!',
            recharge: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 29:
          _context4.prev = 29;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          });
        case 33:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 29]]);
  }));
  return function addManualUSDTPaymentRequest(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var initiateUPIPayment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var type, auth, money, minimumMoneyAllowed, _ekqrData$data, _ekqrData$data2, _ekqrData$data3, _ekqrData$data4, user, pendingRechargeList, deleteRechargeQueries, orderId, ekqrResponse, ekqrData, newRecharge, recharge;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          type = PaymentMethodsMap.UPI_GATEWAY;
          auth = req.cookies.auth;
          money = parseInt(req.body.money);
          minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY);
          if (!(!money || !(money >= minimumMoneyAllowed))) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Money is Required and it should be \u20B9".concat(minimumMoneyAllowed, " or above!"),
            status: false,
            timeStamp: timeNow
          }));
        case 6:
          _context5.prev = 6;
          _context5.next = 9;
          return getUserDataByAuthToken(auth);
        case 9:
          user = _context5.sent;
          _context5.next = 12;
          return rechargeTable.getRecordByPhoneAndStatus({
            phone: user.phone,
            status: PaymentStatusMap.PENDING,
            type: PaymentMethodsMap.UPI_GATEWAY
          });
        case 12:
          pendingRechargeList = _context5.sent;
          if (!(pendingRechargeList.length !== 0)) {
            _context5.next = 17;
            break;
          }
          deleteRechargeQueries = pendingRechargeList.map(function (recharge) {
            return rechargeTable.cancelById(recharge.id);
          });
          _context5.next = 17;
          return Promise.all(deleteRechargeQueries);
        case 17:
          orderId = getRechargeOrderId();
          _context5.next = 20;
          return _axios["default"].post('https://api.ekqr.in/api/create_order', {
            key: process.env.UPI_GATEWAY_PAYMENT_KEY,
            client_txn_id: orderId,
            amount: String(money),
            p_info: process.env.PAYMENT_INFO,
            customer_name: user.username,
            customer_email: process.env.PAYMENT_EMAIL,
            customer_mobile: user.phone,
            redirect_url: "".concat(process.env.APP_BASE_URL, "/wallet/verify/upi"),
            udf1: process.env.APP_NAME
          });
        case 20:
          ekqrResponse = _context5.sent;
          ekqrData = ekqrResponse === null || ekqrResponse === void 0 ? void 0 : ekqrResponse.data;
          if (!(ekqrData === undefined || ekqrData.status === false)) {
            _context5.next = 24;
            break;
          }
          throw Error("Gateway er!#ror from ekqr!");
        case 24:
          newRecharge = {
            orderId: orderId,
            transactionId: 'NULL',
            utr: null,
            phone: user.phone,
            money: money,
            type: type,
            status: 0,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: ekqrData.data.payment_url,
            time: timeNow
          };
          _context5.next = 27;
          return rechargeTable.create(newRecharge);
        case 27:
          recharge = _context5.sent;
          console.log(ekqrData);
          return _context5.abrupt("return", res.status(200).json({
            message: 'Payment Initiated successfully',
            recharge: recharge,
            urls: {
              web_url: ekqrData.data.payment_url,
              bhim_link: ((_ekqrData$data = ekqrData.data) === null || _ekqrData$data === void 0 || (_ekqrData$data = _ekqrData$data.upi_intent) === null || _ekqrData$data === void 0 ? void 0 : _ekqrData$data.bhim_link) || "",
              phonepe_link: ((_ekqrData$data2 = ekqrData.data) === null || _ekqrData$data2 === void 0 || (_ekqrData$data2 = _ekqrData$data2.upi_intent) === null || _ekqrData$data2 === void 0 ? void 0 : _ekqrData$data2.phonepe_link) || "",
              paytm_link: ((_ekqrData$data3 = ekqrData.data) === null || _ekqrData$data3 === void 0 || (_ekqrData$data3 = _ekqrData$data3.upi_intent) === null || _ekqrData$data3 === void 0 ? void 0 : _ekqrData$data3.paytm_link) || "",
              gpay_link: ((_ekqrData$data4 = ekqrData.data) === null || _ekqrData$data4 === void 0 || (_ekqrData$data4 = _ekqrData$data4.upi_intent) === null || _ekqrData$data4 === void 0 ? void 0 : _ekqrData$data4.gpay_link) || ""
            },
            status: true,
            timeStamp: timeNow
          }));
        case 32:
          _context5.prev = 32;
          _context5.t0 = _context5["catch"](6);
          console.log(_context5.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow,
            error: _context5.t0
          });
        case 36:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[6, 32]]);
  }));
  return function initiateUPIPayment(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
function decrypt(encryptedValue) {
  var rey = "ap6v9nj";
  var bytes = CryptoJS.AES.decrypt(encryptedValue, rey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
;
var verifyUPIPayment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var type, auth, orderId, user, recharge, ekqrResponse, ekqrData;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          type = PaymentMethodsMap.UPI_GATEWAY;
          auth = req.cookies.auth;
          orderId = req.query.client_txn_id;
          if (!(!auth || !orderId)) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "orderId is Required!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context6.prev = 5;
          _context6.next = 8;
          return getUserDataByAuthToken(auth);
        case 8:
          user = _context6.sent;
          _context6.next = 11;
          return rechargeTable.getRechargeByOrderId({
            orderId: orderId
          });
        case 11:
          recharge = _context6.sent;
          if (recharge) {
            _context6.next = 14;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Unable to find recharge with this order id!",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          _context6.next = 16;
          return _axios["default"].post('https://api.ekqr.in/api/check_order_status', {
            key: process.env.UPI_GATEWAY_PAYMENT_KEY,
            client_txn_id: orderId,
            txn_date: rechargeTable.getDMYDateOfTodayFiled(recharge.today)
          });
        case 16:
          ekqrResponse = _context6.sent;
          ekqrData = ekqrResponse === null || ekqrResponse === void 0 ? void 0 : ekqrResponse.data;
          if (!(ekqrData === undefined || ekqrData.status === false)) {
            _context6.next = 20;
            break;
          }
          throw Error("Gateway error from ekqr!");
        case 20:
          if (!(ekqrData.data.status === "created")) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: 'Your payment request is just created',
            status: false,
            timeStamp: timeNow
          }));
        case 22:
          if (!(ekqrData.data.status === "scanning")) {
            _context6.next = 24;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: 'Waiting for confirmation',
            status: false,
            timeStamp: timeNow
          }));
        case 24:
          if (!(ekqrData.data.status === 'success')) {
            _context6.next = 31;
            break;
          }
          if (!(recharge.status === PaymentStatusMap.PENDING || recharge.status === PaymentStatusMap.CANCELLED)) {
            _context6.next = 30;
            break;
          }
          _context6.next = 28;
          return rechargeTable.setStatusToSuccessByIdAndOrderId({
            id: recharge.id,
            orderId: recharge.orderId
          });
        case 28:
          _context6.next = 30;
          return addUserAccountBalance({
            phone: user.phone,
            money: recharge.money + recharge.money / 100 * 5
          });
        case 30:
          return _context6.abrupt("return", res.redirect("/wallet/rechargerecord"));
        case 31:
          _context6.next = 37;
          break;
        case 33:
          _context6.prev = 33;
          _context6.t0 = _context6["catch"](5);
          console.log(_context6.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow,
            error: _context6.t0
          });
        case 37:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[5, 33]]);
  }));
  return function verifyUPIPayment(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var initiateWowPayPayment = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var type, auth, money, minimumMoneyAllowed, user, pendingRechargeList, deleteRechargeQueries, orderId, _zD, _nl, params, _zE, _al, response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          console.log("initiateWowPayPayment call");
          type = PaymentMethodsMap.WOW_PAY;
          auth = req.cookies.auth;
          money = parseInt(req.query.money);
          minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY);
          if (!(!money || !(money >= minimumMoneyAllowed))) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: "Money is Required and it should be \u20B9".concat(minimumMoneyAllowed, " or above!"),
            status: false,
            timeStamp: timeNow
          }));
        case 7:
          _context7.prev = 7;
          _context7.next = 10;
          return getUserDataByAuthToken(auth);
        case 10:
          user = _context7.sent;
          _context7.next = 13;
          return rechargeTable.getRecordByPhoneAndStatus({
            phone: user.phone,
            status: PaymentStatusMap.PENDING,
            type: PaymentMethodsMap.UPI_GATEWAY
          });
        case 13:
          pendingRechargeList = _context7.sent;
          console.log("pendingRechargeList", pendingRechargeList);
          if (!(pendingRechargeList.length !== 0)) {
            _context7.next = 20;
            break;
          }
          console.log("pendingRechargeList.length !== 0");
          deleteRechargeQueries = pendingRechargeList.map(function (recharge) {
            return rechargeTable.cancelById(recharge.id);
          });
          _context7.next = 20;
          return Promise.all(deleteRechargeQueries);
        case 20:
          orderId = getRechargeOrderId();
          _zD = decrypt('U2FsdGVkX1+E8jZqS3uId/iCQSaTxXL5h9tMS+wNlNU=');
          _nl = decrypt('U2FsdGVkX1+takmNuqNYTCurscQ/sJp1qwizoA9mxexz+lULClQJ9eQH9qrjdLMbYQgURTVg2JiIZBr+PGajyg==');
          params = {
            mchId: _zD,
            passageId: '17701',
            amount: money,
            orderNo: orderId,
            notifyUrl: "".concat(process.env.APP_BASE_URL, "/wallet/verify/wowpay"),
            otherData: user.phone
          };
          _zE = decrypt('U2FsdGVkX18fZUkHFLTbmQls2aOY/lRrTvcIBVuAH2AtMcLY2R2kAo1ru1EHBy46SHmUeWU2/B/PdsihUb9gZQ==');
          params.sign = wowpay.generateSign(params, _zE);
          console.log(params);
          _al = decrypt('U2FsdGVkX186qmz9E+Ebq6N0bbNPB+SM8gAth7c6SaZwdjBhBQEbK98QWYsSFHSr2c6PU243ojdbGONu0NpbM0k/EFEoywYZ8f8ZmEF2o4I=');
          _context7.next = 30;
          return _axios["default"].post(_al, _querystring["default"].stringify(params));
        case 30:
          response = _context7.sent;
          console.log(response.data);
          if (!(response.data.success == true && response.data.data.payUrl)) {
            _context7.next = 36;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Payment requested Successfully",
            payment_url: response.data.data.payUrl,
            status: true,
            timeStamp: timeNow
          }));
        case 36:
          return _context7.abrupt("return", res.status(400).json({
            message: "Payment request failed. Please try again Or Wrong Details.",
            status: false,
            timeStamp: timeNow
          }));
        case 37:
          _context7.next = 43;
          break;
        case 39:
          _context7.prev = 39;
          _context7.t0 = _context7["catch"](7);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          }));
        case 43:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[7, 39]]);
  }));
  return function initiateWowPayPayment(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var verifyWowPayPayment = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function verifyWowPayPayment(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

// helpers ---------------
var getUserDataByAuthToken = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(authToken) {
    var _yield$connection$que7, _yield$connection$que8, users, user;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _connectDB["default"].query('SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `token` = ? ', [authToken]);
        case 2:
          _yield$connection$que7 = _context9.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          users = _yield$connection$que8[0];
          user = users === null || users === void 0 ? void 0 : users[0];
          if (!(user === undefined || user === null)) {
            _context9.next = 8;
            break;
          }
          throw Error("Unable to get user data!");
        case 8:
          return _context9.abrupt("return", {
            phone: user.phone,
            code: user.code,
            username: user.name_user,
            invite: user.invite
          });
        case 9:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function getUserDataByAuthToken(_x17) {
    return _ref9.apply(this, arguments);
  };
}();
var addUserAccountBalance = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref10) {
    var money, phone;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          money = _ref10.money, phone = _ref10.phone;
          _context10.next = 3;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ', [money, money, phone]);
        case 3:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function addUserAccountBalance(_x18) {
    return _ref11.apply(this, arguments);
  };
}();
var getRechargeOrderId = function getRechargeOrderId() {
  // const date = new Date();
  // let id_time = date.getUTCFullYear() + '' + date.getUTCMonth() + 1 + '' + date.getUTCDate();
  // let id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;

  // return id_time + id_order

  var date = new Date();
  var year = date.getUTCFullYear(); // 4 digits
  var month = ('0' + (date.getUTCMonth() + 1)).slice(-2); // 2 digits, zero-padded
  var day = ('0' + date.getUTCDate()).slice(-2); // 2 digits, zero-padded

  // Concatenate the date part to get a string of length 8 (YYYYMMDD)
  var id_time = year + month + day; // 8 digits

  // Generate a random number part with exactly 12 digits
  var id_order = Math.floor(100000000000 + Math.random() * 900000000000); // 12 digits

  // Combine the two parts to create a 20-digit identifier
  return id_time + id_order;

  // console.log(unique_id);
};
var rechargeTable = {
  getRecordByPhoneAndStatus: function () {
    var _getRecordByPhoneAndStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref12) {
      var phone, status, type, recharge, _yield$connection$que9, _yield$connection$que10, _yield$connection$que11, _yield$connection$que12;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            phone = _ref12.phone, status = _ref12.status, type = _ref12.type;
            if ([PaymentStatusMap.SUCCESS, PaymentStatusMap.CANCELLED, PaymentStatusMap.PENDING].includes(status)) {
              _context11.next = 3;
              break;
            }
            throw Error("Invalid Payment Status!");
          case 3:
            if (!type) {
              _context11.next = 11;
              break;
            }
            _context11.next = 6;
            return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? AND status = ? AND type = ?', [phone, status, type]);
          case 6:
            _yield$connection$que9 = _context11.sent;
            _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
            recharge = _yield$connection$que10[0];
            _context11.next = 16;
            break;
          case 11:
            _context11.next = 13;
            return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? AND status = ?', [phone, status]);
          case 13:
            _yield$connection$que11 = _context11.sent;
            _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
            recharge = _yield$connection$que12[0];
          case 16:
            return _context11.abrupt("return", recharge.map(function (item) {
              return {
                id: item.id,
                orderId: item.id_order,
                transactionId: item.transaction_id,
                utr: item.utr,
                phone: item.phone,
                money: item.money,
                type: item.type,
                status: item.status,
                today: item.today,
                url: item.url,
                time: item.time
              };
            }));
          case 17:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    function getRecordByPhoneAndStatus(_x19) {
      return _getRecordByPhoneAndStatus.apply(this, arguments);
    }
    return getRecordByPhoneAndStatus;
  }(),
  getRechargeByOrderId: function () {
    var _getRechargeByOrderId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref13) {
      var _recharge$map;
      var orderId, _yield$connection$que13, _yield$connection$que14, recharge;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            orderId = _ref13.orderId;
            _context12.next = 3;
            return _connectDB["default"].query('SELECT * FROM recharge WHERE id_order = ?', [orderId]);
          case 3:
            _yield$connection$que13 = _context12.sent;
            _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
            recharge = _yield$connection$que14[0];
            if (!(recharge.length === 0)) {
              _context12.next = 8;
              break;
            }
            return _context12.abrupt("return", null);
          case 8:
            return _context12.abrupt("return", (_recharge$map = recharge.map(function (item) {
              return {
                id: item.id,
                orderId: item.id_order,
                transactionId: item.transaction_id,
                utr: item.utr,
                phone: item.phone,
                money: item.money,
                type: item.type,
                status: item.status,
                today: item.today,
                url: item.url,
                time: item.time
              };
            })) === null || _recharge$map === void 0 ? void 0 : _recharge$map[0]);
          case 9:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    function getRechargeByOrderId(_x20) {
      return _getRechargeByOrderId.apply(this, arguments);
    }
    return getRechargeByOrderId;
  }(),
  cancelById: function () {
    var _cancelById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(id) {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            if (!(typeof id !== "number")) {
              _context13.next = 2;
              break;
            }
            throw Error("Invalid Recharge 'id' expected a number!");
          case 2:
            _context13.next = 4;
            return _connectDB["default"].query('UPDATE recharge SET status = 2 WHERE id = ?', [id]);
          case 4:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    function cancelById(_x21) {
      return _cancelById.apply(this, arguments);
    }
    return cancelById;
  }(),
  setStatusToSuccessByIdAndOrderId: function () {
    var _setStatusToSuccessByIdAndOrderId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(_ref14) {
      var id, orderId, _yield$connection$que15, _yield$connection$que16, re;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            id = _ref14.id, orderId = _ref14.orderId;
            if (!(typeof id !== "number")) {
              _context14.next = 3;
              break;
            }
            throw Error("Invalid Recharge 'id' expected a number!");
          case 3:
            console.log(id, orderId);
            _context14.next = 6;
            return _connectDB["default"].query('UPDATE recharge SET status = 1 WHERE id = ? AND id_order = ?', [id, orderId]);
          case 6:
            _yield$connection$que15 = _context14.sent;
            _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
            re = _yield$connection$que16[0];
            console.log(re);
          case 10:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    function setStatusToSuccessByIdAndOrderId(_x22) {
      return _setStatusToSuccessByIdAndOrderId.apply(this, arguments);
    }
    return setStatusToSuccessByIdAndOrderId;
  }(),
  getCurrentTimeForTodayField: function getCurrentTimeForTodayField() {
    return (0, _moment["default"])().format("YYYY-DD-MM h:mm:ss A");
  },
  getDMYDateOfTodayFiled: function getDMYDateOfTodayFiled(today) {
    return (0, _moment["default"])(today, "YYYY-DD-MM h:mm:ss A").format("DD-MM-YYYY");
  },
  create: function () {
    var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(newRecharge) {
      var _yield$connection$que17, _yield$connection$que18, recharge;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            if (newRecharge.url === undefined || newRecharge.url === null) {
              newRecharge.url = "0";
            }
            _context15.next = 3;
            return _connectDB["default"].query("INSERT INTO recharge SET id_order = ?, transaction_id = ?, phone = ?, money = ?, type = ?, status = ?, today = ?, url = ?, time = ?, utr = ?", [newRecharge.orderId, newRecharge.transactionId, newRecharge.phone, newRecharge.money, newRecharge.type, newRecharge.status, newRecharge.today, newRecharge.url, newRecharge.time, (newRecharge === null || newRecharge === void 0 ? void 0 : newRecharge.utr) || "NULL"]);
          case 3:
            _context15.next = 5;
            return _connectDB["default"].query('SELECT * FROM recharge WHERE id_order = ?', [newRecharge.orderId]);
          case 5:
            _yield$connection$que17 = _context15.sent;
            _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
            recharge = _yield$connection$que18[0];
            if (!(recharge.length === 0)) {
              _context15.next = 10;
              break;
            }
            throw Error("Unable to create recharge!");
          case 10:
            return _context15.abrupt("return", recharge[0]);
          case 11:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    function create(_x23) {
      return _create.apply(this, arguments);
    }
    return create;
  }()
};
var wowpay = {
  generateSign: function generateSign(params, secretKey) {
    delete params.sign;
    var stringA = Object.entries(params).filter(function (_ref15) {
      var _ref16 = _slicedToArray(_ref15, 2),
        key = _ref16[0],
        value = _ref16[1];
      return value !== null;
    }).sort(function (_ref17, _ref18) {
      var _ref19 = _slicedToArray(_ref17, 1),
        key1 = _ref19[0];
      var _ref20 = _slicedToArray(_ref18, 1),
        key2 = _ref20[0];
      return key1.localeCompare(key2);
    }).map(function (_ref21) {
      var _ref22 = _slicedToArray(_ref21, 2),
        key = _ref22[0],
        value = _ref22[1];
      return "".concat(key, "=").concat(value);
    }).join('&');
    var stringSignTemp = "".concat(stringA, "&key=").concat(secretKey);
    console.log("Value to be signed: " + stringSignTemp);
    var signValue = _crypto["default"].createHash('md5').update(stringSignTemp).digest('hex');
    var sign = signValue.toLowerCase();
    console.log("Signature result " + sign);
    return sign;
  },
  validateSignByKey: function validateSignByKey(signSource, key, retSign) {
    var signKey = _crypto["default"].createHash("md5").update(signSource + "&key=" + key).digest("hex");
    return signKey === retSign;
  }
};
module.exports = {
  initiateUPIPayment: initiateUPIPayment,
  verifyUPIPayment: verifyUPIPayment,
  initiateWowPayPayment: initiateWowPayPayment,
  verifyWowPayPayment: verifyWowPayPayment,
  initiateManualUPIPayment: initiateManualUPIPayment,
  addManualUPIPaymentRequest: addManualUPIPaymentRequest,
  addManualUSDTPaymentRequest: addManualUSDTPaymentRequest,
  initiateManualUSDTPayment: initiateManualUSDTPayment
};