module objects {
    export class Missile extends objects.GameObject {
        // Variables
        private speed:number = -10;
        private dir:math.Vec2;
        private angle:number;
        private angleStep:number;
        private position:math.Vec2;
        private distance:number
        public enemies:objects.Enemy[]
        private foundEnemy:boolean;

        get Dir():math.Vec2{
            return this.dir;
        }

        set Dir(d:math.Vec2){
            this.dir = d;
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

        get Speed():number{
            return this.speed;
        }

        set Speed(s:number){
            this.speed = s;
        }

        get FoundEnemy():boolean{
            return this.foundEnemy;
        }

        set FoundEnemy(s:boolean){
            this.foundEnemy = s;
        }
        // Constructor
        constructor(missile:string) {
            super(missile);
            this.Start();
        }
        // Methods
        public Start():void { 
            this.speedY = this.speed;
            this.speedX = this.speed;

            this.Reset();
        }
        public Update():void {
            this.Move()
            this.CheckBound()
        }
        public Reset():void {
            this.x = -10000; 
            this.y = -10000;
        }
        public Main():void{}
        public Move():void {
            if(this.dir != undefined && this.foundEnemy){
                this.x += this.dir.x
                this.y += this.dir.y
            }
            else if(this.dir != undefined && !this.foundEnemy){
                this.x += this.dir.x
                this.y += this.dir.y
            }
        }
        public CheckBounds():void {
            if(this.y < 0 || this.x < 350 || this.x > 715)
                this.Reset()
        }

        public FindEnemies(enemy:objects.Enemy):void{
            this.position = new math.Vec2(this.x, this.skewY);
            let enemyPos = new math.Vec2(enemy.x, enemy.y)
            this.distance =  math.Vec2.Distance(enemyPos, this.position)

            if(!enemy.isInvincible && enemy.y > 0 && enemy.y < 720){
                this.Dir = new math.Vec2(
                    ((enemyPos.x - this.position.x) / this.distance) * -10,
                    ((enemyPos.y - this.position.y) / this.distance) * -10)
            }
        }
    }
}