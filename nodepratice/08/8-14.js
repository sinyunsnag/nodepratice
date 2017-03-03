// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// ����͸� �����մϴ�.
app.get('/index', function (request, response) {
  response.send('<h1>Index Page</h1>');
});
app.all('*', function (request, response) {
  response.status(404).send('<h1>ERROR - Page Not Found</h1>');
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});