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
            [96, 0, 12, 8, 0, 10, -27],
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
            [219, 0, 24, 13, 0, 12, 6.5],
            [243, 0, 27, 13, 0, 13.5, 8],
            [270, 0, 14, 13, 0, 7, 8],
            [284, 0, 11, 13, 0, 6, 7],
            [295, 0, 26, 14, 0, 13, 7],
            [321, 0, 26, 14, 0, 13, 7],
            [347, 0, 14, 14, 0, 7, 7],
            [361, 0, 20, 14, 0, 10, 7],
            [381, 0, 12, 14, 0, 6, 7],
            [393, 0, 9, 14, 0, 4.5, 7],
            [402, 0, 24, 14, 0, 12, 7],
            [426, 0, 13, 14, 0, 6.5, 7],
            [439, 0, 13, 14, 0, 6.5, 7],
            [452, 0, 15, 15, 0, 7.5, 7.5],
            [467, 0, 15, 15, 0, 7.5, 7.5],
            [482, 0, 4, 16, 0, 2, 8],
            [486, 0, 16, 17, 0, 8, 8.5],
            [502, 0, 16, 18, 0, 8, 9],
            [518, 0, 15, 18, 0, 7.5, 9],
            [533, 0, 8, 19, 0, 4, 9.5],
            [541, 0, 16, 19, 0, 8, 9.5],
            [557, 0, 14, 20, 0, 7, 10],
            [571, 0, 20, 20, 0, 10, 10],
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
            [830, 0, 34, 29, 0, 17, 14.5],
            [864, 0, 20, 29, 0, 10, 14.5],
            [884, 0, 29, 29, 0, 14.5, 14.5],
            [913, 0, 29, 29, 0, 14.5, 14.5],
            [0, 29, 28, 29, 0, 14, 14.5],
            [28, 29, 20, 29, 0, 10, 14.5],
            [48, 29, 28, 29, 0, 14, 14.5],
            [76, 29, 21, 30, 0, 10.5, 15],
            [97, 29, 42, 30, 0, 21, 15],
            [139, 29, 29, 30, 0, 14.5, 15],
            [168, 29, 31, 31, 0, 15.5, 15.5],
            [199, 29, 31, 31, 0, 15.5, 15.5],
            [230, 29, 32, 31, 0, 16, 15.5],
            [262, 29, 32, 31, 0, 16, 15.5],
            [294, 29, 31, 31, 0, 15.5, 15.5],
            [325, 29, 30, 31, 0, 15, 15.5],
            [355, 29, 30, 31, 0, 15, 15.5],
            [385, 29, 31, 31, 0, 15.5, 15.5],
            [416, 29, 31, 32, 0, 15.5, 16],
            [447, 29, 31, 32, 0, 15.5, 16],
            [478, 29, 38, 36, 0, 19, 18],
            [516, 29, 34, 43, 0, 17, 21.5],
            [550, 29, 34, 43, 0, 17, 21.5],
            [584, 29, 34, 43, 0, 17, 21.5],
            [618, 29, 34, 43, 0, 17, 21.5],
            [652, 29, 34, 43, 0, 17, 21.5],
            [686, 29, 34, 43, 0, 17, 21.5],
            [720, 29, 41, 48, 0, 20.5, 24],
            [761, 29, 45, 48, 0, 22.5, 24],
            [806, 29, 35, 48, 0, 17.5, 24],
            [841, 29, 45, 48, 0, 22.5, 24],
            [886, 29, 35, 48, 0, 17.5, 24],
            [921, 29, 17, 48, 0, 7.5, 24],
            [0, 77, 75, 48, 0, 37, -25],
            [75, 77, 45, 48, 0, 22.5, 24],
            [120, 77, 40, 48, 0, 22.5, 24],
            [160, 77, 41, 48, 0, 20.5, 24],
            [201, 77, 40, 48, 0, 22.5, 24],
            [241, 77, 35, 48, 0, 17.5, 24],
            [276, 77, 45, 48, 0, 22.5, 24],
            [321, 77, 17, 48, 0, 7.5, 24],
            [338, 77, 45, 48, 0, 22.5, 24],
            [383, 77, 45, 48, 0, 22.5, 24],
            [428, 77, 35, 48, 0, 17.5, 24],
            [463, 77, 45, 48, 0, 22.5, 24],
            [508, 77, 45, 48, 0, 22.5, 24],
            [553, 77, 41, 48, 0, 20.5, 24],
            [594, 77, 45, 48, 0, 22.5, 24],
            [639, 77, 35, 48, 0, 17.5, 24],
            [674, 77, 35, 48, 0, 17.5, 24],
            [709, 77, 40, 48, 0, 22.5, 24],
            [749, 77, 17, 48, 0, 7.5, 24],
            [766, 77, 190, 49, 0, 95, 24.5],
            [0, 126, 190, 49, 0, 95, 24.5],
            [190, 126, 190, 49, 0, 95, 24.5],
            [380, 126, 190, 49, 0, 95, 24.5],
            [570, 126, 190, 49, 0, 95, 24.5],
            [760, 126, 190, 49, 0, 95, 24.5],
            [0, 175, 190, 49, 0, 95, 24.5],
            [190, 175, 190, 49, 0, 95, 24.5],
            [380, 175, 190, 49, 0, 95, 24.5],
            [570, 175, 131, 66, 0, 81, 59],
            [701, 175, 50, 73, 0, 25, 36.5],
            [751, 175, 139, 77, 0, 69, -11],
            [0, 252, 165, 85, 0, 85, -8],
            [165, 252, 175, 100, 0, 90, 5],
            [340, 252, 58, 100, 0, 29, 50],
            [398, 252, 126, 111, 0, 63, 55],
            [524, 252, 176, 111, 0, 90, 15],
            [700, 252, 118, 112, 0, 59, 45],
            [818, 252, 126, 117, 0, 63, 58],
            [0, 369, 126, 120, 0, 63, 60],
            [126, 369, 126, 122, 0, 63, 61],
            [252, 369, 126, 124, 0, 63, 62],
            [378, 369, 180, 124, 0, 92, 28],
            [558, 369, 170, 126, 0, 82, 44],
            [728, 369, 50, 132, 0, 25, 66],
            [778, 369, 181, 136, 0, 93, 40],
            [0, 505, 128, 137, 0, 65, 63],
            [128, 505, 132, 139, 0, 63, 72],
            [260, 505, 132, 140, 0, 63, 72],
            [392, 505, 185, 140, 0, 95, 44],
            [577, 505, 159, 142, 0, 90, 63],
            [736, 505, 146, 144, 0, 73, 73],
            [0, 649, 146, 144, 0, 73, 73],
            [146, 649, 135, 145, 0, 63, 73],
            [281, 649, 135, 145, 0, 63, 73],
            [416, 649, 132, 145, 0, 63, 73],
            [548, 649, 135, 145, 0, 63, 73],
            [683, 649, 143, 145, 0, 70, 73],
            [826, 649, 136, 145, 0, 63, 73],
            [0, 794, 137, 145, 0, 64, 73],
            [137, 794, 136, 145, 0, 63, 73],
            [273, 794, 143, 146, 0, 71, 72],
            [416, 794, 145, 146, 0, 73, 72],
            [561, 794, 145, 146, 0, 73, 72],
            [706, 794, 185, 146, 0, 95, 50],
            [0, 940, 145, 146, 0, 73, 72],
            [145, 940, 146, 147, 0, 73, 73],
            [291, 940, 188, 155, 0, 96, 59],
            [479, 940, 167, 155, 0, 88, 59],
            [646, 940, 155, 156, 0, 73, 73],
            [801, 940, 155, 160, 0, 77, 64],
            [0, 1100, 188, 164, 0, 96, 68],
            [188, 1100, 189, 168, 0, 96, 72],
            [377, 1100, 168, 171, 0, 86, 78],
            [545, 1100, 173, 173, 0, 88, 77],
            [718, 1100, 184, 174, 0, 95, 78],
            [0, 1274, 184, 180, 0, 95, 84],
            [184, 1274, 187, 181, 0, 94, 85],
            [371, 1274, 182, 184, 0, 86, 88],
            [553, 1274, 184, 186, 0, 95, 90],
            [737, 1274, 187, 188, 0, 91, 92],
            [0, 1462, 190, 191, 0, 94, 95],
            [190, 1462, 192, 192, 0, 96, 96],
            [382, 1462, 192, 192, 0, 96, 96],
            [574, 1462, 192, 192, 0, 96, 96],
            [766, 1462, 192, 192, 0, 96, 96],
            [0, 1654, 192, 192, 0, 96, 96],
            [192, 1654, 192, 192, 0, 96, 96],
            [384, 1654, 454, 322, 0, 232, 161]
        ],
        "animations": {
            "Thrusters": { "frames": [1, 0] },
            "Enemy3_Shot": { "frames": [2] },
            "Enemy4_Shot": { "frames": [3] },
            "Enemy2_Shot": { "frames": [4] },
            "Enemy13_Shot": { "frames": [5] },
            "Enemy1_Shot": { "frames": [6] },
            "Shield": { "frames": [119, 122, 123, 124, 125, 130, 145, 146, 147, 149, 150, 135, 136, 141, 143, 142, 144, 140, 137, 138, 139, 132, 131, 121, 7], "speed": 0.5 },
            "Enemy12_Shot": { "frames": [8] },
            "Enemy10_Shot": { "frames": [9] },
            "Enemy5_Shot": { "frames": [10] },
            "Arc2_Shoot": { "frames": [11] },
            "Enemy9_Shot": { "frames": [12] },
            "Enemy6_Shot": { "frames": [13] },
            "Enemy7_Shot": { "frames": [14] },
            "Enemy8_Shot": { "frames": [15] },
            "Arc_Shoot": { "frames": [16] },
            "Arc2": { "frames": [17] },
            "Laser_Hit": { "frames": [18, 31, 30, 21], "speed": 0.25 },
            "Laser1_Hit": { "frames": [19, 24, 23, 20], "speed": 0.25 },
            "Arc1": { "frames": [22] },
            "Arc3": { "frames": [25] },
            "Laser1_Shoot": { "frames": [26, 29], "speed": 0.5 },
            "Laser_Shoot": { "frames": [28, 27], "speed": 0.5 },
            "Laser2_Hit": { "frames": [32, 33], "speed": 0.25 },
            "Laser2": { "frames": [34] },
            "Laser2_Shoot": { "frames": [35, 37], "speed": 0.5 },
            "Laser3_Shoot": { "frames": [39, 36] },
            "Laser3": { "frames": [38] },
            "Laser1": { "frames": [40] },
            "Arc4_Shoot": { "frames": [41] },
            "Bullet": { "frames": [42] },
            "Laser3_Hit": { "frames": [43, 44], "speed": 0.25 },
            "Laser4": { "frames": [45] },
            "Laser4_Hit": { "frames": [47, 46], "speed": 0.25 },
            "Laser4_Shoot": { "frames": [48, 51] },
            "Laser5_Shoot": { "frames": [50, 49] },
            "Arc5_Shoot": { "frames": [52] },
            "Laser5": { "frames": [53, 57] },
            "Laser5_Hit": { "frames": [54, 55], "speed": 0.25 },
            "Enemy13": { "frames": [56] },
            "Enemy12": { "frames": [58] },
            "Arc4": { "frames": [59] },
            "Arc5": { "frames": [60] },
            "Enemy3": { "frames": [61] },
            "Enemy9": { "frames": [62] },
            "Enemy6": { "frames": [63] },
            "Enemy8": { "frames": [64] },
            "Enemy5": { "frames": [65] },
            "Enemy11": { "frames": [66] },
            "Enemy1": { "frames": [67] },
            "Enemy4": { "frames": [68] },
            "Enemy2": { "frames": [69] },
            "Enemy7": { "frames": [70] },
            "Enemy10": { "frames": [71] },
            "BlueBox": { "frames": [72] },
            "Ship1": { "frames": [73, 78] },
            "Ship3": { "frames": [76, 74] },
            "Ship2": { "frames": [77, 75] },
            "L_coin": { "frames": [82, 80, 79, 81, 84, 83, 87, 86], "speed": 0.25 },
            "Buff": { "frames": [85, 115, 116, 117, 120, 126, 129, 133, 148, 151, 155, 156, 161, 163, 159, 160, 158, 152, 154], "speed": 0.5 },
            "E_coin": { "frames": [91, 97, 88, 100, 103, 101, 102, 99], "speed": 0.25 },
            "B_coin": { "frames": [93, 94, 98, 95, 92, 90, 89, 96], "speed": 0.25 },
            "buttonHelp": { "frames": [104] },
            "buttonDecrease": { "frames": [105] },
            "buttonContinue": { "frames": [106] },
            "buttonIncrease": { "frames": [107] },
            "buttonBack": { "frames": [108] },
            "buttonOptions": { "frames": [109] },
            "buttonStart": { "frames": [110] },
            "buttonNext": { "frames": [111] },
            "buttonUI": { "frames": [112] },
            "Explosion": { "frames": [153, 164, 167, 166, 170, 169, 171, 168, 165, 162, 157, 134, 127, 113], "speed": 0.5 },
            "F5S2": { "frames": [114] },
            "F5S4": { "frames": [118] },
            "Cruiser": { "frames": [128] },
            "Destroyer": { "frames": [172] }
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
        { id: "hit", src: "./Assets/Sounds/hit.wav" },
        { id: "buttonSingle", src: "./Assets/buttonSingle.png" },
        { id: "buttonMulti", src: "./Assets/buttonMulti.png" }
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