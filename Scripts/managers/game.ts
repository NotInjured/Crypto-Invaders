module managers {        // Access to globally-required items
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static hud: managers.HUD;
        public static keyboardManager: managers.Keyboard;
        public static highScore: number;
        public static score: number;
        public static timer:number;
        public static textureSprite: createjs.SpriteSheet;
        public static bulletManager: managers.Bullet;
        public static enemyBulletManager :managers.EnemyBullet;
        public static missileManager: managers.Missile;
        public static coinsManager: managers.Coins;
        public static currentSceneObject: objects.Scene;
        public static player:objects.Player;
        public static eType2:objects.Enemy;
        public static pause:boolean = false;
        public static over:boolean = false;
        public static difficulty:config.Difficulty;
        public static normal:boolean = true;
        public static hard:boolean = false;
        public static hell:boolean = false;
        public static eEliteHp:number
        public static eMinionHp:number
        public static boss1Hp:number;
        public static boss2Hp:number;
        public static boss3_1Hp:number;
        public static boss3_2Hp:number;
        public static boss1IsDead:boolean = false;
        public static boss2IsDead:boolean = false;
        public static boss3_1IsDead:boolean = false;
        public static boss3_2IsDead:boolean = false;
        public static level1:boolean = true
        public static level2:boolean = false
        public static level3:boolean = false
        public static level1Completed:boolean = false
        public static level2Completed:boolean = false
        public static level3Completed:boolean = false
        public static ng:boolean = false
        public static p1: boolean = false
        public static p2: boolean = false
        public static p3: boolean = false
        public static p4: boolean = false
        public static p5: boolean = false
        public static single: boolean = false
        public static multi: boolean = false
        

    }
}