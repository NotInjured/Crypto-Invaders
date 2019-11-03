module managers {
    export class EnemyAmmo {
        // Variables
        private ammoCount:number;
        public Ammo:objects.EnemyAmmo[];
        public CurrentAmmo:number;

        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        public buildAmmoPool():void {
            // Initialize a pool of ammo assets
            for(let i = 0; i < this.ammoCount; i++) {
                this.Ammo[i] = new objects.EnemyAmmo("Enemy_Shot");
            }
        }

        public GetAmmo(): objects.EnemyAmmo {
            let ammo:objects.EnemyAmmo = this.Ammo[this.CurrentAmmo];
            this.CurrentAmmo++;
            if(managers.Game.enemyAmmoManager.CurrentAmmo > 49) {
                managers.Game.enemyAmmoManager.CurrentAmmo = 0;
             }

            return ammo;
        }

        public Start():void {
            this.ammoCount = 50;
            this.Ammo = new Array<objects.EnemyAmmo>();
            this.CurrentAmmo = 0;
            this.buildAmmoPool();
        }
        public Update():void {
            this.Ammo.forEach(ammo => {
                ammo.Update();
            });
        } 
    }
} 