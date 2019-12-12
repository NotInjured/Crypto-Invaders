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
            [120, 0, 12, 8, 0, 10, -27],
            [132, 0, 22, 8, 0, 11, 4],
            [154, 0, 8, 8, 0, 4, 4],
            [162, 0, 8, 8, 0, 4, 4],
            [170, 0, 8, 8, 0, 4, 4],
            [178, 0, 8, 8, 0, 4, 4],
            [186, 0, 8, 8, 0, 4, 4],
            [194, 0, 13, 9, 0, 6.5, 4.5],
            [207, 0, 14, 13, 0, 7, 8],
            [221, 0, 11, 13, 0, 6, 7],
            [232, 0, 12, 13, 0, 6, 6.5],
            [244, 0, 24, 13, 0, 12, 6.5],
            [268, 0, 27, 13, 0, 13.5, 8],
            [295, 0, 20, 14, 0, 10, 7],
            [315, 0, 13, 14, 0, 6.5, 7],
            [328, 0, 12, 14, 0, 6, 7],
            [340, 0, 14, 14, 0, 7, 7],
            [354, 0, 24, 14, 0, 12, 7],
            [378, 0, 9, 14, 0, 4.5, 7],
            [387, 0, 13, 14, 0, 6.5, 7],
            [400, 0, 26, 14, 0, 13, 7],
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
            [739, 0, 30, 28, 0, 15, 14],
            [769, 0, 31, 28, 0, 15.5, 14],
            [800, 0, 30, 28, 0, 15, 14],
            [830, 0, 29, 29, 0, 14.5, 14.5],
            [859, 0, 29, 29, 0, 14.5, 14.5],
            [888, 0, 20, 29, 0, 10, 14.5],
            [908, 0, 20, 29, 0, 10, 14.5],
            [928, 0, 28, 29, 0, 14, 14.5],
            [956, 0, 34, 29, 0, 17, 14.5],
            [990, 0, 28, 29, 0, 14, 14.5],
            [1018, 0, 29, 30, 0, 14.5, 15],
            [1047, 0, 21, 30, 0, 10.5, 15],
            [1068, 0, 42, 30, 0, 21, 15],
            [1110, 0, 32, 31, 0, 16, 15.5],
            [1142, 0, 31, 31, 0, 15.5, 15.5],
            [1173, 0, 31, 31, 0, 15.5, 15.5],
            [1204, 0, 31, 31, 0, 15.5, 15.5],
            [1235, 0, 30, 31, 0, 15, 15.5],
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
            [1662, 0, 35, 48, 0, 17.5, 24],
            [1697, 0, 45, 48, 0, 22.5, 24],
            [1742, 0, 40, 48, 0, 22.5, 24],
            [1782, 0, 35, 48, 0, 17.5, 24],
            [0, 48, 45, 48, 0, 22.5, 24],
            [45, 48, 41, 48, 0, 20.5, 24],
            [86, 48, 35, 48, 0, 17.5, 24],
            [121, 48, 41, 48, 0, 20.5, 24],
            [162, 48, 17, 48, 0, 7.5, 24],
            [179, 48, 40, 48, 0, 22.5, 24],
            [219, 48, 45, 48, 0, 22.5, 24],
            [264, 48, 35, 48, 0, 17.5, 24],
            [299, 48, 17, 48, 0, 7.5, 24],
            [316, 48, 45, 48, 0, 22.5, 24],
            [361, 48, 45, 48, 0, 22.5, 24],
            [406, 48, 45, 48, 0, 22.5, 24],
            [451, 48, 75, 48, 0, 37, -25],
            [526, 48, 45, 48, 0, 22.5, 24],
            [571, 48, 41, 48, 0, 20.5, 24],
            [612, 48, 45, 48, 0, 22.5, 24],
            [657, 48, 35, 48, 0, 17.5, 24],
            [692, 48, 45, 48, 0, 22.5, 24],
            [737, 48, 35, 48, 0, 17.5, 24],
            [772, 48, 17, 48, 0, 7.5, 24],
            [789, 48, 40, 48, 0, 22.5, 24],
            [829, 48, 190, 49, 0, 95, 24.5],
            [1019, 48, 190, 49, 0, 95, 24.5],
            [1209, 48, 190, 49, 0, 95, 24.5],
            [1399, 48, 190, 49, 0, 95, 24.5],
            [1589, 48, 190, 49, 0, 95, 24.5],
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
            [1625, 97, 175, 100, 0, 90, 5],
            [0, 197, 58, 100, 0, 29, 50],
            [58, 197, 126, 111, 0, 63, 55],
            [184, 197, 176, 111, 0, 90, 15],
            [360, 197, 118, 112, 0, 59, 45],
            [478, 197, 126, 117, 0, 63, 58],
            [604, 197, 126, 120, 0, 63, 60],
            [730, 197, 126, 122, 0, 63, 61],
            [856, 197, 126, 124, 0, 63, 62],
            [982, 197, 180, 124, 0, 92, 28],
            [1162, 197, 170, 126, 0, 82, 44],
            [1332, 197, 50, 132, 0, 25, 66],
            [1382, 197, 181, 136, 0, 93, 40],
            [1563, 197, 128, 137, 0, 65, 63],
            [1691, 197, 132, 139, 0, 63, 72],
            [0, 336, 132, 140, 0, 63, 72],
            [132, 336, 185, 140, 0, 95, 44],
            [317, 336, 159, 142, 0, 90, 63],
            [476, 336, 146, 144, 0, 73, 73],
            [622, 336, 146, 144, 0, 73, 73],
            [768, 336, 135, 145, 0, 63, 73],
            [903, 336, 135, 145, 0, 63, 73],
            [1038, 336, 132, 145, 0, 63, 73],
            [1170, 336, 143, 145, 0, 70, 73],
            [1313, 336, 137, 145, 0, 64, 73],
            [1450, 336, 135, 145, 0, 63, 73],
            [1585, 336, 136, 145, 0, 63, 73],
            [0, 481, 136, 145, 0, 63, 73],
            [136, 481, 145, 146, 0, 73, 72],
            [281, 481, 145, 146, 0, 73, 72],
            [426, 481, 143, 146, 0, 71, 72],
            [569, 481, 185, 146, 0, 95, 50],
            [754, 481, 145, 146, 0, 73, 72],
            [899, 481, 146, 147, 0, 73, 73],
            [1045, 481, 167, 155, 0, 88, 59],
            [1212, 481, 188, 155, 0, 96, 59],
            [1400, 481, 155, 156, 0, 73, 73],
            [1555, 481, 155, 160, 0, 77, 64],
            [0, 641, 188, 164, 0, 96, 68],
            [188, 641, 189, 168, 0, 96, 72],
            [377, 641, 168, 171, 0, 86, 78],
            [545, 641, 173, 173, 0, 88, 77],
            [718, 641, 184, 174, 0, 95, 78],
            [902, 641, 184, 180, 0, 95, 84],
            [1086, 641, 187, 181, 0, 94, 85],
            [1273, 641, 182, 184, 0, 86, 88],
            [1455, 641, 184, 186, 0, 95, 90],
            [1639, 641, 187, 188, 0, 91, 92],
            [0, 829, 190, 191, 0, 94, 95],
            [190, 829, 192, 192, 0, 96, 96],
            [382, 829, 192, 192, 0, 96, 96],
            [574, 829, 192, 192, 0, 96, 96],
            [766, 829, 192, 192, 0, 96, 96],
            [958, 829, 192, 192, 0, 96, 96],
            [1150, 829, 192, 192, 0, 96, 96],
            [1342, 829, 454, 322, 0, 232, 161]
        ],
        "animations": {
            "Thrusters": { "frames": [0, 1], "speed": 0.25 },
            "Enemy3_Shot": { "frames": [2] },
            "Enemy4_Shot": { "frames": [3] },
            "Enemy2_Shot": { "frames": [4] },
            "Enemy5_Shot": { "frames": [5] },
            "Enemy6_Shot": { "frames": [6] },
            "Enemy9_Shot": { "frames": [7] },
            "Enemy7_Shot": { "frames": [8] },
            "Enemy8_Shot": { "frames": [9] },
            "Shield": { "frames": [121, 124, 125, 126, 127, 132, 149, 147, 148, 151, 152, 138, 137, 142, 143, 145, 146, 144, 139, 140, 141, 134, 133, 123, 10], "speed": 0.5 },
            "Arc2_Shoot": { "frames": [11] },
            "Enemy12_Shot": { "frames": [12] },
            "Enemy10_Shot": { "frames": [13] },
            "Enemy13_Shot": { "frames": [14] },
            "Arc_Shoot": { "frames": [15] },
            "Enemy1_Shot": { "frames": [16] },
            "Arc2": { "frames": [17] },
            "Laser_Hit": { "frames": [20, 29, 24, 18], "speed": 0.25 },
            "Arc1": { "frames": [19] },
            "Laser1_Hit": { "frames": [21, 31, 30, 22], "speed": 0.25 },
            "Laser1_Shoot": { "frames": [23, 27], "speed": 0.25 },
            "Laser_Shoot": { "frames": [28, 25], "speed": 0.25 },
            "Arc3": { "frames": [26] },
            "Laser2_Hit": { "frames": [32, 33], "speed": 0.25 },
            "Laser2": { "frames": [34] },
            "Laser2_Shoot": { "frames": [35, 36], "speed": 0.25 },
            "Laser3_Shoot": { "frames": [39, 37], "speed": 0.25 },
            "Laser3": { "frames": [38] },
            "Arc4_Shoot": { "frames": [40] },
            "Laser1": { "frames": [41] },
            "Bullet": { "frames": [42] },
            "Laser3_Hit": { "frames": [43, 44], "speed": 0.25 },
            "Laser4": { "frames": [45] },
            "Laser4_Hit": { "frames": [46, 47], "speed": 0.25 },
            "Laser4_Shoot": { "frames": [48, 49], "speed": 0.25 },
            "Laser5_Shoot": { "frames": [51, 50], "speed": 0.25 },
            "Laser5_Hit": { "frames": [53, 52], "speed": 0.25 },
            "Laser5": { "frames": [55, 54], "speed": 0.25 },
            "Enemy13": { "frames": [56] },
            "Arc5_Shoot": { "frames": [57] },
            "Enemy12": { "frames": [58] },
            "Enemy3": { "frames": [59] },
            "Arc4": { "frames": [60] },
            "Arc5": { "frames": [61] },
            "Enemy8": { "frames": [62] },
            "Enemy6": { "frames": [63] },
            "Enemy11": { "frames": [64] },
            "Enemy2": { "frames": [65] },
            "Enemy1": { "frames": [66] },
            "Enemy9": { "frames": [67] },
            "Enemy5": { "frames": [68] },
            "Enemy4": { "frames": [69] },
            "Enemy10": { "frames": [70] },
            "Enemy7": { "frames": [71] },
            "BlueBox": { "frames": [72] },
            "Ship3": { "frames": [74, 73], "speed": 0.25 },
            "Ship1": { "frames": [75, 78], "speed": 0.25 },
            "Ship2": { "frames": [77, 76], "speed": 0.25 },
            "L_coin": { "frames": [98, 93, 86, 82, 91, 79, 81, 83], "speed": 0.25 },
            "B_coin": { "frames": [80, 100, 84, 85, 87, 90, 88, 96], "speed": 0.25 },
            "E_coin": { "frames": [94, 92, 97, 99, 102, 101, 103, 89], "speed": 0.25 },
            "Buff": { "frames": [95, 117, 118, 119, 122, 128, 131, 135, 150, 154, 157, 158, 163, 165, 161, 162, 160, 153, 156], "speed": 0.5 },
            "buttonSingle": { "frames": [104] },
            "buttonOptions": { "frames": [105] },
            "buttonMulti": { "frames": [106] },
            "buttonStart": { "frames": [107] },
            "buttonNext": { "frames": [108] },
            "buttonIncrease": { "frames": [109] },
            "buttonHelp": { "frames": [110] },
            "buttonBack": { "frames": [111] },
            "buttonDecrease": { "frames": [112] },
            "buttonContinue": { "frames": [113] },
            "buttonUI": { "frames": [114] },
            "Explosion": { "frames": [155, 166, 169, 168, 172, 171, 173, 170, 167, 164, 159, 136, 129, 115], "speed": 0.5 },
            "F5S2": { "frames": [116] },
            "F5S4": { "frames": [120] },
            "Cruiser": { "frames": [130] },
            "Destroyer": { "frames": [174] }
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