let backgroundcolors = document.getElementById("colorPickerContainer");
let spans = document.getElementById("selectedColorHexCode");

function buttonclick1() {
    backgroundcolors.style.backgroundColor = "#e0e0e0";
    spans.textContent = "#e0e0e0";
}

function buttonclick2() {
    backgroundcolors.style.backgroundColor = "#6fcf97";
    spans.textContent = "#6fcf97";
}

function buttonclick3() {
    backgroundcolors.style.backgroundColor = "#56ccf2";
    spans.textContent = "#56ccf2";
}

function buttonclick4() {
    backgroundcolors.style.backgroundColor = "#bb6bd9";
    spans.textContent = "#bb6bd9";
}