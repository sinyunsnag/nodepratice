// ����� �����մϴ�.
var fs = require('fs');
var async = require('async');

// ������ �����մϴ�.
var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

// ������ �н��ϴ�.
async.map(files, fs.stat, function (error, results) {
  console.log(results);
});