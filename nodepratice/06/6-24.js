// ����� �����մϴ�.
var http = require('http');

// ����� ����մϴ�.
http.createServer(function (request, response) {
  request.on('data', function (data) {
    console.log('POST Data:', data);
  });
}).listen(52273);