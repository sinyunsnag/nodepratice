// ����� �����մϴ�.
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// ���� �����ͺ��̽��� �����մϴ�.
var DummyDB = (function () {

})();

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(bodyParser.urlencoded({
  extended: false
}));

// ����͸� �����մϴ�.
app.get('/user', function (request, response) { });
app.get('/user/:id', function (request, response) { });
app.post('/user', function (request, response) { });
app.put('/user/:id', function (request, response) { });
app.delete('/user/:id', function (request, response) { });

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});