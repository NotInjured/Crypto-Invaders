module objects {
    export class Bullet extends objects.GameObject {
        // Variables
        private speed:number = -10;
        private dir:math.Vec2

        get Dir():math.Vec2{
            return this.dir;
        }

        set Dir(d:math.Vec2){
            this.dir = d
        }

        // Constructor
        constructor(bullet:string) {
            super(bullet);
            this.Start();
        }
        // Methods
        public Start():void { 
            this.speedY = this.speed;

            this.Reset();
        }
        public Update():void {
            this.Move()

            if(this.x > 700 || this.x < 360)
                this.Reset()
            if(this.y == 0)
                this.Reset()
        }
        public Reset():void {
            this.x = -10000; 
            this.y = -10000;
        }
        public Main():void{}
        public Move():void {
            this.y += this.speedY;
            if(this.dir != undefined){
                this.x += this.dir.x
                this.y += this.dir.y
            }
        }
        public CheckBounds():void {
            
        }
        
    }
}