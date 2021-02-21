var width = 4;
var height = 3;
var colors = [
  'red',
  'red',
  'orange',
  'orange',
  'green',
  'green',
  'yellow',
  'yellow',
  'white',
  'white',
  'pink',
  'pink',
];
var colorsub = colors.slice();
var color = [];
var clickflag = true;
var clickcard = [];
var finishcard = [];
var starttime;
function shuffle() {
  for (var i = 0; colorsub.length > 0; i++) {
    color = color.concat(
      colorsub.splice(Math.floor(Math.random() * colors.length), 1),
    );
  } //colors 배열을 랜덤으로 한개 씩 뽑아서 color배열에 순서대로 담음
}
console.log(color);

function cardsetting(width, height) {
  clickflag = false;
  for (var i = 0; i < width * height; i++) {
    // var Area = document.createElement('div');
    // Area.className = 'area';
    var card = document.createElement('div');
    card.className = 'card';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    var cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.backgroundColor = color[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    // Area.appendChild(card);
    (function (c) {
      card.addEventListener('click', function () {
        if (clickflag && !finishcard.includes(c)) {
          c.classList.toggle('flipped'); //'flipped'가 없으면 추가, 있으면 제거 fliiped() {card-inner()} 로 되어있음 html에서  (.card.flipped .card-inner)
          clickcard.push(c);
          if (clickcard.length === 2) {
            if (
              clickcard[0].querySelector('.card-back').style.backgroundColor ===
              clickcard[1].querySelector('.card-back').style.backgroundColor
            ) {
              finishcard.push(clickcard[0]);
              finishcard.push(clickcard[1]);
              clickcard = [];
              if (finishcard.length === 12) {
                var endtime = new Date();
                alert("'It's good");
                console.log((endtime - starttime) / 1000, 'sec');
                document.querySelector('#wrapper').innerHTML = '';
                colorsub = colors.slice();
                color = [];
                finishcard = [];
                starttime = null;
                shuffle();
                cardsetting(width, height);
              }
            } else {
              clickflag = false;
              setTimeout(function () {
                clickcard[0].classList.remove('flipped');
                clickcard[1].classList.remove('flipped');
                clickflag = true;
                clickcard = [];
              }, 700);
            }
          }
        }
      });
    })(card);
    document.querySelector('#wrapper').appendChild(card);
  }

  document.querySelectorAll('.card').forEach(function (card, index) {
    clickflag = false;
    setTimeout(function () {
      card.classList.add('flipped');
    }, 1000 + 100 * index); //순차적으로 미리 한 번 색을 보여주는
  });

  setTimeout(function () {
    document.querySelectorAll('.card').forEach(function (card, index) {
      card.classList.remove('flipped'); // 뒷면으로 한번에 뒤집
      starttime = new Date();
    });
    clickflag = true;
  }, 4000);
}
shuffle();
cardsetting(width, height);
