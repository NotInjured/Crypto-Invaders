module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private tryAgainLabel: objects.Label;
        private scoreLabel :objects.Label;
        private diffLabel: objects.Label;
        private backButton: objects.Button;
        private startButton: objects.Button;
        private continueButton: objects.Button;

        private hud:managers.HUD;
        private bgm:createjs.AbstractSoundInstance;

        private diff:string;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        // Method
        public Start():void {
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("mainMenu");
            this.bgm.loop = -1;
            this.bgm.volume = 0.1;

            this.hud = new managers.HUD;
            managers.Game.hud = this.hud
            if(managers.Game.normal)
                this.diff = "Normal"
            if(managers.Game.hard)
                this.diff = "Hard"
            if(managers.Game.hell)
                this.diff = "Hell"
            

            if(!managers.Game.boss1IsDead){
                this.gameOverLabel = new objects.Label(
                    "     Game Over!" + "\n" + "Ran out of lives.", 
                    "36px", "OptimusPrinceps", "#000000", 650, 240, true);
                this.tryAgainLabel = new objects.Label(
                    "Try Again?", "20px", "OptimusPrinceps", "#000000", 535, 400, true);
                this.diffLabel = new objects.Label(
                    "Maybe turn down the difficulty if its too hard.", "12px", "OptimusPrinceps", "#000000", 535, 690, true);
            }
            if(managers.Game.boss1IsDead){
                this.gameOverLabel = new objects.Label(
                    "\t\t\t" + "Level 1 Completed!" + "\n" + "\t  Difficulty: " + this.diff, 
                    "36px", "OptimusPrinceps", "#000000", 675, 240, true);
                this.tryAgainLabel = new objects.Label(
                    "Try Again?", "20px", "OptimusPrinceps", "#000000", 535, 400, true);
            }
            
            this.scoreLabel = new objects.Label("Score:" +"\n" + managers.Game.score, "30px", "OptimusPrinceps","#000000", 500, 300, false );

            this.startButton = new objects.Button("buttonStart", 630, 475);
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.continueButton = new objects.Button("buttonContinue", 630, 475)

           
            this.Main();
        }

        public Update():void {
            this.hud.Update()
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.START;
        }

        private startButtonClick():void {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        }

        private continueButtonClick():void {
            if(managers.Game.level1Completed && managers.Game.level1){
                managers.Game.level1 = false
                managers.Game.level2 = true
                managers.Game.currentScene = config.Scene.GAME
            }
            if(managers.Game.level2Completed && managers.Game.level2){
                managers.Game.level2 = false
                managers.Game.level3 = true
                managers.Game.currentScene = config.Scene.GAME
            }
        }

        public Main():void {
            this.addChild(this.hud);
            if(managers.Game.boss1IsDead){
                this.addChild(this.gameOverLabel)
                this.addChild(this.tryAgainLabel)
                this.addChild(this.scoreLabel)
            }
            if(!managers.Game.boss1IsDead){
                this.addChild(this.gameOverLabel)
                this.addChild(this.tryAgainLabel)
                this.addChild(this.scoreLabel)
                this.addChild(this.diffLabel)
            }
            this.addChild(this.backButton)
            //this.addChild(this.continueButton)
            this.addChild(this.startButton)

            this.backButton.on("click", this.backButtonClick)
            //this.continueButton.on("click", this.continueButtonClick)
            this.startButton.on("click", this.startButtonClick)
        }
    }
}