// ����� �����մϴ�.
var http = require('http');
var jade = require('jade');
var fs = require('fs');

// ������ �����ϰ� �����մϴ�.
http.createServer(function (request, response) {
  // JadePage.jade ������ �н��ϴ�.
  fs.readFile('7-20.jade', 'utf8', function (error, data) {
    // jade ����� ����մϴ�.
    var fn = jade.compile(data);
    // ����մϴ�.
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(fn({
      name: 'RintIanTta',
      description: 'Hello jade With Node.js .. !'
    }));
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});