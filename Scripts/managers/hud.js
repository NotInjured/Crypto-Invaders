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
                this.playerLivesLabel.text = "x" + this.lives;
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
                this.playerBombsLabel.text = "Bombs x" + this.bombs;
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
                this.playerPowerLabel.text = "PWR " + this.power;
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
            this.playerLivesLabel = new objects.Label("", "18px", "OptimusPrinceps", "#000000", 380, 668, false);
            this.playerBombsLabel = new objects.Label("", "18px", "OptimusPrinceps", "#000000", 345, 690, false);
            this.playerScoreLabel = new objects.Label("", "20px", "OptimusPrinceps", "#000000", 565, 15, false);
            this.playerPowerLabel = new objects.Label("", "12px", "OptimusPrinceps", "#000000", 465, 20, false);
            this.scoreMultLabel = new objects.Label("", "18px", "OptimusPrinceps", "#000000", 650, 45, false);
            this.info1 = new objects.Label("Bottom Left: " + "\n" +
                "Player starts with 9/6/3 lives on Normal/Hard/Hell " + "\n" +
                "- Gain more lives by completing stages (Max:10)" + "\n\n" +
                "Player Starts with 1 bomb/special" + "\n" +
                "- Gain more bombs dropped by enemies or bosses " + "\n" + "(Max:3)" + "\n\n" +
                "Player starts with power level 1" + "\n" +
                "- Upgrade ship power level by collecting power-ups " + "\n" +
                "dropped by enemies/bosses (Max:10)" + "\n\n" +
                "Top Right: " + "\n" +
                "Score is gained by destroying enemies, bosses" + "\n" +
                "and collecting item drops " + "\n\n" +
                "Score multiplier is gained upon destroying enemies" + "\n" +
                "and is lost when dead", "14px", "OptimusPrimus", "#000000", 740, 235, false);
            this.controls = new objects.Label("Arrow Keys - Movement" + "\n\n" + "           X - Shoot"
                + "\n\n" + "   Z - Bombs (Disabled)" + "\n\n" + "    Space - Swap Ships" + "\n" + "            (Disabled)", "24px", "OptimusPrimus", "#000000", 50, 285, false);
            this.controlPanel = new objects.Image("panelUI", 4, 175);
            this.infoPanel = new objects.Image("panelInfo", 710, 175);
            this.playerLivesSprite = new objects.Sprite("Ship1", 370, 688);
            this.playerLivesSprite.scaleX = 0.5;
            this.playerLivesSprite.scaleY = 0.5;
            this.bBackground = new objects.Image("backgroundB", 343, 0);
            this.eBackground = new objects.Image("backgroundE", 712, 0);
            this.lBackground = new objects.Image("backgroundL", 0, 0);
            this.logo = new objects.Image("logo", 490, 600);
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
            }
            if (managers.Game.currentScene == config.Scene.GAME) {
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
                this.addChild(this.playerLivesSprite);
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
            this.ScoreMult = 0;
        };
        return HUD;
    }(createjs.Container));
    managers.HUD = HUD;
})(managers || (managers = {}));
//# sourceMappingURL=hud.js.map