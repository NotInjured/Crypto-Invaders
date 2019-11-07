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
            _this.shootNum = 0;
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
                    if (this.y < 110)
                        this.y += 2;
                    if (this.y > 100)
                        this.ShootPattern(2);
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
                this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                this.position = new math.Vec2(this.x, this.y);
                this.distance = math.Vec2.Distance(this.playerPos, this.position);
                this.bullet = managers.Game.enemyBulletManager.GetBullet();
                this.bullet.x = this.bulletSpawn.x;
                this.bullet.y = this.bulletSpawn.y;
                switch (this.sprite) {
                    case "Enemy4":
                        switch (pattern) {
                            case 1: // Repeater x10
                                if (this.shootNum < 10) {
                                    if (ticker % 5 == 0) {
                                        this.bullet.Speed = 5;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        console.log(this.bullet);
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                        managers.Game.currentSceneObject.addChild(this.bullet);
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum >= 9) {
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 2: // Spread 3
                                this.bullet.Spread = 3;
                                for (var i = 0; i < this.bullet.Spread; i++) {
                                    if (this.shootNum < 10) {
                                        if (ticker % 5 == 0) {
                                            this.bullet.Speed = 5;
                                            this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 25 + (25 * i)) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) - 25 + (25 * i)) / this.distance) * this.bullet.Speed);
                                            console.log(this.bullet);
                                            //let laser = createjs.Sound.play("laser");
                                            //laser.volume = 0.2;
                                            managers.Game.currentSceneObject.addChild(this.bullet);
                                            this.shootNum++;
                                        }
                                    }
                                    if (this.shootNum >= 9) {
                                        this.shoot = true;
                                        this.Timer();
                                    }
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