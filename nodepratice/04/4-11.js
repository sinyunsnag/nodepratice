// ����� �����մϴ�.
var crypto = require('crypto');

// �ؽø� �����մϴ�.
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// ����մϴ�.
console.log('crypto_hash:', output);