// ����� �����մϴ�.
var express = require('express');
var bodyParser = require('body-parser');

// ������ �����մϴ�.
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (request, response) {
    response.send({
        method: request.method,
        query: request.query,
        body: request.body
    });
});

// ������ �����մϴ�.
app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});