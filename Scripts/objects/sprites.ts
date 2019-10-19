module objects {
    export class Sprite extends objects.GameObject{
        constructor(imageString, x:number, y:number) {
            super(imageString);

            // Set default position
            this.x = x;
            this.y = y;
        }
    }
}