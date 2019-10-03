module managers {
    export class HUD extends createjs.Container{

        // Variables
        private playerLivesImage: objects.Image;
        private playerLives: objects.Label;
        private playerBombsImage: objects.Image;
        private playerBombs: objects.Label;
        private playerScore: objects.Label;
        private playerPowerImage: objects.Image;
        private playerPower: objects.Label;

        public assetManager: createjs.LoadQueue;
        public player:objects.Player;
        

        // Constructor
        constructor(assetManager:createjs.LoadQueue){
            super();

            this.assetManager = assetManager;
        }
        // Methods

        public Start():void{}
        public Update():void{}
        public Main():void{}

        public PlayerLives():void{
            //this.playerLivesImage = new objects.Image(this.assetManager, "playerLives", 100, 100);

            //if(this.player.lives >= 0)
            //    this.playerLives = new objects.Label(
            //        "x" + this.player.lives, "30px", "OptimusPrinceps","#000000", 240, 240, false );
        }

        public PlayerBombs():void{

        }

        public PlayerPower():void{

        }

        public PlayerScore():void{

        }
    }

}