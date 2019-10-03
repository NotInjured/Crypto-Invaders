module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;

        private hudImage: objects.Image;
        private hud:managers.HUD;

        // private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;

        private pause:boolean;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            document.addEventListener("keydown", this.keyDown.bind(this), false);
            document.addEventListener("keyup", this.keyUp.bind(this), false);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            // this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            this.hudImage = new objects.Image(this.assetManager, "hud", 0, 0);            
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
            if(this.pause){
                objects.Game.currentScene = config.Scene.START;
                console.log("Switching to start menu...");
            }
        }

        public keyDown(event:KeyboardEvent):void{
            switch(event.keyCode){
                case 27:
                    this.pause = true;
                break;
            }
                
        }

        public keyUp(event:KeyboardEvent):void{
            switch(event.keyCode){
                case 27:
                    this.pause = false;
                break;
            }
        }
    }
}