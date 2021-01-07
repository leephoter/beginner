var inputID = document.getElementById('inputID'); //html의 ID입력창 요소
var inputComment = document.getElementById('inputComment'); //html의 comment입력창 요소
var newspace; //twitt이 생성될 공간
var newTwitt = []; //생성된 twitt 배열 (모임)

var time;
var randomID = {
  //랜덤 댓글 ID
  1: 'Lee',
  2: 'Min',
  3: 'Ik',
  4: 'Gyeol',
  5: 'jjjoker',
};
var randomComment = {
  //랜덤 댓글 comment
  1: '집밖에 나가지마',
  2: '만나지마 마',
  3: '모이지 마',
  4: '놀지도 마',
  5: '집밥만 먹어',
};
var newBox = document.getElementById('newBox'); // twitt span이 생성될 박스
var newID = []; //입력된 ID 배열
var newComment = []; // 입력된 comment 배열
var twitt = document.querySelector('.commentButton'); //twitt 버튼 요소
var retouchDiv = document.createElement('div'); //수정 버튼 생성
var retouchButton;
////// var retouch;
var removeDiv = document.createElement('div'); //삭제 버튼 생성
var removeButton;
/////// var remove;

function addspaceRe() {
  //div 생성
  newspace = document.createElement('div');
  newspace.style.display = 'inline-block';
  newspace.style.margin = '3px 3px';
  newspace.style.backgroundColor = 'yellow';
  newspace.style.textAlign = 'right';
  newspace.style.padding = '10px 10px';
  newspace.style.fontSize = '14px';
  newspace.style.width = '115px';
  newspace.style.height = '60px';

  removeButton = document.createElement('button'); //삭제버튼
  removeButton.style.width = '40px';
  removeButton.style.height = '20px';
  removeButton.style.borderRadius = '20%';
  removeButton.style.borderStyle = 'outset';
  removeButton.style.float = 'left';
  removeButton.innerHTML = '삭제';
  newspace.appendChild(removeButton);
  //////////// remove = document.querySelector('')

  retouchButton = document.createElement('button'); //수정버튼
  retouchButton.style.width = '40px';
  retouchButton.style.height = '20px';
  retouchButton.style.borderRadius = '20%';
  retouchButton.style.borderStyle = 'outset';
  retouchButton.style.float = 'left';
  retouchButton.style.marginRight = '5px';
  retouchButton.innerHTML = '수정';
  retouchDiv.appendChild(retouchButton);
  return newTwitt.unshift(newspace), removeButton, retouchButton; //twitt(ID, comment)들의 배열
}
function addspaceTwitt() {
  //div 생성
  newspace = document.createElement('div');
  newspace.style.display = 'inline-block';
  newspace.style.margin = '3px 3px';
  newspace.style.backgroundColor = 'yellow';
  newspace.style.textAlign = 'left';
  newspace.style.padding = '3px 10px';
  newspace.style.fontSize = '15px';
  newspace.style.width = '85%';
  newspace.style.height = '85%';
  return newTwitt.unshift(newspace); //twitt(ID, comment)들의 배열
}

function timetable() {
  //시간 계산
  return (
    new Date().getFullYear() +
    '-' +
    (new Date().getMonth() + 1) +
    '-' +
    new Date().getDate() +
    ' ' +
    new Date().getHours() +
    '시'
  );
}

twitt.addEventListener('click', function () {
  //twitt을 누르면

  newID.unshift(inputID.value); //ID 값을 배열앞에 저장
  newComment.unshift(inputComment.value); //comment 값을 배열앞에 저장
  inputID.value = ''; //칸 비우기
  inputComment.value = ''; //칸 비우기

  //ID, comment --> newTwitt[1], news1
  addspaceRe();
  var news1;
  news1 = newTwitt[0];
  news1.appendChild(retouchDiv);
  newBox.prepend(news1);

  if (newID[0] === '' && newComment[0] === '') {
    news1.innerHTML = timetable();
    news1.appendChild(retouchButton);
    news1.appendChild(removeButton);
  } else {
    news1.innerHTML = timetable();
  }

  //date, rebutton
  addspaceTwitt();
  var news0;
  news0 = newTwitt[0];
  newBox.prepend(news0);

  if (newID[0] === '' && newComment[0] === '') {
    news0.innerHTML =
      randomID[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]] +
      '<br/><br/>' +
      randomComment[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]];
  } else {
    news0.innerHTML = newID[0] + '<br/><br/>' + newComment[0];
  }
  console.log(newTwitt);
});

// .addEventListener('click', function () {
//   console.log(20);
// });

// removeButton.addEventListener('click', function () {
//   console.log(newTwitt);
// });
