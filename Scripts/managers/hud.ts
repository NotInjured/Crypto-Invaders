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
        public continueLabel: objects.Label;

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
            this.playerPowerLabel.text = "Power: " + this.power;
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
                this.playerScoreLabel.x = 751
                this.playerScoreLabel.y = 225
                this.highScoreLabel.x = 725
                this.highScoreLabel.y = 200
                this.scoreMultLabel.x = 808
                this.scoreMultLabel.y = 250
                this.playerPowerLabel.x = 745
                this.playerPowerLabel.y = 275

                this.playerLivesLabel.x = 760
                this.playerLivesLabel.y = 325
                this.playerBombsLabel.x = 745
                this.playerBombsLabel.y = 350
                this.diffLabel.x = 725
                this.diffLabel.y = 400

                managers.Game.score = this.Score

                if(this.Score > this.HighScore){
                    this.HighScore = this.Score
                    managers.Game.highScore = managers.Game.score
                }
                
                if(managers.Game.hud.Power > 200){
                    this.playerPowerLabel.text = "Power: MAX"
                }
                
                if(managers.Game.level1 && managers.Game.level1Completed){
                    this.gameOverLabel.alpha = 1
                    this.bBackground.alpha = 1
                    this.backButton.alpha = 1
                    this.continueButton.alpha = 1
                    managers.Game.keyboardManager.enabled =false
                    managers.Game.player.alpha = 0
                    
                    this.backButton.on("click", this.backButtonClick)
                    this.continueButton.on("click", this.continueButtonClick)
                }

                if(managers.Game.level2 && managers.Game.level1Completed){
                    this.bBackground.alpha = 0
                    this.backButton.alpha = 0
                    this.continueButton.alpha = 0
                    this.gameOverLabel.alpha = 0
                    managers.Game.keyboardManager.enabled = true
                }
                
                if(managers.Game.level2 && managers.Game.level2Completed){
                    this.gameOverLabel.alpha = 1
                    this.bBackground.alpha = 1
                    this.backButton.alpha = 1
                    this.continueButton.alpha = 1
                    managers.Game.keyboardManager.enabled =false

                    this.backButton.on("click", this.backButtonClick)
                    this.continueButton.on("click", this.continueButtonClick)
                }

                if(managers.Game.level3 && managers.Game.level2Completed){
                    this.bBackground.alpha = 0
                    this.backButton.alpha = 0
                    this.continueButton.alpha = 0
                    this.gameOverLabel.alpha = 0
                    managers.Game.keyboardManager.enabled =true
                }

                if(managers.Game.level3 && managers.Game.level3Completed){
                    this.gameOverLabel.alpha = 1
                    this.bBackground.alpha = 1
                    this.backButton.alpha = 1
                    this.gameOverLabel.text = "Game Completed!"
                    managers.Game.keyboardManager.enabled =false
                    //this.continueButton.alpha = 1
                    //this.continueLabel.alpha = 1
                    //this.continueLabel.x = 470
                    //this.continueLabel.y = 300

                    this.backButton.on("click", this.backButtonClick)
                    //this.continueButton.on("click", this.continueButtonClick)
                }

                if(managers.Game.level1 && managers.Game.level3Completed){
                    this.bBackground.alpha = 0
                    this.backButton.alpha = 0
                    this.continueButton.alpha = 0
                    this.gameOverLabel.alpha = 0

                    if(managers.Game.ng){
                        managers.Game.level1 = true
                        managers.Game.level2 = false
                        managers.Game.level3 = false
                        managers.Game.level1Completed = false
                        managers.Game.level2Completed = false
                        managers.Game.level3Completed = false
                        managers.Game.boss1IsDead = false
                        managers.Game.boss2IsDead = false
                        managers.Game.boss3_1IsDead = false
                        managers.Game.boss3_2IsDead = false
                    }
                }
            }
        }

        private backButtonClick():void {
            managers.Game.keyboardManager.enabled = true
            managers.Game.currentScene = config.Scene.START;
        }

        private continueButtonClick():void {
            managers.Game.timer = 600

            if(managers.Game.level1Completed && managers.Game.level1){
                managers.Game.level1 = false
                managers.Game.level2 = true
            }
            if(managers.Game.level2Completed && managers.Game.level2){
                managers.Game.level2 = false
                managers.Game.level3 = true
            }
            if(managers.Game.level3Completed && managers.Game.level3){
                managers.Game.level3 = false
                managers.Game.level1 = true
                managers.Game.ng = true
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
            "Player starts with 9/6/3 lives on" + "\n" +
            "Normal/Hard/Hell" + "\n" +
            "+1 by completing stages" + "\n\n" + 
            //"Player Starts with 1 bomb/special" + "\n" + 
            //"+1 dropped by enemies or bosses " + "\n" + "(Max:5)" + "\n\n" + 
            "Player starts with power level 1" + "\n" + 
            "+Power by collecting coins "  + "\n" +
            "Upgrades at 40/80/120/160" + "\n" +
            "Powe level cut in half on death" + "\n\n" +
            "+Score by destroying enemies, bosses" + "\n" + 
            "and collecting item drops "+ "\n\n" + 
            "+Multiplier by destroying enemies"+ "\n" +
            "Reset to 1 on death", "20px", "OptimusPrimus", 
            "#000000", 725, 155, false);

            this.controls = new objects.Label("Arrow Keys - Movement"+ "\n\n" + "           X - Shoot"
            + "\n\n" + "   Z - Bombs (Disabled)" + "\n\n" + "    Space - Swap Ships" + "\n\n" + 
            "     Shift - Half-speed", "24px", "OptimusPrimus", 
            "#000000", 50, 215, false)

            this.versionLabel = new objects.Label("Beta Release 0.2", "12px", "OptimusPrimus", 
            "#000000", 495, 450, false)

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
            this.continueLabel = new objects.Label("New Game+?", "24px", "OptimusPrinceps","#000000", 565, 200, false );

            this.controlPanel = new objects.Image("panelUI", 1, 125);
            this.infoPanel = new objects.Image("panelInfo", 710, 125);

            this.playerLivesSprite = new Array<objects.Sprite>()
            
            this.bBackground = new objects.Image("backgroundB", 343, 0);
            this.eBackground = new objects.Image("backgroundE", 712, 0);
            this.lBackground = new objects.Image("backgroundL", 0, 0);
            this.logo = new objects.Image("logo", 490, 500)
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
                for(let i = 0; i < 9; i++){
                    this.playerLivesSprite[i] = new objects.Sprite("Ship1", 370, 688);
                    this.playerLivesSprite[i].scaleX = 0.5;
                    this.playerLivesSprite[i].scaleY = 0.5;
                    this.playerLivesSprite[0].x = 835
                    this.playerLivesSprite[0].y = 345
                    this.playerLivesSprite[i].x = this.playerLivesSprite[0].x + 20 *i
                    this.playerLivesSprite[i].y = this.playerLivesSprite[0].y
                }
                if(managers.Game.hard){
                    for(let i = 6; i < 9; i++){
                        this.playerLivesSprite[i].alpha = 0.5
                    }
                }
                if(managers.Game.hell){
                    for(let i = 3; i < 9; i++){
                        this.playerLivesSprite[i].alpha = 0.5
                    }
                }

                this.addChild(this.bBackground)
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.controlPanel);
                this.addChild(this.controls);
                this.addChild(this.playerLivesLabel);
                this.addChild(this.playerBombsLabel);
                this.addChild(this.playerScoreLabel);
                this.addChild(this.playerPowerLabel)
                this.addChild(this.scoreMultLabel);
                this.addChild(this.gameOverLabel)
                this.addChild(this.playerScoreLabel)
                this.addChild(this.highScoreLabel)
                this.addChild(this.backButton)
                this.addChild(this.continueButton)
                this.addChild(this.diffLabel)
                //this.addChild(this.continueLabel)
                
                this.playerLivesSprite.forEach(s =>{
                    this.addChild(s);
                })

                this.gameOverLabel.alpha = 0
                this.bBackground.alpha = 0
                this.backButton.alpha = 0
                this.continueButton.alpha = 0
                this.continueLabel.alpha = 0
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