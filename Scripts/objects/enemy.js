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
            _this.shoot = false;
            _this.isInvincible = false;
            _this.patternFinished = false;
            _this.shootNum = 0;
            _this.pattern1 = false;
            _this.pattern2 = false;
            _this.pattern3 = false;
            _this.pattern4 = false;
            _this.pattern5 = false;
            _this.pattern6 = false;
            _this.pattern7 = false;
            _this.pattern8 = false;
            _this.pattern9 = false;
            _this.pattern10 = false;
            _this.randomPattern = Math.floor(Math.random() * (10 - 1 + 1) + 1);
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
                    this.y = Math.floor(Math.random() * -720) + -50;
                    break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = 200;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            break;
                        case 2:
                            this.x = 900;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            break;
                    }
                    break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
                            break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
                            break;
                    }
                    break;
                case "Enemy4":
                    this.x = 560;
                    this.y = -50;
                    //this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    //this.y = Math.floor(Math.random() * -720) + -50;
                    break;
            }
        };
        Enemy.prototype.Update = function () {
            if (!this.isDead) {
                this.Move();
                this.CheckBounds();
                if (this.bullet != undefined) {
                    this.bullet.Update();
                    //if(this.shoot && !this.player.isInvincible && managers.Game.hud.Lives >= 0)
                    //managers.Collision.CheckAABB(this.bullet, this.player);
                }
            }
        };
        Enemy.prototype.Reset = function () {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            switch (this.sprite) {
                case "Enemy1":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                    break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = 200;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            break;
                        case 2:
                            this.x = 900;
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            break;
                    }
                    break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
                            break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
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
                        this.ShootPlayer();
                        this.shootNum += 1;
                        this.back = true;
                    }
                    else if (this.y < 300 && !this.back)
                        this.y += 5;
                    else if (this.back && this.y > -200) {
                        this.y -= 2;
                        this.shoot = false;
                        if (this.y < 100 && !this.shoot && this.shootNum == 1)
                            this.ShootPlayer();
                    }
                    else if (this.back && this.y < -190)
                        this.Reset();
                    break;
                case "Enemy2":
                    switch (this.randomNum) {
                        case 1:
                            if (this.x < 1000 && !this.back) {
                                this.x += 3;
                                if (this.x > 400 && this.x < 600)
                                    this.ShootPlayer();
                            }
                            else if (this.x > 995 && !this.back) {
                                this.back = true;
                                this.shoot = false;
                            }
                            else if (this.x > 200 && this.back) {
                                this.x -= 5;
                                if (this.x > 400 && this.x < 600) {
                                    this.ShootPlayer();
                                }
                                if (this.x < 290)
                                    this.Reset();
                            }
                            break;
                        case 2:
                            if (this.x > 0 && !this.back) {
                                this.x -= 3;
                                if (this.x > 400 && this.x < 600)
                                    this.ShootPlayer();
                            }
                            else if (this.x < 10 && !this.back) {
                                this.back = true;
                                this.shoot = false;
                            }
                            else if (this.x < 800 && this.back) {
                                this.x += 5;
                                if (this.x > 400 && this.x < 600) {
                                    this.ShootPlayer();
                                }
                                if (this.x > 790)
                                    this.Reset();
                            }
                            break;
                    }
                    break;
                case "Enemy3":
                    if (this.y > 350 && this.y < 400 && !this.shoot)
                        this.ShootPlayer();
                    if (this.y < 730)
                        this.y += 3;
                    if (this.y > 720)
                        this.Reset();
                    break;
                case "Enemy4":
                    if (this.y < 200)
                        this.y += 2;
                    if (this.y > 190) {
                        if (managers.Game.normal) {
                            if (managers.Game.boss1Hp > 150) {
                                if (!this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4)
                                    this.ShootPattern(1);
                                if (this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4)
                                    this.ShootPattern(2);
                                if (!this.pattern1 && this.pattern2 && !this.pattern3 && !this.pattern4)
                                    this.ShootPattern(3);
                                if (!this.pattern1 && !this.pattern2 && this.pattern3 && !this.pattern4)
                                    this.ShootPattern(4);
                            }
                            if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                if (!this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(1);
                                if (this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(2);
                                if (!this.pattern1 && this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(3);
                                if (!this.pattern1 && !this.pattern2 && this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(4);
                                if (!this.pattern1 && !this.pattern2 && !this.pattern3 && this.pattern4 && !this.pattern7)
                                    this.ShootPattern(7);
                            }
                            if (managers.Game.boss1Hp < 100) {
                                if (!this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(1);
                                if (this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(2);
                                if (!this.pattern1 && this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(3);
                                if (!this.pattern1 && !this.pattern2 && this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(4);
                                if (!this.pattern1 && !this.pattern2 && !this.pattern3 && this.pattern4 && !this.pattern7)
                                    this.ShootPattern(7);
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
        Enemy.prototype.ShootPlayer = function () {
            if (!this.isDead && !this.shoot) {
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
                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                        this.position = new math.Vec2(this.x, this.y);
                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                        this.bullet = new objects.EnemyBullet("Enemy1_Shot", false);
                        this.bullet.Dir = new math.Vec2(
                        //((this.playerPos.x - this.position.x)) * this.bullet.Speed, 
                        //((this.playerPos.y - this.position.y)) * this.bullet.Speed)
                        ((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                        this.bullet.x = this.bulletSpawn.x;
                        this.bullet.y = this.bulletSpawn.y;
                        var laser = createjs.Sound.play("laser");
                        laser.volume = 0.2;
                        managers.Game.currentSceneObject.addChild(this.bullet);
                        console.log(this.bullet);
                        this.shoot = true;
                        break;
                    case "Enemy4":
                    case "Enemy12":
                    case "Enemy13":
                        var ticker = createjs.Ticker.getTicks();
                        if (ticker % 10 == 0) {
                            this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                            this.position = new math.Vec2(this.x, this.y);
                            this.distance = math.Vec2.Distance(this.playerPos, this.position);
                            this.bullet = managers.Game.enemyBulletManager.GetBullet();
                            this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                            console.log(this.bullet);
                            this.bullet.x = this.bulletSpawn.x;
                            this.bullet.y = this.bulletSpawn.y;
                            //this.bullet.x = this.bulletSpawn.x;
                            //this.bullet.y = this.bulletSpawn.y;
                            var laser_1 = createjs.Sound.play("laser");
                            laser_1.volume = 0.2;
                            managers.Game.currentSceneObject.addChild(this.bullet);
                        }
                        break;
                }
            }
        };
        Enemy.prototype.ShootPattern = function (pattern) {
            if (!this.isDead && !this.shoot) {
                var ticker = createjs.Ticker.getTicks();
                switch (this.sprite) {
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
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 9) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = true;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern1 = true;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 2: // spread 6
                                if (this.shootNum < 7) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 5;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 60 + (20 * this.shootNum)) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) - 60 + (20 * this.shootNum)) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 6) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 3: // spread 12
                                if (this.shootNum < 12) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 5;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 100 + (20 * this.shootNum)) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) - 100 + (20 * this.shootNum)) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 11) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                        this.pattern4 = false;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
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
                                        //console.log(this.bullet.Angle)
                                        //console.log(this.bullet)
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                    }
                                }
                                if (this.shootNum > 249) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                    }
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = true;
                                        this.pattern7 = false;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 5: // Spiral Hard
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
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                    }
                                }
                                if (this.shootNum > 499) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    //this.Timer();
                                }
                                break;
                            case 6: // Spiral Hell
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
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                    }
                                }
                                if (this.shootNum > 999) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.pattern1 = true;
                                    this.pattern2 = false;
                                    //this.Timer();
                                }
                                break;
                            case 7: // Spiral Normal Reverse
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
                                        console.log(this.bullet.Angle);
                                        console.log(this.bullet);
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                    }
                                }
                                if (this.shootNum > 249) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
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
                                    this.pattern1 = true;
                                    this.pattern2 = false;
                                    //this.Timer();
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
                                    this.pattern1 = true;
                                    this.pattern2 = false;
                                    //this.Timer();
                                }
                                break;
                            case 10: // Spiral Hell Reverse
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
                                    this.pattern1 = true;
                                    this.pattern2 = false;
                                    //this.Timer();
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
            var counter = 1;
            this.timerInterval = setInterval(function () {
                counter--;
                if (counter < 0) {
                    counter = 1;
                    clearInterval(_this.timerInterval);
                    _this.shootNum = 0;
                    _this.shoot = false;
                }
            }, 1000);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map