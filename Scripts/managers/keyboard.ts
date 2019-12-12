module managers {
    export class Keyboard {
        // Variables
        public SmoveUp: boolean;
        public SmoveDown: boolean;
        public SmoveLeft: boolean;
        public SmoveRight: boolean;
        public Sshoot: boolean;
        public enabled: boolean; 
        public Sswap:boolean;
        public Sshift:boolean;

        public P1moveUp: boolean;
        public P1moveDown: boolean;
        public P1moveLeft: boolean;
        public P1moveRight: boolean;
        public P1shoot: boolean;
        public P1swap:boolean;
        public P1shift:boolean;

        public P2moveUp: boolean;
        public P2moveDown: boolean;
        public P2moveLeft: boolean;
        public P2moveRight: boolean;
        public P2shoot: boolean;
        public P2swap:boolean;
        public P2shift:boolean;

        public cooldown:number;
        public counter:number;

        // Constructor
        constructor() {
            this.enabled = true;

            this.cooldown = 1000;
            this.counter = 0;
            // Listen for keyup and keydown events through DOM
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Methods
        public onKeyDown(event:KeyboardEvent):void {
            if(managers.Game.single){
                switch(event.keyCode) {
                    case config.Keys.UP_ARROW:
                        this.SmoveUp = true;
                    break;
                    case config.Keys.LEFT_ARROW:
                        this.SmoveLeft = true;
                    break;
                    case config.Keys.DOWN_ARROW:
                        this.SmoveDown = true;
                    break;
                    case config.Keys.RIGHT_ARROW:
                        this.SmoveRight = true;
                    break;
                    case config.Keys.X:
                        this.Sshoot = true;
                    break;
                    case config.Keys.SPACE:
                        this.Sswap = true;
                    break;
                    case config.Keys.SHIFT:
                        this.Sshift = true;
                    break;
                }
            }
            
            if(managers.Game.multi){
                switch(event.keyCode) {
                    // P1
                    case config.Keys.W:
                        this.P1moveUp = true;
                    break;
                    case config.Keys.A:
                        this.P1moveLeft = true;
                    break;
                    case config.Keys.S:
                        this.P1moveDown = true;
                    break;
                    case config.Keys.D:
                        this.P1moveRight = true;
                    break;
                    case config.Keys.V:
                        this.P1shoot = true;
                    break;
                    case config.Keys.SPACE:
                        this.P1swap = true;
                    break;
                    case config.Keys.SHIFT:
                        this.P1shift = true;
                    break;

                    // P2
                    case config.Keys.UP:
                        this.SmoveUp = true;
                    break;
                    case config.Keys.LEFT:
                        this.SmoveLeft = true;
                    break;
                    case config.Keys.DOWN:
                        this.SmoveDown = true;
                    break;
                    case config.Keys.RIGHT:
                        this.SmoveRight = true;
                    break;
                    case config.Keys.NUM1:
                        this.Sshoot = true;
                    break;
                    case config.Keys.NUM0:
                        this.Sswap = true;
                    break;
                    case config.Keys.NUMDOT:
                        this.Sshift = true;
                    break;
                }
            }
        }

        public onKeyUp(event:KeyboardEvent):void {
            if(managers.Game.single){
                switch(event.keyCode) {
                    case config.Keys.UP_ARROW:
                        this.SmoveUp = false;
                    break;
                    case config.Keys.LEFT_ARROW:
                        this.SmoveLeft = false;
                    break;
                    case config.Keys.DOWN_ARROW:
                        this.SmoveDown = false;
                    break;
                    case config.Keys.RIGHT_ARROW:
                        this.SmoveRight = false;
                    break;
                    case config.Keys.X:
                        this.Sshoot = false;
                    break;
                    case config.Keys.SPACE:
                        this.Sswap = false;
                    break;
                    case config.Keys.SHIFT:
                        this.Sshift = false;
                    break;
                }
            }
            
            if(managers.Game.multi){
                switch(event.keyCode) {
                    // P1
                    case config.Keys.W:
                        this.P1moveUp = false;
                    break;
                    case config.Keys.A:
                        this.P1moveLeft = false;
                    break;
                    case config.Keys.S:
                        this.P1moveDown = false;
                    break;
                    case config.Keys.D:
                        this.P1moveRight = false;
                    break;
                    case config.Keys.V:
                        this.P1shoot = false;
                    break;
                    case config.Keys.SPACE:
                        this.P1swap = false;
                    break;
                    case config.Keys.SHIFT:
                        this.P1shift = false;
                    break;

                    // P2
                    case config.Keys.UP:
                        this.SmoveUp = false;
                    break;
                    case config.Keys.LEFT:
                        this.SmoveLeft = false;
                    break;
                    case config.Keys.DOWN:
                        this.SmoveDown = false;
                    break;
                    case config.Keys.RIGHT:
                        this.SmoveRight = false;
                    break;
                    case config.Keys.NUM1:
                        this.Sshoot = false;
                    break;
                    case config.Keys.NUM0:
                        this.Sswap = false;
                    break;
                    case config.Keys.NUMDOT:
                        this.Sshift = false;
                    break;
                }
            }
        }
    }
}