module objects {
    export class Ammo extends objects.GameObject {
        // Variables
        private speed:number = -10;
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
            this.y += this.speedY;
        }
        public CheckBounds():void {
            if(this.y < -10)
                managers.Game.currentSceneObject.removeChild(this);
        }
        
    }
}