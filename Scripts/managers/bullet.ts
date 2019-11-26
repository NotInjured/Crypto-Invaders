module managers {
    export class Bullet {
        // Variables
        private bulletCount:number;
        public Bullet:objects.Bullet[];
        public CurrentBullet:number;

        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        public buildBulletPool(shipType:config.Ship):void {
            // Initialize a pool of ammo assets
            if(managers.Game.hud.Power < 40){
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
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc1");
                        }
                    break;
                }
            }
            if(managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80){
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
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc2");
                        }
                    break;
                }
            }
            if(managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120){
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
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc3");
                        }
                    break;
                }
            }
            if(managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160){
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
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc4");
                        }
                    break;
                }
            }
            if(managers.Game.hud.Power >= 160){
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
                    case config.Ship.Enderium:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Arc5");
                        }
                    break;
                }
            }
        }

        public GetBullet(): objects.Bullet {
            let bullet:objects.Bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if(managers.Game.bulletManager.CurrentBullet > 1999)
                managers.Game.bulletManager.CurrentBullet = 0
            return bullet;
        }

        public Start():void {
            this.bulletCount =2000;
            this.Bullet = new Array<objects.Bullet>();
            this.CurrentBullet = 0;
            this.buildBulletPool(config.Ship.Botcoin);
        }
        public Update():void {
            this.Bullet.forEach(bullet => {
                bullet.Update();
            });
        }
    }
} 