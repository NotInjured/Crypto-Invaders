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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // Constructor
        function Bullet(bullet) {
            var _this = _super.call(this, bullet) || this;
            // Variables
            _this.speed = -10;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Bullet.prototype, "Dir", {
            get: function () {
                return this.dir;
            },
            set: function (d) {
                this.dir = d;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        Bullet.prototype.Start = function () {
            this.speedY = this.speed;
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.Move();
            if (this.x > 700 || this.x < 360)
                this.Reset();
            if (this.y == 0)
                this.Reset();
        };
        Bullet.prototype.Reset = function () {
            this.x = -10000;
            this.y = -10000;
        };
        Bullet.prototype.Main = function () { };
        Bullet.prototype.Move = function () {
            this.y += this.speedY;
            if (this.dir != undefined) {
                this.x += this.dir.x;
                this.y += this.dir.y;
            }
        };
        Bullet.prototype.CheckBounds = function () {
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map