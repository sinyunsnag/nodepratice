// ����� �����մϴ�.
var http = require('http');
var fs = require('fs');

// ���û�� RSS �����͸� �ܾ�ɴϴ�.
http.get({
  host: 'www.kma.go.kr',
  path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function (response) {
  // ������ �����մϴ�.
  var result = '';

  // �����͸� �ٿ�ε��մϴ�.
  response.setEncoding('utf8');
  response.on('end', function () {
    // XMLFile.xml ������ ���ϴ�.
    fs.writeFile('XMLFile.xml', result);
  }).on('data', function (data) {
    result += data;
  });
});