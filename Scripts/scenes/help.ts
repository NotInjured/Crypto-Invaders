module scenes {
    export class HelpScene extends objects.Scene {
        // Variables
        private infoPanel: objects.Image;
        private hudImage: objects.Image;

        private background: objects.Background;

        private backButton: objects.Button;
        private nextButton: objects.Button;

        private player:objects.Player;

        private hud:managers.HUD;

        private ammoManager:managers.Ammo;

        private swapped:boolean;

        // Constructor
        constructor(){
            super()

            this.Start();
        }

        // Methods

        public Start():void{
            this.background = new objects.Background();
            this.player = new objects.Player("Ship1", 240, 600);

            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;

            this.infoPanel = new objects.Image("panelUI", 240, 360);
            this.backButton = new objects.Button("buttonBack", 90, 575);
            this.nextButton = new objects.Button("buttonNext", 575, 575);
            this.hudImage = new objects.Image("HUD", 0, 0);

            this.hud = new managers.HUD;

            this.swapped = false;

            this.Main();
        }

        public Update(): void {
            this.player.Update();
            this.ammoManager.Update();
            this.ChangeShip();
        }

        public backButtonClick():void{
            managers.Game.currentScene = config.Scene.START;
        }

        public nextButtonClick():void{
            managers.Game.currentScene = config.Scene.INFO;
        }

        public toggleButtonClick():void{
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.infoPanel);
            this.addChild(this.backButton);
            this.addChild(this.nextButton);
            this.addChild(this.hudImage);
            this.addChild(this.hud.playerLivesLabel);
            this.addChild(this.hud.playerBombsLabel);
            //this.addChild(this.hud.playerPowerLabel);
            this.addChild(this.hud.playerScoreLabel);
            this.addChild(this.hud.scoreMultLabel);
            this.addChild(this.player);

            this.ammoManager.Ammo.forEach(ammo =>{
                this.addChild(ammo);
            });

            this.backButton.on("click", this.backButtonClick);
            this.nextButton.on("click", this.nextButtonClick);
            //this.toggleHud.on("click", this.toggleButtonClick);
        }

        public ChangeShip():void{

        let ticker:number = createjs.Ticker.getTicks();
        //this.swapped = true;
            if(managers.Game.keyboardManager.swap && (ticker % 150 == 0)){
                if(this.player.shipType == config.Ship.Botcoin){
                    this.player.shipType = config.Ship.Lightcoin;
                        console.log("Changing to Lightcoin Ship");

                        let playerPosX = this.player.x;
                        let playerPosY = this.player.y;

                        this.stage.removeChild(this.player);
                        this.stage.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY));  
                }
                else if(this.player.shipType == config.Ship.Lightcoin){
                    this.player.shipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");

                        let playerPosX = this.player.x;
                        let playerPosY = this.player.y;

                        this.stage.removeChild(this.player);
                        this.stage.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY));  
                }
                else if(this.player.shipType == config.Ship.Enderium){
                    this.player.shipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");

                        let playerPosX = this.player.x;
                        let playerPosY = this.player.y;

                        this.stage.removeChild(this.player);
                        this.stage.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY));  
                }



                /*switch(this.player.shipType){
                    case config.Ship.Botcoin:
                                   
                    break;
                    case config.Ship.Lightcoin:
                        this.player.shipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship"); 
                    break;
                    case config.Ship.Enderium:
                        this.player.shipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");    
                    break;
                }*/
            }
        }
    }
}