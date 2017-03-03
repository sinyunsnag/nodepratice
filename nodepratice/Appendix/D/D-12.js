// ����� �����մϴ�.
var async = require('async');

// series() �޼��带 �����մϴ�.
async.series({
  first: function (callback) {
    console.log('First Function');
    callback(null, 1);
  },
  second: function (callback) {
    console.log('Second Function');
    callback(null, 2);
  },
  third: function (callback) {
    console.log('Third Function');
    callback(null, 3);
  }
}, function (error, result) {
  console.log('Last Function:', result);
});