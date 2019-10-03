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
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        HUD.prototype.Initialize = function () {
            this.lives = 3;
            this.bombs = 1;
            this.power = 1;
            this.score = 0;
            this.scoreMult = 1;
            this.playerLivesLabel = new objects.Label("Lives x" + this.Lives, "18px", "OptimusPrinceps", "#000000", 5, 667, false);
            this.playerBombsLabel = new objects.Label("Bombs x" + this.Bombs, "18px", "OptimusPrinceps", "#000000", 5, 688, false);
            this.playerScoreLabel = new objects.Label("" + this.score, "20px", "OptimusPrinceps", "#000000", 350, 15, false);
            this.playerPowerLabel = new objects.Label("" + this.power, "18px", "OptimusPrinceps", "#000000", 465, 20, false);
            this.scoreMultLabel = new objects.Label("x" + this.scoreMult, "18px", "OptimusPrinceps", "#000000", 437, 45, false);
        };
        return HUD;
    }());
    managers.HUD = HUD;
})(managers || (managers = {}));
//# sourceMappingURL=hud.js.map