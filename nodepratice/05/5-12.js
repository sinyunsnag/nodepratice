// exit �̺�Ʈ�� �����մϴ�.
process.on('exit', function (code) {
  console.log('�ȳ��� �輼�� .. !');
});

// ���α׷��� �����մϴ�.
process.exit();

// �̺�Ʈ�� ������ �߻���ŵ�ϴ�.
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// ���α׷� ���� ��
console.log('���α׷� ���� ��');