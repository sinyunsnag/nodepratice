// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(function (request, response, next) {
  // �����͸� �߰��մϴ�.
  request.number = 52;
  response.number = 273;
  next();
});
app.use(function (request, response, next) {
  // �����մϴ�.
  response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});