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
    var EnemyBullet = /** @class */ (function (_super) {
        __extends(EnemyBullet, _super);
        // Constructor
        function EnemyBullet(ammo, isPattern) {
            var _this = _super.call(this, ammo) || this;
            // Variables
            _this.speed = 10;
            _this.isPattern = isPattern;
            _this.Start();
            return _this;
        }
        Object.defineProperty(EnemyBullet.prototype, "Dir", {
            get: function () {
                return this.dir;
            },
            set: function (d) {
                this.dir = d;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnemyBullet.prototype, "Speed", {
            get: function () {
                return this.speed;
            },
            set: function (s) {
                this.speed = s;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnemyBullet.prototype, "Spread", {
            get: function () {
                return this.spread;
            },
            set: function (s) {
                this.spread = s;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnemyBullet.prototype, "Angle", {
            get: function () {
                return this.angle;
            },
            set: function (a) {
                this.angle = a;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnemyBullet.prototype, "AngleStep", {
            get: function () {
                return this.angleStep;
            },
            set: function (as) {
                this.angleStep = as;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnemyBullet.prototype, "Radius", {
            get: function () {
                return this.radius;
            },
            set: function (r) {
                this.radius = r;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        EnemyBullet.prototype.Start = function () {
            this.speedX = this.speed;
            this.speedY = this.speed;
            this.scaleX = 1.5;
            this.scaleY = 1.5;
            this.Reset();
        };
        EnemyBullet.prototype.Update = function () {
            this.Move();
            //this.CheckBound();
        };
        EnemyBullet.prototype.Reset = function () {
            this.x = 10000;
            this.y = 10000;
        };
        EnemyBullet.prototype.Main = function () { };
        EnemyBullet.prototype.Move = function () {
            if (this.dir != undefined && this.isPattern) {
                switch (this.pattern) {
                    case 1:
                    case 2:
                    case 3:
                        this.x += this.dir.x;
                        this.y += this.dir.y;
                        break;
                    case 4:
                        this.angle += this.angleStep;
                        this.x += this.dir.x + (90 * Math.cos(this.angle)); //* this.speed
                        this.y += this.dir.y + (90 * Math.sin(this.angle)); //* this.speed
                        break;
                    case 5:
                        this.angle += this.angleStep;
                        this.x += this.dir.x; //* (90*Math.cos(this.angle))
                        this.y += this.dir.y; //* (90*Math.sin(this.angle))
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        break;
                }
            }
            //else if(this.dir == undefined && this.pattern){
            //    this.y += this.speedY;
            //    this.x += 0 
            //}
            else if (this.dir != undefined && !this.isPattern) {
                this.x += this.dir.x;
                this.y += this.dir.y;
            }
        };
        EnemyBullet.prototype.CheckBounds = function () {
            if (this.x > 710 || this.x < 340 ||
                this.y > 720) {
                this.Reset();
            }
        };
        return EnemyBullet;
    }(objects.GameObject));
    objects.EnemyBullet = EnemyBullet;
})(objects || (objects = {}));
//# sourceMappingURL=enemybullet.js.map