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
        public buildAmmoPool(enemy:string):void {
            // Initialize a pool of ammo assets
            switch(enemy){
                case "Enemy":
                    for(let i = 0; i < this.ammoCount; i++) {
                        this.Ammo[i] = new objects.EnemyAmmo("Enemy_Shot");
                    }
                break;
            }
        }

        public GetAmmo(): objects.EnemyAmmo {
            let ammo:objects.EnemyAmmo = this.Ammo[this.CurrentAmmo];
            this.CurrentAmmo++;
            if(managers.Game.enemyAmmoManager.CurrentAmmo > 0) {
                managers.Game.enemyAmmoManager.CurrentAmmo = 0;
             }

            return ammo;
        }

        public Start():void {
            this.ammoCount = 2;
            this.Ammo = new Array<objects.EnemyAmmo>();
            this.CurrentAmmo = 0;
            this.buildAmmoPool("Enemy_Shot");
        }
        public Update():void {
            this.Ammo.forEach(ammo => {
                ammo.Update();
            });
            //this.Ammo.Update();
        } 
    }
} 