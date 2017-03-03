// ����� �����մϴ�.
var http = require('http');

// server ��ü�� �����մϴ�.
var server = http.createServer();

// server ��ü�� �̺�Ʈ�� �����մϴ�.
server.on('request', function (code) {
  console.log('Request On');
});

server.on('connection', function (code) {
  console.log('Connection On');
});

server.on('close', function (code) {
  console.log('Close On');
});

// listen() �޼��带 �����մϴ�.
server.listen(52273);