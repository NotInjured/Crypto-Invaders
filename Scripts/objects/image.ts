module objects {
    export class Image extends window.createjs.Bitmap{
        constructor(imageString:string, x:number = 0, y:number = 0) {
            super(managers.Game.assetManager.getResult(imageString));

            // Set default position
            this.x = x;
            this.y = y;
        }
    }
}