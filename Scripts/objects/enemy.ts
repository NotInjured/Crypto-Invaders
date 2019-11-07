module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        private back:boolean;
        private shoot:boolean = false;
        public isInvincible: boolean = false;
        public patternFinished:boolean = false;

        private angle:number;
        private shootNum:number = 0;
        private sprite:string;
        private distance:number;
        
        private bullet:objects.EnemyBullet;

        private bulletSpawn:math.Vec2;
        private playerPos:math.Vec2;
        private position:math.Vec2;

        private player:objects.Player;

        private timerInterval:number;

        private randomNum;

        private pattern1:boolean = false;
        private pattern2:boolean = false;
        private randomPattern:number = Math.floor(Math.random() * (10 - 1 + 1) + 1)

        get Angle():number{
            return this.angle;
        }

        get Shoot():boolean{
            return this.shoot;
        }

        set Shoot(s:boolean){
            this.shoot = s;
        }

        get Bullet():objects.EnemyBullet{
            return this.bullet;
        }

        // Constructor
        constructor(sprite) {
            super(sprite);
            this.sprite = sprite;
            this.Start();
        }
        // Methods
        public Start():void {
            switch(this.sprite){
                case "Enemy1":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = 200
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                        break;
                        case 2:
                            this.x = 900
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                        break;
                    }
                break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                    }
                break;
                case "Enemy4":
                    this.x = 560
                    this.y = -50
                    //this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    //this.y = Math.floor(Math.random() * -720) + -50;
                break;
            }
            
        }
        public Update():void {
            if(!this.isDead){
                this.Move();
                this.CheckBounds();
                if(this.bullet != undefined){
                    this.bullet.Update();

                    //if(this.shoot && !this.player.isInvincible && managers.Game.hud.Lives >= 0)
                        //managers.Collision.CheckAABB(this.bullet, this.player);
                }
                
                
            }   
        }

        public Reset():void {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            switch(this.sprite){
                case "Enemy1":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = 200
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                        break;
                        case 2:
                            this.x = 900
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                        break;
                    }
                break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                    }
                break;
                case "Enemy4":
                break;
            }
        }

        public Move():void {
            switch(this.sprite){
                case "Enemy1":
                    if(this.y >= 300 && !this.back){
                        this.ShootPlayer();
                        this.shootNum += 1;
                        this.back = true;
                    }
                    else if(this.y < 300 && !this.back)
                        this.y += 5;
                    else if(this.back && this.y > -200){
                        this.y -= 2;
                        this.shoot = false;
                            
                        if(this.y < 100 && !this.shoot && this.shootNum == 1)
                            this.ShootPlayer();
                    }
                    else if(this.back && this.y < -190)
                        this.Reset();
                break;
                case "Enemy2":
                    switch(this.randomNum){
                        case 1:
                            if(this.x < 1000 && !this.back){
                                    this.x += 3;
                                if(this.x > 400 && this.x < 600)
                                    this.ShootPlayer();
                            }
                            else if(this.x > 995 && !this.back){
                                this.back = true;
                                this.shoot = false;
                            }
                            else if(this.x > 200 && this.back){
                                this.x -= 5;
                                if(this.x > 400 && this.x < 600){
                                    this.ShootPlayer();
                                }
                                if(this.x < 290)
                                    this.Reset();
                            }
                        break;
                        case 2:
                            if(this.x > 0 && !this.back){
                                this.x -= 3;
                                if(this.x > 400 && this.x < 600)
                                    this.ShootPlayer();
                            }
                            else if(this.x < 10 && !this.back){
                                this.back = true;
                                this.shoot = false;
                            }
                            else if(this.x < 800 && this.back){
                                this.x += 5;
                                if(this.x > 400 && this.x < 600){
                                    this.ShootPlayer();
                                }
                                if(this.x > 790)
                                this.Reset();
                            }
                        break;
                    }
                break;
                case "Enemy3":
                    if(this.y > 350 && this.y < 400 && !this.shoot)
                        this.ShootPlayer();
                    if(this.y < 730)
                        this.y += 3;
                    if(this.y > 720)
                        this.Reset();
                break;
                case "Enemy4":
                    if(this.y < 110)
                        this.y += 2;
                    if(this.y > 100){
                        //if(!this.pattern1)
                            this.ShootPattern(5)
                        //if(this.pattern1 && !this.pattern2)
                            //this.ShootPattern(2)
                    }
                break;
                case "Enemy5":
                break;
                case "Enemy6":
                break;
                case "Enemy7":
                break;
            }
            
        }
        
        public CheckBounds():void {
            // Check the bottom boundary
            if(this.y >= 740 + this.height) {
                this.y = -50;
            }
        }

        public FindPlayer(player:objects.Player):void{
            this.angle = Math.atan2(player.y - this.y, player.x - this.x );
            this.angle = this.angle * (180/Math.PI);

            //this.rotation = -90  + this.angle;

            this.playerPos = new math.Vec2(player.x, player.y);

            this.player = player;
        }

        public ShootPlayer():void{
            if(!this.isDead && !this.shoot){
                switch(this.sprite){
                    case "Enemy1":
                    case "Enemy2":
                    case "Enemy3":
                    case "Enemy5":
                    case "Enemy6":
                    case "Enemy7":
                    case "Enemy8":
                    case "Enemy9":
                    case "Enemy10":
                    case "Enemy11":
                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      

                        this.position = new math.Vec2(this.x, this.y);
                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
    
                        this.bullet = new objects.EnemyBullet("Enemy1_Shot", false)
    
                        this.bullet.Dir = new math.Vec2(
                            //((this.playerPos.x - this.position.x)) * this.bullet.Speed, 
                            //((this.playerPos.y - this.position.y)) * this.bullet.Speed)
                            ((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, 
                            ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                            
    
                        this.bullet.x = this.bulletSpawn.x;
                        this.bullet.y = this.bulletSpawn.y;
    
                        let laser = createjs.Sound.play("laser");
                        laser.volume = 0.2;

                        managers.Game.currentSceneObject.addChild(this.bullet);
                        console.log(this.bullet)
                        this.shoot = true;  
                    break;
                    case "Enemy4":
                    case "Enemy12":
                    case "Enemy13":
                        let ticker:number = createjs.Ticker.getTicks();
                        if(ticker % 10 == 0){
                            this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      
            
                            this.position = new math.Vec2(this.x, this.y);
                            this.distance = math.Vec2.Distance(this.playerPos, this.position);

                            this.bullet = managers.Game.enemyBulletManager.GetBullet()
            
                            this.bullet.Dir = new math.Vec2(
                                ((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, 
                                ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                            console.log(this.bullet)

                                this.bullet.x = this.bulletSpawn.x;
                                this.bullet.y = this.bulletSpawn.y;
                            
                            //this.bullet.x = this.bulletSpawn.x;
                            //this.bullet.y = this.bulletSpawn.y;
            
                            let laser = createjs.Sound.play("laser");
                            laser.volume = 0.2;
            
                            managers.Game.currentSceneObject.addChild(this.bullet);
                        }
                    break;
                }
            }
        }
        
        public ShootPattern(pattern:number):void{
            if(!this.isDead && !this.shoot){
                let ticker:number = createjs.Ticker.getTicks();

                switch(this.sprite){
                    case "Enemy4":
                        switch(pattern){
                            case 1: // Repeater x10
                                if(this.shootNum < 10){
                                    if(ticker % 5 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      
                                                
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                        
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 1;

                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
                                        
        
                                        this.bullet.Speed = 5;

                                        this.bullet.Dir = new math.Vec2(
                                            ((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, 
                                            ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        console.log(this.bullet)
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.2;
                    
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 9){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    this.pattern1 = true;
                                    this.pattern2 = false;
                                    this.Timer();
                                }
                            break;
                            case 2: // spread 6
                                if(this.shootNum < 7){
                                    if(ticker % 8 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      
                                                
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                        
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 2;

                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
            
                                        this.bullet.Speed = 5;
                                            
                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) -80 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) -80 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed
                                            );
                                        console.log(this.bullet)
                        
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.2;
                        
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 6){
                                    this.bullet.Reset()
                                    this.pattern2 = true;
                                    this.pattern1 = false;
                                    this.shoot = true;
                                    this.Timer();
                                }
                            break;
                            case 3:// spread 12
                                if(this.shootNum < 13){
                                    if(ticker % 8 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      
                                            
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                    
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 2;

                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
        
                                        this.bullet.Speed = 5;
                                        
                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) -120 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) -120 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed);
                                        console.log(this.bullet)
                    
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                    
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 12){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    this.Timer();
                                }
                            break;
                            case 4:// Test Ring 1
                            if(this.shootNum < 4){
                                if(ticker % 100 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x + 35, this.y);   
                                    this.position = new math.Vec2(this.x, this.y);
                                    this.distance = math.Vec2.Distance(this.playerPos, this.position);   
                    
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 4;
    
                                    this.bullet.Speed = 3;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = 360/2;
                                    //this.bullet.Angle += this.bullet.AngleStep

                                    this.bullet.Dir = new math.Vec2(
                                        ((this.playerPos.x - this.position.x)/ this.distance) * this.bullet.Speed, 
                                        ((this.playerPos.y - this.position.y)/ this.distance) * this.bullet.Speed
                                        );

                                    this.bullet.x = this.bulletSpawn.x
                                    this.bullet.y = this.bulletSpawn.y

                                    console.log(this.bullet.Angle)
                                    console.log(this.bullet)
                                    
                                    //let laser = createjs.Sound.play("laser");
                                    //laser.volume = 0.2;
                
                                    //console.log(this.bullet)
                                }
                            }
                            if(this.shootNum > 3){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.pattern1 = true;
                                this.pattern2 = false;
                                //this.Timer();
                            }
                            break;
                            case 5: // Spiral?
                            if(this.shootNum < 30){
                                if(ticker % 5 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x, this.y);   
                                    this.position = new math.Vec2(this.x, this.y);
                                    this.distance = math.Vec2.Distance(this.playerPos, this.position);   
                    
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 5;
    
                                    this.bullet.Speed = 0.05;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = (360/this.shootNum);
                                    this.bullet.Angle += this.bullet.AngleStep

                                    this.bullet.Dir = new math.Vec2(
                                        (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed, 
                                        (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed
                                    );

                                    this.bullet.x = this.bulletSpawn.x 
                                    this.bullet.y = this.bulletSpawn.y

                                    console.log(this.bullet.Angle)
                                    console.log(this.bullet)
                                    
                                    //let laser = createjs.Sound.play("laser");
                                    //laser.volume = 0.2;
                                }
                            }
                            if(this.shootNum > 29){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.pattern1 = true;
                                this.pattern2 = false;
                                //this.Timer();
                            }
                            break;
                            case 6:
                            break;
                            case 7:
                            break;
                            case 8:
                            break;
                            case 9:
                            break;
                        }
                    case "Enemy12":
                    case "Enemy13":
                    break;
                }
            }
        }

        public Timer():void{
            let counter = 1;

            this.timerInterval = setInterval(() =>{
                counter--;
                 if(counter < 0){
                    counter = 1;
                    clearInterval(this.timerInterval);
                    this.shootNum = 0;
                    this.shoot = false;
                 }
             }, 1000)
        }
    }
}