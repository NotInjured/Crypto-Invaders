var managers;
(function (managers) {
    var EnemyBullet = /** @class */ (function () {
        // Constructor
        function EnemyBullet() {
            this.Start();
        }
        // Methods
        EnemyBullet.prototype.buildBulletPool = function (pattern) {
            // Initialize a pool of ammo assets
            for (var i = 0; i < this.bulletCount; i++) {
                if (pattern)
                    this.Bullet[i] = new objects.EnemyBullet("Enemy1_Shot", true);
                else
                    this.Bullet[i] = new objects.EnemyBullet("Enemy1_Shot", false);
            }
        };
        EnemyBullet.prototype.GetBullet = function () {
            var bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if (managers.Game.enemyBulletManager.CurrentBullet > 2999) {
                managers.Game.enemyBulletManager.CurrentBullet = 0;
            }
            return bullet;
        };
        EnemyBullet.prototype.Start = function () {
            this.bulletCount = 3000;
            this.Bullet = new Array();
            this.CurrentBullet = 0;
            this.buildBulletPool(true);
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