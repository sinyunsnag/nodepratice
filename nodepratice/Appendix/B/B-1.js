// ����� �����մϴ�.
var request = require('request');

// ��û�մϴ�.
request('http://google.com', function (error, response, body) {
  // ����մϴ�.
  console.log(body);
});