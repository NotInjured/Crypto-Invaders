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
        function Coins(sprite) {
            var _this = _super.call(this, sprite) || this;
            _this.coin = sprite;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Coins.prototype, "Dir", {
            get: function () {
                return this.dir;
            },
            set: function (d) {
                this.dir = d;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Coins.prototype, "Position", {
            get: function () {
                return this.position;
            },
            set: function (p) {
                this.position = p;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Coins.prototype, "IsDropped", {
            get: function () {
                return this.isDropped;
            },
            set: function (d) {
                this.isDropped = d;
            },
            enumerable: true,
            configurable: true
        });
        Coins.prototype.Start = function () {
            if (managers.Game.currentScene == config.Scene.OPTIONS ||
                managers.Game.currentScene == config.Scene.START ||
                managers.Game.currentScene == config.Scene.OVER) {
                switch (this.coin) {
                    case "B_coin":
                        this.x = Math.floor(Math.random() * (712 - 370 + 1) + 370);
                        this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                    case "L_coin":
                        this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                        this.y = Math.floor(Math.random() * -720) + -50;
                        break;
                    case "E_coin":
                        this.x = Math.floor(Math.random() * (1050 - 745 + 1) + 745);
                        this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                }
            }
            if (managers.Game.currentScene == config.Scene.GAME)
                this.Update();
        };
        Coins.prototype.Update = function () {
            if (this.isDropped) {
                this.FindPlayer();
                this.Move();
            }
            if (!this.isDropped) {
                this.Move();
                if (this.y > 740)
                    this.Reset();
            }
        };
        Coins.prototype.Main = function () {
        };
        Coins.prototype.Reset = function () {
            if (managers.Game.currentScene == config.Scene.OPTIONS ||
                managers.Game.currentScene == config.Scene.START ||
                managers.Game.currentScene == config.Scene.OVER) {
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
            }
        };
        Coins.prototype.Move = function () {
            if (!this.isDropped)
                this.y += 3;
            if (this.isDropped) {
                this.x += this.dir.x;
                this.y += this.dir.y;
            }
        };
        Coins.prototype.FindPlayer = function () {
            var playerPos = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            this.position = new math.Vec2(this.x, this.y);
            this.distance = math.Vec2.Distance(playerPos, this.position);
            this.dir = new math.Vec2(((playerPos.x - this.position.x) / this.distance) * 5, ((playerPos.y - this.position.y) / this.distance) * 5);
        };
        return Coins;
    }(objects.GameObject));
    objects.Coins = Coins;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map