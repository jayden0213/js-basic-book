var now = new Date();
var first = new Date("2018-04-17");

var nowTime = now.getTime();
var firstTime = first.getTime();
var calRule = 1000 * 60 * 60 * 24;

var passedTime = nowTime - firstTime;
var passedDay = Math.round(passedTime / calRule);

document.querySelector('#accent').innerText = passedDay + '일';

// 준서 태어난 날짜 계산

function calcDate(days) {
    var hundredTime = firstTime + (days * calRule);
    var hundredDay = new Date(hundredTime);
    
    var year = hundredDay.getFullYear();
    var month = hundredDay.getMonth() + 1;
    var date = hundredDay.getDate();

    document.querySelector('#date' + days).innerText = year + '년 ' + month + '월 ' + date + '일';
    }

function init() {
    var daysList = [100, 200, 365, 500];
    for (i=0; i < daysList.length; i++) {
        calcDate(daysList[i]);
    }
}    

init();


