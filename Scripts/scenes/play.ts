module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        private shipType:config.Ship;

        private hudImage: objects.Image;
        private hud:managers.HUD;
        
        private enemies:objects.Enemy[];
        private enemyNum:number;

        private pause:boolean;

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

            this.hudImage = new objects.Image("HUD", 240, 360);            
            this.hud = new managers.HUD;

            this.Main();
        }

        public Update(): void {
            // Update the background here
            this.background.Update();
            this.player.Update();
            this.IsPaused();
            this.ammoManager.Update();

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
            this.addChild(this.hud.playerLivesLabel);
            this.addChild(this.hud.playerBombsLabel);
            //this.addChild(this.hud.playerPowerLabel);
            this.addChild(this.hud.playerScoreLabel);
            this.addChild(this.hud.scoreMultLabel);
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
    }
}