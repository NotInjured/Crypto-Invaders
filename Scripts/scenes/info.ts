module scenes {
    export class InfoScene extends objects.Scene {
        // Variables
        private infoPanel: objects.Image;
        private hudImage: objects.Image;

        private background: objects.Background;

        private backButton: objects.Button;
        private toggleHud: objects.Button;

        private info1: objects.Label;

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
            this.infoPanel = new objects.Image(this.assetManager, "infoPanel2", 20, 125);            
            this.backButton = new objects.Button(this.assetManager, "backButton", -120, 525);
            this.toggleHud = new objects.Button(this.assetManager, "toggleHud", 150, 525);
            this.hudImage = new objects.Image(this.assetManager, "hud", 0, 0);
            this.info1 = new objects.Label(
            "Bottom Left: "+ "\n" +
            "Player starts with 3 lives " + "\n" +
            "- Gain more lives by completing stages (Max:10)" + "\n\n" + 
            "Player Starts with 1 bomb/special" + "\n" + 
            "- Gain more bombs dropped by enemies or bosses (Max:3)" + "\n\n" + 
            "Player starts with power level 1" + "\n" + 
            "- Upgrade ship power level by collecting power-ups "  + "\n" +
            "dropped by enemies/bosses (Max:10)" + "\n\n" + 
            "Top Right: "+ "\n" +
            "Score is gained by destroying enemies, bosses" + "\n" + 
            "and collecting item drops "+ "\n\n" + 
            "Score multiplier is gained upon destroying enemies"+ "\n" +
            "and is lost when dead", "16px", "OptimusPrimus", 
            "#000000", 60, 215, false);

            this.hud = new managers.HUD;

            this.Main();
        }

        public Update(): void {
            this.player.Update();
        }

        public backButtonClick():void{
            objects.Game.currentScene = config.Scene.HELP;
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.info1); 
            this.addChild(this.backButton);
            this.addChild(this.hudImage);
            this.addChild(this.toggleHud);
            this.addChild(this.hud.playerLivesLabel);
            this.addChild(this.hud.playerBombsLabel);
            //this.addChild(this.hud.playerPowerLabel);
            this.addChild(this.hud.playerScoreLabel);
            this.addChild(this.hud.scoreMultLabel);
            this.addChild(this.player);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}