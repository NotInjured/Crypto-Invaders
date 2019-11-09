module managers{
    export class Coins {
        private coinsCount:number;
        public Coin:objects.Coins[];
        public CurrentCoin:number;

        constructor() {
            this.Start();
        }
        public buildCoinsPool():void {
            // Initialize a pool of ammo assets
            for(let i = 0; i < this.coinsCount; i++){
                if(i % 2 == 0)
                    this.Coin[i] = new objects.Coins("B_coin")
                if(i % 3 == 0)
                    this.Coin[i] = new objects.Coins("L_coin")
                if(i % 2 == 1)
                    this.Coin[i] = new objects.Coins("E_coin")
            }
            
        }

        public GetCoin(): objects.Coins {
            let coin:objects.Coins = this.Coin[this.CurrentCoin];
            this.CurrentCoin++;
            if(managers.Game.coinsManager.CurrentCoin > 99) {
                managers.Game.coinsManager.CurrentCoin = 0;
            }

            return coin;
        }

        public Start():void {
            this.coinsCount =100;
            this.Coin = new Array<objects.Coins>();
            this.CurrentCoin = 0;
            this.buildCoinsPool();
        }
        public Update():void {
            this.Coin.forEach(coin => {
                coin.Update();
            });
        } 
    }
}