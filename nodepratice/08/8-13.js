// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// ����͸� �����մϴ�.
app.get('/page/:id', function (request, response) {
  // ������ �����մϴ�.
  var name = request.params.id;

  // �����մϴ�.
  response.send('<h1>' + name + ' Page</h1>');
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});