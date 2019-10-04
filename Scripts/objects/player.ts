module objects {
    export class Player extends objects.GameObject {
        // Variables
        private swapTimer:number;

        private shipType:config.Ship;

        private bullet:objects.Bullet;

        // Constructor
        constructor() {
            super("Ship1");          

            this.Start();
        }
        // Methods
        public Start():void {
            // Set the initial position
            this.y = 600;
            this.x = 240;
            
            this.swapTimer = 15;

            this.shipType = config.Ship.Botcoin;
            //this.scaleX = 0.25;
            //this.scaleY = 0.25;
        }
        public Update():void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
            this.Shoot();
            this.ChangeShip();
        }
        public Reset():void {}

        public Move():void {
            if(managers.Game.keyboardManager.moveLeft)
            this.x -= 3;
            if(!managers.Game.keyboardManager.moveLeft)
            this.x += 0;

            if(managers.Game.keyboardManager.moveRight)
            this.x += 3;
            if(!managers.Game.keyboardManager.moveRight)
            this.x += 0;

            if(managers.Game.keyboardManager.moveUp)
            this.y -= 3;
            if(!managers.Game.keyboardManager.moveUp)
            this.y += 0;

            if(managers.Game.keyboardManager.moveDown)
            this.y += 3;
            if(!managers.Game.keyboardManager.moveDown)
            this.y += 0;
        }

        public ChangeShip():void{
            if(managers.Game.keyboardManager.swap){
                switch(this.shipType){
                    case config.Ship.Botcoin:
                        this.shipType = config.Ship.Lightcoin;
                        console.log("Changing to Lightcoin Ship");
                    break;
                    case config.Ship.Lightcoin:
                        this.shipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");
                    break;
                    case config.Ship.Enderium:
                        this.shipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");
                    break;
                }
            }
        }

        public CheckBound():void {
            // Right boundary
            if(this.x >= 480 - this.halfW) 
                this.x = 480 - this.halfW;

            // Left boundary
            if(this.x <= this.halfW) 
                this.x = this.halfW;  

            if(this.y >= 720 - this.halfH)
                this.y = 720 - this.halfH;
            
            if(this.y <= this.halfH)
                this.y = this.halfH;

        }

        public Shoot():void{
            
        }
    }
}