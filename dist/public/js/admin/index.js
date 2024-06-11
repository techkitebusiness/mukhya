"use strict";

var socket = io();
var typeid = $('html').attr('data-change');
var game = '';
if (typeid == '1') game = 'wingo';
if (typeid == '2') game = 'wingo3';
if (typeid == '3') game = 'wingo5';
if (typeid == '4') game = 'wingo10';
$(".container-fluid:eq(1) .row:eq(0) .info-box-content:eq(".concat(Number(typeid) - 1, ") .info-box-text")).css('color', '#e67e22');
function formatMoney(money, type) {
  return String(money).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1".concat(type));
}
function formateT(params) {
  var result = params < 10 ? "0" + params : params;
  return result;
}
function timerJoin() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var addHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var date = '';
  if (params) {
    date = new Date(Number(params));
  } else {
    date = new Date();
  }
  date.setHours(date.getHours() + addHours);
  var years = formateT(date.getFullYear());
  var months = formateT(date.getMonth() + 1);
  var days = formateT(date.getDate());
  var hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  var ampm = date.getHours() < 12 ? "AM" : "PM";
  var minutes = formateT(date.getMinutes());
  var seconds = formateT(date.getSeconds());
  return years + '-' + months + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}
var isNumber = function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};
function showJoinMember(data) {
  var phone = data.phone;
  var bet = data.bet;
  var money = formatMoney(data.money + data.fee, ',');
  var name = data.bet;
  var time = timerJoin(data.time);
  var result = '';
  result += "\n      <div class=\"direct-chat-infos clearfix\">\n        <span class=\"direct-chat-name float-left\"></span>\n        <span class=\"direct-chat-timestamp float-right text-primary\">".concat(time, "</span>\n      </div>\n      <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n      <div class=\"direct-chat-text\" style=\"background-color: ").concat(isNumber(bet) ? '#007acc' : bet == 'x' ? '#1eb93d' : bet == 'd' ? '#f52828' : bet == 't' ? '#ea3af0' : bet == 'l' ? '#ffc511' : '#5cba47', "\">\n        Join ").concat(isNumber(bet) ? bet : bet == 'd' ? 'Red' : bet == 'x' ? 'Green' : bet == 't' ? 'Violet' : bet == 'l' ? 'Big' : 'Small', " ").concat(money, "\n      </div>");
  $('.direct-chat-msg').append(result);
}
function showJoinMember2(data) {
  if (data.change == 1) return;
  var bet = data.join;
  var money = formatMoney(data.money, ',');
  var name = data.bet;
  var time = timerJoin(data.time);
  var result = '';
  result += "\n      <div class=\"direct-chat-infos clearfix\">\n        <span class=\"direct-chat-name float-left\"></span>\n        <span class=\"direct-chat-timestamp float-right text-primary\">".concat(time, "</span>\n      </div>\n      <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n      <div class=\"direct-chat-text\" style=\"background-color: ").concat(isNumber(bet) ? '#007acc' : bet == 'x' ? '#1eb93d' : bet == 'd' ? '#f52828' : bet == 't' ? '#ea3af0' : bet == 'l' ? '#ffc511' : '#5cba47', "\">\n        Join ").concat(isNumber(bet) ? bet : bet == 'd' ? 'Red' : bet == 'x' ? 'Green' : bet == 't' ? 'Violet' : bet == 'l' ? 'Big' : 'Small', " ").concat(money, "\n      </div>");
  $('.direct-chat-msg').append(result);
}
socket.on("data-server_2", function (msg) {
  showJoinMember2(msg);
  $(".direct-chat-warning .direct-chat-messages").animate({
    scrollTop: $(".direct-chat-msg").prop("scrollHeight")
  }, 750);
  if (msg.level == 1) return;
  var red = Number($('.orderRed').attr('totalmoney'));
  var green = Number($('.orderViolet').attr('totalmoney'));
  var violet = Number($('.orderGreen').attr('totalmoney'));
  var n0 = Number($('.orderNumber:eq(0)').attr('totalmoney'));
  var n1 = Number($('.orderNumber:eq(1)').attr('totalmoney'));
  var n2 = Number($('.orderNumber:eq(2)').attr('totalmoney'));
  var n3 = Number($('.orderNumber:eq(3)').attr('totalmoney'));
  var n4 = Number($('.orderNumber:eq(4)').attr('totalmoney'));
  var n5 = Number($('.orderNumber:eq(5)').attr('totalmoney'));
  var n6 = Number($('.orderNumber:eq(6)').attr('totalmoney'));
  var n7 = Number($('.orderNumber:eq(7)').attr('totalmoney'));
  var n8 = Number($('.orderNumber:eq(8)').attr('totalmoney'));
  var n9 = Number($('.orderNumber:eq(9)').attr('totalmoney'));
  var n = Number($('.orderNumber:eq(10)').attr('totalmoney'));
  var l = Number($('.orderNumber:eq(11)').attr('totalmoney'));
  var ns = Number($('.orderNumbers').attr('totalmoney', ns));
  if (msg.join == '0') n0 += msg.money - msg.money * 0.02;
  if (msg.join == '1') n1 += msg.money - msg.money * 0.02;
  if (msg.join == '2') n2 += msg.money - msg.money * 0.02;
  if (msg.join == '3') n3 += msg.money - msg.money * 0.02;
  if (msg.join == '4') n4 += msg.money - msg.money * 0.02;
  if (msg.join == '5') n5 += msg.money - msg.money * 0.02;
  if (msg.join == '6') n6 += msg.money - msg.money * 0.02;
  if (msg.join == '7') n7 += msg.money - msg.money * 0.02;
  if (msg.join == '8') n8 += msg.money - msg.money * 0.02;
  if (msg.join == '9') n9 += msg.money - msg.money * 0.02;
  if (msg.join == 'x') green += msg.money - msg.money * 0.02;
  if (msg.join == 't') violet += msg.money - msg.money * 0.02;
  if (msg.join == 'd') red += msg.money - msg.money * 0.02;
  if (msg.join == 'l') l += msg.money - msg.money * 0.02;
  if (msg.join == 'n') n += msg.money - msg.money * 0.02;
  ns = n0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9;
  $('.orderRed').text(formatMoney(red, ','));
  $('.orderViolet').text(formatMoney(violet, ','));
  $('.orderGreen').text(formatMoney(green, ','));
  $('.orderNumber:eq(0)').text(formatMoney(n0, ','));
  $('.orderNumber:eq(1)').text(formatMoney(n1, ','));
  $('.orderNumber:eq(2)').text(formatMoney(n2, ','));
  $('.orderNumber:eq(3)').text(formatMoney(n3, ','));
  $('.orderNumber:eq(4)').text(formatMoney(n4, ','));
  $('.orderNumber:eq(5)').text(formatMoney(n5, ','));
  $('.orderNumber:eq(6)').text(formatMoney(n6, ','));
  $('.orderNumber:eq(7)').text(formatMoney(n7, ','));
  $('.orderNumber:eq(8)').text(formatMoney(n8, ','));
  $('.orderNumber:eq(9)').text(formatMoney(n9, ','));
  $('.orderNumber:eq(10)').text(formatMoney(l, ','));
  $('.orderNumber:eq(11)').text(formatMoney(n, ','));
  $('.orderNumbers').text(formatMoney(ns, ','));
  $('.orderRed').attr('totalmoney', red);
  $('.orderViolet').attr('totalmoney', green);
  $('.orderGreen').attr('totalmoney', violet);
  $('.orderNumber:eq(0)').attr('totalmoney', n0);
  $('.orderNumber:eq(1)').attr('totalmoney', n1);
  $('.orderNumber:eq(2)').attr('totalmoney', n2);
  $('.orderNumber:eq(3)').attr('totalmoney', n3);
  $('.orderNumber:eq(4)').attr('totalmoney', n4);
  $('.orderNumber:eq(5)').attr('totalmoney', n5);
  $('.orderNumber:eq(6)').attr('totalmoney', n6);
  $('.orderNumber:eq(7)').attr('totalmoney', n7);
  $('.orderNumber:eq(8)').attr('totalmoney', n8);
  $('.orderNumber:eq(9)').attr('totalmoney', n9);
  $('.orderNumber:eq(10)').attr('totalmoney', n);
  $('.orderNumber:eq(11)').attr('totalmoney', l);
  $('.orderNumbers').attr('totalmoney', ns);
});
function showListOrder4(list_orders, x) {
  var htmls = "";
  var result = list_orders.map(function (list_orders) {
    return htmls += "\n                    <div data-v-a9660e98=\"\" class=\"c-tc item van-row\">\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--8\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">".concat(list_orders.period, "</div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <!---->\n                                <span data-v-a9660e98=\"\" class=\"").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"> ").concat(list_orders.amount, " </span>\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <span data-v-a9660e98=\"\"> ").concat(list_orders.amount < 5 ? "Small" : "Big", " </span>\n                                <!---->\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--6\">\n                            <div data-v-a9660e98=\"\" class=\"goItem c-row c-tc c-row-center\">\n                                <div data-v-a9660e98=\"\" class=\"c-tc c-row box c-row-center\">\n                                    <span data-v-a9660e98=\"\" class=\"li ").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"></span>\n                                    ").concat(list_orders.amount == 0 || list_orders.amount == 5 ? '<span data-v-a9660e98="" class="li violet"></span>' : "", "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    ");
  });
  $("#list-orders").html(htmls);
}
socket.on("data-server", function (msg) {
  if (msg.data[0].game != game) return;
  $(".direct-chat-msg").html('');
  $('.info-box-number').text('0');
  var data1 = msg.data[0]; // lấy ra cầu mới nhất
  $(".reservation-chunk-sub-num").text(data1.period);
  var data2 = []; // lấy ra cầu cũ
  var data3 = data2.push(msg.data[1]);
  $(".direct-chat-warning .direct-chat-messages").animate({
    scrollTop: $(".direct-chat-msg").prop("scrollHeight")
  }, 750);
  $.ajax({
    type: "POST",
    url: "/api/webapi/admin/totalJoin",
    data: {
      typeid: typeid
    },
    dataType: "json",
    success: function success(response) {
      var red = 0;
      var green = 0;
      var violet = 0;
      var n0 = 0;
      var n1 = 0;
      var n2 = 0;
      var n3 = 0;
      var n4 = 0;
      var n5 = 0;
      var n6 = 0;
      var n7 = 0;
      var n8 = 0;
      var n9 = 0;
      var n = 0;
      var l = 0;
      var ns = 0;
      var length = response.datas.length;
      var datas = response.datas;
      for (var i = 0; i < length; i++) {
        if (datas[i].bet == '0') n0 += datas[i].money;
        if (datas[i].bet == '1') n1 += datas[i].money;
        if (datas[i].bet == '2') n2 += datas[i].money;
        if (datas[i].bet == '3') n3 += datas[i].money;
        if (datas[i].bet == '4') n4 += datas[i].money;
        if (datas[i].bet == '5') n5 += datas[i].money;
        if (datas[i].bet == '6') n6 += datas[i].money;
        if (datas[i].bet == '7') n7 += datas[i].money;
        if (datas[i].bet == '8') n8 += datas[i].money;
        if (datas[i].bet == '9') n9 += datas[i].money;
        if (datas[i].bet == 'x') green += datas[i].money;
        if (datas[i].bet == 't') violet += datas[i].money;
        if (datas[i].bet == 'd') red += datas[i].money;
        if (datas[i].bet == 'l') l += datas[i].money;
        if (datas[i].bet == 'n') n += datas[i].money;
      }
      ns = n0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9;
      $('.orderRed').text(formatMoney(red, ','));
      $('.orderViolet').text(formatMoney(violet, ','));
      $('.orderGreen').text(formatMoney(green, ','));
      $('.orderNumber:eq(0)').text(formatMoney(n0, ','));
      $('.orderNumber:eq(1)').text(formatMoney(n1, ','));
      $('.orderNumber:eq(2)').text(formatMoney(n2, ','));
      $('.orderNumber:eq(3)').text(formatMoney(n3, ','));
      $('.orderNumber:eq(4)').text(formatMoney(n4, ','));
      $('.orderNumber:eq(5)').text(formatMoney(n5, ','));
      $('.orderNumber:eq(6)').text(formatMoney(n6, ','));
      $('.orderNumber:eq(7)').text(formatMoney(n7, ','));
      $('.orderNumber:eq(8)').text(formatMoney(n8, ','));
      $('.orderNumber:eq(9)').text(formatMoney(n9, ','));
      $('.orderNumber:eq(10)').text(formatMoney(l, ','));
      $('.orderNumber:eq(11)').text(formatMoney(n, ','));
      $('.orderNumbers').text(formatMoney(ns, ','));
      $('.orderRed').attr('totalmoney', red);
      $('.orderViolet').attr('totalmoney', violet);
      $('.orderGreen').attr('totalmoney', green);
      $('.orderNumber:eq(0)').attr('totalmoney', n0);
      $('.orderNumber:eq(1)').attr('totalmoney', n1);
      $('.orderNumber:eq(2)').attr('totalmoney', n2);
      $('.orderNumber:eq(3)').attr('totalmoney', n3);
      $('.orderNumber:eq(4)').attr('totalmoney', n4);
      $('.orderNumber:eq(5)').attr('totalmoney', n5);
      $('.orderNumber:eq(6)').attr('totalmoney', n6);
      $('.orderNumber:eq(7)').attr('totalmoney', n7);
      $('.orderNumber:eq(8)').attr('totalmoney', n8);
      $('.orderNumber:eq(9)').attr('totalmoney', n9);
      $('.orderNumber:eq(10)').attr('totalmoney', l);
      $('.orderNumber:eq(11)').attr('totalmoney', n);
      $('.orderNumbers').attr('totalmoney', ns);
      response.datas.map(function (data) {
        showJoinMember(data);
      });
      showListOrder3(response.list_orders);
      $(".direct-chat-warning .direct-chat-messages").animate({
        scrollTop: $(".direct-chat-msg").prop("scrollHeight")
      }, 750);
      $('.reservation-chunk-sub-num').text(response.lotterys[0].period);
      var is = '';
      if (typeid == '1') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo1 == '-1' ? 'Random' : response.setting[0].wingo1));
      if (typeid == '2') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo3 == '-1' ? 'Random' : response.setting[0].wingo3));
      if (typeid == '3') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo5 == '-1' ? 'Random' : response.setting[0].wingo5));
      if (typeid == '4') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo10 == '-1' ? 'Random' : response.setting[0].wingo10));
      if (typeid == '1') $('#winrate').text("Next Result: ".concat(response.setting[0].bs1 == '-1' ? 'Random' : response.setting[0].bs1));
      if (typeid == '2') $('#winrate').text("Next Result: ".concat(response.setting[0].bs3 == '-1' ? 'Random' : response.setting[0].bs3));
      if (typeid == '3') $('#winrate').text("Next Result: ".concat(response.setting[0].bs5 == '-1' ? 'Random' : response.setting[0].bs5));
      if (typeid == '4') $('#winrate').text("Next Result: ".concat(response.setting[0].bs10 == '-1' ? 'Random' : response.setting[0].bs10));
    }
  });
});
function showListOrder3(list_orders, x) {
  var htmls = "";
  var result = list_orders.map(function (list_orders) {
    return htmls += "\n                    <div data-v-a9660e98=\"\" class=\"c-tc item van-row\">\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--8\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">".concat(list_orders.period, "</div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <!---->\n                                <span data-v-a9660e98=\"\" class=\"").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"> ").concat(list_orders.amount, " </span>\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <span data-v-a9660e98=\"\"> ").concat(list_orders.amount < 5 ? "Small" : "Big", " </span>\n                                <!---->\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--6\">\n                            <div data-v-a9660e98=\"\" class=\"goItem c-row c-tc c-row-center\">\n                                <div data-v-a9660e98=\"\" class=\"c-tc c-row box c-row-center\">\n                                    <span data-v-a9660e98=\"\" class=\"li ").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"></span>\n                                    ").concat(list_orders.amount == 0 || list_orders.amount == 5 ? '<span data-v-a9660e98="" class="li violet"></span>' : "", "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    ");
  });
  $("#list-orders").html(htmls);
  // $(`.game-list .con-box:eq(${x}) .hb .c-tc`).last().remove();
}
$.ajax({
  type: "POST",
  url: "/api/webapi/admin/totalJoin",
  data: {
    typeid: typeid
  },
  dataType: "json",
  success: function success(response) {
    var red = 0;
    var green = 0;
    var violet = 0;
    var n0 = 0;
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    var n6 = 0;
    var n7 = 0;
    var n8 = 0;
    var n9 = 0;
    var n = 0;
    var l = 0;
    var ns = 0;
    var length = response.datas.length;
    var datas = response.datas;
    for (var i = 0; i < length; i++) {
      if (datas[i].bet == '0') n0 += datas[i].money;
      if (datas[i].bet == '1') n1 += datas[i].money;
      if (datas[i].bet == '2') n2 += datas[i].money;
      if (datas[i].bet == '3') n3 += datas[i].money;
      if (datas[i].bet == '4') n4 += datas[i].money;
      if (datas[i].bet == '5') n5 += datas[i].money;
      if (datas[i].bet == '6') n6 += datas[i].money;
      if (datas[i].bet == '7') n7 += datas[i].money;
      if (datas[i].bet == '8') n8 += datas[i].money;
      if (datas[i].bet == '9') n9 += datas[i].money;
      if (datas[i].bet == 'x') green += datas[i].money;
      if (datas[i].bet == 't') violet += datas[i].money;
      if (datas[i].bet == 'd') red += datas[i].money;
      if (datas[i].bet == 'l') l += datas[i].money;
      if (datas[i].bet == 'n') n += datas[i].money;
    }
    ns = n0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9;
    $('.orderRed').text(formatMoney(red, ','));
    $('.orderViolet').text(formatMoney(violet, ','));
    $('.orderGreen').text(formatMoney(green, ','));
    $('.orderNumber:eq(0)').text(formatMoney(n0, ','));
    $('.orderNumber:eq(1)').text(formatMoney(n1, ','));
    $('.orderNumber:eq(2)').text(formatMoney(n2, ','));
    $('.orderNumber:eq(3)').text(formatMoney(n3, ','));
    $('.orderNumber:eq(4)').text(formatMoney(n4, ','));
    $('.orderNumber:eq(5)').text(formatMoney(n5, ','));
    $('.orderNumber:eq(6)').text(formatMoney(n6, ','));
    $('.orderNumber:eq(7)').text(formatMoney(n7, ','));
    $('.orderNumber:eq(8)').text(formatMoney(n8, ','));
    $('.orderNumber:eq(9)').text(formatMoney(n9, ','));
    $('.orderNumber:eq(10)').text(formatMoney(l, ','));
    $('.orderNumber:eq(11)').text(formatMoney(n, ','));
    $('.orderNumbers').text(formatMoney(ns, ','));
    $('.orderRed').attr('totalmoney', red);
    $('.orderViolet').attr('totalmoney', violet);
    $('.orderGreen').attr('totalmoney', green);
    $('.orderNumber:eq(0)').attr('totalmoney', n0);
    $('.orderNumber:eq(1)').attr('totalmoney', n1);
    $('.orderNumber:eq(2)').attr('totalmoney', n2);
    $('.orderNumber:eq(3)').attr('totalmoney', n3);
    $('.orderNumber:eq(4)').attr('totalmoney', n4);
    $('.orderNumber:eq(5)').attr('totalmoney', n5);
    $('.orderNumber:eq(6)').attr('totalmoney', n6);
    $('.orderNumber:eq(7)').attr('totalmoney', n7);
    $('.orderNumber:eq(8)').attr('totalmoney', n8);
    $('.orderNumber:eq(9)').attr('totalmoney', n9);
    $('.orderNumber:eq(10)').attr('totalmoney', l);
    $('.orderNumber:eq(11)').attr('totalmoney', n);
    $('.orderNumbers').attr('totalmoney', ns);
    response.datas.map(function (data) {
      showJoinMember(data);
    });
    showListOrder3(response.list_orders);
    $(".direct-chat-warning .direct-chat-messages").animate({
      scrollTop: $(".direct-chat-msg").prop("scrollHeight")
    }, 750);
    $('.reservation-chunk-sub-num').text(response.lotterys[0].period);
    var is = '';
    if (typeid == '1') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo1 == '-1' ? 'Random' : response.setting[0].wingo1));
    if (typeid == '2') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo3 == '-1' ? 'Random' : response.setting[0].wingo3));
    if (typeid == '3') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo5 == '-1' ? 'Random' : response.setting[0].wingo5));
    if (typeid == '4') is = $('#ketQua').text("Next Result: ".concat(response.setting[0].wingo10 == '-1' ? 'Random' : response.setting[0].wingo10));
    if (typeid == '1') $('#winrate').text("Next Result: ".concat(response.setting[0].bs1 == '-1' ? 'Random' : response.setting[0].bs1));
    if (typeid == '2') $('#winrate').text("Next Result: ".concat(response.setting[0].bs3 == '-1' ? 'Random' : response.setting[0].bs3));
    if (typeid == '3') $('#winrate').text("Next Result: ".concat(response.setting[0].bs5 == '-1' ? 'Random' : response.setting[0].bs5));
    if (typeid == '4') $('#winrate').text("Next Result: ".concat(response.setting[0].bs10 == '-1' ? 'Random' : response.setting[0].bs10));
  }
});
$('.start-order').click(function (e) {
  e.preventDefault();
  var value = $('#editResult').val();
  var arr = value.split('|');
  for (var i = 0; i < arr.length; i++) {
    var check = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(String(arr[i]));
    if (arr[i] == "" || arr[i].length > 1 || !check) {
      alert("Please enter the correct format (e.g., 1|4|5|1|5)");
      return false;
    }
  }
  if (value != '') {
    $.ajax({
      type: "POST",
      url: "/api/webapi/admin/change",
      data: {
        type: 'change-wingo1',
        value: value,
        typeid: typeid
      },
      dataType: "json",
      success: function success(response) {
        Swal.fire('Good job!', "".concat(response.message), 'success');
        $('#ketQua').text("Next Result: ".concat(value));
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    });
  }
});

// $('.editWinRate').click(function (e) {
//     e.preventDefault();
//     let value = $('#editWinRate').val();
//     let arr = value.split('|');
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "" || arr[i].length > 1 || arr[i] != 0 && arr[i] != '1') {
//             alert("Vui lòng nhập đúng định dạng (VD: 1|0|0|1|1)");
//             return false;
//         }
//     }
//     if (value != '') {
//         $.ajax({
//             type: "POST",
//             url: "/api/webapi/admin/change",
//             data: {
//                 type: 'change-win_rate',
//                 value: value,
//                 typeid: typeid,
//             },
//             dataType: "json",
//             success: function (response) {
//                 Swal.fire(
//                     'Good job!',
//                     `${response.message}`,
//                     'success'
//                 );
//                 $('#ketQua').text(`Next Result: ${value}`);
//             }
//         });
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//         })
//     }
// });