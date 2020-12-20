var tbody = document.querySelector('#table tbody');
var dataset = [];
var stopflag = false;
var opennum = 0;
var codetable = { // dictionary를 만들어서 각 칸의 값을 사용
    openn : -1,
    askemo: -2,
    flagg: -3,
    flagminee:-4,
    aksemominee: -5,
    minee: 1,
    comtable: 0,
};
document.querySelector('#exec').addEventListener('click', function() { 
    tbody.innerHTML = ''; //action 클릭시 새로운 배열 생성
    document.querySelector('#result').textContent = '';
    dataset = [];
    opennum = 0;
    stopflag = false;
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

    //console.log(shuffle);
    //지뢰 테이블 만들기
    
    for (var i = 0; i < ver; i+=1){
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j+=1) {
            arr.push(codetable.comtable);
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                if (stopflag) {
                    return;
                }
                var prtr = e.currentTarget.parentNode;
                var prtbody = e.currentTarget.parentNode.parentNode;
                var space = Array.prototype.indexOf.call(prtr.children, e.currentTarget);
                var lines = Array.prototype.indexOf.call(prtbody.children, prtr);
                // console.log(e.currentTarget, space, lines);
                if (e.currentTarget.textContent === 'X' || e.currentTarget.textContent === '') {
                    e.currentTarget.textContent = '!';
                    if (dataset[lines][space] === codetable.minee) {
                        dataset[lines][space] = codetable.flagminee;
                    } else {
                        dataset[lines][space] = codetable.flagg;
                    }
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                    if (dataset[lines][space] === codetable.flagminee) {
                        dataset[lines][space] = codetable.aksemominee;
                    } else {
                        dataset[lines][space] = codetable.askemo;
                    }
                } else if (e.currentTarget.textContent === '?') {
                    if  (dataset[lines][space] === codetable.aksemominee) {
                        e.currentTarget.textContent = 'X';
                        dataset[lines][space] = codetable.minee;
                    } else {
                        e.currentTarget.textContent = '';
                        dataset[lines][space] = codetable.comtable;
                    }
                }
                // e.currentTarget.textContent = '!'; //지뢰인것같은 곳을 우클릭으로 "!"표시
                // dataset[lines][space] = '!'; //화면과 데이터를 일치시킴
            });
            td.addEventListener('click', function (e) {
                if (stopflag) {
                    return;
                }
                //클릭했을 때 주변 지뢰 갯수
                var prtr = e.currentTarget.parentNode;
                var prtbody = e.currentTarget.parentNode.parentNode;
                var space = Array.prototype.indexOf.call(prtr.children, e.currentTarget);
                var lines = Array.prototype.indexOf.call(prtbody.children, prtr);
                if ([codetable.openn, codetable.flagg, codetable.flagminee, codetable.aksemominee, codetable.askemo].includes(dataset[lines][space])) { //열었던칸은 1의 data를 갖고있으니까 1인 곳을 클릭하면 클릭 이벤트 리턴
                    return;
                }
                e.currentTarget.classList.add('opened');
                opennum += 1;
                if (dataset[lines][space] === codetable.minee) {
                    e.currentTarget.textContent = '펑';
                    document.querySelector('#result').textContent = '    looooose';
                    stopflag = true;
                }  else { //지뢰가 아닌경우 주변 지뢰 갯수 세기
                    dataset[lines][space] = 1;
                    var periph = [dataset[lines][space-1], dataset[lines][space+1]];
                    if (dataset[lines-1]) {
                        periph = periph.concat(dataset[lines-1][space-1], dataset[lines-1][space], dataset[lines-1][space+1])
                    } 
                    if (dataset[lines+1]) {
                        periph = periph.concat(dataset[lines+1][space-1], dataset[lines+1][space], dataset[lines+1][space+1])
                    }
                    var purminenum = periph.filter(function(v) {
                        return v === codetable.minee;
                    }).length;
                    //거짓인 값 : false, '', 0, null, undefined, NaN
                    e.currentTarget.textContent = purminenum || '';
                    dataset[lines][space] = codetable.openn;
                    if (purminenum === codetable.comtable) { //주변 지뢰갯수가 0이면 또 클릭
                        var perspace = [];
                        if (tbody.children[lines-1]) {
                            perspace = perspace.concat([
                                tbody.children[lines - 1].children[space - 1],
                                tbody.children[lines - 1].children[space],
                                tbody.children[lines - 1].children[space + 1],
                            ]);
                        }
                        perspace = perspace.concat([
                            tbody.children[lines].children[space - 1],
                            tbody.children[lines].children[space + 1],
                        ]);
                        if (tbody.children[lines + 1]) {
                            perspace = perspace.concat([
                                tbody.children[lines + 1].children[space - 1],
                                tbody.children[lines + 1].children[space],
                                tbody.children[lines + 1].children[space + 1],
                            ]);
                        }
                        perspace.filter((v) => !!v).forEach(function(sidespace) {
                            var prtr = sidespace.parentNode;
                            var prtbody = sidespace.parentNode.parentNode;
                            var perspace2 = Array.prototype.indexOf.call(prtr.children, sidespace);
                            var perlines2 = Array.prototype.indexOf.call(prtbody.children, prtr);
                            if (dataset[perlines2][perspace2] !== codetable.openn) {
                                sidespace.click();
                            }
                        })
                    }
                }
                if (opennum === hor * ver - mine) { //가로*세로 - 지뢰갯수 = 열 수 있는 모든 칸 <지뢰찾기 이겻을 때>
                    stopflag = true;
                    document.querySelector('#result').textContent = 'Win !!';
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    //지뢰 심기 
    for (var k = 0; k < shuffle.length; k++) {
        var height = Math.floor(shuffle[k] / 10);
        var width = shuffle[k] % 10;

        tbody.children[height].children[width].textContent = 'X';
        dataset[height][width] = codetable.minee;
    }
});
