var widthNumber = document.querySelector(".inputWidth");
var heightNumber = document.querySelector(".inputHeight");
var shuffleButton = document.querySelector(".shuffleButton");
var table = document.getElementById("table");
var students = document.getElementById("students");

shuffleButton.addEventListener("click", function () {
    var total = Array(widthNumber.value * heightNumber.value)
        .fill()
        .map(function (each, index) {
            return index + 1;
        });
    var shuffle = total.sort(() => 0.5 - Math.random());
    for (var i = 1; i < widthNumber.value * heightNumber.value + 1; i++) {
        var newspace = document.createElement("span");
        newspace.className = i;
        newspace.innerHTML = shuffle.splice(0);
        // newspace.classList.add('')
        students.appendChild(newspace);
    }
});
