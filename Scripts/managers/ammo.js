var managers;
(function (managers) {
    var Ammo = /** @class */ (function () {
        // Constructor
        function Ammo() {
            this.Start();
        }
        // Methods
        Ammo.prototype.buildAmmoPool = function (shipType) {
            // Initialize a pool of laser assets
            switch (shipType) {
                case config.Ship.Botcoin:
                    for (var i = 0; i < this.ammoCount; i++) {
                        this.Ammo[i] = new objects.Ammo("Arc1");
                    }
                    break;
                case config.Ship.Lightcoin:
                    for (var i = 0; i < this.ammoCount; i++) {
                        this.Ammo[i] = new objects.Ammo("Arc2");
                    }
                    break;
                case config.Ship.Enderium:
                    for (var i = 0; i < this.ammoCount; i++) {
                        this.Ammo[i] = new objects.Ammo("Arc3");
                    }
                    break;
            }
        };
        Ammo.prototype.GetAmmo = function () {
            var ammo = this.Ammo[this.CurrentAmmo];
            this.CurrentAmmo++;
            if (managers.Game.ammoManager.CurrentAmmo > 49) {
                managers.Game.ammoManager.CurrentAmmo = 0;
            }
            return ammo;
        };
        Ammo.prototype.Start = function () {
            this.ammoCount = 50;
            this.Ammo = new Array();
            this.CurrentAmmo = 0;
            this.buildAmmoPool(config.Ship.Botcoin);
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