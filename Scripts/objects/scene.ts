module objects {
    export class Scene extends createjs.Container {
        // Variables
        public assetManager;
        // Constructor
        constructor() {
            super();

            this.assetManager = managers.Game.assetManager;
        }
        // Methods
        public Start():void {}
        public Update(): void {}
        public Main(): void {}
    }
}