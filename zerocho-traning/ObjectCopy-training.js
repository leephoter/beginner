var obj1 = { a: 1, b: { c: 2}}
var obj2 = JSON.parse(JSON.stringify(obj1)) 
//JSON.parse(JSON.stringify(원시배열)) -->> 객체 복사 코드  (얕은복사x, 깊은복사o) 근데 이것도 완전한 복사는 아님
//prototype은 복사가 되지 않는다 (완전 복사가 아니기 때문)

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

var abc = Object.create(obj1)
//이걸 사용하자
// 같은 의미
var ddd = {};
data.__proto__ = prototype;
//이건 사용하지 말자



//생성자 사용시
var proto1 = {
    type: '공통되는 data'
}
function some1(name, att, hp) {
    this.name = name;
    this.att = att;
    this.hp = hp;
}
some1.prototype = proto1;
// var A = new some('이름', 숫자1, 숫자2) -->> proto1는 일치, 3개의 인자는 다르게 생성된다 (new 생성자, 객체지향)

//생성자 사용x
var proto2 = {
    type: '공통되는 data'
}
function some2(name, att, hp) {
    var thing1 = Object.create(proto2);
    thing1.name = name;
    thing1.att = att;
    thing1.hp = hp;
    return thing1;
}
// var B = thing1('이름', 숫자1, 숫자2) -->> proto2는 일치, 3개의 인자는 다르게 생성