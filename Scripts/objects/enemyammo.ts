module objects {
    export class EnemyAmmo extends objects.GameObject {
        // Variables
        private speed:number = 7;
        private dir:math.Vec2;

        get Dir():math.Vec2{
            return this.dir;
        }

        set Dir(d:math.Vec2){
            this.dir = d;
        }

        get Speed():number{
            return this.speed;
        }

        // Constructor
        constructor(ammo:string) {
            super(ammo);
            this.Start();
        }
        // Methods
        public Start():void { 
            this.speedX = this.speed;
            this.speedY = this.speed;

            this.Reset();
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {
            
        }
        public Main():void{}
        public Move():void {
            this.y += this.dir.y * (60/10000);
            this.x += this.dir.x * (60/10000);
        }
        public CheckBounds():void {}
        
    }
}