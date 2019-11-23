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
        function Player(sprite, xPos, yPos, swapped, power) {
            var _this = _super.call(this, sprite) || this;
            // Variables
            _this.isDead = false;
            _this.isInvincible = false;
            _this.shootnum = 0;
            _this.y = yPos;
            _this.x = xPos;
            _this.swapped = swapped;
            _this.power = power;
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
                this.Move();
                this.CheckBound(); // <-- Check collisions
                this.Shoot();
                this.Swapped();
                if (managers.Game.numOfMissiles > 0)
                    this.ShootMissiles();
                if (this.missile != undefined)
                    this.missile.Update();
            }
        };
        Player.prototype.Reset = function () {
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
            if (this.y >= 720)
                this.y = 720;
            if (this.y <= this.halfH)
                this.y = this.halfH;
        };
        Player.prototype.Shoot = function () {
            if (!this.isDead || this.swapped) {
                var ticker = createjs.Ticker.getTicks();
                if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    switch (this.ShipType) {
                        case config.Ship.Botcoin:
                            if (this.POWER >= 1 && this.POWER <= 3) {
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
                            else if (this.POWER >= 4 && this.POWER <= 5) {
                                this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 6 && this.POWER <= 7) {
                                this.bulletSpawn = new math.Vec2(this.x - 12.5, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 8 && this.POWER <= 9) {
                                this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER == 10) {
                                this.bulletSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            break;
                        case config.Ship.Lightcoin:
                            if (this.POWER >= 1 && this.POWER <= 10) {
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
                            break;
                        case config.Ship.Enderium:
                            if (this.POWER >= 1 && this.POWER <= 3) {
                                this.bulletSpawn = new math.Vec2(this.x - 10.5, this.y - 45);
                                this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y - 41);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 4 && this.POWER <= 5) {
                                this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 45);
                                this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y - 41);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 6 && this.POWER <= 7) {
                                this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 35);
                                this.effect = new objects.Effect("Arc2_Shoot", this.x - 6.5, this.y - 28);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 8 && this.POWER <= 9) {
                                this.bulletSpawn = new math.Vec2(this.x - 7, this.y - 45);
                                this.effect = new objects.Effect("Arc4_Shoot", this.x - 7, this.y - 29);
                                var ammo = managers.Game.bulletManager.GetBullet();
                                console.log(ammo);
                                ammo.x = this.bulletSpawn.x;
                                ammo.y = this.bulletSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER == 10) {
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
                }
            }
        };
        Player.prototype.ShootMissiles = function () {
            if (!this.isDead) {
                var ticker = createjs.Ticker.getTicks();
                if (managers.Game.keyboardManager.shoot && ticker % 50 == 0) {
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
            this.isDead = true;
            this.alpha = 0;
            this.x = 555;
            this.y = 675;
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