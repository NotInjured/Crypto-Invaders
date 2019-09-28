module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;
        private helpButton: objects.Button;
        private optionButton: objects.Button;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);

            this.welcomeLabel = new objects.Label(
                "Crypto Invaders", "60px", "OptimusPrinceps", "#FFFFFF", 320, 240, true);

            this.startButton = new objects.Button(this.assetManager, "startButton", 220, 300);
            this.helpButton = new objects.Button(this.assetManager, "helpButton", 220, 400);
            this.optionButton = new objects.Button(this.assetManager, "optionButton", 220, 500);
            this.Main();
        }
        public Update():void {
            // this.background.Update();
        }

        private startButtonClick():void {
            // Change our game state from START to GAME
            objects.Game.currentScene = config.Scene.GAME;
        }

        private helpButtonClick():void{
            objects.Game.currentScene = config.Scene.HELP;
        }

        private optionButtonClick():void{
            objects.Game.currentScene = config.Scene.OPTIONS;
        }

        public Main():void {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.addChild(this.helpButton);
            this.addChild(this.optionButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}