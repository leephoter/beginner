var frame = document.body; //frame = 바디
var table = document.createElement('table'); //table = 테이블
var lines = [] //linse = 줄들
var spaces = [] //spaces = 칸들
var turn = "X"
var result = document.createElement('div');

var passivecallback = function(event) { //비동기콜백 함수 설정
    var lineth = lines.indexOf(event.target.parentNode) // 몇줄
    console.log('lineth', lineth)
    var spaceth = spaces[lineth].indexOf(event.target)  // 몇칸
    console.log('spaceth', spaceth)

    if (spaces[lineth][spaceth].textContent !== "") { // 칸이 이미 채워져 있는가 
        console.log("It's not blank")
        } else {
        result.textContent = '';
        console.log("It's blank")
        spaces[lineth][spaceth].textContent = turn; // 칸들[몇줄][몇칸]에 turn이라는 text 삽입
        
        var full = false;

        if (spaces[lineth][0].textContent === turn && spaces[lineth][1].textContent === turn
        && spaces[lineth][2].textContent === turn) { //가로줄 검사
            full = true;    
        }
        if (spaces[0][spaceth].textContent === turn && spaces[1][spaceth].textContent === turn
        && spaces[2][spaceth].textContent === turn) { //세로줄 검사
            full = true;
        }
        if (spaces[0][0].textContent === turn && spaces[1][1].textContent === turn
        && spaces[2][2].textContent === turn) {
            full = true;
        }
        if (spaces[0][2].textContent === turn && spaces[1][1].textContent === turn
        && spaces[2][0].textContent === turn) {
            full = true;
        }
        if (full) {     //승자가 나오면 
            result.textContent = turn + ' Win !!'
            turn = 'X';
            spaces.forEach(function (lines) {
                lines.forEach(function (space) {
                    space.textContent = ''; //테이블에 적힌 X와 O 제거
                })
            })
        } else {
            if (turn === 'X') {
                turn = 'O';
            setTimeout(function() {
                console.log('computer turn');
                var sub = [];
                spaces.forEach(function (lines) {
                    lines.forEach(function (space) {
                        sub.push(space);
                    });
                });
                sub = sub.filter(function (space) {     //
                    return !space.textContent // true면 true인 애들만 걸러냄 
                });
                var select = sub[Math.floor(Math.random() * sub.length)]; //[후보1, 후보2, ... 후보n] -> sub[]의 길이
                console.log(Math.random());
                select.textContent = 'O'; //컴퓨터가 고른 칸은 'O'표시
                turn = 'X';
                }, 700)
            }
        }
    }
}
for (var i = 1; i <= 3; i++) {
    var line = document.createElement('tr') //line = 줄
    lines.push(line)
    spaces.push([])
    for (var j = 1; j <= 3; j += 1) { 
        var space = document.createElement('td'); //space = 칸
        space.addEventListener('click', passivecallback);
        spaces[i - 1].push(space);
        line.appendChild(space);
    }
    table.appendChild(line);
}
frame.appendChild(table);
frame.appendChild(result);
console.log('lines', lines, 'spaces', spaces)