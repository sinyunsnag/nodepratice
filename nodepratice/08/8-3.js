// ����� �����մϴ�.
var http = require('http');
var express = require('express');

// ������ �����մϴ�.
var app = express();

// ������ �����մϴ�.
http.createServer(app).listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});