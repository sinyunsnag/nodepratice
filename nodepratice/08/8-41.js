// ����� �����մϴ�.
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// ���� �����ͺ��̽��� �����մϴ�.
var DummyDB = (function () {
  // ������ �����մϴ�.
  var DummyDB = {};
  var storage = [];
  var count = 1;

  // �޼��带 �����մϴ�.
  DummyDB.get = function (id) {
    if (id) {
      // ������ �����մϴ�.
      id = (typeof id == 'string') ? Number(id) : id;
      // �����͸� �����մϴ�.
      for (var i in storage) if (storage[i].id == id) {
        return storage[i];
      }
    } else {
      return storage;
    }
  };

  DummyDB.insert = function (data) {
    data.id = count++;
    storage.push(data);
    return data;
  };

  DummyDB.remove = function (id) {
    // ������ �����մϴ�.
    id = (typeof id == 'string') ? Number(id) : id;
    // �����մϴ�.
    for (var i in storage) if (storage[i].id == id) {
      // �����͸� �����մϴ�.
      storage.splice(i, 1);
      // �����մϴ�: ������ ���� ����
      return true;
    }
    // �����մϴ�: ������ ���� ����
    return false;
  };

  // �����մϴ�.
  return DummyDB;
})();

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(bodyParser.urlencoded({
  extended: false
}));

// ����͸� �����մϴ�.
app.get('/user', function (request, response) {
  response.send(DummyDB.get());
});

app.get('/user/:id', function (request, response) {
  response.send(DummyDB.get(request.params.id));
});

app.post('/user', function (request, response) {
  // ������ �����մϴ�.
  var name = request.body.name;
  var region = request.body.region;

  // ��ȿ���� �˻��մϴ�.
  if (name && region) {
    response.send(DummyDB.insert({
      name: name,
      region: region
    }));
  } else {
    throw new Error('error');
  }
});

app.put('/user/:id', function (request, response) {
  // ������ �����մϴ�.
  var id = request.params.id;
  var name = request.body.name;
  var region = request.body.region;

  // �����ͺ��̽��� �����մϴ�.
  var item = DummyDB.get(id);
  item.name = name || item.name;
  item.region = region || item.region;

  // �����մϴ�. 
  response.send(item);
});

app.delete('/user/:id', function (request, response) { });

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});