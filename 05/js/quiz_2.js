function inp() {
    var num1 = parseInt(prompt('비교할 첫번째 숫자'));
    var num2 = parseInt(prompt('비교할 두번째 숫자'));
    sumMulti(num1, num2);
    }
    
    function sumMulti(a, b) {
        if (a > b) {
            alert(a + ' 가 ' + b + '보다 큽니다.');
        } else {
            if (a < b) {
                alert(b + ' 가 ' + a + '보다 큽니다.');
            } else {
                alert(a + ' 와 ' + b + '는 같습니다.');
                }
            }
        }
    
    function init() {
        inp();
    }
    
    init();