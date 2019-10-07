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
        function Player(sprite, xPos, yPos, swapped, power) {
            var _this = _super.call(this, sprite) || this;
            _this.isDead = false;
            _this.y = yPos;
            _this.x = xPos;
            _this.swapped = swapped;
            _this.power = power;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Player.prototype, "ShipType", {
            get: function () {
                return this.shipType;
            },
            set: function (type) {
                this.shipType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "POWER", {
            get: function () {
                return this.power;
            },
            set: function (num) {
                this.power = num;
            },
            enumerable: true,
            configurable: true
        });
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
            if (this.x >= 480)
                this.x = 480;
            // Left boundary
            if (this.x <= this.halfW)
                this.x = this.halfW;
            if (this.y >= 720)
                this.y = 720;
            if (this.y <= this.halfH)
                this.y = this.halfH;
        };
        Player.prototype.Shoot = function () {
            if (!this.isDead || this.swapped) {
                var ticker = createjs.Ticker.getTicks();
                if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    switch (this.ShipType) {
                        case config.Ship.Botcoin:
                            if (this.POWER >= 1 && this.POWER <= 3) {
                                this.ammoSpawn = new math.Vec2(this.x - 15.35, this.y - 40);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 4 && this.POWER <= 5) {
                                this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 6 && this.POWER <= 7) {
                                this.ammoSpawn = new math.Vec2(this.x - 12.5, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 8 && this.POWER <= 9) {
                                this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER == 10) {
                                this.ammoSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y - 43);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            break;
                        case config.Ship.Lightcoin:
                            if (this.POWER >= 1 && this.POWER <= 10) {
                                this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
                                this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            break;
                        case config.Ship.Enderium:
                            if (this.POWER >= 1 && this.POWER <= 3) {
                                this.ammoSpawn = new math.Vec2(this.x - 10.5, this.y - 45);
                                this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y - 41);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 4 && this.POWER <= 5) {
                                this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 45);
                                this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y - 41);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 6 && this.POWER <= 7) {
                                this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 35);
                                this.effect = new objects.Effect("Arc2_Shoot", this.x - 6.5, this.y - 28);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER >= 8 && this.POWER <= 9) {
                                this.ammoSpawn = new math.Vec2(this.x - 7, this.y - 45);
                                this.effect = new objects.Effect("Arc4_Shoot", this.x - 7, this.y - 29);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            else if (this.POWER == 10) {
                                this.ammoSpawn = new math.Vec2(this.x + 4, this.y - 40);
                                this.effect = new objects.Effect("Arc5_Shoot", this.x, this.y - 21);
                                this.effect.on("animationend", this.animationEnded);
                                var ammo = managers.Game.ammoManager.GetAmmo();
                                console.log(ammo);
                                ammo.x = this.ammoSpawn.x;
                                ammo.y = this.ammoSpawn.y;
                                managers.Game.currentSceneObject.addChild(this.effect);
                            }
                            break;
                    }
                    // Botcoin Ship
                    // Lightcoin Ship
                    // Enderium Ship
                }
            }
        };
        Player.prototype.animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
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