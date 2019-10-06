// Immediate Invoked Anonymous Function
/// <reference path="_references.ts"/>
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene and state information
    var currentScene;
    var currentState;
    var textureSpriteData;
    var textureSprite;
    var keyboardManager;
    textureSpriteData = {
        "images": [
            "./Assets/Sprites/CrpytoSpritesheet.png"
        ],
        "framerate": 20,
        "frames": [
            [1, 1, 480, 720, 0, 0, 0],
            [483, 1, 437, 456, 0, 218.5, 228],
            [483, 459, 437, 456, 0, 218.5, 228],
            [1, 723, 190, 49, 0, 95, 24.5],
            [1, 774, 190, 49, 0, 95, 24.5],
            [193, 723, 190, 49, 0, 95, 24.5],
            [1, 825, 190, 49, 0, 95, 24.5],
            [193, 774, 190, 49, 0, 95, 24.5],
            [193, 825, 190, 49, 0, 95, 24.5],
            [385, 723, 34, 43, 0, 17, 21.5],
            [385, 768, 34, 43, 0, 17, 21.5],
            [421, 723, 34, 43, 0, 17, 21.5],
            [385, 813, 34, 43, 0, 17, 21.5],
            [421, 768, 34, 43, 0, 17, 21.5],
            [421, 813, 34, 43, 0, 17, 21.5],
            [1, 876, 42, 30, 0, 21, 15],
            [45, 876, 31, 28, 0, 15.5, 14],
            [78, 876, 30, 28, 0, 15, 14],
            [110, 876, 30, 28, 0, 15, 14],
            [142, 876, 29, 29, 0, 14.5, 14.5],
            [173, 876, 29, 29, 0, 14.5, 14.5],
            [204, 876, 28, 29, 0, 14, 14.5],
            [234, 876, 28, 29, 0, 14, 14.5],
            [264, 876, 30, 26, 0, 15, 13],
            [457, 723, 24, 14, 0, 12, 7],
            [457, 739, 24, 13, 0, 12, 6.5],
            [457, 754, 21, 30, 0, 10.5, 15],
            [296, 876, 25, 25, 0, 12.5, 12.5],
            [296, 903, 27, 13, 0, 13.5, 8],
            [323, 876, 25, 25, 0, 12.5, 12.5],
            [457, 786, 20, 29, 0, 10, 14.5],
            [457, 817, 20, 29, 0, 10, 14.5],
            [350, 876, 21, 21, 0, 10.5, 10.5],
            [385, 858, 26, 14, 0, 13, 7],
            [413, 858, 26, 14, 0, 13, 7],
            [325, 903, 11, 13, 0, 6, 7],
            [350, 899, 16, 17, 0, 8, 8.5],
            [1, 908, 28, 7, 0, 14, 3.5],
            [373, 876, 21, 21, 0, 10.5, 10.5],
            [368, 899, 20, 14, 0, 10, 7],
            [396, 874, 16, 19, 0, 8, 9.5],
            [414, 874, 16, 18, 0, 8, 9],
            [264, 904, 28, 7, 0, 14, 3.5],
            [441, 858, 14, 14, 0, 7, 7],
            [457, 848, 12, 24, 0, 6, 12],
            [432, 874, 15, 18, 0, 7.5, 9],
            [449, 874, 14, 20, 0, 7, 10],
            [471, 848, 8, 19, 0, 4, 9.5],
            [465, 874, 14, 20, 0, 7, 10],
            [390, 899, 4, 16, 0, 2, 8],
            [396, 895, 15, 15, 0, 7.5, 7.5],
            [414, 894, 15, 15, 0, 7.5, 7.5],
            [431, 894, 12, 14, 0, 6, 7],
            [445, 896, 13, 9, 0, 6.5, 4.5],
            [460, 896, 9, 14, 0, 4.5, 7]
        ],
        "animations": {
            "HUD": { "frames": [0] },
            "panelInfo": { "frames": [1] },
            "panelUI": { "frames": [2] },
            "buttonBack": { "frames": [3] },
            "buttonHelp": { "frames": [4] },
            "buttonNext": { "frames": [5] },
            "buttonOptions": { "frames": [6] },
            "buttonStart": { "frames": [7] },
            "buttonUI": { "frames": [8] },
            "Ship1": { "frames": [9, 10],
                "speed": 0.25 },
            "Ship2": { "frames": [11, 12],
                "speed": 0.25 },
            "Ship3": { "frames": [13, 14],
                "speed": 0.25 },
            "Arc5": { "frames": [15] },
            "Laser5_Shoot": { "frames": [18, 16] },
            "Laser4_Shoot": { "frames": [23] },
            "Laser5_Hit": { "frames": [19, 20] },
            "Enemy": { "frames": [21] },
            "Enemy2": { "frames": [22] },
            "Laser1_Shoot": { "frames": [39, 24] },
            "Laser1_Hit": { "frames": [25, 33, 34, 28] },
            "Arc4": { "frames": [26] },
            "Laser4_Hit": { "frames": [27, 29] },
            "Laser5": { "frames": [30, 31] },
            "Laser3_Hit": { "frames": [32, 38] },
            "Arc1": { "frames": [35] },
            "Laser2_Shoot": { "frames": [36, 45] },
            "Thrusters": { "frames": [37, 42] },
            "Laser3_Shoot": { "frames": [40, 41] },
            "Arc3": { "frames": [43] },
            "Laser4": { "frames": [44] },
            "Bullet": { "frames": [46] },
            "Laser3": { "frames": [47] },
            "Laser1": { "frames": [48] },
            "Laser2": { "frames": [49] },
            "Laser2_Hit": { "frames": [50, 51] },
            "Laser_Shoot": { "frames": [54, 52],
                "speed": 0.3 },
            "Arc2": { "frames": [53] }
        }
    };
    assetManifest = [
        { id: "background", src: "./Assets/background.png" }
    ];
    function Init() {
        console.log("Initialization Start");
        // Start();
        textureSprite = new createjs.SpriteSheet(textureSpriteData);
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        // Set up default game state
        // Create a global reference to our stage object
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;
        managers.Game.assetManager = assetManager;
        managers.Game.textureSprite = textureSprite;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != managers.Game.currentScene) {
            console.log(managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function clickableButtonMouseClick() {
        console.log("AHHHHHHH");
    }
    function Main() {
        console.log("Game Start...");
        // Finite State Machine
        switch (managers.Game.currentScene) {
            case config.Scene.INTRO:
                stage.removeAllChildren();
                currentScene = new scenes.IntroScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OPTIONS:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.HELP:
                stage.removeAllChildren();
                currentScene = new scenes.HelpScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.INFO:
                stage.removeAllChildren();
                currentScene = new scenes.InfoScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map