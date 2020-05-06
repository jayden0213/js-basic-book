function inp() {
var num1 = parseInt(prompt('숫자를 입력하세요.'));
var num2 = parseInt(prompt('숫자를 입력하세요.'));
var result = sumMulti(num1, num2);
console.log(result);
}

function sumMulti(a, b) {
    if(a === b) {
        return  a + b;
    } else {
        return  a * b;
    }
}

function init() {
    inp();
}

init();