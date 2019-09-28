module objects {
    export class Image extends createjs.Bitmap {
        constructor(assetManager:createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0) {
            super(assetManager.getResult(imageString));

            // Set default position
            this.x = x;
            this.y = y;
        }
    }
}