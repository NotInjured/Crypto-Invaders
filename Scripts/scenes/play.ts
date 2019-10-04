module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;

        private hudImage: objects.Image;
        private hud:managers.HUD;
        
        private enemies:objects.Enemy[];
        private enemyNum:number;

        private ammoManager:managers.Ammo;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player("Ship1", 240, 600, false);
            
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;

            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }

            this.hudImage = new objects.Image("HUD", 0, 0);            
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            managers.Game.hud.Lives = 3;
            managers.Game.hud.Bombs = 1;

            this.Main();
        }

        public Update(): void {
            // Update the background here
            this.background.Update();
            this.player.Update();
            this.IsPaused();
            this.ammoManager.Update();
            this.ChangeShip();

            this.enemies.forEach(e => {
                if(!e.isDead){
                    e.Update();
                    managers.Collision.CheckAABB(this.player, e);
                }
            });

            this.ammoManager.Ammo.forEach(ammo =>{
                this.enemies.forEach(enemy =>{
                    managers.Collision.CheckAABB(ammo, enemy);
                })
            })
        }

        public Main(): void {
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.hudImage);
            this.addChild(this.hud);
            this.addChild(this.player);

            this.ammoManager.Ammo.forEach(ammo =>{
                this.addChild(ammo);
            })

            // this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
        }

        public IsPaused():void{
            if(managers.Game.keyboardManager.pause){
                managers.Game.currentScene = config.Scene.START;
                console.log("Switching to start menu...");
            }
        }

        public ChangeShip():void{
            let ticker:number = createjs.Ticker.getTicks();
    
            if(managers.Game.keyboardManager.swap && (ticker % 200 == 0)){
                let playerPosX = this.player.x;
                let playerPosY = this.player.y;
                this.stage.removeChild(this.player);
    
                switch(this.player.shipType){
                    case config.Ship.Botcoin:
                        playerPosX = this.player.x;
                        playerPosY = this.player.y
                                
                        this.stage.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY, true));
                        this.player.shipType = config.Ship.Lightcoin;
                        console.log("Changing to Lightcoin Ship"); 
                        console.log(this.player.shipType);
                                                    
                        this.ammoManager.buildAmmoPool(this.player.shipType);
                        console.log("Changing to Arc2"); 
                    break;
                    case config.Ship.Lightcoin:
                        playerPosX = this.player.x;
                        playerPosY = this.player.y;
    
                        this.stage.addChild(this.player = new objects.Player("Ship3", playerPosX, playerPosY, true));
                        this.player.shipType = config.Ship.Enderium;
                        console.log("Changing to Enderium Ship");
                        console.log(this.player.shipType);
    
                        this.ammoManager.buildAmmoPool(this.player.shipType);
                        console.log("Changing to Arc3"); 
                    break;
                    case config.Ship.Enderium:
                        playerPosX = this.player.x;
                        playerPosY = this.player.y;
    
                        this.stage.addChild(this.player = new objects.Player("Ship1", playerPosX, playerPosY, true));
                        this.player.shipType = config.Ship.Botcoin;
                        console.log("Changing to Botcoin Ship");
                        console.log(this.player.shipType); 
                            
                        this.ammoManager.buildAmmoPool(this.player.shipType);
                        console.log("Changing to Arc1"); 
                    break;
                }
            }
        }
    }
}