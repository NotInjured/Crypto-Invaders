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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy(sprite) {
            var _this = _super.call(this, sprite) || this;
            // Variables
            _this.isDead = false;
            _this.back = false;
            _this.shoot = false;
            _this.isInvincible = true;
            _this.patternFinished = false;
            _this.shootNum = 0;
            _this.coinsCount = 0;
            _this.pattern1 = true;
            _this.pattern2 = false;
            _this.pattern3 = false;
            _this.pattern4 = false;
            _this.pattern5 = false;
            _this.pattern6 = false;
            _this.pattern7 = false;
            _this.pattern8 = false;
            _this.pattern9 = false;
            _this.pattern10 = false;
            _this.randomPattern = Math.floor(Math.random() * (5 - 1 + 1) + 1);
            _this.sprite = sprite;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Enemy.prototype, "Angle", {
            get: function () {
                return this.angle;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Enemy.prototype, "Shoot", {
            get: function () {
                return this.shoot;
            },
            set: function (s) {
                this.shoot = s;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Enemy.prototype, "Bullet", {
            get: function () {
                return this.bullet;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        Enemy.prototype.Start = function () {
            switch (this.sprite) {
                case "Enemy1":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-75 - (-15) + 1) + (-15));
                    break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = 200;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = -90;
                            break;
                        case 2:
                            this.x = 900;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = 90;
                            break;
                    }
                    break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                            break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                            break;
                    }
                    break;
                case "Enemy4":
                    this.x = 555;
                    this.y = -50;
                    break;
            }
        };
        Enemy.prototype.Update = function () {
            if (!this.isDead) {
                this.Move();
                this.CheckBounds();
                if (this.bullet != undefined)
                    this.bullet.Update();
                if (this.bullet == undefined)
                    managers.Game.currentSceneObject.removeChild(this.bullet);
            }
        };
        Enemy.prototype.Reset = function () {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            this.isInvincible = true;
            switch (this.sprite) {
                case "Enemy1":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
                    break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = 200;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = -90;
                            break;
                        case 2:
                            this.x = 900;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = 90;
                            break;
                    }
                    break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
                            break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
                            break;
                    }
                    break;
                case "Enemy4":
                    break;
            }
        };
        Enemy.prototype.Move = function () {
            switch (this.sprite) {
                case "Enemy1":
                    if (this.y >= 300 && !this.back) {
                        this.ShootPattern(1);
                        this.shoot = false;
                        this.back = true;
                    }
                    if (this.y < 300 && !this.back)
                        this.y += 5;
                    if (this.back) {
                        if (this.y > -200)
                            this.y -= 2;
                        if (this.y > 0 && this.y < 100)
                            this.ShootPattern(1);
                        if (this.y < 0)
                            this.isInvincible = true;
                        if (this.y < -50)
                            this.Reset();
                    }
                    if (this.y > 0)
                        this.isInvincible = false;
                    break;
                case "Enemy2":
                    switch (this.randomNum) {
                        case 1:
                            if (this.x < 1000 && !this.back) {
                                this.x += 3;
                                if (this.x > 400 && this.x < 600)
                                    this.ShootPattern(1);
                            }
                            if (this.x > 995 && !this.back) {
                                this.back = true;
                                this.shoot = false;
                            }
                            if (this.x > 200 && this.back) {
                                this.rotation = 90;
                                this.x -= 5;
                                if (this.x > 400 && this.x < 600)
                                    this.ShootPattern(1);
                                if (this.x < 290)
                                    this.Reset();
                            }
                            break;
                        case 2:
                            if (this.x > 0 && !this.back) {
                                this.x -= 3;
                                if (this.x > 400 && this.x < 600)
                                    this.ShootPattern(1);
                            }
                            if (this.x < 10 && !this.back) {
                                this.shoot = false;
                                this.back = true;
                            }
                            if (this.x < 800 && this.back) {
                                this.x += 5;
                                this.rotation = -90;
                                if (this.x > 400 && this.x < 600)
                                    this.ShootPattern(1);
                                if (this.x > 790)
                                    this.Reset();
                            }
                            break;
                    }
                    break;
                case "Enemy3":
                    if (this.y < 730) {
                        this.y += 3;
                        if (this.y > 350 && this.y < 400)
                            this.ShootPattern(1);
                    }
                    if (this.y > 720)
                        this.Reset();
                    break;
                case "Enemy4":
                    if (this.y < 200)
                        this.y += 2;
                    if (this.y > 190) {
                        if (managers.Game.boss1Hp > 150) {
                            if (managers.Game.normal) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern4)
                                    this.ShootPattern(4);
                            }
                            if (managers.Game.hard) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern6)
                                    this.ShootPattern(6);
                            }
                            if (managers.Game.hell) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern7)
                                    this.ShootPattern(7);
                            }
                        }
                        if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                            if (managers.Game.normal) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern4)
                                    this.ShootPattern(4);
                                if (!this.pattern4 && this.pattern5)
                                    this.ShootPattern(5);
                            }
                            if (managers.Game.hard) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern6)
                                    this.ShootPattern(6);
                                if (!this.pattern6 && this.pattern8)
                                    this.ShootPattern(8);
                            }
                            if (managers.Game.hell) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern7)
                                    this.ShootPattern(7);
                                if (!this.pattern7 && this.pattern9)
                                    this.ShootPattern(9);
                            }
                        }
                        if (managers.Game.boss1Hp < 100) {
                            if (managers.Game.normal) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern4 || this.pattern5) {
                                    this.ShootPattern(4);
                                    this.ShootPattern(5);
                                }
                            }
                            if (managers.Game.hard) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern6 || this.pattern8) {
                                    this.ShootPattern(6);
                                    this.ShootPattern(8);
                                }
                            }
                            if (managers.Game.hell) {
                                if (this.pattern1)
                                    this.ShootPattern(1);
                                if (!this.pattern1 && this.pattern2)
                                    this.ShootPattern(2);
                                if (!this.pattern2 && this.pattern3)
                                    this.ShootPattern(3);
                                if (!this.pattern3 && this.pattern7 || this.pattern9) {
                                    this.ShootPattern(7);
                                    this.ShootPattern(9);
                                }
                            }
                        }
                    }
                    break;
                case "Enemy5":
                    break;
                case "Enemy6":
                    break;
                case "Enemy7":
                    break;
            }
        };
        Enemy.prototype.CheckBounds = function () {
            // Check the bottom boundary
            if (this.y >= 740 + this.height) {
                this.y = -50;
            }
        };
        Enemy.prototype.FindPlayer = function (player) {
            this.angle = Math.atan2(player.y - this.y, player.x - this.x);
            this.angle = this.angle * (180 / Math.PI);
            //this.rotation = -90  + this.angle;
            this.playerPos = new math.Vec2(player.x, player.y);
            this.player = player;
        };
        Enemy.prototype.ShootPattern = function (pattern) {
            if (!this.isDead && !this.shoot) {
                var ticker = createjs.Ticker.getTicks();
                switch (this.sprite) {
                    case "Enemy1":
                    case "Enemy2":
                    case "Enemy3":
                    case "Enemy5":
                    case "Enemy6":
                    case "Enemy7":
                    case "Enemy8":
                    case "Enemy9":
                    case "Enemy10":
                    case "Enemy11":
                        switch (pattern) {
                            case 1:
                                this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                this.position = new math.Vec2(this.x, this.y);
                                this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                this.bullet.pattern = 1;
                                this.bullet.Speed = 5;
                                this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                this.bullet.x = this.bulletSpawn.x;
                                this.bullet.y = this.bulletSpawn.y;
                                var laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
                                //managers.Game.currentSceneObject.addChild(this.bullet);
                                this.shoot = true;
                                break;
                        }
                        break;
                    case "Enemy4":
                        switch (pattern) {
                            case 1: // Repeater x10
                                if (this.shootNum < 10) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 5;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 9) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 2: // spread 7
                                if (this.shootNum < 8) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 5;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 90 + (30 * this.shootNum)) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) - 90 + (30 * this.shootNum)) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 7) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 3: // spread 13
                                if (this.shootNum < 14) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 5;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 180 + (30 * this.shootNum)) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) - 180 + (30 * this.shootNum)) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 13) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern3 = false;
                                        this.pattern4 = true;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        if (managers.Game.normal) {
                                            this.pattern3 = false;
                                            this.pattern4 = true;
                                        }
                                        if (managers.Game.hard) {
                                            this.pattern3 = false;
                                            this.pattern6 = true;
                                        }
                                        if (managers.Game.hell) {
                                            this.pattern3 = false;
                                            this.pattern7 = true;
                                        }
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        if (managers.Game.normal) {
                                            this.pattern3 = false;
                                            this.pattern4 = true;
                                        }
                                        if (managers.Game.hard) {
                                            this.pattern3 = false;
                                            this.pattern6 = true;
                                            this.pattern8 = true;
                                        }
                                        if (managers.Game.hell) {
                                            this.pattern3 = false;
                                            this.pattern7 = true;
                                            this.pattern9 = true;
                                        }
                                    }
                                    this.Timer();
                                }
                                break;
                            case 4: // Spiral Normal
                                if (this.shootNum < 250) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((60 * Math.cos(this.bullet.Angle)) * this.bullet.Speed, (60 * Math.sin(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 249) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = true;
                                        this.pattern4 = false;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern4 = false;
                                        this.pattern5 = true;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern1 = true;
                                        this.pattern4 = false;
                                        this.pattern5 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 5: // Spiral Normal Reverse
                                if (this.shootNum < 250) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        //console.log(this.bullet.Angle)
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 249) {
                                    this.bullet.Reset();
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern1 = true;
                                        this.pattern5 = false;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern1 = true;
                                        this.pattern4 = false;
                                        this.pattern5 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 6: //Spiral Hard 
                                if (this.shootNum < 500) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 180) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        console.log(this.bullet.Angle);
                                        console.log(this.bullet);
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 499) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = true;
                                        this.pattern6 = false;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern6 = false;
                                        this.pattern8 = true;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern1 = true;
                                        this.pattern6 = false;
                                        this.pattern8 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 7: // Spiral Hell
                                if (this.shootNum < 1000) {
                                    if (ticker % 1 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 1080) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        console.log(this.bullet.Angle);
                                        console.log(this.bullet);
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 999) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = true;
                                        this.pattern7 = false;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern7 = false;
                                        this.pattern9 = true;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern1 = true;
                                        this.pattern7 = false;
                                        this.pattern9 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 8: // Spiral Hard Reverse
                                if (this.shootNum < 500) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 360) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        console.log(this.bullet.Angle);
                                        console.log(this.bullet);
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                    }
                                }
                                if (this.shootNum > 499) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern8 = false;
                                        this.pattern1 = true;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern1 = true;
                                        this.pattern6 = false;
                                        this.pattern8 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 9: // Spiral Hell Reverse
                                if (this.shootNum < 1000) {
                                    if (ticker % 1 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 1080) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        console.log(this.bullet.Angle);
                                        console.log(this.bullet);
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                    }
                                }
                                if (this.shootNum > 999) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern9 = false;
                                        this.pattern1 = true;
                                    }
                                    if (managers.Game.boss1Hp < 100) {
                                        this.pattern1 = true;
                                        this.pattern7 = false;
                                        this.pattern9 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                        }
                    case "Enemy12":
                    case "Enemy13":
                        break;
                }
            }
        };
        Enemy.prototype.Timer = function () {
            var _this = this;
            if (managers.Game.normal) {
                var counter_1 = 3;
                this.timerInterval = setInterval(function () {
                    counter_1--;
                    if (counter_1 < 0) {
                        counter_1 = 3;
                        clearInterval(_this.timerInterval);
                        _this.shootNum = 0;
                        _this.shoot = false;
                    }
                }, 1000);
            }
            if (managers.Game.hard) {
                var counter_2 = 1;
                this.timerInterval = setInterval(function () {
                    counter_2--;
                    if (counter_2 < 0) {
                        counter_2 = 2;
                        clearInterval(_this.timerInterval);
                        _this.shootNum = 0;
                        _this.shoot = false;
                    }
                }, 1000);
            }
            if (managers.Game.hell) {
                var counter_3 = 1;
                this.timerInterval = setInterval(function () {
                    counter_3--;
                    if (counter_3 < 0) {
                        counter_3 = 1;
                        clearInterval(_this.timerInterval);
                        _this.shootNum = 0;
                        _this.shoot = false;
                    }
                }, 1000);
            }
        };
        Enemy.prototype.RespawnTimer = function () {
            var _this = this;
            var counter = 2;
            this.timerInterval = setInterval(function () {
                counter--;
                if (counter < 0) {
                    clearInterval(_this.timerInterval);
                }
            }, 1000);
        };
        Enemy.prototype.DropCoins = function () {
            var coin = managers.Game.coinsManager.GetCoin();
            if (managers.Game.boss1IsDead) {
                if (this.coinsCount < 25) {
                    coin.IsDropped = true;
                    coin.EnemyDropped = true;
                    coin.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    coin.y = Math.floor(Math.random() * (380 - 25 + 1) + 25);
                    coin.scaleX = 0.25;
                    coin.scaleY = 0.25;
                    managers.Game.currentSceneObject.addChild(coin);
                    this.coinsCount++;
                }
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map