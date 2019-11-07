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
        public buildBulletPool(shipType:config.Ship, power:number):void {
            // Initialize a pool of ammo assets
            switch(power){
                case 1:
                case 2:
                case 3:
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
                break;

                case 4:
                case 5:
                    switch(shipType){
                    case config.Ship.Botcoin:
                        for(let i = 0; i < this.bulletCount; i++) {
                            this.Bullet[i] = new objects.Bullet("Laser1");
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

                break;
                case 6:
                case 7:
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

                break;
                case 8:
                case 9:
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

                break;
                case 10:
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

                break;

            }
        }

        public GetBullet(): objects.Bullet {
            let bullet:objects.Bullet = this.Bullet[this.CurrentBullet];
            this.CurrentBullet++;
            if(managers.Game.bulletManager.CurrentBullet > 24) {
                managers.Game.bulletManager.CurrentBullet = 0;
            }

            return bullet;
        }

        public Start():void {
            this.bulletCount =25;
            this.Bullet = new Array<objects.Bullet>();
            this.CurrentBullet = 0;
            this.buildBulletPool(config.Ship.Botcoin, 1);
        }
        public Update():void {
            this.Bullet.forEach(bullet => {
                bullet.Update();
            });
        } 
    }
} 