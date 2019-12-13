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
        Game.boss3_1IsDead = false;
        Game.boss3_2IsDead = false;
        Game.level1 = true;
        Game.level2 = false;
        Game.level3 = false;
        Game.level1Completed = false;
        Game.level2Completed = false;
        Game.level3Completed = false;
        Game.ng = false;
        Game.p1 = false;
        Game.p2 = false;
        Game.p3 = false;
        Game.p4 = false;
        Game.p5 = false;
        Game.single = false;
        Game.multi = false;
        Game.bossRush = false;
        Game.P1p1 = false;
        Game.P1p2 = false;
        Game.P1p3 = false;
        Game.P1p4 = false;
        Game.P1p5 = false;
        Game.P2p1 = false;
        Game.P2p2 = false;
        Game.P2p3 = false;
        Game.P2p4 = false;
        Game.P2p5 = false;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map