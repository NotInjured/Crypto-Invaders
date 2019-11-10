module objects {
    export class Background extends window.createjs.Bitmap {
        // Variables
        private speedY:number;  // Speed of background scrolling on Y-axis
        // Constructor
        constructor() {
            super(managers.Game.assetManager.getResult("bg1"));

            this.Start();
        }
        // Functions 
        // Initializing our variables with default values
        public Start():void {
            this.speedY = 1;
            //this.y = 1;
            this.y = -8250;
            this.x = 297;
            //this.Reset();
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        // Resets the position of the object
        public Reset():void {
        }
        // Move the object
        public Move():void {
            this.y += this.speedY;
        }
        // Collision Detection 
        public CheckBound():void {
            if(this.y > -1)
                this.speedY = 0;
        }
    }
}