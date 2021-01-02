var table = document.getElementById('table');
var data = [];
var scoretable = document.getElementById('score');

function reset() {
    var fragment = document.createDocumentFragment();
    [1, 2, 3, 4].forEach(function() {
        var heightdata = [];
        data.push(heightdata);
        var tr = document.createElement('tr');
        [1, 2, 3, 4].forEach(function() {
            heightdata.push(0);
            var td = document.createElement('td');
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    table.appendChild(fragment);
}

function randommaking() {
    var blankarray = [];
    data.forEach(function(heightdata, i) {
        heightdata.forEach(function(widthdata, j) {
            if (!widthdata) {
                blankarray.push([i, j]);
            }
        });
    });
    
    if (blankarray.length === 0) {
        alert('Game Over !' + scoretable.textContent);
        table.innerHTML = '';
        reset();
    } else {
        var randomspace = blankarray[Math.floor(Math.random() * blankarray.length)]; //빈칸배열 중 랜덤 한 곳
        data[randomspace[0]][randomspace[1]] = 2; //초기 숫자 2
        drawing();
    }
}

function drawing() {
    data.forEach(function(heightdata, i) {
        heightdata.forEach(function(widthdata, j) {
            if (widthdata > 0) {
                table.children[i].children[j].textContent = widthdata;
            } else {
                table.children[i].children[j].textContent = '';
            }
        });
    });
}

reset();
randommaking();
drawing();

var dragstart = false;
var dragging = false;
var startsite;
var endsite;
window.addEventListener('mousedown', function(event) {
    dragstart = true;
    startsite = [event.clientX, event.clientY];
    // console.log('mousedown', event);
});
window.addEventListener('mousemove', function(event) {
    dragging = true;
    if (dragstart) {
        // console.log('mousemove', event);
    }
});
window.addEventListener('mouseup', function(event) {
    endsite = [event.clientX, event.clientY];
    if (dragging) {
        var way;
        var xgap = endsite[0] - startsite[0];
        var ygap = endsite[1] - startsite[1];
        if (xgap < 0 && Math.abs(xgap) / Math.abs(ygap) > 1) {
            way = 'left'; 
        } else if (xgap > 0 && Math.abs(xgap) / Math.abs(ygap) > 1) {
            way = 'right'; 
        } else if (ygap > 0 && Math.abs(xgap) / Math.abs(ygap) < 1) {
            way = 'down'; 
        } else if (ygap < 0 && Math.abs(xgap) / Math.abs(ygap) < 1) {
            way = 'up'; 
        } //mousedouw의 위치와 mouseup의 위치의 차이로 좌우상하 이동을 파악
    }
    dragstart = false;
    dragging = false;

    switch (way) {
        case 'left':
            var newdata = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function(heightdata, i) {
                heightdata.forEach(function(widthdata, j) {
                    if (widthdata) {
                        if (newdata[i][newdata[i].length - 1] && newdata[i][newdata[i].length - 1] === widthdata) {
                            newdata[i][newdata[i].length - 1] *= 2;
                            var nowscore = parseInt(scoretable.textContent, 10);
                            scoretable.textContent = nowscore + newdata[i][newdata[i].length - 1];
                        } else {
                            newdata[i].push(widthdata);
                        }
                    }
                });
            });
            console.log(newdata);
            [1, 2, 3, 4].forEach(function(heightdata, i) {
                [1, 2, 3, 4].forEach(function(widthdata, j) {
                    data[i][j] = newdata[i][j] || 0;
                });
            });
            break;
        case 'right': //버그수정하기
            var newdata = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function(heightdata, i) {
                heightdata.forEach(function(widthdata, j) {
                    if (widthdata) {
                        if (newdata[i][newdata[i].length - 1] && newdata[i][newdata[i].length - 1] === widthdata) {
                            newdata[i][newdata[i].length - 1] *= 2;
                            var nowscore = parseInt(scoretable.textContent, 10);
                            scoretable.textContent = nowscore + newdata[i][newdata[i].length - 1];
                        } else {
                            newdata[i].push(widthdata);
                        }
                    }
                });
            });
            console.log(newdata);
            [1, 2, 3, 4].forEach(function(heightdata, i) {
                [1, 2, 3, 4].forEach(function(widthdata, j) {
                    data[i][j] = newdata[i][j] || 0;
            // data.forEach(function(heightdata, i) {
            //     heightdata.forEach(function(widthdata, j) {
            //         if (widthdata) {
            //             if (newdata[i][0] && newdata[i][0] === widthdata){
            //                 newdata[i][0] *= 2;
            //                 var nowscore = parseInt(scoretable.textContent, 10);
            //                 scoretable.textContent = nowscore + newdata[i][0];
            //             } else {
            //                 newdata[i].unshift(widthdata);
            //             }
            //         }
            //     });
            // });
            // console.log(newdata);
            // [1, 2, 3, 4].forEach(function(widthdata, i) {
            //     [1, 2, 3, 4].forEach(function(heightdata, j) {
            //         data[i][3 - j] = newdata[i][j] || 0;
                });
            });
            break;
        case 'up':
            var newdata = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function(heightdata, i) {
                heightdata.forEach(function(widthdata, j) {
                    if (widthdata) {
                        if (newdata[j][newdata[j].length - 1] && newdata[j][newdata[j].length - 1] === widthdata){
                            newdata[j][newdata[j].length - 1] *= 2;
                            var nowscore = parseInt(scoretable.textContent, 10);
                            scoretable.textContent = nowscore + newdata[j][newdata[j].length - 1];
                        } else {
                            newdata[j].push(widthdata);
                        }
                    }
                });
            });
            console.log(newdata);
            [1, 2, 3, 4].forEach(function(widthdata, i) {
                [1, 2, 3, 4].forEach(function(heightdata, j) {
                    data[j][i] = newdata[i][j] || 0;
                });
            });
            break;
        case 'down': //버그 수정하기
            var newdata = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function(heightdata, i) {
                heightdata.forEach(function(widthdata, j) {
                    if (widthdata) {
                        if (newdata[j][0] && newdata[j][0] === widthdata){
                            newdata[j][0] *= 2;
                            var nowscore = parseInt(scoretable.textContent, 10);
                            scoretable.textContent = nowscore + newdata[j][0];
                        } else {
                            newdata[j].unshift(widthdata);
                        }
                    }
                });
            });
            console.log(newdata);
            [1, 2, 3, 4].forEach(function(widthdata, i) {
                [1, 2, 3, 4].forEach(function(heightdata, j) {
                    data[3 - j][i] = newdata[i][j] || 0;
                });
            });
            // move(way);
            break;
    }
    randommaking();
});


function move(way) {
    var newdata = [
        [],
        [],
        [],
        []
    ];
    data.forEach(function(heightdata, i) {
        heightdata.forEach(function(widthdata, j) {
            if (widthdata) {
                newdata[j].unshift(widthdata);
            }
        });
    });
    console.log(newdata);
    [1, 2, 3, 4].forEach(function(widthdata, i) {
        [1, 2, 3, 4].forEach(function(heightdata, j) {
            data[3 - j][i] = newdata[i][j] || 0;
        });
    });
}
