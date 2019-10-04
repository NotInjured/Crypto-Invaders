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
    var InfoScene = /** @class */ (function (_super) {
        __extends(InfoScene, _super);
        // Constructor
        function InfoScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        InfoScene.prototype.Start = function () {
            this.background = new objects.Background();
            this.player = new objects.Player();
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            this.infoPanel = new objects.Image("panelInfo", 240, 360);
            this.backButton = new objects.Button("buttonBack", 90, 575);
            //this.toggleHud = new objects.Button("buttonUI", 330, 575);
            this.hudImage = new objects.Image("HUD", 0, 0);
            this.info1 = new objects.Label("Bottom Left: " + "\n" +
                "Player starts with 3 lives " + "\n" +
                "- Gain more lives by completing stages (Max:10)" + "\n\n" +
                "Player Starts with 1 bomb/special" + "\n" +
                "- Gain more bombs dropped by enemies or bosses (Max:3)" + "\n\n" +
                "Player starts with power level 1" + "\n" +
                "- Upgrade ship power level by collecting power-ups " + "\n" +
                "dropped by enemies/bosses (Max:10)" + "\n\n" +
                "Top Right: " + "\n" +
                "Score is gained by destroying enemies, bosses" + "\n" +
                "and collecting item drops " + "\n\n" +
                "Score multiplier is gained upon destroying enemies" + "\n" +
                "and is lost when dead", "16px", "OptimusPrimus", "#000000", 60, 215, false);
            this.hud = new managers.HUD;
            this.Main();
        };
        InfoScene.prototype.Update = function () {
            this.player.Update();
            this.ammoManager.Update();
        };
        InfoScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.HELP;
        };
        InfoScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.info1);
            this.addChild(this.backButton);
            this.addChild(this.hudImage);
            //this.addChild(this.toggleHud);
            this.addChild(this.hud.playerLivesLabel);
            this.addChild(this.hud.playerBombsLabel);
            //this.addChild(this.hud.playerPowerLabel);
            this.addChild(this.hud.playerScoreLabel);
            this.addChild(this.hud.scoreMultLabel);
            this.addChild(this.player);
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.addChild(ammo);
            });
            this.backButton.on("click", this.backButtonClick);
        };
        return InfoScene;
    }(objects.Scene));
    scenes.InfoScene = InfoScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=info.js.map