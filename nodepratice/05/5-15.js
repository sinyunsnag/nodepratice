// EventEmitter ��ü�� �����մϴ�.
exports.timer = new process.EventEmitter();

// �̺�Ʈ�� ������ �߻���ŵ�ϴ�.
setInterval(function () {
  exports.timer.emit('tick');
}, 1000);