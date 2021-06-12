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
var removeDiv = document.createElement('div'); //삭제 버튼 생성
// var removeButton;

let comment = document.querySelector('.comment');
let updateBtn = document.querySelector('.updateButton');
let removeButton = document.querySelector('.removeButton');

function addspaceRe() {
  newspace = document.createElement('div'); //(id, comment)div 와 다른 div 생성
  newspace.classList.add('newspace');

  removeButton = document.createElement('button'); //삭제버튼
  // removeButton.classList.add('.removeButton');
  removeButton.classList.add('removeButton');
  removeButton.innerHTML = '삭제';
  newspace.appendChild(removeButton);

  retouchButton = document.createElement('button'); //수정버튼
  retouchButton.classList.add('retouchButton');
  retouchButton.innerHTML = '수정';
  newspace.appendChild(retouchButton);

  return newTwitt.unshift(newspace), removeButton, retouchButton; //생성된 twitt(ID, comment)들의 배열
}
function addspaceTwitt() {
  newspace = document.createElement('div'); //(ID,comment)div 생성
  newspace.classList.add('comment');
  newspace.style.display = 'inline-block';
  newspace.style.margin = '3px 3px';
  newspace.style.backgroundColor = 'rgb(255, 255, 219)';
  newspace.style.textAlign = 'left';
  newspace.style.padding = '3px 10px';
  newspace.style.fontSize = '15px';
  newspace.style.width = '85%';
  newspace.style.height = '85%';

  removeButton = document.createElement('button'); //삭제버튼
  // removeButton.classList.add('.removeButton');
  removeButton.classList.add('removeButton');
  removeButton.innerHTML = '삭제';
  newspace.appendChild(removeButton);
  retouchButton = document.createElement('button'); //수정버튼
  retouchButton.classList.add('retouchButton');
  retouchButton.innerHTML = '수정';
  newspace.appendChild(retouchButton);

  console.log('newspace', newspace);

  newID.unshift(inputID.value); //ID 값을 배열앞에 저장
  newComment.unshift(inputComment.value);

  console.log('newID', newID);
  console.log('newComment', newComment);

  newspace.innerHTML = newID[0] + '<br/><br/>' + newComment[0];

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
  addspaceTwitt();
});

twitt.addEventListener('click', function () {
  //twitt을 누르면
  newID.unshift(inputID.value); //ID 값을 배열앞에 저장
  newComment.unshift(inputComment.value); //comment 값을 배열앞에 저장
  inputID.value = ''; //칸 비우기
  inputComment.value = ''; //칸 비우기

  //ID, comment --> newTwitt[1], news1
  addspaceRe(); // 수정 삭제   div, button 생성
  var news1 = newTwitt[0];
  news1.appendChild(retouchDiv);
  comment.prepend(news1);

  if (newID[0] === '' && newComment[0] === '') {
    newspace.innerHTML = timetable();
    newspace.appendChild(retouchButton);
    newspace.appendChild(removeButton);

    alert('정해진 댓글이 Twitt됩니다');
  } else {
    console.log('test 2');
    news1.innerHTML = timetable();
    news1.appendChild(retouchButton);
    news1.appendChild(removeButton);
  }

  //date, rebutton
  addspaceTwitt();
  console.log('1234');
  var news0 = newTwitt[0];

  newBox.append(news0);

  if (newID[0] === '' && newComment[0] === '') {
    //ID, comment가 빈칸일 경우 랜덤댓글
    news0.innerHTML =
      randomID[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]] +
      '<br/><br/>' +
      randomComment[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]];
  } else {
    //아닌경우는 ID, comment 값(text)를 출력
    addspaceTwitt();
    news0.innerHTML = newID[0] + '<br/><br/>' + newComment[0];
  }
});

// form, input, ul 태그를 가져옴.
const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');
// 로컬스토리지 상수 생성
const TODOS_LS = 'todos';
// 객체를 담을 배열 생성
let toDos = [];

// 삭제 메소드 구현
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

// 로컬스토리지에 toDos 저장 (문자열로 저장해야함.)
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// ul태그에 span, button이 담긴 ul 생성.
function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  delBtn.innerText = ' ❌';
  delBtn.addEventListener('click', deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  // 로컬스토리지에 저장할 toDoObj 객체를 생성
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}
// toDoForm의 이벤트리스너 생성
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}
// 로컬스토리지에서 TODOS LS를 불러옴
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
