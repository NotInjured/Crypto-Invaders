module objects {
    export class Ammo extends objects.GameObject {

        // Variables
        private speed:number = -10;

        // Constructor
        constructor() {
            super("Bullet");
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
            this.x = -5000; 
            this.y = -5000;
        }
        public Main():void{}
        public Move():void {
            this.y += this.speedY;
        }
        public CheckBounds():void {}
        
    }
}