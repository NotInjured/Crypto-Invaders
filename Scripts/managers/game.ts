module managers {        // Access to globally-required items
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static hud: managers.HUD;
        public static keyboardManager: managers.Keyboard;
        public static highscore: number;
        public static timer:number;
        public static textureSprite: createjs.SpriteSheet;
        public static ammoManager: managers.Ammo;
        public static enemyAmmoManager :managers.EnemyAmmo;
        public static currentSceneObject: objects.Scene;
        public static player:objects.Player;
        public static eType2:objects.Enemy;
        public static pause:boolean = false;
        public static over:boolean = false;
        public static difficulty:config.Difficulty;
        public static normal:boolean = true;
        public static hard:boolean = false;
        public static hell:boolean = false;
    }
}