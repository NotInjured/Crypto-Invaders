module objects {
    export class Image extends createjs.Sprite{
        constructor(imageString:string, x:number = 0, y:number = 0) {
            super(managers.Game.textureSprite, imageString);

            // Set default position
            this.x = x;
            this.y = y;
        }
    }
}