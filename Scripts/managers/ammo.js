var managers;
(function (managers) {
    var Ammo = /** @class */ (function () {
        // Constructor
        function Ammo() {
            this.Start();
        }
        // Methods
        Ammo.prototype.buildAmmoPool = function () {
            // Initialize a pool of laser assets
            for (var i = 0; i < this.ammoCount; i++) {
                this.Ammo[i] = new objects.Ammo();
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
            this.buildAmmoPool();
            this.CurrentAmmo = 0;
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