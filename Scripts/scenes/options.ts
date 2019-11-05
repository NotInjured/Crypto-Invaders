module scenes {
    export class OptionsScene extends objects.Scene {
        // Variables
        // Constructor
        // Method
        // Variables
        private diffLabel: objects.Label;
        private dLabel: objects.Label;
        private backButton: objects.Button;
        private increaseButton: objects.Button;
        private decreaseButton: objects.Button;

        private hud:managers.HUD;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        // Method
        public Start():void {
            console.log(managers.Game.difficulty)
            this.dLabel = new objects.Label(
                "Difficulty", "36px", "OptimusPrinceps", "#000000", 535, 250, true);
            switch(managers.Game.difficulty){
                case 0:
                    this.diffLabel = new objects.Label(
                        "Normal", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                break;
                case 1:
                    this.diffLabel = new objects.Label(
                        "Hard", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                break;
                case 2:
                    this.diffLabel = new objects.Label(
                        "Hell", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                break;
            }
            
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.increaseButton = new objects.Button("buttonIncrease", 630, 375);
            this.decreaseButton = new objects.Button("buttonDecrease", 630, 435);

            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            this.Main();
        }

        public Update():void {
            this.hud.Update()

            switch(managers.Game.difficulty){
                case 0:
                    this.diffLabel = new objects.Label(
                        "Normal", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                break;
                case 1:
                    this.diffLabel = new objects.Label(
                        "Hard", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                break;
                case 2:
                    this.diffLabel = new objects.Label(
                        "Hell", "28px", "OptimusPrinceps", "#000000", 535, 300, true);
                break;
            }
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.START;
        }
        
        private increaseButtonClick():void {
            switch(managers.Game.difficulty){
                case 0:
                    managers.Game.difficulty = config.Difficulty.HARD
                    managers.Game.normal = false;
                    managers.Game.hard = true;
                    managers.Game.hell = false;
                break;
                case 1:
                    managers.Game.difficulty = config.Difficulty.Hell
                    managers.Game.normal = false;
                    managers.Game.hard = false;
                    managers.Game.hell = true;
                break;
            }
        }
        private decreaseButtonClick():void {
            console.log(managers.Game.difficulty)
            switch(managers.Game.difficulty){
                case 1:
                    managers.Game.difficulty = config.Difficulty.NORMAL
                    managers.Game.normal = true;
                    managers.Game.hard = false;
                    managers.Game.hell = false;
                break;
                case 2:
                    managers.Game.difficulty = config.Difficulty.HARD
                    managers.Game.normal = false;
                    managers.Game.hard = true;
                    managers.Game.hell = false;
                break;
            }
        }

        public Main():void {
            this.addChild(this.hud);
            this.addChild(this.dLabel)
            this.addChild(this.diffLabel)
            this.addChild(this.backButton)
            this.addChild(this.increaseButton)
            this.addChild(this.decreaseButton)

            this.increaseButton.on("click", this.increaseButtonClick)
            this.decreaseButton.on("click", this.decreaseButtonClick)
            this.backButton.on("click", this.backButtonClick)
        }
    }
}