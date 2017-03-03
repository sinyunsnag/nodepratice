// ����� �����մϴ�.
var fs = require('fs');
var http = require('http');
var express = require('express');

// �����ͺ��̽��� �����մϴ�.
var client = require('mysql').createConnection({
  user: 'root',
  password: '��й�ȣ',
  database: 'location'
});

// �� ������ �����մϴ�.
var app = express();
var server = http.createServer(app);

// GET - /tracker
app.get('/tracker', function (request, response) {
  // Tracker.html ������ �����մϴ�.
  fs.readFile('Tracker.html', function (error, data) {
    response.send(data.toString());
  });
});
// GET - /observer
app.get('/observer', function (request, response) {
  // Observer.html ������ �����մϴ�.
  fs.readFile('Observer.html', function (error, data) {
    response.send(data.toString());
  });
});
// GET - /ShowData
app.get('/showdata', function (request, response) {
  // �����ͺ��̽��� �����͸� �����մϴ�.
  client.query('SELECT * FROM locations WHERE name=?', [request.params.name],
      function (error, data) {
        response.send(data);
      });
});

// �� ������ �����մϴ�.
server.listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

// ���� ������ ���� �� �����մϴ�.
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  // join �̺�Ʈ
  socket.on('join', function (data) {
    socket.join(data);
  });
  // location �̺�Ʈ
  socket.on('location', function (data) {
    // �����͸� �����մϴ�.
    client.query('INSERT INTO locations(name, latitude, longitude, date) VALUES (?, ?, ?, NOW())', [data.name, data.latitude, data.longitude]);
    // receive �̺�Ʈ�� �߻���ŵ�ϴ�.            
    io.sockets.in(data.name).emit('receive', {
      latitude: data.latitude,
      longitude: data.longitude,
      date: Date.now()
    });
  });
});