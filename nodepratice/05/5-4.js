// process ��ü�� exit �̺�Ʈ�� �����մϴ�.
process.on('exit', function (code) {
  console.log('�ȳ��� ���Ŷ� ^_^ .. !');
});

// process ��ü�� uncaughtException �̺�Ʈ�� �����մϴ�.
process.on('uncaughtException', function (error) {
  console.log('���ܰ� �߻��߱� ^_^ ���ְڴ� ^_^ .. !');
});

// 2�� �������� 3�� ���ܸ� �߻���ŵ�ϴ�.
var count = 0;
var test = function () {
  // Ż�� �ڵ�
  count = count + 1;
  if (count > 3) { return; }
  // ���ܸ� ������ �߻���ŵ�ϴ�.
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);