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
        public buildBulletPool(pattern:Boolean):void {
            // Initialize a pool of ammo assets
            for(let i = 0; i < this.bulletCount; i++) {
                if(pattern){
                    this.Bullet[i] = new objects.EnemyBullet("Enemy1_Shot", true);

                }
                if(!pattern)
                    this.Bullet[i] = new objects.EnemyBullet("Enemy1_Shot", false);
            }
        }

        public GetBullet(): objects.EnemyBullet {
            let bullet:objects.EnemyBullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if(managers.Game.enemyBulletManager.CurrentBullet > 499) {
                managers.Game.enemyBulletManager.CurrentBullet = 0;
             }

            return bullet;
        }

        public Start():void {
            this.bulletCount = 500;
            this.Bullet = new Array<objects.EnemyBullet>();
            this.CurrentBullet = 0;
            this.buildBulletPool(true);
        }
        public Update():void {
            this.Bullet.forEach(bullet => {
                bullet.Update();
            });
        } 
    }
} 