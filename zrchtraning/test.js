function jgfunc(num) {
    console.log(num);
    if (num < 5) {
        jgfunc(num + 1);
    }
}
jgfunc(1); //-> 1, 2, 3, 4, 5
//반복문을 함수로 표현