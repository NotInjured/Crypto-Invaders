module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        public swapped:boolean;
        private isInvincible:boolean = false;

        private power:number;
        private shootnum:number = 0
        public name:string = ""

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
                if(managers.Game.single){
                    if(managers.Game.keyboardManager.enabled){
                        this.Move();
                        this.Shoot();
                        this.Swapped();
                        if(managers.Game.hud.Power > 20 )
                           this.ShootMissiles();
                    }
    
                    if(this.missile != undefined)
                        this.missile.Update()
                }
                if(managers.Game.multi){
                    if(this.name == "P1"){
                        if(managers.Game.keyboardManager.enabled){
                            this.Move();
                            this.Shoot();
                            this.Swapped();
                            if(managers.Game.hud.P1Power > 20 )
                               this.ShootMissiles();
                        }
        
                        if(this.missile != undefined)
                            this.missile.Update()
                    }
                    if(this.name == "P2"){
                        if(managers.Game.keyboardManager.enabled){
                            this.Move();
                            this.Shoot();
                            this.Swapped();
                            if(managers.Game.hud.P2Power > 20 )
                               this.ShootMissiles();
                        }
        
                        if(this.missile != undefined)
                            this.missile.Update()
                    }
                }
                
            }
        }

        public Reset():void {
            if(managers.Game.single){
                this.isDead = true
                managers.Game.p1 = false
                managers.Game.p2 = false
                managers.Game.p3 = false
                managers.Game.p4 = false
                managers.Game.p5 = false
                this.RespawnTimer()
            }
            if(managers.Game.multi){
                if(this.name == "P1"){
                    this.isDead = true
                    managers.Game.P1p1 = false
                    managers.Game.P1p2 = false
                    managers.Game.P1p3 = false
                    managers.Game.P1p4 = false
                    managers.Game.P1p5 = false
                    this.RespawnTimer()
                }
                if(this.name == "P2"){
                    this.isDead = true
                    managers.Game.P2p1 = false
                    managers.Game.P2p2 = false
                    managers.Game.P2p3 = false
                    managers.Game.P2p4 = false
                    managers.Game.P2p5 = false
                    this.RespawnTimer()
                }
            }
            
        }

        public Move():void {
            if(managers.Game.single){
                if(managers.Game.keyboardManager.SmoveLeft)
                this.x -= 4;
                if(managers.Game.keyboardManager.SmoveLeft && managers.Game.keyboardManager.Sshift)
                this.x += 2;
                if(!managers.Game.keyboardManager.SmoveLeft)
                this.x += 0;
    
                if(managers.Game.keyboardManager.SmoveRight)
                this.x += 4;
                if(managers.Game.keyboardManager.SmoveRight && managers.Game.keyboardManager.Sshift)
                this.x -= 2;
                if(!managers.Game.keyboardManager.SmoveRight)
                this.x += 0;
    
                if(managers.Game.keyboardManager.SmoveUp)
                this.y -= 4;
                if(managers.Game.keyboardManager.SmoveUp && managers.Game.keyboardManager.Sshift)
                this.y += 2;
                if(!managers.Game.keyboardManager.SmoveUp)
                this.y += 0;
    
                if(managers.Game.keyboardManager.SmoveDown)
                this.y += 4;
                if(managers.Game.keyboardManager.SmoveDown && managers.Game.keyboardManager.Sshift)
                this.y -= 2;
                if(!managers.Game.keyboardManager.SmoveDown)
                this.y += 0;
            }
            if(managers.Game.multi){
                if(this.name == "P1"){
                    if(managers.Game.keyboardManager.P1moveLeft)
                        this.x -= 4;
                    if(managers.Game.keyboardManager.P1moveLeft && managers.Game.keyboardManager.P1shift)
                        this.x += 2;
                    if(!managers.Game.keyboardManager.P1moveLeft)
                        this.x += 0;
    
                    if(managers.Game.keyboardManager.P1moveRight)
                        this.x += 4;
                    if(managers.Game.keyboardManager.P1moveRight && managers.Game.keyboardManager.P1shift)
                        this.x -= 2;
                    if(!managers.Game.keyboardManager.P1moveRight)
                        this.x += 0;
    
                    if(managers.Game.keyboardManager.P1moveUp)
                        this.y -= 4;
                    if(managers.Game.keyboardManager.P1moveUp && managers.Game.keyboardManager.P1shift)
                        this.y += 2;
                    if(!managers.Game.keyboardManager.P1moveUp)
                        this.y += 0;
    
                    if(managers.Game.keyboardManager.P1moveDown)
                        this.y += 4;
                    if(managers.Game.keyboardManager.P1moveDown && managers.Game.keyboardManager.P1shift)
                        this.y -= 2;
                    if(!managers.Game.keyboardManager.P1moveDown)
                        this.y += 0;
                }

                if(this.name == "P2"){
                    if(managers.Game.keyboardManager.P2moveLeft)
                        this.x -= 4;
                    if(managers.Game.keyboardManager.P2moveLeft && managers.Game.keyboardManager.P2shift)
                        this.x += 2;
                    if(!managers.Game.keyboardManager.P2moveLeft)
                        this.x += 0;
    
                    if(managers.Game.keyboardManager.P2moveRight)
                        this.x += 4;
                    if(managers.Game.keyboardManager.P2moveRight && managers.Game.keyboardManager.P2shift)
                        this.x -= 2;
                    if(!managers.Game.keyboardManager.P2moveRight)
                        this.x += 0;
    
                    if(managers.Game.keyboardManager.P2moveUp)
                        this.y -= 4;
                    if(managers.Game.keyboardManager.P2moveUp && managers.Game.keyboardManager.P2shift)
                        this.y += 2;
                    if(!managers.Game.keyboardManager.P2moveUp)
                        this.y += 0;
    
                    if(managers.Game.keyboardManager.P2moveDown)
                        this.y += 4;
                    if(managers.Game.keyboardManager.P2moveDown && managers.Game.keyboardManager.P2shift)
                        this.y -= 2;
                    if(!managers.Game.keyboardManager.P2moveDown)
                        this.y += 0;
                }
            }
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
                    switch(this.ShipType){
                        case config.Ship.Botcoin:
                                if(managers.Game.hud.Power < 40){
                                    if(managers.Game.single){
                                        if((managers.Game.keyboardManager.Sshoot) && (ticker % 10 == 0)) {
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
                                    if(managers.Game.multi){
                                        if(this.name == "P1"){
                                            if((managers.Game.keyboardManager.P1shoot) && (ticker % 10 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 40);
                                            
                                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                            
                                                let bullet = managers.Game.P1BulletManager.GetBullet();
        
                                                //console.log(bullet);
                                
                                                bullet.x = this.bulletSpawn.x;
                                                bullet.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                        if(this.name == "P2"){
                                            if((managers.Game.keyboardManager.P2shoot) && (ticker % 10 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 40);
                                            
                                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                            
                                                let bullet = managers.Game.P2BulletManager.GetBullet();
        
                                                //console.log(bullet);
                                
                                                bullet.x = this.bulletSpawn.x;
                                                bullet.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                    }
                                    
                                }
                                else if(managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80){
                                    if(managers.Game.single){
                                        if((managers.Game.keyboardManager.Sshoot) && (ticker % 10 == 0)) {
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
                                    
                                    if(managers.Game.multi){
                                        if(this.name == "P1"){
                                            if((managers.Game.keyboardManager.P1shoot) && (ticker % 10 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 25);
    
                                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                            
                                                let ammo = managers.Game.P1BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
                                                
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                        if(this.name == "P2"){
                                            if((managers.Game.keyboardManager.P2shoot) && (ticker % 10 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 15.35, this.y - 25);
    
                                                this.effect = new objects.Effect("Laser_Shoot", this.x - 13, this.y -43);
                                            
                                                let ammo = managers.Game.P2BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
                                                
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                    }
                                }
                                else if(managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120){
                                    if(managers.Game.single){
                                        if((managers.Game.keyboardManager.Sshoot) && (ticker % 7 == 0)) {
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
                                    if(managers.Game.multi){
                                        if(this.name == "P1"){
                                            if((managers.Game.keyboardManager.P1shoot) && (ticker % 7 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 13, this.y - 25);
                
                                                this.effect = new objects.Effect("Laser3_Shoot", this.x - 9, this.y - 30);
                                            
                                                let ammo = managers.Game.P1BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                        if(this.name == "P2"){
                                            if((managers.Game.keyboardManager.P2shoot) && (ticker % 7 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 13, this.y - 25);
                
                                                this.effect = new objects.Effect("Laser3_Shoot", this.x - 9, this.y - 30);
                                            
                                                let ammo = managers.Game.P2BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                    }
                                }
                                else if(managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160){
                                    if(managers.Game.single){
                                        if((managers.Game.keyboardManager.Sshoot) && (ticker % 5 == 0)) {
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
                                    if(managers.Game.multi){
                                        if(this.name == "P1"){
                                            if((managers.Game.keyboardManager.P1shoot) && (ticker % 5 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
                
                                                this.effect = new objects.Effect("Laser4_Shoot", this.x - 2, this.y -23);
                                            
                                                let ammo = managers.Game.P1BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                        if(this.name == "P2"){
                                            if((managers.Game.keyboardManager.P2shoot) && (ticker % 5 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
                
                                                this.effect = new objects.Effect("Laser4_Shoot", this.x - 2, this.y -23);
                                            
                                                let ammo = managers.Game.P2BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                    }
                                }
                                else if(managers.Game.hud.Power >= 160){
                                    if(managers.Game.single){
                                        if((managers.Game.keyboardManager.Sshoot) && (ticker % 2 == 0)) {
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
                                    if(managers.Game.multi){
                                        if(this.name == "P1"){
                                            if((managers.Game.keyboardManager.P1shoot) && (ticker % 2 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
                
                                                this.effect = new objects.Effect("Laser5_Shoot", this.x-3, this.y -20);
                                            
                                                let ammo = managers.Game.P1BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                        if(this.name == "P2"){
                                            if((managers.Game.keyboardManager.P2shoot) && (ticker % 2 == 0)) {
                                                this.bulletSpawn = new math.Vec2(this.x - 7.5, this.y - 25);
                
                                                this.effect = new objects.Effect("Laser5_Shoot", this.x-3, this.y -20);
                                            
                                                let ammo = managers.Game.P2BulletManager.GetBullet();
                                
                                                ammo.x = this.bulletSpawn.x;
                                                ammo.y = this.bulletSpawn.y;
        
                                                let laser = createjs.Sound.play("laser");
                                                laser.volume = 0.1;
        
                                                managers.Game.currentSceneObject.addChild(this.effect);
                                            }
                                        }
                                    }
                                    
                                }
                        break;
                        case config.Ship.Lightcoin:
                            if(managers.Game.hud.Power < 40){
                                if(managers.Game.single){
                                    if((managers.Game.keyboardManager.Sshoot) && (ticker % 10 == 0)) {
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
                                if(managers.Game.multi){
                                    if(this.name == "P1"){
                                        if((managers.Game.keyboardManager.P1shoot) && (ticker % 10 == 0)) {
                                            this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y -30);
                                            
                                            let ammo = managers.Game.P1BulletManager.GetBullet();
            
                                            console.log(ammo);
                                
                                            ammo.x = this.bulletSpawn.x;
                                            ammo.y = this.bulletSpawn.y;
                                            
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
            
                                            managers.Game.currentSceneObject.addChild(this.effect); 
                                        }
                                        
                                    }
                                    if(this.name == "P2"){
                                        if((managers.Game.keyboardManager.P2shoot) && (ticker % 10 == 0)) {
                                            this.bulletSpawn = new math.Vec2(this.x - 11, this.y - 25);
            
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y -30);
                                            
                                            let ammo = managers.Game.P2BulletManager.GetBullet();
            
                                            console.log(ammo);
                                
                                            ammo.x = this.bulletSpawn.x;
                                            ammo.y = this.bulletSpawn.y;
                                            
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
            
                                            managers.Game.currentSceneObject.addChild(this.effect); 
                                        }
                                    }
                                }
                            }
                            else if(managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80){
                                if(managers.Game.single){
                                    if((managers.Game.keyboardManager.Sshoot) && (ticker % 10 == 0)) {
                                        this.bulletSpawn = new math.Vec2(this.x - 7, this.y - 25);
    
                                        this.effect = new objects.Effect("Laser1_Shoot", this.x - 13, this.y -43);
                                    
                                        let ammo = managers.Game.bulletManager.GetBullet();
                                        let ammo2 = managers.Game.bulletManager.GetBullet();
                        
                                        ammo.x = this.bulletSpawn.x;
                                        ammo.y = this.bulletSpawn.y;
                                        ammo2.x = this.x - 11
                                        ammo2.y = this.bulletSpawn.y;
    
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                        
                                        managers.Game.currentSceneObject.addChild(this.effect);
                                    }
                                }
                                if(managers.Game.multi){
                                    if(this.name == "P1"){
                                        if((managers.Game.keyboardManager.P1shoot) && (ticker % 10 == 0)){
                                            this.bulletSpawn = new math.Vec2(this.x - 7, this.y - 25);
    
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 13, this.y -43);
                                        
                                            let ammo = managers.Game.P1BulletManager.GetBullet();
                                            let ammo2 = managers.Game.P1BulletManager.GetBullet();
                            
                                            ammo.x = this.bulletSpawn.x;
                                            ammo.y = this.bulletSpawn.y;
                                            ammo2.x = this.x - 11
                                            ammo2.y = this.bulletSpawn.y;
        
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
                                            
                                            managers.Game.currentSceneObject.addChild(this.effect);
                                        }
                                        
                                    }
                                    if(this.name == "P2"){
                                        if((managers.Game.keyboardManager.P2shoot) && (ticker % 10 == 0)){
                                            this.bulletSpawn = new math.Vec2(this.x - 7, this.y - 25);
    
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 13, this.y -43);
                                        
                                            let ammo = managers.Game.P2BulletManager.GetBullet();
                                            let ammo2 = managers.Game.P2BulletManager.GetBullet();
                            
                                            ammo.x = this.bulletSpawn.x;
                                            ammo.y = this.bulletSpawn.y;
                                            ammo2.x = this.x - 11
                                            ammo2.y = this.bulletSpawn.y;
        
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
                                            
                                            managers.Game.currentSceneObject.addChild(this.effect);
                                        }
                                    }
                                }
                                
                                
                            }
                            else if(managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120){
                                if(managers.Game.single){
                                    if((managers.Game.keyboardManager.Sshoot) && (ticker % 10 == 0)) {
                                        this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
    
                                        let ammo = managers.Game.bulletManager.GetBullet();
                                        let ammo2 = managers.Game.bulletManager.GetBullet();
                                        let ammo3 = managers.Game.bulletManager.GetBullet();
    
                                        ammo.x = this.x - 11
                                        ammo.y = this.y - 25
                                        // Right
                                        ammo2.x = this.x - 11
                                        ammo2.y = this.y - 10
                                        ammo2.rotation = 45
                                        ammo2.Dir = new math.Vec2(
                                            (120*Math.cos(45)) * 0.2, 
                                            -(15*Math.sin(45)) * 0.1);
                                        // Left
                                        ammo3.x = this.x - 11
                                        ammo3.y = this.y - 10
                                        ammo3.rotation = -45
                                        ammo3.Dir = new math.Vec2(
                                            -(120*Math.cos(45)) * 0.2, 
                                            -(15*Math.sin(45)) * 0.1);
    
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
    
                                        managers.Game.currentSceneObject.addChild(this.effect);
                                    }
                                }
                                if(managers.Game.multi){
                                    if(this.name == "P1"){
                                        if((managers.Game.keyboardManager.P1shoot) && (ticker % 10 == 0)) {
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
    
                                            let ammo = managers.Game.P1BulletManager.GetBullet();
                                            let ammo2 = managers.Game.P1BulletManager.GetBullet();
                                            let ammo3 = managers.Game.P1BulletManager.GetBullet();
        
                                            ammo.x = this.x - 11
                                            ammo.y = this.y - 25
                                            // Right
                                            ammo2.x = this.x - 11
                                            ammo2.y = this.y - 10
                                            ammo2.rotation = 45
                                            ammo2.Dir = new math.Vec2(
                                                (120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
                                            // Left
                                            ammo3.x = this.x - 11
                                            ammo3.y = this.y - 10
                                            ammo3.rotation = -45
                                            ammo3.Dir = new math.Vec2(
                                                -(120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
        
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
        
                                            managers.Game.currentSceneObject.addChild(this.effect);
                                        }
                                        
                                    }
                                    if(this.name == "P2"){
                                        if((managers.Game.keyboardManager.P2shoot) && (ticker % 10 == 0)) {
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y - 30);
    
                                            let ammo = managers.Game.P2BulletManager.GetBullet();
                                            let ammo2 = managers.Game.P2BulletManager.GetBullet();
                                            let ammo3 = managers.Game.P2BulletManager.GetBullet();
        
                                            ammo.x = this.x - 11
                                            ammo.y = this.y - 25
                                            // Right
                                            ammo2.x = this.x - 11
                                            ammo2.y = this.y - 10
                                            ammo2.rotation = 45
                                            ammo2.Dir = new math.Vec2(
                                                (120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
                                            // Left
                                            ammo3.x = this.x - 11
                                            ammo3.y = this.y - 10
                                            ammo3.rotation = -45
                                            ammo3.Dir = new math.Vec2(
                                                -(120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
        
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
        
                                            managers.Game.currentSceneObject.addChild(this.effect);
                                        }
                                    }
                                }
                                
                            }
                            else if(managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160){
                                if(managers.Game.single){
                                    if((managers.Game.keyboardManager.Sshoot) && (ticker % 10 == 0)) {
                                        this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y -30);
                                    
                                        let ammo = managers.Game.bulletManager.GetBullet();
                                        let ammo2 = managers.Game.bulletManager.GetBullet();
                                        let ammo3 = managers.Game.bulletManager.GetBullet();
                                        let ammo4 = managers.Game.bulletManager.GetBullet();
                                        let ammo5 = managers.Game.bulletManager.GetBullet();
                                        let ammo6 = managers.Game.bulletManager.GetBullet();
    
                                        ammo.x = this.x - 14
                                        ammo.y = this.y - 25
                                        ammo2.x = this.x - 7
                                        ammo2.y = this.y  - 25
                                        // Right side
                                        ammo3.x = this.x - 6
                                        ammo3.y = this.y - 16
                                        ammo3.rotation = 45
                                        ammo3.Dir = new math.Vec2(
                                            (120*Math.cos(45)) * 0.2, 
                                            -(15*Math.sin(45)) * 0.1);
    
                                        ammo5.x = this.x - 10
                                        ammo5.y = this.y - 16
                                        ammo5.rotation = -60
                                        ammo5.Dir = new math.Vec2(
                                            (120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        // Left Side
                                        ammo4.x = this.x - 11
                                        ammo4.y = this.y - 20
                                        ammo4.rotation = -45
                                        ammo4.Dir = new math.Vec2(
                                            -(120*Math.cos(45)) * 0.2, 
                                            -(15*Math.sin(45)) * 0.1);
    
                                        ammo6.x = this.x - 11
                                        ammo6.y = this.y - 5
                                        ammo6.rotation = 60
                                        ammo6.Dir = new math.Vec2(
                                            -(120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
    
                                        managers.Game.currentSceneObject.addChild(this.effect);
                                    }
                                }
                                if(managers.Game.multi){
                                    if(this.name == "P1"){
                                        if((managers.Game.keyboardManager.P1shoot) && (ticker % 10 == 0)){
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y -30);
                                    
                                            let ammo = managers.Game.P1BulletManager.GetBullet();
                                            let ammo2 = managers.Game.P1BulletManager.GetBullet();
                                            let ammo3 = managers.Game.P1BulletManager.GetBullet();
                                            let ammo4 = managers.Game.P1BulletManager.GetBullet();
                                            let ammo5 = managers.Game.P1BulletManager.GetBullet();
                                            let ammo6 = managers.Game.P1BulletManager.GetBullet();
        
                                            ammo.x = this.x - 14
                                            ammo.y = this.y - 25
                                            ammo2.x = this.x - 7
                                            ammo2.y = this.y  - 25
                                            // Right side
                                            ammo3.x = this.x - 6
                                            ammo3.y = this.y - 16
                                            ammo3.rotation = 45
                                            ammo3.Dir = new math.Vec2(
                                                (120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
        
                                            ammo5.x = this.x - 10
                                            ammo5.y = this.y - 16
                                            ammo5.rotation = -60
                                            ammo5.Dir = new math.Vec2(
                                                (120*Math.cos(60)) * 0.2, 
                                                -(15*Math.sin(60)) * 0.1);
        
                                            // Left Side
                                            ammo4.x = this.x - 11
                                            ammo4.y = this.y - 20
                                            ammo4.rotation = -45
                                            ammo4.Dir = new math.Vec2(
                                                -(120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
        
                                            ammo6.x = this.x - 11
                                            ammo6.y = this.y - 5
                                            ammo6.rotation = 60
                                            ammo6.Dir = new math.Vec2(
                                                -(120*Math.cos(60)) * 0.2, 
                                                -(15*Math.sin(60)) * 0.1);
        
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
        
                                            managers.Game.currentSceneObject.addChild(this.effect);
                                        }
                                        
                                    }
                                    if(this.name == "P2"){
                                        if((managers.Game.keyboardManager.P2shoot) && (ticker % 10 == 0)){
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x - 7, this.y -30);
                                    
                                            let ammo = managers.Game.P2BulletManager.GetBullet();
                                            let ammo2 = managers.Game.P2BulletManager.GetBullet();
                                            let ammo3 = managers.Game.P2BulletManager.GetBullet();
                                            let ammo4 = managers.Game.P2BulletManager.GetBullet();
                                            let ammo5 = managers.Game.P2BulletManager.GetBullet();
                                            let ammo6 = managers.Game.P2BulletManager.GetBullet();
        
                                            ammo.x = this.x - 14
                                            ammo.y = this.y - 25
                                            ammo2.x = this.x - 7
                                            ammo2.y = this.y  - 25
                                            // Right side
                                            ammo3.x = this.x - 6
                                            ammo3.y = this.y - 16
                                            ammo3.rotation = 45
                                            ammo3.Dir = new math.Vec2(
                                                (120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
        
                                            ammo5.x = this.x - 10
                                            ammo5.y = this.y - 16
                                            ammo5.rotation = -60
                                            ammo5.Dir = new math.Vec2(
                                                (120*Math.cos(60)) * 0.2, 
                                                -(15*Math.sin(60)) * 0.1);
        
                                            // Left Side
                                            ammo4.x = this.x - 11
                                            ammo4.y = this.y - 20
                                            ammo4.rotation = -45
                                            ammo4.Dir = new math.Vec2(
                                                -(120*Math.cos(45)) * 0.2, 
                                                -(15*Math.sin(45)) * 0.1);
        
                                            ammo6.x = this.x - 11
                                            ammo6.y = this.y - 5
                                            ammo6.rotation = 60
                                            ammo6.Dir = new math.Vec2(
                                                -(120*Math.cos(60)) * 0.2, 
                                                -(15*Math.sin(60)) * 0.1);
        
                                            let laser = createjs.Sound.play("laser");
                                            laser.volume = 0.1;
        
                                            managers.Game.currentSceneObject.addChild(this.effect);
                                        }
                                    }
                                }
                                
                            }
                            else if(managers.Game.hud.Power >= 160){
                                if(managers.Game.single){
                                    if((managers.Game.keyboardManager.Sshoot) && (ticker % 10 == 0)) {
                                        this.effect = new objects.Effect("Laser1_Shoot", this.x-7, this.y -30);
                                            
                                        let ammo = managers.Game.bulletManager.GetBullet();
                                        let ammo2 = managers.Game.bulletManager.GetBullet();
                                        let ammo3 = managers.Game.bulletManager.GetBullet();
                                        let ammo4 = managers.Game.bulletManager.GetBullet();
                                        let ammo5 = managers.Game.bulletManager.GetBullet();
                                        let ammo6 = managers.Game.bulletManager.GetBullet();
                                        let ammo7 = managers.Game.bulletManager.GetBullet();
                                        let ammo8 = managers.Game.bulletManager.GetBullet();
    
                                        ammo.x = this.x - 14
                                        ammo.y = this.y - 25
                                        ammo2.x = this.x - 7
                                        ammo2.y = this.y  - 25
    
                                        // 45
                                        ammo3.x = this.x - 6
                                        ammo3.y = this.y - 16
                                        ammo3.rotation = 45
                                        ammo3.Dir = new math.Vec2(
                                            (180*Math.cos(45)) * 0.1, 
                                            -(15*Math.sin(45)) * 0.05);
    
                                        ammo4.x = this.x - 11
                                        ammo4.y = this.y - 20
                                        ammo4.rotation = -45
                                        ammo4.Dir = new math.Vec2(
                                            -(180*Math.cos(45)) * 0.1, 
                                            -(15*Math.sin(45)) * 0.05);
    
                                        // 60
                                        ammo5.x = this.x - 10
                                        ammo5.y = this.y - 16
                                        ammo5.rotation = -60
                                        ammo5.Dir = new math.Vec2(
                                            (120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        ammo6.x = this.x - 11
                                        ammo6.y = this.y - 8
                                        ammo6.rotation = 60
                                        ammo6.Dir = new math.Vec2(
                                            -(120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        // 25
                                        ammo7.x = this.x - 10
                                        ammo7.y = this.y - 16
                                        ammo7.rotation = 25
                                        ammo7.Dir = new math.Vec2(
                                            (15*Math.cos(25)) * 0.2, 
                                            -(120*Math.sin(25)) * 0.1);
    
                                        ammo8.x = this.x - 10
                                        ammo8.y = this.y - 16
                                        ammo8.rotation = -25
                                        ammo8.Dir = new math.Vec2(
                                            -(15*Math.cos(25)) * 0.2, 
                                            -(120*Math.sin(25)) * 0.1);
    
    
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
    
                                        managers.Game.currentSceneObject.addChild(this.effect);  
                                    }
                                }
                                
                                if(managers.Game.multi){
                                    if(this.name == "P1"){
                                        if((managers.Game.keyboardManager.P1shoot) && (ticker % 10 == 0)){
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x-7, this.y -30);
                                            
                                        let ammo = managers.Game.P1BulletManager.GetBullet();
                                        let ammo2 = managers.Game.P1BulletManager.GetBullet();
                                        let ammo3 = managers.Game.P1BulletManager.GetBullet();
                                        let ammo4 = managers.Game.P1BulletManager.GetBullet();
                                        let ammo5 = managers.Game.P1BulletManager.GetBullet();
                                        let ammo6 = managers.Game.P1BulletManager.GetBullet();
                                        let ammo7 = managers.Game.P1BulletManager.GetBullet();
                                        let ammo8 = managers.Game.P1BulletManager.GetBullet();
    
                                        ammo.x = this.x - 14
                                        ammo.y = this.y - 25
                                        ammo2.x = this.x - 7
                                        ammo2.y = this.y  - 25
    
                                        // 45
                                        ammo3.x = this.x - 6
                                        ammo3.y = this.y - 16
                                        ammo3.rotation = 45
                                        ammo3.Dir = new math.Vec2(
                                            (180*Math.cos(45)) * 0.1, 
                                            -(15*Math.sin(45)) * 0.05);
    
                                        ammo4.x = this.x - 11
                                        ammo4.y = this.y - 20
                                        ammo4.rotation = -45
                                        ammo4.Dir = new math.Vec2(
                                            -(180*Math.cos(45)) * 0.1, 
                                            -(15*Math.sin(45)) * 0.05);
    
                                        // 60
                                        ammo5.x = this.x - 10
                                        ammo5.y = this.y - 16
                                        ammo5.rotation = -60
                                        ammo5.Dir = new math.Vec2(
                                            (120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        ammo6.x = this.x - 11
                                        ammo6.y = this.y - 8
                                        ammo6.rotation = 60
                                        ammo6.Dir = new math.Vec2(
                                            -(120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        // 25
                                        ammo7.x = this.x - 10
                                        ammo7.y = this.y - 16
                                        ammo7.rotation = 25
                                        ammo7.Dir = new math.Vec2(
                                            (15*Math.cos(25)) * 0.2, 
                                            -(120*Math.sin(25)) * 0.1);
    
                                        ammo8.x = this.x - 10
                                        ammo8.y = this.y - 16
                                        ammo8.rotation = -25
                                        ammo8.Dir = new math.Vec2(
                                            -(15*Math.cos(25)) * 0.2, 
                                            -(120*Math.sin(25)) * 0.1);
    
    
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
    
                                        managers.Game.currentSceneObject.addChild(this.effect);  
                                        }
                                        
                                    }
                                    if(this.name == "P2"){
                                        if((managers.Game.keyboardManager.P2shoot) && (ticker % 10 == 0)){
                                            this.effect = new objects.Effect("Laser1_Shoot", this.x-7, this.y -30);
                                            
                                        let ammo = managers.Game.P2BulletManager.GetBullet();
                                        let ammo2 = managers.Game.P2BulletManager.GetBullet();
                                        let ammo3 = managers.Game.P2BulletManager.GetBullet();
                                        let ammo4 = managers.Game.P2BulletManager.GetBullet();
                                        let ammo5 = managers.Game.P2BulletManager.GetBullet();
                                        let ammo6 = managers.Game.P2BulletManager.GetBullet();
                                        let ammo7 = managers.Game.P2BulletManager.GetBullet();
                                        let ammo8 = managers.Game.P2BulletManager.GetBullet();
    
                                        ammo.x = this.x - 14
                                        ammo.y = this.y - 25
                                        ammo2.x = this.x - 7
                                        ammo2.y = this.y  - 25
    
                                        // 45
                                        ammo3.x = this.x - 6
                                        ammo3.y = this.y - 16
                                        ammo3.rotation = 45
                                        ammo3.Dir = new math.Vec2(
                                            (180*Math.cos(45)) * 0.1, 
                                            -(15*Math.sin(45)) * 0.05);
    
                                        ammo4.x = this.x - 11
                                        ammo4.y = this.y - 20
                                        ammo4.rotation = -45
                                        ammo4.Dir = new math.Vec2(
                                            -(180*Math.cos(45)) * 0.1, 
                                            -(15*Math.sin(45)) * 0.05);
    
                                        // 60
                                        ammo5.x = this.x - 10
                                        ammo5.y = this.y - 16
                                        ammo5.rotation = -60
                                        ammo5.Dir = new math.Vec2(
                                            (120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        ammo6.x = this.x - 11
                                        ammo6.y = this.y - 8
                                        ammo6.rotation = 60
                                        ammo6.Dir = new math.Vec2(
                                            -(120*Math.cos(60)) * 0.2, 
                                            -(15*Math.sin(60)) * 0.1);
    
                                        // 25
                                        ammo7.x = this.x - 10
                                        ammo7.y = this.y - 16
                                        ammo7.rotation = 25
                                        ammo7.Dir = new math.Vec2(
                                            (15*Math.cos(25)) * 0.2, 
                                            -(120*Math.sin(25)) * 0.1);
    
                                        ammo8.x = this.x - 10
                                        ammo8.y = this.y - 16
                                        ammo8.rotation = -25
                                        ammo8.Dir = new math.Vec2(
                                            -(15*Math.cos(25)) * 0.2, 
                                            -(120*Math.sin(25)) * 0.1);
    
    
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
    
                                        managers.Game.currentSceneObject.addChild(this.effect);  
                                        }
                                    }
                                }
                            }
                        break;
                    }
                //}
            }
        }

        public ShootMissiles():void{
            if(!this.isDead){
                let ticker:number = createjs.Ticker.getTicks();
                if(managers.Game.single){
                    if(managers.Game.keyboardManager.Sshoot && ticker % 40 == 0) {
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
                if(managers.Game.multi){
                    if(this.name == "P1"){
                        if((managers.Game.keyboardManager.P1shoot) && ticker % 40 == 0) {
                            if(this.shootnum < 1){
                                for(let i = 0; i < 2; i++){
                                    let position = new math.Vec2(this.x- 15, this.y - 10);
        
                                    //let enemyPos = new math.Vec2(enemy.x, enemy.y)
                                    //let distance =  math.Vec2.Distance(enemyPos, position)
                        
                                    this.missile = managers.Game.P1MissileManager.GetMissile()
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

                    if(this.name == "P2"){
                        if((managers.Game.keyboardManager.P2shoot) && ticker % 40 == 0) {
                            if(this.shootnum < 1){
                                for(let i = 0; i < 2; i++){
                                    let position = new math.Vec2(this.x- 15, this.y - 10);
        
                                    //let enemyPos = new math.Vec2(enemy.x, enemy.y)
                                    //let distance =  math.Vec2.Distance(enemyPos, position)
                        
                                    this.missile = managers.Game.P2MissileManager.GetMissile()
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
                    if(managers.Game.single){
                        if(managers.Game.hud.Lives < 0){
                            managers.Game.over = true
                            managers.Game.currentScene = config.Scene.OVER
                        }
                        else{
                            this.isDead = false
                            this.alpha = 1;
                            this.InvincibilityTimer()
                        }
                    }
                    if(managers.Game.multi){
                        if(managers.Game.hud.P1Lives < 0 && managers.Game.hud.P2Lives < 0){
                            managers.Game.over = true
                            managers.Game.currentScene = config.Scene.OVER
                        }
                        else{
                            this.isDead = false
                            this.alpha = 1;
                            this.InvincibilityTimer()
                        }
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