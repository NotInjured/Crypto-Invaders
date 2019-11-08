module objects {
    export class Coins extends objects.GameObject{

        private coin:string;
        private distance:number;
        private dir:math.Vec2;
        private position:math.Vec2;
        private isDropped:boolean;

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

        constructor(sprite){
            super(sprite)

            this.coin = sprite;

            this.Start()
        }


        public Start():void{
            if(managers.Game.currentScene == config.Scene.OPTIONS || 
                managers.Game.currentScene == config.Scene.START || 
                managers.Game.currentScene == config.Scene.OVER){
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
            if(managers.Game.currentScene == config.Scene.GAME)
                this.Update()
        }
        public Update():void{
            
            if(this.isDropped){
                this.FindPlayer();
                this.Move();
            }
            
            if(!this.isDropped){
                this.Move();

                if(this.y > 740)
                    this.Reset();
            }
            
        }
        public Main():void{

        }
        public Reset():void{
            if(managers.Game.currentScene == config.Scene.OPTIONS || 
                managers.Game.currentScene == config.Scene.START || 
                managers.Game.currentScene == config.Scene.OVER){
                    switch(this.coin){
                        case "B":
                            this.x = Math.floor(Math.random() * (712 - 370 + 1) + 370);
                            this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                        case "L":
                            this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                            this.y = Math.floor(Math.random() * -720) + -50;
                        break;
                        case "E":
                            this.x = Math.floor(Math.random() * (1050 - 745 + 1) + 745);
                            this.y = Math.floor(Math.random() * -720) + -20;
                        break;
                    }
                }
        }

        public Move():void{
            if(!this.isDropped)
                this.y += 3;
            if(this.isDropped){
                this.x += this.dir.x
                this.y += this.dir.y
            }
        }

        public FindPlayer():void{
            let playerPos = new math.Vec2(managers.Game.player.x, managers.Game.player.y)
            this.position = new math.Vec2(this.x, this.y);

            this.distance =  math.Vec2.Distance(playerPos,this.position)
            this.dir = new math.Vec2(
                ((playerPos.x - this.position.x) / this.distance) * 5,
                ((playerPos.y - this.position.y) / this.distance) * 5
            )
        }
    }
}