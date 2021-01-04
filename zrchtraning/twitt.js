var inputID = document.getElementById('inputID');
var inputComment = document.getElementById('inputComment');
var newspace;
var newspaces = [];
function addspace() {
  newspace = document.createElement('span');
  newspace.style.display = 'inline-block';
  //   newspace.style.border = '1px solid black';
  //   newspace.style.width = '49%';
  //   newspace.style.height = '60px';
  //   newspace.style.textAlign = 'left';
  newspace.style.margin = '3px 3px';
  newspace.style.backgroundColor = 'yellow';
  return newspaces.unshift(newspace);
}
var newBox = document.getElementById('newBox');
var newID = [];
var newComment = [];
document.get;
var twitt = document.querySelector('.commentButton');

twitt.addEventListener('click', function () {
  addspace();
  addspace();
  var news0 = newspaces[0];
  var news1 = newspaces[1];
  newBox.appendChild(news0);
  newBox.appendChild(news1);
  newID.unshift(inputID.value);
  newComment.unshift(inputComment.value);
  // inputID.value = ''; //칸 비우는 방법을
  // inputComment.value = ''; //value 말고 textContent로 하는법을 배웠었는데 이용을 못 하겠습니다ㅠㅠ

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
});
