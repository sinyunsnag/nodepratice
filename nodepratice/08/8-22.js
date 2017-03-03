// ����� �����մϴ�.
var express = require('express');
var cookieParser = require('cookie-parser');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(cookieParser());

// ����͸� �����մϴ�.
app.get('/getCookie', function (request, response) {
  // �����մϴ�.
  response.send(request.cookies);
});
app.get('/setCookie', function (request, response) {
  // ��Ű�� �����մϴ�.
  response.cookie('string', 'cookie');
  response.cookie('json', {
    name: 'cookie',
    property: 'delicious'
  });
  // �����մϴ�.
  response.redirect('/getCookie');
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});