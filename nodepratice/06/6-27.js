// ����� �����մϴ�.
var http = require('http');

// ����� ����մϴ�.
http.createServer(function (request, response) {
  // GET COOKIE
  var cookie = request.headers.cookie;

  // SET COOKIE
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': ['name = RintIanTta', 'region = Seoul']
  });
  // �����մϴ�.
  response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});