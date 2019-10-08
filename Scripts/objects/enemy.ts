module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        private back:boolean;
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
            console.log(this.y);

            if(this.isDead){
                this.Reset();
            }
        }
        public Reset():void {
            this.isDead = false;
            this.back = false;
            this.y = -300;
        }
        public Move():void {
            if(this.y >= 300 && !this.back){
                this.y -= 0;
                this.back = true;
            }
            else if(this.y < 300 && !this.back){
                this.y -= -5;
            }
            else if(this.back && this.y > -200){
                this.y -= 2;
            }
            else if(this.back && this.y < -190){
                this.Reset();
            }
        }
        public CheckBounds():void {
            // Check the bottom boundary
            if(this.y >= 720 + this.height) {
                this.y = -50;
            }
        }

        public FindPlayer(player:objects.Player):void{
            let angle = Math.atan2(player.y - this.y, player.x - this.x );
            angle = angle * (180/Math.PI);

            this.rotation =-90  + angle;
        }
    }
}