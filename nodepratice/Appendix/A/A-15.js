// ����� �����մϴ�.
var http = require('http');

// ���û�� RSS �����͸� �ܾ�ɴϴ�.
http.get({
  host: 'www.kma.go.kr',
  path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function (response) {
  // �����͸� �ٿ�ε��մϴ�.
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log('Data Download');
  });
});