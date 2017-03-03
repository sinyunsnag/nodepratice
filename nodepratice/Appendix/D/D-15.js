// ����� �����մϴ�.
var cluster = require('cluster');
var http = require('http');
var os = require('os');
var fs = require('fs');

// CPU COUNT�� ����մϴ�.
var cpuCount = os.cpus().length;
console.log('CPU Count:', cpuCount);

if(cluster.isMaster) {
    // ������ ���μ����� ��
    for (var i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
    cluster.on('death', function (worker) {
        console.log('worker' + worker.pid + ' died');
    });
} else {
    // ��Ŀ ���μ����� ��
    http.createServer(function (request, response) {
        try {
            var data = fs.readFileSync('HTMLPage.html', 'utf8');
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        } catch (exception) {
            console.log(exception);
        }
    }).listen(52273, function () {
        console.log('Server running at http://127.0.0.1:52273');
    });
}