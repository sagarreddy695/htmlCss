let dict = {
    name:"sai",
    score:10,
};
function checkscore(a){
    if (a["score"]>5) {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkscore(dict));