// ����� �����մϴ�.
var http = require('http');
var fs = require('fs');

// ������ �����ϰ� �����մϴ�.
http.createServer(function (request, response) {
  // JadePage.jade ������ �н��ϴ�.
  fs.readFile('7-18.jade', 'utf8', function (error, data) {

  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});