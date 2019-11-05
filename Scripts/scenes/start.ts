module scenes {
    export class StartScene extends objects.Scene {
        // Variables
         private gameLabel: objects.Label;

        private startButton: objects.Button;
        private optionButton: objects.Button;

        private hud:managers.HUD;
        
        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {

            this.gameLabel = new objects.Label(
                "Crypto Invaders", "36px", "OptimusPrinceps", "#000000", 530, 240, true);

            this.startButton = new objects.Button("buttonStart", 630, 375);
            this.optionButton = new objects.Button("buttonOptions", 630, 455);
            
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            
            /*if(managers.Game.normal){
                managers.Game.difficulty = config.Difficulty.NORMAL;
            }
            if(managers.Game.hard){
                managers.Game.difficulty = config.Difficulty.HARD;
            }
            if(managers.Game.hell){
                managers.Game.difficulty = config.Difficulty.Hell;
            }*/

            this.Main();
        }
        public Update():void {
            this.hud.Update();
        }

        private startButtonClick():void {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        }

        private optionButtonClick():void{
            managers.Game.currentScene = config.Scene.OPTIONS;
        }

        public Main():void {
            // Add items to our scene
            this.addChild(this.hud);
            this.addChild(this.gameLabel);
            this.addChild(this.startButton);
            this.addChild(this.optionButton);

            this.optionButton.on("click", this.optionButtonClick)
            this.startButton.on("click", this.startButtonClick);
        }

    }
}