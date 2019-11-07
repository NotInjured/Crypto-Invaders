var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        // Constructor
        function Bullet() {
            this.Start();
        }
        // Methods
        Bullet.prototype.buildBulletPool = function (shipType, power) {
            // Initialize a pool of ammo assets
            switch (power) {
                case 1:
                case 2:
                case 3:
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
                    break;
                case 4:
                case 5:
                    switch (shipType) {
                        case config.Ship.Botcoin:
                            for (var i = 0; i < this.bulletCount; i++) {
                                this.Bullet[i] = new objects.Bullet("Laser1");
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
                    break;
                case 6:
                case 7:
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
                    break;
                case 8:
                case 9:
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
                    break;
                case 10:
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
                    break;
            }
        };
        Bullet.prototype.GetBullet = function () {
            var bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if (managers.Game.bulletManager.CurrentBullet > 24) {
                managers.Game.bulletManager.CurrentBullet = 0;
            }
            return bullet;
        };
        Bullet.prototype.Start = function () {
            this.bulletCount = 25;
            this.Bullet = new Array();
            this.CurrentBullet = 0;
            this.buildBulletPool(config.Ship.Botcoin, 1);
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