// ����� �����մϴ�.
var fs = require('fs');

// ����� ����մϴ�.
fs.readFile('textfile.txt', 'utf8', function (error, data) {
  console.log(data);
});