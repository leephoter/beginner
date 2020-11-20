var tbody = document.querySelector('#table tbody');
var dataset = [];
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
    
    for (var i = 0; i < ver; i+=1){
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j+=1) {
            arr.push(1);
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                var prtr = e.currentTarget.parentNode;
                var prtbody = e.currentTarget.parentNode.parentNode;
                var space = Array.prototype.indexOf.call(prtr.children, e.currentTarget);
                var lines = Array.prototype.indexOf.call(prtbody.children, prtr);
                // console.log(e.currentTarget, space, lines);
                if (e.currentTarget.textContent === 'X' || e.currentTarget.textContent === '') {
                    e.currentTarget.textContent = '!';
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if (e.currentTarget.textContent === '?') {
                    if (dataset[lines][space] === 1) {
                        e.currentTarget.textContent = '';
                    } else if (dataset[lines][space] === 'X') {
                        e.currentTarget.textContent = 'X';
                    }
                }
                // e.currentTarget.textContent = '!'; //지뢰인것같은 곳을 우클릭으로 "!"표시
                // dataset[lines][space] = '!'; //화면과 데이터를 일치시킴
            });
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
tbody.addEventListener('contextmenu', function(e) {
    console.log('커런트타겟', e.currentTarget);
    console.log('타겟', e.target);
});