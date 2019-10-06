module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
        private shipType:config.Ship;
        private ammoSpawn:math.Vec2;
        public swapped:boolean;
        private power:number;

        get ShipType():config.Ship{
            return this.shipType;
        }

        set ShipType(type:config.Ship){
            this.shipType = type;
        }

        get POWER():number{
            return this.power;
        }

        set POWER(num:number){
            this.power = num;
        }

        // Constructor
        constructor(sprite, xPos:number, yPos:number, swapped:boolean, power:number) {
            super(sprite);          
            this.isDead = false;
            this.y = yPos;
            this.x = xPos;
            this.swapped = swapped;
            this.power = power;

            this.Start();
        }
        // Methods
        public Start():void {
            this.Swapped();
        }
        public Update():void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
            this.Shoot();
            this.Swapped();
        }
        public Reset():void {}

        public Move():void {
            if(managers.Game.keyboardManager.moveLeft)
            this.x -= 3;
            if(!managers.Game.keyboardManager.moveLeft)
            this.x += 0;

            if(managers.Game.keyboardManager.moveRight)
            this.x += 3;
            if(!managers.Game.keyboardManager.moveRight)
            this.x += 0;

            if(managers.Game.keyboardManager.moveUp)
            this.y -= 3;
            if(!managers.Game.keyboardManager.moveUp)
            this.y += 0;

            if(managers.Game.keyboardManager.moveDown)
            this.y += 3;
            if(!managers.Game.keyboardManager.moveDown)
            this.y += 0;
        }

        public CheckBound():void {
            // Right boundary
            if(this.x >= 480) 
                this.x = 480;

            // Left boundary
            if(this.x <= this.halfW) 
                this.x = this.halfW;  

            if(this.y >= 720)
                this.y = 720;
            
            if(this.y <= this.halfH)
                this.y = this.halfH;

        }

        public Shoot():void{
            if(!this.isDead || this.swapped) {
                let ticker:number = createjs.Ticker.getTicks();

                if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    switch(this.ShipType){
                        case config.Ship.Botcoin:
                                if(this.POWER >= 1 && this.POWER <= 3){
                                    this.ammoSpawn = new math.Vec2(this.x - 15.35, this.y - 35);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER >= 4 && this.POWER <= 5){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER >= 6 && this.POWER <= 7){
                                    this.ammoSpawn = new math.Vec2(this.x - 12.5, this.y - 25);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER >= 8 && this.POWER <= 9){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER == 10){
                                    this.ammoSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                        break;
                        case config.Ship.Lightcoin:
                                if(this.POWER >=1 && this.POWER <= 10){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                        break;
                        case config.Ship.Enderium:
                                if(this.POWER >= 1 && this.POWER <= 3){
                                    this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 35);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER >= 4 && this.POWER <= 5){
                                    this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 35);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER >= 6 && this.POWER <= 7){
                                    this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 35);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER >= 8 && this.POWER <= 9){
                                    this.ammoSpawn = new math.Vec2(this.x - 7, this.y - 30);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }
                                else if(this.POWER == 10){
                                    this.ammoSpawn = new math.Vec2(this.x + 4, this.y - 25);
            
                                    let ammo = managers.Game.ammoManager.GetAmmo();
                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y; 
                                }

                        break;
                    }
                    // Botcoin Ship
                    
                    // Lightcoin Ship
                    
                    // Enderium Ship
                    
                }  
            }
        }

        public Swapped():void{
            if(!this.swapped)
                this.shipType = config.Ship.Botcoin;
        }
    }
}