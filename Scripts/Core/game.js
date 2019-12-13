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
            [0, 0, 28, 7, 0, 14, 3.5],
            [28, 0, 28, 7, 0, 14, 3.5],
            [56, 0, 8, 8, 0, 4, 4],
            [64, 0, 8, 8, 0, 4, 4],
            [72, 0, 8, 8, 0, 4, 4],
            [80, 0, 8, 8, 0, 4, 4],
            [88, 0, 8, 8, 0, 4, 4],
            [96, 0, 8, 8, 0, 4, 4],
            [104, 0, 8, 8, 0, 4, 4],
            [112, 0, 8, 8, 0, 4, 4],
            [120, 0, 8, 8, 0, 4, 4],
            [128, 0, 8, 8, 0, 4, 4],
            [136, 0, 8, 8, 0, 4, 4],
            [144, 0, 22, 8, 0, 11, 4],
            [166, 0, 8, 8, 0, 4, 4],
            [174, 0, 12, 8, 0, 10, -27],
            [186, 0, 8, 8, 0, 4, 4],
            [194, 0, 13, 9, 0, 6.5, 4.5],
            [207, 0, 12, 13, 0, 6, 6.5],
            [219, 0, 14, 13, 0, 7, 8],
            [233, 0, 24, 13, 0, 12, 6.5],
            [257, 0, 11, 13, 0, 6, 7],
            [268, 0, 27, 13, 0, 13.5, 8],
            [295, 0, 14, 14, 0, 7, 7],
            [309, 0, 12, 14, 0, 6, 7],
            [321, 0, 20, 14, 0, 10, 7],
            [341, 0, 24, 14, 0, 12, 7],
            [365, 0, 9, 14, 0, 4.5, 7],
            [374, 0, 13, 14, 0, 6.5, 7],
            [387, 0, 26, 14, 0, 13, 7],
            [413, 0, 13, 14, 0, 6.5, 7],
            [426, 0, 26, 14, 0, 13, 7],
            [452, 0, 15, 15, 0, 7.5, 7.5],
            [467, 0, 15, 15, 0, 7.5, 7.5],
            [482, 0, 4, 16, 0, 2, 8],
            [486, 0, 16, 17, 0, 8, 8.5],
            [502, 0, 15, 18, 0, 7.5, 9],
            [517, 0, 16, 18, 0, 8, 9],
            [533, 0, 8, 19, 0, 4, 9.5],
            [541, 0, 16, 19, 0, 8, 9.5],
            [557, 0, 20, 20, 0, 10, 10],
            [577, 0, 14, 20, 0, 7, 10],
            [591, 0, 14, 20, 0, 7, 10],
            [605, 0, 21, 21, 0, 10.5, 10.5],
            [626, 0, 21, 21, 0, 10.5, 10.5],
            [647, 0, 12, 24, 0, 6, 12],
            [659, 0, 25, 25, 0, 12.5, 12.5],
            [684, 0, 25, 25, 0, 12.5, 12.5],
            [709, 0, 30, 26, 0, 15, 13],
            [739, 0, 31, 28, 0, 15.5, 14],
            [770, 0, 30, 28, 0, 15, 14],
            [800, 0, 30, 28, 0, 15, 14],
            [830, 0, 29, 29, 0, 14.5, 14.5],
            [859, 0, 20, 29, 0, 10, 14.5],
            [879, 0, 29, 29, 0, 14.5, 14.5],
            [908, 0, 20, 29, 0, 10, 14.5],
            [928, 0, 34, 29, 0, 17, 14.5],
            [962, 0, 28, 29, 0, 14, 14.5],
            [990, 0, 28, 29, 0, 14, 14.5],
            [1018, 0, 21, 30, 0, 10.5, 15],
            [1039, 0, 29, 30, 0, 14.5, 15],
            [1068, 0, 42, 30, 0, 21, 15],
            [1110, 0, 31, 31, 0, 15.5, 15.5],
            [1141, 0, 31, 31, 0, 15.5, 15.5],
            [1172, 0, 32, 31, 0, 16, 15.5],
            [1204, 0, 30, 31, 0, 15, 15.5],
            [1234, 0, 31, 31, 0, 15.5, 15.5],
            [1265, 0, 31, 31, 0, 15.5, 15.5],
            [1296, 0, 32, 31, 0, 16, 15.5],
            [1328, 0, 30, 31, 0, 15, 15.5],
            [1358, 0, 31, 32, 0, 15.5, 16],
            [1389, 0, 31, 32, 0, 15.5, 16],
            [1420, 0, 38, 36, 0, 19, 18],
            [1458, 0, 34, 43, 0, 17, 21.5],
            [1492, 0, 34, 43, 0, 17, 21.5],
            [1526, 0, 34, 43, 0, 17, 21.5],
            [1560, 0, 34, 43, 0, 17, 21.5],
            [1594, 0, 34, 43, 0, 17, 21.5],
            [1628, 0, 34, 43, 0, 17, 21.5],
            [1662, 0, 45, 48, 0, 22.5, 24],
            [1707, 0, 40, 48, 0, 22.5, 24],
            [1747, 0, 35, 48, 0, 17.5, 24],
            [1782, 0, 45, 48, 0, 22.5, 24],
            [1827, 0, 17, 48, 0, 7.5, 24],
            [0, 48, 40, 48, 0, 22.5, 24],
            [40, 48, 45, 48, 0, 22.5, 24],
            [85, 48, 17, 48, 0, 7.5, 24],
            [102, 48, 35, 48, 0, 17.5, 24],
            [137, 48, 75, 48, 0, 37, -25],
            [212, 48, 45, 48, 0, 22.5, 24],
            [257, 48, 41, 48, 0, 20.5, 24],
            [298, 48, 35, 48, 0, 17.5, 24],
            [333, 48, 40, 48, 0, 22.5, 24],
            [373, 48, 45, 48, 0, 22.5, 24],
            [418, 48, 45, 48, 0, 22.5, 24],
            [463, 48, 41, 48, 0, 20.5, 24],
            [504, 48, 17, 48, 0, 7.5, 24],
            [521, 48, 45, 48, 0, 22.5, 24],
            [566, 48, 35, 48, 0, 17.5, 24],
            [601, 48, 35, 48, 0, 17.5, 24],
            [636, 48, 45, 48, 0, 22.5, 24],
            [681, 48, 35, 48, 0, 17.5, 24],
            [716, 48, 45, 48, 0, 22.5, 24],
            [761, 48, 41, 48, 0, 20.5, 24],
            [802, 48, 190, 49, 0, 95, 24.5],
            [992, 48, 190, 49, 0, 95, 24.5],
            [1182, 48, 190, 49, 0, 95, 24.5],
            [1372, 48, 190, 49, 0, 95, 24.5],
            [1562, 48, 190, 49, 0, 95, 24.5],
            [0, 97, 190, 49, 0, 95, 24.5],
            [190, 97, 190, 49, 0, 95, 24.5],
            [380, 97, 190, 49, 0, 95, 24.5],
            [570, 97, 190, 49, 0, 95, 24.5],
            [760, 97, 190, 49, 0, 95, 24.5],
            [950, 97, 190, 49, 0, 95, 24.5],
            [1140, 97, 190, 49, 0, 95, 24.5],
            [1330, 97, 131, 66, 0, 81, 59],
            [1461, 97, 50, 73, 0, 25, 36.5],
            [1511, 97, 139, 77, 0, 69, -11],
            [1650, 97, 165, 85, 0, 85, -8],
            [0, 182, 175, 100, 0, 90, 5],
            [175, 182, 58, 100, 0, 29, 50],
            [233, 182, 126, 111, 0, 63, 55],
            [359, 182, 176, 111, 0, 90, 15],
            [535, 182, 118, 112, 0, 59, 45],
            [653, 182, 126, 117, 0, 63, 58],
            [779, 182, 126, 120, 0, 63, 60],
            [905, 182, 126, 122, 0, 63, 61],
            [1031, 182, 126, 124, 0, 63, 62],
            [1157, 182, 180, 124, 0, 92, 28],
            [1337, 182, 170, 126, 0, 82, 44],
            [1507, 182, 50, 132, 0, 25, 66],
            [1557, 182, 181, 136, 0, 93, 40],
            [0, 318, 128, 137, 0, 65, 63],
            [128, 318, 132, 139, 0, 63, 72],
            [260, 318, 185, 140, 0, 95, 44],
            [445, 318, 132, 140, 0, 63, 72],
            [577, 318, 159, 142, 0, 90, 63],
            [736, 318, 146, 144, 0, 73, 73],
            [882, 318, 146, 144, 0, 73, 73],
            [1028, 318, 135, 145, 0, 63, 73],
            [1163, 318, 132, 145, 0, 63, 73],
            [1295, 318, 143, 145, 0, 70, 73],
            [1438, 318, 137, 145, 0, 64, 73],
            [1575, 318, 136, 145, 0, 63, 73],
            [1711, 318, 135, 145, 0, 63, 73],
            [0, 463, 136, 145, 0, 63, 73],
            [136, 463, 135, 145, 0, 63, 73],
            [271, 463, 145, 146, 0, 73, 72],
            [416, 463, 145, 146, 0, 73, 72],
            [561, 463, 143, 146, 0, 71, 72],
            [704, 463, 185, 146, 0, 95, 50],
            [889, 463, 145, 146, 0, 73, 72],
            [1034, 463, 146, 147, 0, 73, 73],
            [1180, 463, 167, 155, 0, 88, 59],
            [1347, 463, 188, 155, 0, 96, 59],
            [1535, 463, 155, 156, 0, 73, 73],
            [1690, 463, 155, 160, 0, 77, 64],
            [0, 623, 188, 164, 0, 96, 68],
            [188, 623, 189, 168, 0, 96, 72],
            [377, 623, 168, 171, 0, 86, 78],
            [545, 623, 173, 173, 0, 88, 77],
            [718, 623, 184, 174, 0, 95, 78],
            [902, 623, 184, 180, 0, 95, 84],
            [1086, 623, 187, 181, 0, 94, 85],
            [1273, 623, 182, 184, 0, 86, 88],
            [1455, 623, 184, 186, 0, 95, 90],
            [1639, 623, 187, 188, 0, 91, 92],
            [0, 811, 190, 191, 0, 94, 95],
            [190, 811, 192, 192, 0, 96, 96],
            [382, 811, 192, 192, 0, 96, 96],
            [574, 811, 192, 192, 0, 96, 96],
            [766, 811, 192, 192, 0, 96, 96],
            [958, 811, 192, 192, 0, 96, 96],
            [1150, 811, 192, 192, 0, 96, 96],
            [1342, 811, 454, 322, 0, 232, 161]
        ],
        "animations": {
            "Thrusters": { "frames": [0, 1] },
            "Enemy5_Shot": { "frames": [2] },
            "Enemy6_Shot": { "frames": [3] },
            "Enemy7_Shot": { "frames": [4] },
            "Enemy8_Shot": { "frames": [5] },
            "Enemy9_Shot": { "frames": [6] },
            "Enemy3_Shot": { "frames": [7] },
            "Enemy4_Shot": { "frames": [8] },
            "Enemy13_Shot": { "frames": [9] },
            "Enemy12_Shot": { "frames": [10] },
            "Enemy10_Shot": { "frames": [11] },
            "Arc_Shoot": { "frames": [12] },
            "Arc2_Shoot": { "frames": [13] },
            "Enemy1_Shot": { "frames": [14] },
            "Shield": { "frames": [122, 125, 126, 127, 128, 133, 150, 148, 149, 152, 153, 139, 138, 142, 143, 144, 146, 147, 145, 140, 141, 136, 134, 124, 15], "speed": 0.5 },
            "Enemy2_Shot": { "frames": [16] },
            "Arc2": { "frames": [17] },
            "Laser_Hit": { "frames": [18, 30, 28, 19], "speed": 0.5 },
            "Laser1_Hit": { "frames": [20, 29, 31, 22], "speed": 0.5 },
            "Arc1": { "frames": [21] },
            "Arc3": { "frames": [23] },
            "Laser_Shoot": { "frames": [27, 24], "speed": 0.5 },
            "Laser1_Shoot": { "frames": [25, 26], "speed": 0.5 },
            "Laser2_Hit": { "frames": [33, 32], "speed": 0.5 },
            "Laser2": { "frames": [34] },
            "Laser2_Shoot": { "frames": [35, 36], "speed": 0.5 },
            "Laser3_Shoot": { "frames": [39, 37], "speed": 0.5 },
            "Laser3": { "frames": [38] },
            "Arc4_Shoot": { "frames": [40] },
            "Laser1": { "frames": [41] },
            "Bullet": { "frames": [42] },
            "Laser3_Hit": { "frames": [43, 44], "speed": 0.5 },
            "Laser4": { "frames": [45] },
            "Laser4_Hit": { "frames": [46, 47], "speed": 0.5 },
            "Laser4_Shoot": { "frames": [48, 50], "speed": 0.5 },
            "Laser5_Shoot": { "frames": [51, 49], "speed": 0.5 },
            "Laser5_Hit": { "frames": [52, 54] },
            "Laser5": { "frames": [53, 55] },
            "Arc5_Shoot": { "frames": [56] },
            "Enemy12": { "frames": [57] },
            "Enemy13": { "frames": [58] },
            "Arc4": { "frames": [59] },
            "Enemy3": { "frames": [60] },
            "Arc5": { "frames": [61] },
            "Enemy9": { "frames": [62] },
            "Enemy6": { "frames": [63] },
            "Enemy8": { "frames": [64] },
            "Enemy4": { "frames": [65] },
            "Enemy2": { "frames": [66] },
            "Enemy11": { "frames": [67] },
            "Enemy5": { "frames": [68] },
            "Enemy1": { "frames": [69] },
            "Enemy7": { "frames": [70] },
            "Enemy10": { "frames": [71] },
            "BlueBox": { "frames": [72] },
            "Ship1": { "frames": [73, 75], "speed": 0.25 },
            "Ship2": { "frames": [74, 76], "speed": 0.25 },
            "Ship3": { "frames": [77, 78], "speed": 0.25 },
            "B_coin": { "frames": [79, 82, 90, 91, 86, 87, 84, 85], "speed": 0.25 },
            "L_coin": { "frames": [100, 102, 103, 99, 83, 81, 80, 89], "speed": 0.25 },
            "Buff": { "frames": [88, 118, 119, 120, 123, 129, 132, 135, 151, 155, 158, 159, 164, 166, 162, 163, 161, 154, 157], "speed": 0.5 },
            "E_coin": { "frames": [94, 93, 95, 98, 96, 101, 92, 97], "speed": 0.25 },
            "buttonSingle": { "frames": [104] },
            "buttonOptions": { "frames": [105] },
            "buttonNext": { "frames": [106] },
            "buttonBack": { "frames": [107] },
            "buttonStart": { "frames": [108] },
            "buttonMulti": { "frames": [109] },
            "buttonBossRush": { "frames": [110] },
            "buttonIncrease": { "frames": [111] },
            "buttonDecrease": { "frames": [112] },
            "buttonContinue": { "frames": [113] },
            "buttonHelp": { "frames": [114] },
            "buttonUI": { "frames": [115] },
            "Explosion": { "frames": [156, 167, 170, 169, 173, 172, 174, 171, 168, 165, 160, 137, 130, 116], "speed": 0.5 },
            "F5S2": { "frames": [117] },
            "F5S4": { "frames": [121] },
            "Cruiser": { "frames": [131] },
            "Destroyer": { "frames": [175] }
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