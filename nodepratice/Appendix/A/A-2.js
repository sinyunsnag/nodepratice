// ����� �����մϴ�.
var net = require('net');

// TCP ������ �����մϴ�.
net.createServer(function (socket) {
  // �̺�Ʈ�� �����մϴ�.
  socket.on('data', function (data) {
    // �Է¹��� �����͸� ����մϴ�.
    console.log(data.toString('utf8'));

    // Ŭ���̾�Ʈ�� �����͸� �����մϴ�
    socket.write(data);
  });
}).listen(52273, function () {
  console.log('TCP Server Running at 127.0.0.1:52273');
});