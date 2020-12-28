var rival = { // 적의 스펙 객체로 생성
    hero: document.getElementById('rival-hero'),
    deck: document.getElementById('rival-deck'),
    field: document.getElementById('rival-cards'),
    cost: document.getElementById('rival-cost'),
    deckdata: [],
    herodata: [],
    fielddata: [],
    selectcard: null,
    selectcarddata: null,
}
var my = { // 내 스펙 객체로 생성
    hero: document.getElementById('my-hero'),
    deck: document.getElementById('my-deck'),
    field: document.getElementById('my-cards'),
    cost: document.getElementById('my-cost'),
    deckdata: [],
    herodata: [],
    fielddata: [],
    selectcard: null,
    selectcarddata: null, 
}
var turnbutton = document.getElementById('turn-btn');
var turn = true;

function decktofield(data, myturn) {
    var obj = myturn ? my : rival; //삼항연산자 ->> myturn이 참이면 obj=my, 거짓이면 obj=rival
    var nowcost = Number(obj.cost.textContent);
    if (nowcost < data.cost) {
        return 'end';
    }
    var idx = obj.deckdata.indexOf(data);
    obj.deckdata.splice(idx, 1);
    obj.fielddata.push(data);
    fieldmake(obj);
    deckmake(obj);
    data.field = true;
    obj.cost.textContent = nowcost - data.cost;
}
function fieldmake(obj) {
    obj.field.innerHTML = '';
    obj.fielddata.forEach(function(data) {
        cardconnect(data, obj.field); 
    });
}
function deckmake(obj) {
    obj.deck.innerHTML = '';
    obj.deckdata.forEach(function(data) {
        cardconnect(data, obj.deck);
    });
}
function heromake(obj) {
    obj.hero.innerHTML = '';
    cardconnect(obj.herodata, obj.hero, true);
}
function screenmake(screen) {
    var obj = screen ? my : rival;
    fieldmake(obj);
    deckmake(obj);
    // cardconnect(obj.herodata, obj.hero, true);
    heromake(obj);
}
function turnaction(card, data, myturn) {
    var myteam = myturn ? my : rival;
    var rivalteam = myturn ? rival : my;
    if (card.classList.contains('card-turnover')) {
        return;
    }
    var rivalcard = myturn ? !data.mine : data.mine;
    if (rivalcard && myteam.selectcard) { 
        // 상대카드고, 내카드가 선택 되어있고, 턴이 끝난 카드가 아니면 
        data.hp = data.hp - myteam.selectcarddata.att;
        if (data.hp <= 0)  { //카드가 죽었을 때
            var index = rivalteam.fielddata.indexOf(data);
            if (index > -1) { //쫄병이 죽엇을때
                rivalteam.fielddata.splice(index, 1);
            } else { // 영웅이 죽엇을때
                myturn ? alert('U win !') : alert("U're rival win !")
                setting();
            }
        }
        screenmake(!myturn);
        myteam.selectcard.classList.remove('card-selected');
        myteam.selectcard.classList.add('card-turnover');
        myteam.selectcard = null;
        myteam.selectcarddata = null;
        return;
    } else if (rivalcard) {
        return;
    }
    if (data.field) {
        card.parentNode.querySelectorAll('.card').forEach(function(kard) {
            kard.classList.remove('card-selected');
        });
        card.classList.toggle('card-selected');
        myteam.selectcard = card;
        myteam.selectcarddata = data;
    } else {
        if(decktofield(data, myturn) !== 'end') {
            myturn ? mydeckmake(1) : rivaldeckmake(1);
        }
    }
}
function cardconnect(data, dom, hero) {
    var card = document.querySelector('.card-hidden .card').cloneNode(true); //cloneNode(ture) -> 복제 
    card.querySelector('.card-cost').textContent = data.cost;
    card.querySelector('.card-att').textContent = data.att;
    card.querySelector('.card-hp').textContent = data.hp;
    if (hero) {
        card.querySelector('.card-cost').style.display = 'none';
        var name = document.createElement('div');
        name.textContent = 'Hero';
        card.appendChild(name);
    }
    card.addEventListener('click', function() {
            turnaction(card, data, turn);
    });
    dom.appendChild(card);
}

function rivaldeckmake(num1) {
    for (var i = 0; i < num1; i++) {
        rival.deckdata.push(factory());
    }
    rival.deck.innerHTML = '';
    rival.deckdata.forEach(function(data) {
        cardconnect(data, rival.deck)
    });
}
function mydeckmake(num1) {
    for (var i = 0; i < num1; i++) {
        my.deckdata.push(factory(false, true));
    }
    my.deck.innerHTML = '';
    my.deckdata.forEach(function(data) {
        cardconnect(data, my.deck);
    });
}
function myheromake() {
    my.herodata = factory(true, true);
    cardconnect(my.herodata, my.hero, true);
}
function rivalheromake() {
    rival.herodata = factory(true);
    cardconnect(rival.herodata, rival.hero, true);
}
function Card(hero, mycard) { //랜덤으로 변할 값들
    if (hero) {
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    } else {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
    }
    if (mycard) {
        this.mine = true;
    }
}
function factory(hero, mycard) {
    return new Card(hero, mycard);
}
function setting() { 
    rivaldeckmake(5);
    mydeckmake(5);
    myheromake();
    rivalheromake();
    screenmake(true);
    screenmake(false);
}
turnbutton.addEventListener('click', function() {
    var obj = turn ? my : rival;
    document.getElementById('rival').classList.toggle('turn');
    document.getElementById('my').classList.toggle('turn');
    heromake(obj);
    fieldmake(obj);
    turn = !turn; //턴 넘기는 코드
    if (turn) {
        my.cost.textContent = 10;
    } else {
        rival.cost.textContent = 10;
    }
});
setting();
