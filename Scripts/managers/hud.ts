module managers {
    export class HUD extends createjs.Container{

        // Variables
        public playerLivesImage: objects.Image;
        public playerLivesLabel: objects.Label;
        public playerBombsImage: objects.Image;
        public playerBombsLabel: objects.Label;
        public playerScoreLabel: objects.Label;
        public playerPowerImage: objects.Image;
        public playerPowerLabel: objects.Label;
        public scoreMultLabel: objects.Label;

        public player:objects.Player;

        private lives:number;
        private bombs:number;
        private power:number;
        private score:number;
        private scoreMult:number;

        get Lives():number{
            return this.lives;
        }
        set Lives(newLives:number){
            this.lives = newLives;
            this.playerLivesLabel.text = "Lives x" + this.lives;
        }
        
        get Bombs():number{
            return this.bombs;
        }
        set Bombs(newBombs:number){
            this.bombs = newBombs;
            this.playerBombsLabel.text = "Bombs x" + this.bombs;
        }

        get Power():number{
            return this.power;
        }
        set Power(newPower:number){
            this.power = newPower;
            this.playerBombsLabel.text = "PWR " + this.power;
        }

        get Score():number{
            return this.score;
        }
        set Score(newScore:number){
            this.score = newScore;
            this.playerScoreLabel.text = "Score: " + this.score;
        }

        get ScoreMult():number{
            return this.scoreMult;
        }
        set ScoreMult(newScoreMult:number){
            this.scoreMult = newScoreMult;
            this.scoreMultLabel.text = "x" + this.scoreMult; 
        }

        // Constructor
        constructor(){
            super();
            this.Initialize();
        }
        // Methods

        public Initialize():void{
            this.playerLivesLabel = new objects.Label("", "18px", "OptimusPrinceps","#000000", 5, 667, false );
            this.playerBombsLabel = new objects.Label("", "18px", "OptimusPrinceps","#000000", 5, 688, false );       
            this.playerScoreLabel = new objects.Label("", "20px", "OptimusPrinceps","#000000", 350, 15, false );
            this.playerPowerLabel = new objects.Label("", "18px", "OptimusPrinceps","#000000", 465, 20, false );    
            this.scoreMultLabel = new objects.Label("", "18px", "OptimusPrinceps","#000000", 437, 45, false );

            this.Lives = 0;
            this.Bombs = 0;
            this.Power = 0;
            this.Score = 0;
            this.ScoreMult = 0;
        }

        public Main():void{
            this.addChild(this.playerLivesLabel);
            this.addChild(this.playerBombsLabel);
            this.addChild(this.playerPowerLabel);
            this.addChild(this.playerScoreLabel);
            this.addChild(this.scoreMultLabel);
        }
    }
}