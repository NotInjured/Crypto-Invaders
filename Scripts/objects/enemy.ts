module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        private back:boolean;
        private shoot:boolean = false;

        private angle:number;
        private shootNum:number;
        private sprite:string;
        
        private ammo:objects.EnemyAmmo;

        private ammoSpawn:math.Vec2;
        private playerPos:math.Vec2;
        private position:math.Vec2;

        private randomNum;

        get Shoot():boolean{
            return this.shoot;
        }

        set Shoot(s:boolean){
            this.shoot = s;
        }

        get Ammo():objects.EnemyAmmo{
            return this.ammo;
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
                case "Enemy3":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                break;
                case "Enemy4":
                    this.randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    switch(this.randomNum){
                        case 1:
                            this.x = 200
                            this.y = 400
                        break;
                        case 2:
                            this.x = 900
                            this.y = 300
                        break;
                    }
                break;
                case "Enemy5":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                break;
                case "Enemy6":
                    this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
                    this.y = Math.floor(Math.random() * -720) + -50;
                break;
            }
            
        }
        public Update():void {
            this.Move();
            this.CheckBounds();  

            if(this.isDead){
                this.Reset();
            }

            if(!this.isDead){

            }

            if(this.ammo != undefined)
                this.ammo.Update();
        }
        public Reset():void {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 380);
            this.y = Math.floor(Math.random() * -720) + -50;
        }
        public Move():void {
            switch(this.sprite){
                case "Enemy3":
                        if(this.y >= 300 && !this.back){
                            this.ShootPlayer();
                            this.shootNum += 1;
                            this.back = true;
                        }
                        else if(this.y < 300 && !this.back){
                            this.y += 5;
                        }
                        else if(this.back && this.y > -200){
                            this.y -= 2;
                            this.shoot = false;
                            
                            if(this.y < 100 && !this.shoot && this.shootNum == 1)
                                this.ShootPlayer();
                        }
                        else if(this.back && this.y < -190){
                            this.Reset();
                        }
                break;
                case "Enemy4":
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
                                    managers.Game.currentSceneObject.removeChild(this);
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
                                    managers.Game.currentSceneObject.removeChild(this);
                            }
                        break;
                    }
                break;
                case "Enemy5":
                        if(this.y >= 300 && !this.back){
                            this.ShootPlayer();
                            this.back = true;
                        }
                        else if(this.y < 300 && !this.back){
                            this.y += 5;
                        }
                        else if(this.back && this.y > -200){
                            this.y -= 2;
                        }
                        else if(this.back && this.y < -190){
                            this.Reset();
                        }
                break;
                case "Enemy6":
                        if(this.y >= 300 && !this.back){
                            this.ShootPlayer();
                            this.back = true;
                        }
                        else if(this.y < 300 && !this.back){
                            this.y += 5;
                        }
                        else if(this.back && this.y > -200){
                            this.y -= 2;
                        }
                        else if(this.back && this.y < -190){
                            this.Reset();
                        }
                break;
                case "Enemy3":
                        if(this.y >= 300 && !this.back){
                            this.ShootPlayer();
                            this.back = true;
                        }
                        else if(this.y < 300 && !this.back){
                            this.y += 5;
                        }
                        else if(this.back && this.y > -200){
                            this.y -= 2;
                        }
                        else if(this.back && this.y < -190){
                            this.Reset();
                        }
                break;
            }
            
        }
        public CheckBounds():void {
            // Check the bottom boundary
            if(this.y >= 720 + this.height) {
                this.y = -50;
            }
        }

        public FindPlayer(player:objects.Player):void{
            this.angle = Math.atan2(player.y - this.y, player.x - this.x );
            this.angle = this.angle * (180/Math.PI);

            this.rotation = -90  + this.angle;

            this.playerPos = new math.Vec2(player.x, player.y);
            
            if(this.shoot)
                managers.Collision.CheckAABB(player, this.ammo);
        }

        public ShootPlayer():void{
            if(!this.isDead && !this.shoot){
                this.ammoSpawn = new math.Vec2(this.x - 17, this.y + 10);      

                this.position = new math.Vec2(this.x, this.y);

                this.ammo = new objects.EnemyAmmo("Enemy_Shot");
                this.ammo.rotation = 90 + this.angle;
            
                console.log(this.ammo);

                this.ammo.Dir = new math.Vec2((this.playerPos.x - this.position.x) * this.ammo.Speed, (this.playerPos.y - this.position.y) * this.ammo.Speed);

                this.ammo.x = this.ammoSpawn.x;
                this.ammo.y = this.ammoSpawn.y;

                //ammo.VelY = 25;
                managers.Game.currentSceneObject.addChild(this.ammo);
                this.shoot = true;
            }
        }
    }
}