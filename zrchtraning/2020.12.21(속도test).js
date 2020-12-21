//반응속도 체크
var screen = document.querySelector('#screen');
var status = {

}
//var starttime = new Date();
// console.time('time');
screen.addEventListener('click', function() {
    //var lasttime = new Date();
    //console.log((lasttime - starttime) / 1000);
    //console.timeEnd('time');
    var starttime;
    if (screen.classList.contains('waiting')){
        screen.classList.remove('waiting')
        screen.classList.add('ready')
        screen.textContent = 'Click on Green Screen !!'
        setTimeout(function() {
            starttime = new Date();
            screen.click();
        }, Math.floor(Math.random() * 1000) + 2000); //2000~3000 중 랜덤
    }
    else if (screen.classList.contains('ready')) {
        screen.classList.remove('ready') 
        screen.classList.add('now')
        screen.textContent = 'Click !!'
    }
    else if (screen.classList.contains('now')) {
        var endtime = new Date();
        console.log('Reaction Rate :', (starttime - endtime)/1000,'sec');
        screen.classList.remove('now')
        screen.classList.add('waiting')
        screen.textContent = 'Click to Start !'
    }
});