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
        function EnemyBullet(ammo) {
            var _this = _super.call(this, ammo) || this;
            // Variables
            _this.speed = 7;
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
            enumerable: true,
            configurable: true
        });
        // Methods
        EnemyBullet.prototype.Start = function () {
            this.speedX = this.speed;
            this.speedY = this.speed;
            this.Reset();
        };
        EnemyBullet.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            if (this.x > 710 || this.x < 340 ||
                this.y > 720) {
                managers.Game.currentSceneObject.removeChild(this);
            }
        };
        EnemyBullet.prototype.Reset = function () {
        };
        EnemyBullet.prototype.Main = function () { };
        EnemyBullet.prototype.Move = function () {
            if (this.dir != undefined) {
                this.y += this.dir.y * (60 / 20000);
                this.x += this.dir.x * (60 / 20000);
            }
        };
        EnemyBullet.prototype.CheckBounds = function () {
            if (this.x > 710 || this.x < 340 ||
                this.y > 720) {
                managers.Game.currentSceneObject.removeChild(this);
            }
        };
        return EnemyBullet;
    }(objects.GameObject));
    objects.EnemyBullet = EnemyBullet;
})(objects || (objects = {}));
//# sourceMappingURL=enemybullet.js.map