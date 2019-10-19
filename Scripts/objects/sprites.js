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
    var Sprite = /** @class */ (function (_super) {
        __extends(Sprite, _super);
        function Sprite(imageString, x, y) {
            var _this = _super.call(this, imageString) || this;
            // Set default position
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Sprite;
    }(objects.GameObject));
    objects.Sprite = Sprite;
})(objects || (objects = {}));
//# sourceMappingURL=sprites.js.map