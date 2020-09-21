var imageaddress = 0;
var rps = { // Key:value 1:1matcing
    rock: '0',
    scissors: '-290px',
    paper: '-580px',
}
//console.log(Object.entries(rps));
function computerpic(imageaddress) {
    return Object.entries(rps).find(function(v) { //find는 배열에서만 가능한 함수이기 때문에 Object.entries(객체) -> 객체를 배열의 형태로 만드르어줌
        console.log(v)
        return v[1] === imageaddress // 다시
    })[0]; // 다시 
}
//비동기
setInterval(function () {
    if (imageaddress === rps.rock) {
        imageaddress = rps.scissors;
    }
    else if (imageaddress === rps.scissors) {
        imageaddress = rps.paper;
    }
    else {
        imageaddress = rps.rock;
    }
    document.querySelector('#computer').style.background = ' url(200915.png) ' + imageaddress + ' 0';
}, 300);
var elements = document.querySelectorAll('.btn');

for (var i = 0, element; (element = elements[i]); i++) {
    console.log(element);
}
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function () { 
        var mypic = this.textContent
        console.log(mypic, computerpic(imageaddress));
        if (mypic === 'scissors') {
            if (computerpic(imageaddress) === 'scissors') {
                console.log("Draw !!")
            } else if (computerpic(imageaddress) === 'rock'){
                console.log("U Lost !!")
            } else {
                console.log("U Win !!")
            }
        } else if (mypic === 'rock') {
            if (computerpic(imageaddress) === 'rock') {
                console.log("Draw !!")
            } else if (computerpic(imageaddress) === 'paper'){
                console.log("U Lost !!")
            } else {
                console.log("U Win !!")
            }
        } else {
            if (computerpic(imageaddress) === 'paper') {
                console.log("Draw !!")
            } else if (computerpic(imageaddress) === 'scissors'){
                console.log("U Lost !!")
            } else {
                console.log("U Win !!")
            }
        }
    })
})
