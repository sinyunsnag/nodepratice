// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(function (request, response, next) {
  // �����մϴ�.
  response.status(404).send('<h1>ERROR</h1>');
});

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});