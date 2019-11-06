var managers;
(function (managers) {
    var EnemyBullet = /** @class */ (function () {
        // Constructor
        function EnemyBullet() {
            this.Start();
        }
        // Methods
        EnemyBullet.prototype.buildBulletPool = function () {
            // Initialize a pool of ammo assets
            for (var i = 0; i < this.bulletCount; i++) {
                this.Bullet[i] = new objects.EnemyBullet("Enemy_Shot");
            }
        };
        EnemyBullet.prototype.GetBullet = function () {
            var ammo = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if (managers.Game.enemyBulletManager.CurrentBullet > 4) {
                managers.Game.enemyBulletManager.CurrentBullet = 0;
            }
            return ammo;
        };
        EnemyBullet.prototype.Start = function () {
            this.bulletCount = 5;
            this.Bullet = new Array();
            this.CurrentBullet = 0;
            this.buildBulletPool();
        };
        EnemyBullet.prototype.Update = function () {
            this.Bullet.forEach(function (bullet) {
                bullet.Update();
            });
        };
        return EnemyBullet;
    }());
    managers.EnemyBullet = EnemyBullet;
})(managers || (managers = {}));
//# sourceMappingURL=enemybullet.js.map