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
            [1, 723, 190, 49, 0, 95, 24.5],
            [1, 774, 190, 49, 0, 95, 24.5],
            [1, 825, 190, 49, 0, 95, 24.5],
            [1, 876, 34, 43, 0, 17, 21.5],
            [37, 876, 34, 43, 0, 17, 21.5],
            [73, 876, 34, 43, 0, 17, 21.5],
            [109, 876, 34, 43, 0, 17, 21.5],
            [145, 876, 34, 43, 0, 17, 21.5],
            [181, 876, 34, 43, 0, 17, 21.5],
            [193, 723, 190, 49, 0, 95, 24.5],
            [193, 774, 190, 49, 0, 95, 24.5],
            [193, 825, 190, 49, 0, 95, 24.5],
            [217, 876, 42, 30, 0, 21, 15],
            [217, 908, 28, 7, 0, 14, 3.5],
            [247, 908, 28, 7, 0, 14, 3.5],
            [261, 876, 31, 28, 0, 15.5, 14],
            [277, 906, 27, 13, 0, 13.5, 8],
            [294, 876, 30, 28, 0, 15, 14],
            [306, 906, 24, 13, 0, 12, 6.5],
            [326, 876, 30, 28, 0, 15, 14],
            [332, 906, 14, 13, 0, 7, 8],
            [348, 906, 12, 13, 0, 6, 6.5],
            [358, 876, 30, 26, 0, 15, 13],
            [362, 904, 26, 14, 0, 13, 7],
            [385, 723, 29, 29, 0, 14.5, 14.5],
            [385, 754, 29, 29, 0, 14.5, 14.5],
            [385, 785, 28, 29, 0, 14, 14.5],
            [385, 816, 28, 29, 0, 14, 14.5],
            [385, 847, 25, 25, 0, 12.5, 12.5],
            [390, 874, 21, 30, 0, 10.5, 15],
            [390, 906, 11, 13, 0, 6, 7],
            [403, 906, 13, 9, 0, 6.5, 4.5],
            [412, 847, 25, 25, 0, 12.5, 12.5],
            [413, 874, 20, 29, 0, 10, 14.5],
            [418, 905, 26, 14, 0, 13, 7],
            [435, 874, 20, 29, 0, 10, 14.5],
            [446, 905, 24, 14, 0, 12, 7],
            [415, 785, 21, 21, 0, 10.5, 10.5],
            [415, 808, 21, 21, 0, 10.5, 10.5],
            [415, 831, 20, 14, 0, 10, 7],
            [437, 831, 14, 14, 0, 7, 7],
            [439, 847, 16, 19, 0, 8, 9.5],
            [416, 723, 12, 24, 0, 6, 12],
            [416, 749, 16, 18, 0, 8, 9],
            [416, 769, 13, 14, 0, 6.5, 7],
            [431, 769, 13, 14, 0, 6.5, 7],
            [430, 723, 14, 20, 0, 7, 10],
            [434, 745, 14, 20, 0, 7, 10],
            [446, 723, 16, 17, 0, 8, 8.5],
            [438, 785, 15, 18, 0, 7.5, 9],
            [446, 767, 15, 15, 0, 7.5, 7.5],
            [450, 742, 15, 15, 0, 7.5, 7.5],
            [464, 723, 12, 14, 0, 6, 7],
            [438, 805, 8, 19, 0, 4, 9.5],
            [448, 805, 9, 14, 0, 4.5, 7],
            [455, 784, 4, 16, 0, 2, 8],
            [483, 1, 437, 456, 0, 218.5, 228],
            [483, 459, 437, 456, 0, 218.5, 228]
        ],
        "animations": {
            "HUD": { "frames": [0] },
            "buttonBack": { "frames": [1] },
            "buttonHelp": { "frames": [2] },
            "buttonNext": { "frames": [3] },
            "Ship1": { "frames": [4, 5],
                "speed": 0.25 },
            "Ship2": { "frames": [6, 7],
                "speed": 0.25 },
            "Ship3": { "frames": [8, 9],
                "speed": 0.25 },
            "buttonOptions": { "frames": [10] },
            "buttonStart": { "frames": [11] },
            "buttonUI": { "frames": [12] },
            "Arc5": { "frames": [13] },
            "Thrusters": { "frames": [14, 15] },
            "Laser5_Shoot": { "frames": [20, 16] },
            "Laser1_Hit": { "frames": [19, 24, 35, 17] },
            "Laser4_Shoot": { "frames": [23] },
            "Laser_Hit": { "frames": [22, 45, 46, 21] },
            "Laser5_Hit": { "frames": [25, 26] },
            "Enemy": { "frames": [27] },
            "Enemy2": { "frames": [28] },
            "Laser4_Hit": { "frames": [29, 33] },
            "Arc4": { "frames": [30] },
            "Arc1": { "frames": [31] },
            "Arc2": { "frames": [32] },
            "Laser5": { "frames": [34, 36] },
            "Laser1_Shoot": { "frames": [40, 37] },
            "Laser3_Hit": { "frames": [38, 39] },
            "Arc3": { "frames": [41] },
            "Laser3_Shoot": { "frames": [42, 44] },
            "Laser4": { "frames": [43] },
            "Bullet": { "frames": [47] },
            "Laser1": { "frames": [48] },
            "Laser2_Shoot": { "frames": [49, 50] },
            "Laser2_Hit": { "frames": [51, 52] },
            "Laser_Shoot": { "frames": [55, 53],
                "speed": 0.25 },
            "Laser3": { "frames": [54] },
            "Laser2": { "frames": [56] },
            "panelInfo": { "frames": [57] },
            "panelUI": { "frames": [58] }
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
        managers.Game.currentSceneObject = currentScene;
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
        managers.Game.currentSceneObject = currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map