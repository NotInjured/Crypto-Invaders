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
        //private enemyAmmoManager:managers.EnemyAmmo;
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
            this.player = new objects.Player("Ship1", 260, 600, false, 1);
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            //this.enemyAmmoManager = new managers.EnemyAmmo();
            //managers.Game.enemyAmmoManager = this.enemyAmmoManager;
            this.enemyAmmo = new objects.EnemyAmmo("Enemy_Shot");
            this.enemies = new Array();
            this.enemyNum = 1;
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
            //this.enemyAmmoManager.Update();
            this.ChangeShip();
            //this.Effect();
            this.enemies.forEach(function (e) {
                if (!e.isDead) {
                    e.Update();
                    e.FindPlayerAngle(_this.player);
                    if (!e.Shoot) {
                        var dTP = _this.player.y - e.y;
                        if (dTP < 200 || dTP > 300 && dTP < 400) {
                            e.ShootPlayer();
                            e.Update();
                            managers.Collision.CheckAABB(_this.player, _this.enemyAmmo);
                        }
                    }
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
        PlayScene.prototype.Effect = function () {
            var ticker = createjs.Ticker.getTicks();
            if (managers.Game.keyboardManager.shoot && (this.player.POWER >= 1 && this.player.POWER <= 3) && this.player.ShipType == config.Ship.Botcoin && (ticker % 10 == 0)) {
                this.effect = new objects.Effect("Laser_Shoot", this.player.x - 13, this.player.y - 43);
                this.effect.on("animationend", this.animationEnded);
                managers.Game.currentSceneObject.addChild(this.effect);
            }
        };
        PlayScene.prototype.animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        };
        PlayScene.prototype.ChangeShip = function () {
            var _this = this;
            var ticker = createjs.Ticker.getTicks();
            if (managers.Game.keyboardManager.swap && (ticker % 50 == 0)) {
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
                        break;
                }
            }
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map