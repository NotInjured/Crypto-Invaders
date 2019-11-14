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
        Game.boss1IsDead = false;
        Game.boss2IsDead = false;
        Game.boss3IsDead = false;
        Game.level1 = true;
        Game.level2 = false;
        Game.level3 = false;
        Game.level1Completed = false;
        Game.level2Completed = false;
        Game.level3Completed = false;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map