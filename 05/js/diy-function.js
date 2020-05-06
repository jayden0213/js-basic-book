function add(a, b) {
    return sum = a + b;
}

function cal(num1, num2) {
    var num1 = parseInt(prompt('숫자를 입력하세요.'));
    var num2 = parseInt(prompt('숫자를 입력하세요.'));
    var result = add(num1, num2);
    document.write(result);
}

function init() { 
    cal();
};

init();

