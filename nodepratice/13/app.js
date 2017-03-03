// ����� �����մϴ�.
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var express = require('express');

// ������ �Լ��� �����մϴ�.
var counter = 0;
function Product(name, image, price, count) {
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

// ������ �����մϴ�.
var products = [
    new Product('JavaScript', 'chrome.png', 28000, 30),
    new Product('jQuery', 'chrome.png', 28000, 30),
    new Product('Node.js', 'chrome.png', 32000, 30),
    new Product('Socket.io', 'chrome.png', 17000, 30),
    new Product('Connect', 'chrome.png', 18000, 30),
    new Product('Express', 'chrome.png', 31000, 30),
    new Product('EJS', 'chrome.png', 12000, 30)
];

// �� ������ �����մϴ�.
var app = express();
var server = http.createServer(app);

// �� ������ �����մϴ�.
app.use(express.static(__dirname + '/public'));

// ���Ʈ�� �����մϴ�.
app.get('/', function (request, response) {
    // HTMLPage.html ������ �н��ϴ�.
    var htmlPage = fs.readFileSync('HTMLPage.html', 'utf8');

    // �����մϴ�.
    response.send(ejs.render(htmlPage, {
        products: products
    }));
});

// �� ������ �����մϴ�.
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// ���� ������ ���� �� �����մϴ�.
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    // �Լ��� �����մϴ�.
    function onReturn(index) {
        // ���� ������ ������ŵ�ϴ�.
        products[index].count++;

        // Ÿ�̸Ӹ� �����մϴ�.
        clearTimeout(cart[index].timerID);

        // īƮ���� ������ �����մϴ�.
        delete cart[index];

        // count �̺�Ʈ�� �߻���ŵ�ϴ�.
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    };

    // ������ �����մϴ�.
    var cart = {};

    // cart �̺�Ʈ 
    socket.on('cart', function (index) {
        // ���� ������ ���ҽ�ŵ�ϴ�.
        products[index].count--;

        // īƮ�� ������ �ְ� Ÿ�̸Ӹ� �����մϴ�.
        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function () {
            onReturn(index);
        }, 1000 * 60 * 10);

        // count �̺�Ʈ�� �߻���ŵ�ϴ�.
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });
    // buy �̺�Ʈ
    socket.on('buy', function (index) {
        // Ÿ�̸Ӹ� �����մϴ�.
        clearTimeout(cart[index].timerID);

        // īƮ���� ������ �����մϴ�.
        delete cart[index];

        // count �̺�Ʈ�� �߻���ŵ�ϴ�.
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });
    // return �̺�Ʈ
    socket.on('return', function (index) {
        onReturn(index);
    });
});