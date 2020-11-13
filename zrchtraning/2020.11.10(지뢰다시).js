document.querySelector('#exec').addEventListener('click', function() {
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    // console.log(hor, ver, mine);
    //지뢰 위치 뽑기
    var subs = Array(hor * ver).fill().map(function (urea, index) {
        return index;
    });
    var shuffle = []; // 빈 배열
    while (subs.length > 80) {
        var movalue = subs.splice(Math.floor(Math.random() * subs.length), 1)[0];
        shuffle.push(movalue);
    }

    console.log(shuffle);
    //지뢰 테이블 만들기
    var dataset = [];
    var tbody = document.querySelector('#table tbody');
    for (var i = 0; i < ver; i+=1){
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j+=1) {
            arr.push(1);
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    //지뢰 심기
    for (var k = 0; k < shuffle.length; k++) {
        var height = Math.floor(shuffle[k] / 10);
        var width = shuffle[k] % 10;
        console.log(height, width);
        tbody.children[height].children[width].textContent = 'X';
        dataset[height][width] = 'X';
    }
    console.log(dataset);
});