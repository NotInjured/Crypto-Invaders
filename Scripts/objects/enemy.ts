module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        // Constructor
        constructor() {
            super("Enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = Math.floor(Math.random() * 480) + 50;
            this.y = Math.floor(Math.random() * -720) + -50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();

            if(this.isDead){
                this.Reset();
            }
        }
        public Reset():void {
            this.isDead = false;
            this.y = -300;
        }
        public Move():void {
            this.y -= -5;
        }
        public CheckBounds():void {
            // Check the bottom boundary
            if(this.y >= 720 + this.height) {
                this.y = -50;
            }
        }
    }
}