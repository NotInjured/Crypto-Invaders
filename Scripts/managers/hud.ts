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

        public playerLivesSprite: objects.Sprite[]
        public playerLivesLabel: objects.Label;
        public playerBombsImage: objects.Image;
        public playerBombsLabel: objects.Label;
        public playerScoreLabel: objects.Label;
        public playerPowerImage: objects.Image;
        public playerPowerLabel: objects.Label;
        public scoreMultLabel: objects.Label;
        public gameOverLabel: objects.Label;
        public versionLabel: objects.Label;
        public highScoreLabel: objects.Label;
        public diffLabel: objects.Label;

        private tryAgainLabel: objects.Label;
        private scoreLabel :objects.Label;

        private controlPanel: objects.Image;
        private infoPanel: objects.Image;

        private backButton: objects.Button;
        private startButton: objects.Button;
        private continueButton: objects.Button;

        private info1: objects.Label;
        private controls: objects.Label;

        private lives:number;
        private bombs:number;
        private power:number;
        private score:number;
        private hScore:number;
        private scoreMult:number;
        private diff:string;

        get Lives():number{
            return this.lives;
        }
        set Lives(newLives:number){
            this.lives = newLives;
            this.playerLivesLabel.text = "Lives: ";
        }
        
        get Bombs():number{
            return this.bombs;
        }
        set Bombs(newBombs:number){
            this.bombs = newBombs;
            this.playerBombsLabel.text = "Bombs: " + this.bombs;
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

        get HighScore():number{
            return this.hScore;
        }
        set HighScore(newScore:number){
            this.hScore = newScore;
            this.highScoreLabel.text = "HiScore: " + this.hScore;
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

            if(managers.Game.currentScene == config.Scene.GAME){
                this.info1.text = ""
                this.playerScoreLabel.x = 751
                this.playerScoreLabel.y = 225
                this.highScoreLabel.x = 725
                this.highScoreLabel.y = 200
                this.scoreMultLabel.x = 808
                this.scoreMultLabel.y = 250
                this.playerLivesLabel.x = 760
                this.playerLivesLabel.y = 300
                this.playerBombsLabel.x = 745
                this.playerBombsLabel.y = 325
                this.diffLabel.x = 725
                this.diffLabel.y = 375

                managers.Game.score = this.Score

                if(this.Score > this.HighScore){
                    this.HighScore = this.Score
                    managers.Game.highScore = managers.Game.score
                }
                
                if(managers.Game.level1 && managers.Game.level1Completed){
                    this.gameOverLabel.alpha = 1
                    this.bBackground.alpha = 1
                    this.backButton.alpha = 1
                    this.continueButton.alpha = 1
                    
                    this.backButton.on("click", this.backButtonClick)
                    this.continueButton.on("click", this.continueButtonClick)
                }

                if(managers.Game.level2 && managers.Game.level1Completed){
                    this.bBackground.alpha = 0
                    this.backButton.alpha = 0
                    this.continueButton.alpha = 0
                    this.gameOverLabel.alpha = 0
                }
                
                if(managers.Game.level2 && managers.Game.level2Completed){
                    this.gameOverLabel.alpha = 1
                    this.bBackground.alpha = 1
                    this.backButton.alpha = 1
                    this.continueButton.alpha = 1

                    this.backButton.on("click", this.backButtonClick)
                    this.continueButton.on("click", this.continueButtonClick)
                }

                if(managers.Game.level3 && managers.Game.level2Completed){
                    this.bBackground.alpha = 0
                    this.backButton.alpha = 0
                    this.continueButton.alpha = 0
                    this.gameOverLabel.alpha = 0
                }

                if(managers.Game.level3 && managers.Game.level3Completed){
                    this.gameOverLabel.alpha = 1
                    this.bBackground.alpha = 1
                    this.backButton.alpha = 1
                    this.continueButton.alpha = 1

                    this.backButton.on("click", this.backButtonClick)
                    this.continueButton.on("click", this.continueButtonClick)
                }
            }
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.START;
        }

        private continueButtonClick():void {
            managers.Game.timer = 600

            if(managers.Game.level1Completed && managers.Game.level1){
                managers.Game.level1 = false
                managers.Game.level2 = true
            }
            else if(managers.Game.level2Completed && managers.Game.level2){
                managers.Game.level2 = false
                managers.Game.level3 = true
            }
        }

        public Initialize():void{
            this.bCoins = new Array<objects.Coins>();
            this.eCoins = new Array<objects.Coins>();
            this.lCoins = new Array<objects.Coins>();

            for(let i = 0; i < 35; i++){
                this.bCoins[i] = new objects.Coins("B_coin");
                this.eCoins[i] = new objects.Coins("E_coin");
                this.lCoins[i] = new objects.Coins("L_coin");
            }

            this.startButton = new objects.Button("buttonStart", 630, 475);
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.continueButton = new objects.Button("buttonContinue", 630, 475)

            this.playerLivesLabel = new objects.Label("", "24px", "OptimusPrinceps","#000000", 380, 668, false );
            this.playerBombsLabel = new objects.Label("", "24px", "OptimusPrinceps","#000000", 345, 690, false );       
            this.playerScoreLabel = new objects.Label("", "24px", "OptimusPrinceps","#000000", 565, 15, false );
            this.playerPowerLabel = new objects.Label("", "24px", "OptimusPrinceps","#000000", 465, 20, false );    
            this.scoreMultLabel = new objects.Label("", "24px", "OptimusPrinceps","#000000", 650, 45, false );
            this.highScoreLabel = new objects.Label("", "24px", "OptimusPrinceps","#000000", 565, 200, false );

            this.info1 = new objects.Label(
            "Player starts with 9/6/3 lives on Normal/Hard/Hell " + "\n" +
            "- Gain more lives by completing stages" + "\n\n" + 
            "Player Starts with 1 bomb/special" + "\n" + 
            "- Gain more bombs dropped by enemies or bosses " + "\n" + "(Max:5)" + "\n\n" + 
            //"Player starts with power level 1" + "\n" + 
            //"- Upgrade ship power level by collecting power-ups "  + "\n" +
            //"dropped by enemies/bosses (Max:10)" + "\n\n" +
            "Score is gained by destroying enemies, bosses" + "\n" + 
            "and collecting item drops "+ "\n\n" + 
            "Score multiplier is gained upon destroying enemies"+ "\n" +
            "and is lost when dead", "14px", "OptimusPrimus", 
            "#000000", 740, 265, false);

            this.controls = new objects.Label("Arrow Keys - Movement"+ "\n\n" + "           X - Shoot"
            + "\n\n" + "   Z - Bombs (Disabled)" + "\n\n" + "    Space - Swap Ships", "24px", "OptimusPrimus", 
            "#000000", 50, 285, false)

            this.versionLabel = new objects.Label("Alpha Release 0.1", "12px", "OptimusPrimus", 
            "#000000", 495, 550, false)

            if(managers.Game.normal)
                this.diff = "Normal"
            if(managers.Game.hard)
                this.diff = "Hard"
            if(managers.Game.hell)
                this.diff = "Hell"
            this.gameOverLabel = new objects.Label(
                "Level Completed!", 
                "36px", "OptimusPrinceps", "#000000", 530, 240, true);
            this.diffLabel = new objects.Label("Difficulty: " +this.diff, "24px", "OptimusPrinceps","#000000", 565, 200, false );

            this.controlPanel = new objects.Image("panelUI", 4, 175);
            this.infoPanel = new objects.Image("panelInfo", 710, 175);

            this.playerLivesSprite = new Array<objects.Sprite>()
            
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
                this.addChild(this.versionLabel)
            }

            if(managers.Game.currentScene == config.Scene.GAME){
                if(managers.Game.normal){
                    for(let i = 0; i < 9; i++){
                        this.playerLivesSprite[i] = new objects.Sprite("Ship1", 370, 688);
                        this.playerLivesSprite[i].scaleX = 0.5;
                        this.playerLivesSprite[i].scaleY = 0.5;
                        this.playerLivesSprite[0].x = 835
                        this.playerLivesSprite[0].y = 320
                        this.playerLivesSprite[i].x = this.playerLivesSprite[0].x + 20 *i
                        this.playerLivesSprite[i].y = this.playerLivesSprite[0].y
                    }
                }
                if(managers.Game.hard){
                    for(let i = 0; i < 6; i++){
                        this.playerLivesSprite[i] = new objects.Sprite("Ship1", 370, 688);
                        this.playerLivesSprite[i].scaleX = 0.5;
                        this.playerLivesSprite[i].scaleY = 0.5;
                        this.playerLivesSprite[0].x = 835
                        this.playerLivesSprite[0].y = 320
                        this.playerLivesSprite[i].x = this.playerLivesSprite[0].x + 20 *i
                        this.playerLivesSprite[i].y = this.playerLivesSprite[0].y
                    }
                }
                if(managers.Game.hell){
                    for(let i = 0; i < 3; i++){
                        this.playerLivesSprite[i] = new objects.Sprite("Ship1", 370, 688);
                        this.playerLivesSprite[i].scaleX = 0.5;
                        this.playerLivesSprite[i].scaleY = 0.5;
                        this.playerLivesSprite[0].x = 835
                        this.playerLivesSprite[0].y = 320
                        this.playerLivesSprite[i].x = this.playerLivesSprite[0].x + 20 *i
                        this.playerLivesSprite[i].y = this.playerLivesSprite[0].y
                    }
                }

                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
                this.addChild(this.playerLivesLabel);
                this.addChild(this.playerBombsLabel);
                this.addChild(this.playerScoreLabel);
                this.addChild(this.scoreMultLabel);
                this.addChild(this.bBackground)
                this.addChild(this.gameOverLabel)
                this.addChild(this.playerScoreLabel)
                this.addChild(this.highScoreLabel)
                this.addChild(this.backButton)
                this.addChild(this.continueButton)
                this.addChild(this.diffLabel)
                
                this.playerLivesSprite.forEach(s =>{
                    this.addChild(s);
                })

                this.gameOverLabel.alpha = 0
                this.bBackground.alpha = 0
                this.backButton.alpha = 0
                this.continueButton.alpha = 0
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
            this.HighScore = 0
            this.ScoreMult = 1;
        }
    }
}