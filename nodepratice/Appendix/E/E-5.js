// 모듈을 추출합니다.
var rint = require('./build/Release/bindings');

// 모듈을 사용합니다.
console.log(rint);
console.log(rint.method(10000));