module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private aircraft: objects.Image;

        private player:objects.Player;
        private effect:objects.Effect;

        private hudImage: objects.Image;
        private hud:managers.HUD;
        
        private wave1:objects.Enemy[];
        private wave2:objects.Enemy[];
        private enemyNum:number;
        private enemyAmmo:objects.EnemyAmmo;

        private ammoManager:managers.Ammo;
        //private enemyAmmoManager:managers.EnemyAmmo;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player("Ship1", 555, 690, false, 1);

            this.aircraft = new objects.Image("aircraft", 418, 450);
            
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;

            //this.enemyAmmoManager = new managers.EnemyAmmo();
            //managers.Game.enemyAmmoManager = this.enemyAmmoManager;

            this.enemyAmmo = new objects.EnemyAmmo("Enemy6_Shot");

            this.wave1 = new Array<objects.Enemy>();
            this.wave2 = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.wave1[i] = new objects.Enemy("Enemy3");
                this.wave2[i] = new objects.Enemy("Enemy4");
            }

            this.hudImage = new objects.Image("HUD", 342, 0);  

            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            managers.Game.hud.Lives = 3;
            managers.Game.hud.Bombs = 1;

            this.Main();
        }

        public Update(): void {
            // Update the background here
            this.background.Update();
            this.aircraft.y += 3;
            if(this.aircraft.y > 720){
                this.removeChild(this.aircraft);
            }
            this.player.Update();
            this.IsPaused();
            this.ammoManager.Update();
            //this.enemyAmmoManager.Update();
            this.ChangeShip();
            //this.Effect();
            console.log(managers.Game.timer);

            if(managers.Game.timer <= 590){
                this.wave1.forEach(e => {
                    if(!e.isDead){
                        e.Update();
                        e.FindPlayer(this.player);
                    }
                });
            }
            if(managers.Game.timer <= 580){
                this.wave2.forEach(e => {
                    if(!e.isDead){
                        e.Update();
                        e.FindPlayer(this.player);
                    }
                });
            }

            this.ammoManager.Ammo.forEach(ammo =>{
                this.wave1.forEach(enemy =>{
                    managers.Collision.CheckAABB(ammo, enemy);
                })
            })
        }

        public Main(): void {
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.aircraft);
            this.addChild(this.player);

            this.ammoManager.Ammo.forEach(ammo =>{
                this.addChild(ammo);
            })
            this.SpawnTimer();

            this.wave1.forEach(e => {
                this.addChild(e);
            });
            
            this.addChild(this.hudImage);
            this.addChild(this.hud);

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

        public SpawnTimer():void{
            managers.Game.timer = 600;

            let interval = setInterval(() =>{
                managers.Game.timer--;
                if(managers.Game.timer < 0){
                    clearInterval(interval);
                }
            }, 1000)
        }
    }
}