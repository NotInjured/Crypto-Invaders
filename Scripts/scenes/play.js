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
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("bgm2");
            this.bgm.loop = -1;
            this.bgm.volume = 0.05;
            this.stageName = new objects.Label("Stage 1: Invasion", "36px", "OptimusPrinceps", "#FFFFFF", 530, 240, true);
            this.player = new objects.Player("Ship1", 555, 690, false, 1);
            this.aircraft = new objects.Image("aircraft", 418, 450);
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;
            this.enemyBulletManager = new managers.EnemyBullet();
            managers.Game.enemyBulletManager = this.enemyBulletManager;
            managers.Game.player = this.player;
            managers.Game.timer = 600;
            this.eType1 = new Array();
            this.eType2 = new Array();
            this.eType3 = new Array();
            this.eBoss1 = new objects.Enemy("Enemy4");
            managers.Game.eType2 = this.eBoss1;
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
            if (managers.Game.normal) {
                managers.Game.hud.Lives = 9;
                managers.Game.hud.Bombs = 1;
            }
            if (managers.Game.hard) {
                managers.Game.hud.Lives = 6;
                managers.Game.hud.Bombs = 1;
            }
            if (managers.Game.hell) {
                managers.Game.hud.Lives = 3;
                managers.Game.hud.Bombs = 1;
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            managers.Game.highscore = this.hud.Score;
            this.aircraft.y += 3;
            if (this.aircraft.y > 720) {
                this.removeChild(this.aircraft);
            }
            this.bulletManager.Update();
            this.enemyBulletManager.Update();
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
            if (managers.Game.timer > 591 && managers.Game.timer <= 596) {
                this.addChild(this.stageName);
            }
            if (managers.Game.timer <= 591) {
                this.removeChild(this.stageName);
                /*
                this.addChild(this.eBoss1)
                if(!this.eBoss1.isDead){
                    this.eBoss1.FindPlayer(this.player)
                    this.eBoss1.Update();
                }*/
                this.eType1.forEach(function (e) {
                    if (!e.isDead) {
                        e.isInvincible = false;
                        e.Update();
                        e.FindPlayer(_this.player);
                    }
                });
            }
            if (managers.Game.timer > 481 && managers.Game.timer <= 581) {
                this.eType2.forEach(function (e) {
                    if (!e.isDead) {
                        e.isInvincible = false;
                        e.Update();
                        e.FindPlayer(_this.player);
                    }
                });
            }
            if (managers.Game.timer > 481 && managers.Game.timer <= 576) {
                this.eType3.forEach(function (e) {
                    if (!e.isDead) {
                        e.isInvincible = false;
                        e.Update();
                        e.FindPlayer(_this.player);
                    }
                });
            }
            if (managers.Game.timer < 481) {
                this.eType1.forEach(function (e) {
                    e.Reset();
                });
                this.eType2.forEach(function (e) {
                    e.Reset();
                });
                this.eType3.forEach(function (e) {
                    e.Reset();
                });
            }
            if (managers.Game.timer == 480) {
                createjs.Sound.stop();
                this.bgm = createjs.Sound.play("bossMusic");
                this.bgm.loop = -1;
                this.bgm.volume = 0.05;
            }
            if (managers.Game.timer < 479) {
                this.addChild(this.eBoss1);
                this.background.y += 0;
                if (!this.eBoss1.isDead) {
                    this.eBoss1.FindPlayer(this.player);
                    this.eBoss1.Update();
                }
            }
            if (managers.Game.boss1Hp < 0) {
                this.removeChild(this.eBoss1);
                this.eBoss1.isInvincible = true;
                this.eBoss1.isDead = true;
                this.WaitTimer();
            }
            if (managers.Game.hud.Lives < 0) {
                managers.Game.currentScene = config.Scene.OVER;
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.SpawnTimer();
            this.eType1.forEach(function (e) {
                _this.addChild(e);
                e.isInvincible = true;
            });
            this.eType2.forEach(function (e) {
                _this.addChild(e);
                e.isInvincible = true;
            });
            this.eType3.forEach(function (e) {
                _this.addChild(e);
                e.isInvincible = true;
            });
            this.bulletManager.Bullet.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.enemyBulletManager.Bullet.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.addChild(this.hudImage);
            this.addChild(this.hud);
            this.addChild(this.aircraft);
            this.addChild(this.player);
        };
        PlayScene.prototype.CheckCollisions = function () {
            var _this = this;
            this.bulletManager.Bullet.forEach(function (bullet) {
                _this.eType1.forEach(function (e) {
                    if (!e.isInvincible) {
                        managers.Collision.CheckAABB(bullet, e);
                        managers.Collision.CheckAABB(e, _this.player);
                    }
                });
                _this.eType2.forEach(function (e) {
                    if (!e.isInvincible) {
                        managers.Collision.CheckAABB(bullet, e);
                        managers.Collision.CheckAABB(e, _this.player);
                    }
                });
                _this.eType3.forEach(function (e) {
                    if (!e.isInvincible) {
                        managers.Collision.CheckAABB(bullet, e);
                        managers.Collision.CheckAABB(e, _this.player);
                    }
                });
                if (!_this.eBoss1.isInvincible && !managers.Game.boss1IsDead)
                    managers.Collision.CheckAABB(bullet, _this.eBoss1);
            });
            this.enemyBulletManager.Bullet.forEach(function (b) {
                managers.Collision.CheckAABB(b, _this.player);
            });
        };
        PlayScene.prototype.ChangeShip = function () {
            var _this = this;
            var ticker = createjs.Ticker.getTicks();
            if (managers.Game.keyboardManager.swap && (ticker % 50 == 0)) {
                var playerPosX = this.player.x;
                var playerPosY = this.player.y;
                this.removeChild(this.player);
                this.bulletManager.Bullet.forEach(function (ammo) {
                    _this.removeChild(ammo);
                });
                switch (this.player.ShipType) {
                    case config.Ship.Botcoin:
                        this.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY, true, this.player.POWER));
                        this.player.ShipType = config.Ship.Lightcoin;
                        console.log("Changing to Lightcoin Ship");
                        console.log(this.player.ShipType);
                        this.bulletManager.buildBulletPool(this.player.ShipType, this.player.POWER);
                        this.bulletManager.Bullet.forEach(function (bullet) {
                            _this.addChild(bullet);
                        });
                        break;
                    case config.Ship.Lightcoin:
                        this.addChild(this.player = new objects.Player("Ship3", playerPosX, playerPosY, true, this.player.POWER));
                        this.player.ShipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");
                        console.log(this.player.ShipType);
                        this.bulletManager.buildBulletPool(this.player.ShipType, this.player.POWER);
                        this.bulletManager.Bullet.forEach(function (bullet) {
                            _this.addChild(bullet);
                        });
                        break;
                    case config.Ship.Enderium:
                        this.addChild(this.player = new objects.Player("Ship1", playerPosX, playerPosY, true, this.player.POWER));
                        this.player.ShipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");
                        console.log(this.player.ShipType);
                        this.bulletManager.buildBulletPool(this.player.ShipType, this.player.POWER);
                        this.bulletManager.Bullet.forEach(function (bullet) {
                            _this.addChild(bullet);
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
        PlayScene.prototype.WaitTimer = function () {
            var counter = 2;
            var interval = setInterval(function () {
                counter--;
                if (counter < 0) {
                    clearInterval(interval);
                    managers.Game.boss1IsDead = true;
                    managers.Game.currentScene = config.Scene.OVER;
                }
            }, 1000);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map