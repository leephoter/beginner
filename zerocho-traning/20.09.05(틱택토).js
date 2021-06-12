var frame = document.body; //frame = 바디
var table = document.createElement('table'); //table = 테이블
var lines = []; //linse = 줄들
var spaces = []; //spaces = 칸들
var turn = 'X';
var result = document.createElement('div');

function checkresult(lineth, spaceth) {
  //빙고가 됐는지 체크하는 함수
  var whowin = false;
  if (
    spaces[lineth][0].textContent === turn &&
    spaces[lineth][1].textContent === turn &&
    spaces[lineth][2].textContent === turn
  ) {
    //가로줄 검사
    whowin = true;
  }
  if (
    spaces[0][spaceth].textContent === turn &&
    spaces[1][spaceth].textContent === turn &&
    spaces[2][spaceth].textContent === turn
  ) {
    //세로줄 검사
    whowin = true;
  }
  if (
    spaces[0][0].textContent === turn &&
    spaces[1][1].textContent === turn &&
    spaces[2][2].textContent === turn
  ) {
    // 대각선 검사
    whowin = true;
  }
  if (
    spaces[0][2].textContent === turn &&
    spaces[1][1].textContent === turn &&
    spaces[2][0].textContent === turn
  ) {
    // 대각선 검사
    whowin = true;
  }
  return whowin;
}
function reset(nowin) {
  //승자가 나오면 종료, 리셋, 결과를 알려주는 함수
  if (nowin) {
    result.textContent = 'Rematch!';
  } else {
    result.textContent = turn + ' Win !!'; //승자를 알려주고
  }
  setTimeout(function () {
    result.textContent = ''; //화면을 빈칸으로 채움
    spaces.forEach(function (lines) {
      lines.forEach(function (space) {
        space.textContent = ''; //각 lines, space 에 적힌 X와 O 제거 (''를 채움)
      });
    });
    turn = 'X'; //새로운 게임을 위해 차례를 'X' 차례로 되돌려주고
  }, 1500); //1초 뒤에
}
var passivecallback = function (event) {
  //비동기콜백 함수 설정
  if (turn === 'O') {
    return; // 컴퓨터 차례일땐 내가 눌러도 return되어 실행 ㄴㄴ
  }
  var lineth = lines.indexOf(event.target.parentNode); // 몇줄
  var spaceth = spaces[lineth].indexOf(event.target); // 몇칸
  console.log('lineth :', lineth, ', spaceth :', spaceth);

  if (spaces[lineth][spaceth].textContent !== '') {
    // 칸이 이미 채워져 있는가
    console.log("It's not blank");
  } else {
    result.textContent = '';
    console.log("It's blank");
    spaces[lineth][spaceth].textContent = turn; // 칸들[몇줄][몇칸]에 turn이라는 text 삽입
    var whowin = checkresult(lineth, spaceth);
    var sub = []; //컴퓨터가 고를 칸들의 배열을 생성
    spaces.forEach(function (line) {
      line.forEach(function (space) {
        sub.push(space);
      });
    });
    sub = sub.filter(function (space) {
      return !space.textContent; // true면 true인 애들만 걸러냄
    });
    if (whowin) {
      //승자가 나오면
      reset(false);
    } else if (sub.length === 0) {
      reset(true);
    } else {
      if (turn === 'X') {
        turn = 'O';
      }
      setTimeout(function () {
        var select = sub[Math.floor(Math.random() * sub.length)]; //[후보1, 후보2, ... 후보n] -> sub[]의 길이
        select.textContent = turn; //컴퓨터가 고른 칸은 데이터 'O'를 갖는다
        var lineth = lines.indexOf(select.parentNode); // 몇줄
        var spaceth = spaces[lineth].indexOf(select);
        var whowin = checkresult(lineth, spaceth);
        if (whowin) {
          reset();
        }
        turn = 'X';
      }, 700);
    }
  }
};
for (var i = 1; i <= 3; i++) {
  var line = document.createElement('tr'); //line = 줄
  lines.push(line);
  spaces.push([]);
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
console.log('lines', lines, 'spaces', spaces);
