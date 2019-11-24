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
    var Missile = /** @class */ (function (_super) {
        __extends(Missile, _super);
        // Constructor
        function Missile(missile) {
            var _this = _super.call(this, missile) || this;
            // Variables
            _this.speed = -10;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Missile.prototype, "Dir", {
            get: function () {
                return this.dir;
            },
            set: function (d) {
                this.dir = d;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Missile.prototype, "Angle", {
            get: function () {
                return this.angle;
            },
            set: function (a) {
                this.angle = a;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Missile.prototype, "AngleStep", {
            get: function () {
                return this.angleStep;
            },
            set: function (as) {
                this.angleStep = as;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Missile.prototype, "Speed", {
            get: function () {
                return this.speed;
            },
            set: function (s) {
                this.speed = s;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        Missile.prototype.Start = function () {
            this.speedY = this.speed;
            this.speedX = this.speed;
            this.Reset();
        };
        Missile.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Missile.prototype.Reset = function () {
            this.x = -10000000;
            this.y = -10000000;
        };
        Missile.prototype.Main = function () { };
        Missile.prototype.Move = function () {
            if (this.dir != undefined) {
                this.x += this.dir.x;
                this.y += this.dir.y;
            }
        };
        Missile.prototype.CheckBounds = function () {
            if (this.y < 0 || this.x < 340 || this.x > 715)
                this.Reset();
        };
        Missile.prototype.FindEnemies = function (enemy) {
            this.position = new math.Vec2(this.x, this.y);
            var enemyPos = new math.Vec2(enemy.x, enemy.y);
            this.distance = math.Vec2.Distance(enemyPos, this.position);
            if (!enemy.isInvincible && enemy.y > 0 && enemy.y < 720 && enemy.x > 340 && enemy.x < 715) {
                this.Dir = new math.Vec2(((enemyPos.x - this.position.x) / this.distance) * 10, ((enemyPos.y - this.position.y) / this.distance) * 10);
                if (enemy.name == "Destroyer") {
                    this.Dir = new math.Vec2((((enemyPos.x + 55) - this.position.x) / this.distance) * 10, (((enemyPos.y - 100) - this.position.y) / this.distance) * 10);
                }
                if (enemy.name == "F5S2") {
                    this.Dir = new math.Vec2((((enemyPos.x - 25) - this.position.x) / this.distance) * 10, (((enemyPos.y - 25) - this.position.y) / this.distance) * 10);
                }
                if (enemy.name == "F5S4") {
                    this.Dir = new math.Vec2((((enemyPos.x - 25) - this.position.x) / this.distance) * 10, (((enemyPos.y - 25) - this.position.y) / this.distance) * 10);
                }
            }
        };
        return Missile;
    }(objects.GameObject));
    objects.Missile = Missile;
})(objects || (objects = {}));
//# sourceMappingURL=missile.js.map