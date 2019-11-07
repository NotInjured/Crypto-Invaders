module objects {
    export class Bullet extends objects.GameObject {
        // Variables
        private speed:number = -10;
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
            this.Move();
        }
        public Reset():void {
            this.x = -1000; 
            this.y = -1000;
        }
        public Main():void{}
        public Move():void {
            this.y += this.speedY;
        }
        public CheckBounds():void {
            if(this.y < -10)
                managers.Game.currentSceneObject.removeChild(this);
        }
        
    }
}