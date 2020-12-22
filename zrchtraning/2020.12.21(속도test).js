//반응속도 체크
var screen = document.querySelector('#screen'); //html의 style
// var status = {}
var starttime; //시작시간
var endtime; // 클릭한 시간
var reports = []; //시간 기록 배열
var timeout; //랜덤의 시간이 흐른 후 화면이 바뀔 시간
//var starttime = new Date();
// console.time('time');

screen.addEventListener('click', function() {     //screen을 클릭하면
    //var lasttime = new Date();
    //console.log((lasttime - starttime) / 1000);
    //console.timeEnd('time');
    if (screen.classList.contains('waiting')){ //screen이 class : waiting이면 (파란창)
        screen.classList.remove('waiting') //waiting창 제거 
        screen.classList.add('ready')          //ready창 추가 (핑크창)
        screen.textContent = 'Click on Green Screen !!' // 초록창이 뜨면 클릭!
        timeout = setTimeout(function() {
            starttime = new Date();         //이벤트리스너 스코프 밖에서 설정한 '시작시간'을 지금부터 시작
            screen.click();                 //'시작시간'의 시작과 동시에 화면 클릭
        }, Math.floor(Math.random() * 1000) + 2000); //2000~3000 중 랜덤의 시간 후 (위의 2줄) 실행
    }
    else if (screen.classList.contains('ready')) {      //
        if (!starttime) { // 부정 클릭 (시작시간이 없는데 클릭하면 (초록창이 뜨기전에 미리 클릭하면))
            clearTimeout(timeout);//시간 클리어
            screen.classList.remove('ready') //screen.ready제거
            screen.classList.add('waiting') //screen.waiting추가
            screen.textContent = 'nope ! retry !!' //다시 시도하라는 문구 표시
        } else { //제대로 클릭을 하면
        screen.classList.remove('ready')  //
        screen.classList.add('now') //screen.now (초록창)으로 넘어가고
        screen.textContent = 'Click !!' //클릭하라는 문구 !
        }
    }
    else if (screen.classList.contains('now')) { //screen.now 에서 클릭을 하면 
        endtime = new Date(); //클릭햇을때의 시간 정의
        reports.push(endtime - starttime); //기록배열에 시간차이(순발력)를 push
        console.log('Reaction Rate :', (endtime - starttime)/1000,'sec'); //console로 알려주고
        starttime = null; //게임이 끝나면 시간 초기화
        endtime = null; // 게임이 끝나면 시간 초기화
        screen.classList.remove('now')
        screen.classList.add('waiting')
        screen.textContent = 'Click to Start !'
    }
});