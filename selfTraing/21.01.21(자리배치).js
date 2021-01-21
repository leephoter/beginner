var widthNumber = document.querySelector(".inputWidth");
var heightNumber = document.querySelector(".inputHeight");
var shuffleButton = document.querySelector(".shuffleButton");
var table = document.querySelector("table");
var newspace = document.createElement("span");

shuffleButton.addEventListener("click", function () {
    console.log(widthNumber.value * heightNumber.value);
});
