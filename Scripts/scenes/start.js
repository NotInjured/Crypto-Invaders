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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        StartScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("Crypto Invaders", "60px", "OptimusPrinceps", "#FFFFFF", 240, 240, true);
            this.startButton = new objects.Button("StartButton", 140, 300);
            this.helpButton = new objects.Button("HelpButton", 140, 350);
            this.optionButton = new objects.Button("OptionButton", 140, 400);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            // this.background.Update();
        };
        StartScene.prototype.startButtonClick = function () {
            // Change our game state from START to GAME
            objects.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.helpButtonClick = function () {
            objects.Game.currentScene = config.Scene.HELP;
        };
        StartScene.prototype.optionButtonClick = function () {
            objects.Game.currentScene = config.Scene.OPTIONS;
        };
        StartScene.prototype.Main = function () {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.addChild(this.helpButton);
            this.addChild(this.optionButton);
            this.startButton.on("click", this.startButtonClick);
            this.helpButton.on("click", this.helpButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map