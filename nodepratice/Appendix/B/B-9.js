// ����� �����մϴ�.
var fs = require('fs');
var async = require('async');

// ������ �����մϴ�.
var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

// ������ �н��ϴ�.
async.map(files, fs.readFile, function (error, results) {
  console.log(results[0].toString('utf8'));
  console.log(results[1].toString('utf8'));
  console.log(results[2].toString('utf8'));
});