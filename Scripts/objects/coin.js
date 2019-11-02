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
    var Coins = /** @class */ (function (_super) {
        __extends(Coins, _super);
        function Coins(sprite, type) {
            var _this = _super.call(this, sprite) || this;
            _this.coin = type;
            return _this;
        }
        Coins.prototype.Start = function () {
            switch (this.coin) {
                case "B":
                    this.x = Math.floor(Math.random() * (712 - 370 + 1) + 370);
                    this.y = Math.floor(Math.random() * -720) + -20;
                    break;
                case "L":
                    this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                    this.y = Math.floor(Math.random() * -720) + -50;
                    break;
                case "E":
                    this.x = Math.floor(Math.random() * (1050 - 745 + 1) + 745);
                    this.y = Math.floor(Math.random() * -720) + -20;
                    break;
            }
        };
        Coins.prototype.Update = function () {
            this.Move();
            if (this.y > 740)
                this.Reset();
        };
        Coins.prototype.Main = function () {
        };
        Coins.prototype.Reset = function () {
            switch (this.coin) {
                case "B":
                    this.x = Math.floor(Math.random() * (712 - 370 + 1) + 370);
                    this.y = Math.floor(Math.random() * -720) + -20;
                    break;
                case "L":
                    this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                    this.y = Math.floor(Math.random() * -720) + -20;
                    break;
                case "E":
                    this.x = Math.floor(Math.random() * (1050 - 745 + 1) + 745);
                    this.y = Math.floor(Math.random() * -720) + -20;
                    break;
            }
        };
        Coins.prototype.Move = function () {
            this.y += 3;
        };
        return Coins;
    }(objects.GameObject));
    objects.Coins = Coins;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map