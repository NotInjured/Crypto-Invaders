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
            [88, 0, 12, 8, 0, 10, -27],
            [100, 0, 8, 8, 0, 4, 4],
            [108, 0, 8, 8, 0, 4, 4],
            [116, 0, 8, 8, 0, 4, 4],
            [124, 0, 8, 8, 0, 4, 4],
            [132, 0, 22, 8, 0, 11, 4],
            [154, 0, 8, 8, 0, 4, 4],
            [162, 0, 8, 8, 0, 4, 4],
            [170, 0, 8, 8, 0, 4, 4],
            [178, 0, 8, 8, 0, 4, 4],
            [186, 0, 8, 8, 0, 4, 4],
            [194, 0, 13, 9, 0, 6.5, 4.5],
            [207, 0, 12, 13, 0, 6, 6.5],
            [219, 0, 14, 13, 0, 7, 8],
            [233, 0, 11, 13, 0, 6, 7],
            [244, 0, 27, 13, 0, 13.5, 8],
            [271, 0, 24, 13, 0, 12, 6.5],
            [295, 0, 13, 14, 0, 6.5, 7],
            [308, 0, 14, 14, 0, 7, 7],
            [322, 0, 13, 14, 0, 6.5, 7],
            [335, 0, 26, 14, 0, 13, 7],
            [361, 0, 9, 14, 0, 4.5, 7],
            [370, 0, 26, 14, 0, 13, 7],
            [396, 0, 24, 14, 0, 12, 7],
            [420, 0, 12, 14, 0, 6, 7],
            [432, 0, 20, 14, 0, 10, 7],
            [452, 0, 15, 15, 0, 7.5, 7.5],
            [467, 0, 15, 15, 0, 7.5, 7.5],
            [482, 0, 4, 16, 0, 2, 8],
            [486, 0, 4, 16, 0, 2, 8],
            [490, 0, 16, 17, 0, 8, 8.5],
            [506, 0, 16, 18, 0, 8, 9],
            [522, 0, 15, 18, 0, 7.5, 9],
            [537, 0, 16, 19, 0, 8, 9.5],
            [553, 0, 8, 19, 0, 4, 9.5],
            [561, 0, 8, 19, 0, 4, 9.5],
            [569, 0, 14, 20, 0, 7, 10],
            [583, 0, 14, 20, 0, 7, 10],
            [597, 0, 20, 20, 0, 10, 10],
            [617, 0, 14, 20, 0, 7, 10],
            [631, 0, 21, 21, 0, 10.5, 10.5],
            [652, 0, 21, 21, 0, 10.5, 10.5],
            [673, 0, 12, 24, 0, 6, 12],
            [685, 0, 12, 24, 0, 6, 12],
            [697, 0, 25, 25, 0, 12.5, 12.5],
            [722, 0, 25, 25, 0, 12.5, 12.5],
            [747, 0, 30, 26, 0, 15, 13],
            [777, 0, 31, 28, 0, 15.5, 14],
            [808, 0, 30, 28, 0, 15, 14],
            [838, 0, 30, 28, 0, 15, 14],
            [868, 0, 20, 29, 0, 10, 14.5],
            [888, 0, 28, 29, 0, 14, 14.5],
            [916, 0, 29, 29, 0, 14.5, 14.5],
            [945, 0, 29, 29, 0, 14.5, 14.5],
            [974, 0, 20, 29, 0, 10, 14.5],
            [994, 0, 20, 29, 0, 10, 14.5],
            [1014, 0, 28, 29, 0, 14, 14.5],
            [1042, 0, 34, 29, 0, 17, 14.5],
            [1076, 0, 20, 29, 0, 10, 14.5],
            [1096, 0, 21, 30, 0, 10.5, 15],
            [1117, 0, 29, 30, 0, 14.5, 15],
            [1146, 0, 42, 30, 0, 21, 15],
            [1188, 0, 31, 31, 0, 15.5, 15.5],
            [1219, 0, 32, 31, 0, 16, 15.5],
            [1251, 0, 30, 31, 0, 15, 15.5],
            [1281, 0, 31, 31, 0, 15.5, 15.5],
            [1312, 0, 30, 31, 0, 15, 15.5],
            [1342, 0, 31, 31, 0, 15.5, 15.5],
            [1373, 0, 31, 31, 0, 15.5, 15.5],
            [1404, 0, 32, 31, 0, 16, 15.5],
            [1436, 0, 31, 32, 0, 15.5, 16],
            [1467, 0, 31, 32, 0, 15.5, 16],
            [1498, 0, 38, 36, 0, 19, 18],
            [1536, 0, 34, 43, 0, 17, 21.5],
            [1570, 0, 34, 43, 0, 17, 21.5],
            [1604, 0, 34, 43, 0, 17, 21.5],
            [1638, 0, 34, 43, 0, 17, 21.5],
            [1672, 0, 34, 43, 0, 17, 21.5],
            [1706, 0, 34, 43, 0, 17, 21.5],
            [1740, 0, 35, 48, 0, 17.5, 24],
            [1775, 0, 17, 48, 0, 7.5, 24],
            [1792, 0, 40, 48, 0, 22.5, 24],
            [0, 48, 41, 48, 0, 20.5, 24],
            [41, 48, 45, 48, 0, 22.5, 24],
            [86, 48, 35, 48, 0, 17.5, 24],
            [121, 48, 45, 48, 0, 22.5, 24],
            [166, 48, 35, 48, 0, 17.5, 24],
            [201, 48, 75, 48, 0, 37, -25],
            [276, 48, 40, 48, 0, 22.5, 24],
            [316, 48, 35, 48, 0, 17.5, 24],
            [351, 48, 17, 48, 0, 7.5, 24],
            [368, 48, 45, 48, 0, 22.5, 24],
            [413, 48, 17, 48, 0, 7.5, 24],
            [430, 48, 45, 48, 0, 22.5, 24],
            [475, 48, 35, 48, 0, 17.5, 24],
            [510, 48, 40, 48, 0, 22.5, 24],
            [550, 48, 45, 48, 0, 22.5, 24],
            [595, 48, 41, 48, 0, 20.5, 24],
            [636, 48, 45, 48, 0, 22.5, 24],
            [681, 48, 35, 48, 0, 17.5, 24],
            [716, 48, 45, 48, 0, 22.5, 24],
            [761, 48, 41, 48, 0, 20.5, 24],
            [802, 48, 45, 48, 0, 22.5, 24],
            [847, 48, 45, 48, 0, 22.5, 24],
            [892, 48, 190, 49, 0, 95, 24.5],
            [1082, 48, 190, 49, 0, 95, 24.5],
            [1272, 48, 190, 49, 0, 95, 24.5],
            [1462, 48, 190, 49, 0, 95, 24.5],
            [1652, 48, 190, 49, 0, 95, 24.5],
            [0, 97, 190, 49, 0, 95, 24.5],
            [190, 97, 190, 49, 0, 95, 24.5],
            [380, 97, 190, 49, 0, 95, 24.5],
            [570, 97, 190, 49, 0, 95, 24.5],
            [760, 97, 190, 49, 0, 95, 24.5],
            [950, 97, 190, 49, 0, 95, 24.5],
            [1140, 97, 131, 66, 0, 81, 59],
            [1271, 97, 50, 73, 0, 25, 36.5],
            [1321, 97, 139, 77, 0, 69, -11],
            [1460, 97, 165, 85, 0, 85, -8],
            [1625, 97, 58, 100, 0, 29, 50],
            [0, 197, 175, 100, 0, 90, 5],
            [175, 197, 126, 111, 0, 63, 55],
            [301, 197, 176, 111, 0, 90, 15],
            [477, 197, 118, 112, 0, 59, 45],
            [595, 197, 126, 117, 0, 63, 58],
            [721, 197, 126, 120, 0, 63, 60],
            [847, 197, 126, 122, 0, 63, 61],
            [973, 197, 126, 124, 0, 63, 62],
            [1099, 197, 180, 124, 0, 92, 28],
            [1279, 197, 170, 126, 0, 82, 44],
            [1449, 197, 50, 132, 0, 25, 66],
            [1499, 197, 181, 136, 0, 93, 40],
            [1680, 197, 128, 137, 0, 65, 63],
            [0, 334, 132, 139, 0, 63, 72],
            [132, 334, 185, 140, 0, 95, 44],
            [317, 334, 132, 140, 0, 63, 72],
            [449, 334, 159, 142, 0, 90, 63],
            [608, 334, 146, 144, 0, 73, 73],
            [754, 334, 146, 144, 0, 73, 73],
            [900, 334, 135, 145, 0, 63, 73],
            [1035, 334, 132, 145, 0, 63, 73],
            [1167, 334, 143, 145, 0, 70, 73],
            [1310, 334, 137, 145, 0, 64, 73],
            [1447, 334, 136, 145, 0, 63, 73],
            [1583, 334, 135, 145, 0, 63, 73],
            [0, 479, 135, 145, 0, 63, 73],
            [135, 479, 136, 145, 0, 63, 73],
            [271, 479, 145, 146, 0, 73, 72],
            [416, 479, 145, 146, 0, 73, 72],
            [561, 479, 185, 146, 0, 95, 50],
            [746, 479, 145, 146, 0, 73, 72],
            [891, 479, 143, 146, 0, 71, 72],
            [1034, 479, 146, 147, 0, 73, 73],
            [1180, 479, 167, 155, 0, 88, 59],
            [1347, 479, 188, 155, 0, 96, 59],
            [1535, 479, 155, 156, 0, 73, 73],
            [1690, 479, 155, 160, 0, 77, 64],
            [0, 639, 188, 164, 0, 96, 68],
            [188, 639, 189, 168, 0, 96, 72],
            [377, 639, 168, 171, 0, 86, 78],
            [545, 639, 173, 173, 0, 88, 77],
            [718, 639, 184, 174, 0, 95, 78],
            [902, 639, 184, 180, 0, 95, 84],
            [1086, 639, 187, 181, 0, 94, 85],
            [1273, 639, 182, 184, 0, 86, 88],
            [1455, 639, 184, 186, 0, 95, 90],
            [1639, 639, 187, 188, 0, 91, 92],
            [0, 827, 190, 191, 0, 94, 95],
            [190, 827, 192, 192, 0, 96, 96],
            [382, 827, 192, 192, 0, 96, 96],
            [574, 827, 192, 192, 0, 96, 96],
            [766, 827, 192, 192, 0, 96, 96],
            [958, 827, 192, 192, 0, 96, 96],
            [1150, 827, 192, 192, 0, 96, 96],
            [1342, 827, 454, 322, 0, 232, 161]
        ],
        "animations": {
            "Thrusters": { "frames": [1, 0] },
            "Enemy4_Shot": { "frames": [2] },
            "Enemy5_Shot": { "frames": [3] },
            "Enemy1_Shot": { "frames": [4] },
            "Enemy3_Shot": { "frames": [5] },
            "Shield": { "frames": [127, 130, 131, 132, 133, 138, 157, 154, 153, 156, 158, 143, 144, 147, 148, 149, 152, 151, 150, 145, 146, 141, 139, 129, 6], "speed": 0.5 },
            "Enemy2_Shot": { "frames": [7] },
            "Enemy13_Shot": { "frames": [8] },
            "Enemy9_Shot": { "frames": [9] },
            "Enemy6_Shot": { "frames": [10] },
            "Arc2_Shoot": { "frames": [11] },
            "Enemy7_Shot": { "frames": [12] },
            "Enemy12_Shot": { "frames": [13] },
            "Enemy10_Shot": { "frames": [14] },
            "Arc_Shoot": { "frames": [15] },
            "Enemy8_Shot": { "frames": [16] },
            "Arc2": { "frames": [17] },
            "Laser_Hit": { "frames": [18, 25, 23, 19], "speed": 0.25 },
            "Arc1": { "frames": [20] },
            "Laser1_Hit": { "frames": [22, 26, 28, 21], "speed": 0.25 },
            "Arc3": { "frames": [24] },
            "Laser_Shoot": { "frames": [27, 30], "speed": 0.25 },
            "Laser1_Shoot": { "frames": [31, 29], "speed": 0.25 },
            "Laser2_Hit": { "frames": [32, 33], "speed": 0.25 },
            "P2Laser2": { "frames": [34] },
            "Laser2": { "frames": [35] },
            "Laser2_Shoot": { "frames": [36, 38], "speed": 0.25 },
            "Laser3_Shoot": { "frames": [39, 37], "speed": 0.25 },
            "Laser3": { "frames": [40] },
            "P2Laser3": { "frames": [41] },
            "P2Bullet": { "frames": [42] },
            "Bullet": { "frames": [43] },
            "Arc4_Shoot": { "frames": [44] },
            "Laser1": { "frames": [45] },
            "Laser3_Hit": { "frames": [47, 46], "speed": 0.25 },
            "Laser4": { "frames": [48] },
            "P2Laser4": { "frames": [49] },
            "Laser4_Hit": { "frames": [50, 51], "speed": 0.25 },
            "Laser4_Shoot": { "frames": [52, 55], "speed": 0.25 },
            "Laser5_Shoot": { "frames": [54, 53], "speed": 0.25 },
            "P2Laser5": { "frames": [56, 61], "speed": 0.25 },
            "Enemy13": { "frames": [57] },
            "Laser5_Hit": { "frames": [59, 58], "speed": 0.25 },
            "Laser5": { "frames": [64, 60] },
            "Enemy12": { "frames": [62] },
            "Arc5_Shoot": { "frames": [63] },
            "Arc4": { "frames": [65] },
            "Enemy3": { "frames": [66] },
            "Arc5": { "frames": [67] },
            "Enemy9": { "frames": [68] },
            "Enemy8": { "frames": [69] },
            "Enemy1": { "frames": [70] },
            "Enemy11": { "frames": [71] },
            "Enemy4": { "frames": [72] },
            "Enemy6": { "frames": [73] },
            "Enemy2": { "frames": [74] },
            "Enemy5": { "frames": [75] },
            "Enemy7": { "frames": [76] },
            "Enemy10": { "frames": [77] },
            "BlueBox": { "frames": [78] },
            "Ship3": { "frames": [80, 79], "speed": 0.25 },
            "Ship1": { "frames": [82, 81], "speed": 0.25 },
            "Ship2": { "frames": [83, 84], "speed": 0.25 },
            "L_coin": { "frames": [106, 91, 88, 85, 86, 90, 87, 89], "speed": 0.25 },
            "E_coin": { "frames": [104, 102, 103, 100, 98, 92, 94, 97], "speed": 0.25 },
            "Buff": { "frames": [93, 123, 124, 126, 128, 134, 137, 140, 155, 160, 163, 164, 169, 171, 167, 168, 166, 159, 162], "speed": 0.5 },
            "B_coin": { "frames": [108, 109, 107, 105, 96, 95, 101, 99], "speed": 0.25 },
            "buttonOptions": { "frames": [110] },
            "buttonSingle": { "frames": [111] },
            "buttonStart": { "frames": [112] },
            "buttonBack": { "frames": [113] },
            "buttonNext": { "frames": [114] },
            "buttonContinue": { "frames": [115] },
            "buttonMulti": { "frames": [116] },
            "buttonDecrease": { "frames": [117] },
            "buttonIncrease": { "frames": [118] },
            "buttonHelp": { "frames": [119] },
            "buttonUI": { "frames": [120] },
            "Explosion": { "frames": [161, 172, 174, 177, 179, 178, 176, 175, 173, 170, 165, 142, 135, 121], "speed": 0.5 },
            "F5S2": { "frames": [122] },
            "F5S4": { "frames": [125] },
            "Cruiser": { "frames": [136] },
            "Destroyer": { "frames": [180] }
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