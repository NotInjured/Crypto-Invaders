module scenes {
    export class OptionsScene extends objects.Scene {
        // Variables
        // Constructor
        // Method
        // Variables
        private diffLabel: objects.Label;
        private dLabel: objects.Label;
        private bossRush: objects.Label;
        private backButton: objects.Button;
        private increaseButton: objects.Button;
        private decreaseButton: objects.Button;
        private bossButton: objects.Button;

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
                "Difficulty", "36px", "OptimusPrinceps", "#000000", 535, 150, true);
            switch(managers.Game.difficulty){
                case 0:
                    this.diffLabel = new objects.Label(
                        "Normal", "28px", "OptimusPrinceps", "#000000", 535, 200, true);
                break;
                case 1:
                    this.diffLabel = new objects.Label(
                        "Hard", "28px", "OptimusPrinceps", "#000000", 535, 200, true);
                break;
                case 2:
                    this.diffLabel = new objects.Label(
                        "Hell", "28px", "OptimusPrinceps", "#000000", 535, 200, true);
                break;
            }
            switch(managers.Game.bossRush){
                case true:
                    this.bossRush = new objects.Label("On", "28px", "OptimusPrinceps", "#000000", 535, 455, true)
                break;
                case false:
                    this.bossRush = new objects.Label("Off", "28px", "OptimusPrinceps", "#000000", 535, 455, true)
                break;
            }
            
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.increaseButton = new objects.Button("buttonIncrease", 630, 275);
            this.decreaseButton = new objects.Button("buttonDecrease", 630, 335);
            this.bossButton = new objects.Button("buttonBossRush", 630, 425)

            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            this.Main();
        }

        public Update():void {
            this.hud.Update()
            if(managers.Game.normal){
                this.removeChild(this.diffLabel)
                this.diffLabel = new objects.Label(
                    "Normal", "28px", "OptimusPrinceps", "#000000", 535, 200, true);
                this.addChild(this.diffLabel)
            }
            if(managers.Game.hard){
                this.removeChild(this.diffLabel)
                this.diffLabel = new objects.Label(
                    "Hard", "28px", "OptimusPrinceps", "#000000", 535, 200, true);
                this.addChild(this.diffLabel)
            }
            if(managers.Game.hell){
                this.removeChild(this.diffLabel)
                this.diffLabel = new objects.Label(
                    "Hell", "28px", "OptimusPrinceps", "#000000", 535, 200, true);
                this.addChild(this.diffLabel)
            }

            if(!managers.Game.bossRush){
                this.removeChild(this.bossRush)
                this.bossRush = new objects.Label("Off", "28px", "OptimusPrinceps", "#000000", 535, 455, true)
                this.addChild(this.bossRush)
            }

            if(managers.Game.bossRush){
                this.removeChild(this.bossRush)
                this.bossRush = new objects.Label("On", "28px", "OptimusPrinceps", "#000000", 535, 455, true)
                this.addChild(this.bossRush)
            }
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.START;
        }
        
        private increaseButtonClick():void {
            console.log(managers.Game.difficulty)
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

        private bossButtonClick():void{
            if(!managers.Game.bossRush)
                managers.Game.bossRush = true
            else if(managers.Game.bossRush)
                managers.Game.bossRush = false
            console.log(managers.Game.bossRush)
        }

        public Main():void {
            this.addChild(this.hud);
            this.addChild(this.dLabel)
            this.addChild(this.diffLabel)
            this.addChild(this.backButton)
            this.addChild(this.increaseButton)
            this.addChild(this.decreaseButton)
            this.addChild(this.bossButton)
            this.addChild(this.bossRush)

            this.increaseButton.on("click", this.increaseButtonClick)
            this.decreaseButton.on("click", this.decreaseButtonClick)
            this.backButton.on("click", this.backButtonClick)
            this.bossButton.on("click", this.bossButtonClick)
        }
    }
}