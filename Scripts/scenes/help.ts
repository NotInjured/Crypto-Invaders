module scenes {
    export class HelpScene extends objects.Scene {
        // Variables
        private infoPanel: objects.Image;
        private hudImage: objects.Image;
        private background: objects.Background;
        private backButton: objects.Button;
        private backButton2: objects.Button;
        private nextButton: objects.Button;
        private player:objects.Player;
        private hud:managers.HUD;

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
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 460, 525);
            this.backButton2 = new objects.Button(this.assetManager, "backButton", -120, 525);
            this.hudImage = new objects.Image(this.assetManager, "hud", 0, 0);

            this.hud = new managers.HUD;

            this.Main();
        }

        public Update(): void {
            this.player.Update();
        }

        public backButtonClick():void{
            objects.Game.currentScene = config.Scene.START;
        }

        public nextButtonClick():void{
            this.removeChild(this.infoPanel);
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.backButton);
            this.addChild(this.hudImage);
            this.addChild(this.player);
            this.addChild(this.hud.playerLivesLabel);
            this.addChild(this.hud.playerBombsLabel);
            //this.addChild(this.hud.playerPowerLabel);
            this.addChild(this.hud.playerScoreLabel);
            this.addChild(this.hud.scoreMultLabel);
            this.backButton.on("click", this.backButtonClick);
            this.nextButton
        }
    }
}