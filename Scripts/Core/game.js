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
            [0, 0, 192, 192, 0, 96, 96],
            [0, 192, 192, 192, 0, 96, 96],
            [0, 384, 143, 145, 0, 70, 73],
            [192, 0, 192, 192, 0, 96, 96],
            [192, 192, 192, 192, 0, 96, 96],
            [143, 384, 137, 145, 0, 64, 73],
            [280, 384, 136, 145, 0, 63, 73],
            [384, 0, 192, 192, 0, 96, 96],
            [384, 192, 192, 192, 0, 96, 96],
            [416, 384, 136, 145, 0, 63, 73],
            [576, 0, 190, 191, 0, 94, 95],
            [576, 191, 187, 188, 0, 91, 92],
            [766, 0, 182, 184, 0, 86, 88],
            [948, 0, 168, 171, 0, 86, 78],
            [1116, 0, 155, 156, 0, 73, 73],
            [552, 384, 135, 145, 0, 63, 73],
            [1271, 0, 159, 142, 0, 90, 63],
            [1430, 0, 170, 126, 0, 82, 44],
            [1600, 0, 146, 147, 0, 73, 73],
            [1746, 0, 145, 146, 0, 73, 72],
            [1891, 0, 128, 137, 0, 65, 63],
            [687, 379, 143, 146, 0, 71, 72],
            [1891, 137, 131, 66, 0, 81, 59],
            [1746, 146, 145, 146, 0, 73, 72],
            [1891, 203, 126, 111, 0, 63, 55],
            [766, 184, 190, 49, 0, 95, 24.5],
            [763, 233, 145, 146, 0, 73, 72],
            [830, 379, 135, 145, 0, 63, 73],
            [956, 171, 190, 49, 0, 95, 24.5],
            [956, 220, 190, 49, 0, 95, 24.5],
            [1146, 156, 146, 144, 0, 73, 73],
            [1292, 142, 146, 144, 0, 73, 73],
            [1438, 126, 135, 145, 0, 63, 73],
            [1573, 147, 132, 145, 0, 63, 73],
            [908, 269, 190, 49, 0, 95, 24.5],
            [908, 318, 190, 49, 0, 95, 24.5],
            [965, 367, 132, 140, 0, 63, 72],
            [1098, 300, 190, 49, 0, 95, 24.5],
            [1098, 349, 190, 49, 0, 95, 24.5],
            [1097, 398, 190, 49, 0, 95, 24.5],
            [1097, 447, 190, 49, 0, 95, 24.5],
            [1438, 271, 132, 139, 0, 63, 72],
            [1570, 292, 126, 120, 0, 63, 60],
            [1287, 412, 126, 117, 0, 63, 58],
            [1288, 300, 118, 112, 0, 59, 45],
            [1696, 292, 126, 122, 0, 63, 61],
            [1822, 314, 126, 124, 0, 63, 62],
            [1705, 147, 41, 48, 0, 20.5, 24],
            [1705, 195, 41, 48, 0, 20.5, 24],
            [1705, 243, 41, 48, 0, 20.5, 24],
            [908, 233, 38, 36, 0, 19, 18],
            [1098, 269, 32, 31, 0, 16, 15.5],
            [1948, 314, 45, 48, 0, 22.5, 24],
            [1948, 362, 45, 48, 0, 22.5, 24],
            [1993, 314, 29, 30, 0, 14.5, 15],
            [1993, 344, 29, 29, 0, 14.5, 14.5],
            [1993, 373, 29, 29, 0, 14.5, 14.5],
            [1406, 286, 32, 31, 0, 16, 15.5],
            [1948, 410, 45, 48, 0, 22.5, 24],
            [1413, 410, 45, 48, 0, 22.5, 24],
            [1413, 458, 45, 48, 0, 22.5, 24],
            [1458, 410, 45, 48, 0, 22.5, 24],
            [1458, 458, 45, 48, 0, 22.5, 24],
            [1503, 410, 45, 48, 0, 22.5, 24],
            [1503, 458, 45, 48, 0, 22.5, 24],
            [1548, 412, 40, 48, 0, 22.5, 24],
            [1588, 412, 40, 48, 0, 22.5, 24],
            [1628, 412, 40, 48, 0, 22.5, 24],
            [1548, 460, 35, 48, 0, 17.5, 24],
            [1583, 460, 35, 48, 0, 17.5, 24],
            [1618, 460, 35, 48, 0, 17.5, 24],
            [1292, 286, 26, 14, 0, 13, 7],
            [1318, 286, 26, 14, 0, 13, 7],
            [1993, 402, 17, 48, 0, 7.5, 24],
            [1406, 317, 17, 48, 0, 7.5, 24],
            [1668, 412, 17, 48, 0, 7.5, 24],
            [1653, 460, 35, 48, 0, 17.5, 24],
            [1685, 414, 34, 43, 0, 17, 21.5],
            [1719, 414, 35, 48, 0, 17.5, 24],
            [1754, 414, 35, 48, 0, 17.5, 24],
            [1688, 457, 31, 32, 0, 15.5, 16],
            [1719, 462, 42, 30, 0, 21, 15],
            [1789, 414, 31, 32, 0, 15.5, 16],
            [1573, 126, 21, 21, 0, 10.5, 10.5],
            [1344, 286, 24, 14, 0, 12, 7],
            [2010, 402, 12, 24, 0, 6, 12],
            [1761, 462, 30, 31, 0, 15, 15.5],
            [1791, 446, 34, 43, 0, 17, 21.5],
            [1825, 438, 34, 43, 0, 17, 21.5],
            [1859, 438, 34, 43, 0, 17, 21.5],
            [1893, 438, 34, 43, 0, 17, 21.5],
            [1927, 438, 21, 30, 0, 10.5, 15],
            [1271, 142, 20, 14, 0, 10, 7],
            [1130, 269, 16, 19, 0, 8, 9.5],
            [1688, 489, 31, 31, 0, 15.5, 15.5],
            [1719, 492, 34, 29, 0, 17, 14.5],
            [1753, 493, 31, 31, 0, 15.5, 15.5],
            [1423, 317, 15, 18, 0, 7.5, 9],
            [1406, 365, 30, 31, 0, 15, 15.5],
            [1116, 156, 15, 15, 0, 7.5, 7.5],
            [1131, 156, 15, 15, 0, 7.5, 7.5],
            [1948, 458, 34, 43, 0, 17, 21.5],
            [1927, 468, 21, 21, 0, 10.5, 10.5],
            [1784, 501, 31, 28, 0, 15.5, 14],
            [1815, 501, 30, 28, 0, 15, 14],
            [1845, 501, 30, 28, 0, 15, 14],
            [1825, 481, 20, 20, 0, 10, 10],
            [1845, 481, 14, 20, 0, 7, 10],
            [1859, 481, 14, 20, 0, 7, 10],
            [1368, 286, 14, 14, 0, 7, 7],
            [1382, 286, 24, 13, 0, 12, 6.5],
            [1097, 496, 31, 31, 0, 15.5, 15.5],
            [1128, 496, 31, 31, 0, 15.5, 15.5],
            [1159, 496, 28, 29, 0, 14, 14.5],
            [1187, 496, 28, 29, 0, 14, 14.5],
            [1215, 496, 30, 26, 0, 15, 13],
            [1215, 522, 28, 7, 0, 14, 3.5],
            [1245, 496, 25, 25, 0, 12.5, 12.5],
            [1245, 521, 22, 8, 0, 11, 4],
            [1822, 292, 27, 13, 0, 13.5, 8],
            [1982, 458, 20, 29, 0, 10, 14.5],
            [2002, 450, 20, 29, 0, 10, 14.5],
            [2010, 426, 12, 14, 0, 6, 7],
            [1822, 305, 13, 9, 0, 6.5, 4.5],
            [908, 367, 28, 7, 0, 14, 3.5],
            [1413, 506, 16, 18, 0, 8, 9],
            [1982, 487, 25, 25, 0, 12.5, 12.5],
            [1873, 481, 16, 17, 0, 8, 8.5],
            [1406, 396, 13, 14, 0, 6.5, 7],
            [1419, 396, 13, 14, 0, 6.5, 7],
            [2010, 440, 12, 8, 0, 10, -27],
            [946, 233, 8, 19, 0, 4, 9.5],
            [1423, 335, 14, 13, 0, 7, 8],
            [965, 507, 12, 13, 0, 6, 6.5],
            [1270, 496, 11, 13, 0, 6, 7],
            [948, 171, 8, 8, 0, 4, 4],
            [1430, 126, 8, 8, 0, 4, 4],
            [1430, 134, 8, 8, 0, 4, 4],
            [1993, 450, 8, 8, 0, 4, 4],
            [1784, 493, 8, 8, 0, 4, 4],
            [1429, 506, 9, 14, 0, 4.5, 7],
            [2002, 479, 8, 8, 0, 4, 4],
            [2017, 203, 4, 16, 0, 2, 8],
            [1267, 521, 8, 8, 0, 4, 4],
            [1130, 288, 8, 8, 0, 4, 4],
            [1138, 288, 8, 8, 0, 4, 4],
            [1849, 292, 8, 8, 0, 4, 4],
            [1835, 305, 8, 8, 0, 4, 4],
            [1889, 481, 8, 8, 0, 4, 4],
            [1889, 489, 8, 8, 0, 4, 4]
        ],
        "animations": {
            "tile": { "frames": [14, 11, 0, 1, 3, 4, 7, 8, 10, 12, 13, 16, 17, 22], "speed": 0.5 },
            "Shield": { "frames": [24, 43, 42, 45, 46, 20, 21, 23, 26, 19, 18, 30, 31, 2, 5, 6, 9, 15, 27, 32, 33, 36, 41, 44, 130], "speed": 0.5 },
            "buttonBack": { "frames": [25] },
            "buttonContinue": { "frames": [28] },
            "buttonDecrease": { "frames": [29] },
            "buttonHelp": { "frames": [34] },
            "buttonIncrease": { "frames": [35] },
            "buttonNext": { "frames": [37] },
            "buttonOptions": { "frames": [38] },
            "buttonStart": { "frames": [39] },
            "buttonUI": { "frames": [40] },
            "B_coin": { "frames": [52, 53, 47, 68, 73, 69, 65, 58], "speed": 0.25 },
            "E_coin": { "frames": [59, 60, 48, 70, 74, 76, 66, 61], "speed": 0.25 },
            "L_coin": { "frames": [62, 63, 49, 78, 75, 79, 67, 64], "speed": 0.25 },
            "BlueBox": { "frames": [50] },
            "Enemy5": { "frames": [51] },
            "Enemy3": { "frames": [54] },
            "Laser5_Hit": { "frames": [55, 56] },
            "Enemy8": { "frames": [57] },
            "Laser1_Hit": { "frames": [110, 71, 72, 119], "speed": 0.25 },
            "Ship1": { "frames": [77, 87], "speed": 0.25 },
            "Enemy10": { "frames": [80] },
            "Arc5": { "frames": [81] },
            "Enemy7": { "frames": [82] },
            "Laser3_Hit": { "frames": [83, 102] },
            "Laser1_Shoot": { "frames": [92, 84], "speed": 0.25 },
            "Laser4": { "frames": [85] },
            "Enemy1": { "frames": [86] },
            "Ship2": { "frames": [88, 89], "speed": 0.25 },
            "Ship3": { "frames": [90, 101], "speed": 0.25 },
            "Arc4": { "frames": [91] },
            "Laser3_Shoot": { "frames": [93, 125] },
            "Enemy11": { "frames": [94] },
            "Arc5_Shoot": { "frames": [95] },
            "Enemy2": { "frames": [96] },
            "Laser2_Shoot": { "frames": [127] },
            "Enemy4": { "frames": [98] },
            "Laser2_Hit": { "frames": [99, 100], "speed": 0.25 },
            "Laser5_Shoot": { "frames": [105, 103] },
            "Laser4_Shoot": { "frames": [115] },
            "Arc4_Shoot": { "frames": [106] },
            "Bullet": { "frames": [107] },
            "Laser1": { "frames": [108] },
            "Arc3": { "frames": [109] },
            "Enemy6": { "frames": [111] },
            "Enemy9": { "frames": [112] },
            "Enemy12": { "frames": [113] },
            "Enemy13": { "frames": [114] },
            "Thrusters": { "frames": [116, 124] },
            "Laser4_Hit": { "frames": [117, 126] },
            "Arc2_Shoot": { "frames": [118] },
            "Laser5": { "frames": [120, 121] },
            "Laser_Shoot": { "frames": [140, 122] },
            "Arc2": { "frames": [123] },
            "Laser_Hit": { "frames": [133, 128, 129, 132], "speed": 0.25 },
            "Laser3": { "frames": [131] },
            "Arc1": { "frames": [134] },
            "Arc_Shoot": { "frames": [135] },
            "Enemy10_Shot": { "frames": [136] },
            "Enemy12_Shot": { "frames": [137] },
            "Enemy13_Shot": { "frames": [138] },
            "Enemy1_Shot": { "frames": [139] },
            "Enemy2_Shot": { "frames": [141] },
            "Laser2": { "frames": [142] },
            "Enemy3_Shot": { "frames": [143] },
            "Enemy4_Shot": { "frames": [144] },
            "Enemy5_Shot": { "frames": [145] },
            "Enemy6_Shot": { "frames": [146] },
            "Enemy7_Shot": { "frames": [147] },
            "Enemy8_Shot": { "frames": [148] },
            "Enemy9_Shot": { "frames": [149] }
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