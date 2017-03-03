// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(function (request, response, next) {
  // ������ �����մϴ�.
  var name = request.query.name;
  var region = request.query.region;

  // �����մϴ�.
  response.send('<h1>' + name + '-' + region + '</h1>');
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});