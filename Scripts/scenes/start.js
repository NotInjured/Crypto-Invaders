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
            this.bCoins = new Array();
            this.eCoins = new Array();
            this.lCoins = new Array();
            for (var i = 0; i < 35; i++) {
                this.bCoins[i] = new objects.Coins("B_coin", "B");
                this.eCoins[i] = new objects.Coins("E_coin", "E");
                this.lCoins[i] = new objects.Coins("L_coin", "L");
            }
            this.gameLabel = new objects.Label("Crypto Invaders", "36px", "OptimusPrinceps", "#000000", 530, 240, true);
            this.startButton = new objects.Button("buttonStart", 630, 375);
            this.optionButton = new objects.Button("buttonOptions", 630, 455);
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.bCoins.forEach(function (c) {
                c.Update();
            });
            this.eCoins.forEach(function (c) {
                c.Update();
            });
            this.lCoins.forEach(function (c) {
                c.Update();
            });
        };
        StartScene.prototype.startButtonClick = function () {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.optionButtonClick = function () {
            managers.Game.currentScene = config.Scene.OPTIONS;
        };
        StartScene.prototype.Main = function () {
            // Add items to our scene
            var _this = this;
            this.bCoins.forEach(function (c) {
                c.scaleX = 0.75;
                c.scaleY = 0.75;
                _this.addChild(c);
            });
            this.eCoins.forEach(function (c) {
                c.scaleX = 0.75;
                c.scaleY = 0.75;
                _this.addChild(c);
            });
            this.lCoins.forEach(function (c) {
                c.scaleX = 0.75;
                c.scaleY = 0.75;
                _this.addChild(c);
            });
            this.addChild(this.hud);
            this.addChild(this.gameLabel);
            this.addChild(this.startButton);
            this.addChild(this.optionButton);
            this.startButton.on("click", this.startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map