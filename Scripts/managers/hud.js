var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var managers;
(function (managers) {
    var HUD = /** @class */ (function (_super) {
        __extends(HUD, _super);
        // Constructor
        function HUD() {
            var _this = _super.call(this) || this;
            _this.Initialize();
            return _this;
        }
        Object.defineProperty(HUD.prototype, "Lives", {
            get: function () {
                return this.lives;
            },
            set: function (newLives) {
                this.lives = newLives;
                this.playerLivesLabel.text = "Lives: ";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "Power", {
            get: function () {
                return this.power;
            },
            set: function (newPower) {
                this.power = newPower;
                this.playerPowerLabel.text = "Power: " + this.power;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "Score", {
            get: function () {
                return this.score;
            },
            set: function (newScore) {
                this.score = newScore;
                this.playerScoreLabel.text = "Score: " + this.score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "HighScore", {
            get: function () {
                return this.hScore;
            },
            set: function (newScore) {
                this.hScore = newScore;
                this.highScoreLabel.text = "HiScore: " + this.hScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "ScoreMult", {
            get: function () {
                return this.scoreMult;
            },
            set: function (newScoreMult) {
                this.scoreMult = newScoreMult;
                this.scoreMultLabel.text = "x" + this.scoreMult;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P1Lives", {
            // P1
            get: function () {
                return this.P1lives;
            },
            set: function (newLives) {
                this.P1lives = newLives;
                this.P1playerLivesLabel.text = "Lives: ";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P1Power", {
            get: function () {
                return this.P1power;
            },
            set: function (newPower) {
                this.P1power = newPower;
                this.P1playerPowerLabel.text = "Power: " + this.P1power;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P1Score", {
            get: function () {
                return this.P1score;
            },
            set: function (newScore) {
                this.P1score = newScore;
                this.P1playerScoreLabel.text = "Score: " + this.P1score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P1HighScore", {
            get: function () {
                return this.P1hScore;
            },
            set: function (newScore) {
                this.P1hScore = newScore;
                this.P1highScoreLabel.text = "HiScore: " + this.P1hScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P1ScoreMult", {
            get: function () {
                return this.P1scoreMult;
            },
            set: function (newScoreMult) {
                this.P1scoreMult = newScoreMult;
                this.P1scoreMultLabel.text = "x" + this.P1scoreMult;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P2Lives", {
            // P2
            get: function () {
                return this.P2lives;
            },
            set: function (newLives) {
                this.P2lives = newLives;
                this.P2playerLivesLabel.text = "Lives: ";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P2Power", {
            get: function () {
                return this.P2power;
            },
            set: function (newPower) {
                this.P2power = newPower;
                this.P2playerPowerLabel.text = "Power: " + this.P2power;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P2Score", {
            get: function () {
                return this.P2score;
            },
            set: function (newScore) {
                this.P2score = newScore;
                this.P2playerScoreLabel.text = "Score: " + this.P2score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P2HighScore", {
            get: function () {
                return this.P2hScore;
            },
            set: function (newScore) {
                this.P2hScore = newScore;
                this.P2highScoreLabel.text = "HiScore: " + this.P2hScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "P2ScoreMult", {
            get: function () {
                return this.P2scoreMult;
            },
            set: function (newScoreMult) {
                this.P2scoreMult = newScoreMult;
                this.P2scoreMultLabel.text = "x" + this.P2scoreMult;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        HUD.prototype.Update = function () {
            this.bCoins.forEach(function (c) {
                c.Update();
            });
            this.eCoins.forEach(function (c) {
                c.Update();
            });
            this.lCoins.forEach(function (c) {
                c.Update();
            });
            if (managers.Game.currentScene == config.Scene.GAME) {
                if (managers.Game.single) {
                    this.playerScoreLabel.x = 751;
                    this.playerScoreLabel.y = 225;
                    this.highScoreLabel.x = 725;
                    this.highScoreLabel.y = 200;
                    this.scoreMultLabel.x = 808;
                    this.scoreMultLabel.y = 250;
                    this.playerPowerLabel.x = 745;
                    this.playerPowerLabel.y = 275;
                    this.playerLivesLabel.x = 760;
                    this.playerLivesLabel.y = 325;
                    this.diffLabel.x = 725;
                    this.diffLabel.y = 400;
                    managers.Game.score = this.Score;
                    managers.Game.highScore = this.HighScore;
                    if (this.Score > this.HighScore) {
                        this.HighScore = this.Score;
                        managers.Game.highScore = managers.Game.score;
                    }
                    if (managers.Game.hud.Power > 200) {
                        this.playerPowerLabel.text = "Power: MAX";
                    }
                    if (managers.Game.level1 && managers.Game.level1Completed) {
                        this.gameOverLabel.alpha = 1;
                        this.bBackground.alpha = 1;
                        this.backButton.alpha = 1;
                        this.continueButton.alpha = 1;
                        managers.Game.keyboardManager.enabled = false;
                        managers.Game.player.alpha = 0;
                        this.backButton.on("click", this.backButtonClick);
                        this.continueButton.on("click", this.continueButtonClick);
                    }
                    if (managers.Game.level2 && managers.Game.level1Completed) {
                        this.bBackground.alpha = 0;
                        this.backButton.alpha = 0;
                        this.continueButton.alpha = 0;
                        this.gameOverLabel.alpha = 0;
                        if (!managers.Game.player.isDead)
                            managers.Game.player.alpha = 1;
                        managers.Game.keyboardManager.enabled = true;
                    }
                    if (managers.Game.level2 && managers.Game.level2Completed) {
                        this.gameOverLabel.alpha = 1;
                        this.bBackground.alpha = 1;
                        this.backButton.alpha = 1;
                        this.continueButton.alpha = 1;
                        managers.Game.player.alpha = 0;
                        managers.Game.keyboardManager.enabled = false;
                        this.backButton.on("click", this.backButtonClick);
                        this.continueButton.on("click", this.continueButtonClick);
                    }
                    if (managers.Game.level3 && managers.Game.level2Completed) {
                        this.bBackground.alpha = 0;
                        this.backButton.alpha = 0;
                        this.continueButton.alpha = 0;
                        this.gameOverLabel.alpha = 0;
                        if (!managers.Game.player.isDead)
                            managers.Game.player.alpha = 1;
                        managers.Game.keyboardManager.enabled = true;
                    }
                    if (managers.Game.level3 && managers.Game.level3Completed) {
                        this.gameOverLabel.alpha = 1;
                        this.bBackground.alpha = 1;
                        this.backButton.alpha = 1;
                        managers.Game.player.alpha = 0;
                        this.gameOverLabel.text = "Game Completed!";
                        managers.Game.keyboardManager.enabled = false;
                        this.backButton.on("click", this.backButtonClick);
                    }
                    if (managers.Game.level1 && managers.Game.level3Completed) {
                        this.bBackground.alpha = 0;
                        this.backButton.alpha = 0;
                        this.continueButton.alpha = 0;
                        this.gameOverLabel.alpha = 0;
                    }
                }
                if (managers.Game.multi) {
                    // P1
                    this.P1playerScoreLabel.x = 40;
                    this.P1playerScoreLabel.y = 225;
                    this.P1highScoreLabel.x = 15;
                    this.P1highScoreLabel.y = 200;
                    this.P1scoreMultLabel.x = 98;
                    this.P1scoreMultLabel.y = 250;
                    this.P1playerPowerLabel.x = 32;
                    this.P1playerPowerLabel.y = 275;
                    this.P1playerLivesLabel.x = 50;
                    this.P1playerLivesLabel.y = 325;
                    this.P1diffLabel.x = 15;
                    this.P1diffLabel.y = 400;
                    this.P1Name.text = "Player 1";
                    this.P1Name.x = 110;
                    this.P1Name.y = 100;
                    managers.Game.P1score = this.P1Score;
                    managers.Game.P1hScore = this.P1hScore;
                    if (this.P1Score > this.P1HighScore) {
                        this.P1HighScore = this.P1Score;
                        managers.Game.P1hScore = managers.Game.P1score;
                    }
                    // P2
                    this.P2playerScoreLabel.x = 751;
                    this.P2playerScoreLabel.y = 225;
                    this.P2highScoreLabel.x = 725;
                    this.P2highScoreLabel.y = 200;
                    this.P2scoreMultLabel.x = 808;
                    this.P2scoreMultLabel.y = 250;
                    this.P2playerPowerLabel.x = 745;
                    this.P2playerPowerLabel.y = 275;
                    this.P2playerLivesLabel.x = 762;
                    this.P2playerLivesLabel.y = 325;
                    this.P2diffLabel.x = 725;
                    this.P2diffLabel.y = 400;
                    this.P2Name.text = "Player 2";
                    this.P2Name.x = 825;
                    this.P2Name.y = 100;
                    managers.Game.P2score = this.P2Score;
                    managers.Game.P2hScore = this.P2hScore;
                    if (this.P2Score > this.P2HighScore) {
                        this.P2HighScore = this.P2Score;
                        managers.Game.P2hScore = managers.Game.P2score;
                    }
                    if (this.Score > this.HighScore) {
                        this.HighScore = this.Score;
                        managers.Game.highScore = managers.Game.score;
                    }
                    if (managers.Game.hud.Power > 200) {
                        this.playerPowerLabel.text = "Power: MAX";
                    }
                    if (managers.Game.level1 && managers.Game.level1Completed) {
                        this.gameOverLabel.alpha = 1;
                        this.bBackground.alpha = 1;
                        this.backButton.alpha = 1;
                        this.continueButton.alpha = 1;
                        managers.Game.keyboardManager.enabled = false;
                        managers.Game.player.alpha = 0;
                        managers.Game.P1.alpha = 0;
                        managers.Game.P2.alpha = 0;
                        this.backButton.on("click", this.backButtonClick);
                        this.continueButton.on("click", this.continueButtonClick);
                    }
                    if (managers.Game.level2 && managers.Game.level1Completed) {
                        this.bBackground.alpha = 0;
                        this.backButton.alpha = 0;
                        this.continueButton.alpha = 0;
                        this.gameOverLabel.alpha = 0;
                        if (!managers.Game.player.isDead)
                            managers.Game.player.alpha = 1;
                        if (!managers.Game.P1.isDead)
                            managers.Game.P1.alpha = 1;
                        if (!managers.Game.P2.isDead)
                            managers.Game.P2.alpha = 1;
                        managers.Game.keyboardManager.enabled = true;
                    }
                    if (managers.Game.level2 && managers.Game.level2Completed) {
                        this.gameOverLabel.alpha = 1;
                        this.bBackground.alpha = 1;
                        this.backButton.alpha = 1;
                        this.continueButton.alpha = 1;
                        managers.Game.player.alpha = 0;
                        managers.Game.P1.alpha = 0;
                        managers.Game.P2.alpha = 0;
                        managers.Game.keyboardManager.enabled = false;
                        this.backButton.on("click", this.backButtonClick);
                        this.continueButton.on("click", this.continueButtonClick);
                    }
                    if (managers.Game.level3 && managers.Game.level2Completed) {
                        this.bBackground.alpha = 0;
                        this.backButton.alpha = 0;
                        this.continueButton.alpha = 0;
                        this.gameOverLabel.alpha = 0;
                        if (!managers.Game.player.isDead)
                            managers.Game.player.alpha = 1;
                        if (!managers.Game.P1.isDead)
                            managers.Game.P1.alpha = 1;
                        if (!managers.Game.P2.isDead)
                            managers.Game.P2.alpha = 1;
                        managers.Game.keyboardManager.enabled = true;
                    }
                    if (managers.Game.level3 && managers.Game.level3Completed) {
                        this.gameOverLabel.alpha = 1;
                        this.bBackground.alpha = 1;
                        this.backButton.alpha = 1;
                        managers.Game.player.alpha = 0;
                        managers.Game.P1.alpha = 0;
                        managers.Game.P2.alpha = 0;
                        this.gameOverLabel.text = "Game Completed!";
                        managers.Game.keyboardManager.enabled = false;
                        this.backButton.on("click", this.backButtonClick);
                    }
                    if (managers.Game.level1 && managers.Game.level3Completed) {
                        this.bBackground.alpha = 0;
                        this.backButton.alpha = 0;
                        this.continueButton.alpha = 0;
                        this.gameOverLabel.alpha = 0;
                    }
                }
            }
        };
        HUD.prototype.backButtonClick = function () {
            managers.Game.keyboardManager.enabled = true;
            managers.Game.currentScene = config.Scene.START;
        };
        HUD.prototype.continueButtonClick = function () {
            managers.Game.timer = 600;
            if (managers.Game.level1Completed && managers.Game.level1) {
                managers.Game.level1 = false;
                managers.Game.level2 = true;
                managers.Game.player.alpha = 1;
            }
            if (managers.Game.level2Completed && managers.Game.level2) {
                managers.Game.level2 = false;
                managers.Game.level3 = true;
                managers.Game.player.alpha = 1;
            }
            if (managers.Game.level3Completed && managers.Game.level3) {
                managers.Game.level3 = false;
                managers.Game.level1 = true;
                managers.Game.player.alpha = 1;
            }
        };
        HUD.prototype.Initialize = function () {
            var _this = this;
            this.bCoins = new Array();
            this.eCoins = new Array();
            this.lCoins = new Array();
            for (var i = 0; i < 35; i++) {
                this.bCoins[i] = new objects.Coins("B_coin");
                this.eCoins[i] = new objects.Coins("E_coin");
                this.lCoins[i] = new objects.Coins("L_coin");
            }
            this.startButton = new objects.Button("buttonStart", 630, 475);
            this.backButton = new objects.Button("buttonBack", 630, 555);
            this.continueButton = new objects.Button("buttonContinue", 630, 475);
            this.playerLivesLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 380, 668, false);
            this.playerScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 565, 15, false);
            this.playerPowerLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 465, 20, false);
            this.scoreMultLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 650, 45, false);
            this.highScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            // P1
            this.P1playerLivesLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 15, 668, false);
            this.P1playerScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 15, 15, false);
            this.P1playerPowerLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 15, 20, false);
            this.P1scoreMultLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 15, 45, false);
            this.P1highScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 15, 200, false);
            this.P1Name = new objects.Label("", "36px", "OptimusPrinceps", "#000000", 15, 200, false);
            // P2
            this.P2playerLivesLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 380, 668, false);
            this.P2playerScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 565, 15, false);
            this.P2playerPowerLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 465, 20, false);
            this.P2scoreMultLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 650, 45, false);
            this.P2highScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.P2Name = new objects.Label("", "36px", "OptimusPrinceps", "#000000", 15, 200, false);
            this.info1 = new objects.Label("Player starts with 9/6/3 lives on" + "\n" +
                "Normal/Hard/Hell" + "\n" +
                "+1 by completing stages" + "\n\n" +
                //"Player Starts with 1 bomb/special" + "\n" + 
                //"+1 dropped by enemies or bosses " + "\n" + "(Max:5)" + "\n\n" + 
                "Player starts with power level 1" + "\n" +
                "+Power by collecting coins " + "\n" +
                "Upgrades at 40/80/120/160" + "\n" +
                "Powe level cut in half on death" + "\n\n" +
                "+Score by destroying enemies, bosses" + "\n" +
                "and collecting item drops " + "\n\n" +
                "+Multiplier by destroying enemies" + "\n" +
                "Reset to 1 on death", "20px", "OptimusPrimus", "#000000", 725, 155, false);
            this.controls = new objects.Label("                      Singleplayer" + "\n\n" +
                "           Arrow Keys - Movement" + "\n" +
                "                       X - Shoot" + "\n" +
                "               Space - Swap Ships" + "\n" +
                "                 Shift - Half-speed" + "\n\n" +
                "                      Multiplayer" + "\n\n" +
                "         P1                                    P2" + "\n" +
                "     WASD        - Move -   Arrow Keys" + "\n" +
                "         V            - Shoot -       ENTER" + "\n" +
                "      Space         - Swap -        NUM0" + "\n" +
                "     LShift     - Half-speed -    NUM.", "16px", "OptimusPrimus", "#000000", 50, 195, false);
            this.versionLabel = new objects.Label("Beta Release 0.2", "12px", "OptimusPrimus", "#000000", 495, 450, false);
            if (managers.Game.normal)
                this.diff = "Normal";
            if (managers.Game.hard)
                this.diff = "Hard";
            if (managers.Game.hell)
                this.diff = "Hell";
            this.gameOverLabel = new objects.Label("Level Completed!", "36px", "OptimusPrinceps", "#000000", 530, 240, true);
            this.diffLabel = new objects.Label("Difficulty: " + this.diff, "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.P1diffLabel = new objects.Label("Difficulty: " + this.diff, "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.P2diffLabel = new objects.Label("Difficulty: " + this.diff, "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.continueLabel = new objects.Label("New Game+?", "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.controlPanel = new objects.Image("panelUI", 1, 125);
            this.infoPanel = new objects.Image("panelInfo", 710, 125);
            this.playerLivesSprite = new Array();
            this.P1playerLivesSprite = new Array();
            this.P2playerLivesSprite = new Array();
            this.bBackground = new objects.Image("backgroundB", 343, 0);
            this.eBackground = new objects.Image("backgroundE", 712, 0);
            this.lBackground = new objects.Image("backgroundL", 0, 0);
            this.logo = new objects.Image("logo", 490, 500);
            this.logo.scaleX = 0.25;
            this.logo.scaleY = 0.25;
            if (managers.Game.currentScene == config.Scene.START) {
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.bBackground);
                this.bCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.eCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.lCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.addChild(this.logo);
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
                this.addChild(this.versionLabel);
            }
            if (managers.Game.currentScene == config.Scene.GAME) {
                if (managers.Game.single) {
                    for (var i = 0; i < 9; i++) {
                        this.playerLivesSprite[i] = new objects.Sprite("Ship1", 370, 688);
                        this.playerLivesSprite[i].scaleX = 0.5;
                        this.playerLivesSprite[i].scaleY = 0.5;
                        this.playerLivesSprite[0].x = 835;
                        this.playerLivesSprite[0].y = 345;
                        this.playerLivesSprite[i].x = this.playerLivesSprite[0].x + 20 * i;
                        this.playerLivesSprite[i].y = this.playerLivesSprite[0].y;
                    }
                    if (managers.Game.hard) {
                        for (var i = 6; i < 9; i++) {
                            this.playerLivesSprite[i].alpha = 0.5;
                        }
                    }
                    if (managers.Game.hell) {
                        for (var i = 3; i < 9; i++) {
                            this.playerLivesSprite[i].alpha = 0.5;
                        }
                    }
                    this.addChild(this.bBackground);
                    this.addChild(this.eBackground);
                    this.addChild(this.lBackground);
                    this.addChild(this.controlPanel);
                    this.addChild(this.controls);
                    this.addChild(this.playerLivesLabel);
                    this.addChild(this.playerScoreLabel);
                    this.addChild(this.playerPowerLabel);
                    this.addChild(this.scoreMultLabel);
                    this.addChild(this.gameOverLabel);
                    this.addChild(this.playerScoreLabel);
                    this.addChild(this.highScoreLabel);
                    this.addChild(this.backButton);
                    this.addChild(this.continueButton);
                    this.addChild(this.diffLabel);
                    this.playerLivesSprite.forEach(function (s) {
                        _this.addChild(s);
                    });
                    this.gameOverLabel.alpha = 0;
                    this.bBackground.alpha = 0;
                    this.backButton.alpha = 0;
                    this.continueButton.alpha = 0;
                    this.continueLabel.alpha = 0;
                }
                if (managers.Game.multi) {
                    for (var i = 0; i < 9; i++) {
                        this.P1playerLivesSprite[i] = new objects.Sprite("Ship1", 370, 688);
                        this.P1playerLivesSprite[i].scaleX = 0.5;
                        this.P1playerLivesSprite[i].scaleY = 0.5;
                        this.P1playerLivesSprite[0].x = 125;
                        this.P1playerLivesSprite[0].y = 345;
                        this.P1playerLivesSprite[i].x = this.P1playerLivesSprite[0].x + 20 * i;
                        this.P1playerLivesSprite[i].y = this.P1playerLivesSprite[0].y;
                        this.P2playerLivesSprite[i] = new objects.Sprite("Ship1", 370, 688);
                        this.P2playerLivesSprite[i].scaleX = 0.5;
                        this.P2playerLivesSprite[i].scaleY = 0.5;
                        this.P2playerLivesSprite[0].x = 835;
                        this.P2playerLivesSprite[0].y = 345;
                        this.P2playerLivesSprite[i].x = this.P2playerLivesSprite[0].x + 20 * i;
                        this.P2playerLivesSprite[i].y = this.P2playerLivesSprite[0].y;
                    }
                    if (managers.Game.hard) {
                        for (var i = 6; i < 9; i++) {
                            this.P1playerLivesSprite[i].alpha = 0.5;
                            this.P2playerLivesSprite[i].alpha = 0.5;
                        }
                    }
                    if (managers.Game.hell) {
                        for (var i = 3; i < 9; i++) {
                            this.P1playerLivesSprite[i].alpha = 0.5;
                            this.P2playerLivesSprite[i].alpha = 0.5;
                        }
                    }
                    this.addChild(this.bBackground);
                    this.addChild(this.eBackground);
                    this.addChild(this.lBackground);
                    // P1
                    this.addChild(this.P1playerLivesLabel);
                    this.addChild(this.P1playerScoreLabel);
                    this.addChild(this.P1playerPowerLabel);
                    this.addChild(this.P1scoreMultLabel);
                    this.addChild(this.P1playerScoreLabel);
                    this.addChild(this.P1highScoreLabel);
                    this.addChild(this.P1diffLabel);
                    this.P1playerLivesSprite.forEach(function (s) {
                        _this.addChild(s);
                    });
                    this.addChild(this.P1Name);
                    this.addChild(this.P2Name);
                    // P2
                    this.addChild(this.P2playerLivesLabel);
                    this.addChild(this.P2playerScoreLabel);
                    this.addChild(this.P2playerPowerLabel);
                    this.addChild(this.P2scoreMultLabel);
                    this.addChild(this.P2playerScoreLabel);
                    this.addChild(this.P2highScoreLabel);
                    this.addChild(this.P2diffLabel);
                    this.P2playerLivesSprite.forEach(function (s) {
                        _this.addChild(s);
                    });
                    // -----------
                    this.addChild(this.gameOverLabel);
                    this.addChild(this.backButton);
                    this.addChild(this.continueButton);
                    this.gameOverLabel.alpha = 0;
                    this.bBackground.alpha = 0;
                    this.backButton.alpha = 0;
                    this.continueButton.alpha = 0;
                    this.continueLabel.alpha = 0;
                }
            }
            if (managers.Game.currentScene == config.Scene.OVER) {
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.bBackground);
                this.bCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.eCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.lCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
            }
            if (managers.Game.currentScene == config.Scene.OPTIONS) {
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.bBackground);
                this.bCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.eCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.lCoins.forEach(function (c) {
                    c.scaleX = 0.75;
                    c.scaleY = 0.75;
                    _this.addChild(c);
                });
                this.addChild(this.controlPanel);
                this.addChild(this.infoPanel);
                this.addChild(this.info1);
                this.addChild(this.controls);
            }
            this.Power = 0;
            this.Score = 0;
            this.HighScore = 0;
            this.ScoreMult = 1;
            this.P1Power = 0;
            this.P1Score = 0;
            this.P1HighScore = 0;
            this.P1ScoreMult = 1;
            this.P2Power = 0;
            this.P2Score = 0;
            this.P2HighScore = 0;
            this.P2ScoreMult = 1;
        };
        return HUD;
    }(createjs.Container));
    managers.HUD = HUD;
})(managers || (managers = {}));
//# sourceMappingURL=hud.js.map