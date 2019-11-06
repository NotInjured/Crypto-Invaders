module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        private shipType:config.Ship;
        private ammoSpawn:math.Vec2;
        public swapped:boolean;
        private power:number;
        private effect:objects.Effect;
        public isInvincible:boolean = false;

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
            if(!this.isDead){
                this.Move();
                this.CheckBound(); // <-- Check collisions
                this.Shoot();
                this.Swapped();
            }

            if(managers.Game.hud.Lives >= 0 && this.isDead){
                this.isInvincible = true;
                if(this.isInvincible){
                    this.RespawnTimer();
                }
            }
        }
        public Reset():void {
            this.isDead = true;
            this.alpha = 0;
            this.x = 555;
            this.y = 675;
        }

        public Move():void {
            if(managers.Game.keyboardManager.moveLeft)
            this.x -= 4;
            if(!managers.Game.keyboardManager.moveLeft)
            this.x += 0;

            if(managers.Game.keyboardManager.moveRight)
            this.x += 4;
            if(!managers.Game.keyboardManager.moveRight)
            this.x += 0;

            if(managers.Game.keyboardManager.moveUp)
            this.y -= 4;
            if(!managers.Game.keyboardManager.moveUp)
            this.y += 0;

            if(managers.Game.keyboardManager.moveDown)
            this.y += 4;
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

                if((managers.Game.keyboardManager.shoot) && (ticker % 15 == 0)) {
                    switch(this.ShipType){
                        case config.Ship.Botcoin:
                                if(this.POWER >= 1 && this.POWER <= 3){
                                    this.ammoSpawn = new math.Vec2(this.x - 15.35, this.y - 40);
                                    
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    let laser = createjs.Sound.play("laser");
                                    laser.volume = 0.1;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 4 && this.POWER <= 5){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);

                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 6 && this.POWER <= 7){
                                    this.ammoSpawn = new math.Vec2(this.x - 12.5, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 8 && this.POWER <= 9){
                                    this.ammoSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER == 10){
                                    this.ammoSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    
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

                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 4 && this.POWER <= 5){
                                    this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y -41);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 6 && this.POWER <= 7){
                                    this.ammoSpawn = new math.Vec2(this.x - 10, this.y - 35);
            
                                    this.effect = new objects.Effect("Arc2_Shoot", this.x - 6.5, this.y -28);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER >= 8 && this.POWER <= 9){
                                    this.ammoSpawn = new math.Vec2(this.x - 7, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc4_Shoot", this.x - 7, this.y -29);
                                    
                                    let ammo = managers.Game.ammoManager.GetAmmo();

                                    console.log(ammo);
                        
                                    ammo.x = this.ammoSpawn.x;
                                    ammo.y = this.ammoSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(this.POWER == 10){
                                    this.ammoSpawn = new math.Vec2(this.x + 4, this.y - 40);
            
                                    this.effect = new objects.Effect("Arc5_Shoot", this.x, this.y -21);
                                    
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

        public Swapped():void{
            if(!this.swapped)
                this.shipType = config.Ship.Botcoin;
        }

        public RespawnTimer():void{
            let counter = 2;

            let interval = setInterval(() =>{
               counter--;
                if(counter < 0){
                    clearInterval(interval);
                    this.isDead = false;
                    this.alpha = 1;
                    this.isInvincible = false;
                    if(managers.Game.hud.Lives < 0){
                        managers.Game.over = true;
                        managers.Game.currentScene = config.Scene.OVER;
                    }
                }
            }, 750)
        }
    }
}