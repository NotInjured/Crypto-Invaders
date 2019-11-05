var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            this.gameOverLabel = new objects.Label("     Game Over!" + "\n" + "Ran out of lives.", "36px", "OptimusPrinceps", "#000000", 650, 240, true);
            this.tryAgainLabel = new objects.Label("Try Again?", "20px", "OptimusPrinceps", "#000000", 535, 400, true);
            this.diffLabel = new objects.Label("Maybe turn down the difficulty if its too hard.", "12px", "OptimusPrinceps", "#000000", 535, 690, true);
            this.startButton = new objects.Button("buttonStart", 630, 475);
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.startButtonClick = function () {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.hud);
            this.addChild(this.gameOverLabel);
            this.addChild(this.tryAgainLabel);
            this.addChild(this.diffLabel);
            this.addChild(this.backButton);
            this.addChild(this.startButton);
            this.backButton.on("click", this.backButtonClick);
            this.startButton.on("click", this.startButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map