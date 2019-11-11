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
        ], "framerate": 20,
        "frames": [
            [1, 1, 192, 192, 0, 96, 96],
            [1, 195, 192, 192, 0, 96, 96],
            [1, 389, 192, 192, 0, 96, 96],
            [1, 583, 192, 192, 0, 96, 96],
            [1, 777, 192, 192, 0, 96, 96],
            [1, 971, 192, 192, 0, 96, 96],
            [1, 1165, 42, 30, 0, 21, 15],
            [45, 1165, 34, 29, 0, 17, 14.5],
            [81, 1165, 32, 31, 0, 16, 15.5],
            [115, 1165, 32, 31, 0, 16, 15.5],
            [149, 1165, 31, 31, 0, 15.5, 15.5],
            [182, 1165, 31, 31, 0, 15.5, 15.5],
            [195, 1, 190, 191, 0, 94, 95],
            [195, 194, 187, 188, 0, 91, 92],
            [195, 384, 182, 184, 0, 86, 88],
            [215, 570, 170, 126, 0, 82, 44],
            [384, 194, 190, 49, 0, 95, 24.5],
            [387, 1, 190, 49, 0, 95, 24.5],
            [387, 52, 190, 49, 0, 95, 24.5],
            [387, 103, 190, 49, 0, 95, 24.5],
            [384, 245, 190, 49, 0, 95, 24.5],
            [384, 296, 190, 49, 0, 95, 24.5],
            [384, 347, 190, 49, 0, 95, 24.5],
            [379, 398, 190, 49, 0, 95, 24.5],
            [379, 449, 131, 66, 0, 81, 59],
            [379, 517, 45, 48, 0, 22.5, 24],
            [387, 567, 168, 171, 0, 86, 78],
            [512, 449, 126, 111, 0, 63, 55],
            [426, 517, 45, 48, 0, 22.5, 24],
            [473, 517, 35, 48, 0, 17.5, 24],
            [576, 154, 159, 142, 0, 90, 63],
            [387, 154, 31, 32, 0, 15.5, 16],
            [420, 154, 31, 32, 0, 15.5, 16],
            [453, 154, 31, 31, 0, 15.5, 15.5],
            [486, 154, 31, 31, 0, 15.5, 15.5],
            [519, 154, 31, 28, 0, 15.5, 14],
            [552, 154, 21, 30, 0, 10.5, 15],
            [519, 184, 28, 7, 0, 14, 3.5],
            [579, 1, 146, 147, 0, 73, 73],
            [727, 1, 146, 144, 0, 73, 73],
            [576, 298, 146, 144, 0, 73, 73],
            [195, 698, 155, 156, 0, 73, 73],
            [195, 570, 17, 48, 0, 7.5, 24],
            [195, 620, 17, 48, 0, 7.5, 24],
            [195, 670, 12, 24, 0, 6, 12],
            [209, 670, 4, 16, 0, 2, 8],
            [352, 740, 145, 146, 0, 73, 72],
            [352, 698, 30, 31, 0, 15, 15.5],
            [352, 731, 28, 7, 0, 14, 3.5],
            [195, 856, 145, 146, 0, 73, 72],
            [499, 740, 145, 146, 0, 73, 72],
            [640, 444, 143, 146, 0, 71, 72],
            [724, 298, 132, 140, 0, 63, 72],
            [737, 147, 143, 145, 0, 70, 73],
            [875, 1, 41, 48, 0, 20.5, 24],
            [875, 51, 41, 48, 0, 20.5, 24],
            [875, 101, 34, 43, 0, 17, 21.5],
            [557, 562, 45, 48, 0, 22.5, 24],
            [604, 562, 17, 48, 0, 7.5, 24],
            [623, 562, 14, 20, 0, 7, 10],
            [623, 584, 14, 20, 0, 7, 10],
            [639, 592, 137, 145, 0, 64, 73],
            [557, 612, 45, 48, 0, 22.5, 24],
            [557, 662, 45, 48, 0, 22.5, 24],
            [557, 712, 30, 26, 0, 15, 13],
            [589, 712, 27, 13, 0, 13.5, 8],
            [589, 727, 22, 8, 0, 11, 4],
            [613, 727, 13, 9, 0, 6.5, 4.5],
            [604, 612, 30, 31, 0, 15, 15.5],
            [604, 645, 29, 30, 0, 14.5, 15],
            [604, 677, 29, 29, 0, 14.5, 14.5],
            [618, 708, 16, 17, 0, 8, 8.5],
            [628, 727, 8, 8, 0, 4, 4],
            [646, 739, 136, 145, 0, 63, 73],
            [778, 592, 136, 145, 0, 63, 73],
            [785, 440, 128, 137, 0, 65, 63],
            [858, 294, 45, 48, 0, 22.5, 24],
            [858, 344, 45, 48, 0, 22.5, 24],
            [858, 394, 34, 43, 0, 17, 21.5],
            [894, 394, 20, 29, 0, 10, 14.5],
            [894, 425, 14, 13, 0, 7, 8],
            [882, 146, 34, 43, 0, 17, 21.5],
            [882, 191, 34, 43, 0, 17, 21.5],
            [882, 236, 34, 43, 0, 17, 21.5],
            [882, 281, 12, 8, 0, 10, -27],
            [896, 281, 8, 8, 0, 4, 4],
            [905, 291, 8, 19, 0, 4, 9.5],
            [906, 281, 8, 8, 0, 4, 4],
            [905, 312, 9, 14, 0, 4.5, 7],
            [905, 328, 11, 13, 0, 6, 7],
            [905, 343, 8, 8, 0, 4, 4],
            [905, 353, 8, 8, 0, 4, 4],
            [905, 363, 8, 8, 0, 4, 4],
            [905, 373, 8, 8, 0, 4, 4],
            [905, 383, 8, 8, 0, 4, 4],
            [785, 579, 8, 8, 0, 4, 4],
            [795, 579, 8, 8, 0, 4, 4],
            [805, 579, 8, 8, 0, 4, 4],
            [815, 579, 8, 8, 0, 4, 4],
            [825, 579, 8, 8, 0, 4, 4],
            [646, 886, 135, 145, 0, 63, 73],
            [783, 886, 132, 145, 0, 63, 73],
            [784, 739, 132, 139, 0, 63, 72],
            [342, 888, 135, 145, 0, 63, 73],
            [195, 1004, 135, 145, 0, 63, 73],
            [479, 888, 126, 124, 0, 63, 62],
            [479, 1014, 126, 122, 0, 63, 61],
            [332, 1035, 126, 120, 0, 63, 60],
            [215, 1151, 34, 43, 0, 17, 21.5],
            [251, 1151, 30, 28, 0, 15, 14],
            [283, 1151, 30, 28, 0, 15, 14],
            [315, 1151, 15, 18, 0, 7.5, 9],
            [460, 1035, 16, 19, 0, 8, 9.5],
            [460, 1056, 16, 18, 0, 8, 9],
            [460, 1076, 15, 15, 0, 7.5, 7.5],
            [460, 1093, 15, 15, 0, 7.5, 7.5],
            [460, 1110, 14, 14, 0, 7, 7],
            [460, 1126, 13, 14, 0, 6.5, 7],
            [607, 1033, 126, 117, 0, 63, 58],
            [735, 1033, 118, 112, 0, 59, 45],
            [475, 1138, 45, 48, 0, 22.5, 24],
            [522, 1138, 45, 48, 0, 22.5, 24],
            [569, 1138, 35, 48, 0, 17.5, 24],
            [460, 1142, 13, 14, 0, 6.5, 7],
            [607, 888, 35, 48, 0, 17.5, 24],
            [607, 938, 35, 48, 0, 17.5, 24],
            [607, 988, 29, 29, 0, 14.5, 14.5],
            [332, 1157, 28, 29, 0, 14, 14.5],
            [315, 1171, 12, 14, 0, 6, 7],
            [251, 1181, 26, 14, 0, 13, 7],
            [279, 1181, 26, 14, 0, 13, 7],
            [362, 1157, 28, 29, 0, 14, 14.5],
            [392, 1157, 25, 25, 0, 12.5, 12.5],
            [419, 1157, 25, 25, 0, 12.5, 12.5],
            [446, 1158, 20, 29, 0, 10, 14.5],
            [855, 1033, 41, 48, 0, 20.5, 24],
            [855, 1083, 40, 48, 0, 22.5, 24],
            [855, 1133, 40, 48, 0, 22.5, 24],
            [735, 1147, 40, 48, 0, 22.5, 24],
            [777, 1147, 35, 48, 0, 17.5, 24],
            [814, 1147, 35, 48, 0, 17.5, 24],
            [851, 1183, 24, 13, 0, 12, 6.5],
            [877, 1183, 12, 13, 0, 6, 6.5],
            [606, 1152, 24, 14, 0, 12, 7],
            [632, 1152, 21, 21, 0, 10.5, 10.5],
            [606, 1168, 21, 21, 0, 10.5, 10.5],
            [655, 1152, 20, 20, 0, 10, 10],
            [677, 1152, 20, 14, 0, 10, 7]
        ],
        "animations": {
            "tile": { "frames": [41, 13, 0, 1, 2, 3, 4, 5, 12, 14, 26, 30, 15, 24], "speed": 0.5 },
            "Arc5": { "frames": [6] },
            "Arc5_Shoot": { "frames": [7] },
            "Enemy5": { "frames": [8] },
            "Enemy8": { "frames": [9] },
            "Enemy11": { "frames": [10] },
            "Enemy2": { "frames": [11] },
            "buttonBack": { "frames": [16] },
            "buttonDecrease": { "frames": [17] },
            "buttonHelp": { "frames": [18] },
            "buttonIncrease": { "frames": [19] },
            "buttonNext": { "frames": [20] },
            "buttonOptions": { "frames": [21] },
            "buttonStart": { "frames": [22] },
            "buttonUI": { "frames": [23] },
            "B_coin": { "frames": [25, 28, 54, 29, 42, 122, 136, 57], "speed": 0.25 },
            "Shield": { "frames": [27, 118, 107, 106, 105, 75, 51, 49, 50, 46, 38, 39, 40, 53, 61, 73, 74, 100, 103, 104, 101, 52, 102, 119, 84], "speed": 0.5 },
            "Enemy10": { "frames": [31] },
            "Enemy7": { "frames": [32] },
            "Enemy6": { "frames": [33] },
            "Enemy9": { "frames": [34] },
            "Laser5_Shoot": { "frames": [110, 35] },
            "Arc4": { "frames": [36] },
            "Thrusters": { "frames": [37, 48] },
            "E_coin": { "frames": [62, 63, 55, 124, 43, 125, 137, 76], "speed": 0.25 },
            "Laser4": { "frames": [44] },
            "Laser2": { "frames": [45] },
            "Enemy1": { "frames": [47] },
            "Ship1": { "frames": [56, 78], "speed": 0.25 },
            "L_coin": { "frames": [77, 120, 135, 139, 58, 140, 138, 121], "speed": 0.25 },
            "Bullet": { "frames": [59] },
            "Laser1": { "frames": [60] },
            "Laser4_Shoot": { "frames": [64, 109] },
            "Laser1_Hit": { "frames": [141, 129, 130, 65], "speed": 0.25 },
            "Arc2_Shoot": { "frames": [66] },
            "Arc2": { "frames": [67] },
            "Enemy4": { "frames": [68] },
            "Enemy3": { "frames": [69] },
            "Laser5_Hit": { "frames": [70, 126] },
            "Laser2_Shoot": { "frames": [71, 111] },
            "Arc_Shoot": { "frames": [72] },
            "Laser5": { "frames": [79, 134] },
            "Laser_Hit": { "frames": [142, 117, 123, 80], "speed": 0.25 },
            "Ship2": { "frames": [81, 82], "speed": 0.25 },
            "Ship3": { "frames": [83, 108], "speed": 0.25 },
            "Enemy10_Shot": { "frames": [85] },
            "Laser3": { "frames": [86] },
            "Enemy12_Shot": { "frames": [87] },
            "Laser_Shoot": { "frames": [88, 128] },
            "Arc1": { "frames": [89] },
            "Enemy13_Shot": { "frames": [90] },
            "Enemy1_Shot": { "frames": [91] },
            "Enemy2_Shot": { "frames": [92] },
            "Enemy3_Shot": { "frames": [93] },
            "Enemy4_Shot": { "frames": [94] },
            "Enemy5_Shot": { "frames": [95] },
            "Enemy6_Shot": { "frames": [96] },
            "Enemy7_Shot": { "frames": [97] },
            "Enemy8_Shot": { "frames": [98] },
            "Enemy9_Shot": { "frames": [99] },
            "Laser3_Shoot": { "frames": [112, 113] },
            "Laser2_Hit": { "frames": [114, 115] },
            "Arc3": { "frames": [116] },
            "Enemy12": { "frames": [127] },
            "Enemy13": { "frames": [131] },
            "Laser4_Hit": { "frames": [132, 133] },
            "Laser1_Shoot": { "frames": [147, 143] },
            "Laser3_Hit": { "frames": [144, 145] },
            "Arc4_Shoot": { "frames": [146] }
        }
    };
    assetManifest = [
        { id: "bg1", src: "./Assets/9999.png" },
        { id: "aircraft", src: "./Assets/Aircraft.png" },
        { id: "panelInfo", src: "./Assets/panelInfo.png" },
        { id: "panelUI", src: "./Assets/panelUI.png" },
        { id: "logo", src: "./Assets/Logo.png" },
        { id: "HUD", src: "./Assets/HUD.png" },
        { id: "backgroundB", src: "./Assets/B_background.png" },
        { id: "backgroundL", src: "./Assets/L_background.png" },
        { id: "backgroundE", src: "./Assets/E_background.png" },
        { id: "bgm", src: "./Assets/Sounds/Mysterious_Mountain.mp3" },
        { id: "bgm2", src: "./Assets/Sounds/RFN_III.ogg" },
        { id: "bgm3", src: "./Assets/Sounds/The_Truth_Never_Spoken.mp3" },
        { id: "playerDeath", src: "./Assets/Sounds/1516.mp3" },
        { id: "laser", src: "./Assets/Sounds/laser.mp3" },
        { id: "bossMusic", src: "./Assets/Sounds/Sudden_Death.ogg" },
        { id: "mainMenu", src: "./Assets/Sounds/cyberspace.exe.ogg" },
        { id: "hit", src: "./Assets/Sounds/hit.wav" }
    ];
    function Init() {
        console.log("Initialization Start");
        // Start();
        textureSprite = new window.createjs.SpriteSheet(textureSpriteData);
        assetManager = new window.createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new window.createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        window.createjs.Ticker.framerate = 60; // 60 FPS
        window.createjs.Ticker.on("tick", Update);
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
                currentScene = new scenes.OptionsScene();
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