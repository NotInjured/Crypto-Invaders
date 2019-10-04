module scenes {
    export class HelpScene extends objects.Scene {
        // Variables
        private infoPanel: objects.Image;
        private hudImage: objects.Image;

        private background: objects.Background;

        private backButton: objects.Button;
        private nextButton: objects.Button;
        private toggleHud: objects.Button;

        private player:objects.Player;

        private hud:managers.HUD;

        // Constructor
        constructor(){
            super()

            this.Start();
        }

        // Methods

        public Start():void{
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player();
            this.infoPanel = new objects.Image("InfoPanel", 20, 125);
            this.backButton = new objects.Button("BackButton", -120, 525);
            this.nextButton = new objects.Button("NextButton", 415, 525);
            this.toggleHud = new objects.Button("UIButton", 150, 525);
            this.hudImage = new objects.Image("HUD", 0, 0);

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
            objects.Game.currentScene = config.Scene.INFO;
        }

        public toggleButtonClick():void{
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.backButton);
            this.addChild(this.nextButton);
            this.addChild(this.hudImage);
            this.addChild(this.toggleHud);
            this.addChild(this.hud.playerLivesLabel);
            this.addChild(this.hud.playerBombsLabel);
            //this.addChild(this.hud.playerPowerLabel);
            this.addChild(this.hud.playerScoreLabel);
            this.addChild(this.hud.scoreMultLabel);
            this.addChild(this.player);
            this.backButton.on("click", this.backButtonClick);
            this.nextButton.on("click", this.nextButtonClick);
            //this.toggleHud.on("click", this.toggleButtonClick);
        }
    }
}