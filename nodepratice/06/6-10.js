// ����� �����մϴ�.
var fs = require('fs');
var http = require('http');

// 52273�� ��Ʈ�� ������ �����ϰ� �����մϴ�.
http.createServer(function (request, response) {
  // �̹��� ������ �н��ϴ�.
  fs.readFile('Chrysanthemum.jpg', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    response.end(data);
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

// 52274�� ��Ʈ�� ������ �����ϰ� �����մϴ�.
http.createServer(function (request, response) {

}).listen(52274, function () {
  console.log('Server Running at http://127.0.0.1:52274');
});