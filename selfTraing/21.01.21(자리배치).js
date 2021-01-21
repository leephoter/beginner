var widthNumber = document.querySelector(".inputWidth");
var heightNumber = document.querySelector(".inputHeight");
var shuffleButton = document.querySelector(".shuffleButton");
var table = document.getElementById("table");
var students = document.getElementById("students");

shuffleButton.addEventListener("click", function () {
    for (var i = 1; i < widthNumber.value * heightNumber.value; i++) {
        var newspace = document.createElement("span");
        newspace.className = i;
        newspace.innerHTML = i;
        // newspace.classList.add('')
        students.appendChild(newspace);
    }
});
