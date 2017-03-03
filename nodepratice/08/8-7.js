// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(function (request, response) {
  // User-Agent �Ӽ��� �����մϴ�.
  var agent = request.header('User-Agent');
  console.log(request.headers);
  console.log(agent);

  // �����մϴ�.
  // ���� �ڵ常 ���� ���� sendStatus() �޼��带 ����մϴ�.
  response.sendStatus(200);
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});