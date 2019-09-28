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
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            this.gameOverLabel = new objects.Label("Game Over!", "40px", "Consolas", "#000000", 320, 240, true);
            this.backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map