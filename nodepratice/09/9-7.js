// ����� �����մϴ�.
var mysql = require('mysql');

// �����ͺ��̽��� �����մϴ�.
var client = mysql.createConnection({
  user: 'root',
  password: '��й�ȣ',
  database: 'Company'
});

// �����ͺ��̽� ������ �����մϴ�.
client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
    'Name Value', 'Model Number Value', 'Series Value'
], function (error, results, fields) {

});