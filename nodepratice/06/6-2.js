// ������ �����մϴ�.
var server = require('http').createServer();

// ������ �����մϴ�.
server.listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

// 10�� �� �Լ��� �����մϴ�.
var test = function () {
  // ������ �����մϴ�.
  server.close();
};
setTimeout(test, 10000);