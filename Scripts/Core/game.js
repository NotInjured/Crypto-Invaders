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
            [1, 103, 190, 49, 0, 95, 24.5],
            [1, 154, 190, 49, 0, 95, 24.5],
            [1, 205, 190, 49, 0, 95, 24.5],
            [1, 256, 190, 49, 0, 95, 24.5],
            [193, 1, 34, 43, 0, 17, 21.5],
            [1, 307, 34, 43, 0, 17, 21.5],
            [193, 46, 34, 43, 0, 17, 21.5],
            [37, 307, 34, 43, 0, 17, 21.5],
            [193, 91, 34, 43, 0, 17, 21.5],
            [73, 307, 34, 43, 0, 17, 21.5],
            [109, 307, 42, 30, 0, 21, 15],
            [193, 136, 34, 29, 0, 17, 14.5],
            [1, 352, 20, 20, 0, 10, 10],
            [153, 307, 31, 28, 0, 15.5, 14],
            [193, 167, 30, 28, 0, 15, 14],
            [225, 167, 28, 29, 0, 14, 14.5],
            [193, 197, 30, 28, 0, 15, 14],
            [225, 198, 28, 29, 0, 14, 14.5],
            [193, 227, 30, 26, 0, 15, 13],
            [193, 255, 29, 29, 0, 14.5, 14.5],
            [224, 255, 29, 29, 0, 14.5, 14.5],
            [229, 1, 24, 14, 0, 12, 7],
            [229, 17, 24, 13, 0, 12, 6.5],
            [229, 32, 21, 30, 0, 10.5, 15],
            [23, 352, 14, 20, 0, 7, 10],
            [39, 352, 14, 20, 0, 7, 10],
            [225, 229, 12, 24, 0, 6, 12],
            [229, 64, 20, 29, 0, 10, 14.5],
            [229, 95, 20, 29, 0, 10, 14.5],
            [239, 229, 14, 14, 0, 7, 7],
            [193, 286, 25, 25, 0, 12.5, 12.5],
            [220, 286, 25, 25, 0, 12.5, 12.5],
            [229, 126, 21, 21, 0, 10.5, 10.5],
            [55, 352, 26, 14, 0, 13, 7],
            [83, 352, 26, 14, 0, 13, 7],
            [186, 313, 21, 21, 0, 10.5, 10.5],
            [209, 313, 27, 13, 0, 13.5, 8],
            [238, 313, 15, 18, 0, 7.5, 9],
            [109, 339, 28, 7, 0, 14, 3.5],
            [229, 149, 20, 14, 0, 10, 7],
            [111, 348, 16, 19, 0, 8, 9.5],
            [209, 328, 22, 8, 0, 11, 4],
            [153, 337, 28, 7, 0, 14, 3.5],
            [129, 348, 8, 19, 0, 4, 9.5],
            [139, 339, 12, 14, 0, 6, 7],
            [139, 355, 16, 17, 0, 8, 8.5],
            [239, 245, 8, 8, 0, 4, 4],
            [157, 346, 16, 18, 0, 8, 9],
            [175, 346, 15, 15, 0, 7.5, 7.5],
            [175, 363, 13, 9, 0, 6.5, 4.5],
            [192, 336, 15, 15, 0, 7.5, 7.5],
            [209, 338, 14, 13, 0, 7, 8],
            [192, 353, 13, 14, 0, 6.5, 7],
            [207, 353, 13, 14, 0, 6.5, 7],
            [247, 286, 4, 16, 0, 2, 8],
            [225, 338, 11, 13, 0, 6.000005, 7.000006],
            [222, 353, 12, 13, 0, 6, 6.5],
            [238, 333, 9, 14, 0, 4.5, 7],
            [236, 353, 8, 13, 0, 4, 6.5]
        ],
        "animations": {
            "buttonBack": { "frames": [0] },
            "buttonHelp": { "frames": [1] },
            "buttonNext": { "frames": [2] },
            "buttonOptions": { "frames": [3] },
            "buttonStart": { "frames": [4] },
            "buttonUI": { "frames": [5] },
            "Ship1": { "frames": [6, 7],
                "speed": 0.25 },
            "Ship2": { "frames": [8, 9],
                "speed": 0.25 },
            "Ship3": { "frames": [10, 11],
                "speed": 0.25 },
            "Arc5": { "frames": [12] },
            "Arc5_Shoot": { "frames": [13] },
            "Arc4_Shoot": { "frames": [14] },
            "Laser5_Shoot": { "frames": [18, 15] },
            "Laser4_Shoot": { "frames": [20] },
            "Enemy": { "frames": [17] },
            "Enemy2": { "frames": [19] },
            "Laser5_Hit": { "frames": [21, 22] },
            "Laser1_Shoot": { "frames": [41, 23] },
            "Laser1_Hit": { "frames": [24, 35, 36, 38] },
            "Arc4": { "frames": [25] },
            "Bullet": { "frames": [26] },
            "Laser1": { "frames": [27] },
            "Laser4": { "frames": [28] },
            "Laser5": { "frames": [29, 30] },
            "Arc3": { "frames": [31] },
            "Laser4_Hit": { "frames": [32, 33] },
            "Laser3_Hit": { "frames": [34, 37] },
            "Laser2_Shoot": { "frames": [47] },
            "Thrusters": { "frames": [40, 44] },
            "Laser3_Shoot": { "frames": [42, 49] },
            "Arc2_Shoot": { "frames": [43] },
            "Laser3": { "frames": [45] },
            "Laser_Shoot": { "frames": [59, 46] },
            "Arc_Shoot": { "frames": [48] },
            "Laser2_Hit": { "frames": [50, 52] },
            "Arc2": { "frames": [51] },
            "Laser_Hit": { "frames": [58, 54, 55, 53] },
            "Laser2": { "frames": [56] },
            "Arc1": { "frames": [57] },
            "Enemy_Shot": { "frames": [60] }
        }
    };
    assetManifest = [
        { id: "background", src: "./Assets/background.png" },
        { id: "bg1", src: "./Assets/9999.png" },
        { id: "aircraft", src: "./Assets/Aircraft.png" },
        { id: "panelInfo", src: "./Assets/panelInfo.png" },
        { id: "panelUI", src: "./Assets/panelUI.png" },
        { id: "HUD", src: "./Assets/HUD.png" }
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
                currentScene = new scenes.StartScene();
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