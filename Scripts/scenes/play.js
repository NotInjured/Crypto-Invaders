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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            // Initialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player("Ship1", 240, 600, false, 1);
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.hudImage = new objects.Image("HUD", 0, 0);
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            managers.Game.hud.Lives = 3;
            managers.Game.hud.Bombs = 1;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            // Update the background here
            this.background.Update();
            this.player.Update();
            this.IsPaused();
            this.ammoManager.Update();
            this.ChangeShip();
            this.enemies.forEach(function (e) {
                if (!e.isDead) {
                    e.Update();
                    managers.Collision.CheckAABB(_this.player, e);
                }
            });
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.enemies.forEach(function (enemy) {
                    managers.Collision.CheckAABB(ammo, enemy);
                });
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.hudImage);
            this.addChild(this.hud);
            this.addChild(this.player);
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.addChild(ammo);
            });
            // this.addChild(this.enemy);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
        };
        PlayScene.prototype.IsPaused = function () {
            if (managers.Game.keyboardManager.pause) {
                managers.Game.currentScene = config.Scene.START;
                console.log("Switching to start menu...");
            }
        };
        PlayScene.prototype.ChangeShip = function () {
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
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map