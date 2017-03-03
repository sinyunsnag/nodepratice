// ����� ������ �����մϴ�.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// �� ������ ����ϴ�.
var server = http.createServer(function (request, response) {
  // HTMLPage.html ������ �н��ϴ�.
  fs.readFile('HTMLPage.html', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

// ���� ������ ����ϴ�.
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
  // message �̺�Ʈ
  socket.on('message', function (data) {
    // Ŭ���̾�Ʈ�� message �̺�Ʈ�� �߻���ŵ�ϴ�.
    io.sockets.emit('message', data);
  });
});