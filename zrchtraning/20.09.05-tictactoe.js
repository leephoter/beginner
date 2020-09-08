var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = []
var 칸들 = []

var 비동기콜백 = function(이벤트) {
    console.log(이벤트.target)
}

for (var i = 1; i <= 3; i++) {
    var 줄 = document.createElement('tr')
    줄들.push(줄)
    칸들.push([])
    for (var j = 1; f <= 3; j += 1) {
        var 칸 = document.createElement('td')
        칸.addEventListener('click', 비동기콜백)
        칸들[i - 1].push(칸)
        줄.appendChild(칸)
    }
    테이블.appendChild(줄)
}
바디.appendChild(테이블)
console.log(줄들, 칸들)