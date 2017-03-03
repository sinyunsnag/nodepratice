// ����� �����մϴ�.
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// ������ �����ϰ� �����մϴ�.
http.createServer(function (request, response) {
  // ejsPage.ejs ������ �н��ϴ�.
  fs.readFile('7-8.ejs', 'utf8', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(ejs.render(data, {
      name: 'RintIanTta',
      description: 'Hello ejs With Node.js .. !'
    }));
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});