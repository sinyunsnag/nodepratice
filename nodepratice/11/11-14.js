// ����� �����մϴ�.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// �� ������ �����մϴ�.
var server = http.createServer(function (request, response) {
  // HTMLPage.html ������ �н��ϴ�.
  fs.readFile('11-10.html', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
}).listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});

// ���� ������ ���� �� �����մϴ�.
var id = 0;
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
  // id�� �����մϴ�.
  id = socket.id;

  // rint �̺�Ʈ
  socket.on('rint', function (data) {
    // private ���
    io.sockets.to(id).emit('smart', data);
  });
});