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
        Game.boss1Hp = 200;
        Game.boss2Hp = 350;
        Game.boss3Hp = 500;
        Game.boss1IsDead = false;
        Game.boss2IsDead = false;
        Game.boss3IsDead = false;
        Game.eType1HP = 1;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map