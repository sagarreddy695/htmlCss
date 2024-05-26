let colorsBg = ["red","yellow","green","black"];
let btnElement = document.getElementById("button");
let containerElement = document.getElementById("bgContainer");

function clickMe() {
    let numberOfBgColors = colorsBg.length;
    let randomColorIndex = Math.ceil(Math.random() * numberOfBgColors);
    if(numberOfBgColors === randomColorIndex) {
        numberOfBgColors = randomColorIndex - 1;
    }
    containerElement.style.backgroundColor = colorsBg[randomColorIndex];
}