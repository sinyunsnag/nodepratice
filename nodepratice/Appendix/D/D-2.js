// ����� �����մϴ�. 
var local = function () {
    console.log('Local Module');
};
local.number = 52273;

// exports ��ü�� �Լ��� �ֽ��ϴ�.
exports = module.exports = local;