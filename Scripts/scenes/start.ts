module scenes {
    export class StartScene extends objects.Scene {
        // Variables

        private hudImage: objects.Image;
        private aircraft: objects.Image;
        private bBackground: objects.Image;
        private lBackground: objects.Image;
        private eBackground: objects.Image;

        private bCoin: objects.Sprite;
        private eCoin: objects.Sprite;
        privatCoin: objects.Sprite;

        private background: objects.Background;

        private gameLabel: objects.Label;
        private info1: objects.Label;
        private controls: objects.Label;

        private startButton: objects.Button;
        private optionButton: objects.Button;

        public player:objects.Player;

        private ammoManager:managers.Ammo;

        private hud:managers.HUD;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background();
            this.bBackground = new objects.Image("backgroundB", 343, 0);
            this.eBackground = new objects.Image("backgroundE", 712, 0);
            this.lBackground = new objects.Image("backgroundL", 0, 0);

            this.gameLabel = new objects.Label(
                "Crypto Invaders", "36px", "OptimusPrinceps", "#000000", 530, 240, true);

            this.player = new objects.Player("Ship1", 555, 690, false, 1);

            this.aircraft = new objects.Image("aircraft", 418, 450);

            this.startButton = new objects.Button("buttonStart", 630, 375);
            this.optionButton = new objects.Button("buttonOptions", 630, 455);
            
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            managers.Game.hud.Lives = 3;
            managers.Game.hud.Bombs = 1;
            
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            this.Main();
        }
        public Update():void {
            this.player.Update();
            this.ammoManager.Update();
            this.ChangeShip();
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
            //this.addChild(this.background);
            this.addChild(this.eBackground);
            this.addChild(this.lBackground);
            this.addChild(this.bBackground);
            this.addChild(this.hud);
            //this.addChild(this.aircraft);
            this.addChild(this.gameLabel);
            this.addChild(this.startButton);
            this.addChild(this.optionButton);
            //this.addChild(this.player);

            this.ammoManager.Ammo.forEach(ammo =>{
                this.addChild(ammo);
            });

            this.startButton.on("click", this.startButtonClick);
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
                    
                    switch(this.player.ShipType){
                        case config.Ship.Botcoin:
                            
                            this.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Lightcoin;
                            console.log("Changing to Lightcoin Ship"); 
                            console.log(this.player.ShipType);
                                                    
                            this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                            this.ammoManager.Ammo.forEach(ammo =>{
                                this.addChild(ammo);
                            });
                            console.log("Changing to Arc2"); 
                        break;       
                        case config.Ship.Lightcoin:
    
                            this.addChild(this.player = new objects.Player("Ship3", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Enderium;
                            console.log("Changing to Enderium Ship");
                            console.log(this.player.ShipType);
    
                            
                            this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                            this.ammoManager.Ammo.forEach(ammo =>{
                                this.addChild(ammo);
                            });
                            console.log("Changing to Arc3"); 
                        break;
                        case config.Ship.Enderium:
    
                            this.addChild(this.player = new objects.Player("Ship1", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Botcoin;
                            console.log("Changing to Botcoin Ship");
                            console.log(this.player.ShipType); 
                            
                            this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
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