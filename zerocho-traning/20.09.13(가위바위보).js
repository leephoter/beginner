var imageaddress = 0;
var rps = {
  // Key:value 1:1matcing
  rock: '0',
  scissors: '-290px',
  paper: '-580px',
};
//console.log(Object.entries(rps));
function computerpic(imageaddress) {
  return Object.entries(rps).find(function (v) {
    //find는 배열에서만 가능한 함수이기 때문에 Object.entries(객체) -> 객체를 배열의 형태로 만드르어줌
    return v[1] === imageaddress; // 다시
  })[0]; // 다시
}
//비 동기
var intervall;
function intervalmaker() {
  intervall = setInterval(function () {
    if (imageaddress === rps.rock) {
      imageaddress = rps.scissors;
    } else if (imageaddress === rps.scissors) {
      imageaddress = rps.paper;
    } else {
      imageaddress = rps.rock;
    }
    document.querySelector('#computer').style.background =
      ' url(200915.png) ' + imageaddress + ' 0';
  }, 120);
}
intervalmaker();
// var elements = document.querySelectorAll('.btn');

// for (var i = 0, element; (element = elements[i]); i++) {
//     console.log(element);
// }
// 점수표
var scoreline = {
  scissors: 1,
  rock: 0,
  paper: -1,
};
document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    clearInterval(intervall);
    setTimeout(function () {
      intervalmaker();
    }, 2000);
    var mypic = this.textContent;
    var myscore = scoreline[mypic];
    var computerscore = scroeline[computerpic(imageaddress)];
    var scoregap = myscore - computerscore;
    if (scoregap === 0) {
      console.log('Draw !!');
    } else if ([-1, 0].includes(scoregap)) {
      console.log('U Win !!');
    } else {
      console.log('U Lost !!');
    }
  });
});
