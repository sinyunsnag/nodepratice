// ����� �����մϴ�.
var mysql = require('mysql');

// �����ͺ��̽��� �����մϴ�.
var client = mysql.createConnection({
  user: 'root',
  password: '��й�ȣ'
});

// �����ͺ��̽� ������ ����մϴ�.
client.query('USE Company');
client.query('SELECT * FROM products', function (error, result, fields) {

});