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
            [0, 322, 192, 192, 0, 96, 96],
            [454, 0, 192, 192, 0, 96, 96],
            [0, 514, 192, 192, 0, 96, 96],
            [192, 322, 192, 192, 0, 96, 96],
            [646, 0, 192, 192, 0, 96, 96],
            [0, 706, 192, 192, 0, 96, 96],
            [192, 514, 190, 191, 0, 94, 95],
            [0, 898, 187, 188, 0, 91, 92],
            [192, 705, 184, 186, 0, 95, 90],
            [0, 1086, 187, 181, 0, 94, 85],
            [0, 1267, 182, 184, 0, 86, 88],
            [0, 1451, 184, 180, 0, 95, 84],
            [0, 1631, 188, 155, 0, 96, 59],
            [454, 192, 189, 168, 0, 96, 72],
            [643, 192, 188, 164, 0, 96, 68],
            [831, 192, 128, 137, 0, 65, 63],
            [384, 360, 184, 174, 0, 95, 78],
            [382, 534, 173, 173, 0, 88, 77],
            [376, 707, 168, 171, 0, 86, 78],
            [568, 360, 155, 160, 0, 77, 64],
            [723, 356, 155, 156, 0, 73, 73],
            [838, 0, 118, 112, 0, 59, 45],
            [192, 891, 185, 140, 0, 95, 44],
            [187, 1031, 185, 146, 0, 95, 50],
            [377, 878, 167, 155, 0, 88, 59],
            [372, 1033, 181, 136, 0, 93, 40],
            [187, 1177, 180, 124, 0, 92, 28],
            [182, 1301, 159, 142, 0, 90, 63],
            [184, 1443, 146, 147, 0, 73, 73],
            [188, 1590, 145, 146, 0, 73, 72],
            [188, 1736, 190, 49, 0, 95, 24.5],
            [372, 1169, 190, 49, 0, 95, 24.5],
            [367, 1218, 176, 111, 0, 90, 15],
            [341, 1329, 170, 126, 0, 82, 44],
            [330, 1455, 175, 100, 0, 90, 5],
            [333, 1555, 145, 146, 0, 73, 72],
            [478, 1555, 143, 146, 0, 71, 72],
            [378, 1701, 165, 85, 0, 85, -8],
            [568, 520, 190, 49, 0, 95, 24.5],
            [555, 569, 146, 144, 0, 73, 73],
            [544, 713, 145, 146, 0, 73, 72],
            [544, 859, 146, 144, 0, 73, 73],
            [553, 1003, 143, 145, 0, 70, 73],
            [701, 569, 137, 145, 0, 64, 73],
            [689, 714, 136, 145, 0, 63, 73],
            [690, 859, 132, 140, 0, 63, 72],
            [696, 999, 136, 145, 0, 63, 73],
            [562, 1148, 139, 77, 0, 69, -11],
            [543, 1225, 135, 145, 0, 63, 73],
            [701, 1144, 135, 145, 0, 63, 73],
            [678, 1289, 135, 145, 0, 63, 73],
            [511, 1370, 132, 145, 0, 63, 73],
            [643, 1434, 190, 49, 0, 95, 24.5],
            [643, 1483, 190, 49, 0, 95, 24.5],
            [621, 1532, 132, 139, 0, 63, 72],
            [753, 1532, 126, 124, 0, 63, 62],
            [621, 1671, 190, 49, 0, 95, 24.5],
            [758, 512, 190, 49, 0, 95, 24.5],
            [838, 561, 50, 132, 0, 25, 66],
            [543, 1720, 190, 49, 0, 95, 24.5],
            [888, 561, 58, 100, 0, 29, 50],
            [813, 1289, 126, 122, 0, 63, 61],
            [833, 1411, 126, 120, 0, 63, 60],
            [643, 1370, 35, 48, 0, 17.5, 24],
            [825, 714, 126, 117, 0, 63, 58],
            [825, 831, 131, 66, 0, 81, 59],
            [832, 897, 126, 111, 0, 63, 55],
            [733, 1720, 190, 49, 0, 95, 24.5],
            [838, 112, 75, 48, 0, 37, -25],
            [832, 1008, 50, 73, 0, 25, 36.5],
            [838, 160, 31, 32, 0, 15.5, 16],
            [511, 1329, 32, 31, 0, 16, 15.5],
            [869, 160, 31, 32, 0, 15.5, 16],
            [832, 1081, 45, 48, 0, 22.5, 24],
            [882, 1008, 45, 48, 0, 22.5, 24],
            [927, 1008, 32, 31, 0, 16, 15.5],
            [879, 1531, 45, 48, 0, 22.5, 24],
            [924, 1531, 35, 48, 0, 17.5, 24],
            [879, 1579, 45, 48, 0, 22.5, 24],
            [924, 1579, 35, 48, 0, 17.5, 24],
            [913, 112, 45, 48, 0, 22.5, 24],
            [811, 1656, 45, 48, 0, 22.5, 24],
            [888, 661, 45, 48, 0, 22.5, 24],
            [836, 1129, 41, 48, 0, 20.5, 24],
            [836, 1177, 41, 48, 0, 20.5, 24],
            [836, 1225, 45, 48, 0, 22.5, 24],
            [384, 322, 38, 36, 0, 19, 18],
            [879, 1627, 45, 48, 0, 22.5, 24],
            [924, 1627, 35, 48, 0, 17.5, 24],
            [333, 1701, 42, 30, 0, 21, 15],
            [543, 1769, 25, 25, 0, 12.5, 12.5],
            [568, 1769, 25, 25, 0, 12.5, 12.5],
            [882, 1056, 41, 48, 0, 20.5, 24],
            [877, 1104, 40, 48, 0, 22.5, 24],
            [877, 1152, 40, 48, 0, 22.5, 24],
            [678, 1225, 17, 48, 0, 7.5, 24],
            [856, 1656, 17, 48, 0, 7.5, 24],
            [900, 160, 34, 29, 0, 17, 14.5],
            [838, 693, 21, 21, 0, 10.5, 10.5],
            [859, 693, 21, 21, 0, 10.5, 10.5],
            [422, 322, 31, 31, 0, 15.5, 15.5],
            [933, 661, 17, 48, 0, 7.5, 24],
            [878, 329, 40, 48, 0, 22.5, 24],
            [878, 377, 35, 48, 0, 17.5, 24],
            [918, 329, 35, 48, 0, 17.5, 24],
            [878, 425, 34, 43, 0, 17, 21.5],
            [913, 377, 34, 43, 0, 17, 21.5],
            [878, 468, 34, 43, 0, 17, 21.5],
            [422, 353, 28, 7, 0, 14, 3.5],
            [813, 1411, 20, 20, 0, 10, 10],
            [873, 1675, 34, 43, 0, 17, 21.5],
            [907, 1675, 34, 43, 0, 17, 21.5],
            [923, 1718, 34, 43, 0, 17, 21.5],
            [505, 1515, 31, 31, 0, 15.5, 15.5],
            [536, 1515, 31, 31, 0, 15.5, 15.5],
            [567, 1515, 31, 31, 0, 15.5, 15.5],
            [831, 329, 30, 26, 0, 15, 13],
            [341, 1301, 26, 14, 0, 13, 7],
            [341, 1315, 26, 14, 0, 13, 7],
            [947, 377, 12, 24, 0, 6, 12],
            [723, 512, 22, 8, 0, 11, 4],
            [598, 1515, 21, 30, 0, 10.5, 15],
            [619, 1515, 24, 14, 0, 12, 7],
            [543, 1701, 16, 19, 0, 8, 9.5],
            [939, 1039, 20, 29, 0, 10, 14.5],
            [934, 160, 20, 29, 0, 10, 14.5],
            [923, 1068, 30, 31, 0, 15, 15.5],
            [753, 1656, 15, 15, 0, 7.5, 7.5],
            [768, 1656, 15, 15, 0, 7.5, 7.5],
            [880, 693, 8, 19, 0, 4, 9.5],
            [783, 1656, 28, 7, 0, 14, 3.5],
            [555, 534, 13, 14, 0, 6.5, 7],
            [555, 548, 13, 14, 0, 6.5, 7],
            [643, 1418, 27, 13, 0, 13.5, 8],
            [947, 401, 12, 14, 0, 6, 7],
            [923, 1761, 31, 28, 0, 15.5, 14],
            [927, 1039, 12, 13, 0, 6, 6.5],
            [917, 1104, 30, 31, 0, 15, 15.5],
            [917, 1135, 29, 30, 0, 14.5, 15],
            [917, 1165, 29, 29, 0, 14.5, 14.5],
            [836, 1273, 24, 13, 0, 12, 6.5],
            [544, 1003, 9, 14, 0, 4.5, 7],
            [184, 1590, 4, 16, 0, 2, 8],
            [505, 1546, 13, 9, 0, 6.5, 4.5],
            [913, 420, 30, 28, 0, 15, 14],
            [912, 448, 29, 29, 0, 14.5, 14.5],
            [912, 477, 28, 29, 0, 14, 14.5],
            [943, 420, 16, 18, 0, 8, 9],
            [943, 438, 16, 17, 0, 8, 8.5],
            [917, 1194, 30, 28, 0, 15, 14],
            [941, 1675, 14, 20, 0, 7, 10],
            [861, 329, 14, 20, 0, 7, 10],
            [811, 1704, 20, 14, 0, 10, 7],
            [559, 1701, 15, 18, 0, 7.5, 9],
            [881, 1200, 28, 29, 0, 14, 14.5],
            [758, 561, 12, 8, 0, 10, -27],
            [678, 1273, 14, 14, 0, 7, 7],
            [593, 1769, 14, 13, 0, 7, 8],
            [860, 1273, 11, 13, 0, 6, 7],
            [0, 1786, 8, 8, 0, 4, 4],
            [745, 512, 8, 8, 0, 4, 4],
            [783, 1663, 8, 8, 0, 4, 4],
            [670, 1418, 8, 8, 0, 4, 4],
            [670, 1426, 8, 8, 0, 4, 4],
            [909, 1200, 8, 8, 0, 4, 4],
            [770, 561, 8, 8, 0, 4, 4],
            [8, 1786, 8, 8, 0, 4, 4],
            [791, 1663, 8, 8, 0, 4, 4],
            [909, 1208, 8, 8, 0, 4, 4],
            [778, 561, 8, 8, 0, 4, 4],
            [16, 1786, 8, 8, 0, 4, 4],
            [799, 1663, 8, 8, 0, 4, 4]
        ],
        "animations": {
            "Destroyer": { "frames": [0] },
            "Explosion": { "frames": [21, 8, 1, 2, 3, 4, 5, 6, 7, 11, 19, 28, 34, 66], "speed": 0.5 },
            "Buff": { "frames": [69, 48, 38, 35, 33, 27, 26, 23, 24, 13, 15, 14, 10, 9, 17, 12, 18, 25, 20], "speed": 0.5 },
            "Shield": { "frames": [67, 65, 63, 62, 56, 16, 37, 36, 41, 30, 29, 40, 42, 43, 44, 45, 47, 49, 50, 51, 52, 46, 55, 22, 156], "speed": 0.5 },
            "buttonBack": { "frames": [31] },
            "buttonContinue": { "frames": [32] },
            "buttonDecrease": { "frames": [39] },
            "buttonHelp": { "frames": [53] },
            "buttonIncrease": { "frames": [54] },
            "buttonNext": { "frames": [57] },
            "buttonOptions": { "frames": [58] },
            "Cruiser": { "frames": [59] },
            "buttonStart": { "frames": [60] },
            "F5S4": { "frames": [61] },
            "B_coin": { "frames": [74, 75, 84, 64, 96, 78, 94, 77], "speed": 0.25 },
            "buttonUI": { "frames": [68] },
            "F5S2": { "frames": [70] },
            "Enemy10": { "frames": [71] },
            "Enemy5": { "frames": [72] },
            "Enemy7": { "frames": [73] },
            "Enemy8": { "frames": [76] },
            "E_coin": { "frames": [79, 81, 85, 80, 97, 89, 95, 82], "speed": 0.25 },
            "L_coin": { "frames": [83, 86, 93, 104, 102, 105, 103, 88], "speed": 0.25 },
            "BlueBox": { "frames": [87] },
            "Arc5": { "frames": [90] },
            "Laser4_Hit": { "frames": [91, 92], "speed": 0.25 },
            "Arc5_Shoot": { "frames": [98] },
            "Laser3_Hit": { "frames": [99, 100], "speed": 0.25 },
            "Enemy11": { "frames": [101] },
            "Ship1": { "frames": [106, 107] },
            "Ship2": { "frames": [108, 111] },
            "Thrusters": { "frames": [109, 131], "speed": 0.25 },
            "Arc4_Shoot": { "frames": [110] },
            "Ship3": { "frames": [112, 113] },
            "Enemy2": { "frames": [114] },
            "Enemy6": { "frames": [115] },
            "Enemy9": { "frames": [116] },
            "Laser4_Shoot": { "frames": [117, 145], "speed": 0.25 },
            "Laser1_Hit": { "frames": [141, 118, 119, 134], "speed": 0.25 },
            "Laser4": { "frames": [120] },
            "Arc2_Shoot": { "frames": [121] },
            "Arc4": { "frames": [122] },
            "Laser1_Shoot": { "frames": [153, 123], "speed": 0.25 },
            "Laser3_Shoot": { "frames": [124, 148], "speed": 0.25 },
            "Laser5": { "frames": [125, 126] },
            "Enemy1": { "frames": [127] },
            "Laser2_Hit": { "frames": [128, 129], "speed": 0.25 },
            "Laser3": { "frames": [130] },
            "Laser_Hit": { "frames": [137, 132, 133, 158], "speed": 0.25 },
            "Laser_Shoot": { "frames": [142, 135], "speed": 0.25 },
            "Laser5_Shoot": { "frames": [150, 136], "speed": 0.25 },
            "Enemy4": { "frames": [138] },
            "Enemy3": { "frames": [139] },
            "Laser5_Hit": { "frames": [140, 146], "speed": 0.25 },
            "Laser2": { "frames": [143] },
            "Arc2": { "frames": [144] },
            "Enemy12": { "frames": [147] },
            "Laser2_Shoot": { "frames": [149, 154], "speed": 0.25 },
            "Bullet": { "frames": [151] },
            "Laser1": { "frames": [152] },
            "Enemy13": { "frames": [155] },
            "Arc3": { "frames": [157] },
            "Arc1": { "frames": [159] },
            "Arc_Shoot": { "frames": [160] },
            "Enemy10_Shot": { "frames": [161] },
            "Enemy12_Shot": { "frames": [162] },
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