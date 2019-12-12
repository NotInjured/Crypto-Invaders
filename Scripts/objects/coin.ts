module objects {
    export class Coins extends objects.GameObject{

        private coin:string;
        private distance:number;
        private dir:math.Vec2;
        private position:math.Vec2;
        private isDropped:boolean = false;
        private enemyDropped:boolean = false;
        public p1: boolean = false
        public p2: boolean = false

        get Dir():math.Vec2{
            return this.dir;
        }

        set Dir(d:math.Vec2){
            this.dir = d;
        }

        get Position():math.Vec2{
            return this.position;
        }

        set Position(p:math.Vec2){
            this.position = p;
        }

        get IsDropped():boolean{
            return this.isDropped;
        }

        set IsDropped(d:boolean){
            this.isDropped = d;
        }

        get EnemyDropped():boolean{
            return this.enemyDropped;
        }

        set EnemyDropped(d:boolean){
            this.enemyDropped = d;
        }

        constructor(sprite){
            super(sprite)

            this.coin = sprite;
            this.Start()
        }


        public Start():void{
            if(!this.isDropped){
                switch(this.coin){
                    case "B_coin":
                        this.x = Math.floor(Math.random() * (712 - 370 + 1) + 370);
                        this.y = Math.floor(Math.random() * -720) + -20;
                    break;
                    case "L_coin":
                        this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                        this.y = Math.floor(Math.random() * -720) + -50;
                    break;
                    case "E_coin":
                        this.x = Math.floor(Math.random() * (1050 - 745 + 1) + 745);
                        this.y = Math.floor(Math.random() * -720) + -20;
                    break;
                }
            }
            if(this.isDropped){
                this.x = 5000
                this.y = 5000
            }
        }
        public Update():void{
            this.Move()
        }
        public Main():void{}

        public Reset():void{
            if(!this.isDropped){
                switch(this.coin){
                    case "B_coin":
                        this.x = Math.floor(Math.random() * (712 - 370 + 1) + 370);
                        this.y = Math.floor(Math.random() * -720) + -20;
                    break;
                    case "L_coin":
                        this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                        this.y = Math.floor(Math.random() * -720) + -50;
                    break;
                    case "E_coin":
                        this.x = Math.floor(Math.random() * (1050 - 745 + 1) + 745);
                        this.y = Math.floor(Math.random() * -720) + -20;
                    break;
                }
            }
            if(this.isDropped){
                this.x = 5000
                this.y = 5000
                this.enemyDropped = false;
            }
        }

        public Move():void{
            if(!this.isDropped){
                this.y += 3;

                if(this.y > 730)
                    this.Reset()
            }

            if(this.isDropped && this.dir != undefined && this.enemyDropped){
                this.x += this.dir.x
                this.y += this.dir.y
            }
        }

        public FindPlayer(player:objects.Player):void{
            this.position = new math.Vec2(this.x, this.y);
            let playerPos = new math.Vec2(player.x-10, player.y-10)
            this.distance =  math.Vec2.Distance(playerPos,this.position)
            this.dir = new math.Vec2(
                ((playerPos.x - this.position.x) / this.distance) * 5,
                ((playerPos.y - this.position.y) / this.distance) * 5
            )
        }
    }
}