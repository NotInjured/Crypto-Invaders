module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor
        constructor() {
            super("Enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            // this.x = 320;
            // this.y = -50;
            this.Reset();
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {
            this.x = Math.floor(Math.random() * 430) + 50;
            this.y = Math.floor(Math.random() * -670) - 50;
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBounds():void {
            if(this.y >= 720 + this.halfH + 5) {
                this.Reset();
            }
        }
    }
}