// ����� �����մϴ�.
var net = require('net');
var crypto = require('crypto');

//������ �����մϴ�.
var guid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

// TCP ������ �����մϴ�.
net.createServer(function (socket) {
  socket.on('data', function (data) {
    if (/websocket/.test(data.toString())) {
      // Socket Key�� �����մϴ�.
      var headers = data.toString().split('\n');
      var socketKey = '';
      headers.forEach(function (item) {
        var dictionary = item.split(':');
        if (dictionary.length == 2 && dictionary[0].toLowerCase().trim() == 'sec-websocket-key') {
          socketKey = dictionary[1].trim();
        }
      });

      // Response Key�� �����մϴ�.
      var longKey = socketKey + guid;
      var shasum = crypto.createHash('sha1').update(longKey);
      var outputKey = shasum.digest('base64');

      // ���� ����� �ۼ��մϴ�.
      socket.write('HTTP/1.1 101 Switching Protocols\r\n');
      socket.write('Upgrade: WebSocket\r\n');
      socket.write('Connection: Upgrade\r\n');
      socket.write('Sec-WebSocket-Accept: ' + outputKey + '\r\n\r\n');

      // �޽����� �����մϴ�.
      setInterval(function () {
        var output = 'Hello Web Socket Server .. !'
        var frameBuffer = new Buffer(2 + output.length);
        frameBuffer[0] = 0x81; // 1000 0001
        frameBuffer[1] = output.length;
        for (var i = 0; i < output.length; i++) {
          frameBuffer[i + 2] = output.charCodeAt(i)
        }
        socket.write(frameBuffer);
      }, 1000);
    } else if (/HTTP/.test(data.toString())) {
      // HTML ���ڿ� �迭�� �����մϴ�.
      var output = [];
      output.push('<script>');
      output.push('    var socket = new WebSocket("ws://localhost:52273/")');
      output.push('    socket.onopen = function (event) {');
      output.push('        console.log("Web Socket Open.");');
      output.push('        setInterval(function () {');
      output.push('            socket.send("From Client");');
      output.push('        }, 1000);');
      output.push('    };');
      output.push('    socket.onerror = function (error) {');
      output.push('        console.log(error);');
      output.push('    };');
      output.push('    socket.onmessage = function (event) {');
      output.push('        console.log("Web Socket Data: " + event.data);');
      output.push('    };');
      output.push('    socket.onclose = function (event) {');
      output.push('        console.log("Web Socket Close.");');
      output.push('    };');
      output.push('</script>');

      // ���ڿ��� ��ȯ�մϴ�.
      output = output.join('\n');

      // ���� ����� �ۼ��մϴ�.
      socket.write('HTTP/1.1 200 OK\r\n');
      socket.write('Server: RintIanTta Node.js Custom Server\r\n');
      socket.write('Content-Type: text/html\r\n');
      socket.write('Content-Length: ' + output.length + '\r\n');
      socket.write('\r\n');
      socket.write(output);
      socket.end();
    } else {

    }
  });
}).listen(52273, function () {
  console.log('TCP Server Running at 127.0.0.1:52273');
});