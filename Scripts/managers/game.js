var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.pause = false;
        Game.over = false;
        Game.normal = true;
        Game.hard = false;
        Game.hell = false;
        Game.boss1Hp = 250;
        Game.boss2Hp = 500;
        Game.boss3Hp = 750;
        Game.boss1IsDead = false;
        Game.boss2IsDead = false;
        Game.boss3IsDead = false;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map