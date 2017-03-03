// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// ����͸� �����մϴ�.
var routerA = express.Router();
var routerB = express.Router();

// �����A�� �����մϴ�.
routerA.get('/index', function (request, response) {
  response.send('<h1>Index Page</h1>');
});

// �����B�� �����մϴ�.
routerB.get('/index', function (request, response) {
  response.send('<h1>Index Page</h1>');
});

// ����͸� �����մϴ�.
app.use('/a', routerA);
app.use('/b', routerB);

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});