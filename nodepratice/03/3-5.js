// process.argv
process.argv.forEach(function (item, index) {
  // ����մϴ�.
  console.log(index + ' : ' + typeof (item) + ' : ', item);
  // ���� �Ű������� --exit�� ���� ��
  if (item == '--exit') {
    // ���� ���� �Ű������� ����ϴ�.
    var exitTime = Number(process.argv[index + 1]);
    // ���� �ð� �� ���α׷��� �����մϴ�.
    setTimeout(function () {
      process.exit();
    }, exitTime);
  }
});