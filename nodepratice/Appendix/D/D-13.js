// ����� �����մϴ�.
var async = require('async');

// series() �޼��带 �����մϴ�.
async.parallel([
    function (callback) {
      // ù ��° �Լ��� �����մϴ�.
      console.log('First Function Start');
      // 2�� �Ŀ� �Լ��� �����մϴ�.
      setTimeout(function () {
        console.log('First Function End');
        callback(null, 1);
      }, 2000);
    },
    function (callback) {
      // �� ��° �Լ��� �����մϴ�.
      console.log('Second Function Start');
      // 1�� �Ŀ� �Լ��� �����մϴ�.
      setTimeout(function () {
        console.log('Second Function End');
        callback(null, 2);
      }, 1000);
    }
], function (error, result) {
  console.log('Last Function:', result);
});