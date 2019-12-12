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
            this.background.y = -32500;
            this.aircraft = new objects.Image("aircraft", 418, 350);
            this.stageName = new objects.Label("Stage 1: Invasion", "36px", "OptimusPrinceps", "#FFFFFF", 530, 240, true);
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("bgm2");
            this.bgm.loop = -1;
            this.bgm.volume = 0.05;
            this.Splayer = new objects.Player("Ship1", 555, 570, false);
            this.eliteUnits = [];
            this.level1Enemies = [];
            this.level2Enemies = [];
            this.level3Enemies = [];
            this.bosses = new Array();
            this.bosses[0] = new objects.Enemy("Enemy4");
            this.bosses[1] = new objects.Enemy("Destroyer");
            this.bosses[2] = new objects.Enemy("F5S2");
            this.bosses[3] = new objects.Enemy("F5S4");
            this.bosses.forEach(function (e) {
                e.isDead = false;
                e.isInvincible = false;
            });
            this.shields = new Array();
            this.shields[0] = new objects.Sprite("Shield", this.Splayer.x + 20, this.Splayer.y - 5);
            this.shields[0].alpha = 0;
            this.shields[0].scaleX = 0.6;
            this.shields[0].scaleY = 0.6;
            this.shields[1] = new objects.Sprite("Shield", this.bosses[2].x + 20, this.bosses[2].y - 5);
            this.shields[2] = new objects.Sprite("Shield", this.bosses[3].x + 20, this.bosses[3].y - 5);
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;
            this.enemyBulletManager = new managers.EnemyBullet();
            managers.Game.enemyBulletManager = this.enemyBulletManager;
            this.coinsManager = new managers.Coins();
            managers.Game.coinsManager = this.coinsManager;
            this.missileManager = new managers.Missile();
            managers.Game.missileManager = this.missileManager;
            managers.Game.player = this.Splayer;
            managers.Game.timer = 600;
            managers.Game.boss1Hp = 5;
            managers.Game.boss2Hp = 300;
            managers.Game.boss3_1Hp = 250;
            managers.Game.boss3_2Hp = 250;
            managers.Game.eEliteHp = 25;
            managers.Game.eMinionHp = 10;
            managers.Game.level1 = true;
            managers.Game.level2 = false;
            managers.Game.level3 = false;
            managers.Game.level1Completed = false;
            managers.Game.level2Completed = false;
            managers.Game.level3Completed = false;
            managers.Game.boss1IsDead = false;
            managers.Game.boss2IsDead = false;
            managers.Game.boss3_1IsDead = false;
            managers.Game.boss3_2IsDead = false;
            switch (managers.Game.difficulty) {
                case 0:
                    for (var i = 0; i < 3; i++) {
                        this.level1Enemies[i] = [];
                        this.level2Enemies[i] = [];
                        this.level3Enemies[i] = [];
                        for (var j = 0; j < 2; j++) {
                            if (i == 0) {
                                this.level1Enemies[0][j] = new objects.Enemy("Enemy1");
                                this.level2Enemies[0][j] = new objects.Enemy("Enemy7");
                                this.level3Enemies[0][j] = new objects.Enemy("Enemy10");
                            }
                            if (i == 1) {
                                this.level1Enemies[1][j] = new objects.Enemy("Enemy2");
                                this.level2Enemies[1][j] = new objects.Enemy("Enemy8");
                                this.level3Enemies[1][j] = new objects.Enemy("Enemy11");
                            }
                            if (i == 2) {
                                this.level1Enemies[2][j] = new objects.Enemy("Enemy3");
                                this.level2Enemies[2][j] = new objects.Enemy("Enemy9");
                                this.level3Enemies[2][j] = new objects.Enemy("Enemy12");
                            }
                        }
                    }
                    for (var i = 0; i < 8; i++) {
                        this.eliteUnits[i] = [];
                        for (var j = 0; j < 3; j++) {
                            this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                            this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                            this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
                            this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25;
                            this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25;
                        }
                    }
                    break;
                case 1:
                    for (var i = 0; i < 3; i++) {
                        this.level1Enemies[i] = [];
                        this.level2Enemies[i] = [];
                        this.level3Enemies[i] = [];
                        for (var j = 0; j < 2; j++) {
                            if (i == 0) {
                                this.level1Enemies[0][j] = new objects.Enemy("Enemy1");
                                this.level2Enemies[0][j] = new objects.Enemy("Enemy7");
                                this.level3Enemies[0][j] = new objects.Enemy("Enemy10");
                            }
                            if (i == 1) {
                                this.level1Enemies[1][j] = new objects.Enemy("Enemy2");
                                this.level2Enemies[1][j] = new objects.Enemy("Enemy8");
                                this.level3Enemies[1][j] = new objects.Enemy("Enemy11");
                            }
                            if (i == 2) {
                                this.level1Enemies[2][j] = new objects.Enemy("Enemy3");
                                this.level2Enemies[2][j] = new objects.Enemy("Enemy9");
                                this.level3Enemies[2][j] = new objects.Enemy("Enemy12");
                            }
                        }
                    }
                    for (var i = 0; i < 2; i++) {
                        this.eliteUnits[i] = [];
                        for (var j = 0; j < 3; j++) {
                            this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                            this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                            this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
                            this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25;
                            this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25;
                        }
                    }
                    break;
                case 2:
                    for (var i = 0; i < 3; i++) {
                        this.level1Enemies[i] = [];
                        this.level2Enemies[i] = [];
                        this.level3Enemies[i] = [];
                        for (var j = 0; j < 2; j++) {
                            if (i == 0) {
                                this.level1Enemies[0][j] = new objects.Enemy("Enemy1");
                                this.level2Enemies[0][j] = new objects.Enemy("Enemy7");
                                this.level3Enemies[0][j] = new objects.Enemy("Enemy10");
                            }
                            if (i == 1) {
                                this.level1Enemies[1][j] = new objects.Enemy("Enemy2");
                                this.level2Enemies[1][j] = new objects.Enemy("Enemy8");
                                this.level3Enemies[1][j] = new objects.Enemy("Enemy11");
                            }
                            if (i == 2) {
                                this.level1Enemies[2][j] = new objects.Enemy("Enemy3");
                                this.level2Enemies[2][j] = new objects.Enemy("Enemy9");
                                this.level3Enemies[2][j] = new objects.Enemy("Enemy12");
                            }
                        }
                    }
                    for (var i = 0; i < 8; i++) {
                        this.eliteUnits[i] = [];
                        for (var j = 0; j < 3; j++) {
                            this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                            this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                            this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
                            this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25;
                            this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25;
                        }
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
            this.hud.Update();
            this.aircraft.y += 3;
            if (this.aircraft.y > 600)
                this.removeChild(this.aircraft);
            this.bulletManager.Update();
            this.missileManager.Update();
            this.enemyBulletManager.Update();
            this.coinsManager.Coin.forEach(function (coin) {
                if (coin.IsDropped) {
                    coin.FindPlayer(_this.Splayer);
                    coin.Update();
                }
            });
            console.log(managers.Game.timer);
            this.background.Update();
            this.Splayer.Update();
            if (this.Splayer.IsInvincible) {
                this.shields[0].x = this.Splayer.x + 20;
                this.shields[0].y = this.Splayer.y + 10;
                this.shields[0].alpha = 1;
            }
            if (!this.Splayer.IsInvincible)
                this.shields[0].alpha = 0;
            if (!this.Splayer.isDead) {
                if (managers.Game.hud.Power < 40 && !managers.Game.p1) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                    managers.Game.p1 = true;
                }
                if ((managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) && !managers.Game.p2) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                    managers.Game.p2 = true;
                }
                if ((managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) && !managers.Game.p3) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                    managers.Game.p3 = true;
                }
                if ((managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) && !managers.Game.p4) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                    managers.Game.p4 = true;
                }
                if (managers.Game.hud.Power >= 160 && !managers.Game.p5) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                    managers.Game.p5 = true;
                }
            }
            if (this.Splayer.isDead) {
                if (managers.Game.hud.Power >= 0 && managers.Game.hud.Power < 40) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                }
                if (managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                }
                if (managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                }
                if (managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                }
                if (managers.Game.hud.Power >= 160) {
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType);
                    this.bulletManager.Bullet.forEach(function (bullet) {
                        _this.addChild(bullet);
                    });
                }
            }
            this.ChangeShip();
            this.CheckCollisions();
            if (managers.Game.level1) {
                if (managers.Game.timer >= 598 && managers.Game.timer <= 600) {
                    if (this.Splayer.y > 450)
                        this.Splayer.y -= 1;
                }
                if (managers.Game.timer >= 597 && managers.Game.timer <= 598) {
                    if (this.Splayer.y < 550)
                        this.Splayer.y += 1;
                }
                if (managers.Game.timer > 591 && managers.Game.timer <= 596) {
                    this.addChild(this.stageName);
                }
                if (managers.Game.timer >= 481 && managers.Game.timer <= 591) {
                    //if(managers.Game.timer <= 591){
                    this.removeChild(this.stageName);
                    /*
                    this.level1Enemies[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })*/
                    if (!this.bosses[0].isDead) {
                        this.bosses[0].isInvincible = false;
                        this.bosses[0].FindPlayer(this.Splayer);
                        this.bosses[0].Update();
                        this.missileManager.Missile.forEach(function (m) {
                            m.FindEnemies(_this.bosses[0]);
                        });
                    } /*
                    
                    this.eliteUnits[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.Splayer);
                            
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })
                    
                    if(!this.bosses[2].isDead){
                        this.bosses[2].isInvincible = false
                        this.bosses[2].FindPlayer(this.Splayer)
                        this.bosses[2].Update();

                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.bosses[2])
                        })
                    }
                    if(!this.bosses[3].isDead){
                        this.bosses[3].isInvincible = false
                        this.bosses[3].FindPlayer(this.Splayer)
                        this.bosses[3].Update();

                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.bosses[3])
                        })
                    }*/
                } /*
                if(managers.Game.timer >= 481 && managers.Game.timer <= 581){
                    this.level1Enemies[1].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.Splayer);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })

                    this.eliteUnits[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.Splayer);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })

                }

                if(managers.Game.timer >= 481 && managers.Game.timer <= 576){
                    this.level1Enemies[2].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.Splayer);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })
                }

                if(managers.Game.timer >= 481 && managers.Game.timer <= 536){
                    this.eliteUnits[1].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })
                }

                if(managers.Game.timer < 481){
                    this.level1Enemies[0].forEach(e =>{
                        e.y += 10;
                    })
                    this.level1Enemies[1].forEach(e =>{
                        e.x -= 10;
                    })
                    this.level1Enemies[2].forEach(e =>{
                        e.y -= 10;
                    })
                }

                if(managers.Game.timer == 480){
                    createjs.Sound.stop();
                    this.bgm = createjs.Sound.play("bossMusic");
                    this.bgm.loop = -1;
                    this.bgm.volume = 0.05;
                }

                if(managers.Game.timer < 479){
                    this.bosses[0].isInvincible = false
                    this.background.y += 0;
                    if(!this.bosses[0].isDead){
                        this.bosses[0].FindPlayer(this.Splayer)
                        this.bosses[0].Update();
                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.bosses[0])
                        })
                    }
                }*/
                if (managers.Game.boss1Hp == 0) {
                    this.removeChild(this.bosses[0]);
                    this.bosses[0].isInvincible = true;
                    this.bosses[0].isDead = true;
                    managers.Game.boss1IsDead = true;
                    this.bosses[0].DropCoins(50);
                    var counter_1 = 5;
                    var interval_1 = setInterval(function () {
                        counter_1--;
                        if (counter_1 < 0) {
                            clearInterval(interval_1);
                            //this.player.alpha = 0
                            managers.Game.level1Completed = true;
                        }
                    }, 1000);
                }
            }
            if (managers.Game.level2) {
                if (managers.Game.timer == 600) {
                    createjs.Sound.stop();
                    this.bgm = createjs.Sound.play("bgm3");
                    this.bgm.loop = -1;
                    this.bgm.volume = 0.05;
                }
                if (managers.Game.timer > 595 && managers.Game.timer <= 599) {
                    this.stageName.text = "Stage 2: HQ";
                    this.stageName.x = 575;
                    this.addChild(this.stageName);
                }
                if (managers.Game.timer > 505 && managers.Game.timer < 595) {
                    this.removeChild(this.stageName);
                    /*
                    if(!this.bosses[1].isDead){
                        this.bosses[1].isInvincible = false
                        this.bosses[1].FindPlayer(this.player)
                        this.bosses[1].Update()

                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.bosses[1])
                        })
                    }*/
                    this.level2Enemies[2].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer > 505 && managers.Game.timer < 590) {
                    this.level2Enemies[1].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                    this.eliteUnits[2].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer > 505 && managers.Game.timer < 585) {
                    this.level2Enemies[0].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer > 505 && managers.Game.timer < 550) {
                    this.eliteUnits[3].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer < 504) {
                    this.level2Enemies[0].forEach(function (e) {
                        e.y -= 10;
                    });
                    this.level2Enemies[1].forEach(function (e) {
                        e.x += 10;
                    });
                    this.level2Enemies[2].forEach(function (e) {
                        e.y += 10;
                    });
                }
                if (managers.Game.timer == 504) {
                    createjs.Sound.stop();
                    this.bgm = createjs.Sound.play("bossMusic");
                    this.bgm.loop = -1;
                    this.bgm.volume = 0.05;
                }
                if (managers.Game.timer < 503) {
                    if (!this.bosses[1].isDead) {
                        this.bosses[1].isInvincible = false;
                        this.bosses[1].FindPlayer(this.Splayer);
                        this.bosses[1].Update();
                        this.missileManager.Missile.forEach(function (m) {
                            m.FindEnemies(_this.bosses[1]);
                        });
                    }
                }
                if (managers.Game.boss2Hp == 0) {
                    this.removeChild(this.bosses[1]);
                    this.bosses[1].isInvincible = true;
                    this.bosses[1].isDead = true;
                    managers.Game.boss2IsDead = true;
                    this.bosses[1].DropCoins(50);
                    var counter2_1 = 5;
                    var interval_2 = setInterval(function () {
                        counter2_1--;
                        if (counter2_1 < 0) {
                            clearInterval(interval_2);
                            managers.Game.level2Completed = true;
                        }
                    }, 1000);
                }
            }
            if (managers.Game.level3) {
                if (managers.Game.timer == 600) {
                    createjs.Sound.stop();
                    this.bgm = createjs.Sound.play("bgm");
                    this.bgm.loop = -1;
                    this.bgm.volume = 0.05;
                }
                if (managers.Game.timer > 595 && managers.Game.timer <= 599) {
                    this.stageName.text = "Stage 3: Journey";
                    this.stageName.x = 525;
                    this.addChild(this.stageName);
                }
                if (managers.Game.timer >= 505 && managers.Game.timer < 595) {
                    this.removeChild(this.stageName);
                    /*
                    if(!this.bosses[2].isDead){
                        this.bosses[2].isInvincible = false
                        this.bosses[2].FindPlayer(this.player)
                        this.bosses[2].Update();

                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.bosses[2])
                        })
                    }
                    if(!this.bosses[3].isDead){
                        this.bosses[3].isInvincible = false
                        this.bosses[3].FindPlayer(this.player)
                        this.bosses[3].Update();

                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.bosses[3])
                        })
                    }*/
                    this.level3Enemies[1].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                    this.eliteUnits[4].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer >= 505 && managers.Game.timer < 590) {
                    this.level3Enemies[0].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer >= 505 && managers.Game.timer < 587) {
                    this.eliteUnits[4].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer >= 505 && managers.Game.timer < 585) {
                    this.level3Enemies[2].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer >= 505 && managers.Game.timer < 565) {
                    this.eliteUnits[3].forEach(function (e) {
                        if (!e.isDead) {
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(_this.Splayer);
                            _this.missileManager.Missile.forEach(function (m) {
                                m.FindEnemies(e);
                            });
                        }
                    });
                }
                if (managers.Game.timer < 506) {
                    this.level3Enemies[0].forEach(function (e) {
                        e.y -= 10;
                    });
                    this.level3Enemies[1].forEach(function (e) {
                        e.x += 10;
                    });
                    this.level3Enemies[2].forEach(function (e) {
                        e.y += 10;
                    });
                }
                if (managers.Game.timer == 505) {
                    createjs.Sound.stop();
                    this.bgm = createjs.Sound.play("bossMusic");
                    this.bgm.loop = -1;
                    this.bgm.volume = 0.05;
                }
                if (managers.Game.timer < 504) {
                    if (!this.bosses[2].isDead) {
                        this.bosses[2].isInvincible = false;
                        this.bosses[2].FindPlayer(this.Splayer);
                        this.bosses[2].Update();
                        this.missileManager.Missile.forEach(function (m) {
                            m.FindEnemies(_this.bosses[2]);
                        });
                    }
                    if (!this.bosses[3].isDead) {
                        this.bosses[3].isInvincible = false;
                        this.bosses[3].FindPlayer(this.Splayer);
                        this.bosses[3].Update();
                        this.missileManager.Missile.forEach(function (m) {
                            m.FindEnemies(_this.bosses[3]);
                        });
                    }
                }
                if (managers.Game.boss3_1Hp == 0) {
                    this.removeChild(this.bosses[2]);
                    this.bosses[2].isInvincible = true;
                    this.bosses[2].isDead = true;
                    managers.Game.boss3_1IsDead = true;
                    this.bosses[2].DropCoins(50);
                }
                if (managers.Game.boss3_2Hp == 0) {
                    this.bosses[3].isInvincible = true;
                    this.bosses[3].isDead = true;
                    managers.Game.boss3_2IsDead = true;
                    this.bosses[3].DropCoins(50);
                }
                if ((managers.Game.boss3_1Hp == 0 ||
                    (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)) &&
                    (managers.Game.boss3_2Hp == 0 ||
                        (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0))) {
                    var counter_2 = 5;
                    var interval_3 = setInterval(function () {
                        counter_2--;
                        if (counter_2 < 0) {
                            clearInterval(interval_3);
                            managers.Game.level3Completed = true;
                        }
                    }, 1000);
                }
            }
            if (managers.Game.hud.Lives < 0) {
                managers.Game.currentScene = config.Scene.OVER;
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.aircraft);
            this.GameTimer();
            this.level1Enemies.forEach(function (e) {
                e.forEach(function (f) {
                    _this.addChild(f);
                });
            });
            this.level2Enemies.forEach(function (e) {
                e.forEach(function (f) {
                    _this.addChild(f);
                });
            });
            this.level3Enemies.forEach(function (e) {
                e.forEach(function (f) {
                    _this.addChild(f);
                });
            });
            this.eliteUnits.forEach(function (e) {
                e.forEach(function (f) {
                    _this.addChild(f);
                });
            });
            this.bosses.forEach(function (e) {
                _this.addChild(e);
            });
            this.bulletManager.Bullet.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.missileManager.Missile.forEach(function (m) {
                _this.addChild(m);
            });
            this.addChild(this.Splayer);
            this.shields.forEach(function (s) {
                _this.addChild(s);
            });
            this.enemyBulletManager.Bullet.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            //this.coinsManager.Coin.forEach(coin =>{
            //    this.addChild(coin)
            //})
            this.addChild(this.hudImage);
            this.addChild(this.hud);
            //this.addChild(this.testEnemyBullet)
            //this.addChild(this.testCoin)
        };
        PlayScene.prototype.CheckCollisions = function () {
            var _this = this;
            this.bulletManager.Bullet.forEach(function (bullet) {
                if (bullet.y > 0) {
                    _this.level1Enemies.forEach(function (e) {
                        e.forEach(function (f) {
                            if (!f.isInvincible && f.y > 0) {
                                managers.Collision.CheckAABB(bullet, f);
                                managers.Collision.CheckAABB(f, _this.Splayer);
                            }
                        });
                    });
                    _this.level2Enemies.forEach(function (e) {
                        e.forEach(function (f) {
                            if (!f.isInvincible && f.y > 0) {
                                managers.Collision.CheckAABB(bullet, f);
                                managers.Collision.CheckAABB(f, _this.Splayer);
                            }
                        });
                    });
                    _this.level3Enemies.forEach(function (e) {
                        e.forEach(function (f) {
                            if (!f.isInvincible && f.y > 0) {
                                managers.Collision.CheckAABB(bullet, f);
                                managers.Collision.CheckAABB(f, _this.Splayer);
                            }
                        });
                    });
                    _this.eliteUnits.forEach(function (e) {
                        e.forEach(function (f) {
                            if (!f.isInvincible && f.y > 0) {
                                managers.Collision.CheckAABB(bullet, f);
                                managers.Collision.CheckAABB(f, _this.Splayer);
                            }
                        });
                    });
                    _this.bosses.forEach(function (e) {
                        if (!e.isInvincible && !managers.Game.boss1IsDead)
                            managers.Collision.CheckAABB(bullet, e);
                        if (!e.isInvincible && !managers.Game.boss2IsDead)
                            managers.Collision.CheckAABB(bullet, e);
                        if (!e.isInvincible && !managers.Game.boss3_1IsDead)
                            managers.Collision.CheckAABB(bullet, e);
                        if (!e.isInvincible && !managers.Game.boss3_2IsDead)
                            managers.Collision.CheckAABB(bullet, e);
                    });
                    _this.shields.forEach(function (s) {
                        managers.Collision.CheckAABB(bullet, s);
                    });
                }
            });
            this.missileManager.Missile.forEach(function (m) {
                _this.level1Enemies.forEach(function (e) {
                    e.forEach(function (f) {
                        if (!f.isInvincible) {
                            managers.Collision.CheckAABB(m, f);
                        }
                    });
                });
                _this.level2Enemies.forEach(function (e) {
                    e.forEach(function (f) {
                        if (!f.isInvincible) {
                            managers.Collision.CheckAABB(m, f);
                        }
                    });
                });
                _this.level3Enemies.forEach(function (e) {
                    e.forEach(function (f) {
                        if (!f.isInvincible) {
                            managers.Collision.CheckAABB(m, f);
                        }
                    });
                });
                _this.eliteUnits.forEach(function (e) {
                    e.forEach(function (f) {
                        if (!f.isInvincible) {
                            managers.Collision.CheckAABB(m, f);
                        }
                    });
                });
                _this.bosses.forEach(function (e) {
                    if (!e.isInvincible && !managers.Game.boss1IsDead)
                        managers.Collision.CheckAABB(m, e);
                    if (!e.isInvincible && !managers.Game.boss2IsDead)
                        managers.Collision.CheckAABB(m, e);
                    if (!e.isInvincible && !managers.Game.boss3_1IsDead)
                        managers.Collision.CheckAABB(m, e);
                    if (!e.isInvincible && !managers.Game.boss3_2IsDead)
                        managers.Collision.CheckAABB(m, e);
                });
            });
            this.coinsManager.Coin.forEach(function (c) {
                managers.Collision.CheckAABB(_this.Splayer, c);
            });
            this.enemyBulletManager.Bullet.forEach(function (b) {
                if (!_this.Splayer.IsInvincible && !_this.Splayer.isDead)
                    managers.Collision.CheckAABB(b, _this.Splayer);
                if (_this.Splayer.IsInvincible)
                    managers.Collision.CheckAABB(b, _this.shields[0]);
            });
            //managers.Collision.CheckAABB(this.testEnemyBullet, this.player)
        };
        PlayScene.prototype.ChangeShip = function () {
            var _this = this;
            var ticker = createjs.Ticker.getTicks();
            if (managers.Game.single) {
                if (managers.Game.keyboardManager.Sswap && (ticker % 50 == 0)) {
                    var playerPosX = this.Splayer.x;
                    var playerPosY = this.Splayer.y;
                    this.removeChild(this.Splayer);
                    this.bulletManager.Bullet.forEach(function (ammo) {
                        _this.removeChild(ammo);
                    });
                    switch (this.Splayer.ShipType) {
                        case config.Ship.Botcoin:
                            this.addChild(this.Splayer = new objects.Player("Ship2", playerPosX, playerPosY, true));
                            this.Splayer.ShipType = config.Ship.Lightcoin;
                            this.bulletManager.buildBulletPool(this.Splayer.ShipType);
                            this.bulletManager.Bullet.forEach(function (bullet) {
                                _this.addChild(bullet);
                            });
                            break;
                        case config.Ship.Lightcoin:
                            this.addChild(this.Splayer = new objects.Player("Ship1", playerPosX, playerPosY, true));
                            this.Splayer.ShipType = config.Ship.Botcoin;
                            this.bulletManager.buildBulletPool(this.Splayer.ShipType);
                            this.bulletManager.Bullet.forEach(function (bullet) {
                                _this.addChild(bullet);
                            });
                            break;
                    }
                }
            }
        };
        PlayScene.prototype.GameTimer = function () {
            var interval = setInterval(function () {
                managers.Game.timer--;
                if (managers.Game.timer < 0 || managers.Game.currentScene == config.Scene.START) {
                    clearInterval(interval);
                }
            }, 1000);
        };
        PlayScene.prototype.SpawnTimer = function () {
            var counter = 1;
            var interval = setInterval(function () {
                counter--;
                if (counter < 0) {
                    clearInterval(interval);
                }
            }, 1000);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map