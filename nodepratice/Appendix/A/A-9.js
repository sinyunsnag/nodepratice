// ����� �����մϴ�.
var net = require('net');
var crypto = require('crypto');

//������ �����մϴ�.
var guid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

// TCP ������ �����մϴ�.
net.createServer(function (socket) {
  socket.on('data', function (data) {
    if (/websocket/.test(data.toString())) {

    } else if (/HTTP/.test(data.toString())) {

    } else {

    }
  });
}).listen(52273, function () {
  console.log('TCP Server Running at 127.0.0.1:52273');
});