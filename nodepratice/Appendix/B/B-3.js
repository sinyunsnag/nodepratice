// ����� �����մϴ�.
var cheerio = require('cheerio');
var request = require('request');

// request ����� ����մϴ�.
var targetUrl = 'http://www.hanbit.co.kr/media/books/new_book_list.html';
request(targetUrl, function (error, response, body) {
  // ������ �����մϴ�.
  var $ = jQuery = cheerio.load(body);
});