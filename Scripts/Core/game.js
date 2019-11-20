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
            [0, 0, 454, 322, 0, 232, 161],
            [0, 322, 366, 139, 0, 181.5, 69.5],
            [454, 0, 161, 278, 0, 80.5, 135.5],
            [0, 461, 192, 192, 0, 96, 96],
            [615, 0, 192, 192, 0, 96, 96],
            [0, 653, 192, 192, 0, 96, 96],
            [807, 0, 192, 192, 0, 96, 96],
            [999, 0, 192, 192, 0, 96, 96],
            [1191, 0, 192, 192, 0, 96, 96],
            [1383, 0, 190, 191, 0, 94, 95],
            [1573, 0, 187, 188, 0, 91, 92],
            [1760, 0, 135, 145, 0, 63, 73],
            [192, 461, 184, 186, 0, 95, 90],
            [192, 647, 182, 184, 0, 86, 88],
            [1760, 145, 135, 145, 0, 63, 73],
            [0, 845, 180, 124, 0, 92, 28],
            [1573, 188, 187, 181, 0, 94, 85],
            [1760, 290, 135, 145, 0, 63, 73],
            [192, 831, 132, 139, 0, 63, 72],
            [615, 192, 189, 168, 0, 96, 72],
            [804, 192, 188, 164, 0, 96, 68],
            [992, 192, 184, 174, 0, 95, 78],
            [1176, 192, 184, 180, 0, 95, 84],
            [1383, 191, 190, 49, 0, 95, 24.5],
            [1360, 240, 188, 155, 0, 96, 59],
            [366, 322, 128, 137, 0, 65, 63],
            [376, 459, 138, 203, 0, 69, 99],
            [374, 662, 173, 173, 0, 88, 77],
            [324, 835, 170, 126, 0, 82, 44],
            [1548, 369, 190, 49, 0, 95, 24.5],
            [804, 356, 185, 140, 0, 95, 44],
            [989, 366, 185, 146, 0, 95, 50],
            [1174, 372, 181, 136, 0, 93, 40],
            [1355, 395, 176, 111, 0, 90, 15],
            [1531, 418, 175, 100, 0, 90, 5],
            [1706, 435, 168, 171, 0, 86, 78],
            [494, 278, 118, 112, 0, 59, 45],
            [612, 360, 190, 49, 0, 95, 24.5],
            [1174, 508, 190, 49, 0, 95, 24.5],
            [1364, 506, 167, 155, 0, 88, 59],
            [1531, 518, 159, 142, 0, 90, 63],
            [1690, 606, 190, 49, 0, 95, 24.5],
            [1690, 655, 190, 49, 0, 95, 24.5],
            [494, 835, 126, 124, 0, 63, 62],
            [514, 409, 155, 160, 0, 77, 64],
            [669, 409, 132, 145, 0, 63, 73],
            [514, 569, 165, 85, 0, 85, -8],
            [547, 654, 155, 156, 0, 73, 73],
            [620, 810, 146, 147, 0, 73, 73],
            [801, 496, 146, 144, 0, 73, 73],
            [947, 512, 146, 144, 0, 73, 73],
            [702, 640, 145, 146, 0, 73, 72],
            [766, 786, 143, 146, 0, 71, 72],
            [1093, 557, 145, 146, 0, 73, 72],
            [1238, 557, 126, 122, 0, 63, 61],
            [1364, 661, 190, 49, 0, 95, 24.5],
            [1554, 660, 136, 145, 0, 63, 73],
            [1690, 704, 145, 146, 0, 73, 72],
            [909, 850, 126, 120, 0, 63, 60],
            [909, 710, 132, 140, 0, 63, 72],
            [1041, 703, 143, 145, 0, 70, 73],
            [1184, 703, 137, 145, 0, 64, 73],
            [1321, 710, 136, 145, 0, 63, 73],
            [1041, 848, 190, 49, 0, 95, 24.5],
            [1035, 897, 190, 49, 0, 95, 24.5],
            [847, 640, 75, 48, 0, 37, -25],
            [1835, 704, 45, 48, 0, 22.5, 24],
            [1457, 710, 45, 48, 0, 22.5, 24],
            [1231, 848, 45, 48, 0, 22.5, 24],
            [1276, 855, 139, 77, 0, 69, -11],
            [1415, 855, 126, 111, 0, 63, 55],
            [1541, 805, 126, 117, 0, 63, 58],
            [1667, 850, 131, 66, 0, 81, 59],
            [1541, 922, 45, 48, 0, 22.5, 24],
            [1586, 922, 45, 48, 0, 22.5, 24],
            [1631, 922, 45, 48, 0, 22.5, 24],
            [847, 688, 45, 48, 0, 22.5, 24],
            [1835, 752, 45, 48, 0, 22.5, 24],
            [1457, 758, 45, 48, 0, 22.5, 24],
            [892, 688, 17, 48, 0, 7.5, 24],
            [1502, 710, 41, 48, 0, 20.5, 24],
            [847, 736, 41, 48, 0, 20.5, 24],
            [1835, 800, 41, 48, 0, 20.5, 24],
            [1457, 806, 40, 48, 0, 22.5, 24],
            [1798, 850, 40, 48, 0, 22.5, 24],
            [1838, 848, 40, 48, 0, 22.5, 24],
            [1502, 758, 35, 48, 0, 17.5, 24],
            [1497, 806, 35, 48, 0, 17.5, 24],
            [1360, 192, 17, 48, 0, 7.5, 24],
            [1874, 435, 21, 30, 0, 10.5, 15],
            [1676, 916, 35, 48, 0, 17.5, 24],
            [1711, 916, 35, 48, 0, 17.5, 24],
            [1746, 916, 35, 48, 0, 17.5, 24],
            [454, 278, 34, 43, 0, 17, 21.5],
            [1093, 512, 34, 43, 0, 17, 21.5],
            [1127, 512, 34, 43, 0, 17, 21.5],
            [1548, 240, 25, 25, 0, 12.5, 12.5],
            [547, 810, 25, 25, 0, 12.5, 12.5],
            [1321, 679, 32, 31, 0, 16, 15.5],
            [679, 554, 35, 48, 0, 17.5, 24],
            [714, 554, 34, 43, 0, 17, 21.5],
            [748, 554, 34, 43, 0, 17, 21.5],
            [714, 597, 34, 43, 0, 17, 21.5],
            [748, 597, 38, 36, 0, 19, 18],
            [766, 932, 42, 30, 0, 21, 15],
            [1738, 369, 17, 48, 0, 7.5, 24],
            [679, 602, 34, 29, 0, 17, 14.5],
            [888, 736, 21, 21, 0, 10.5, 10.5],
            [888, 757, 20, 29, 0, 10, 14.5],
            [1874, 465, 21, 21, 0, 10.5, 10.5],
            [1276, 848, 28, 7, 0, 14, 3.5],
            [748, 633, 28, 7, 0, 14, 3.5],
            [808, 932, 32, 31, 0, 16, 15.5],
            [840, 932, 31, 32, 0, 15.5, 16],
            [871, 932, 31, 32, 0, 15.5, 16],
            [180, 845, 12, 24, 0, 6, 12],
            [494, 390, 20, 29, 0, 10, 14.5],
            [494, 419, 20, 20, 0, 10, 10],
            [620, 957, 27, 13, 0, 13.5, 8],
            [647, 957, 24, 13, 0, 12, 6.5],
            [1690, 518, 16, 19, 0, 8, 9.5],
            [514, 654, 22, 8, 0, 11, 4],
            [1690, 537, 16, 18, 0, 8, 9],
            [1690, 555, 16, 17, 0, 8, 8.5],
            [1798, 898, 31, 31, 0, 15.5, 15.5],
            [494, 439, 14, 20, 0, 7, 10],
            [1781, 929, 31, 31, 0, 15.5, 15.5],
            [1812, 929, 30, 31, 0, 15, 15.5],
            [1829, 898, 30, 31, 0, 15, 15.5],
            [1842, 929, 31, 31, 0, 15.5, 15.5],
            [1859, 896, 31, 31, 0, 15.5, 15.5],
            [1161, 512, 13, 14, 0, 6.5, 7],
            [1161, 526, 13, 14, 0, 6.5, 7],
            [671, 957, 14, 13, 0, 7, 8],
            [1706, 418, 26, 14, 0, 13, 7],
            [947, 496, 26, 14, 0, 13, 7],
            [180, 869, 12, 14, 0, 6, 7],
            [702, 786, 24, 14, 0, 12, 7],
            [180, 883, 12, 13, 0, 6, 6.5],
            [1543, 710, 11, 13, 0, 6, 7],
            [1225, 897, 29, 30, 0, 14.5, 15],
            [1225, 927, 30, 26, 0, 15, 13],
            [324, 961, 13, 9, 0, 6.5, 4.5],
            [514, 390, 8, 19, 0, 4, 9.5],
            [1531, 395, 14, 20, 0, 7, 10],
            [922, 640, 20, 14, 0, 10, 7],
            [922, 656, 31, 28, 0, 15.5, 14],
            [953, 656, 30, 28, 0, 15, 14],
            [983, 656, 30, 28, 0, 15, 14],
            [1013, 656, 29, 29, 0, 14.5, 14.5],
            [1042, 656, 29, 29, 0, 14.5, 14.5],
            [1667, 805, 15, 18, 0, 7.5, 9],
            [1532, 806, 9, 14, 0, 4.5, 7],
            [1548, 265, 15, 15, 0, 7.5, 7.5],
            [572, 810, 15, 15, 0, 7.5, 7.5],
            [1238, 679, 14, 14, 0, 7, 7],
            [1255, 932, 28, 29, 0, 14, 14.5],
            [1283, 932, 28, 29, 0, 14, 14.5],
            [180, 896, 12, 8, 0, 10, -27],
            [536, 654, 8, 8, 0, 4, 4],
            [1682, 805, 8, 8, 0, 4, 4],
            [1682, 813, 8, 8, 0, 4, 4],
            [973, 496, 4, 16, 0, 2, 8],
            [1682, 821, 8, 8, 0, 4, 4],
            [909, 688, 8, 8, 0, 4, 4],
            [1353, 679, 8, 8, 0, 4, 4],
            [669, 554, 8, 8, 0, 4, 4],
            [782, 554, 8, 8, 0, 4, 4],
            [679, 631, 8, 8, 0, 4, 4],
            [1874, 486, 8, 8, 0, 4, 4],
            [1690, 572, 8, 8, 0, 4, 4],
            [1698, 572, 8, 8, 0, 4, 4],
            [1781, 916, 8, 8, 0, 4, 4]
        ],
        "animations": {
            "Destroyer": { "frames": [0] },
            "Cruiser": { "frames": [1] },
            "F5S4": { "frames": [2] },
            "Explosion": { "frames": [47, 10, 3, 4, 5, 6, 7, 8, 9, 13, 35, 40, 28, 72], "speed": 0.5 },
            "Shield": { "frames": [70, 71, 58, 54, 43, 25, 52, 53, 57, 51, 48, 49, 50, 60, 61, 56, 62, 11, 14, 17, 45, 59, 18, 36, 158], "speed": 0.5 },
            "Buff": { "frames": [65, 69, 46, 34, 33, 15, 32, 30, 31, 24, 20, 19, 16, 12, 21, 22, 27, 39, 44], "speed": 0.5 },
            "buttonBack": { "frames": [23] },
            "F5S2": { "frames": [26] },
            "buttonContinue": { "frames": [29] },
            "buttonDecrease": { "frames": [37] },
            "buttonHelp": { "frames": [38] },
            "buttonIncrease": { "frames": [41] },
            "buttonNext": { "frames": [42] },
            "buttonOptions": { "frames": [55] },
            "buttonStart": { "frames": [63] },
            "buttonUI": { "frames": [64] },
            "B_coin": { "frames": [66, 67, 80, 86, 79, 87, 83, 68], "speed": 0.25 },
            "E_coin": { "frames": [73, 74, 81, 90, 88, 91, 84, 75], "speed": 0.25 },
            "L_coin": { "frames": [76, 77, 82, 92, 105, 99, 85, 78], "speed": 0.25 },
            "Arc4": { "frames": [89] },
            "Ship1": { "frames": [93, 94], "speed": 0.25 },
            "Ship2": { "frames": [95, 100], "speed": 0.25 },
            "Laser4_Hit": { "frames": [96, 97] },
            "Enemy5": { "frames": [98] },
            "Ship3": { "frames": [101, 102], "speed": 0.25 },
            "BlueBox": { "frames": [103] },
            "Arc5": { "frames": [104] },
            "Arc5_Shoot": { "frames": [106] },
            "Laser3_Hit": { "frames": [107, 109], "speed": 0.25 },
            "Laser5": { "frames": [108, 116] },
            "Thrusters": { "frames": [110, 111] },
            "Enemy8": { "frames": [112] },
            "Enemy10": { "frames": [113] },
            "Enemy7": { "frames": [114] },
            "Laser4": { "frames": [115] },
            "Arc4_Shoot": { "frames": [117] },
            "Laser1_Hit": { "frames": [119, 134, 135, 118], "speed": 0.25 },
            "Laser3_Shoot": { "frames": [120, 122], "speed": 0.25 },
            "Arc2_Shoot": { "frames": [121] },
            "Laser2_Shoot": { "frames": [123, 151], "speed": 0.25 },
            "Enemy11": { "frames": [124] },
            "Bullet": { "frames": [125] },
            "Enemy2": { "frames": [126] },
            "Enemy1": { "frames": [127] },
            "Enemy4": { "frames": [128] },
            "Enemy6": { "frames": [129] },
            "Enemy9": { "frames": [130] },
            "Laser_Hit": { "frames": [138, 131, 132, 133], "speed": 0.25 },
            "Laser_Shoot": { "frames": [152, 136], "speed": 0.25 },
            "Laser1_Shoot": { "frames": [145, 137], "speed": 0.25 },
            "Arc1": { "frames": [139] },
            "Enemy3": { "frames": [140] },
            "Laser4_Shoot": { "frames": [141, 147], "speed": 0.25 },
            "Arc2": { "frames": [142] },
            "Laser3": { "frames": [143] },
            "Laser1": { "frames": [144] },
            "Laser5_Shoot": { "frames": [148, 146], "speed": 0.25 },
            "Laser5_Hit": { "frames": [149, 150], "speed": 0.25 },
            "Laser2_Hit": { "frames": [153, 154], "speed": 0.25 },
            "Arc3": { "frames": [155] },
            "Enemy12": { "frames": [156] },
            "Enemy13": { "frames": [157] },
            "Arc_Shoot": { "frames": [159] },
            "Enemy10_Shot": { "frames": [160] },
            "Enemy12_Shot": { "frames": [161] },
            "Laser2": { "frames": [162] },
            "Enemy13_Shot": { "frames": [163] },
            "Enemy1_Shot": { "frames": [164] },
            "Enemy2_Shot": { "frames": [165] },
            "Enemy3_Shot": { "frames": [166] },
            "Enemy4_Shot": { "frames": [167] },
            "Enemy5_Shot": { "frames": [168] },
            "Enemy6_Shot": { "frames": [169] },
            "Enemy7_Shot": { "frames": [170] },
            "Enemy8_Shot": { "frames": [171] },
            "Enemy9_Shot": { "frames": [172] }
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