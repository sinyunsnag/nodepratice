// ����� �����մϴ�.
var fs = require('fs');

// TextFile1.txt ������ �н��ϴ�.
fs.readFile('TextFile1.txt', function (error, data1) {
  // TextFile2.txt ������ �н��ϴ�.
  fs.readFile('TextFile2.txt', function (error, data2) {
    // TextFile3.txt ������ �н��ϴ�.
    fs.readFile('TextFile3.txt', function (error, data3) {
      // ����մϴ�.
      console.log(data1);
      console.log(data2);
      console.log(data3);
    });
  });
});