// ����� �����մϴ�.
var http = require('http');
var url = require('url');

// ����� ����մϴ�.
http.createServer(function (request, response) {
  // ��û �Ű������� �����մϴ�.
  var query = url.parse(request.url, true).query;

  // GET ��û �Ű����� ���
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});