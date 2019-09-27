module objects {
    export class Scene extends createjs.Container {
        // Variables
        public assetManager: createjs.LoadQueue;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super();

            this.assetManager = assetManager;
        }
        // Methods
        public Start():void {}
        public Update(): void {}
        public Main(): void {}
    }
}