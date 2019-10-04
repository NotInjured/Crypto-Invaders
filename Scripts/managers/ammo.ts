module managers {
    export class Ammo {
        // Variables
        private ammoCount:number; 

        public Ammo:objects.Ammo[];
        public CurrentAmmo:number;
        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        private buildAmmoPool():void {
            // Initialize a pool of laser assets
            for(let i = 0; i < this.ammoCount; i++) {
                this.Ammo[i] = new objects.Ammo("Bullet");
            }
        }

        public GetAmmo(): objects.Ammo {
            let ammo:objects.Ammo = this.Ammo[this.CurrentAmmo];
            this.CurrentAmmo++;
            if(managers.Game.ammoManager.CurrentAmmo > 49) {
                managers.Game.ammoManager.CurrentAmmo = 0;
            }

            return ammo;
        }

        public Start():void {
            this.ammoCount = 50;
            this.Ammo = new Array<objects.Ammo>();
            this.buildAmmoPool();
            this.CurrentAmmo = 0;
        }
        public Update():void {
            this.Ammo.forEach(ammo => {
                ammo.Update();
            });
        } 
    }
} 