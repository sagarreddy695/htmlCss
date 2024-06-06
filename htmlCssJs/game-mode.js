let dict =["anand","rahul"];

function getpreferredgamemode(a) {
    if (a.length == 0) {
        return "solo";
    }
    else if (a.length == 1) {
        return "dual";
    }
    else {
        return "squad";
    }
}
console.log(getpreferredgamemode(dict));