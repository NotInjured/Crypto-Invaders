module scenes {
    export class StartScene extends objects.Scene {
        // Variables

        private bCoins: objects.Coins[];
        private eCoins: objects.Coins[];
        private lCoins: objects.Coins[];

        private gameLabel: objects.Label;

        private startButton: objects.Button;
        private optionButton: objects.Button;

        private hud:managers.HUD;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {

            this.bCoins = new Array<objects.Coins>();
            this.eCoins = new Array<objects.Coins>();
            this.lCoins = new Array<objects.Coins>();

            for(let i = 0; i < 35; i++){
                this.bCoins[i] = new objects.Coins("B_coin", "B");
                this.eCoins[i] = new objects.Coins("E_coin", "E");
                this.lCoins[i] = new objects.Coins("L_coin", "L");
            }

            this.gameLabel = new objects.Label(
                "Crypto Invaders", "36px", "OptimusPrinceps", "#000000", 530, 240, true);

            this.startButton = new objects.Button("buttonStart", 630, 375);
            this.optionButton = new objects.Button("buttonOptions", 630, 455);
            
            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            this.Main();
        }
        public Update():void {
            this.bCoins.forEach(c =>{
                c.Update();
            })
            this.eCoins.forEach(c =>{
                c.Update();
            })
            this.lCoins.forEach(c =>{
                c.Update();
            })
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
            
            this.bCoins.forEach(c =>{
                c.scaleX = 0.75;
                c.scaleY = 0.75;
                this.addChild(c)
            })
            this.eCoins.forEach(c =>{
                c.scaleX = 0.75;
                c.scaleY = 0.75;
                this.addChild(c)
            })
            this.lCoins.forEach(c =>{
                c.scaleX = 0.75;
                c.scaleY = 0.75;
                this.addChild(c)
            })
            
            this.addChild(this.hud);
            this.addChild(this.gameLabel);
            this.addChild(this.startButton);
            this.addChild(this.optionButton);

            this.startButton.on("click", this.startButtonClick);
        }

    }
}