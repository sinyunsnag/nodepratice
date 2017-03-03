// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(function (request, response) {
  // User-Agent �Ӽ��� �����մϴ�.
  var agent = request.header('User-Agent');

  // �������� �����մϴ�.
  if (agent.toLowerCase().match(/chrome/)) {
    // �������� ����մϴ�.
    response.send('<h1>Hello Chrome .. !</h1>');
  } else {
    // �������� ����մϴ�.
    response.send('<h1>Hello express .. !</h1>');
  }
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});