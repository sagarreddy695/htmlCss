
let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let headingJs = document.getElementById("headingJs");
headingJs.textContent = recipeObj.title;
headingJs.classList.add("recipe-title");

let imgJs = document.getElementById("imageJs");
imgJs.setAttribute("src", recipeObj.imgSrc);

let ulJs = document.getElementById("ulJs");

for (let checkLists of recipeObj.ingredients) {
    let licreateJs = document.createElement("li");
    licreateJs.textContent = checkLists;
    licreateJs.classList.add("class-list")
    ulJs.appendChild(licreateJs);

}
