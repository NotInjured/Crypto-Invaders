module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false
        private back:boolean = false
        private shoot:boolean = false
        public isInvincible: boolean = true
        public patternFinished:boolean = false
        private startPos: boolean = false
        private position1: boolean = false
        private position2: boolean = false
        private position3: boolean = false
        private position4: boolean = false
        private position5: boolean = false
        private position6: boolean = false

        private eliteHP: number = 25

        private boxPoisitions: objects.Sprite[]
        private shield: objects.Sprite

        private angle:number = Math.floor(Math.random() * (360 - 0 + 1) + 0);
        private shootNum:number = 0
        private shootNum2:number = 0
        private sprite:string
        private distance:number
        private coinsCount:number = 0
        private randomPosition:number
        
        private bullet:objects.EnemyBullet
        private coins:objects.Coins

        private bulletSpawn:math.Vec2
        private playerPos:math.Vec2
        private position:math.Vec2

        private timerInterval:number

        private randomNum

        private pattern1:boolean = true
        private pattern2:boolean = false
        private pattern3:boolean = false
        private pattern4:boolean = false
        private pattern5:boolean = false
        private pattern6:boolean = false
        private pattern7:boolean = false
        private pattern8:boolean = false
        private pattern9:boolean = false
        private pattern10:boolean = false
    
        private randomPattern:number = Math.floor(Math.random() * (5 - 1 + 1) + 1)

        get EliteHP():number{
            return this.eliteHP
        }

        get Angle():number{
            return this.angle;
        }

        set Angle(n:number){
            this.angle = n
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
                case "Enemy7":
                case "Enemy10":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);                            
                    this.y = Math.floor(Math.random() * (-75 - (-15) + 1) + (-15));
                break;
                case "Enemy2":
                case "Enemy8":
                case "Enemy11":
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
                case "Enemy9":
                case "Enemy12":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                break;
                case "Enemy4":
                    this.x = 555
                    this.y = -50
                    this.boxPoisitions = new Array<objects.Sprite>();
                    for(let i = 0; i < 3; i++){
                        this.boxPoisitions[i] = new objects.Sprite("BlueBox", 
                        Math.floor(Math.random() * (525 - 360 + 1) + 360),
                        Math.floor(Math.random() * (250 - 50 + 1) + 50)
                        )
                    }
                    for(let i = 3; i < 6; i ++){
                        this.boxPoisitions[i] = new objects.Sprite("BlueBox", 
                        Math.floor(Math.random() * (690 - 525 + 1) + 525),
                        Math.floor(Math.random() * (250 - 50 + 1) + 50)
                        )
                    }

                    this.position1 = true;
                break;
                case "Enemy5":
                    this.x = Math.floor(Math.random() * (690 - 400 + 1) + 400);
                    this.y = Math.floor(Math.random() * (-30 - (-15) + 1) + (-15));
                break;
                case "Destroyer":
                    this.rotation = 90
                    this.scaleX = 0.4
                    this.scaleY = 0.4
                    this.x = 473
                    this.y = - 50
                break;
            }
            
        }

        public Update():void {
            if(!this.isDead){
                this.Move();
                if(this.bullet != undefined)
                    this.bullet.Update()
                if(this.bullet == undefined)
                    managers.Game.currentSceneObject.removeChild(this.bullet)
            }

            if(this.isDead)
                this.RespawnTimer()
        }

        public Reset():void {
            this.isDead = false
            this.back = false
            this.shoot = false
            this.isInvincible = true
            switch(this.sprite){
                case "Enemy1":
                case "Enemy7":
                case "Enemy10":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-500 - (-350) + 1) + (-350));
                break;
                case "Enemy2":
                case "Enemy8":
                case "Enemy11":
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
                case "Enemy9":
                case "Enemy12":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-400 - (-350) + 1) + (-350));
                break;
                case "Enemy5":
                    this.isDead = true
                    this.isInvincible = true
                break;
                case "Enemy6":
                    this.isDead = true
                    this.isInvincible = true
                break;
            }
        }

        public Move():void {
            switch(this.sprite){
                case "Enemy1":
                case "Enemy7":
                case "Enemy10":
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
                case "Enemy8":
                case "Enemy11":
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
                case "Enemy9":
                case "Enemy12":
                    if(this.y < 730){
                        this.y += 3;

                        if(this.y > 350 && this.y < 400)
                        this.ShootPattern(1)
                    }
                    if(this.y > 720)
                        this.Reset()
                break;
                case "Enemy4":
                    if(this.y < 200 && !this.startPos){
                            this.y += 2;
                            if(this.y > 190){
                                this.startPos = true;
                            } 
                    }
                    if(this.startPos){
                        if(this.position1){
                            if(this.x < this.boxPoisitions[0].x){
                                this.x += 1
                            }
                            if(this.x > this.boxPoisitions[0].x){
                                this.x -= 1
                            }
                            if(this.y < this.boxPoisitions[0].y){
                                this.y += 1
                            }
                            if(this.y > this.boxPoisitions[0].y){
                                this.y -= 1
                            }
                                
                            if((this.x + this.halfW) > ((this.boxPoisitions[0].x) - this.boxPoisitions[0].halfW/4) && 
                                (this.x - this.halfW) < ((this.boxPoisitions[0].x) + this.boxPoisitions[0].halfW/4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[0].y) - this.boxPoisitions[0].halfH/4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[0].y) + this.boxPoisitions[0].halfH/4)){
                                this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                switch(this.randomPosition){
                                    case 1:
                                        this.position1 = false;
                                        this.position2 = true;
                                    break;
                                    case 2:
                                        this.position1 = false;
                                        this.position3 = true;
                                    break;
                                    case 3:
                                        this.position1 = false;
                                        this.position4 = true;
                                    break;
                                    case 4:
                                        this.position1 = false;
                                        this.position5 = true;
                                    break;
                                    case 5:
                                        this.position1 = false;
                                        this.position6 = true;
                                    break;
                                }
                            }
                        }
                        if(this.position2){
                                if(this.x < this.boxPoisitions[1].x){
                                    this.x += 1
                                }
                                if(this.x > this.boxPoisitions[1].x){
                                    this.x -= 1
                                }
                                if(this.y < this.boxPoisitions[1].y){
                                    this.y += 1
                                }
                                if(this.y > this.boxPoisitions[1].y){
                                    this.y -= 1
                                }
                                
                                if((this.x + this.halfW) > ((this.boxPoisitions[1].x) - this.boxPoisitions[1].halfW/4) && 
                                (this.x - this.halfW) < ((this.boxPoisitions[1].x) + this.boxPoisitions[1].halfW/4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[1].y) - this.boxPoisitions[1].halfH/4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[1].y) + this.boxPoisitions[1].halfH/4)){
                                    this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                    switch(this.randomPosition){
                                        case 1:
                                            this.position2 = false;
                                            this.position1 = true;
                                        break;
                                        case 2:
                                            this.position2 = false;
                                            this.position3 = true;
                                        break;
                                        case 3:
                                            this.position2 = false;
                                            this.position4 = true;
                                        break;
                                        case 4:
                                            this.position2 = false;
                                            this.position5 = true;
                                        break;
                                        case 5:
                                            this.position2 = false;
                                            this.position6 = true;
                                        break;
                                    }
                                }
                        }
                        if(this.position3){
                                if(this.x < this.boxPoisitions[2].x){
                                    this.x += 1
                                }
                                if(this.x > this.boxPoisitions[2].x){
                                    this.x -= 1
                                }
                                if(this.y < this.boxPoisitions[2].y){
                                    this.y += 1
                                }
                                if(this.y > this.boxPoisitions[2].y){
                                    this.y -= 1
                                }

                                if((this.x + this.halfW) > ((this.boxPoisitions[2].x) - this.boxPoisitions[2].halfW/4) && 
                                (this.x - this.halfW) < ((this.boxPoisitions[2].x) + this.boxPoisitions[2].halfW/4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[2].y) - this.boxPoisitions[2].halfH/4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[2].y) + this.boxPoisitions[2].halfH/4)){
                                    this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                    switch(this.randomPosition){
                                        case 1:
                                            this.position3 = false;
                                            this.position1 = true;
                                        break;
                                        case 2:
                                            this.position3 = false;
                                            this.position2 = true;
                                        break;
                                        case 3:
                                            this.position3= false;
                                            this.position4 = true;
                                        break;
                                        case 4:
                                            this.position3 = false;
                                            this.position5 = true;
                                        break;
                                        case 5:
                                            this.position3 = false;
                                            this.position6 = true;
                                        break;
                                    }
                                }
                        }
                        if(this.position4){
                                if(this.x < this.boxPoisitions[3].x){
                                    this.x += 1
                                }
                                if(this.x > this.boxPoisitions[3].x){
                                    this.x -= 1
                                }
                                if(this.y < this.boxPoisitions[3].y){
                                    this.y += 1
                                }
                                if(this.y > this.boxPoisitions[3].y){
                                    this.y -= 1
                                }
                                
                                if((this.x + this.halfW) > ((this.boxPoisitions[3].x) - this.boxPoisitions[3].halfW/4) && 
                                (this.x - this.halfW) < ((this.boxPoisitions[3].x) + this.boxPoisitions[3].halfW/4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[3].y) - this.boxPoisitions[3].halfH/4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[3].y) + this.boxPoisitions[3].halfH/4)){
                                    this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                    switch(this.randomPosition){
                                        case 1:
                                            this.position4 = false;
                                            this.position1 = true;
                                        break;
                                        case 2:
                                            this.position4 = false;
                                            this.position2 = true;
                                        break;
                                        case 3:
                                            this.position4 = false;
                                            this.position3 = true;
                                        break;
                                        case 4:
                                            this.position4 = false;
                                            this.position5 = true;
                                        break;
                                        case 5:
                                            this.position4 = false;
                                            this.position6 = true;
                                        break;
                                    }
                                }
                        }
                        if(this.position5){
                                if(this.x < this.boxPoisitions[4].x){
                                    this.x += 1
                                }
                                if(this.x > this.boxPoisitions[4].x){
                                    this.x -= 1
                                }
                                if(this.y < this.boxPoisitions[4].y){
                                    this.y += 1
                                }
                                if(this.y > this.boxPoisitions[4].y){
                                    this.y -= 1
                                }
                                
                                if((this.x + this.halfW) > ((this.boxPoisitions[4].x) - this.boxPoisitions[4].halfW/4) && 
                                (this.x - this.halfW) < ((this.boxPoisitions[4].x) + this.boxPoisitions[4].halfW/4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[4].y) - this.boxPoisitions[4].halfH/4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[4].y) + this.boxPoisitions[4].halfH/4)){
                                    this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                    switch(this.randomPosition){
                                        case 1:
                                            this.position5 = false;
                                            this.position1 = true;
                                        break;
                                        case 2:
                                            this.position5 = false;
                                            this.position2 = true;
                                        break;
                                        case 3:
                                            this.position5 = false;
                                            this.position3 = true;
                                        break;
                                        case 4:
                                            this.position5 = false;
                                            this.position4 = true;
                                        break;
                                        case 5:
                                            this.position5 = false;
                                            this.position6 = true;
                                        break;
                                    }
                                }
                        }
                        if(this.position6){
                                if(this.x < this.boxPoisitions[5].x){
                                    this.x += 1
                                }
                                if(this.x > this.boxPoisitions[5].x){
                                    this.x -= 1
                                }
                                if(this.y < this.boxPoisitions[5].y){
                                    this.y += 1
                                }
                                if(this.y > this.boxPoisitions[5].y){
                                    this.y -= 1
                                }

                                if((this.x + this.halfW) > ((this.boxPoisitions[5].x) - this.boxPoisitions[5].halfW/4) && 
                                (this.x - this.halfW) < ((this.boxPoisitions[5].x) + this.boxPoisitions[5].halfW/4) &&
                                (this.y + this.halfH) > ((this.boxPoisitions[5].y) - this.boxPoisitions[5].halfH/4) &&
                                (this.y - this.halfH) < ((this.boxPoisitions[5].y) + this.boxPoisitions[5].halfH/4)){
                                    this.randomPosition = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                                    switch(this.randomPosition){
                                        case 1:
                                            this.position6 = false;
                                            this.position1 = true;
                                        break;
                                        case 2:
                                            this.position6 = false;
                                            this.position2 = true;
                                        break;
                                        case 3:
                                            this.position6 = false;
                                            this.position3 = true;
                                        break;
                                        case 4:
                                            this.position6 = false;
                                            this.position4 = true;
                                        break;
                                        case 5:
                                            this.position6 = false;
                                            this.position5 = true;
                                        break;
                                    }
                                }
                        }

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
                    if(this.y < 240){
                        this.y += 3;
                    }
                    if(this.y > 50)
                        this.ShootPattern(1)

                break;
                case "Enemy6":
                    if(this.y < 215){
                        this.y += 3;
                    }
                    if(this.y > 50)
                        this.ShootPattern(1)
                break;
                case "Destroyer":
                    if(this.y < 200 && !this.startPos){
                        this.y += 2;
                        if(this.y > 190){
                            this.startPos = true;
                        } 
                    }
                    if(this.startPos){
                        if(managers.Game.boss2Hp > 250){
                            this.ShootPattern(1)
                            this.ShootPattern(2)
                            this.ShootPattern(3)
                            this.ShootPattern(4)
                        }
                        if(managers.Game.boss2Hp > 200 && managers.Game.boss2Hp < 250){
                            if(this.pattern1){
                                this.ShootPattern(1)
                                this.ShootPattern(2)
                                this.ShootPattern(3)
                                this.ShootPattern(4)
                            }
                            if(!this.pattern1 && this.pattern2){
                                this.ShootPattern(5)
                                this.ShootPattern(6)
                            }
                        }
                        if(managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200){
                            if(this.pattern1){
                                this.ShootPattern(1)
                                this.ShootPattern(2)
                                this.ShootPattern(3)
                                this.ShootPattern(4)
                            }
                            if(!this.pattern1 && this.pattern2){
                                this.ShootPattern(5)
                                this.ShootPattern(6)
                            }
                            if(!this.pattern2 && this.pattern3){
                                this.ShootPattern(7)
                                this.ShootPattern(8)
                            }   
                        }
                        if(managers.Game.boss2Hp < 100){
                            if(!this.pattern1 && this.pattern2){
                                this.ShootPattern(5)
                                this.ShootPattern(6)
                            }
                            if(!this.pattern2 && this.pattern3){
                                this.ShootPattern(7)
                                this.ShootPattern(8)
                            }
                            if(!this.pattern3 && this.pattern4){
                                this.ShootPattern(9)
                                this.ShootPattern(10)
                            }  
                        }
                    }
                break;
            }
            
        }

        public FindPlayer(player:objects.Player):void{
            this.angle = Math.atan2(player.y - this.y, player.x - this.x );
            this.angle = this.angle * (180/Math.PI);

            //this.rotation = -90  + this.angle;

            this.playerPos = new math.Vec2(player.x, player.y);
        }
        
        public ShootPattern(pattern:number):void{
            if(!this.isDead && !this.shoot){
                let ticker:number = createjs.Ticker.getTicks();

                switch(this.sprite){
                    case "Enemy1":
                    case "Enemy2":
                    case "Enemy3":
                    case "Enemy7":
                    case "Enemy8":
                    case "Enemy9":
                    case "Enemy10":
                    case "Enemy11":
                    case "Enemy12":
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
                    case "Enemy6":
                    case "Enemy5":
                        switch(pattern){
                            case 1:
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
                                    this.Timer();
                                }
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
                            case 10: // Wall of Bullets
                            let angle = Math.floor(Math.random() * (360 - 0 + 1) + 0)
                            if(this.shootNum < 120){
                                this.shootNum++;
                                for(let i = 0; i < 3; i++){
                                    if(ticker % 1 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                        
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 5;
        
                                        this.bullet.Speed = 0.01
                                        this.bullet.Radius = 1
                                        this.bullet.AngleStep = (360/3) * this.shootNum;
        
                                        this.bullet.Dir = new math.Vec2(
                                            (90*Math.cos(angle * 5)) * this.bullet.Speed, 
                                            (120*Math.sin(angle * 3)) * this.bullet.Speed
                                        );
                                        this.bullet.x = this.x + 90*Math.cos(angle * 5)
                                        this.bullet.y = this.y + 120*Math.sin(angle * 3)
                                        //console.log(this.bullet)
    
                                        angle += this.bullet.AngleStep
                                    }
                                }
                                angle += 7;
                            }
                            if(this.shootNum > 119){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.Timer();
                            }
                            break;
                            case 11: // BoWaP - Border of Wave and Particle
                            if(this.shootNum < 40000){
                                for(let i = 0; i < 4; i++){
                                    if(ticker % 1 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x - 10, this.y); 
                        
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 5;
                                        this.bullet.Speed = 0.03
                                        this.bullet.AngleStep = (360/6) * this.shootNum;
                                        this.bullet.Angle = 180
                                        this.bullet.Angle += this.bullet.AngleStep
                                        if(this.shootNum < 2500 ||
                                            this.shootNum > 5000 && this.shootNum < 7500 ||
                                            this.shootNum > 10000 && this.shootNum < 12500 ||
                                            this.shootNum > 15000 && this.shootNum < 17500 ||
                                            this.shootNum > 20000 && this.shootNum < 22500 ||
                                            this.shootNum > 25000 && this.shootNum < 27500 ||
                                            this.shootNum > 30000 && this.shootNum < 32500 ||
                                            this.shootNum > 35000 && this.shootNum < 37500){
                                            //this.bullet.Speed = 0.03
                                            this.bullet.Dir = new math.Vec2(
                                                (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed, 
                                                (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed
                                            );
                                        }
                                        if(this.shootNum > 2500 && this.shootNum < 5000 ||
                                            this.shootNum > 7500 && this.shootNum < 10000 ||
                                            this.shootNum > 12500 && this.shootNum < 15000 ||
                                            this.shootNum > 17500 && this.shootNum < 20000 ||
                                            this.shootNum > 22500 && this.shootNum < 25000 ||
                                            this.shootNum > 27500 && this.shootNum < 30000 ||
                                            this.shootNum > 32500 && this.shootNum < 35000 ||
                                            this.shootNum > 37500 && this.shootNum < 40000){
                                            //this.bullet.Speed = 0.05
                                                this.bullet.Dir = new math.Vec2(
                                                (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed, 
                                                (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed
                                         );
                                        }
                                        
                                        this.bullet.x = this.bulletSpawn.x
                                        this.bullet.y = this.bulletSpawn.y
                                    }
                                        //console.log(this.bullet.Angle)
                                        this.shootNum++
                                }

                            }
                            if(this.shootNum > 39999){
                                this.bullet.Reset()
                                this.shoot = true;
                                this.Timer();
                            }
                            break;
                            case 12:

                            break;
                        }
                    case "Destroyer":
                        switch(pattern){
                            case 1: // Repeater x10
                                if(this.shootNum < 99){
                                    if(ticker % 5 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x + 35, this.y - 85);      
                                                
                                        this.position = new math.Vec2(this.x + 50, this.y -40);
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
                                if(this.shootNum > 36){
                                    this.bullet.Reset()
                                    this.shoot = true;

                                    if(managers.Game.boss2Hp > 200 && managers.Game.boss2Hp < 250){
                                        this.pattern1 = false
                                        this.pattern2 = true
                                    }
                                    if(managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200){
                                        this.pattern1 = false
                                        this.pattern2 = true
                                    }
                                    if(managers.Game.boss2Hp < 100){
                                        this.pattern1 = false
                                        this.pattern2 = true
                                    }
                                    this.Timer();
                                }
                            break;
                            case 2: // Repeater x10
                                if(this.shootNum < 99){
                                    if(ticker % 5 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x + 60, this.y - 60);      
                                                
                                        this.position = new math.Vec2(this.x + 70, this.y -40);
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
                                if(this.shootNum > 36){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    this.Timer();
                                }
                            break;
                            case 3: // Repeater x10
                                if(this.shootNum < 99){
                                    if(ticker % 5 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x + 80, this.y - 60);      
                                                
                                        this.position = new math.Vec2(this.x + 90, this.y - 40);
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
                                if(this.shootNum > 36){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    this.Timer();
                                }
                            break;
                            case 4: // Repeater x10
                                if(this.shootNum < 99){
                                    if(ticker % 5 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x + 105, this.y - 85);      
                                                
                                        this.position = new math.Vec2(this.x+120, this.y-40);
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
                                if(this.shootNum > 36){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    this.Timer();
                                }
                            break;
                            case 5:
                                if(this.shootNum < 200){
                                    if(ticker % 3 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x + 35, this.y - 85);      
                                                
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                        
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 2;

                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
            
                                        this.bullet.Speed = 3;

                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) +(-10 * (this.shootNum % 10)))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) +(-10 * (this.shootNum % 10)))/ this.distance) * this.bullet.Speed
                                        );
                        
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 199){
                                    this.bullet.Reset()
                                    this.shoot = true;

                                    if(managers.Game.boss2Hp > 200 && managers.Game.boss2Hp < 250){
                                        this.pattern2 = false
                                        this.pattern3 = true
                                    }
                                    if(managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200){
                                        this.pattern2 = false
                                        this.pattern3 = true
                                    }
                                    if(managers.Game.boss2Hp < 100){
                                        this.pattern2 = false
                                        this.pattern3 = true
                                    }
                                    this.Timer();
                                }
                            break;
                            case 6:
                                if(this.shootNum < 200){
                                    if(ticker % 3 == 0){
                                        this.bulletSpawn = new math.Vec2(this.x + 105, this.y - 85);       
                                                
                                        this.position = new math.Vec2(this.x, this.y);
                                        this.distance = math.Vec2.Distance(this.playerPos, this.position);
                    
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 2;

                                        this.bullet.x = this.bulletSpawn.x;
                                        this.bullet.y = this.bulletSpawn.y;
        
                                        this.bullet.Speed = 3;

                                        this.bullet.Dir = new math.Vec2(
                                            (((this.playerPos.x - this.position.x) -150 +(10 * (this.shootNum % 10)))/ this.distance) * this.bullet.Speed, 
                                            (((this.playerPos.y - this.position.y) -150 +(10 * (this.shootNum % 10)))/ this.distance) * this.bullet.Speed
                                        );
                    
                                        this.shootNum++;
                                    }
                                }
                                if(this.shootNum > 199){
                                    this.bullet.Reset()
                                    this.shoot = true;
                                    this.Timer();
                                }
                            break;
                            case 7:
                                if(this.shootNum < 250){
                                    if(ticker % 3 == 0){
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x + 70, this.y - 60); 
                    
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

                                    if(managers.Game.boss2Hp > 100 && managers.Game.boss2Hp < 200){
                                        this.pattern3 = false
                                        this.pattern1 = true
                                    }
                                    if(managers.Game.boss2Hp < 100){
                                        this.pattern3 = false
                                        this.pattern4 = true
                                    }
                                    this.Timer();
                                }
                            break;
                            case 8:
                                if(this.shootNum < 250){
                                    if(ticker % 3 == 0){
                                        this.shootNum++;
                                        this.bulletSpawn = new math.Vec2(this.x + 70, this.y - 60); 
                    
                                        this.bullet = managers.Game.enemyBulletManager.GetBullet()
                                        this.bullet.pattern = 5;
    
                                        this.bullet.Speed = 0.05;
                                        this.bullet.Radius = 1
                                        this.bullet.Angle = 0;
                                        this.bullet.AngleStep = (360/72) * this.shootNum;
                                        this.bullet.Angle += this.bullet.AngleStep

                                        this.bullet.Dir = new math.Vec2(
                                            (60*Math.sin(this.bullet.Angle)) * this.bullet.Speed, 
                                            (60*Math.cos(this.bullet.Angle)) * this.bullet.Speed
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
                                    this.Timer();
                                }
                            break;
                            case 9: //Spiral 
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
                                
                                        let laser = createjs.Sound.play("laser");
                                        laser.volume = 0.1;
                                    }
                                }
                                if(this.shootNum > 499){
                                    this.bullet.Reset()

                                    this.shoot = true;
                                    if(managers.Game.boss2Hp < 100){
                                        this.pattern4 = false
                                        this.pattern2 = true
                                    }
                                this.Timer();
                                }
                            break;
                            case 10: //Spiral Reverse 
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
                                            (90*Math.sin(this.bullet.Angle)) * this.bullet.Speed, 
                                            (90*Math.cos(this.bullet.Angle)) * this.bullet.Speed
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
                                this.Timer();
                                }
                            break;
                        }
                    break;
                }
            }
        }

        public Timer():void{
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
                case "Enemy12":
                case "Enemy4":
                    if(managers.Game.normal){
                        let counter = 3;
            
                        this.timerInterval = setInterval(() =>{
                            counter--;
                                if(counter < 0){
                                counter = 3;
                                clearInterval(this.timerInterval);
                                this.shootNum = 0;
                                this.shootNum2 = 0;
                                this.shoot = false;
                                }
                            }, 1000)
                    }
                    if(managers.Game.hard){
                        let counter = 2;
        
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
                break;
                case "Destroyer":
                    if(managers.Game.normal){
                        let counter = 2;
            
                        this.timerInterval = setInterval(() =>{
                            counter--;
                                if(counter < 0){
                                counter = 2;
                                clearInterval(this.timerInterval);
                                this.shootNum = 0;
                                this.shootNum2 = 0;
                                this.shoot = false;
                                }
                            }, 1000)
                    }
                    if(managers.Game.hard || managers.Game.hell){
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
                break;
            }
            
        }

        public RespawnTimer():void{
            let counter = 60;

            this.timerInterval = setInterval(() =>{
                counter--;
                 if(counter < 0){
                    counter = 2
                    clearInterval(this.timerInterval);
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * (-300 - (-250) + 1) + (-250));
                 }
             }, 1000)
        }

        public DropCoins(coins:number):void{
            let coin = managers.Game.coinsManager.GetCoin()
            if(this.coinsCount < coins){
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