
let puppyImageJs = document.getElementById("puppyImage");
let likeIconJs = document.getElementById("likeIcon");
let likeButtonJs = document.getElementById("likeButton");
let messageLiked = true

function onClickLikeButton() {
    if (messageLiked === true) {
        puppyImageJs.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeButtonJs.style.backgroundColor = "#0967d2";
        likeIconJs.style.color = "#0967d2";
        likeButtonJs.style.color = "#ffffff"
        messageLiked = false
    } else {
        puppyImageJs.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButtonJs.style.backgroundColor = "#cbd2d9";
        likeIconJs.style.color = "#9aa5b1";
        likeButtonJs.style.color = "#cbd2d9"
        messageLiked = true
    }
}
