module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        private back:boolean;
        private ammoSpawn:math.Vec2;
        private angle:number;
        private shoot:boolean = false;
        private ammo:objects.EnemyAmmo;
        private playerPos:math.Vec2;
        private position:math.Vec2;

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
        constructor() {
            super("Enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 50);
            this.y = Math.floor(Math.random() * -720) + -50;
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
            this.x = Math.floor(Math.random() * (710 - 380 + 1) + 50);
            this.y = Math.floor(Math.random() * -720) + -50;
        }
        public Move():void {
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