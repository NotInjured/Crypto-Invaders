var managers;
(function (managers) {
    var Ammo = /** @class */ (function () {
        // Constructor
        function Ammo() {
            this.Start();
        }
        // Methods
        Ammo.prototype.buildAmmoPool = function (shipType, power) {
            // Initialize a pool of ammo assets
            switch (power) {
                case 1:
                case 2:
                case 3:
                    switch (shipType) {
                        case config.Ship.Botcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Laser2");
                            }
                            break;
                        case config.Ship.Lightcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Bullet");
                            }
                            break;
                        case config.Ship.Enderium:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Arc1");
                            }
                            break;
                    }
                    break;
                case 4:
                case 5:
                    switch (shipType) {
                        case config.Ship.Botcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Laser1");
                            }
                            break;
                        case config.Ship.Lightcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Bullet");
                            }
                            break;
                        case config.Ship.Enderium:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Arc2");
                            }
                            break;
                    }
                    break;
                case 6:
                case 7:
                    switch (shipType) {
                        case config.Ship.Botcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Laser3");
                            }
                            break;
                        case config.Ship.Lightcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Bullet");
                            }
                            break;
                        case config.Ship.Enderium:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Arc3");
                            }
                            break;
                    }
                    break;
                case 8:
                case 9:
                    switch (shipType) {
                        case config.Ship.Botcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Laser4");
                            }
                            break;
                        case config.Ship.Lightcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Bullet");
                            }
                            break;
                        case config.Ship.Enderium:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Arc4");
                            }
                            break;
                    }
                    break;
                case 10:
                    switch (shipType) {
                        case config.Ship.Botcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Laser5");
                            }
                            break;
                        case config.Ship.Lightcoin:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Bullet");
                            }
                            break;
                        case config.Ship.Enderium:
                            for (var i = 0; i < this.ammoCount; i++) {
                                this.Ammo[i] = new objects.Ammo("Arc5");
                            }
                            break;
                    }
                    break;
            }
        };
        Ammo.prototype.GetAmmo = function () {
            var ammo = this.Ammo[this.CurrentAmmo];
            this.CurrentAmmo++;
            if (managers.Game.ammoManager.CurrentAmmo > 24) {
                managers.Game.ammoManager.CurrentAmmo = 0;
            }
            return ammo;
        };
        Ammo.prototype.Start = function () {
            this.ammoCount = 25;
            this.Ammo = new Array();
            this.CurrentAmmo = 0;
            this.buildAmmoPool(config.Ship.Botcoin, 1);
        };
        Ammo.prototype.Update = function () {
            this.Ammo.forEach(function (ammo) {
                ammo.Update();
            });
        };
        return Ammo;
    }());
    managers.Ammo = Ammo;
})(managers || (managers = {}));
//# sourceMappingURL=ammo.js.map