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
            [1, 1, 190, 49, 0, 95, 24.5],
            [1, 52, 190, 49, 0, 95, 24.5],
            [1, 103, 190, 49, 0, 95, 24.5],
            [1, 154, 190, 49, 0, 95, 24.5],
            [1, 205, 34, 43, 0, 17, 21.5],
            [37, 205, 34, 43, 0, 17, 21.5],
            [73, 205, 34, 43, 0, 17, 21.5],
            [109, 205, 34, 43, 0, 17, 21.5],
            [145, 205, 34, 43, 0, 17, 21.5],
            [181, 205, 34, 43, 0, 17, 21.5],
            [193, 1, 190, 49, 0, 95, 24.5],
            [193, 52, 190, 49, 0, 95, 24.5],
            [193, 103, 190, 49, 0, 95, 24.5],
            [193, 154, 190, 49, 0, 95, 24.5],
            [217, 205, 31, 32, 0, 15.5, 16],
            [217, 239, 13, 9, 0, 6.5, 4.5],
            [232, 239, 22, 8, 0, 11, 4],
            [250, 205, 31, 32, 0, 15.5, 16],
            [256, 239, 8, 8, 0, 4, 4],
            [266, 239, 8, 8, 0, 4, 4],
            [276, 239, 8, 8, 0, 4, 4],
            [283, 205, 32, 31, 0, 16, 15.5],
            [286, 238, 8, 8, 0, 4, 4],
            [296, 238, 8, 8, 0, 4, 4],
            [306, 238, 8, 8, 0, 4, 4],
            [316, 238, 8, 8, 0, 4, 4],
            [317, 205, 32, 31, 0, 16, 15.5],
            [326, 238, 8, 8, 0, 4, 4],
            [336, 238, 8, 8, 0, 4, 4],
            [346, 238, 8, 8, 0, 4, 4],
            [351, 205, 31, 31, 0, 15.5, 15.5],
            [356, 238, 8, 8, 0, 4, 4],
            [366, 238, 8, 8, 0, 4, 4],
            [376, 238, 8, 8, 0, 4, 4],
            [384, 205, 31, 31, 0, 15.5, 15.5],
            [386, 238, 28, 7, 0, 14, 3.5],
            [416, 238, 28, 7, 0, 14, 3.5],
            [385, 1, 45, 48, 0, 22.5, 24],
            [385, 51, 45, 48, 0, 22.5, 24],
            [385, 101, 45, 48, 0, 22.5, 24],
            [385, 151, 45, 48, 0, 22.5, 24],
            [417, 201, 31, 31, 0, 15.5, 15.5],
            [446, 234, 26, 14, 0, 13, 7],
            [432, 1, 45, 48, 0, 22.5, 24],
            [432, 51, 45, 48, 0, 22.5, 24],
            [432, 101, 45, 48, 0, 22.5, 24],
            [432, 151, 45, 48, 0, 22.5, 24],
            [450, 201, 31, 31, 0, 15.5, 15.5],
            [474, 234, 26, 14, 0, 13, 7],
            [479, 1, 45, 48, 0, 22.5, 24],
            [479, 51, 41, 48, 0, 20.5, 24],
            [479, 101, 41, 48, 0, 20.5, 24],
            [479, 151, 41, 48, 0, 20.5, 24],
            [483, 201, 30, 31, 0, 15, 15.5],
            [502, 234, 24, 14, 0, 12, 7],
            [515, 201, 30, 31, 0, 15, 15.5],
            [528, 234, 20, 14, 0, 10, 7],
            [522, 51, 40, 48, 0, 22.5, 24],
            [526, 1, 40, 48, 0, 22.5, 24],
            [522, 101, 40, 48, 0, 22.5, 24],
            [522, 151, 35, 48, 0, 17.5, 24],
            [547, 201, 42, 30, 0, 21, 15],
            [559, 151, 35, 48, 0, 17.5, 24],
            [550, 233, 15, 15, 0, 7.5, 7.5],
            [567, 233, 15, 15, 0, 7.5, 7.5],
            [584, 233, 14, 14, 0, 7, 7],
            [591, 201, 29, 30, 0, 14.5, 15],
            [600, 233, 13, 14, 0, 6.5, 7],
            [615, 233, 13, 14, 0, 6.5, 7],
            [630, 1, 35, 48, 0, 17.5, 24],
            [596, 1, 31, 28, 0, 15.5, 14],
            [568, 1, 25, 25, 0, 12.5, 12.5],
            [568, 28, 25, 25, 0, 12.5, 12.5],
            [596, 31, 30, 28, 0, 15, 14],
            [564, 55, 30, 28, 0, 15, 14],
            [667, 1, 35, 48, 0, 17.5, 24],
            [564, 85, 35, 48, 0, 17.5, 24],
            [564, 135, 12, 14, 0, 6, 7],
            [578, 135, 9, 14, 0, 4.5, 7],
            [596, 61, 21, 21, 0, 10.5, 10.5],
            [589, 135, 27, 13, 0, 13.5, 8],
            [601, 84, 35, 48, 0, 17.5, 24],
            [619, 61, 21, 21, 0, 10.5, 10.5],
            [596, 150, 17, 48, 0, 7.5, 24],
            [615, 150, 17, 48, 0, 7.5, 24],
            [630, 200, 17, 48, 0, 7.5, 24],
            [618, 134, 24, 13, 0, 12, 6.5],
            [622, 200, 4, 16, 0, 2, 8],
            [638, 84, 21, 30, 0, 10.5, 15],
            [642, 51, 34, 29, 0, 17, 14.5],
            [678, 51, 29, 29, 0, 14.5, 14.5],
            [638, 116, 14, 13, 0, 7, 8],
            [661, 82, 30, 26, 0, 15, 13],
            [693, 82, 14, 20, 0, 7, 10],
            [693, 104, 14, 20, 0, 7, 10],
            [661, 110, 29, 29, 0, 14.5, 14.5],
            [644, 131, 15, 18, 0, 7.5, 9],
            [634, 149, 8, 19, 0, 4, 9.5],
            [692, 126, 12, 24, 0, 6, 12],
            [661, 141, 28, 29, 0, 14, 14.5],
            [691, 152, 16, 19, 0, 8, 9.5],
            [644, 151, 12, 13, 0, 6, 6.5],
            [644, 166, 11, 13, 0, 6, 7],
            [634, 181, 16, 17, 0, 8, 8.5],
            [657, 172, 28, 29, 0, 14, 14.5],
            [687, 173, 20, 29, 0, 10, 14.5],
            [649, 204, 20, 29, 0, 10, 14.5],
            [671, 204, 20, 20, 0, 10, 10],
            [671, 226, 16, 18, 0, 8, 9]
        ],
        "animations": {
            "buttonBack": { "frames": [0] },
            "buttonDecrease": { "frames": [1] },
            "buttonHelp": { "frames": [2] },
            "buttonIncrease": { "frames": [3] },
            "Ship1": { "frames": [4, 5],
                "speed": 0.25 },
            "Ship2": { "frames": [6, 7],
                "speed": 0.25 },
            "Ship3": { "frames": [8, 9],
                "speed": 0.25 },
            "buttonNext": { "frames": [10] },
            "buttonOptions": { "frames": [11] },
            "buttonStart": { "frames": [12] },
            "buttonUI": { "frames": [13] },
            "Enemy10": { "frames": [14] },
            "Arc2": { "frames": [15] },
            "Arc2_Shoot": { "frames": [16] },
            "Enemy7": { "frames": [17] },
            "Arc_Shoot": { "frames": [18] },
            "Enemy10_Shot": { "frames": [19] },
            "Enemy12_Shot": { "frames": [20] },
            "Enemy5": { "frames": [21] },
            "Enemy13_Shot": { "frames": [22] },
            "Enemy1_Shot": { "frames": [23] },
            "Enemy2_Shot": { "frames": [24] },
            "Enemy3_Shot": { "frames": [25] },
            "Enemy8": { "frames": [26] },
            "Enemy4_Shot": { "frames": [27] },
            "Enemy5_Shot": { "frames": [28] },
            "Enemy6_Shot": { "frames": [29] },
            "Enemy11": { "frames": [30] },
            "Enemy7_Shot": { "frames": [31] },
            "Enemy8_Shot": { "frames": [32] },
            "Enemy9_Shot": { "frames": [33] },
            "Enemy2": { "frames": [34] },
            "Thrusters": { "frames": [35, 36] },
            "B_coin": { "frames": [37, 38, 50, 60, 83, 62, 57, 39],
                "speed": 0.25 },
            "E_coin": { "frames": [40, 43, 51, 69, 84, 75, 58, 44],
                "speed": 0.25 },
            "Enemy6": { "frames": [41] },
            "Laser1_Hit": { "frames": [86, 42, 48, 80] },
            "L_coin": { "frames": [45, 46, 52, 76, 85, 81, 59, 49],
                "speed": 0.25 },
            "Enemy9": { "frames": [47] },
            "Enemy1": { "frames": [53] },
            "Laser1_Shoot": { "frames": [56, 54] },
            "Enemy4": { "frames": [55] },
            "Arc5": { "frames": [61] },
            "Laser2_Hit": { "frames": [63, 64] },
            "Arc3": { "frames": [65] },
            "Enemy3": { "frames": [66] },
            "Laser_Hit": { "frames": [101, 67, 68, 91],
                "speed": 0.25 },
            "Laser5_Shoot": { "frames": [74, 70] },
            "Laser4_Hit": { "frames": [71, 72] },
            "Laser4_Shoot": { "frames": [92] },
            "Laser_Shoot": { "frames": [78, 77] },
            "Laser3_Hit": { "frames": [79, 82] },
            "Laser2": { "frames": [87] },
            "Arc4": { "frames": [88] },
            "Arc5_Shoot": { "frames": [89] },
            "Laser5_Hit": { "frames": [90, 95] },
            "Bullet": { "frames": [93] },
            "Laser1": { "frames": [94] },
            "Laser2_Shoot": { "frames": [103] },
            "Laser3": { "frames": [97] },
            "Laser4": { "frames": [98] },
            "Enemy12": { "frames": [99] },
            "Laser3_Shoot": { "frames": [100, 108] },
            "Arc1": { "frames": [102] },
            "Enemy13": { "frames": [104] },
            "Laser5": { "frames": [105, 106] },
            "Arc4_Shoot": { "frames": [107] }
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
        { id: "backgroundE", src: "./Assets/E_background.png" },
        { id: "bgm", src: "./Assets/Sounds/Mysterious_Mountain.mp3" },
        { id: "bgm2", src: "./Assets/Sounds/RFN - III.ogg" },
        { id: "bgm3", src: "./Assets/Sounds/The Truth Never Spoken.mp3" },
        { id: "playerDeath", src: "./Assets/Sounds/1516.mp3" },
        { id: "laser", src: "./Assets/Sounds/167.mp3" },
        { id: "bossMusic", src: "./Assets/Sounds/Sudden Death.ogg" },
        { id: "mainMenu", src: "./Assets/Sounds/cyberspace.exe.ogg" }
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