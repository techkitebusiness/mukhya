"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mysql = require('mysql2/promise');
var connection = mysql.createPool({
    host: 'localhost',  
    user: 'terangamain',
    password: 'terangamain',
    database: 'bgdsam'
});
var _default = exports["default"] = connection;



// host: 'localhost',
// user: 'superwinning',
// password: 'superwinning1',
// database: 'superwinning'
// });