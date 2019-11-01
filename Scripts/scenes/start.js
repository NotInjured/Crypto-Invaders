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
            this.background = new objects.Background();
            this.bBackground = new objects.Image("backgroundB", 343, 0);
            this.eBackground = new objects.Image("backgroundE", 712, 0);
            this.lBackground = new objects.Image("backgroundL", 0, 0);
            this.gameLabel = new objects.Label("Crypto Invaders", "36px", "OptimusPrinceps", "#000000", 530, 240, true);
            this.player = new objects.Player("Ship1", 555, 690, false, 1);
            this.aircraft = new objects.Image("aircraft", 418, 450);
            this.startButton = new objects.Button("buttonStart", 630, 375);
            this.optionButton = new objects.Button("buttonOptions", 630, 455);
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            managers.Game.hud.Lives = 3;
            managers.Game.hud.Bombs = 1;
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.player.Update();
            this.ammoManager.Update();
            this.ChangeShip();
        };
        StartScene.prototype.startButtonClick = function () {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.optionButtonClick = function () {
            managers.Game.currentScene = config.Scene.OPTIONS;
        };
        StartScene.prototype.Main = function () {
            var _this = this;
            // Add items to our scene
            //this.addChild(this.background);
            this.addChild(this.eBackground);
            this.addChild(this.lBackground);
            this.addChild(this.bBackground);
            this.addChild(this.hud);
            //this.addChild(this.aircraft);
            this.addChild(this.gameLabel);
            this.addChild(this.startButton);
            this.addChild(this.optionButton);
            //this.addChild(this.player);
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.addChild(ammo);
            });
            this.startButton.on("click", this.startButtonClick);
        };
        StartScene.prototype.ChangeShip = function () {
            var _this = this;
            var ticker = createjs.Ticker.getTicks();
            if (managers.Game.keyboardManager.swap && (ticker % 200 == 0)) {
                var playerPosX = this.player.x;
                var playerPosY = this.player.y;
                this.removeChild(this.player);
                this.ammoManager.Ammo.forEach(function (ammo) {
                    _this.removeChild(ammo);
                });
                switch (this.player.ShipType) {
                    case config.Ship.Botcoin:
                        this.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY, true, this.player.POWER));
                        this.player.ShipType = config.Ship.Lightcoin;
                        console.log("Changing to Lightcoin Ship");
                        console.log(this.player.ShipType);
                        this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                        this.ammoManager.Ammo.forEach(function (ammo) {
                            _this.addChild(ammo);
                        });
                        console.log("Changing to Arc2");
                        break;
                    case config.Ship.Lightcoin:
                        this.addChild(this.player = new objects.Player("Ship3", playerPosX, playerPosY, true, this.player.POWER));
                        this.player.ShipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");
                        console.log(this.player.ShipType);
                        this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                        this.ammoManager.Ammo.forEach(function (ammo) {
                            _this.addChild(ammo);
                        });
                        console.log("Changing to Arc3");
                        break;
                    case config.Ship.Enderium:
                        this.addChild(this.player = new objects.Player("Ship1", playerPosX, playerPosY, true, this.player.POWER));
                        this.player.ShipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");
                        console.log(this.player.ShipType);
                        this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                        this.ammoManager.Ammo.forEach(function (ammo) {
                            _this.addChild(ammo);
                        });
                        console.log("Changing to Arc1");
                        break;
                }
            }
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map