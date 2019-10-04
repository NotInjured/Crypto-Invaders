module managers {        // Access to globally-required items
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static hud: managers.HUD;
        public static keyboardManager: managers.Keyboard;
        public static highscore: number;
        public static textureSprite: createjs.SpriteSheet;
        public static ammoManager: managers.Ammo;
        public static currentSceneObject: objects.Scene;
    }
}