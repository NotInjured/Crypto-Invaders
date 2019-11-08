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
        private coins:objects.Coins;

        private bulletSpawn:math.Vec2;
        private playerPos:math.Vec2;
        private position:math.Vec2;

        private player:objects.Player;

        private timerInterval:number;

        private randomNum;

        private pattern1:boolean = false;
        private pattern2:boolean = false;
        private pattern3:boolean = false;
        private pattern4:boolean = false;
        private pattern5:boolean = false;
        private pattern6:boolean = false;
        private pattern7:boolean = false;
        private pattern8:boolean = false;
        private pattern9:boolean = false;
        private pattern10:boolean = false;
    
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

                    if(this.shoot && !this.player.isInvincible && managers.Game.hud.Lives >= 0)
                        managers.Collision.CheckAABB(this.bullet, this.player);
                }
            }   
            if(managers.Game.boss1Hp < 0){
                this.isDead
            }
            if(this.isDead){
                managers.Game.currentSceneObject.removeChild(managers.Game.eType2)
            }
        }

        public Reset():void {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            this.DropCoin()
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
                        this.Timer()
                        this.back = true;
                    }
                    if(this.y < 300 && !this.back)
                        this.y += 5;
                    if(this.back && this.y > -200){
                        this.y -= 2;
                            
                        if(this.y < 100 && !this.shoot){
                            this.ShootPlayer();
                        }
                    }
                    if(this.back && this.y < -190)
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
                    if(this.y > 350 && this.y < 400 && !this.shoot){
                        this.ShootPlayer();
                        this.shoot = true;
                    }
                    if(this.y < 730)
                        this.y += 3;
                    if(this.y > 720)
                        this.Reset();
                break;
                case "Enemy4":
                    if(this.y < 200)
                        this.y += 2;
                    if(this.y > 190){
                        if(managers.Game.normal){
                            if(managers.Game.boss1Hp > 150){
                                if(!this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(1)
                                if(this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(2)
                                if(!this.pattern1 && this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(3)
                                if(!this.pattern1 && !this.pattern2 && this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(4)
                            }
                            if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                if(!this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(1)
                                if(this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(2)
                                if(!this.pattern1 && this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(3)
                                if(!this.pattern1 && !this.pattern2 && this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(4)
                                if(!this.pattern1 && !this.pattern2 && !this.pattern3 && this.pattern4 && !this.pattern7)
                                    this.ShootPattern(7)
                            }
                            if(managers.Game.boss1Hp <= 100){
                                if(!this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(1)
                                if(this.pattern1 && !this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(2)
                                if(!this.pattern1 && this.pattern2 && !this.pattern3 && !this.pattern4 && !this.pattern7)
                                    this.ShootPattern(3)
                                if(!this.pattern1 && !this.pattern2 && this.pattern3 && !this.pattern4 && !this.pattern7){
                                    this.ShootPattern(4)
                                    this.ShootPattern(7)
                                }
                            }
                        }
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
            if(!this.isDead && !this.shoot && !this.player.isDead){
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
    
                        this.bullet = new objects.EnemyBullet("Enemy1_Shot", false);
    
                        this.bullet.Dir = new math.Vec2(
                            ((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, 
                            ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                        this.bullet.Speed = 7;
    
                        this.bullet.x = this.bulletSpawn.x;
                        this.bullet.y = this.bulletSpawn.y;
    
                        let laser = createjs.Sound.play("laser");
                        laser.volume = 0.2;

                        managers.Game.currentSceneObject.addChild(this.bullet);
                        //console.log(this.bullet)
                        this.shoot = true;  
                    break;
                }
            }
        }
        
        public ShootPattern(pattern:number):void{
            if(!this.isDead && !this.shoot && !this.player.isDead){
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
                                        //console.log(this.bullet)
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                    
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 9){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern1 = true;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        this.pattern1 = true;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        this.pattern1 = true;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    this.Timer();
                                }
                            break;
                            case 2: // spread 7
                                if(this.shootNum < 8){
                                    if(ticker % 5 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      
                                                
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                        
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 2;

                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
            
                                        this.bullet.Speed = 5;
                                            
                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) -60 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) -60 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed
                                            );
                                        //console.log(this.bullet)
                        
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                        
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 7){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                        this.pattern3 = false;
                                        this.pattern4 = false
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        this.pattern1 = false;
                                        this.pattern2 = true;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    this.Timer();
                                }
                            break;
                            case 3:// spread 13
                                if(this.shootNum < 14){
                                    if(ticker % 5 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      
                                            
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                    
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 2;

                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
        
                                        this.bullet.Speed = 5;
                                        
                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) -100 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) -100 +(20 * this.shootNum))/ this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                    
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                    
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 13){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                        this.pattern4 = false
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = true;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    this.Timer();
                                }
                            break;
                            case 4: // Spiral Normal
                                if(this.shootNum < 250){
                                    if(ticker % 3 == 0){
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                    
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 5;
    
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360/72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep

                                        this.bullet.Dir = new math.Vec2(
                                            (60*Math.cos(this.bullet.Angle)) * this.bullet.Speed, 
                                            (60*Math.sin(this.bullet.Angle)) * this.bullet.Speed
                                        );

                                        this.bullet.x = this.bulletSpawn.x 
                                        this.bullet.y = this.bulletSpawn.y

                                        //console.log(this.bullet.Angle)
                                        //console.log(this.bullet)
                                    
                                        //let laser = createjs.Sound.play("laser");
                                        //laser.volume = 0.2;
                                    }
                                }
                                if(this.shootNum > 249){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = true;
                                        this.pattern7 = false;
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        this.pattern1 = false;
                                        this.pattern2 = false;
                                        this.pattern3 = false;
                                        this.pattern4 = false;
                                        this.pattern7 = false;
                                    }
                                    this.Timer();
                                }
                            break;
                            case 5:// Spiral Hard
                            if(this.shootNum < 500){
                                if(ticker % 3 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 5;

                                    this.bullet.Speed = 0.05;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = (360/180) * this.shootNum;
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
                            if(this.shootNum > 499){
                                this.bullet.Reset()
                                this.shoot = true;
                                //this.Timer();
                            }
                            break;
                            case 6:// Spiral Hell
                            if(this.shootNum < 1000){
                                if(ticker % 1 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 5;

                                    this.bullet.Speed = 0.05;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = (360/1080) * this.shootNum;
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
                            if(this.shootNum > 999){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.pattern1 = true;
                                this.pattern2 = false;
                                //this.Timer();
                            }
                            break;
                            case 7:// Spiral Normal Reverse
                            if(this.shootNum < 250){
                                if(ticker % 3 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 5;

                                    this.bullet.Speed = 0.05;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = (360/72) * this.shootNum;
                                    this.bullet.Angle += this.bullet.AngleStep

                                    this.bullet.Dir = new math.Vec2(
                                        (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed, 
                                        (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed
                                    );

                                    this.bullet.x = this.bulletSpawn.x 
                                    this.bullet.y = this.bulletSpawn.y

                                    console.log(this.bullet.Angle)
                                    console.log(this.bullet)
                                
                                    //let laser = createjs.Sound.play("laser");
                                    //laser.volume = 0.2;
                                }
                            }
                            if(this.shootNum > 249){
                                this.bullet.Reset()
                                this.shoot = true;
                                if(managers.Game.boss1Hp > 150){
                                    this.pattern1 = false;
                                    this.pattern2 = false;
                                    this.pattern3 = false;
                                    this.pattern4 = false;
                                    this.pattern7 = false;
                                }
                                if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                    this.pattern1 = false;
                                    this.pattern2 = false;
                                    this.pattern3 = false;
                                    this.pattern4 = false;
                                    this.pattern7 = false;
                                }
                                if(managers.Game.boss1Hp < 100){
                                    this.pattern1 = false;
                                    this.pattern2 = false;
                                    this.pattern3 = false;
                                    this.pattern4 = false;
                                    this.pattern7 = false;
                                }
                                this.Timer();
                            }
                            break;
                            case 8:// Spiral Hard Reverse
                            if(this.shootNum < 500){
                                if(ticker % 3 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 5;

                                    this.bullet.Speed = 0.05;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = (360/360) * this.shootNum;
                                    this.bullet.Angle += this.bullet.AngleStep

                                    this.bullet.Dir = new math.Vec2(
                                        (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed, 
                                        (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed
                                    );

                                    this.bullet.x = this.bulletSpawn.x 
                                    this.bullet.y = this.bulletSpawn.y

                                    console.log(this.bullet.Angle)
                                    console.log(this.bullet)
                                
                                    //let laser = createjs.Sound.play("laser");
                                    //laser.volume = 0.2;
                                }
                            }
                            if(this.shootNum > 499){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.pattern1 = true;
                                this.pattern2 = false;
                                //this.Timer();
                            }
                            break;
                            case 9:// Spiral Hell Reverse
                            if(this.shootNum < 1000){
                                if(ticker % 1 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 5;

                                    this.bullet.Speed = 0.05;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = (360/1080) * this.shootNum;
                                    this.bullet.Angle += this.bullet.AngleStep

                                    this.bullet.Dir = new math.Vec2(
                                        (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed, 
                                        (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed
                                    );

                                    this.bullet.x = this.bulletSpawn.x 
                                    this.bullet.y = this.bulletSpawn.y

                                    console.log(this.bullet.Angle)
                                    console.log(this.bullet)
                                
                                    //let laser = createjs.Sound.play("laser");
                                    //laser.volume = 0.2;
                                }
                            }
                            if(this.shootNum > 999){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.pattern1 = true;
                                this.pattern2 = false;
                                //this.Timer();
                            }
                            break;
                            case 10:// Spiral Hell Reverse
                            if(this.shootNum < 1000){
                                if(ticker % 1 == 0){
                                    this.shootNum++;
                                    this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                
                                    this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                    this.bullet.pattern = 5;

                                    this.bullet.Speed = 0.05;
                                    this.bullet.Radius = 1
                                    this.bullet.Angle = 0;
                                    this.bullet.AngleStep = (360/1080) * this.shootNum;
                                    this.bullet.Angle += this.bullet.AngleStep

                                    this.bullet.Dir = new math.Vec2(
                                        (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed, 
                                        (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed
                                    );

                                    this.bullet.x = this.bulletSpawn.x 
                                    this.bullet.y = this.bulletSpawn.y

                                    console.log(this.bullet.Angle)
                                    console.log(this.bullet)
                                
                                    //let laser = createjs.Sound.play("laser");
                                    //laser.volume = 0.2;
                                }
                            }
                            if(this.shootNum > 999){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.pattern1 = true;
                                this.pattern2 = false;
                                //this.Timer();
                            }
                            break;
                        }
                    case "Enemy12":
                    case "Enemy13":
                    break;
                }
            }
        }

        public DropCoin():void{
            let randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1); 
            switch(randomNum){
                case 1:
                    this.coins = new objects.Coins("B_coin")
                    this.coins.scaleX = 0.25
                    this.coins.scaleY = 0.25
                    this.coins.x = this.x;
                    this.coins.y = this.y;
                    this.coins.Dir = new math.Vec2(this.player.x, this.player.y)
                    this.coins.IsDropped = true;
                    this.coins.Update()
                    managers.Game.currentSceneObject.addChild(this.coins)
                break;
                case 2:
                    this.coins = new objects.Coins("L_coin")
                    this.coins.scaleX = 0.25
                    this.coins.scaleY = 0.25
                    this.coins.x = this.x;
                    this.coins.y = this.y;
                    this.coins.Dir = new math.Vec2(this.player.x, this.player.y)
                    this.coins.IsDropped = true;
                    this.coins.Update()
                    managers.Game.currentSceneObject.addChild(this.coins)
                break;
                case 3:
                    this.coins = new objects.Coins("E_coin")
                    this.coins.scaleX = 0.25
                    this.coins.scaleY = 0.25
                    this.coins.x = this.x;
                    this.coins.y = this.y;
                    this.coins.Dir = new math.Vec2(this.player.x, this.player.y)
                    this.coins.IsDropped = true;
                    this.coins.Update()
                    managers.Game.currentSceneObject.addChild(this.coins)
                break;
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