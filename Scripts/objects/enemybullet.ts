module objects {
    export class EnemyBullet extends objects.GameObject {
        // Variables
        private speed:number = 10;
        private dir:math.Vec2;
        private angle:number;
        private radius:number;
        private spread:number;

        private pattern:boolean;
        
        get Dir():math.Vec2{
            return this.dir;
        }

        set Dir(d:math.Vec2){
            this.dir = d;
        }

        get Speed():number{
            return this.speed;
        }

        set Speed(s:number){
            this.speed = s;
        }

        get Spread():number{
            return this.spread;
        }

        set Spread(s:number){
            this.spread = s;
        }

        // Constructor
        constructor(ammo:string, pattern:boolean) {
            super(ammo);
            this.pattern = pattern;
            this.Start();
        }
        // Methods
        public Start():void { 
            this.speedX = this.speed;
            this.speedY = this.speed;
            this.scaleX = 1.5;
            this.scaleY = 1.5;
            
            this.Reset();
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {
            this.x = -1000; 
            this.y = -1000;
        }
        public Main():void{}
        public Move():void {
            if(this.dir != undefined && this.pattern){
                this.y += this.dir.y
                this.x += this.dir.x
            }
            else if(this.dir == undefined && this.pattern){
                this.y += this.speedY;
                this.x += 0 
            }
            else if(this.dir != undefined && !this.pattern){
                this.y += this.dir.y
                this.x += this.dir.x
            }
        }
        public CheckBounds():void {
            if(this.x > 710 || this.x < 340 ||
                this.y > 720){
                this.Reset()
            }
        }   
    }
}