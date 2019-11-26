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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(sprite, xPos, yPos, swapped) {
            var _this = _super.call(this, sprite) || this;
            // Variables
            _this.isDead = false;
            _this.isInvincible = false;
            _this.shootnum = 0;
            _this.y = yPos;
            _this.x = xPos;
            _this.swapped = swapped;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Player.prototype, "ShipType", {
            get: function () {
                return this.shipType;
            },
            set: function (type) {
                this.shipType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "POWER", {
            get: function () {
                return this.power;
            },
            set: function (num) {
                this.power = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "IsInvincible", {
            get: function () {
                return this.isInvincible;
            },
            set: function (i) {
                this.isInvincible = i;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        Player.prototype.Start = function () {
            this.Swapped();
        };
        Player.prototype.Update = function () {
            if (!this.isDead) {
                this.CheckBound(); // <-- Check collisions
                if (managers.Game.keyboardManager.enabled) {
                    this.Move();
                    this.Shoot();
                    this.Swapped();
                    if (managers.Game.hud.Power > 20)
                        this.ShootMissiles();
                }
                if (this.missile != undefined)
                    this.missile.Update();
            }
        };
        Player.prototype.Reset = function () {
            this.isDead = true;
            managers.Game.p1 = false;
            managers.Game.p2 = false;
            managers.Game.p3 = false;
            managers.Game.p4 = false;
            managers.Game.p5 = false;
            this.RespawnTimer();
        };
        Player.prototype.Move = function () {
            if (managers.Game.keyboardManager.moveLeft)
                this.x -= 4;
            if (managers.Game.keyboardManager.moveLeft && managers.Game.keyboardManager.shift)
                this.x += 2;
            if (!managers.Game.keyboardManager.moveLeft)
                this.x += 0;
            if (managers.Game.keyboardManager.moveRight)
                this.x += 4;
            if (managers.Game.keyboardManager.moveRight && managers.Game.keyboardManager.shift)
                this.x -= 2;
            if (!managers.Game.keyboardManager.moveRight)
                this.x += 0;
            if (managers.Game.keyboardManager.moveUp)
                this.y -= 4;
            if (managers.Game.keyboardManager.moveUp && managers.Game.keyboardManager.shift)
                this.y += 2;
            if (!managers.Game.keyboardManager.moveUp)
                this.y += 0;
            if (managers.Game.keyboardManager.moveDown)
                this.y += 4;
            if (managers.Game.keyboardManager.moveDown && managers.Game.keyboardManager.shift)
                this.y -= 2;
            if (!managers.Game.keyboardManager.moveDown)
                this.y += 0;
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= 710)
                this.x = 710;
            // Left boundary
            if (this.x <= 380)
                this.x = 380;
            if (this.y >= 600)
                this.y = 600;
            if (this.y <= this.halfH)
                this.y = this.halfH;
        };
        Player.prototype.Shoot = function () {
            var _this = this;
            if (!this.isDead || this.swapped) {
                var ticker = createjs.Ticker.getTicks();
                //if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                switch (this.ShipType) {
                    case config.Ship.Botcoin:
                        if (managers.Game.hud.Power < 40) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 40);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                var bullet = managers.Game.bulletManager.GetBullet();
                                //console.log(bullet);
                                bullet.x = this.bulletSpawn.x;
                                bullet.y = this.bulletSpawn.y;
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 7 == 0)) {
                                this.bulletSpawn = new math.Vec2(this.x - 13, this.y - 25);
                                this.effect = new objects.Effect("Laser3_Shoot", this.x - 9, this.y - 30);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 5 == 0)) {
                                this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
                                this.effect = new objects.Effect("Laser4_Shoot", this.x - 2, this.y - 23);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 160) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 2 == 0)) {
                                if (this.shootnum < 25) {
                                    this.bulletSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
                                    this.effect = new objects.Effect("Laser5_Shoot", this.x - 3, this.y - 20);
                                    var ammo = managers.Game.bulletManager.GetBullet();
                                    ammo.x = this.bulletSpawn.x;
                                    ammo.y = this.bulletSpawn.y;
                                    var laser = createjs.Sound.play("laser");
                                    laser.volume = 0.1;
                                    managers.Game.currentSceneObject.addChild(this.effect);
                                    this.shootnum++;
                                }
                                if (this.shootnum > 24) {
                                    var counter_1 = 1;
                                    var interval_1 = setInterval(function () {
                                        counter_1--;
                                        if (counter_1 < 0) {
                                            _this.shootnum = 0;
                                            clearInterval(interval_1);
                                            counter_1 = 0;
                                        }
                                    }, 500);
                                }
                            }
                        }
                        break;
                    case config.Ship.Lightcoin:
                        if (managers.Game.hud.Power < 40) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
                                this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                this.bulletSpawn = new math.Vec2(this.x - 7, this.y - 25);
                                this.effect = new objects.Effect("Laser1_Shoot", this.x - 13, this.y - 43);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                var ammo2 = managers.Game.bulletManager.GetBullet();
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                ammo2.x = this.x - 11;
                                ammo2.y = this.bulletSpawn.y;
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                var ammo2 = managers.Game.bulletManager.GetBullet();
                                var ammo3 = managers.Game.bulletManager.GetBullet();
                                ammo.x = this.x - 11;
                                ammo.y = this.y - 25;
                                // Right
                                ammo2.x = this.x - 11;
                                ammo2.y = this.y - 10;
                                ammo2.rotation = 45;
                                ammo2.Dir = new math.Vec2((120 * Math.cos(45)) * 0.2, -(15 * Math.sin(45)) * 0.1);
                                // Left
                                ammo3.x = this.x - 11;
                                ammo3.y = this.y - 10;
                                ammo3.rotation = -45;
                                ammo3.Dir = new math.Vec2(-(120 * Math.cos(45)) * 0.2, -(15 * Math.sin(45)) * 0.1);
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                var ammo2 = managers.Game.bulletManager.GetBullet();
                                var ammo3 = managers.Game.bulletManager.GetBullet();
                                var ammo4 = managers.Game.bulletManager.GetBullet();
                                var ammo5 = managers.Game.bulletManager.GetBullet();
                                var ammo6 = managers.Game.bulletManager.GetBullet();
                                ammo.x = this.x - 14;
                                ammo.y = this.y - 25;
                                ammo2.x = this.x - 7;
                                ammo2.y = this.y - 25;
                                // Right side
                                ammo3.x = this.x - 6;
                                ammo3.y = this.y - 16;
                                ammo3.rotation = 45;
                                ammo3.Dir = new math.Vec2((120 * Math.cos(45)) * 0.2, -(15 * Math.sin(45)) * 0.1);
                                ammo5.x = this.x - 10;
                                ammo5.y = this.y - 16;
                                ammo5.rotation = -60;
                                ammo5.Dir = new math.Vec2((120 * Math.cos(60)) * 0.2, -(15 * Math.sin(60)) * 0.1);
                                // Left Side
                                ammo4.x = this.x - 11;
                                ammo4.y = this.y - 20;
                                ammo4.rotation = -45;
                                ammo4.Dir = new math.Vec2(-(120 * Math.cos(45)) * 0.2, -(15 * Math.sin(45)) * 0.1);
                                ammo6.x = this.x - 11;
                                ammo6.y = this.y - 5;
                                ammo6.rotation = 60;
                                ammo6.Dir = new math.Vec2(-(120 * Math.cos(60)) * 0.2, -(15 * Math.sin(60)) * 0.1);
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        else if (managers.Game.hud.Power >= 160) {
                            if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                var ammo2 = managers.Game.bulletManager.GetBullet();
                                var ammo3 = managers.Game.bulletManager.GetBullet();
                                var ammo4 = managers.Game.bulletManager.GetBullet();
                                var ammo5 = managers.Game.bulletManager.GetBullet();
                                var ammo6 = managers.Game.bulletManager.GetBullet();
                                var ammo7 = managers.Game.bulletManager.GetBullet();
                                var ammo8 = managers.Game.bulletManager.GetBullet();
                                ammo.x = this.x - 14;
                                ammo.y = this.y - 25;
                                ammo2.x = this.x - 7;
                                ammo2.y = this.y - 25;
                                // 45
                                ammo3.x = this.x - 6;
                                ammo3.y = this.y - 16;
                                ammo3.rotation = 45;
                                ammo3.Dir = new math.Vec2((180 * Math.cos(45)) * 0.1, -(15 * Math.sin(45)) * 0.05);
                                ammo4.x = this.x - 11;
                                ammo4.y = this.y - 20;
                                ammo4.rotation = -45;
                                ammo4.Dir = new math.Vec2(-(180 * Math.cos(45)) * 0.1, -(15 * Math.sin(45)) * 0.05);
                                // 60
                                ammo5.x = this.x - 10;
                                ammo5.y = this.y - 16;
                                ammo5.rotation = -60;
                                ammo5.Dir = new math.Vec2((120 * Math.cos(60)) * 0.2, -(15 * Math.sin(60)) * 0.1);
                                ammo6.x = this.x - 11;
                                ammo6.y = this.y - 8;
                                ammo6.rotation = 60;
                                ammo6.Dir = new math.Vec2(-(120 * Math.cos(60)) * 0.2, -(15 * Math.sin(60)) * 0.1);
                                // 25
                                ammo7.x = this.x - 10;
                                ammo7.y = this.y - 16;
                                ammo7.rotation = 25;
                                ammo7.Dir = new math.Vec2((15 * Math.cos(25)) * 0.2, -(120 * Math.sin(25)) * 0.1);
                                ammo8.x = this.x - 10;
                                ammo8.y = this.y - 16;
                                ammo8.rotation = -25;
                                ammo8.Dir = new math.Vec2(-(15 * Math.cos(25)) * 0.2, -(120 * Math.sin(25)) * 0.1);
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                        }
                        break;
                    case config.Ship.Enderium:
                        if (managers.Game.hud.Power >= 0 && managers.Game.hud.Power < 40) {
                            this.bulletSpawn = new math.Vec2(this.x - 10.5, this.y - 45);
                            this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y - 41);
                            var ammo = managers.Game.bulletManager.GetBullet();
                            console.log(ammo);
                            ammo.x = this.bulletSpawn.x;
                            ammo.y = this.bulletSpawn.y;
                            managers.Game.currentSceneObject.addChild(this.effect);
                        }
                        else if (managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) {
                            this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 45);
                            this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y - 41);
                            var ammo = managers.Game.bulletManager.GetBullet();
                            console.log(ammo);
                            ammo.x = this.bulletSpawn.x;
                            ammo.y = this.bulletSpawn.y;
                            managers.Game.currentSceneObject.addChild(this.effect);
                        }
                        else if (managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) {
                            this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 35);
                            this.effect = new objects.Effect("Arc2_Shoot", this.x - 6.5, this.y - 28);
                            var ammo = managers.Game.bulletManager.GetBullet();
                            console.log(ammo);
                            ammo.x = this.bulletSpawn.x;
                            ammo.y = this.bulletSpawn.y;
                            managers.Game.currentSceneObject.addChild(this.effect);
                        }
                        else if (managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) {
                            this.bulletSpawn = new math.Vec2(this.x - 7, this.y - 45);
                            this.effect = new objects.Effect("Arc4_Shoot", this.x - 7, this.y - 29);
                            var ammo = managers.Game.bulletManager.GetBullet();
                            console.log(ammo);
                            ammo.x = this.bulletSpawn.x;
                            ammo.y = this.bulletSpawn.y;
                            managers.Game.currentSceneObject.addChild(this.effect);
                        }
                        else if (managers.Game.hud.Power >= 160) {
                            this.bulletSpawn = new math.Vec2(this.x + 4, this.y - 40);
                            this.effect = new objects.Effect("Arc5_Shoot", this.x, this.y - 21);
                            var ammo = managers.Game.bulletManager.GetBullet();
                            console.log(ammo);
                            ammo.x = this.bulletSpawn.x;
                            ammo.y = this.bulletSpawn.y;
                            managers.Game.currentSceneObject.addChild(this.effect);
                        }
                        break;
                }
                //}
            }
        };
        Player.prototype.ShootMissiles = function () {
            if (!this.isDead) {
                var ticker = createjs.Ticker.getTicks();
                if (managers.Game.keyboardManager.shoot && ticker % 40 == 0) {
                    if (this.shootnum < 1) {
                        for (var i = 0; i < 2; i++) {
                            var position = new math.Vec2(this.x - 15, this.y - 10);
                            //let enemyPos = new math.Vec2(enemy.x, enemy.y)
                            //let distance =  math.Vec2.Distance(enemyPos, position)
                            this.missile = managers.Game.missileManager.GetMissile();
                            this.missile.Angle = 0;
                            this.missile.AngleStep = (240 / 4) * this.shootnum;
                            this.missile.Angle += this.missile.AngleStep;
                            this.missile.Speed = 0.05;
                            this.missile.Dir = new math.Vec2((90 * Math.sin(this.missile.Angle) * this.missile.Speed,
                                (90 * Math.cos(this.missile.Angle) * this.missile.Speed)));
                            this.missile.x = position.x;
                            this.missile.y = position.y;
                            this.shootnum++;
                        }
                    }
                    if (this.shootnum > 1)
                        this.shootnum = 0;
                }
            }
        };
        Player.prototype.Swapped = function () {
            if (!this.swapped)
                this.shipType = config.Ship.Botcoin;
        };
        Player.prototype.RespawnTimer = function () {
            var _this = this;
            var counter = 2;
            this.alpha = 0;
            this.x = 555;
            this.y = 550;
            var interval = setInterval(function () {
                counter--;
                if (counter == 0) {
                    counter = 2;
                    if (managers.Game.hud.Lives < 0) {
                        managers.Game.over = true;
                        managers.Game.currentScene = config.Scene.OVER;
                    }
                    else {
                        _this.isDead = false;
                        _this.alpha = 1;
                        _this.InvincibilityTimer();
                    }
                    clearInterval(interval);
                }
            }, 1000);
        };
        Player.prototype.InvincibilityTimer = function () {
            var _this = this;
            this.isInvincible = true;
            var counter = 2;
            var interval = setInterval(function () {
                counter--;
                if (counter == 0) {
                    counter = 2;
                    _this.isInvincible = false;
                    clearInterval(interval);
                }
            }, 1000);
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map