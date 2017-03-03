// ����� �����մϴ�.
var fs = require('fs');

// ������ �н��ϴ�.
try {
  var data = fs.readFileSync('textfile.txt', 'utf8');
  console.log(data);
} catch (e) {
  console.log(e);
}

// ������ ���ϴ�.
try {
  fs.writeFileSync('textfile.txt', 'Hello World .. !', 'utf8');
  console.log('FILE WRITE COMPLETE');
} catch (e) {
  console.log(e);
}