module managers {
    export class Missile {
        // Variables
        private missileCount:number;
        public Missile:objects.Missile[];
        public CurrentMissile:number;

        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        public buildMissilePool():void {
            // Initialize a pool of ammo assets
            for(let i = 0; i < this.missileCount; i++) {
                this.Missile[i] = new objects.Missile("Enemy5_Shot");
            }
                    
        }

        public GetMissile(): objects.Missile {
            let missile:objects.Missile = this.Missile[this.CurrentMissile];
            this.CurrentMissile++;
            if(managers.Game.missileManager.CurrentMissile > 3) {
                managers.Game.missileManager.CurrentMissile = 0;
            }

            return missile;
        }

        public Start():void {
            this.missileCount = 4;
            this.Missile = new Array<objects.Missile>();
            this.CurrentMissile = 0;
            this.buildMissilePool();
        }
        public Update():void {
            this.Missile.forEach(m => {
                m.Update();
            });
        } 
    }
} 