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
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("mainMenu");
            this.bgm.loop = -1;
            this.bgm.volume = 0.1;
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            if (managers.Game.normal)
                this.diff = "Normal";
            if (managers.Game.hard)
                this.diff = "Hard";
            if (managers.Game.hell)
                this.diff = "Hell";
            this.gameOverLabel = new objects.Label("     Game Over!" + "\n" + "Ran out of lives.", "36px", "OptimusPrinceps", "#000000", 650, 240, true);
            this.tryAgainLabel = new objects.Label("Try Again?", "20px", "OptimusPrinceps", "#000000", 535, 400, true);
            this.diffLabel = new objects.Label("Maybe turn down the difficulty if its too hard.", "12px", "OptimusPrinceps", "#000000", 535, 690, true);
            this.scoreLabel = new objects.Label("Score:" + "\n" + managers.Game.score, "30px", "OptimusPrinceps", "#000000", 500, 300, false);
            this.startButton = new objects.Button("buttonStart", 630, 475);
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.continueButton = new objects.Button("buttonContinue", 630, 475);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
            this.hud.Update();
        };
        GameOverScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.startButtonClick = function () {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.continueButtonClick = function () {
            if (managers.Game.level1Completed && managers.Game.level1) {
                managers.Game.level1 = false;
                managers.Game.level2 = true;
                managers.Game.currentScene = config.Scene.GAME;
            }
            if (managers.Game.level2Completed && managers.Game.level2) {
                managers.Game.level2 = false;
                managers.Game.level3 = true;
                managers.Game.currentScene = config.Scene.GAME;
            }
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.hud);
            this.addChild(this.gameOverLabel);
            this.addChild(this.tryAgainLabel);
            this.addChild(this.scoreLabel);
            this.addChild(this.diffLabel);
            this.addChild(this.backButton);
            //this.addChild(this.continueButton)
            this.addChild(this.startButton);
            this.backButton.on("click", this.backButtonClick);
            //this.continueButton.on("click", this.continueButtonClick)
            this.startButton.on("click", this.startButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map