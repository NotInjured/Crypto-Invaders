module objects {
    export class Effect extends objects.GameObject {
        // Variablees
        
        // Constructor
        constructor(effect:string, x:number, y:number){
            super(effect);

            this.x = x;
            this.y = y;
        }

        // Methods

        public Start():void{
            this.on("animationend", this.animationEnded.bind(this), false);
        }
        public Update():void{}
        public Main():void{}


        private animationEnded():void {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        }
    }
}