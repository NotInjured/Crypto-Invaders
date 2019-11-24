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
        Object.defineProperty(HUD.prototype, "Bombs", {
            get: function () {
                return this.bombs;
            },
            set: function (newBombs) {
                this.bombs = newBombs;
                this.playerBombsLabel.text = "Bombs: " + this.bombs;
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
                this.playerBombsLabel.x = 745;
                this.playerBombsLabel.y = 350;
                this.diffLabel.x = 725;
                this.diffLabel.y = 400;
                managers.Game.score = this.Score;
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
                    this.backButton.on("click", this.backButtonClick);
                    this.continueButton.on("click", this.continueButtonClick);
                }
                if (managers.Game.level2 && managers.Game.level1Completed) {
                    this.bBackground.alpha = 0;
                    this.backButton.alpha = 0;
                    this.continueButton.alpha = 0;
                    this.gameOverLabel.alpha = 0;
                    managers.Game.keyboardManager.enabled = true;
                }
                if (managers.Game.level2 && managers.Game.level2Completed) {
                    this.gameOverLabel.alpha = 1;
                    this.bBackground.alpha = 1;
                    this.backButton.alpha = 1;
                    this.continueButton.alpha = 1;
                    managers.Game.keyboardManager.enabled = false;
                    this.backButton.on("click", this.backButtonClick);
                    this.continueButton.on("click", this.continueButtonClick);
                }
                if (managers.Game.level3 && managers.Game.level2Completed) {
                    this.bBackground.alpha = 0;
                    this.backButton.alpha = 0;
                    this.continueButton.alpha = 0;
                    this.gameOverLabel.alpha = 0;
                    managers.Game.keyboardManager.enabled = true;
                }
                if (managers.Game.level3 && managers.Game.level3Completed) {
                    this.gameOverLabel.alpha = 1;
                    this.bBackground.alpha = 1;
                    this.backButton.alpha = 1;
                    this.gameOverLabel.text = "Game Completed!";
                    managers.Game.keyboardManager.enabled = false;
                    //this.continueButton.alpha = 1
                    //this.continueLabel.alpha = 1
                    //this.continueLabel.x = 470
                    //this.continueLabel.y = 300
                    this.backButton.on("click", this.backButtonClick);
                    //this.continueButton.on("click", this.continueButtonClick)
                }
                if (managers.Game.level1 && managers.Game.level3Completed) {
                    this.bBackground.alpha = 0;
                    this.backButton.alpha = 0;
                    this.continueButton.alpha = 0;
                    this.gameOverLabel.alpha = 0;
                    if (managers.Game.ng) {
                        managers.Game.level1 = true;
                        managers.Game.level2 = false;
                        managers.Game.level3 = false;
                        managers.Game.level1Completed = false;
                        managers.Game.level2Completed = false;
                        managers.Game.level3Completed = false;
                        managers.Game.boss1IsDead = false;
                        managers.Game.boss2IsDead = false;
                        managers.Game.boss3_1IsDead = false;
                        managers.Game.boss3_2IsDead = false;
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
            }
            if (managers.Game.level2Completed && managers.Game.level2) {
                managers.Game.level2 = false;
                managers.Game.level3 = true;
            }
            if (managers.Game.level3Completed && managers.Game.level3) {
                managers.Game.level3 = false;
                managers.Game.level1 = true;
                managers.Game.ng = true;
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
            this.playerBombsLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 345, 690, false);
            this.playerScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 565, 15, false);
            this.playerPowerLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 465, 20, false);
            this.scoreMultLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 650, 45, false);
            this.highScoreLabel = new objects.Label("", "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.info1 = new objects.Label("Player starts with 9/6/3 lives on" + "\n" +
                "Normal/Hard/Hell" + "\n" +
                "+1 by completing stages" + "\n\n" +
                "Player Starts with 1 bomb/special" + "\n" +
                "+1 dropped by enemies or bosses " + "\n" + "(Max:5)" + "\n\n" +
                //"Player starts with power level 1" + "\n" + 
                //"- Upgrade ship power level by collecting power-ups "  + "\n" +
                //"dropped by enemies/bosses (Max:10)" + "\n\n" +
                "+Score by destroying enemies, bosses" + "\n" +
                "and collecting item drops " + "\n\n" +
                "+Multiplier by destroying enemies" + "\n" +
                "Reset to 1 on death", "20px", "OptimusPrimus", "#000000", 725, 165, false);
            this.controls = new objects.Label("Arrow Keys - Movement" + "\n\n" + "           X - Shoot"
                + "\n\n" + "   Z - Bombs (Disabled)" + "\n\n" + "Space - Swap Ships" + "\n" + "(Disabled)" + "\n\n" +
                "     Shift - Half-speed", "24px", "OptimusPrimus", "#000000", 50, 215, false);
            this.versionLabel = new objects.Label("Alpha Release 0.1", "12px", "OptimusPrimus", "#000000", 495, 450, false);
            if (managers.Game.normal)
                this.diff = "Normal";
            if (managers.Game.hard)
                this.diff = "Hard";
            if (managers.Game.hell)
                this.diff = "Hell";
            this.gameOverLabel = new objects.Label("Level Completed!", "36px", "OptimusPrinceps", "#000000", 530, 240, true);
            this.diffLabel = new objects.Label("Difficulty: " + this.diff, "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.continueLabel = new objects.Label("New Game+?", "24px", "OptimusPrinceps", "#000000", 565, 200, false);
            this.controlPanel = new objects.Image("panelUI", 1, 125);
            this.infoPanel = new objects.Image("panelInfo", 710, 125);
            this.playerLivesSprite = new Array();
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
                this.addChild(this.eBackground);
                this.addChild(this.lBackground);
                this.addChild(this.controlPanel);
                this.addChild(this.controls);
                this.addChild(this.playerLivesLabel);
                this.addChild(this.playerBombsLabel);
                this.addChild(this.playerScoreLabel);
                this.addChild(this.playerPowerLabel);
                this.addChild(this.scoreMultLabel);
                this.addChild(this.bBackground);
                this.addChild(this.gameOverLabel);
                this.addChild(this.playerScoreLabel);
                this.addChild(this.highScoreLabel);
                this.addChild(this.backButton);
                this.addChild(this.continueButton);
                this.addChild(this.diffLabel);
                //this.addChild(this.continueLabel)
                this.playerLivesSprite.forEach(function (s) {
                    _this.addChild(s);
                });
                this.gameOverLabel.alpha = 0;
                this.bBackground.alpha = 0;
                this.backButton.alpha = 0;
                this.continueButton.alpha = 0;
                this.continueLabel.alpha = 0;
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
        };
        return HUD;
    }(createjs.Container));
    managers.HUD = HUD;
})(managers || (managers = {}));
//# sourceMappingURL=hud.js.map