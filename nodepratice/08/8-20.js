// ����� �����մϴ�.
var express = require('express');
var morgan = require('morgan');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(morgan(':method + :date'));
app.use(function (request, response) {
  response.send('<h1>express Basic</h1>');
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});