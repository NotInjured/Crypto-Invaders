var managers;
(function (managers) {
    var Missile = /** @class */ (function () {
        // Constructor
        function Missile() {
            this.Start();
        }
        // Methods
        Missile.prototype.buildMissilePool = function () {
            // Initialize a pool of ammo assets
            for (var i = 0; i < this.missileCount; i++) {
                this.Missile[i] = new objects.Missile("Enemy5_Shot");
            }
        };
        Missile.prototype.GetMissile = function () {
            var missile = this.Missile[this.CurrentMissile];
            this.CurrentMissile++;
            if (managers.Game.missileManager.CurrentMissile > 3) {
                managers.Game.missileManager.CurrentMissile = 0;
            }
            if (managers.Game.P1MissileManager.CurrentMissile > 3) {
                managers.Game.P1MissileManager.CurrentMissile = 0;
            }
            if (managers.Game.P2MissileManager.CurrentMissile > 3) {
                managers.Game.P2MissileManager.CurrentMissile = 0;
            }
            return missile;
        };
        Missile.prototype.Start = function () {
            this.missileCount = 4;
            this.Missile = new Array();
            this.CurrentMissile = 0;
            this.buildMissilePool();
        };
        Missile.prototype.Update = function () {
            this.Missile.forEach(function (m) {
                m.Update();
            });
        };
        return Missile;
    }());
    managers.Missile = Missile;
})(managers || (managers = {}));
//# sourceMappingURL=missile.js.map