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
    var HelpScene = /** @class */ (function (_super) {
        __extends(HelpScene, _super);
        // Constructor
        function HelpScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        HelpScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.infoPanel = new objects.Image(this.assetManager, "infoPanel", 20, 125);
            this.backButton = new objects.Button(this.assetManager, "backButton", -120, 525);
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 460, 525);
            this.backButton2 = new objects.Button(this.assetManager, "backButton", -120, 525);
            this.hudImage = new objects.Image(this.assetManager, "hud", 0, 0);
            this.hud = new managers.HUD;
            this.Main();
        };
        HelpScene.prototype.Update = function () {
            this.player.Update();
        };
        HelpScene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        HelpScene.prototype.nextButtonClick = function () {
            this.removeChild(this.infoPanel);
        };
        HelpScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.backButton);
            this.addChild(this.hudImage);
            this.addChild(this.player);
            this.addChild(this.hud.playerLivesLabel);
            this.addChild(this.hud.playerBombsLabel);
            //this.addChild(this.hud.playerPowerLabel);
            this.addChild(this.hud.playerScoreLabel);
            this.addChild(this.hud.scoreMultLabel);
            this.backButton.on("click", this.backButtonClick);
            this.nextButton;
        };
        return HelpScene;
    }(objects.Scene));
    scenes.HelpScene = HelpScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=help.js.map