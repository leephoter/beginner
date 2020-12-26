var obj1 = { a: 1, b: { c: 2}}
var obj2 = JSON.parse(JSON.stringify(obj1)) 
//JSON.parse(JSON.stringify(원시배열)) -->> 객체 복사 코드  (얕은복사x, 깊은복사o) 근데 이것도 완전한 복사는 아님

Object.keys(obj1).forEach(function(key) {
    var obj3;
    obj3[key] = obj[key];
}); 
//같은 의미
Object.assign(obj3, obj1);
//1단계 복사, 나머지 참조(얕은복사)

var arr1 = [1,2,3];
var arr2 = arr1.slice();
//1단계 복사, 나머지 참조(얕은복사)

//팩토리 패턴, 프로토타입 (Chrome에서만!!! JS에서는 사용하지 말자)
var prototype = {   //변하지 않는 것들
    height: 170,
    sex: man,
};
function score(grade, semester, team) { //변하는 것들
    var data = {
        semester: 1,
        grade: 1,
        team: A,
    }
    data.__proto__ = prototype; //변하지 않는 prototype 객체들을 변하는 객체 data 하위 (proto)에 담는다
    return data;
}
//객체끼리 반복되는 부분을 공유할 수 있음
