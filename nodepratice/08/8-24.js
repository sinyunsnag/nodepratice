// ����� �����մϴ�.
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// ������ �����մϴ�.
var app = express();
// �̵��� �����մϴ�.
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// ����͸� �����մϴ�.
app.get('/', function (request, response) { });
app.get('/login', function (request, response) { });
app.post('/login', function (request, response) { });

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});