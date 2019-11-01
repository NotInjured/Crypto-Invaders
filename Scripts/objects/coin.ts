module objects {
    export class Coins extends objects.GameObject{

        private coin:string;

        constructor(sprite, type){
            super(sprite)

            this.coin = type;
        }


        public Start():void{
            switch(this.coin){
                case "B":
                    this.x = Math.floor(Math.random() * (712 - 350 + 1) + 350);
                    this.y = Math.floor(Math.random() * -720) + -20;
                break;
                case "L":
                    this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                    this.y = Math.floor(Math.random() * -720) + -50;
                break;
                case "E":
                    this.x = Math.floor(Math.random() * (1050 - 720 + 1) + 720);
                    this.y = Math.floor(Math.random() * -720) + -20;
                break;
            }
        }
        public Update():void{
            this.Move();

            if(this.y > 740)
                this.Reset();
        }
        public Main():void{

        }
        public Reset():void{
            switch(this.coin){
                case "B":
                    this.x = Math.floor(Math.random() * (712 - 350 + 1) + 350);
                    this.y = Math.floor(Math.random() * -720) + -20;
                break;
                case "L":
                    this.x = Math.floor(Math.random() * (343 - 5 + 1) + 5);
                    this.y = Math.floor(Math.random() * -720) + -20;
                break;
                case "E":
                    this.x = Math.floor(Math.random() * (1050 - 720 + 1) + 720);
                    this.y = Math.floor(Math.random() * -720) + -20;
                break;
            }
        }

        public Move():void{
            this.y += 3;
        }
    }
}