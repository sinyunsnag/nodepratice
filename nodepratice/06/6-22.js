// ����� �����մϴ�.
var http = require('http');

// ����� ����մϴ�.
http.createServer(function (request, response) {
  if (request.method == 'GET') {
    console.log('GET ��û�Դϴ�.');
  } else if (request.method == 'POST') {
    console.log('POST ��û�Դϴ�.');
  }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});