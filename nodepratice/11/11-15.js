// ����� �����մϴ�.
var fs = require('fs');

// ������ �����մϴ�.
var server = require('http').createServer();
var io = require('socket.io').listen(server);

// ������ �����մϴ�.
server.listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

// �� ���� �̺�Ʈ�� �����մϴ�.
server.on('request', function (request, response) {
  // HTMLPage.html ������ �н��ϴ�.
  fs.readFile('HTMLPage.html', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
});

// ���� ���� �̺�Ʈ�� �����մϴ�.
io.sockets.on('connection', function (socket) {

});