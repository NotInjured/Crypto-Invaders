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
            [193, 1, 190, 49, 0, 95, 24.5],
            [1, 103, 190, 49, 0, 95, 24.5],
            [193, 52, 190, 49, 0, 95, 24.5],
            [385, 1, 190, 49, 0, 95, 24.5],
            [1, 154, 190, 49, 0, 95, 24.5],
            [193, 103, 190, 49, 0, 95, 24.5],
            [385, 52, 45, 48, 0, 22.5, 24],
            [577, 1, 45, 48, 0, 22.5, 24],
            [193, 154, 45, 48, 0, 22.5, 24],
            [385, 102, 45, 48, 0, 22.5, 24],
            [432, 52, 45, 48, 0, 22.5, 24],
            [624, 1, 45, 48, 0, 22.5, 24],
            [671, 1, 32, 31, 0, 16, 15.5],
            [240, 154, 45, 48, 0, 22.5, 24],
            [432, 102, 45, 48, 0, 22.5, 24],
            [479, 52, 45, 48, 0, 22.5, 24],
            [287, 154, 41, 48, 0, 20.5, 24],
            [479, 102, 41, 48, 0, 20.5, 24],
            [526, 52, 41, 48, 0, 20.5, 24],
            [330, 154, 40, 48, 0, 22.5, 24],
            [522, 102, 40, 48, 0, 22.5, 24],
            [671, 34, 32, 31, 0, 16, 15.5],
            [1, 205, 34, 43, 0, 17, 21.5],
            [37, 205, 34, 43, 0, 17, 21.5],
            [73, 205, 34, 43, 0, 17, 21.5],
            [109, 205, 34, 43, 0, 17, 21.5],
            [145, 205, 34, 43, 0, 17, 21.5],
            [372, 154, 35, 48, 0, 17.5, 24],
            [409, 152, 40, 48, 0, 22.5, 24],
            [451, 152, 35, 48, 0, 17.5, 24],
            [488, 152, 35, 48, 0, 17.5, 24],
            [525, 152, 35, 48, 0, 17.5, 24],
            [569, 52, 17, 48, 0, 7.5, 24],
            [588, 51, 35, 48, 0, 17.5, 24],
            [625, 51, 35, 48, 0, 17.5, 24],
            [564, 102, 17, 48, 0, 7.5, 24],
            [562, 152, 17, 48, 0, 7.5, 24],
            [662, 67, 34, 43, 0, 17, 21.5],
            [409, 202, 42, 30, 0, 21, 15],
            [453, 202, 34, 29, 0, 17, 14.5],
            [489, 202, 31, 31, 0, 15.5, 15.5],
            [522, 202, 31, 32, 0, 15.5, 16],
            [555, 202, 31, 32, 0, 15.5, 16],
            [181, 205, 31, 31, 0, 15.5, 15.5],
            [181, 238, 27, 13, 0, 13.5, 8],
            [214, 204, 31, 31, 0, 15.5, 15.5],
            [247, 204, 31, 31, 0, 15.5, 15.5],
            [280, 204, 30, 31, 0, 15, 15.5],
            [312, 204, 30, 31, 0, 15, 15.5],
            [344, 204, 29, 30, 0, 14.5, 15],
            [375, 204, 31, 28, 0, 15.5, 14],
            [214, 237, 26, 14, 0, 13, 7],
            [242, 237, 26, 14, 0, 13, 7],
            [270, 237, 24, 14, 0, 12, 7],
            [296, 237, 20, 14, 0, 10, 7],
            [318, 237, 14, 14, 0, 7, 7],
            [334, 237, 13, 14, 0, 6.5, 7],
            [349, 236, 15, 15, 0, 7.5, 7.5],
            [366, 236, 15, 15, 0, 7.5, 7.5],
            [383, 234, 16, 17, 0, 8, 8.5],
            [401, 234, 24, 13, 0, 12, 6.5],
            [583, 102, 21, 30, 0, 10.5, 15],
            [606, 101, 30, 28, 0, 15, 14],
            [638, 101, 20, 29, 0, 10, 14.5],
            [660, 112, 30, 26, 0, 15, 13],
            [583, 134, 28, 29, 0, 14, 14.5],
            [581, 165, 29, 29, 0, 14.5, 14.5],
            [613, 131, 20, 29, 0, 10, 14.5],
            [588, 196, 28, 29, 0, 14, 14.5],
            [635, 132, 21, 21, 0, 10.5, 10.5],
            [658, 140, 30, 28, 0, 15, 14],
            [635, 155, 21, 21, 0, 10.5, 10.5],
            [613, 162, 20, 20, 0, 10, 10],
            [658, 170, 29, 29, 0, 14.5, 14.5],
            [689, 170, 14, 20, 0, 7, 10],
            [689, 192, 14, 20, 0, 7, 10],
            [588, 227, 28, 7, 0, 14, 3.5],
            [453, 233, 16, 18, 0, 8, 9],
            [471, 233, 15, 18, 0, 7.5, 9],
            [488, 235, 28, 7, 0, 14, 3.5],
            [692, 112, 11, 13, 0, 6, 7],
            [427, 234, 22, 8, 0, 11, 4],
            [690, 140, 13, 14, 0, 6.5, 7],
            [690, 156, 13, 9, 0, 6.5, 4.5],
            [618, 184, 25, 25, 0, 12.5, 12.5],
            [618, 211, 25, 25, 0, 12.5, 12.5],
            [645, 201, 12, 24, 0, 6, 12],
            [659, 201, 16, 19, 0, 8, 9.5],
            [677, 201, 10, 14, 0, 5, 7],
            [689, 214, 14, 13, 0, 7, 8],
            [677, 217, 10, 14, 0, 5, 7],
            [645, 178, 8, 19, 0, 4, 9.5],
            [645, 227, 12, 13, 0, 6, 6.5],
            [659, 222, 12, 14, 0, 6, 7],
            [659, 238, 8, 13, 0, 4, 6.5],
            [698, 67, 4, 16, 0, 2, 8],
            [692, 127, 8, 8, 0, 4, 4],
            [518, 236, 10, 14, 0, 5, 7],
            [530, 236, 9, 14, 0, 4.5, 7],
            [541, 236, 9, 14, 0, 4.5, 7],
            [552, 236, 9, 14, 0, 4.5, 7],
            [563, 236, 9, 14, 0, 4.5, 7],
            [574, 236, 9, 14, 0, 4.5, 7],
            [585, 236, 9, 14, 0, 4.5, 7],
            [596, 236, 9, 14, 0, 4.5, 7],
            [607, 236, 9, 14, 0, 4.5, 7],
            [689, 229, 9, 14, 0, 4.5, 7]
        ],
        "animations": {
            "buttonBack": { "frames": [0] },
            "buttonDecrease": { "frames": [1] },
            "buttonHelp": { "frames": [2] },
            "buttonIncrease": { "frames": [3] },
            "buttonNext": { "frames": [4] },
            "buttonOptions": { "frames": [5] },
            "buttonStart": { "frames": [6] },
            "buttonUI": { "frames": [7] },
            "B_coin": { "frames": [8, 9, 18, 29, 34, 31, 21, 10],
                "speed": 0.25 },
            "E_coin": { "frames": [11, 12, 19, 32, 37, 33, 22, 13],
                "speed": 0.25 },
            "Enemy10": { "frames": [14] },
            "L_coin": { "frames": [15, 16, 20, 35, 38, 36, 30, 17],
                "speed": 0.25 },
            "Enemy7": { "frames": [23] },
            "Ship1": { "frames": [24, 25],
                "speed": 0.25 },
            "Ship2": { "frames": [26, 27],
                "speed": 0.25 },
            "Ship3": { "frames": [28, 39],
                "speed": 0.25 },
            "Arc5": { "frames": [40] },
            "Arc5_Shoot": { "frames": [41] },
            "Enemy11": { "frames": [42] },
            "Enemy12": { "frames": [43] },
            "Enemy9": { "frames": [44] },
            "Enemy13": { "frames": [45] },
            "Laser1_Hit": { "frames": [62, 53, 54, 46] },
            "Enemy5": { "frames": [47] },
            "Enemy8": { "frames": [48] },
            "Enemy4": { "frames": [49] },
            "Enemy6": { "frames": [50] },
            "Enemy3": { "frames": [51] },
            "Laser5_Shoot": { "frames": [72, 52] },
            "Laser1_Shoot": { "frames": [56, 55] },
            "Arc3": { "frames": [57] },
            "Laser_Hit": { "frames": [94, 58, 84, 91],
                "speed": 0.25 },
            "Laser2_Hit": { "frames": [59, 60] },
            "Laser2_Shoot": { "frames": [61, 80] },
            "Arc4": { "frames": [63] },
            "Laser4_Shoot": { "frames": [66] },
            "Laser5": { "frames": [65, 69] },
            "Enemy": { "frames": [67] },
            "Laser5_Hit": { "frames": [68, 75] },
            "Enemy2": { "frames": [70] },
            "Laser3_Hit": { "frames": [71, 73] },
            "Arc4_Shoot": { "frames": [74] },
            "Bullet": { "frames": [76] },
            "Laser1": { "frames": [77] },
            "Thrusters": { "frames": [78, 81] },
            "Laser3_Shoot": { "frames": [89] },
            "Arc1": { "frames": [82] },
            "Arc2_Shoot": { "frames": [83] },
            "Arc2": { "frames": [85] },
            "Laser4_Hit": { "frames": [86, 87] },
            "Laser4": { "frames": [88] },
            "Enemy11_Shot": { "frames": [90] },
            "Enemy13_Shot": { "frames": [92] },
            "Laser3": { "frames": [93] },
            "Laser_Shoot": { "frames": [108, 95] },
            "Enemy_Shot": { "frames": [96] },
            "Laser2": { "frames": [97] },
            "Arc_Shoot": { "frames": [98] },
            "Enemy2_Shot": { "frames": [99] },
            "Enemy10_Shot": { "frames": [100] },
            "Enemy3_Shot": { "frames": [101] },
            "Enemy4_Shot": { "frames": [102] },
            "Enemy5_Shot": { "frames": [103] },
            "Enemy6_Shot": { "frames": [104] },
            "Enemy7_Shot": { "frames": [105] },
            "Enemy8_Shot": { "frames": [106] },
            "Enemy9_Shot": { "frames": [107] }
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
                currentScene = new scenes.OptionsScene();
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