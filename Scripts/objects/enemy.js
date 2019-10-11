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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy() {
            var _this = _super.call(this, "Enemy") || this;
            // Variables
            _this.isDead = false;
            _this.shoot = false;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Enemy.prototype, "Shoot", {
            get: function () {
                return this.shoot;
            },
            set: function (s) {
                this.shoot = s;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        Enemy.prototype.Start = function () {
            this.x = Math.floor(Math.random() * 430) + 50;
            this.y = Math.floor(Math.random() * -720) + -50;
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            if (this.isDead) {
                this.Reset();
            }
        };
        Enemy.prototype.Reset = function () {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            this.x = Math.floor(Math.random() * 430) + 50;
            this.y = Math.floor(Math.random() * -720) + -50;
        };
        Enemy.prototype.Move = function () {
            if (this.y >= 300 && !this.back) {
                this.ShootPlayer();
                this.back = true;
            }
            else if (this.y < 300 && !this.back) {
                this.y -= -5;
            }
            else if (this.back && this.y > -200) {
                this.y -= 2;
            }
            else if (this.back && this.y < -190) {
                this.Reset();
            }
        };
        Enemy.prototype.CheckBounds = function () {
            // Check the bottom boundary
            if (this.y >= 720 + this.height) {
                this.y = -50;
            }
        };
        Enemy.prototype.FindPlayerAngle = function (player) {
            this.angle = Math.atan2(player.y - this.y, player.x - this.x);
            this.angle = this.angle * (180 / Math.PI);
            this.rotation = -90 + this.angle;
        };
        Enemy.prototype.ShootPlayer = function () {
            if (!this.isDead && !this.shoot) {
                this.ammoSpawn = new math.Vec2(this.x - 17, this.y + 10);
                var ammo = new objects.EnemyAmmo("Enemy_Shot");
                ammo.rotation = 90 + this.angle;
                console.log(ammo);
                //ammo.VelX += velocityX;
                //ammo.VelY += velocityY;
                ammo.x = this.ammoSpawn.x;
                ammo.y = this.ammoSpawn.y;
                //ammo.VelY = 25;
                managers.Game.stage.addChild(ammo);
                this.shoot = true;
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map