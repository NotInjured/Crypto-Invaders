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
        function Bullet() {
            var _this = _super.call(this, "Bullet") || this;
            // Variables
            _this.speed = -10;
            _this.Start();
            return _this;
        }
        // Methods
        Bullet.prototype.Start = function () {
            this.speedY = this.speed;
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.Move();
        };
        Bullet.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Bullet.prototype.Main = function () { };
        Bullet.prototype.Move = function () {
            this.y += this.speedY;
        };
        Bullet.prototype.CheckBounds = function () { };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullets.js.map