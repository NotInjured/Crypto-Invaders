var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["GAME"] = 1] = "GAME";
        Scene[Scene["OVER"] = 2] = "OVER";
        Scene[Scene["HELP"] = 3] = "HELP";
        Scene[Scene["HISCORE"] = 4] = "HISCORE";
        Scene[Scene["OPTIONS"] = 5] = "OPTIONS";
        Scene[Scene["INTRO"] = 6] = "INTRO";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map