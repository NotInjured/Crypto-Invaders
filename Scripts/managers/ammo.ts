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
        public buildAmmoPool(shipType:config.Ship, power:number):void {
            // Initialize a pool of ammo assets
            switch(power){
                case 1:
                case 2:
                case 3:
                    switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Laser2");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Bullet");
                        }
                    break;
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Arc1");
                        }
                    break;
                }
                break;

                case 4:
                case 5:
                    switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Laser1");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Bullet");
                        }
                    break;
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Arc2");
                        }
                    break;
                    }

                break;
                case 6:
                case 7:
                    switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Laser3");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Bullet");
                        }
                    break;
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Arc3");
                        }
                    break;
                }

                break;
                case 8:
                case 9:
                    switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Laser4");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Bullet");
                        }
                    break;
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Arc4");
                        }
                    break;
                }

                break;
                case 10:
                    switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Laser5");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Bullet");
                        }
                    break;
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.ammoCount; i++) {
                            this.Ammo[i] = new objects.Ammo("Arc5");
                        }
                    break;
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
            this.ammoCount =100;
            this.Ammo = new Array<objects.Ammo>();
            this.CurrentAmmo = 0;
            this.buildAmmoPool(config.Ship.Botcoin, 1);
        }
        public Update():void {
            this.Ammo.forEach(ammo => {
                ammo.Update();
            });
        } 
    }
} 