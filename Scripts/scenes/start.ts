module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameLabel: objects.Label;
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
            this.background = new objects.Background();

            this.gameLabel = new objects.Label(
                "Crypto Invaders", "60px", "OptimusPrinceps", "#FFFFFF", 240, 240, true);

            this.startButton = new objects.Button("buttonStart", 330, 325);
            this.helpButton = new objects.Button("buttonHelp", 330, 390);
            this.optionButton = new objects.Button("buttonOptions", 330, 455);
            this.Main();
        }
        public Update():void {
            // this.background.Update();
        }

        private startButtonClick():void {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        }

        private helpButtonClick():void{
            managers.Game.currentScene = config.Scene.HELP;
        }

        private optionButtonClick():void{
            managers.Game.currentScene = config.Scene.OPTIONS;
        }

        public Main():void {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.gameLabel);
            this.addChild(this.startButton);
            this.addChild(this.helpButton);
            this.addChild(this.optionButton);
            this.startButton.on("click", this.startButtonClick);
            this.helpButton.on("click", this.helpButtonClick);
        }
    }
}