// exit �̺�Ʈ�� �����մϴ�.
process.on('exit', function (code) {
  console.log('�ȳ��� �輼�� .. !');
});

// �̺�Ʈ�� ������ �߻���ŵ�ϴ�.
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// ���α׷� ���� ��
console.log('���α׷� ���� ��');