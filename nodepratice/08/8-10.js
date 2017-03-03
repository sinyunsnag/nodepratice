// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// �̵���� ����(1)
app.use(function (request, response, next) {
  console.log("ù ��° �̵����");
  next();
});

// �̵���� ����(2)
app.use(function (request, response, next) {
  console.log("�� ��° �̵����");
  next();
});

// �̵���� ����(3)
app.use(function (request, response, next) {
  console.log("�� ��° �̵����");
  // �����մϴ�.
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>express Basic</h1>');
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});