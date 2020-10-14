var tbody = document.querySelector('#table tbody');
document.querySelector('#exec').addEventListener('click', function() {
    var hor = parseInt(document.querySelector('#hor').value)
    var ver = parseInt(document.querySelector('#ver').value)
    var mine = parseInt(document.querySelector('#mine').value)
    console.log(hor, ver, mine);
    // console.log(tbody); //
//지뢰위치
    var sub = Array(hor*ver).fill().map(function (emnt, indexx) {
        return indexx;
    });
    var shuffle = [];
    while (sub.length > 80) {
        var movvalue = sub.splice(Math.floor(Math.random() * sub.length), 1)[0];
        shuffle.push(movvalue);
    }
    console.log(shuffle);
//지뢰테이블 만들기
    var dataset = [];
    for (var i = 0; i < ver; i += 1) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j += 1) {
            arr.push(1);
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    //지뢰심기
    for (var k = 0; k < shuffle.length; k++) {
        var height = Math.floor(shuffle[k] / 10);
        var width = shuffle[k] % 10;
        console.log(height, width);
        tbody.children[height].children[width].textContent = 'X';
        dataset[height][width] = 'X';
    }
    //     if (height >= 0 && width >= 0) {
    //         tbody.children[height].children[width].textContent = "X";
    //         dataset[height][width] = "X";
    //       }
    //     //tbody.children[height].children[width].textContent = 'X'
    //     //dataset[height][width] = 'X'
    // }
    console.log(dataset);
});

tbody.querySelectorAll('td').forEach(function (td) {
    td.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        console.log('오른쪽 클릭')
    })
})