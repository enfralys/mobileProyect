let a = {};

a.getVideoDuration = (a) => {
    var v = document.getElementById(a);
    v.addEventListener("loadeddata", function(ev) {
        return v;
    }, true);
    return v;
}

a.play = (a) => {
    var v = document.getElementById(a);
    v.play();
}
module.exports = a;