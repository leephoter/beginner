var widthNumber = document.querySelector(".inputWidth"); //가로숫자 요소
var heightNumber = document.querySelector(".inputHeight"); //세로숫자 요소
var shuffleButton = document.querySelector(".shuffleButton"); //버튼 요소
var students = document.getElementById("students"); //전체 자리 요소

shuffleButton.addEventListener("click", function () {
    var total = Array(widthNumber.value * heightNumber.value)
        .fill()
        .map(function (each, index) {
            return index + 1;
        }); //입력한 (가로*세로)만큼 배열
    var shuffle = total.sort(() => 0.5 - Math.random()); //배열 요소 셔플
    for (var i = 1; i < widthNumber.value * heightNumber.value + 1; i++) {
        //(가로*세로)만큼 반복
        var newspace = document.createElement("span"); //자리만들고
        newspace.className = i;
        students.appendChild(newspace);
        newspace.innerHTML = shuffle.splice(0, 1);
        // console.log("shuffle.splice(0) :>> ", shuffle.splice(0, 1));
    }
});
