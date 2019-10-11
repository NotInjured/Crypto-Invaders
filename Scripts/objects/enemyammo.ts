module objects {
    export class EnemyAmmo extends objects.GameObject {
        // Variables
        private speed:number = -25;
        // Constructor
        constructor(ammo:string) {
            super(ammo);
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
            
        }
        public Main():void{}
        public Move():void {
            this.y -= this.speedY;
        }
        public CheckBounds():void {}
        
    }
}