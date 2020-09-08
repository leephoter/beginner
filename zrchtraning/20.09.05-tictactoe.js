var 바디 = document.body
var 테이블 = document.createElement('table')
for (var i = 1; i <= 3; i++) {
    var 줄 = document.createElement('tr')
    for (var j = 1; f <= 3; j += 1) {
        var 칸 = document.createElement('td')
        줄.appendChild(칸)
    }
    테이블.appendChild(줄)
}
바디.appendChild(테이블)