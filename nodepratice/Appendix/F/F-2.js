// �����ͺ��̽��� �����մϴ�.
var mongojs = require('mongojs')
var db = mongojs('node', ['products']);

// �����͸� �����մϴ�.
db.products.find(function (error, data) {
  console.log(data);
});