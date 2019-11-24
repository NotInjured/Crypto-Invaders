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
            _this.startPos = false;
            _this.position1 = false;
            _this.position2 = false;
            _this.position3 = false;
            _this.position4 = false;
            _this.position5 = false;
            _this.position6 = false;
            _this.eliteHP = 25;
            _this.angle = Math.floor(Math.random() * (360 - 0 + 1) + 0);
            _this.shootNum = 0;
            _this.shootNum2 = 0;
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
        Object.defineProperty(Enemy.prototype, "EliteHP", {
            get: function () {
                return this.eliteHP;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Enemy.prototype, "Angle", {
            get: function () {
                return this.angle;
            },
            set: function (n) {
                this.angle = n;
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
                case "Enemy7":
                case "Enemy10":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-75 - (-15) + 1) + (-15));
                    break;
                case "Enemy2":
                case "Enemy8":
                case "Enemy11":
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
                case "Enemy9":
                case "Enemy12":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                    break;
                case "Enemy4":
                    this.x = 555;
                    this.y = -50;
                    this.boxPoisitions = new Array();
                    for (var i = 0; i < 3; i++) {
                        this.boxPoisitions[i] = new objects.Sprite("BlueBox", Math.floor(Math.random() * (525 - 360 + 1) + 360), Math.floor(Math.random() * (250 - 50 + 1) + 50));
                    }
                    for (var i = 3; i < 6; i++) {
                        this.boxPoisitions[i] = new objects.Sprite("BlueBox", Math.floor(Math.random() * (690 - 525 + 1) + 525), Math.floor(Math.random() * (250 - 50 + 1) + 50));
                    }
                    this.position1 = true;
                    break;
                case "Enemy5":
                    this.x = Math.floor(Math.random() * (690 - 400 + 1) + 400);
                    this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                    break;
                case "Destroyer":
                    this.rotation = 90;
                    this.scaleX = 0.4;
                    this.scaleY = 0.4;
                    this.x = 473;
                    this.y = -50;
                    break;
                case "F5S2":
                    this.x = 473;
                    this.y = -50;
                    break;
                case "F5S4":
                    this.x = 640;
                    this.y = -50;
                    break;
            }
        };
        Enemy.prototype.Update = function () {
            if (!this.isDead) {
                this.Move();
                if (this.bullet != undefined)
                    this.bullet.Update();
                if (this.bullet == undefined)
                    managers.Game.currentSceneObject.removeChild(this.bullet);
            }
            if (this.isDead)
                this.RespawnTimer();
        };
        Enemy.prototype.Reset = function () {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            this.isInvincible = true;
            switch (this.sprite) {
                case "Enemy1":
                case "Enemy7":
                case "Enemy10":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
                    break;
                case "Enemy2":
                case "Enemy8":
                case "Enemy11":
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
                case "Enemy9":
                case "Enemy12":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-400 - (-350) + 1) + (-350));
                    break;
                case "Enemy5":
                    this.isDead = true;
                    this.isInvincible = true;
                    break;
                case "Enemy6":
                    this.isDead = true;
                    this.isInvincible = true;
                    break;
                case "Enemy4":
                    this.isDead = true;
                    this.isInvincible = true;
                    break;
                case "Destroyer":
                    this.isDead = true;
                    this.isInvincible = true;
                    break;
            }
        };
        Enemy.prototype.Move = function () {
            switch (this.sprite) {
                case "Enemy1":
                case "Enemy7":
                case "Enemy10":
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
                case "Enemy8":
                case "Enemy11":
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
                case "Enemy9":
                case "Enemy12":
                    if (this.y < 730) {
                        this.y += 3;
                        if (this.y > 350 && this.y < 400)
                            this.ShootPattern(1);
                    }
                    if (this.y > 720)
                        this.Reset();
                    break;
                case "Enemy4":
                    if (this.y < 200 && !this.startPos) {
                        this.y += 2;
                        if (this.y > 190) {
                            this.startPos = true;
                        }
                    }
                    if (this.startPos) {
                        if (this.position1) {
                            if (this.x < this.boxPoisitions[0].x) {
                                this.x += 1;
                            }
                            if (this.x > this.boxPoisitions[0].x) {
                                this.x -= 1;
                            }
                            if (this.y < this.boxPoisitions[0].y) {
                                this.y += 1;
                            }
                            if (this.y > this.boxPoisitions[0].y) {
                                this.y -= 1;
                            }
                            if ((this.x + this.halfW) > ((this.boxPoisitions[0].x) - this.boxPoisitions[0].halfW / 4) &&
                                (this.x - this.halfW) < ((this.boxPoisitions[0].x) + this.boxPoisitions[0].halfW / 4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[0].y) - this.boxPoisitions[0].halfH / 4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[0].y) + this.boxPoisitions[0].halfH / 4)) {
                                this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                switch (this.randomPosition) {
                                    case 1:
                                        this.position1 = false;
                                        this.position2 = true;
                                        break;
                                    case 2:
                                        this.position1 = false;
                                        this.position3 = true;
                                        break;
                                    case 3:
                                        this.position1 = false;
                                        this.position4 = true;
                                        break;
                                    case 4:
                                        this.position1 = false;
                                        this.position5 = true;
                                        break;
                                    case 5:
                                        this.position1 = false;
                                        this.position6 = true;
                                        break;
                                }
                            }
                        }
                        if (this.position2) {
                            if (this.x < this.boxPoisitions[1].x) {
                                this.x += 1;
                            }
                            if (this.x > this.boxPoisitions[1].x) {
                                this.x -= 1;
                            }
                            if (this.y < this.boxPoisitions[1].y) {
                                this.y += 1;
                            }
                            if (this.y > this.boxPoisitions[1].y) {
                                this.y -= 1;
                            }
                            if ((this.x + this.halfW) > ((this.boxPoisitions[1].x) - this.boxPoisitions[1].halfW / 4) &&
                                (this.x - this.halfW) < ((this.boxPoisitions[1].x) + this.boxPoisitions[1].halfW / 4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[1].y) - this.boxPoisitions[1].halfH / 4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[1].y) + this.boxPoisitions[1].halfH / 4)) {
                                this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                switch (this.randomPosition) {
                                    case 1:
                                        this.position2 = false;
                                        this.position1 = true;
                                        break;
                                    case 2:
                                        this.position2 = false;
                                        this.position3 = true;
                                        break;
                                    case 3:
                                        this.position2 = false;
                                        this.position4 = true;
                                        break;
                                    case 4:
                                        this.position2 = false;
                                        this.position5 = true;
                                        break;
                                    case 5:
                                        this.position2 = false;
                                        this.position6 = true;
                                        break;
                                }
                            }
                        }
                        if (this.position3) {
                            if (this.x < this.boxPoisitions[2].x) {
                                this.x += 1;
                            }
                            if (this.x > this.boxPoisitions[2].x) {
                                this.x -= 1;
                            }
                            if (this.y < this.boxPoisitions[2].y) {
                                this.y += 1;
                            }
                            if (this.y > this.boxPoisitions[2].y) {
                                this.y -= 1;
                            }
                            if ((this.x + this.halfW) > ((this.boxPoisitions[2].x) - this.boxPoisitions[2].halfW / 4) &&
                                (this.x - this.halfW) < ((this.boxPoisitions[2].x) + this.boxPoisitions[2].halfW / 4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[2].y) - this.boxPoisitions[2].halfH / 4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[2].y) + this.boxPoisitions[2].halfH / 4)) {
                                this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                switch (this.randomPosition) {
                                    case 1:
                                        this.position3 = false;
                                        this.position1 = true;
                                        break;
                                    case 2:
                                        this.position3 = false;
                                        this.position2 = true;
                                        break;
                                    case 3:
                                        this.position3 = false;
                                        this.position4 = true;
                                        break;
                                    case 4:
                                        this.position3 = false;
                                        this.position5 = true;
                                        break;
                                    case 5:
                                        this.position3 = false;
                                        this.position6 = true;
                                        break;
                                }
                            }
                        }
                        if (this.position4) {
                            if (this.x < this.boxPoisitions[3].x) {
                                this.x += 1;
                            }
                            if (this.x > this.boxPoisitions[3].x) {
                                this.x -= 1;
                            }
                            if (this.y < this.boxPoisitions[3].y) {
                                this.y += 1;
                            }
                            if (this.y > this.boxPoisitions[3].y) {
                                this.y -= 1;
                            }
                            if ((this.x + this.halfW) > ((this.boxPoisitions[3].x) - this.boxPoisitions[3].halfW / 4) &&
                                (this.x - this.halfW) < ((this.boxPoisitions[3].x) + this.boxPoisitions[3].halfW / 4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[3].y) - this.boxPoisitions[3].halfH / 4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[3].y) + this.boxPoisitions[3].halfH / 4)) {
                                this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                switch (this.randomPosition) {
                                    case 1:
                                        this.position4 = false;
                                        this.position1 = true;
                                        break;
                                    case 2:
                                        this.position4 = false;
                                        this.position2 = true;
                                        break;
                                    case 3:
                                        this.position4 = false;
                                        this.position3 = true;
                                        break;
                                    case 4:
                                        this.position4 = false;
                                        this.position5 = true;
                                        break;
                                    case 5:
                                        this.position4 = false;
                                        this.position6 = true;
                                        break;
                                }
                            }
                        }
                        if (this.position5) {
                            if (this.x < this.boxPoisitions[4].x) {
                                this.x += 1;
                            }
                            if (this.x > this.boxPoisitions[4].x) {
                                this.x -= 1;
                            }
                            if (this.y < this.boxPoisitions[4].y) {
                                this.y += 1;
                            }
                            if (this.y > this.boxPoisitions[4].y) {
                                this.y -= 1;
                            }
                            if ((this.x + this.halfW) > ((this.boxPoisitions[4].x) - this.boxPoisitions[4].halfW / 4) &&
                                (this.x - this.halfW) < ((this.boxPoisitions[4].x) + this.boxPoisitions[4].halfW / 4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[4].y) - this.boxPoisitions[4].halfH / 4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[4].y) + this.boxPoisitions[4].halfH / 4)) {
                                this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                switch (this.randomPosition) {
                                    case 1:
                                        this.position5 = false;
                                        this.position1 = true;
                                        break;
                                    case 2:
                                        this.position5 = false;
                                        this.position2 = true;
                                        break;
                                    case 3:
                                        this.position5 = false;
                                        this.position3 = true;
                                        break;
                                    case 4:
                                        this.position5 = false;
                                        this.position4 = true;
                                        break;
                                    case 5:
                                        this.position5 = false;
                                        this.position6 = true;
                                        break;
                                }
                            }
                        }
                        if (this.position6) {
                            if (this.x < this.boxPoisitions[5].x) {
                                this.x += 1;
                            }
                            if (this.x > this.boxPoisitions[5].x) {
                                this.x -= 1;
                            }
                            if (this.y < this.boxPoisitions[5].y) {
                                this.y += 1;
                            }
                            if (this.y > this.boxPoisitions[5].y) {
                                this.y -= 1;
                            }
                            if ((this.x + this.halfW) > ((this.boxPoisitions[5].x) - this.boxPoisitions[5].halfW / 4) &&
                                (this.x - this.halfW) < ((this.boxPoisitions[5].x) + this.boxPoisitions[5].halfW / 4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[5].y) - this.boxPoisitions[5].halfH / 4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[5].y) + this.boxPoisitions[5].halfH / 4)) {
                                this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                switch (this.randomPosition) {
                                    case 1:
                                        this.position6 = false;
                                        this.position1 = true;
                                        break;
                                    case 2:
                                        this.position6 = false;
                                        this.position2 = true;
                                        break;
                                    case 3:
                                        this.position6 = false;
                                        this.position3 = true;
                                        break;
                                    case 4:
                                        this.position6 = false;
                                        this.position4 = true;
                                        break;
                                    case 5:
                                        this.position6 = false;
                                        this.position5 = true;
                                        break;
                                }
                            }
                        }
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
                    if (this.y < 240) {
                        this.y += 3;
                    }
                    if (this.y > 50)
                        this.ShootPattern(1);
                    break;
                case "Enemy6":
                    if (this.y < 215) {
                        this.y += 3;
                    }
                    if (this.y > 50)
                        this.ShootPattern(1);
                    break;
                case "Destroyer":
                    if (this.y < 200 && !this.startPos) {
                        this.y += 2;
                        if (this.y > 190) {
                            this.startPos = true;
                        }
                    }
                    if (this.startPos) {
                        if (managers.Game.boss2Hp > 250) {
                            this.ShootPattern(12);
                            this.ShootPattern(13);
                            this.ShootPattern(14);
                            this.ShootPattern(15);
                        }
                        if (managers.Game.boss2Hp > 200 && managers.Game.boss2Hp < 250) {
                            if (this.pattern1) {
                                this.ShootPattern(12);
                                this.ShootPattern(13);
                                this.ShootPattern(14);
                                this.ShootPattern(15);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(16);
                                this.ShootPattern(17);
                            }
                        }
                        if (managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200) {
                            if (this.pattern1) {
                                this.ShootPattern(12);
                                this.ShootPattern(13);
                                this.ShootPattern(14);
                                this.ShootPattern(15);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(16);
                                this.ShootPattern(17);
                            }
                            if (!this.pattern2 && this.pattern3) {
                                this.ShootPattern(18);
                                this.ShootPattern(19);
                            }
                        }
                        if (managers.Game.boss2Hp < 100) {
                            if (this.pattern1) {
                                this.ShootPattern(16);
                                this.ShootPattern(17);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(18);
                                this.ShootPattern(19);
                            }
                            if (!this.pattern2 && this.pattern3) {
                                this.ShootPattern(20);
                                this.ShootPattern(21);
                            }
                        }
                    }
                    break;
                case "F5S2":
                    if (this.y < 200 && !this.startPos) {
                        this.y += 2;
                        if (this.y > 190) {
                            this.startPos = true;
                        }
                    }
                    if (this.startPos) {
                        if (managers.Game.boss3_1Hp > 200) {
                            this.ShootPattern(22);
                            this.ShootPattern(23);
                            this.ShootPattern(24);
                        }
                        if (managers.Game.boss3_1Hp > 150 && managers.Game.boss3_1Hp < 200) {
                            if (this.pattern1) {
                                this.ShootPattern(22);
                                this.ShootPattern(23);
                                this.ShootPattern(24);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(25);
                            }
                        }
                        if (managers.Game.boss3_1Hp > 100 && managers.Game.boss3_1Hp < 150) {
                            if (this.pattern1) {
                                this.ShootPattern(22);
                                this.ShootPattern(23);
                                this.ShootPattern(24);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(25);
                            }
                            if (!this.pattern2 && this.pattern3) {
                                this.ShootPattern(26);
                                this.ShootPattern(27);
                            }
                        }
                        if (managers.Game.boss3_1Hp < 100) {
                            if (this.pattern1) {
                                this.ShootPattern(22);
                                this.ShootPattern(23);
                                this.ShootPattern(24);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(25);
                            }
                            if (!this.pattern2 && this.pattern3) {
                                this.ShootPattern(26);
                                this.ShootPattern(27);
                            }
                            if (!this.pattern3 && this.pattern4) {
                                this.ShootPattern(28);
                            }
                        }
                    }
                    break;
                case "F5S4":
                    if (this.y < 200 && !this.startPos) {
                        this.y += 2;
                        if (this.y > 190) {
                            this.startPos = true;
                        }
                    }
                    if (this.startPos) {
                        if (managers.Game.boss3_2Hp > 200) {
                            this.ShootPattern(31);
                        }
                        if (managers.Game.boss3_2Hp > 150 && managers.Game.boss3_2Hp < 200) {
                            if (this.pattern1) {
                                this.ShootPattern(31);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(32);
                                this.ShootPattern(33);
                                this.ShootPattern(34);
                            }
                        }
                        if (managers.Game.boss3_2Hp > 100 && managers.Game.boss3_2Hp < 150) {
                            if (this.pattern1) {
                                this.ShootPattern(31);
                            }
                            if (!this.pattern1 && this.pattern2) {
                                this.ShootPattern(32);
                                this.ShootPattern(33);
                                this.ShootPattern(34);
                            }
                            if (!this.pattern2 && this.pattern3) {
                                this.ShootPattern(35);
                                this.ShootPattern(36);
                            }
                        }
                        if (managers.Game.boss3_2Hp < 100) {
                            if (this.pattern3) {
                                this.ShootPattern(35);
                                this.ShootPattern(36);
                            }
                            if (!this.pattern3 && this.pattern4) {
                                this.ShootPattern(37);
                            }
                        }
                    }
                    break;
            }
        };
        Enemy.prototype.FindPlayer = function (player) {
            this.angle = Math.atan2(player.y - this.y, player.x - this.x);
            this.angle = this.angle * (180 / Math.PI);
            //this.rotation = -90  + this.angle;
            this.playerPos = new math.Vec2(player.x, player.y);
        };
        Enemy.prototype.ShootPattern = function (pattern) {
            if (!this.isDead && !this.shoot) {
                var ticker = createjs.Ticker.getTicks();
                switch (this.sprite) {
                    case "Enemy1":
                    case "Enemy2":
                    case "Enemy3":
                    case "Enemy7":
                    case "Enemy8":
                    case "Enemy9":
                    case "Enemy10":
                    case "Enemy11":
                    case "Enemy12":
                        switch (pattern) {
                            case 1:
                                this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                this.position = new math.Vec2(this.x, this.y);
                                this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                this.bullet.pattern = 1;
                                this.bullet.Speed = 2;
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
                    case "Enemy6":
                    case "Enemy5":
                        switch (pattern) {
                            case 1:
                                if (this.shootNum < 10) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 4;
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
                                    this.Timer();
                                }
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
                                        this.bullet.Speed = 4;
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
                                        this.bullet.Speed = 4;
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
                                        this.bullet.Speed = 4;
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
                            case 10: // Wall of Bullets
                                var angle = Math.floor(Math.random() * (360 - 0 + 1) + 0);
                                if (this.shootNum < 120) {
                                    this.shootNum++;
                                    for (var i = 0; i < 3; i++) {
                                        if (ticker % 1 == 0) {
                                            this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                            this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                            this.bullet.pattern = 5;
                                            this.bullet.Speed = 0.01;
                                            this.bullet.Radius = 1;
                                            this.bullet.AngleStep = (360 / 3) * this.shootNum;
                                            this.bullet.Dir = new math.Vec2((90 * Math.cos(angle * 5)) * this.bullet.Speed, (120 * Math.sin(angle * 3)) * this.bullet.Speed);
                                            this.bullet.x = this.x + 90 * Math.cos(angle * 5);
                                            this.bullet.y = this.y + 120 * Math.sin(angle * 3);
                                            //console.log(this.bullet)
                                            angle += this.bullet.AngleStep;
                                        }
                                    }
                                    angle += 7;
                                }
                                if (this.shootNum > 119) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 11: // BoWaP - Border of Wave and Particle
                                if (this.shootNum < 40000) {
                                    for (var i = 0; i < 4; i++) {
                                        if (ticker % 1 == 0) {
                                            this.bulletSpawn = new math.Vec2(this.x - 10, this.y);
                                            this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                            this.bullet.pattern = 5;
                                            this.bullet.Speed = 0.03;
                                            this.bullet.AngleStep = (360 / 6) * this.shootNum;
                                            this.bullet.Angle = 180;
                                            this.bullet.Angle += this.bullet.AngleStep;
                                            if (this.shootNum < 2500 ||
                                                this.shootNum > 5000 && this.shootNum < 7500 ||
                                                this.shootNum > 10000 && this.shootNum < 12500 ||
                                                this.shootNum > 15000 && this.shootNum < 17500 ||
                                                this.shootNum > 20000 && this.shootNum < 22500 ||
                                                this.shootNum > 25000 && this.shootNum < 27500 ||
                                                this.shootNum > 30000 && this.shootNum < 32500 ||
                                                this.shootNum > 35000 && this.shootNum < 37500) {
                                                //this.bullet.Speed = 0.03
                                                this.bullet.Dir = new math.Vec2((90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
                                            }
                                            if (this.shootNum > 2500 && this.shootNum < 5000 ||
                                                this.shootNum > 7500 && this.shootNum < 10000 ||
                                                this.shootNum > 12500 && this.shootNum < 15000 ||
                                                this.shootNum > 17500 && this.shootNum < 20000 ||
                                                this.shootNum > 22500 && this.shootNum < 25000 ||
                                                this.shootNum > 27500 && this.shootNum < 30000 ||
                                                this.shootNum > 32500 && this.shootNum < 35000 ||
                                                this.shootNum > 37500 && this.shootNum < 40000) {
                                                //this.bullet.Speed = 0.05
                                                this.bullet.Dir = new math.Vec2((90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed);
                                            }
                                            this.bullet.x = this.bulletSpawn.x;
                                            this.bullet.y = this.bulletSpawn.y;
                                        }
                                        //console.log(this.bullet.Angle)
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 39999) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                        }
                    case "Destroyer":
                        switch (pattern) {
                            case 12: // Repeater x10
                                if (this.shootNum < 99) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x + 35, this.y - 85);
                                        this.position = new math.Vec2(this.x + 50, this.y - 40);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 4;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 36) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 13: // Repeater x10
                                if (this.shootNum < 99) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x + 60, this.y - 60);
                                        this.position = new math.Vec2(this.x + 70, this.y - 40);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 4;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 36) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 14: // Repeater x10
                                if (this.shootNum < 99) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x + 80, this.y - 60);
                                        this.position = new math.Vec2(this.x + 90, this.y - 40);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 4;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 36) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 15: // Repeater x10
                                if (this.shootNum < 99) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x + 105, this.y - 85);
                                        this.position = new math.Vec2(this.x + 120, this.y - 40);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 4;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 36) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss2Hp > 200 && managers.Game.boss2Hp < 250) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss2Hp < 100) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 16:
                                if (this.shootNum < 200) {
                                    if (ticker % 3 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x + 35, this.y - 85);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) + (-10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) + (-10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed);
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 199) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 17:
                                if (this.shootNum < 200) {
                                    if (ticker % 3 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x + 105, this.y - 85);
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 150 + (10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) - 150 + (10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed);
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 199) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss2Hp > 200 && managers.Game.boss2Hp < 250) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    if (managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    if (managers.Game.boss2Hp < 100) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 18:
                                if (this.shootNum < 250) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x + 70, this.y - 60);
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
                                    this.Timer();
                                }
                                break;
                            case 19:
                                if (this.shootNum < 250) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x + 70, this.y - 60);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((60 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (60 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 249) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200) {
                                        this.pattern3 = false;
                                        this.pattern1 = true;
                                    }
                                    if (managers.Game.boss2Hp < 100) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 20: //Spiral 
                                if (this.shootNum < 500) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x + 70, this.y - 60);
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
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 499) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 21: //Spiral Reverse 
                                if (this.shootNum < 500) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x + 70, this.y - 60);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 180) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
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
                                    if (managers.Game.boss2Hp < 100) {
                                        this.pattern3 = false;
                                        this.pattern1 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                        }
                        break;
                    case "F5S2":
                        switch (pattern) {
                            case 22:
                                if (this.shootNum < 90) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 18, this.y);
                                        this.position = new math.Vec2(this.x - 10, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 50) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 23:
                                if (this.shootNum < 90) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 18, this.y);
                                        this.position = new math.Vec2(this.x - 10, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 24:
                                if (this.shootNum < 90) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 18, this.y);
                                        this.position = new math.Vec2(this.x - 10, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) + 50) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_1Hp > 150 && managers.Game.boss3_1Hp < 200) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss3_1Hp > 100 && managers.Game.boss3_1Hp < 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss3_1Hp < 100) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 25:
                                if (this.shootNum < 90) {
                                    if (ticker % 3 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 18, this.y);
                                        this.position = new math.Vec2(this.x - 50, this.y + 50);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) + (-10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) + (-10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed);
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_1Hp > 150 && managers.Game.boss3_1Hp < 200) {
                                        this.pattern2 = false;
                                        this.pattern1 = true;
                                    }
                                    if (managers.Game.boss3_1Hp > 100 && managers.Game.boss3_1Hp < 150) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    if (managers.Game.boss3_1Hp < 100) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 26:
                                if (this.shootNum < 250) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 18, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 249) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 27:
                                if (this.shootNum < 250) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 18, this.y);
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
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 249) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_1Hp > 100 && managers.Game.boss3_1Hp < 150) {
                                        this.pattern3 = false;
                                        this.pattern1 = true;
                                    }
                                    if (managers.Game.boss3_1Hp < 100) {
                                        this.pattern3 = false;
                                        this.pattern4 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 28:
                                var angle = Math.floor(Math.random() * (360 - 0 + 1) + 0);
                                if (this.shootNum < 120) {
                                    this.shootNum++;
                                    for (var i = 0; i < 3; i++) {
                                        if (ticker % 1 == 0) {
                                            this.bulletSpawn = new math.Vec2(this.x - 18, this.y);
                                            this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                            this.bullet.pattern = 5;
                                            this.bullet.Speed = 0.01;
                                            this.bullet.Radius = 1;
                                            this.bullet.AngleStep = (360 / 3) * this.shootNum;
                                            this.bullet.Dir = new math.Vec2((90 * Math.cos(angle * 5)) * this.bullet.Speed, (120 * Math.sin(angle * 3)) * this.bullet.Speed);
                                            this.bullet.x = this.x + 90 * Math.cos(angle * 5);
                                            this.bullet.y = this.y + 120 * Math.sin(angle * 3);
                                            //console.log(this.bullet)
                                            angle += this.bullet.AngleStep;
                                        }
                                    }
                                    angle += 7;
                                }
                                if (this.shootNum > 119) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_1Hp < 100) {
                                        this.pattern4 = false;
                                        this.pattern1 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 29:
                                break;
                            case 30:
                                break;
                        }
                        break;
                    case "F5S4":
                        switch (pattern) {
                            case 31:
                                if (this.shootNum < 90) {
                                    if (ticker % 3 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 20, this.y);
                                        this.position = new math.Vec2(this.x - 70, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 2;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) + (-10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed, (((this.playerPos.y - this.position.y) + (-10 * (this.shootNum % 10))) / this.distance) * this.bullet.Speed);
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_2Hp > 150 && managers.Game.boss3_2Hp < 200) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss3_2Hp > 100 && managers.Game.boss3_2Hp < 150) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss3_2Hp < 100) {
                                        this.pattern1 = false;
                                        this.pattern3 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 32:
                                if (this.shootNum < 90) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 20, this.y);
                                        this.position = new math.Vec2(this.x - 10, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) - 50) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 33:
                                if (this.shootNum < 990) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 20, this.y);
                                        this.position = new math.Vec2(this.x - 10, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2(((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_2Hp > 150 && managers.Game.boss3_2Hp < 230) {
                                    }
                                    if (managers.Game.boss3_2Hp > 100 && managers.Game.boss3_2Hp < 150) {
                                    }
                                    if (managers.Game.boss3_2Hp < 100) {
                                    }
                                    this.Timer();
                                }
                                break;
                            case 34:
                                if (this.shootNum < 90) {
                                    if (ticker % 5 == 0) {
                                        this.bulletSpawn = new math.Vec2(this.x - 20, this.y);
                                        this.position = new math.Vec2(this.x - 10, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 1;
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        this.bullet.Speed = 3;
                                        this.bullet.Dir = new math.Vec2((((this.playerPos.x - this.position.x) + 50) / this.distance) * this.bullet.Speed, ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 89) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_2Hp > 150 && managers.Game.boss3_2Hp < 200) {
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                    }
                                    if (managers.Game.boss3_2Hp > 100 && managers.Game.boss3_2Hp < 150) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    if (managers.Game.boss3_2Hp < 100) {
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 35:
                                if (this.shootNum < 500) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 20, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.035;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 499) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    this.Timer();
                                }
                                break;
                            case 36:
                                if (this.shootNum < 500) {
                                    if (ticker % 3 == 0) {
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 20, this.y);
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.035;
                                        this.bullet.Radius = 1;
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360 / 72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep;
                                        this.bullet.Dir = new math.Vec2((90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        var laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if (this.shootNum > 499) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_2Hp > 100 && managers.Game.boss3_2Hp < 150) {
                                        this.pattern3 = false;
                                        this.pattern1 = true;
                                    }
                                    if (managers.Game.boss3_2Hp < 100) {
                                        this.pattern3 = false;
                                        this.pattern4 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 37:
                                if (this.shootNum < 10000) {
                                    for (var i = 0; i < 4; i++) {
                                        if (ticker % 1 == 0) {
                                            this.bulletSpawn = new math.Vec2(this.x - 20, this.y);
                                            this.bullet = managers.Game.enemyBulletManager.GetBullet();
                                            this.bullet.pattern = 5;
                                            this.bullet.Speed = 0.03;
                                            this.bullet.AngleStep = (360 / 6) * this.shootNum;
                                            this.bullet.Angle = 180;
                                            this.bullet.Angle += this.bullet.AngleStep;
                                            if (this.shootNum < 2500 ||
                                                this.shootNum > 5000 && this.shootNum < 7500 //||
                                            //this.shootNum > 10000 && this.shootNum < 12500 ||
                                            //this.shootNum > 15000 && this.shootNum < 17500 ||
                                            //this.shootNum > 20000 && this.shootNum < 22500 ||
                                            //this.shootNum > 25000 && this.shootNum < 27500 ||
                                            //this.shootNum > 30000 && this.shootNum < 32500 ||
                                            //this.shootNum > 35000 && this.shootNum < 37500
                                            ) {
                                                //this.bullet.Speed = 0.03
                                                this.bullet.Dir = new math.Vec2((90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed);
                                            }
                                            if (this.shootNum > 2500 && this.shootNum < 5000 ||
                                                this.shootNum > 7500 && this.shootNum < 10000 //||
                                            //this.shootNum > 12500 && this.shootNum < 15000 ||
                                            //this.shootNum > 17500 && this.shootNum < 20000 ||
                                            //this.shootNum > 22500 && this.shootNum < 25000 ||
                                            //this.shootNum > 27500 && this.shootNum < 30000 ||
                                            //this.shootNum > 32500 && this.shootNum < 35000 ||
                                            //this.shootNum > 37500 && this.shootNum < 40000
                                            ) {
                                                //this.bullet.Speed = 0.05
                                                this.bullet.Dir = new math.Vec2((90 * Math.cos(this.bullet.Angle)) * this.bullet.Speed, (90 * Math.sin(this.bullet.Angle)) * this.bullet.Speed);
                                            }
                                            this.bullet.x = this.bulletSpawn.x;
                                            this.bullet.y = this.bulletSpawn.y;
                                        }
                                        //console.log(this.bullet.Angle)
                                        this.shootNum++;
                                    }
                                }
                                if (this.shootNum > 9999) {
                                    this.bullet.Reset();
                                    this.shoot = true;
                                    if (managers.Game.boss3_2Hp < 100) {
                                        this.pattern4 = false;
                                        this.pattern3 = true;
                                    }
                                    this.Timer();
                                }
                                break;
                            case 38:
                                break;
                            case 39:
                                break;
                            case 40:
                                break;
                        }
                        break;
                }
            }
        };
        Enemy.prototype.Timer = function () {
            var _this = this;
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
                case "Enemy12":
                case "Enemy4":
                    if (managers.Game.normal) {
                        var counter_1 = 3;
                        this.timerInterval = setInterval(function () {
                            counter_1--;
                            if (counter_1 < 0) {
                                counter_1 = 3;
                                clearInterval(_this.timerInterval);
                                _this.shootNum = 0;
                                _this.shootNum2 = 0;
                                _this.shoot = false;
                            }
                        }, 1000);
                    }
                    if (managers.Game.hard) {
                        var counter_2 = 2;
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
                    break;
                case "F5S2":
                case "F5S4":
                case "Destroyer":
                    if (managers.Game.normal) {
                        var counter_4 = 2;
                        this.timerInterval = setInterval(function () {
                            counter_4--;
                            if (counter_4 < 0) {
                                counter_4 = 2;
                                clearInterval(_this.timerInterval);
                                _this.shootNum = 0;
                                _this.shootNum2 = 0;
                                _this.shoot = false;
                            }
                        }, 1000);
                    }
                    if (managers.Game.hard || managers.Game.hell) {
                        var counter_5 = 1;
                        this.timerInterval = setInterval(function () {
                            counter_5--;
                            if (counter_5 < 0) {
                                counter_5 = 2;
                                clearInterval(_this.timerInterval);
                                _this.shootNum = 0;
                                _this.shoot = false;
                            }
                        }, 1000);
                    }
                    break;
            }
        };
        Enemy.prototype.RespawnTimer = function () {
            var _this = this;
            var counter = 60;
            this.timerInterval = setInterval(function () {
                counter--;
                if (counter < 0) {
                    counter = 2;
                    clearInterval(_this.timerInterval);
                    _this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    _this.y = Math.floor(Math.random() * (-300 - (-250) + 1) + (-250));
                }
            }, 1000);
        };
        Enemy.prototype.DropCoins = function (coins) {
            var coin = managers.Game.coinsManager.GetCoin();
            if (this.coinsCount < coins) {
                coin.IsDropped = true;
                coin.EnemyDropped = true;
                coin.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                coin.y = Math.floor(Math.random() * (380 - 25 + 1) + 25);
                coin.scaleX = 0.25;
                coin.scaleY = 0.25;
                managers.Game.currentSceneObject.addChild(coin);
                this.coinsCount++;
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map