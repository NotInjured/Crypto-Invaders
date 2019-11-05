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
            this.stageName = new objects.Label("Stage 1: Invasion", "36px", "OptimusPrinceps", "#FFFFFF", 530, 240, true);
            this.player = new objects.Player("Ship1", 555, 690, false, 1);
            this.aircraft = new objects.Image("aircraft", 418, 450);
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            managers.Game.player = this.player;
            managers.Game.timer = 600;
            //this.eType2 = new objects.Enemy("Enemy2");
            this.eType1 = new Array();
            this.eType2 = new Array();
            this.eType3 = new Array();
            //managers.Game.eType2 =this.eType2;
            console.log(managers.Game.difficulty);
            switch (managers.Game.difficulty) {
                case 0:
                    for (var i = 0; i < 2; i++) {
                        this.eType1[i] = new objects.Enemy("Enemy1");
                        this.eType2[i] = new objects.Enemy("Enemy2");
                        this.eType3[i] = new objects.Enemy("Enemy3");
                    }
                    break;
                case 1:
                    for (var i = 0; i < 4; i++) {
                        this.eType1[i] = new objects.Enemy("Enemy1");
                        this.eType2[i] = new objects.Enemy("Enemy2");
                        this.eType3[i] = new objects.Enemy("Enemy3");
                    }
                    break;
                case 2:
                    for (var i = 0; i < 6; i++) {
                        this.eType1[i] = new objects.Enemy("Enemy1");
                        this.eType2[i] = new objects.Enemy("Enemy2");
                        this.eType3[i] = new objects.Enemy("Enemy3");
                    }
                    break;
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
            this.aircraft.y += 3;
            if (this.aircraft.y > 720) {
                this.removeChild(this.aircraft);
            }
            this.ammoManager.Update();
            console.log(managers.Game.timer);
            this.background.Update();
            this.player.Update();
            //this.ChangeShip();
            this.CheckCollisions();
            if (managers.Game.timer >= 598 && managers.Game.timer <= 600) {
                if (this.player.y > 550)
                    this.player.y -= 1;
            }
            if (managers.Game.timer >= 597 && managers.Game.timer <= 598) {
                if (this.player.y < 675)
                    this.player.y += 1;
            }
            if (managers.Game.timer <= 596) {
                this.addChild(this.stageName);
            }
            if (managers.Game.timer <= 591) {
                this.removeChild(this.stageName);
                this.eType1.forEach(function (e) {
                    if (!e.isDead) {
                        e.Update();
                        e.FindPlayer(_this.player);
                    }
                });
                this.eType2.forEach(function (e) {
                    if (!e.isDead) {
                        e.Update();
                        e.FindPlayer(_this.player);
                    }
                });
                this.eType3.forEach(function (e) {
                    if (!e.isDead) {
                        e.Update();
                        e.FindPlayer(_this.player);
                    }
                });
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.SpawnTimer();
            this.eType1.forEach(function (e) {
                _this.addChild(e);
            });
            this.eType2.forEach(function (e) {
                _this.addChild(e);
            });
            this.eType3.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.aircraft);
            this.addChild(this.player);
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.addChild(ammo);
            });
            this.addChild(this.hudImage);
            this.addChild(this.hud);
        };
        PlayScene.prototype.CheckCollisions = function () {
            var _this = this;
            this.ammoManager.Ammo.forEach(function (ammo) {
                _this.eType1.forEach(function (e) {
                    managers.Collision.CheckAABB(ammo, e);
                });
                _this.eType2.forEach(function (e) {
                    managers.Collision.CheckAABB(ammo, e);
                });
                _this.eType3.forEach(function (e) {
                    managers.Collision.CheckAABB(ammo, e);
                });
            });
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