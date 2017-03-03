// ����� �����մϴ�.
var http = require('http');

// ������ �����ϰ� �����մϴ�.
http.createServer(function (request, response) {
  // ��Ű�� �Է��մϴ�.
  response.writeHead(200, {
    'Content-Type': 'text/html ',
    'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});