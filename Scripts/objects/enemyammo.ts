module objects {
    export class EnemyAmmo extends objects.GameObject {
        // Variables
        private velX:number = 50;
        private velY:number = 50;
        private targetX:number;
        private targetY:number;

        set VelX(x:number){
            this.velX = x;
        }

        set VelY(y:number){
            this.velY = y;
        }

        // Constructor
        constructor(ammo:string) {
            super(ammo);


            this.Start();
        }
        // Methods
        public Start():void { 
            this.speedY = this.velX;
            this.speedX = this.velY;
            this.Reset();
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {
            
        }
        public Main():void{}
        public Move():void {
            this.y -= this.speedY;
            this.x -= this.speedX;
        }
        public CheckBounds():void {}
        
    }
}