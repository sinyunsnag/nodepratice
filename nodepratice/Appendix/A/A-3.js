// ����� �����մϴ�.
var net = require('net');

// ����� ����մϴ�.
var socket = net.connect(52273, '127.0.0.1', function () {
  console.log('Client Start');
});

// �̺�Ʈ�� �����մϴ�.
socket.on('data', function (data) {
  console.log(data.toString());
});