// ����� �����մϴ�.
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

// �����ͺ��̽��� �����մϴ�.
var client = mysql.createConnection({
  user: 'root',
  password: '��й�ȣ',
  database: 'Company'
});

// ������ �����մϴ�.
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('server running at http://127.0.0.1:52273');
});

// ���Ʈ�� �����մϴ�.
app.get('/', function (request, response) {
  // ������ �н��ϴ�.
  fs.readFile('9-list.html', 'utf8', function (error, data) {
    // �����ͺ��̽� ������ �����մϴ�.
    client.query('SELECT * FROM products', function (error, results) {
      // �����մϴ�.
      response.send(ejs.render(data, {
        data: results
      }));
    });
  });
});

app.get('/delete/:id', function (request, response) {
  // �����ͺ��̽� ������ �����մϴ�.
  client.query('DELETE FROM products WHERE id=?', [request.params.id], function () {
    // �����մϴ�.
    response.redirect('/');
  });
});

app.get('/insert', function (request, response) {
  // ������ �н��ϴ�.
  fs.readFile('9-insert.html', 'utf8', function (error, data) {
    // �����մϴ�.
    response.send(data);
  });
});

app.post('/insert', function (request, response) {
  // ������ �����մϴ�.
  var body = request.body;
  // �����ͺ��̽� ������ �����մϴ�.
  client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
      body.name, body.modelnumber, body.series
  ], function () {
    // �����մϴ�.
    response.redirect('/');
  });
});

app.get('/edit/:id', function (request, response) {
  // ������ �н��ϴ�.
  fs.readFile('9-edit.html', 'utf8', function (error, data) {
    // �����ͺ��̽� ������ �����մϴ�.
    client.query('SELECT * FROM products WHERE id = ?', [
        request.params.id
    ], function (error, result) {
      // �����մϴ�.
      response.send(ejs.render(data, {
        data: result[0]
      }));
    });
  });
});

app.post('/edit/:id', function (request, response) {
  // ������ �����մϴ�.
  var body = request.body;
  // �����ͺ��̽� ������ �����մϴ�.
  client.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?', [body.name, body.modelnumber, body.series, request.params.id], function () {
    // �����մϴ�.
    response.redirect('/');
  });
});