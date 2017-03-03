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
    // Index.html ������ �н��ϴ�.
    fs.readFile('6-17.html', function (error, data) {
      // �����մϴ�.
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (pathname == '/OtherPage') {
    // OtherPage.html ������ �н��ϴ�.
    fs.readFile('6-18.html', function (error, data) {
      // �����մϴ�.
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});