// process ��ü�� uncaughtException �̺�Ʈ�� �����մϴ�.
process.once('uncaughtException', function (error) {
  console.log('���ܰ� �߻��߱� ^_^ �̹����� ���ְڴ� ^_^ .. !');
});

// 2�� �������� ���ܸ� �߻���ŵ�ϴ�.
var test = function () {
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);