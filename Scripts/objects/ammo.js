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
    var Ammo = /** @class */ (function (_super) {
        __extends(Ammo, _super);
        // Constructor
        function Ammo(ammo) {
            var _this = _super.call(this, ammo) || this;
            // Variables
            _this.speed = -10;
            _this.Start();
            return _this;
        }
        // Methods
        Ammo.prototype.Start = function () {
            this.speedY = this.speed;
            this.Reset();
        };
        Ammo.prototype.Update = function () {
            this.Move();
        };
        Ammo.prototype.Reset = function () {
        };
        Ammo.prototype.Main = function () { };
        Ammo.prototype.Move = function () {
            this.y += this.speedY;
        };
        Ammo.prototype.CheckBounds = function () {
            if (this.y < -10)
                managers.Game.currentSceneObject.removeChild(this);
        };
        return Ammo;
    }(objects.GameObject));
    objects.Ammo = Ammo;
})(objects || (objects = {}));
//# sourceMappingURL=ammo.js.map