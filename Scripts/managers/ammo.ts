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
        public buildAmmoPool(shipType:config.Ship):void {
            // Initialize a pool of laser assets
            switch(shipType){
                case config.Ship.Botcoin:
                    for(let i = 0; i < this.ammoCount; i++) {
                        this.Ammo[i] = new objects.Ammo("Arc1");
                    }
                break;
                case config.Ship.Lightcoin:
                    for(let i = 0; i < this.ammoCount; i++) {
                        this.Ammo[i] = new objects.Ammo("Arc2");
                    }
                break;
                case config.Ship.Enderium:
                    for(let i = 0; i < this.ammoCount; i++) {
                        this.Ammo[i] = new objects.Ammo("Arc3");
                    }
                break;
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
            this.CurrentAmmo = 0;
            this.buildAmmoPool(config.Ship.Botcoin);
        }
        public Update():void {
            this.Ammo.forEach(ammo => {
                ammo.Update();
            });
        } 
    }
} 