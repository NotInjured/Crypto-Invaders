module scenes {
    export class IntroScene extends objects.Scene {
        // Variables
        //private background: objects.Background;
        private logo: objects.Background;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        // Methods
        public Start():void {
            //this.background = new objects.Background(this.assetManager);
            this.logo = new objects.Background();
            this.Main();
        }
        public Update():void {

        }

        public Main():void {
            //this.addChild(this.background);
            this.addChild(this.logo);
        }
    }
}