module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
        private shipType:config.Ship;
        private ammoSpawn:math.Vec2;
        public swapped:boolean;
        private power:number;
        private effect:objects.Effect;

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
            if(this.x >= 710) 
                this.x = 710;

            // Left boundary
            if(this.x <= 380) 
                this.x = 380;  

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
                                    this.ammoSpawn = new math.Vec2(this.x - 15.35, this.y - 40);
                                    
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 4 && this.POWER <= 5){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);

                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 6 && this.POWER <= 7){
                                    this.ammoSpawn = new math.Vec2(this.x - 12.5, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 8 && this.POWER <= 9){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER == 10){
                                    this.ammoSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect); 
                                }
                        break;
                        case config.Ship.Lightcoin:
                                if(this.POWER >=1 && this.POWER <= 10){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y -30);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect); 
                                }
                        break;
                        case config.Ship.Enderium:
                                if(this.POWER >= 1 && this.POWER <= 3){
                                    this.ammoSpawn = new math.Vec2(this.x - 10.5, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y -41);
                                    this.effect.on("animationend", this.animationEnded);

                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 4 && this.POWER <= 5){
                                    this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y -41);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 6 && this.POWER <= 7){
                                    this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 35);
            
                                    this.effect = new objects.Effect("Arc2_Shoot", this.x - 6.5, this.y -28);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 8 && this.POWER <= 9){
                                    this.ammoSpawn = new math.Vec2(this.x - 7, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc4_Shoot", this.x - 7, this.y -29);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER == 10){
                                    this.ammoSpawn = new math.Vec2(this.x + 4, this.y - 40);
            
                                    this.effect = new objects.Effect("Arc5_Shoot", this.x, this.y -21);
                                    this.effect.on("animationend", this.animationEnded);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }

                        break;
                    }
                }
            }
        }

        private animationEnded():void {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        }

        public Swapped():void{
            if(!this.swapped)
                this.shipType = config.Ship.Botcoin;
        }
    }
}