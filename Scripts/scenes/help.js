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
        function HelpScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        HelpScene.prototype.Start = function () {
            this.background = new objects.Background();
            this.player = new objects.Player("Ship1", 240, 600);
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            this.infoPanel = new objects.Image("panelUI", 240, 360);
            this.backButton = new objects.Button("buttonBack", 90, 575);
            this.nextButton = new objects.Button("buttonNext", 575, 575);
            this.hudImage = new objects.Image("HUD", 0, 0);
            this.hud = new managers.HUD;
            this.swapped = false;
            this.Main();
        };
        HelpScene.prototype.Update = function () {
            this.player.Update();
            this.ammoManager.Update();
            this.ChangeShip();
        };
        HelpScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        HelpScene.prototype.nextButtonClick = function () {
            managers.Game.currentScene = config.Scene.INFO;
        };
        HelpScene.prototype.toggleButtonClick = function () {
        };
        HelpScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.backButton);
            this.addChild(this.nextButton);
            this.addChild(this.hudImage);
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
            this.nextButton.on("click", this.nextButtonClick);
            //this.toggleHud.on("click", this.toggleButtonClick);
        };
        HelpScene.prototype.ChangeShip = function () {
            var ticker = createjs.Ticker.getTicks();
            //this.swapped = true;
            if (managers.Game.keyboardManager.swap && (ticker % 150 == 0)) {
                if (this.player.shipType == config.Ship.Botcoin) {
                    this.player.shipType = config.Ship.Lightcoin;
                    console.log("Changing to Lightcoin Ship");
                    var playerPosX = this.player.x;
                    var playerPosY = this.player.y;
                    this.stage.removeChild(this.player);
                    this.stage.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY));
                }
                else if (this.player.shipType == config.Ship.Lightcoin) {
                    this.player.shipType = config.Ship.Enderium;
                    console.log("Changing to Enderium Ship");
                    var playerPosX = this.player.x;
                    var playerPosY = this.player.y;
                    this.stage.removeChild(this.player);
                    this.stage.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY));
                }
                else if (this.player.shipType == config.Ship.Enderium) {
                    this.player.shipType = config.Ship.Botcoin;
                    console.log("Changing to Botcoin Ship");
                    var playerPosX = this.player.x;
                    var playerPosY = this.player.y;
                    this.stage.removeChild(this.player);
                    this.stage.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY));
                }
                /*switch(this.player.shipType){
                    case config.Ship.Botcoin:
                                   
                    break;
                    case config.Ship.Lightcoin:
                        this.player.shipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");
                    break;
                    case config.Ship.Enderium:
                        this.player.shipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");
                    break;
                }*/
            }
        };
        return HelpScene;
    }(objects.Scene));
    scenes.HelpScene = HelpScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=help.js.map