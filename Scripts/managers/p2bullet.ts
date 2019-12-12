module managers {
    export class P2Bullet {
        // Variables
        private bulletCount:number;
        public Bullet:objects.Bullet[];
        public CurrentBullet:number;
        public Player:string

        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        public buildBulletPool(shipType:config.Ship):void {
            // Initialize a pool of ammo assets
            if(managers.Game.hud.P2Power < 40){
                switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser2");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                    break;
                }
            }
            if(managers.Game.hud.P2Power >= 40 && managers.Game.hud.P2Power < 80){
                switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser2");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                    break;
                }
            }
            if(managers.Game.hud.P2Power >= 80 && managers.Game.hud.P2Power < 120){
                switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser3");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                    break;
                }
            }
            if(managers.Game.hud.P2Power >= 120 && managers.Game.hud.P2Power < 160){
                switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser4");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                    break;
                }
            }
            if(managers.Game.hud.P2Power >= 160){
                switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser5");
                        }
                    break;
                    case config.Ship.Lightcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Bullet");
                        }
                    break;
                }
            }
        }

        public GetBullet(): objects.Bullet {
            let bullet:objects.Bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if(managers.Game.bulletManager.CurrentBullet > 950)
                managers.Game.bulletManager.CurrentBullet = 0
            return bullet;
        }

        public Start():void {
            this.bulletCount =1000
            this.Bullet = new Array<objects.Bullet>();
            this.CurrentBullet = 0;
            this.buildBulletPool(config.Ship.Botcoin)
        }
        public Update():void {
            this.Bullet.forEach(bullet => {
                bullet.Update();
            });
        }
    }
} 