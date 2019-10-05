module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
        public shipType:config.Ship;
        private ammoSpawn:math.Vec2;
        public swapped:boolean;

        public GetShipType():config.Ship{
            return this.shipType;
        }

        // Constructor
        constructor(sprite, xPos:number, yPos:number, swapped:boolean) {
            super(sprite);          
            this.isDead = false;
            this.y = yPos;
            this.x = xPos;
            this.swapped = swapped;
            
            this.Start();
        }
        // Methods
        public Start():void {
            this.Swapped();
        }
        public Update():void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
            this.Shoot();
            this.Swapped();
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
            if(!this.isDead || this.swapped) {

            let ticker:number = createjs.Ticker.getTicks();

                if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {

                    this.ammoSpawn = new math.Vec2(this.x + 7, this.y - 7);
    
                    let ammo = managers.Game.ammoManager.GetAmmo();
                    console.log(ammo);
    
                    ammo.x = this.ammoSpawn.x;
                    ammo.y = this.ammoSpawn.y;
    
                } 
            }
        }

        public Swapped():void{
            if(!this.swapped)
                this.shipType = config.Ship.Botcoin;
        }
    }
}