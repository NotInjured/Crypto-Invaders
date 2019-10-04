module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;

        private hudImage: objects.Image;
        private hud:managers.HUD;
        
        private enemies:objects.Enemy[];
        private enemyNum:number;

        private pause:boolean;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player();
            // this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }

            this.hudImage = new objects.Image("HUD", 0, 0);            
            this.hud = new managers.HUD;

            this.Main();
        }

        public Update(): void {
            // Update the background here
            this.background.Update();
            this.player.Update();
            this.IsPaused();
            // this.enemy.Update();

            this.enemies.forEach(e => {
                e.Update();
                managers.Collision.Check(this.player, e);
            });
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
            // this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
        }

        public IsPaused():void{
            if(managers.Game.keyboardManager.pause){
                objects.Game.currentScene = config.Scene.START;
                console.log("Switching to start menu...");
            }
        }
    }
}