module managers {
    export class EnemyBullet {
        // Variables
        private bulletCount:number;
        public Bullet:objects.EnemyBullet[];
        public CurrentBullet:number;

        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        public buildBulletPool():void {
            // Initialize a pool of ammo assets
            for(let i = 0; i < this.bulletCount; i++) {
                this.Bullet[i] = new objects.EnemyBullet("Enemy_Shot");
            }
        }

        public GetBullet(): objects.EnemyBullet {
            let ammo:objects.EnemyBullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if(managers.Game.enemyBulletManager.CurrentBullet > 4) {
                managers.Game.enemyBulletManager.CurrentBullet = 0;
             }

            return ammo;
        }

        public Start():void {
            this.bulletCount = 5;
            this.Bullet = new Array<objects.EnemyBullet>();
            this.CurrentBullet = 0;
            this.buildBulletPool();
        }
        public Update():void {
            this.Bullet.forEach(bullet => {
                bullet.Update();
            });
        } 
    }
} 