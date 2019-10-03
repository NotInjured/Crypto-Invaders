module objects {
    export class Player extends objects.GameObject {
        // Variables
        private leftArrow:boolean;
        private rightArrow:boolean;
        private upArrow:boolean;
        private downArrow:boolean;
        private shoot:boolean;
        private special:boolean;
        private swap:boolean;
        private pause:boolean;

        public lives:number;
        public bombs:number;
        public power:number;
        public score:number;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player1");          

            document.addEventListener("keydown", this.keyDown.bind(this), false);
            document.addEventListener("keyup", this.keyUp.bind(this), false);

            this.Start();
        }
        // Methods
        public Start():void {
            // Set the initial position
            this.y = 600;
            this.x = 240;
            
            this.lives = 3;
            this.bombs = 1;
            this.power = 1;
            this.score = 0;

            //this.scaleX = 0.25;
            //this.scaleY = 0.25;
        }
        public Update():void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset():void {}

        public Move():void {
            if(this.leftArrow)
            this.x -= 3;
            if(!this.leftArrow)
            this.x += 0;

            if(this.rightArrow)
            this.x += 3;
            if(!this.rightArrow)
            this.x += 0;

            if(this.upArrow)
            this.y -= 3;
            if(!this.upArrow)
            this.y += 0;

            if(this.downArrow)
            this.y += 3;
            if(!this.downArrow)
            this.y += 0;

            /* code to spawn bullets, implemented later
            if(this.shoot)
            
            if(!this.shoot)*/

            /* code to spawn bomb
            if(this.special)
             
            if(!this.special)
            */

            /* code to swap ship
            if(this.swap)

            if(!this.swap)
            */

        }

        public CheckBound():void {
            // Right boundary
            if(this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }

            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }
        }

        public keyDown(event:KeyboardEvent):void{
            switch(event.keyCode){
                case 37:
                    this.leftArrow = true;
                break;
                case 39:
                    this.rightArrow = true;
                break;
                case 38:
                    this.upArrow = true;
                break;
                case 40:
                    this.downArrow = true;
                break;
                case 88:
                    this.shoot = true;
                break;
                case 90:    
                    this.special = true;
                break;
                case 32:
                    this.swap = true;
                break;
            }
                
        }

        public keyUp(event:KeyboardEvent):void{
            switch(event.keyCode){
                case 37:
                    this.leftArrow = false;
                break;
                case 39:
                    this.rightArrow = false;
                break;
                case 38:
                    this.upArrow = false;
                break;
                case 40:
                    this.downArrow = false;
                break;
                case 88:
                    this.shoot = false;
                break;
                case 90:    
                    this.special = false;
                break;
                case 32:
                    this.swap = false;
                break;  
            }
        }
    }
}