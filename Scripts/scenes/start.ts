module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;
        private helpButton: objects.Button;
        private optionButton: objects.Button;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);

            this.welcomeLabel = new objects.Label(
                "Crypto Invaders", "60px", "OptimusPrinceps", "#FFFFFF", 240, 240, true);

            this.startButton = new objects.Button("StartButton", 140, 300);
            this.helpButton = new objects.Button("HelpButton", 140, 350);
            this.optionButton = new objects.Button("OptionButton", 140, 400);
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
            this.helpButton.on("click", this.helpButtonClick);
        }
    }
}