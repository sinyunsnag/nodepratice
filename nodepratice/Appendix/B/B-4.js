// request ����� ����մϴ�.
var targetUrl = 'http://www.hanbit.co.kr/media/books/new_book_list.html';
request(targetUrl, function (error, response, body) {
  // ������ �����մϴ�.
  var $ = jQuery = cheerio.load(body);
  // �����͸� �����մϴ�.
  $('.sub_book_list').each(function (item) {
    // ������ �����մϴ�.
    var title = $(this).find('.book_tit').text().trim();
    var writer = $(this).find('.book_writer').text().trim();

    // ���� ������ �����մϴ�.
    writer = writer.split(",").map(function (item) {
      return item.trim();
    });

    // ����մϴ�.
    console.log(title)
    console.log(writer);
    console.log();
  });
});