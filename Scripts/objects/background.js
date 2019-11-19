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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // Constructor
        function Background() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("bg1")) || this;
            _this.Start();
            return _this;
        }
        // Functions 
        // Initializing our variables with default values
        Background.prototype.Start = function () {
            this.speedY = 1;
            if (managers.Game.level1)
                this.y = -22500;
            if (managers.Game.level2)
                this.y = -14200;
            this.x = 297;
        };
        // Updated 60 times per second (60FPS)
        Background.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        // Resets the position of the object
        Background.prototype.Reset = function () {
        };
        // Move the object
        Background.prototype.Move = function () {
            if (managers.Game.level1) {
                this.y += this.speedY;
                if (this.y > -14200)
                    this.speedY = 0;
            }
            if (managers.Game.level2) {
                this.speedY = 1.5;
                this.y += this.speedY;
                if (this.y < -14200)
                    this.y = -14200;
                if (this.y > -1)
                    this.speedY = 0;
            }
            if (managers.Game.level3) {
                this.y += this.speedY;
            }
            if (managers.Game.pause)
                this.speedY = 0;
        };
        // Collision Detection 
        Background.prototype.CheckBound = function () {
            if (this.y > -1)
                this.speedY = 0;
        };
        return Background;
    }(window.createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map