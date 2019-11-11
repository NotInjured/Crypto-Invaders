module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        private back:boolean = false;
        private shoot:boolean = false;
        public isInvincible: boolean = true;
        public patternFinished:boolean = false;

        private angle:number;
        private shootNum:number = 0;
        private sprite:string;
        private distance:number;
        private coinsCount:number = 0;
        
        private bullet:objects.EnemyBullet;
        private coins:objects.Coins;

        private bulletSpawn:math.Vec2;
        private playerPos:math.Vec2;
        private position:math.Vec2;

        private player:objects.Player;

        private timerInterval:number;

        private randomNum;

        private pattern1:boolean = true;
        private pattern2:boolean = false;
        private pattern3:boolean = false;
        private pattern4:boolean = false;
        private pattern5:boolean = false;
        private pattern6:boolean = false;
        private pattern7:boolean = false;
        private pattern8:boolean = false;
        private pattern9:boolean = false;
        private pattern10:boolean = false;
    
        private randomPattern:number = Math.floor(Math.random() * (5 - 1 + 1) + 1)

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
                    this.y = Math.floor(Math.random() * (-75 - (-15) + 1) + (-15));
                break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = 200
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = -90
                        break;
                        case 2:
                            this.x = 900
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = 90
                        break;
                    }
                break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                        break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                        break;
                    }
                break;
                case "Enemy4":
                    this.x = 555
                    this.y = -50
                break;
            }
            
        }

        public Update():void {
            if(!this.isDead){
                this.Move();
                this.CheckBounds();
                if(this.bullet != undefined)
                    this.bullet.Update()
                if(this.bullet == undefined)
                    managers.Game.currentSceneObject.removeChild(this.bullet)
            }
        }

        public Reset():void {
            this.isDead = false;
            this.back = false;
            this.shoot = false
            this.isInvincible = true;
            switch(this.sprite){
                case "Enemy1":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
                break;
                case "Enemy2":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = 200
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = -90
                        break;
                        case 2:
                            this.x = 900
                            this.y = Math.floor(Math.random() * (500 - 200 + 1) + 200);
                            this.rotation = 90
                        break;
                    }
                break;
                case "Enemy3":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
                        break;
                        case 2:
                            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                            this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
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
                        this.ShootPattern(1)
                        this.shoot = false
                        this.back = true;
                    }
                    if(this.y < 300 && !this.back)
                        this.y += 5;
                    if(this.back){
                        if(this.y > -200)
                            this.y -= 2;
                        if(this.y > 0 && this.y < 100)
                            this.ShootPattern(1)
                        if(this.y < 0)
                            this.isInvincible = true;
                        if(this.y < -50)   
                            this.Reset()
                    }
                    if(this.y > 0)
                        this.isInvincible = false
                break;
                case "Enemy2":
                    switch(this.randomNum){
                        case 1:
                            if(this.x < 1000 && !this.back){
                                this.x += 3;
                                if(this.x > 400 && this.x < 600)
                                    this.ShootPattern(1)
                            }
                            if(this.x > 995 && !this.back){
                                this.back = true;
                                this.shoot = false
                            }
                            if(this.x > 200 && this.back){
                                this.rotation = 90
                                this.x -= 5;
                                if(this.x > 400 && this.x < 600)
                                    this.ShootPattern(1)
                                if(this.x < 290)   
                                    this.Reset()
                            }
                        break;
                        case 2:
                            if(this.x > 0 && !this.back){
                                this.x -= 3;
                                if(this.x > 400 && this.x < 600)
                                    this.ShootPattern(1)
                                        
                            }
                            if(this.x < 10 && !this.back){
                                this.shoot = false;
                                this.back = true;
                            }
                            if(this.x < 800 && this.back){
                                this.x += 5;
                                this.rotation = -90
                                if(this.x > 400 && this.x < 600)
                                    this.ShootPattern(1)
                                if(this.x > 790)   
                                    this.Reset()
                            }
                        break;
                    }
                break;
                case "Enemy3":
                    if(this.y < 730){
                        this.y += 3;

                        if(this.y > 350 && this.y < 400)
                        this.ShootPattern(1)
                    }
                    if(this.y > 720)
                        this.Reset()
                break;
                case "Enemy4":
                    if(this.y < 200)
                        this.y += 2;
                    if(this.y > 190){
                            if(managers.Game.boss1Hp > 150){
                                if(managers.Game.normal){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern4)
                                        this.ShootPattern(4)
                                }
                                if(managers.Game.hard){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern6)
                                        this.ShootPattern(6)
                                }
                                if(managers.Game.hell){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern7)
                                        this.ShootPattern(7)
                                }
                                
                            }
                            if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                if(managers.Game.normal){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern4)
                                        this.ShootPattern(4)
                                    if(!this.pattern4 && this.pattern5)
                                        this.ShootPattern(5)
                                }
                                if(managers.Game.hard){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern6)
                                        this.ShootPattern(6)
                                    if(!this.pattern6 && this.pattern8)
                                        this.ShootPattern(8)
                                }
                                if(managers.Game.hell){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern7)
                                        this.ShootPattern(7)
                                    if(!this.pattern7 && this.pattern9)
                                        this.ShootPattern(9)
                                }
                            }
                            if(managers.Game.boss1Hp < 100){
                                if(managers.Game.normal){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern4 || this.pattern5){
                                        this.ShootPattern(4)
                                        this.ShootPattern(5)
                                    }
                                }
                                if(managers.Game.hard){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern6 || this.pattern8){
                                        this.ShootPattern(6)
                                        this.ShootPattern(8)
                                    }
                                }
                                if(managers.Game.hell){
                                    if(this.pattern1)
                                        this.ShootPattern(1)
                                    if(!this.pattern1 && this.pattern2)
                                        this.ShootPattern(2)
                                    if(!this.pattern2 && this.pattern3)
                                        this.ShootPattern(3)
                                    if(!this.pattern3 && this.pattern7 || this.pattern9){
                                        this.ShootPattern(7)
                                        this.ShootPattern(9)
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
        
        public ShootPattern(pattern:number):void{
            if(!this.isDead && !this.shoot){
                let ticker:number = createjs.Ticker.getTicks();

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
                        switch(pattern){
                            case 1:
                                this.bulletSpawn = new math.Vec2(this.x - 10, this.y - 15);      

                                this.position = new math.Vec2(this.x, this.y);
                                this.distance = math.Vec2.Distance(this.playerPos, this.position);
                            
                                this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                this.bullet.pattern = 1;
                                this.bullet.Speed = 3
        
                                this.bullet.Dir = new math.Vec2(
                                    ((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, 
                                    ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
        
                                this.bullet.x = this.bulletSpawn.x;
                                this.bullet.y = this.bulletSpawn.y;
        
                                let laser = createjs.Sound.play("laser");
                                laser.volume = 0.1;
    
                                //managers.Game.currentSceneObject.addChild(this.bullet);
                                this.shoot = true;
                            break;
                        }
                    break;
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
        
                                        this.bullet.Speed = 4;

                                        this.bullet.Dir = new math.Vec2(
                                            ((this.playerPos.x - this.position.x) / this.distance) * this.bullet.Speed, 
                                            ((this.playerPos.y - this.position.y) / this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                    
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 9){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern1 = false
                                        this.pattern2 = true
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        this.pattern1 = false
                                        this.pattern2 = true
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        this.pattern1 = false
                                        this.pattern2 = true
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
            
                                        this.bullet.Speed = 4;
                                            
                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) -90 +(30 * this.shootNum))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) -90 +(30 * this.shootNum))/ this.distance) * this.bullet.Speed
                                            );
                                        //console.log(this.bullet)
                        
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                        
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 7){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern2 = false
                                        this.pattern3 = true
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        this.pattern2 = false
                                        this.pattern3 = true
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        this.pattern2 = false
                                        this.pattern3 = true
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
        
                                        this.bullet.Speed = 4;
                                        
                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) -180 +(30 * this.shootNum))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) -180 +(30 * this.shootNum))/ this.distance) * this.bullet.Speed);
                                        //console.log(this.bullet)
                    
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                    
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 13){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern3 = false
                                        this.pattern4 = true
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        if(managers.Game.normal){
                                            this.pattern3 = false
                                            this.pattern4 = true
                                        }
                                        if(managers.Game.hard){
                                            this.pattern3 = false
                                            this.pattern6 = true
                                        }
                                        if(managers.Game.hell){
                                            this.pattern3 = false
                                            this.pattern7 = true
                                        }
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        if(managers.Game.normal){
                                            this.pattern3 = false
                                            this.pattern4 = true
                                        }
                                        if(managers.Game.hard){
                                            this.pattern3 = false
                                            this.pattern6 = true
                                            this.pattern8 = true
                                        }
                                        if(managers.Game.hell){
                                            this.pattern3 = false
                                            this.pattern7 = true
                                            this.pattern9 = true
                                        }
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
                                
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if(this.shootNum > 249){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    
                                    if(managers.Game.boss1Hp > 150){
                                        this.pattern1 = true
                                        this.pattern4 = false
                                    }
                                    if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                        this.pattern4 = false
                                        this.pattern5 = true
                                    }
                                    if(managers.Game.boss1Hp < 100){
                                        this.pattern1 = true
                                        this.pattern4 = false
                                        this.pattern5 = false
                                    }
                                    this.Timer();
                                }
                            break;
                            case 5:// Spiral Normal Reverse
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

                                    //console.log(this.bullet.Angle)
                                    //console.log(this.bullet)
                                
                                    let laser = createjs.Sound.play("laser");
                                    laser.volume = 0.1;
                                }
                            }
                            if(this.shootNum > 249){
                                this.bullet.Reset()
                                if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                    this.pattern1 = true
                                    this.pattern5 = false
                                }
                                if(managers.Game.boss1Hp < 100){
                                    this.pattern1 = true
                                    this.pattern4 = false
                                    this.pattern5 = false
                                }
                                this.Timer();
                            }
                            break;
                            case 6: //Spiral Hard 
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
                                
                                    let laser = createjs.Sound.play("laser");
                                    laser.volume = 0.1;
                                }
                            }
                            if(this.shootNum > 499){
                                this.bullet.Reset()

                                this.shoot = true;
                                if(managers.Game.boss1Hp > 150){
                                    this.pattern1 = true
                                    this.pattern6 = false
                                }
                                if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                    this.pattern6 = false
                                    this.pattern8 = true
                                }
                                if(managers.Game.boss1Hp < 100){
                                    this.pattern1 = true
                                    this.pattern6 = false
                                    this.pattern8 = false
                                }
                                this.Timer();
                            }
                            break;
                            case 7:// Spiral Hell
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
                                
                                    let laser = createjs.Sound.play("laser");
                                    laser.volume = 0.1;
                                }
                            }
                            if(this.shootNum > 999){
                                this.bullet.Reset()
                                this.shoot = true;
                                if(managers.Game.boss1Hp > 150){
                                    this.pattern1 = true
                                    this.pattern7 = false
                                }
                                if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                    this.pattern7 = false
                                    this.pattern9 = true
                                }
                                if(managers.Game.boss1Hp < 100){
                                    this.pattern1 = true
                                    this.pattern7 = false
                                    this.pattern9 = false
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
                                if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                    this.pattern8 = false
                                    this.pattern1 = true
                                }
                                if(managers.Game.boss1Hp < 100){
                                    this.pattern1 = true
                                    this.pattern6 = false
                                    this.pattern8 = false
                                }
                                this.Timer();
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
                                if(managers.Game.boss1Hp > 100 && managers.Game.boss1Hp < 150){
                                    this.pattern9 = false
                                    this.pattern1 = true
                                }
                                if(managers.Game.boss1Hp < 100){
                                    this.pattern1 = true
                                    this.pattern7 = false
                                    this.pattern9 = false
                                }
                                this.Timer();
                            }
                            break;
                        }
                    case "Enemy12":
                    case "Enemy13":
                    break;
                }
            }
        }

        public Timer():void{
            if(managers.Game.normal){
                let counter = 3;

                this.timerInterval = setInterval(() =>{
                    counter--;
                     if(counter < 0){
                        counter = 3;
                        clearInterval(this.timerInterval);
                        this.shootNum = 0;
                        this.shoot = false;
                     }
                 }, 1000)
            }
            if(managers.Game.hard){
                let counter = 1;

                this.timerInterval = setInterval(() =>{
                    counter--;
                     if(counter < 0){
                        counter = 2;
                        clearInterval(this.timerInterval);
                        this.shootNum = 0;
                        this.shoot = false;
                     }
                 }, 1000)
            }
            if(managers.Game.hell){
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

        public RespawnTimer():void{
            let counter = 2;

            this.timerInterval = setInterval(() =>{
                counter--;
                 if(counter < 0){
                    clearInterval(this.timerInterval);
                 }
             }, 1000)
        }

        public DropCoins():void{
            let coin = managers.Game.coinsManager.GetCoin()

            if(managers.Game.boss1IsDead){
                if(this.coinsCount < 25){
                    coin.IsDropped = true;
                    coin.EnemyDropped = true;
                    coin.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    coin.y = Math.floor(Math.random() * (380 - 25 + 1) + 25);
                    coin.scaleX = 0.25
                    coin.scaleY = 0.25
                    managers.Game.currentSceneObject.addChild(coin)
                    this.coinsCount++;
                }
            }
        }
    }
}