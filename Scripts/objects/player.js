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
        function Player() {
            var _this = _super.call(this, "Ship1") || this;
            _this.isDead = false;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            // Set the initial position
            this.y = 600;
            this.x = 240;
            this.swapTimer = 15;
            this.shipType = config.Ship.Botcoin;
            //this.scaleX = 0.25;
            //this.scaleY = 0.25;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound(); // <-- Check collisions
            this.Shoot();
            this.ChangeShip();
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
        Player.prototype.ChangeShip = function () {
            if (managers.Game.keyboardManager.swap) {
                switch (this.shipType) {
                    case config.Ship.Botcoin:
                        this.shipType = config.Ship.Lightcoin;
                        console.log("Changing to Lightcoin Ship");
                        break;
                    case config.Ship.Lightcoin:
                        this.shipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");
                        break;
                    case config.Ship.Enderium:
                        this.shipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");
                        break;
                }
            }
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
                    // Position our laser spawner
                    this.ammoSpawn = new math.Vec2(this.x + 7, this.y - 7);
                    // IDEAL
                    var ammo = managers.Game.ammoManager.GetAmmo();
                    ammo.x = this.ammoSpawn.x;
                    ammo.y = this.ammoSpawn.y;
                }
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map