// index.js ����
// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();
app.use('/a', require("./8-16").router);
app.use('/b', require("./8-16").router);
app.use('/c', require("./8-16").router);

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});

