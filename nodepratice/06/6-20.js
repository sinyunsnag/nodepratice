// ����� �����մϴ�.
var http = require('http');
var fs = require('fs');
var url = require('url');

// ������ ���� �� �����մϴ�.
http.createServer(function (request, response) {
  // ������ �����մϴ�.
  var pathname = url.parse(request.url).pathname;

  // �������� �����մϴ�.
  if (pathname == '/') {

  } else if (pathname == '/OtherPage') {

  }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});