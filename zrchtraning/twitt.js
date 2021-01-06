var inputID = document.getElementById('inputID'); //html의 ID입력창 요소
var inputComment = document.getElementById('inputComment'); //html의 comment입력창 요소
var newspace; //twitt이 생성될 공강
var newspaces = []; //생성된 twitt 배열 (모임)
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

console.log(
  randomID[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]],
  randomComment[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]],
);
//랜덤 코멘트 설정 끝났고 1. 대입 2. 최신 트윗 위로오게 순서 까지 완성하자

function addspace() {
  newspace = document.createElement('span');
  newspace.style.display = 'inline-block';
  newspace.style.margin = '3px 3px';
  newspace.style.backgroundColor = 'yellow';
  return newspaces.unshift(newspace);
}
var newBox = document.getElementById('newBox'); // twitt span이 생성될 박스
var newID = []; //
var newComment = [];
document.get;
var twitt = document.querySelector('.commentButton');

twitt.addEventListener('click', function () {
  addspace();
  addspace();
  var news0 = newspaces[0]; //
  var news1 = newspaces[1];
  newBox.prepend(news1);
  newBox.prepend(news0);
  // newBox.appendChild(news0);
  // newBox.appendChild(news1);
  newID.unshift(inputID.value); //ID 값을 저장
  newComment.unshift(inputComment.value); //comment 값 저장
  inputID.value = ''; //칸 비우는 방법을
  inputComment.value = ''; //value 말고 textContent로 하는법을 배웠었는데 이용을 못 하겠습니다ㅠㅠ

  news0.style.textAlign = 'left';
  news0.style.padding = '3px 10px';
  news0.style.fontSize = '15px';
  news0.style.width = '85%';
  news0.style.height = '85%';

  news1.style.textAlign = 'right';
  news1.style.padding = '10px 10px';
  news1.style.fontSize = '14px';
  news1.style.width = '115px';
  news1.style.height = '60px';
  if (newID[0] === '' && newComment[0] === '') {
    newspaces[0].innerHTML =
      randomID[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]] +
      '<br/><br/>' +
      randomComment[[1, 2, 3, 4, 5].sort(() => 0.5 - Math.random())[0]];
    newspaces[1].innerHTML =
      new Date().getFullYear() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate() +
      ' ' +
      new Date().getHours() +
      '시';
  } else {
    newspaces[0].innerHTML = newID[0] + '<br/><br/>' + newComment[0];
    newspaces[1].innerHTML =
      new Date().getFullYear() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate() +
      ' ' +
      new Date().getHours() +
      '시';
  }
});

//삭제 기능, 필터
