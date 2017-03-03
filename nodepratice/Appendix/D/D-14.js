// ����� �����մϴ�.
var cluster = require('cluster');
var os = require('os');

// CPU COUNT�� ����մϴ�.
var cpuCount = os.cpus().length;
console.log('CPU Count:', cpuCount);

if (cluster.isMaster) {
  // ������ ���μ����� ��
  for (var i = 0; i < cpuCount; i++) {
    console.log('cluster.fork()');
    cluster.fork();
  }

} else {
  // ��Ŀ ���μ����� ��
  console.log('console.log()');
}