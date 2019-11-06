module managers {
    export class HUD extends createjs.Container{

        // Variables
        private bBackground: objects.Image;
        private lBackground: objects.Image;
        private eBackground: objects.Image;
        private logo:objects.Image;

        private bCoins: objects.Coins[];
        private eCoins: objects.Coins[];
        private lCoins: objects.Coins[];

        public playerLivesSprite: objects.Sprite;
        public playerLivesLabel: objects.Label;
        public playerBombsImage: objects.Image;
        public playerBombsLabel: objects.Label;
        public playerScoreLabel: objects.Label;
        public playerPowerImage: objects.Image;
        public playerPowerLabel: objects.Label;
        public scoreMultLabel: objects.Label;
        public gameOverLabel: objects.Label;

        private controlPanel: objects.Image;
        private infoPanel: objects.Image;

        private info1: objects.Label;
        private controls: objects.Label;

        private lives:number;
        private bombs:number;
        private power:number;
        private score:number;
        private scoreMult:number;

        get Lives():number{
            return this.lives;
        }
        set Lives(newLives:number){
            this.lives = newLives;
            this.playerLivesLabel.text = "x" + this.lives;
        }
        
        get Bombs():number{
            return this.bombs;
        }
        set Bombs(newBombs:number){
            this.bombs = newBombs;
            this.playerBombsLabel.text = "Bombs x" + this.bombs;
        }

        get Power():number{
            return this.power;
        }
        set Power(newPower:number){
            this.power = newPower;
            this.playerPowerLabel.text = "PWR " + this.power;
        }

        get Score():number{
            return this.score;
        }
        set Score(newScore:number){
            this.score = newScore;
            this.playerScoreLabel.text = "Score: " + this.score;
        }

        get ScoreMult():number{
            return this.scoreMult;
        }
        set ScoreMult(newScoreMult:number){
            this.scoreMult = newScoreMult;
            this.scoreMultLabel.text = "x" + this.scoreMult; 
        }

        // Constructor
        constructor(){
            super();
            this.Initialize();
        }
        // Methods

        public Update():void{
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

        public Initialize():void{
            this.bCoins = new Array<objects.Coins>();
            this.eCoins = new Array<objects.Coins>();
            this.lCoins = new Array<objects.Coins>();

            for(let i = 0; i < 35; i++){
                this.bCoins[i] = new objects.Coins("B_coin", "B");
                this.eCoins[i] = new objects.Coins("E_coin", "E");
                this.lCoins[i] = new objects.Coins("L_coin", "L");
            }

            this.playerLivesLabel = new objects.Label("", "18px", "OptimusPrinceps","#000000", 380, 668, false );
            this.playerBombsLabel = new objects.Label("", "18px", "OptimusPrinceps","#000000", 345, 690, false );       
            this.playerScoreLabel = new objects.Label("", "20px", "OptimusPrinceps","#000000", 565, 15, false );
            this.playerPowerLabel = new objects.Label("", "12px", "OptimusPrinceps","#000000", 465, 20, false );    
            this.scoreMultLabel = new objects.Label("", "18px", "OptimusPrinceps","#000000", 650, 45, false );
           
            this.info1 = new objects.Label(
            "Bottom Left: "+ "\n" +
            "Player starts with 3 lives " + "\n" +
            "- Gain more lives by completing stages (Max:10)" + "\n\n" + 
            "Player Starts with 1 bomb/special" + "\n" + 
            "- Gain more bombs dropped by enemies or bosses " + "\n" + "(Max:3)" + "\n\n" + 
            "Player starts with power level 1" + "\n" + 
            "- Upgrade ship power level by collecting power-ups "  + "\n" +
            "dropped by enemies/bosses (Max:10)" + "\n\n" + 
            "Top Right: "+ "\n" +
            "Score is gained by destroying enemies, bosses" + "\n" + 
            "and collecting item drops "+ "\n\n" + 
            "Score multiplier is gained upon destroying enemies"+ "\n" +
            "and is lost when dead", "14px", "OptimusPrimus", 
            "#000000", 740, 235, false);

            this.controls = new objects.Label("Arrow Keys - Movement"+ "\n\n" + "           X - Shoot"
            + "\n\n" + "   Z - Bombs (Disabled)" + "\n\n" + "    Space - Swap Ships" + "\n"+"            (Disabled)", "24px", "OptimusPrimus", 
            "#000000", 50, 285, false)

            this.controlPanel = new objects.Image("panelUI", 5, 175);
            this.infoPanel = new objects.Image("panelInfo", 710, 175);

            this.playerLivesSprite = new objects.Sprite("Ship1", 370, 688);
            this.playerLivesSprite.scaleX = 0.5;
            this.playerLivesSprite.scaleY = 0.5;
            
            this.bBackground = new objects.Image("backgroundB", 343, 0);
            this.eBackground = new objects.Image("backgroundE", 712, 0);
            this.lBackground = new objects.Image("backgroundL", 0, 0);
            this.logo = new objects.Image("logo", 490, 600)
            this.logo.scaleX = 0.25
            this.logo.scaleY = 0.25

            if(managers.Game.currentScene == config.Scene.START){
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.bBackground);
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
                this.addChild(this.logo)
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
            }
            if(managers.Game.currentScene == config.Scene.GAME){
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
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
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
                this.addChild(this.playerLivesLabel);
                this.addChild(this.playerBombsLabel);
                this.addChild(this.playerScoreLabel);
                this.addChild(this.scoreMultLabel);
                this.addChild(this.playerLivesSprite);
            }
            if(managers.Game.currentScene == config.Scene.OVER){
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.bBackground);
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
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
            }
            if(managers.Game.currentScene == config.Scene.OPTIONS){
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.bBackground);
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
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
            }
            
            this.Power = 0;
            this.Score = 0;
            this.ScoreMult = 0;
        }
    }
}