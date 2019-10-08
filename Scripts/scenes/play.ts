module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        private effect:objects.Effect;

        private hudImage: objects.Image;
        private hud:managers.HUD;
        
        private enemies:objects.Enemy[];
        private enemyNum:number;

        private ammoManager:managers.Ammo;
        private enemyAmmoManager:managers.EnemyAmmo;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player("Ship1", 260, 600, false, 1);
            
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;

            this.enemyAmmoManager = new managers.EnemyAmmo();
            managers.Game.enemyAmmoManager = this.enemyAmmoManager;

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
            this.enemyAmmoManager.Update();
            this.ChangeShip();
            //this.Effect();

            this.enemies.forEach(e => {
                if(!e.isDead){
                    e.Update();
                    e.FindPlayer(this.player);
                    if(!e.Shoot){
                        e.ShootPlayer();
                        e.Shoot = true;
                    }
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

            this.enemies.forEach(e => {
                this.addChild(e);
            });

            this.enemyAmmoManager.Ammo.forEach(ammo =>{
                this.addChild(ammo);
            })
        }

        public IsPaused():void{
            if(managers.Game.keyboardManager.pause){
                managers.Game.currentScene = config.Scene.START;
                console.log("Switching to start menu...");
            }
        }

        public Effect():void{
            let ticker:number = createjs.Ticker.getTicks();

            if(managers.Game.keyboardManager.shoot && (this.player.POWER >= 1 && this.player.POWER <= 3) && this.player.ShipType == config.Ship.Botcoin && (ticker % 10 == 0)){
                this.effect = new objects.Effect("Laser_Shoot", this.player.x - 13, this.player.y -43);
                this.effect.on("animationend", this.animationEnded);
                managers.Game.currentSceneObject.addChild(this.effect);
            }
        }

        private animationEnded():void {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        }

        public ChangeShip():void{
            let ticker:number = createjs.Ticker.getTicks();
    
                if(managers.Game.keyboardManager.swap && (ticker % 50 == 0)){
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
                        break;
                    }
                }
            }
    }
}