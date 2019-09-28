module scenes {
    export class HelpScene extends objects.Scene{
        // Variables
        private background: objects.Background;
        private movementLabel: objects.Label;
        private shootLabel: objects.Label;
        private

        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager)

            this.Start();
        }

        // Methods

        public Start():void{}

        public Update():void{}

        public Main():void{}
    }
}