// routerA.js ����
// ���� ���� ����
var express = require('express');
var router = express.Router();

// ������ ���Ʈ
router.get('/index', function (request, response) {
  response.send('<h1>Index Page</h1>');
});

// �ܺη� ���ϴ�.
exports.router = router