var width = 4;
var height = 3;

function cardsetting(width, height) {
    for (var i = 0; i < width * height; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    var cardBack = document.createElement('div');
    cardBack.className = 'card-back';;
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    // card.addEventListener('click', function() {
    //     card.classList.toggle('flipped');
    //     console.log('1')
    // });
    
    (function (c) {
        card.addEventListener('click', function() {
            c.classList.toggle('flipped');
    });
    })(card);
    document.body.appendChild(card);
    }
}
cardsetting(width, height);