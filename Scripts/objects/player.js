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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(sprite, xPos, yPos, swapped) {
            var _this = _super.call(this, sprite) || this;
            _this.isDead = false;
            _this.y = yPos;
            _this.x = xPos;
            _this.swapped = swapped;
            _this.Start();
            return _this;
        }
        Player.prototype.GetShipType = function () {
            return this.shipType;
        };
        // Methods
        Player.prototype.Start = function () {
            this.Swapped();
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound(); // <-- Check collisions
            this.Shoot();
            this.Swapped();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            if (managers.Game.keyboardManager.moveLeft)
                this.x -= 3;
            if (!managers.Game.keyboardManager.moveLeft)
                this.x += 0;
            if (managers.Game.keyboardManager.moveRight)
                this.x += 3;
            if (!managers.Game.keyboardManager.moveRight)
                this.x += 0;
            if (managers.Game.keyboardManager.moveUp)
                this.y -= 3;
            if (!managers.Game.keyboardManager.moveUp)
                this.y += 0;
            if (managers.Game.keyboardManager.moveDown)
                this.y += 3;
            if (!managers.Game.keyboardManager.moveDown)
                this.y += 0;
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= 480 - this.halfW)
                this.x = 480 - this.halfW;
            // Left boundary
            if (this.x <= this.halfW)
                this.x = this.halfW;
            if (this.y >= 720 - this.halfH)
                this.y = 720 - this.halfH;
            if (this.y <= this.halfH)
                this.y = this.halfH;
        };
        Player.prototype.Shoot = function () {
            if (!this.isDead) {
                var ticker = createjs.Ticker.getTicks();
                if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    this.ammoSpawn = new math.Vec2(this.x + 7, this.y - 7);
                    var ammo = managers.Game.ammoManager.GetAmmo();
                    console.log(ammo);
                    ammo.x = this.ammoSpawn.x;
                    ammo.y = this.ammoSpawn.y;
                }
            }
        };
        Player.prototype.Swapped = function () {
            if (!this.swapped)
                this.shipType = config.Ship.Botcoin;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map