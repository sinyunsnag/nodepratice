// ����� �����մϴ�.
var fs = require('fs');

// ����� ����մϴ�.
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);