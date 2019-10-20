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
            _this.sprite = sprite;
            _this.Start();
            return _this;
        }
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
        Object.defineProperty(Enemy.prototype, "Ammo", {
            get: function () {
                return this.ammo;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        Enemy.prototype.Start = function () {
            switch (this.sprite) {
                case "Enemy3":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                    break;
                case "Enemy4":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch (this.randomNum) {
                        case 1:
                            this.x = 200;
                            this.y = 400;
                            break;
                        case 2:
                            this.x = 900;
                            this.y = 300;
                            break;
                    }
                    break;
                case "Enemy5":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                    break;
                case "Enemy6":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                    break;
            }
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            if (this.isDead) {
                this.Reset();
            }
            if (!this.isDead) {
            }
            if (this.ammo != undefined)
                this.ammo.Update();
        };
        Enemy.prototype.Reset = function () {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
            this.y = Math.floor(Math.random() * -720) + -50;
        };
        Enemy.prototype.Move = function () {
            switch (this.sprite) {
                case "Enemy3":
                    if (this.y >= 300 && !this.back) {
                        this.ShootPlayer();
                        this.back = true;
                    }
                    else if (this.y < 300 && !this.back) {
                        this.y += 5;
                    }
                    else if (this.back && this.y > -200) {
                        this.y -= 2;
                        this.shoot = false;
                        if (this.y < 100)
                            this.ShootPlayer();
                    }
                    else if (this.back && this.y < -190) {
                        this.Reset();
                    }
                    break;
                case "Enemy4":
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
                                    managers.Game.currentSceneObject.removeChild(this);
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
                                    managers.Game.currentSceneObject.removeChild(this);
                            }
                            break;
                    }
                    break;
                case "Enemy5":
                    if (this.y >= 300 && !this.back) {
                        this.ShootPlayer();
                        this.back = true;
                    }
                    else if (this.y < 300 && !this.back) {
                        this.y += 5;
                    }
                    else if (this.back && this.y > -200) {
                        this.y -= 2;
                    }
                    else if (this.back && this.y < -190) {
                        this.Reset();
                    }
                    break;
                case "Enemy6":
                    if (this.y >= 300 && !this.back) {
                        this.ShootPlayer();
                        this.back = true;
                    }
                    else if (this.y < 300 && !this.back) {
                        this.y += 5;
                    }
                    else if (this.back && this.y > -200) {
                        this.y -= 2;
                    }
                    else if (this.back && this.y < -190) {
                        this.Reset();
                    }
                    break;
                case "Enemy3":
                    if (this.y >= 300 && !this.back) {
                        this.ShootPlayer();
                        this.back = true;
                    }
                    else if (this.y < 300 && !this.back) {
                        this.y += 5;
                    }
                    else if (this.back && this.y > -200) {
                        this.y -= 2;
                    }
                    else if (this.back && this.y < -190) {
                        this.Reset();
                    }
                    break;
            }
        };
        Enemy.prototype.CheckBounds = function () {
            // Check the bottom boundary
            if (this.y >= 720 + this.height) {
                this.y = -50;
            }
        };
        Enemy.prototype.FindPlayer = function (player) {
            this.angle = Math.atan2(player.y - this.y, player.x - this.x);
            this.angle = this.angle * (180 / Math.PI);
            this.rotation = -90 + this.angle;
            this.playerPos = new math.Vec2(player.x, player.y);
            if (this.shoot)
                managers.Collision.CheckAABB(player, this.ammo);
        };
        Enemy.prototype.ShootPlayer = function () {
            if (!this.isDead && !this.shoot) {
                this.ammoSpawn = new math.Vec2(this.x - 17, this.y + 10);
                this.position = new math.Vec2(this.x, this.y);
                this.ammo = new objects.EnemyAmmo("Enemy_Shot");
                this.ammo.rotation = 90 + this.angle;
                console.log(this.ammo);
                this.ammo.Dir = new math.Vec2((this.playerPos.x - this.position.x) * this.ammo.Speed, (this.playerPos.y - this.position.y) * this.ammo.Speed);
                this.ammo.x = this.ammoSpawn.x;
                this.ammo.y = this.ammoSpawn.y;
                //ammo.VelY = 25;
                managers.Game.currentSceneObject.addChild(this.ammo);
                this.shoot = true;
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map