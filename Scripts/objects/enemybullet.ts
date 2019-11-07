module objects {
    export class EnemyBullet extends objects.GameObject {
        // Variables
        private speed:number = 10;
        private dir:math.Vec2;
        private angle:number;
        private angleStep:number;
        private radius:number;
        private spread:number;

        private isPattern:boolean;
        public pattern:number;

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
        get Angle():number{
            return this.angle;
        }

        set Angle(a:number){
            this.angle = a;
        }
        get AngleStep():number{
            return this.angleStep;
        }

        set AngleStep(as:number){
            this.angleStep = as;
        }
        get Radius():number{
            return this.radius;
        }

        set Radius(r:number){
            this.radius = r;
        }

        // Constructor
        constructor(ammo:string, isPattern:boolean) {
            super(ammo);
            this.isPattern = isPattern;
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
            this.x = 10000; 
            this.y = 10000;
        }
        public Main():void{}
        public Move():void {
            if(this.dir != undefined && this.isPattern){
                switch(this.pattern){
                    case 1:
                    case 2:
                    case 3:
                        this.x += this.dir.x
                        this.y += this.dir.y
                    break;
                    case 4:
                        this.angle += this.angleStep
                        this.x += this.dir.x + (90*Math.cos(this.angle)) //* this.speed
                        this.y += this.dir.y + (90*Math.sin(this.angle)) //* this.speed
                    break;
                    case 5:
                        this.angle += this.angleStep
                        this.x += this.dir.x //* (90*Math.cos(this.angle))
                        this.y += this.dir.y //* (90*Math.sin(this.angle))
                    break;
                    case 6:
                    break;
                    case 7:
                    break;
                    case 8:
                    break;
                    case 9:
                    break;
                    case 10:
                    break;
                }
                
            }
            //else if(this.dir == undefined && this.pattern){
            //    this.y += this.speedY;
            //    this.x += 0 
            //}
            else if(this.dir != undefined && !this.isPattern){
                this.x += this.dir.x
                this.y += this.dir.y
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