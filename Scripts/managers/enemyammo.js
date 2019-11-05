var managers;
(function (managers) {
    var EnemyAmmo = /** @class */ (function () {
        // Constructor
        function EnemyAmmo() {
            this.Start();
        }
        // Methods
        EnemyAmmo.prototype.buildAmmoPool = function () {
            // Initialize a pool of ammo assets
            for (var i = 0; i < this.ammoCount; i++) {
                this.Ammo[i] = new objects.EnemyAmmo("Enemy_Shot");
            }
        };
        EnemyAmmo.prototype.GetAmmo = function () {
            var ammo = this.Ammo[this.CurrentAmmo];
            this.CurrentAmmo++;
            if (managers.Game.enemyAmmoManager.CurrentAmmo > 4) {
                managers.Game.enemyAmmoManager.CurrentAmmo = 0;
            }
            return ammo;
        };
        EnemyAmmo.prototype.Start = function () {
            this.ammoCount = 5;
            this.Ammo = new Array();
            this.CurrentAmmo = 0;
            this.buildAmmoPool();
        };
        EnemyAmmo.prototype.Update = function () {
            this.Ammo.forEach(function (ammo) {
                ammo.Update();
            });
        };
        return EnemyAmmo;
    }());
    managers.EnemyAmmo = EnemyAmmo;
})(managers || (managers = {}));
//# sourceMappingURL=enemyammo.js.map