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
            this.eBackground = new objects.Image("backgroundE", 712, 0);
            this.lBackground = new objects.Image("backgroundL", 0, 0);
            this.stageName = new objects.Label("Stage 1: Invasion", "36px", "OptimusPrinceps", "#FFFFFF", 530, 240, true);
            this.player = new objects.Player("Ship1", 555, 690, false, 1);
            this.aircraft = new objects.Image("aircraft", 418, 450);
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            //this.enemyAmmoManager = new managers.EnemyAmmo();
            //managers.Game.enemyAmmoManager = this.enemyAmmoManager;
            this.enemyAmmo = new objects.EnemyAmmo("Enemy6_Shot");
            this.eType3 = new Array();
            this.eType4 = new Array();
            this.eType5 = new Array();
            for (var i = 0; i < 5; i++) {
                this.eType3[i] = new objects.Enemy("Enemy3");
                this.eType4[i] = new objects.Enemy("Enemy4");
                this.eType5[i] = new objects.Enemy("Enemy5");
            }
            this.hudImage = new objects.Image("HUD", 342, 0);
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            managers.Game.hud.Lives = 3;
            managers.Game.hud.Bombs = 1;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.aircraft.y += 3;
            if (this.aircraft.y > 720) {
                this.removeChild(this.aircraft);
            }
            this.player.Update();
            this.IsPaused();
            this.ammoManager.Update();
            this.ChangeShip();
            //this.Effect();
            console.log(managers.Game.timer);
            if (managers.Game.timer <= 595) {
                this.removeChild(this.stageName);
                this.eType3.forEach(function (e) {
                    _this.addChild(e);
                    if (!e.isDead) {
                        e.Update();
                        e.FindPlayer(_this.player);
                        //managers.Collision.CheckAABB(this.player, e)
                    }
                });
                this.eType4.forEach(function (e) {
                    _this.addChild(e);
                    if (!e.isDead) {
                        e.Update();
                        e.FindPlayer(_this.player);
                        //managers.Collision.CheckAABB(this.player, e)
                    }
                });
                this.eType5.forEach(function (e) {
                    _this.addChild(e);
                    if (!e.isDead) {
                        e.Update();
                        e.FindPlayer(_this.player);
                        //managers.Collision.CheckAABB(this.player, e)
                    }
                });
            }
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.eType3.forEach(function (e) {
                    managers.Collision.CheckAABB(ammo, e);
                });
                _this.eType4.forEach(function (e) {
                    managers.Collision.CheckAABB(ammo, e);
                });
                _this.eType5.forEach(function (e) {
                    managers.Collision.CheckAABB(ammo, e);
                });
            });
            managers.Collision.CheckAABB(this.player, this.enemyAmmo);
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.eBackground);
            this.addChild(this.lBackground);
            this.addChild(this.aircraft);
            this.addChild(this.stageName);
            this.addChild(this.player);
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.addChild(ammo);
            });
            this.SpawnTimer();
            this.addChild(this.hudImage);
            this.addChild(this.hud);
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
        PlayScene.prototype.SpawnTimer = function () {
            managers.Game.timer = 600;
            var interval = setInterval(function () {
                managers.Game.timer--;
                if (managers.Game.timer < 0) {
                    clearInterval(interval);
                }
            }, 1000);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map