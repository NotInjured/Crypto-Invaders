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
    var OptionsScene = /** @class */ (function (_super) {
        __extends(OptionsScene, _super);
        // Constructor
        function OptionsScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Method
        OptionsScene.prototype.Start = function () {
            console.log(managers.Game.difficulty);
            this.dLabel = new objects.Label("Difficulty", "36px", "OptimusPrinceps", "#000000", 535, 250, true);
            switch (managers.Game.difficulty) {
                case 0:
                    this.diffLabel = new objects.Label("Normal", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                    break;
                case 1:
                    this.diffLabel = new objects.Label("Hard", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                    break;
                case 2:
                    this.diffLabel = new objects.Label("Hell", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                    break;
            }
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.increaseButton = new objects.Button("buttonIncrease", 630, 375);
            this.decreaseButton = new objects.Button("buttonDecrease", 630, 435);
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            this.Main();
        };
        OptionsScene.prototype.Update = function () {
            this.hud.Update();
            if (managers.Game.normal) {
                this.removeChild(this.diffLabel);
                this.diffLabel = new objects.Label("Normal", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                this.addChild(this.diffLabel);
            }
            if (managers.Game.hard) {
                this.removeChild(this.diffLabel);
                this.diffLabel = new objects.Label("Hard", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                this.addChild(this.diffLabel);
            }
            if (managers.Game.hell) {
                this.removeChild(this.diffLabel);
                this.diffLabel = new objects.Label("Hell", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                this.addChild(this.diffLabel);
            }
        };
        OptionsScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        OptionsScene.prototype.increaseButtonClick = function () {
            console.log(managers.Game.difficulty);
            switch (managers.Game.difficulty) {
                case 0:
                    managers.Game.difficulty = config.Difficulty.HARD;
                    managers.Game.normal = false;
                    managers.Game.hard = true;
                    managers.Game.hell = false;
                    break;
                case 1:
                    managers.Game.difficulty = config.Difficulty.Hell;
                    managers.Game.normal = false;
                    managers.Game.hard = false;
                    managers.Game.hell = true;
                    break;
            }
        };
        OptionsScene.prototype.decreaseButtonClick = function () {
            console.log(managers.Game.difficulty);
            switch (managers.Game.difficulty) {
                case 1:
                    managers.Game.difficulty = config.Difficulty.NORMAL;
                    managers.Game.normal = true;
                    managers.Game.hard = false;
                    managers.Game.hell = false;
                    break;
                case 2:
                    managers.Game.difficulty = config.Difficulty.HARD;
                    managers.Game.normal = false;
                    managers.Game.hard = true;
                    managers.Game.hell = false;
                    break;
            }
        };
        OptionsScene.prototype.Main = function () {
            this.addChild(this.hud);
            this.addChild(this.dLabel);
            this.addChild(this.diffLabel);
            this.addChild(this.backButton);
            this.addChild(this.increaseButton);
            this.addChild(this.decreaseButton);
            this.increaseButton.on("click", this.increaseButtonClick);
            this.decreaseButton.on("click", this.decreaseButtonClick);
            this.backButton.on("click", this.backButtonClick);
        };
        return OptionsScene;
    }(objects.Scene));
    scenes.OptionsScene = OptionsScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=options.js.map