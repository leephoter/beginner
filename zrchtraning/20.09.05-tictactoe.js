var frame = document.body; //frame = 바디
var tabble = document.createElement('table'); //tabble = 테이블
var lines = [] //linse = 줄들
var spaces = [] //spaces = 칸들
var turn = "X"

var passivecallback = function(ebent) { //passivecallback = 비동기콜백
    console.log(ebent.target) //ebent = 이벤트
    console.log(ebent.target.parentNode)
    console.log(ebent.target.parentNode.parentNode)

    var lineth = lines.indexOf(ebent.target.parentNode)
    console.log('lineth', lineth)
    var spaceth = spaces[lineth].indexOf(ebent.target)
    console.log('spaceth', spaceth)

    if (spaces[lineth][spaceth].textContent !== "") { // 칸이 이미 채워져 있는가 
        console.log("It's no blank")
        } else {
        console.log("It's blank")
        spaces[lineth][spaceth].textContent = turn; // 칸들[몇줄][몇칸]에 turn이라는 text 삽입
        if (turn === "X") {
            turn = "O" 
        } else {
            turn = "X"
        }
    }
}


for (var i = 1; i <= 3; i++) {
    var line = document.createElement('tr') //line = 줄
    lines.push(line)
    spaces.push([])
    for (var j = 1; j <= 3; j += 1) { 
        var space = document.createElement('td') //space = 칸
        space.addEventListener('click', passivecallback)
        spaces[i - 1].push(space)
        line.appendChild(space)
    }
    tabble.appendChild(line)
}
frame.appendChild(tabble)
console.log('lines', lines, 'spaces', spaces)
