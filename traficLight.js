let stop = document.getElementById("stopButton");
let ready = document.getElementById("readyButton");
let go = document.getElementById("goButton");
let redjs = document.getElementById("stopLight");
let yellowjs = document.getElementById("readyLight");
let greenjs = document.getElementById("goLight");


function redbutton() {
    stop.style.backgroundColor = "#cf1124";
    ready.style.backgroundColor = "#1f1d41";
    go.style.backgroundColor = "#1f1d41";
    redjs.style.backgroundColor ="#cf1124";
    yellowjs.style.backgroundColor = "#4b5069";
    greenjs.style.backgroundColor ="#4b5069";
}
function yellowbutton() {
    stop.style.backgroundColor =  "#1f1d41";
    ready.style.backgroundColor = "#f7c948";
    go.style.backgroundColor = "#1f1d41";
    redjs.style.backgroundColor ="#4b5069";
    yellowjs.style.backgroundColor = "#f7c948";
    greenjs.style.backgroundColor ="#4b5069";
}
function greenbutton() {
    stop.style.backgroundColor = "#1f1d41";
    ready.style.backgroundColor = "#1f1d41";
    go.style.backgroundColor = "#199473";
    redjs.style.backgroundColor = "#4b5069";
    yellowjs.style.backgroundColor = "#4b5069";
    greenjs.style.backgroundColor = "#199473";
}