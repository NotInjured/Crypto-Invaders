var managers;
(function (managers) {
    var Coins = /** @class */ (function () {
        function Coins() {
            this.Start();
        }
        Coins.prototype.buildCoinsPool = function () {
            // Initialize a pool of ammo assets
            for (var i = 0; i < this.coinsCount; i++) {
                if (i % 2 == 0)
                    this.Coin[i] = new objects.Coins("B_coin");
                if (i % 3 == 0)
                    this.Coin[i] = new objects.Coins("L_coin");
                if (i % 2 == 1)
                    this.Coin[i] = new objects.Coins("E_coin");
            }
        };
        Coins.prototype.GetCoin = function () {
            var coin = this.Coin[this.CurrentCoin];
            this.CurrentCoin++;
            if (managers.Game.coinsManager.CurrentCoin > 99) {
                managers.Game.coinsManager.CurrentCoin = 0;
            }
            return coin;
        };
        Coins.prototype.Start = function () {
            this.coinsCount = 100;
            this.Coin = new Array();
            this.CurrentCoin = 0;
            this.buildCoinsPool();
        };
        Coins.prototype.Update = function () {
            this.Coin.forEach(function (coin) {
                coin.Update();
            });
        };
        return Coins;
    }());
    managers.Coins = Coins;
})(managers || (managers = {}));
//# sourceMappingURL=coins.js.map