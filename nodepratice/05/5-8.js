// ������ �����մϴ�.
var onUncaughtException = function (error) {
  // ����մϴ�.
  console.log('���ܰ� �߻��߱� ^_^ �̹����� ���ְڴ� ^_^ .. !');
  // �̺�Ʈ�� �����մϴ�.
  process.removeListener('uncaughtException', onUncaughtException);
};

// process ��ü�� uncaughtException �̺�Ʈ�� �����մϴ�.
process.on('uncaughtException', onUncaughtException);

// 2�� �������� ���ܸ� �߻���ŵ�ϴ�.
var test = function () {
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);