// EventEmitter ��ü�� �����մϴ�.
var custom = new process.EventEmitter();

// �̺�Ʈ�� �����մϴ�.
custom.on('tick', function (code) {
  console.log('�̺�Ʈ�� �����մϴ�. ^_^');
});

// �̺�Ʈ�� ������ �߻���ŵ�ϴ�.
custom.emit('tick');