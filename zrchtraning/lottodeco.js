//javaScript로 CSS조작
var subes = Array(45).fill().map(function(each, index) {
    return index + 1
})
console.log(subes)

var shuffle = []

while (subes.length > 0) {
    var moval = subes.splice(Math.floor(Math.random() * subes.length), 1)[0] // moval = moving value
    shuffle.push(moval)
}
console.log(shuffle)

var bonus = shuffle[shuffle.length - 1]
var numlots = shuffle.slice(0, 6).sort(function (p, c) {
    return p - c;
})
console.log('numlots', numlots.sort(function (p,c) {return p - c}), 'bonus', bonus)

var resultwindow = document.getElementById('resultwindow')

function gongcolor(number) {
    var gong = document.createElement('div')
    gong.textContent = numlots[number]
    gong.style.display = 'inline-block'
    gong.style.border = '1px solid black'
    gong.style.borderRadius = '10px'
    gong.style.width = '20px'
    gong.style.height = '20px'
    gong.style.textAlign = 'center'
    gong.style.marginRight = "5px"
    var backcolor
    if  (numlots[number] < 10) {
        backcolor = 'white'
    } else if (numlots[number] < 20) {
        backcolor = 'red'
    } else if (numlots[number] < 30) {
        backcolor = 'orange'
    } else if (numlots[number] < 40) {
        backcolor = 'yellow'
    } else {
        backcolor = 'blue'
    }
    gong.style.background = backcolor
    resultwindow.appendChild(gong)
}
setTimeout(function callbackf() {
    gongcolor(0)
}, 500)    
setTimeout(function callbackf() {
    gongcolor(1)
}, 1000)
setTimeout(function callbackf() {
    gongcolor(2)
}, 1500)
setTimeout(function callbackf() {
    gongcolor(3)
}, 2000)
setTimeout(function callbackf() {
    gongcolor(4)
}, 2500)
setTimeout(function callbackf() {
    gongcolor(5)
}, 3000)

setTimeout(function callbackf() {
    var bonuspace = document.getElementsByClassName('bonus')[0]
    var bonusgong = document.createElement('div')
    bonusgong.style.display = 'inline-block'
    bonusgong.style.border = '1px solid black'
    bonusgong.style.borderRadius = '10px'
    bonusgong.style.width = '20px'
    bonusgong.style.height = '20px'
    bonusgong.style.textAlign = 'center'
    bonusgong.textContent = bonus
    bonuspace.appendChild(bonusgong)
}, 4000)
