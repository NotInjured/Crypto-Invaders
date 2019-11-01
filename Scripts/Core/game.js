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
            [1, 1, 190, 49, 0, 95, 24.5],
            [1, 52, 190, 49, 0, 95, 24.5],
            [1, 103, 190, 49, 0, 95, 24.5],
            [1, 154, 190, 49, 0, 95, 24.5],
            [1, 205, 190, 49, 0, 95, 24.5],
            [1, 256, 190, 49, 0, 95, 24.5],
            [193, 1, 45, 48, 0, 22.5, 24],
            [1, 307, 45, 48, 0, 22.5, 24],
            [193, 51, 45, 48, 0, 22.5, 24],
            [1, 357, 45, 48, 0, 22.5, 24],
            [48, 307, 45, 48, 0, 22.5, 24],
            [193, 101, 45, 48, 0, 22.5, 24],
            [1, 407, 45, 48, 0, 22.5, 24],
            [48, 357, 45, 48, 0, 22.5, 24],
            [95, 307, 45, 48, 0, 22.5, 24],
            [193, 151, 41, 48, 0, 20.5, 24],
            [1, 457, 41, 48, 0, 20.5, 24],
            [48, 407, 41, 48, 0, 20.5, 24],
            [95, 357, 40, 48, 0, 22.5, 24],
            [142, 307, 40, 48, 0, 22.5, 24],
            [193, 201, 40, 48, 0, 22.5, 24],
            [1, 507, 35, 48, 0, 17.5, 24],
            [44, 457, 35, 48, 0, 17.5, 24],
            [91, 407, 35, 48, 0, 17.5, 24],
            [137, 357, 35, 48, 0, 17.5, 24],
            [193, 251, 35, 48, 0, 17.5, 24],
            [1, 557, 35, 48, 0, 17.5, 24],
            [38, 507, 34, 43, 0, 17, 21.5],
            [81, 457, 34, 43, 0, 17, 21.5],
            [128, 407, 34, 43, 0, 17, 21.5],
            [38, 552, 34, 43, 0, 17, 21.5],
            [230, 251, 21, 30, 0, 10.5, 15],
            [230, 283, 21, 21, 0, 10.5, 10.5],
            [174, 357, 17, 48, 0, 7.5, 24],
            [164, 407, 34, 43, 0, 17, 21.5],
            [184, 307, 17, 48, 0, 7.5, 24],
            [193, 357, 17, 48, 0, 7.5, 24],
            [200, 407, 34, 43, 0, 17, 21.5],
            [1, 607, 16, 17, 0, 8, 8.5],
            [203, 301, 25, 25, 0, 12.5, 12.5],
            [230, 306, 21, 21, 0, 10.5, 10.5],
            [203, 328, 25, 25, 0, 12.5, 12.5],
            [212, 355, 31, 32, 0, 15.5, 16],
            [230, 329, 12, 24, 0, 6, 12],
            [128, 452, 42, 30, 0, 21, 15],
            [172, 452, 34, 29, 0, 17, 14.5],
            [208, 452, 28, 29, 0, 14, 14.5],
            [212, 389, 26, 14, 0, 13, 7],
            [236, 151, 15, 18, 0, 7.5, 9],
            [236, 171, 15, 15, 0, 7.5, 7.5],
            [236, 188, 15, 15, 0, 7.5, 7.5],
            [235, 205, 16, 19, 0, 8, 9.5],
            [235, 226, 16, 18, 0, 8, 9],
            [240, 1, 11, 13, 0, 6, 7],
            [117, 457, 9, 14, 0, 4.5, 7],
            [38, 597, 30, 26, 0, 15, 13],
            [117, 484, 32, 31, 0, 16, 15.5],
            [151, 484, 31, 31, 0, 15.5, 15.5],
            [184, 483, 32, 31, 0, 16, 15.5],
            [218, 483, 31, 31, 0, 15.5, 15.5],
            [74, 507, 31, 32, 0, 15.5, 16],
            [74, 541, 31, 31, 0, 15.5, 15.5],
            [107, 517, 31, 31, 0, 15.5, 15.5],
            [140, 517, 30, 31, 0, 15, 15.5],
            [107, 550, 31, 28, 0, 15.5, 14],
            [140, 550, 30, 31, 0, 15, 15.5],
            [74, 574, 30, 28, 0, 15, 14],
            [70, 604, 20, 20, 0, 10, 10],
            [106, 580, 30, 28, 0, 15, 14],
            [92, 610, 26, 14, 0, 13, 7],
            [120, 610, 24, 14, 0, 12, 7],
            [107, 502, 8, 13, 0, 4, 6.5],
            [172, 517, 29, 30, 0, 14.5, 15],
            [172, 549, 29, 29, 0, 14.5, 14.5],
            [203, 516, 29, 29, 0, 14.5, 14.5],
            [203, 547, 28, 29, 0, 14, 14.5],
            [138, 583, 27, 13, 0, 13.5, 8],
            [234, 516, 14, 20, 0, 7, 10],
            [138, 598, 28, 7, 0, 14, 3.5],
            [146, 607, 20, 14, 0, 10, 7],
            [172, 580, 28, 7, 0, 14, 3.5],
            [168, 589, 20, 29, 0, 10, 14.5],
            [190, 589, 20, 29, 0, 10, 14.5],
            [19, 607, 14, 14, 0, 7, 7],
            [240, 16, 8, 19, 0, 4, 9.5],
            [212, 578, 14, 20, 0, 7, 10],
            [212, 600, 24, 13, 0, 12, 6.5],
            [212, 615, 13, 9, 0, 6.5, 4.5],
            [238, 538, 13, 14, 0, 6.5, 7],
            [238, 554, 13, 14, 0, 6.5, 7],
            [240, 37, 10, 14, 0, 5, 7],
            [240, 53, 10, 14, 0, 5, 7],
            [240, 69, 10, 14, 0, 5, 7],
            [240, 85, 9, 14, 0, 4.5, 7],
            [240, 101, 9, 14, 0, 4.5, 7],
            [240, 117, 9, 14, 0, 4.5, 7],
            [240, 133, 4, 16, 0, 2, 8],
            [227, 615, 22, 8, 0, 11, 4],
            [240, 389, 9, 14, 0, 4.5, 7],
            [236, 405, 14, 13, 0, 7, 8],
            [236, 420, 12, 14, 0, 6, 7],
            [236, 436, 9, 14, 0, 4.5, 7],
            [238, 452, 9, 14, 0, 4.5, 7],
            [238, 468, 12, 13, 0, 6, 6.5],
            [228, 578, 9, 14, 0, 4.5, 7],
            [117, 473, 8, 8, 0, 4, 4],
            [239, 570, 9, 14, 0, 4.5, 7]
        ],
        "animations": {
            "buttonBack": { "frames": [0] },
            "buttonHelp": { "frames": [1] },
            "buttonNext": { "frames": [2] },
            "buttonOptions": { "frames": [3] },
            "buttonStart": { "frames": [4] },
            "buttonUI": { "frames": [5] },
            "B_coin": { "frames": [6, 7, 15, 21, 33, 22, 18, 8],
                "speed": 0.25 },
            "E_coin": { "frames": [9, 10, 16, 23, 35, 24, 19, 11],
                "speed": 0.25 },
            "L_coin": { "frames": [12, 13, 17, 25, 36, 26, 20, 14],
                "speed": 0.25 },
            "Ship1": { "frames": [27, 28],
                "speed": 0.25 },
            "Ship2": { "frames": [29, 30],
                "speed": 0.25 },
            "Arc4": { "frames": [31] },
            "Laser3_Hit": { "frames": [32, 40] },
            "Ship3": { "frames": [34, 37],
                "speed": 0.25 },
            "Laser2_Shoot": { "frames": [38, 48] },
            "Laser4_Hit": { "frames": [39, 41] },
            "Enemy12": { "frames": [42] },
            "Laser4": { "frames": [43] },
            "Arc5": { "frames": [44] },
            "Arc5_Shoot": { "frames": [45] },
            "Enemy": { "frames": [46] },
            "Laser1_Hit": { "frames": [86, 47, 69, 76] },
            "Laser2_Hit": { "frames": [49, 50] },
            "Laser3_Shoot": { "frames": [51, 52] },
            "Arc1": { "frames": [53] },
            "Enemy10_Shot": { "frames": [54] },
            "Laser4_Shoot": { "frames": [55, 66] },
            "Enemy10": { "frames": [56] },
            "Enemy11": { "frames": [57] },
            "Enemy7": { "frames": [58] },
            "Enemy13": { "frames": [59] },
            "Enemy9": { "frames": [60] },
            "Enemy5": { "frames": [61] },
            "Enemy8": { "frames": [62] },
            "Enemy4": { "frames": [63] },
            "Laser5_Shoot": { "frames": [68, 64] },
            "Enemy6": { "frames": [65] },
            "Arc4_Shoot": { "frames": [67] },
            "Laser1_Shoot": { "frames": [79, 70] },
            "Enemy_Shot": { "frames": [71] },
            "Enemy3": { "frames": [72] },
            "Laser5_Hit": { "frames": [73, 74] },
            "Enemy2": { "frames": [75] },
            "Bullet": { "frames": [77] },
            "Thrusters": { "frames": [78, 80] },
            "Laser5": { "frames": [81, 82] },
            "Arc3": { "frames": [83] },
            "Laser3": { "frames": [84] },
            "Laser1": { "frames": [85] },
            "Arc2": { "frames": [87] },
            "Laser_Hit": { "frames": [103, 88, 89, 99] },
            "Enemy11_Shot": { "frames": [90] },
            "Enemy13_Shot": { "frames": [91] },
            "Enemy2_Shot": { "frames": [92] },
            "Enemy3_Shot": { "frames": [93] },
            "Enemy4_Shot": { "frames": [94] },
            "Enemy5_Shot": { "frames": [95] },
            "Laser2": { "frames": [96] },
            "Arc2_Shoot": { "frames": [97] },
            "Enemy6_Shot": { "frames": [98] },
            "Laser_Shoot": { "frames": [106, 100] },
            "Enemy7_Shot": { "frames": [101] },
            "Enemy8_Shot": { "frames": [102] },
            "Enemy9_Shot": { "frames": [104] },
            "Arc_Shoot": { "frames": [105] }
        }
    };
    assetManifest = [
        { id: "background", src: "./Assets/background.png" },
        { id: "bg1", src: "./Assets/9999.png" },
        { id: "aircraft", src: "./Assets/Aircraft.png" },
        { id: "panelInfo", src: "./Assets/panelInfo.png" },
        { id: "panelUI", src: "./Assets/panelUI.png" },
        { id: "HUD", src: "./Assets/HUD.png" },
        { id: "backgroundB", src: "./Assets/B_background.png" },
        { id: "backgroundL", src: "./Assets/L_background.png" },
        { id: "backgroundE", src: "./Assets/E_background.png" }
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