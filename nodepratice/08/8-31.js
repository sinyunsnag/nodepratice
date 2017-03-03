// ����� �����մϴ�.
var express = require('express');
var session = require('express-session');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));
app.use(function (request, response) { });

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});