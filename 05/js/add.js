function calculNum() {   //입력과 출력을 담당하는 함수
   var a = parseInt(prompt());
   var b = parseInt(prompt());

   var sum = addNumber(a, b);
   document.write('두 수의 합은 ' + sum);
    }

    
   function addNumber(a, b) {
       var result = a + b;
       return result;

   }

