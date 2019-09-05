// create the global ue4(...) helper function
"object" != typeof ue || "object" != typeof ue.interface ? ("object" != typeof ue && (ue = {}), ue.interface = {}, ue.interface.broadcast = function(e, t) {
    if ("string" == typeof e) {
        var o = [e, ""];
        void 0 !== t && (o[1] = t);
        var n = encodeURIComponent(JSON.stringify(o));
        "object" == typeof history && "function" == typeof history.pushState ? (history.pushState({}, "", "#" + n), history.pushState({}, "", "#" + encodeURIComponent("[]"))) : (document.location.hash = n, document.location.hash = encodeURIComponent("[]"))
    }
}) : function(e) { ue.interface = {}, ue.interface.broadcast = function(t, o) { "string" == typeof t && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, "")) } }(ue.interface), (ue4 = ue.interface.broadcast);
// called in-game via blueprints

let a = {};
a.test = function test(params) {
    ue4("volume", params)
    return console.log(params);
}
ue.interface.setFPS = function(fps) {
    // set element text
    $("#fpsMeter").text(fps.toFixed(1) + " FPS");
};
ue.interface.setVolume = function(val) {
    // set range value
    $("#volumeSlider").val(val);
};

// delay until browser is ready
jQuery(function() {
    $("#playGame").click(function(e) {
        $("#logo").fadeOut(1000);
        $("#playGame").fadeOut(1000);
        $("#quitGame").fadeOut(1000);
        $("#volumeSlider").fadeOut(500);

        // executed in blueprints
        ue4("play");
    });

    $("#quitGame").click(function(e) {
        // executed in blueprints
        ue4("quit");
    });

    $("#volumeSlider").on("input", function(e) {
        // executed in blueprints
        ue4("volume", "hola")
            // ue4("volume", parseFloat($(this).val()));
    });

    // notify blueprint that browser is ready
    ue4("ready");

    // delay for 1 sec
    setTimeout(function() {
            // transmit data to the game
            ue4("print", {
                "browser": navigator.userAgent,
                "time": Date.now()
            });
        },
        1000);
});
module.exports = a;