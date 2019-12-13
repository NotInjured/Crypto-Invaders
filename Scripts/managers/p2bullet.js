var managers;
(function (managers) {
    var P2Bullet = /** @class */ (function () {
        // Constructor
        function P2Bullet() {
            this.Start();
        }
        // Methods
        P2Bullet.prototype.buildBulletPool = function (shipType) {
            // Initialize a pool of ammo assets
            if (managers.Game.hud.P2Power < 40) {
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
            if (managers.Game.hud.P2Power >= 40 && managers.Game.hud.P2Power < 80) {
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
            if (managers.Game.hud.P2Power >= 80 && managers.Game.hud.P2Power < 120) {
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
            if (managers.Game.hud.P2Power >= 120 && managers.Game.hud.P2Power < 160) {
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
            if (managers.Game.hud.P2Power >= 160) {
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
        P2Bullet.prototype.GetBullet = function () {
            var bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if (managers.Game.bulletManager.CurrentBullet > 950)
                managers.Game.bulletManager.CurrentBullet = 0;
            return bullet;
        };
        P2Bullet.prototype.Start = function () {
            this.bulletCount = 1000;
            this.Bullet = new Array();
            this.CurrentBullet = 0;
            this.buildBulletPool(config.Ship.Botcoin);
        };
        P2Bullet.prototype.Update = function () {
            this.Bullet.forEach(function (bullet) {
                bullet.Update();
            });
        };
        return P2Bullet;
    }());
    managers.P2Bullet = P2Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=p2bullet.js.map