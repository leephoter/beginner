var rivalhero = document.getElementById('rival-hero');
var myhero = document.getElementById('my-hero');
var rivaldeck = document.getElementById('rival-deck');
var mydeck = document.getElementById('my-deck');
var rideckdata = [];
var mydeckdata = [];
var riherodata = [];
var myherodata = [];

function rideckmake(num1) {
    for (var i = 0; i < num1; i++) {
        rideckdata.push(factory());
    }
    rideckdata.forEach(function(data) {
        var card = document.querySelector('.card-hidden .card').cloneNode(true); //cloneNode(ture) -> 복제 
        card.querySelector('.card-cost').textContent = rideckdata.cost;
        card.querySelector('.card-att').textContent = rideckdata.att;
        card.querySelector('.card-hp').textContent = rideckdata.hp;
        rivaldeck.appendChild(card);
    });
}
function mydeckmake(num1) {
    for (var i = 0; i < num1; i++) {
        mydeckdata.push(factory());
    }
    mydeckdata.forEach(function(data) {
        var card = document.querySelector('.card-hidden .card').cloneNode(true);
        card.querySelector('.card-cost').textContent = mydeckdata.cost;
        card.querySelector('.card-att').textContent = mydeckdata.att;
        card.querySelector('.card-hp').textContent = mydeckdata.hp;
        mydeck.appendChild(card);
    });
}
function myheromake() {
    myherodata = factory(true);
    var card = document.querySelector('.card-hidden .card').cloneNode(true);
    card.querySelector('.card-cost').textContent = myherodata.cost;
    card.querySelector('.card-att').textContent = myherodata.att;
    card.querySelector('.card-hp').textContent = myherodata.hp;
    myhero.appendChild(card);
}
function riheromake() {
    riherodata = factory(true);
    var card = document.querySelector('.card-hidden .card').cloneNode(true);
    card.querySelector('.card-cost').textContent = riherodata.cost;
    card.querySelector('.card-att').textContent = riherodata.att;
    card.querySelector('.card-hp').textContent = riherodata.hp;
    rivalhero.appendChild(card);
}
function setting() { 
    rideckmake(5);
    mydeckmake(5);
    myheromake();
    riheromake();
}

function Card(hero) { //랜덤으로 변할 값들
    if (hero) {
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
    } else {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
    }
}
function factory(hero) {
    return new Card(hero);
}
setting();