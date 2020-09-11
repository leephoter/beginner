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
var numlots = shuffle.slice(0, 6)
console.log('numlots', numlots.sort(function (p,c) {return p - c}), 'bonus', bonus)

var resultwindow = document.getElementById('resultwindow')

for (var i = 0; i < numlots.length; i += 1) {
    setTimeout(function callbackf() {
        
    })
    var gong = document.createElement('div')
    gong.textContent = numlots[i]
    resultwindow.appendChild(gong)
} 
var bonuspace = document.getElementsByClassName('bonus')[0]
var bonusgong = document.createElement('div')
bonusgong.textContent = bonus
bonuspace.appendChild(bonusgong)
