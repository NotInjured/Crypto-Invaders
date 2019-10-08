module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        private back:boolean;
        private ammoSpawn:math.Vec2;
        private angle:number;
        private shoot:boolean;
        private player:objects.Player;

        get Shoot():boolean{
            return this.shoot;
        }

        set Shoot(s:boolean){
            this.shoot = s;
        }

        // Constructor
        constructor() {
            super("Enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = Math.floor(Math.random() * 480) + 50;
            this.y = Math.floor(Math.random() * -720) + -50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();  

            if(this.isDead){
                this.Reset();
            }
        }
        public Reset():void {
            this.isDead = false;
            this.back = false;
            this.shoot = false;
            this.y = -300;
        }
        public Move():void {
            if(this.y >= 300 && !this.back){
                this.back = true;
            }
            else if(this.y < 300 && !this.back){
                this.y -= -5;
            }
            else if(this.back && this.y > -200){
                this.ShootPlayer();
                this.y -= 2;
            }
            else if(this.back && this.y < -190){
                this.Reset();
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
        }

        public ShootPlayer():void{
            this.ammoSpawn = new math.Vec2(this.x, this.y);      

            let velocityX = Math.cos((this.angle) * Math.PI / 180) * 100;
            let velocityY = Math.sin((this.angle) * Math.PI / 180) * 100;

            let ammo = managers.Game.enemyAmmoManager.GetAmmo();
            ammo.rotation =90 + this.angle;

            console.log(ammo);
            ammo.VelX += velocityX;
            ammo.VelY += velocityY;

            ammo.x = this.ammoSpawn.x;
            ammo.y = this.ammoSpawn.y;   
        }
    }
}