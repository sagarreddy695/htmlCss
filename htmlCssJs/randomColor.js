let bgColorsArray = ["red","blue","yellow","black"];
let btnElement = document.getElementById("btn");
let containerElement = document.getElementById("bgContainer");


function clickMe(){
    let numberofBgColors = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberofBgColors);
    if (numberofBgColors === randomColorIndex) {
        numberofBgColors = randomColorIndex - 1;
    }
    containerElement.style.backgroundColor = bgColorsArray[randomColorIndex];
}



// let bgColorsArray = ["#E75D7C", "#B16CEF", "#53CCA4", "#EFC84D", "#628EF0", "#184B73", "#883E7F", "#ED048B"];