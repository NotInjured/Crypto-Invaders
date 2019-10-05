module scenes {
    export class HelpScene extends objects.Scene {
        // Variables
        private infoPanel: objects.Image;
        private hudImage: objects.Image;

        private background: objects.Background;

        private backButton: objects.Button;
        private nextButton: objects.Button;

        public player:objects.Player;

        private hud:managers.HUD;

        private ammoManager:managers.Ammo;

        // Constructor
        constructor(){
            super()

            this.Start();
        }

        // Methods

        public Start():void{
            this.background = new objects.Background();
            this.player = new objects.Player("Ship1", 240, 600, false);

            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;

            this.infoPanel = new objects.Image("panelUI", 240, 360);
            this.backButton = new objects.Button("buttonBack", 90, 575);
            this.nextButton = new objects.Button("buttonNext", 575, 575);
            this.hudImage = new objects.Image("HUD", 0, 0);

            this.hud = new managers.HUD;

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
            this.addChild(this.hud);
            this.addChild(this.player);

            this.ammoManager.Ammo.forEach(ammo =>{
                this.addChild(ammo);
            });

            this.backButton.on("click", this.backButtonClick);
            this.nextButton.on("click", this.nextButtonClick);
        }

        public ChangeShip():void{
        let ticker:number = createjs.Ticker.getTicks();

            if(managers.Game.keyboardManager.swap && (ticker % 200 == 0)){
                let playerPosX = this.player.x;
                let playerPosY = this.player.y;
                this.removeChild(this.player);
                this.ammoManager.Ammo.forEach(ammo =>{
                    this.removeChild(ammo);
                });
                
                switch(this.player.shipType){
                    case config.Ship.Botcoin:
                        
                        this.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY, true));
                        this.player.shipType = config.Ship.Lightcoin;
                        console.log("Changing to Lightcoin Ship"); 
                        console.log(this.player.shipType);
                                                
                        this.ammoManager.buildAmmoPool(this.player.shipType);
                        this.ammoManager.Ammo.forEach(ammo =>{
                            this.addChild(ammo);
                        });
                        console.log("Changing to Arc2"); 
                    break;       
                    case config.Ship.Lightcoin:

                        this.addChild(this.player = new objects.Player("Ship3", playerPosX, playerPosY, true));
                        this.player.shipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");
                        console.log(this.player.shipType);

                        
                        this.ammoManager.buildAmmoPool(this.player.shipType);
                        this.ammoManager.Ammo.forEach(ammo =>{
                            this.addChild(ammo);
                        });
                        console.log("Changing to Arc3"); 
                    break;
                    case config.Ship.Enderium:

                        this.addChild(this.player = new objects.Player("Ship1", playerPosX, playerPosY, true));
                        this.player.shipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");
                        console.log(this.player.shipType); 
                        
                        this.ammoManager.buildAmmoPool(this.player.shipType);
                        this.ammoManager.Ammo.forEach(ammo =>{
                            this.addChild(ammo);
                        });
                        console.log("Changing to Arc1"); 
                    break;
                }
            }
        }
    }
}