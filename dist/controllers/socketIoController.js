"use strict";

var _connectDB = _interopRequireDefault(require("../config/connectDB"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require('dotenv').config();
var sendMessageAdmin = function sendMessageAdmin(io) {
  io.on('connection', function (socket) {
    socket.on('data-server', function (msg) {
      io.emit('data-server', msg);
    });
    socket.on('data-server_2', function (msg) {
      io.emit('data-server_2', msg);
    });
    socket.on('data-server-5', function (msg) {
      io.emit('data-server-5', msg);
    });
    socket.on('data-server-3', function (msg) {
      io.emit('data-server-3', msg);
    });
    // socket.on("disconnect", () => {
    // console.log('a user disconnect ' + socket.id);
    // });
  });
};
module.exports = {
  sendMessageAdmin: sendMessageAdmin
};