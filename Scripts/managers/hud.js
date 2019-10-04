var managers;
(function (managers) {
    var HUD = /** @class */ (function () {
        // Constructor
        function HUD() {
            this.Initialize();
        }
        Object.defineProperty(HUD.prototype, "Lives", {
            get: function () {
                return this.lives;
            },
            set: function (newLives) {
                this.lives = newLives;
                this.playerLivesLabel.text = "Lives x" + this.lives;
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
                this.playerBombsLabel.text = "PWR " + this.power;
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
        HUD.prototype.Initialize = function () {
            this.playerLivesLabel = new objects.Label("", "18px", "OptimusPrinceps", "#000000", 5, 667, false);
            this.playerBombsLabel = new objects.Label("", "18px", "OptimusPrinceps", "#000000", 5, 688, false);
            this.playerScoreLabel = new objects.Label("", "20px", "OptimusPrinceps", "#000000", 350, 15, false);
            this.playerPowerLabel = new objects.Label("", "18px", "OptimusPrinceps", "#000000", 465, 20, false);
            this.scoreMultLabel = new objects.Label("", "18px", "OptimusPrinceps", "#000000", 437, 45, false);
            this.Lives = 0;
            this.Bombs = 0;
            this.Power = 0;
            this.Score = 0;
            this.ScoreMult = 0;
        };
        return HUD;
    }());
    managers.HUD = HUD;
})(managers || (managers = {}));
//# sourceMappingURL=hud.js.map