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
                    case config.Ship.Enderium:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc1");
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
                    case config.Ship.Enderium:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc2");
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
                    case config.Ship.Enderium:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc3");
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
                    case config.Ship.Enderium:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc4");
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
                    case config.Ship.Enderium:
                        for (var i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc5");
                        }
                        break;
                }
            }
        };
        Bullet.prototype.GetBullet = function () {
            var bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if (managers.Game.bulletManager.CurrentBullet > 74) {
                managers.Game.bulletManager.CurrentBullet = 0;
            }
            return bullet;
        };
        Bullet.prototype.Start = function () {
            this.bulletCount = 75;
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