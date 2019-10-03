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
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "ship1") || this;
            document.addEventListener("keydown", _this.keyDown.bind(_this), false);
            document.addEventListener("keyup", _this.keyUp.bind(_this), false);
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
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            if (this.leftArrow)
                this.x -= 3;
            if (!this.leftArrow)
                this.x += 0;
            if (this.rightArrow)
                this.x += 3;
            if (!this.rightArrow)
                this.x += 0;
            if (this.upArrow)
                this.y -= 3;
            if (!this.upArrow)
                this.y += 0;
            if (this.downArrow)
                this.y += 3;
            if (!this.downArrow)
                this.y += 0;
            /* code to spawn bullets, implemented later
            if(this.shoot)
            
            if(!this.shoot)*/
            /* code to spawn bomb
            if(this.special)
             
            if(!this.special)
            */
            /* code to swap ship
            if(this.swap)

            if(!this.swap)
            */
        };
        Player.prototype.ChangeShip = function () {
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
            if (this.shoot)
                console.log("Shooting...");
        };
        Player.prototype.keyDown = function (event) {
            switch (event.keyCode) {
                case 37:
                    this.leftArrow = true;
                    break;
                case 39:
                    this.rightArrow = true;
                    break;
                case 38:
                    this.upArrow = true;
                    break;
                case 40:
                    this.downArrow = true;
                    break;
                case 88:
                    this.shoot = true;
                    break;
                case 90:
                    this.special = true;
                    console.log("Using special...");
                    break;
                case 32:
                    this.swap = true;
                    this.ChangeShip();
                    break;
            }
        };
        Player.prototype.keyUp = function (event) {
            switch (event.keyCode) {
                case 37:
                    this.leftArrow = false;
                    break;
                case 39:
                    this.rightArrow = false;
                    break;
                case 38:
                    this.upArrow = false;
                    break;
                case 40:
                    this.downArrow = false;
                    break;
                case 88:
                    this.shoot = false;
                    break;
                case 90:
                    this.special = false;
                    break;
                case 32:
                    this.swap = false;
                    break;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map