var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        // Constructor
        function Bullet() {
            this.Start();
        }
        // Methods
        Bullet.prototype.buildBulletPool = function (shipType) {
            // Initialize a pool of ammo assets
            if (managers.Game.hud.Power < 40) {
                switch (shipType) {
                    case config.Ship.Botcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser2");
                        }
                        break;
                    case config.Ship.Lightcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                        break;
                }
            }
            if (managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) {
                switch (shipType) {
                    case config.Ship.Botcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser2");
                        }
                        break;
                    case config.Ship.Lightcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                        break;
                }
            }
            if (managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) {
                switch (shipType) {
                    case config.Ship.Botcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser3");
                        }
                        break;
                    case config.Ship.Lightcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                        break;
                }
            }
            if (managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) {
                switch (shipType) {
                    case config.Ship.Botcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser4");
                        }
                        break;
                    case config.Ship.Lightcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                        break;
                }
            }
            if (managers.Game.hud.Power >= 160) {
                switch (shipType) {
                    case config.Ship.Botcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser5");
                        }
                        break;
                    case config.Ship.Lightcoin:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                        break;
                }
            }
        };
        Bullet.prototype.GetBullet = function () {
            var bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if (managers.Game.bulletManager.CurrentBullet > 999)
                managers.Game.bulletManager.CurrentBullet = 0;
            return bullet;
        };
        Bullet.prototype.Start = function () {
            if (managers.Game.single)
                this.bulletCount = 1000;
            if (managers.Game.multi)
                this.bulletCount = 500;
            this.Bullet = new Array();
            this.CurrentBullet = 0;
            this.buildBulletPool(config.Ship.Botcoin);
        };
        Bullet.prototype.Update = function () {
            this.Bullet.forEach(function (bullet) {
                bullet.Update();
            });
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map