// ����� �����մϴ�.
var http = require('http');

// ����� ����մϴ�.
http.createServer(function (request, response) {
  // ��Ű�� �ִ��� Ȯ��
  if (request.headers.cookie) {
    // ��Ű�� �����ϰ� �����մϴ�.
    var cookie = request.headers.cookie.split(';').map(function (element) {
      var element = element.split('=');
      return {
        key: element[0],
        value: element[1]
      };
    });

    // �����մϴ�.
    response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
  } else {
    // ��Ű�� �����մϴ�.
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['name = RintIanTta', 'region = Seoul']
    });

    // �����մϴ�.
    response.end('<h1>��Ű�� �����߽��ϴ�</h1>');
  }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});