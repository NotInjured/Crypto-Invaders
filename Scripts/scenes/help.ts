module scenes {
    export class HelpScene extends objects.Scene {
        // Variables
        private infoPanel: objects.Image;
        private background: objects.Background;
        private backButton: objects.Button;
        private player:objects.Player;

        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager)

            this.Start();
        }

        // Methods

        public Start():void{
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.infoPanel = new objects.Image(this.assetManager, "infoPanel", 20, 125);
            this.backButton = new objects.Button(this.assetManager, "backButton", -120, 525);

            this.Main();
        }

        public Update(): void {
            this.player.Update();
        }

        public backButtonClick():void{
            objects.Game.currentScene = config.Scene.START;
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.backButton);
            this.addChild(this.player);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}