module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        public swapped:boolean;
        private isInvincible:boolean = false;

        private power:number;
        private shootnum:number = 0

        private shipType:config.Ship;

        private bulletSpawn:math.Vec2;

        private effect:objects.Effect;
        private missile:objects.Missile;

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

        get IsInvincible():boolean{
            return this.isInvincible;
        }

        set IsInvincible(i:boolean){
            this.isInvincible = i;
        }

        // Constructor
        constructor(sprite, xPos:number, yPos:number, swapped:boolean) {
            super(sprite);          
            this.y = yPos;
            this.x = xPos;
            this.swapped = swapped;
            this.Start();
        }
        // Methods
        public Start():void {
            
            this.Swapped();
        }
        public Update():void {
            if(!this.isDead){
                this.CheckBound(); // <-- Check collisions
                if(managers.Game.keyboardManager.enabled){
                    this.Move();
                    this.Shoot();
                    this.Swapped();
                    if(managers.Game.hud.Power > 20)
                        this.ShootMissiles();
                }

                if(this.missile != undefined)
                    this.missile.Update()
            }
        }

        public Reset():void {
            this.isDead = true
            managers.Game.p1 = false
            managers.Game.p2 = false
            managers.Game.p3 = false
            managers.Game.p4 = false
            managers.Game.p5 = false
            this.RespawnTimer()
        }

        public Move():void {
            if(managers.Game.keyboardManager.moveLeft)
            this.x -= 4;
            if(managers.Game.keyboardManager.moveLeft && managers.Game.keyboardManager.shift)
            this.x += 2;
            if(!managers.Game.keyboardManager.moveLeft)
            this.x += 0;

            if(managers.Game.keyboardManager.moveRight)
            this.x += 4;
            if(managers.Game.keyboardManager.moveRight && managers.Game.keyboardManager.shift)
            this.x -= 2;
            if(!managers.Game.keyboardManager.moveRight)
            this.x += 0;

            if(managers.Game.keyboardManager.moveUp)
            this.y -= 4;
            if(managers.Game.keyboardManager.moveUp && managers.Game.keyboardManager.shift)
            this.y += 2;
            if(!managers.Game.keyboardManager.moveUp)
            this.y += 0;

            if(managers.Game.keyboardManager.moveDown)
            this.y += 4;
            if(managers.Game.keyboardManager.moveDown && managers.Game.keyboardManager.shift)
            this.y -= 2;
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

            if(this.y >= 600)
                this.y = 600;
            
            if(this.y <= this.halfH)
                this.y = this.halfH;

        }

        public Shoot():void{
            if(!this.isDead || this.swapped) {
                let ticker:number = createjs.Ticker.getTicks();

                //if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    switch(this.ShipType){
                        case config.Ship.Botcoin:
                                if(managers.Game.hud.Power < 40){
                                    if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                        this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 40);
                                    
                                        this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    
                                        let bullet = managers.Game.bulletManager.GetBullet();

                                        //console.log(bullet);
                        
                                        bullet.x = this.bulletSpawn.x;
                                        bullet.y = this.bulletSpawn.y;

                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;

                                        managers.Game.currentSceneObject.addChild(this.effect);
                                    }
                                }
                                else if(managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80){
                                    if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                        this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 25);

                                        this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                    
                                        let ammo = managers.Game.bulletManager.GetBullet();
                        
                                        ammo.x = this.bulletSpawn.x;
                                        ammo.y = this.bulletSpawn.y;

                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        
                                        managers.Game.currentSceneObject.addChild(this.effect);
                                    }
                                }
                                else if(managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120){
                                    if((managers.Game.keyboardManager.shoot) && (ticker % 7 == 0)) {
                                        this.bulletSpawn = new math.Vec2(this.x - 13, this.y - 25);
            
                                        this.effect = new objects.Effect("Laser3_Shoot", this.x - 9, this.y - 30);
                                    
                                        let ammo = managers.Game.bulletManager.GetBullet();
                        
                                        ammo.x = this.bulletSpawn.x;
                                        ammo.y = this.bulletSpawn.y;

                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;

                                        managers.Game.currentSceneObject.addChild(this.effect);
                                    }
                                }
                                else if(managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160){
                                    if((managers.Game.keyboardManager.shoot) && (ticker % 5 == 0)) {
                                        this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                        this.effect = new objects.Effect("Laser4_Shoot", this.x - 2, this.y -23);
                                    
                                        let ammo = managers.Game.bulletManager.GetBullet();
                        
                                        ammo.x = this.bulletSpawn.x;
                                        ammo.y = this.bulletSpawn.y;

                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;

                                        managers.Game.currentSceneObject.addChild(this.effect);
                                    }
                                }
                                else if(managers.Game.hud.Power >= 160){
                                    if((managers.Game.keyboardManager.shoot) && (ticker % 2 == 0)) {
                                        if(this.shootnum < 25){
                                            this.bulletSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
            
                                            this.effect = new objects.Effect("Laser5_Shoot", this.x-3, this.y -20);
                                        
                                            let ammo = managers.Game.bulletManager.GetBullet();
                            
                                            ammo.x = this.bulletSpawn.x;
                                            ammo.y = this.bulletSpawn.y;
    
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
    
                                            managers.Game.currentSceneObject.addChild(this.effect); 
                                            this.shootnum++
                                        }
                                        if(this.shootnum > 24){
                                            let counter = 1;

                                            let interval = setInterval(()=>{
                                                counter--
                                                if(counter <0){
                                                    this.shootnum = 0
                                                    clearInterval(interval)
                                                    counter = 0
                                                }
                                            },500)
                                        }
                                    }
                                }
                        break;
                        case config.Ship.Lightcoin:
                            if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                                if(managers.Game.hud.Power >= 0){
                                    this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                    this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y -30);
                                    
                                    let ammo = managers.Game.bulletManager.GetBullet();

                                    console.log(ammo);
                        
                                    ammo.x = this.bulletSpawn.x;
                                    ammo.y = this.bulletSpawn.y;
                                    
                                    let laser = createjs.Sound.play("laser");
                                    laser.volume = 0.1;

                                    managers.Game.currentSceneObject.addChild(this.effect); 
                                }
                            }
                        break;
                        case config.Ship.Enderium:
                                if(managers.Game.hud.Power >= 0 && managers.Game.hud.Power < 40){
                                    this.bulletSpawn = new math.Vec2(this.x - 10.5, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y -41);

                                    let ammo = managers.Game.bulletManager.GetBullet();

                                    console.log(ammo);
                        
                                    ammo.x = this.bulletSpawn.x;
                                    ammo.y = this.bulletSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80){
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc_Shoot", this.x - 13, this.y -41);
                                    
                                    let ammo = managers.Game.bulletManager.GetBullet();

                                    console.log(ammo);
                        
                                    ammo.x = this.bulletSpawn.x;
                                    ammo.y = this.bulletSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120){
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 35);
            
                                    this.effect = new objects.Effect("Arc2_Shoot", this.x - 6.5, this.y -28);
                                    
                                    let ammo = managers.Game.bulletManager.GetBullet();

                                    console.log(ammo);
                        
                                    ammo.x = this.bulletSpawn.x;
                                    ammo.y = this.bulletSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160){
                                    this.bulletSpawn = new math.Vec2(this.x - 7, this.y - 45);
            
                                    this.effect = new objects.Effect("Arc4_Shoot", this.x - 7, this.y -29);
                                    
                                    let ammo = managers.Game.bulletManager.GetBullet();

                                    console.log(ammo);
                        
                                    ammo.x = this.bulletSpawn.x;
                                    ammo.y = this.bulletSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }
                                else if(managers.Game.hud.Power >= 160){
                                    this.bulletSpawn = new math.Vec2(this.x + 4, this.y - 40);
            
                                    this.effect = new objects.Effect("Arc5_Shoot", this.x, this.y -21);
                                    
                                    let ammo = managers.Game.bulletManager.GetBullet();

                                    console.log(ammo);
                        
                                    ammo.x = this.bulletSpawn.x;
                                    ammo.y = this.bulletSpawn.y;

                                    managers.Game.currentSceneObject.addChild(this.effect);
                                }

                        break;
                    }
                //}
            }
        }

        public ShootMissiles():void{
            if(!this.isDead){
                let ticker:number = createjs.Ticker.getTicks();
                if(managers.Game.keyboardManager.shoot && ticker % 40 == 0) {
                    if(this.shootnum < 1){
                        for(let i = 0; i < 2; i++){
                            let position = new math.Vec2(this.x- 15, this.y - 10);

                            //let enemyPos = new math.Vec2(enemy.x, enemy.y)
                            //let distance =  math.Vec2.Distance(enemyPos, position)
                
                            this.missile = managers.Game.missileManager.GetMissile()
                            this.missile.Angle = 0;
                            this.missile.AngleStep = (240/4) * this.shootnum
                            this.missile.Angle += this.missile.AngleStep
                            this.missile.Speed = 0.05
                            
                            this.missile.Dir = new math.Vec2(
                                (90*Math.sin(this.missile.Angle) * this.missile.Speed, 
                                (90*Math.cos(this.missile.Angle) * this.missile.Speed)))

                            this.missile.x = position.x
                            this.missile.y = position.y
                            this.shootnum++
                        }
                    }
                    if(this.shootnum > 1)
                        this.shootnum = 0;
                }
            }
        }

        public Swapped():void{
            if(!this.swapped)
                this.shipType = config.Ship.Botcoin
        }

        public RespawnTimer():void{
            let counter = 2
            this.alpha = 0
            this.x = 555
            this.y = 550

            let interval = setInterval(() =>{
               counter--;

                if(counter == 0){
                    counter = 2
                    if(managers.Game.hud.Lives < 0){
                        managers.Game.over = true
                        managers.Game.currentScene = config.Scene.OVER
                    }
                    else{
                        this.isDead = false
                        this.alpha = 1;
                        this.InvincibilityTimer()
                    }
                    clearInterval(interval);
                }
            },1000)
        }

        public InvincibilityTimer():void{
            this.isInvincible = true
            let counter = 2
            
            let interval = setInterval(() =>{
                counter--;
 
                 if(counter == 0){
                     counter = 2
                     this.isInvincible = false
                     clearInterval(interval);
                 }
             },1000)
        }
    }
}