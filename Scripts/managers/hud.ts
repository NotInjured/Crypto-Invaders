module managers {
    export class HUD {

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
        }
        
        get Bombs():number{
            return this.bombs;
        }
        set Bombs(newBombs:number){
            this.bombs = newBombs;
        }

        get Power():number{
            return this.power;
        }
        set Power(newPower:number){
            this.power = newPower;
        }

        get Score():number{
            return this.score;
        }
        set Score(newScore:number){
            this.score = newScore;
        }

        get ScoreMult():number{
            return this.scoreMult;
        }
        set ScoreMult(newScoreMult:number){
            this.scoreMult = newScoreMult;
        }

        // Constructor
        constructor(){
            this.Initialize();
        }
        // Methods

        public Initialize():void{
            this.lives = 3;
            this.bombs = 1;
            this.power = 1;
            this.score = 0;
            this.scoreMult = 1;
            
            this.playerLivesLabel = new objects.Label("Lives x" + this.Lives, "18px", "OptimusPrinceps","#000000", 5, 667, false );
            this.playerBombsLabel = new objects.Label("Bombs x" + this.Bombs, "18px", "OptimusPrinceps","#000000", 5, 688, false );       
            this.playerScoreLabel = new objects.Label("" + this.score, "20px", "OptimusPrinceps","#000000", 350, 15, false );
            this.playerPowerLabel = new objects.Label("" + this.power, "18px", "OptimusPrinceps","#000000", 465, 20, false );    
            this.scoreMultLabel = new objects.Label("x" + this.scoreMult, "18px", "OptimusPrinceps","#000000", 437, 45, false );
        }

    }

}