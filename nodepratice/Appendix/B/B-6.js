// ����� �����մϴ�.
var async = require('async');

// ������ �����մϴ�.
var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

// ������ �н��ϴ�.
async.forEach(files, function (item, index) {
  console.log(item);
});