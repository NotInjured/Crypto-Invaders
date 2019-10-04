module objects {
    export class Image extends createjs.Bitmap {
        constructor(imageString:string, x:number = 0, y:number = 0) {
            super(imageString);

            // Set default position
            this.x = x;
            this.y = y;
        }
    }
}