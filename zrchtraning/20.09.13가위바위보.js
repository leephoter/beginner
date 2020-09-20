var imageaddress = 0;
var rps = { // Key:value 1:1matcing
    rock: '0',
    scissors: '-290px',
    paper: '-580px',
}
//console.log(Object.entries(rps));
function computerpic(imageaddress) {
    return Object.entries(rps).find(function(v) {
        return v[1] === imageaddress
    })[0];
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
