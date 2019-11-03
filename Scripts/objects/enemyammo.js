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
    var EnemyAmmo = /** @class */ (function (_super) {
        __extends(EnemyAmmo, _super);
        // Constructor
        function EnemyAmmo(ammo) {
            var _this = _super.call(this, ammo) || this;
            // Variables
            _this.speed = 12;
            _this.Start();
            return _this;
        }
        Object.defineProperty(EnemyAmmo.prototype, "Dir", {
            get: function () {
                return this.dir;
            },
            set: function (d) {
                this.dir = d;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnemyAmmo.prototype, "Speed", {
            get: function () {
                return this.speed;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        EnemyAmmo.prototype.Start = function () {
            this.speedX = this.speed;
            this.speedY = this.speed;
            this.Reset();
        };
        EnemyAmmo.prototype.Update = function () {
            this.Move();
            if (this.x > 710 || this.x < 380 ||
                this.y > 720) {
                managers.Game.currentSceneObject.removeChild(this);
            }
        };
        EnemyAmmo.prototype.Reset = function () {
        };
        EnemyAmmo.prototype.Main = function () { };
        EnemyAmmo.prototype.Move = function () {
            this.y += this.dir.y * (60 / 20000);
            this.x += this.dir.x * (60 / 20000);
        };
        EnemyAmmo.prototype.CheckBounds = function () { };
        return EnemyAmmo;
    }(objects.GameObject));
    objects.EnemyAmmo = EnemyAmmo;
})(objects || (objects = {}));
//# sourceMappingURL=enemyammo.js.map