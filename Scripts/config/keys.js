var config;
(function (config) {
    var Keys = /** @class */ (function () {
        function Keys() {
        }
        // Singleplayer
        Keys.LEFT_ARROW = 37;
        Keys.RIGHT_ARROW = 39;
        Keys.UP_ARROW = 38;
        Keys.DOWN_ARROW = 40;
        Keys.SPACE = 32;
        Keys.X = 88;
        Keys.Z = 90;
        Keys.SHIFT = 16;
        // Multiplayer
        // Player 1
        Keys.A = 65;
        Keys.D = 68;
        Keys.W = 87;
        Keys.S = 83;
        Keys.V = 86;
        Keys.P1SPACE = 32;
        Keys.LSHIFT = 16;
        // Player 2
        Keys.LEFT = 37;
        Keys.RIGHT = 39;
        Keys.UP = 38;
        Keys.DOWN = 40;
        Keys.NUMENTER = 13;
        Keys.NUM0 = 96;
        Keys.NUMDOT = 110;
        return Keys;
    }());
    config.Keys = Keys;
})(config || (config = {}));
//# sourceMappingURL=keys.js.map