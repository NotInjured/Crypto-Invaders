// Immediate Invoked Anonymous Function
/// <reference path="_references.ts"/>
(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene and state information
    let currentScene:objects.Scene;
    let currentState:number;

    let textureSpriteData: any;
    let textureSprite: createjs.SpriteSheet;

    let keyboardManager: managers.Keyboard;

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
            [1, 352, 34, 43, 0, 17, 21.5],
            [1, 397, 31, 28, 0, 15.5, 14],
            [37, 307, 34, 43, 0, 17, 21.5],
            [193, 91, 34, 43, 0, 17, 21.5],
            [73, 307, 42, 30, 0, 21, 15],
            [37, 352, 34, 29, 0, 17, 14.5],
            [193, 136, 32, 31, 0, 16, 15.5],
            [73, 339, 31, 32, 0, 15.5, 16],
            [193, 169, 32, 31, 0, 16, 15.5],
            [193, 202, 31, 32, 0, 15.5, 16],
            [193, 236, 31, 31, 0, 15.5, 15.5],
            [193, 269, 31, 31, 0, 15.5, 15.5],
            [226, 202, 29, 30, 0, 14.5, 15],
            [226, 234, 29, 29, 0, 14.5, 14.5],
            [226, 265, 29, 29, 0, 14.5, 14.5],
            [117, 307, 31, 31, 0, 15.5, 15.5],
            [150, 307, 31, 31, 0, 15.5, 15.5],
            [34, 397, 30, 28, 0, 15, 14],
            [227, 136, 28, 29, 0, 14, 14.5],
            [227, 167, 28, 29, 0, 14, 14.5],
            [229, 1, 26, 14, 0, 13, 7],
            [229, 17, 26, 14, 0, 13, 7],
            [229, 33, 21, 30, 0, 10.5, 15],
            [106, 340, 30, 31, 0, 15, 15.5],
            [138, 340, 30, 31, 0, 15, 15.5],
            [229, 65, 20, 29, 0, 10, 14.5],
            [229, 96, 20, 29, 0, 10, 14.5],
            [170, 340, 30, 28, 0, 15, 14],
            [73, 373, 30, 26, 0, 15, 13],
            [105, 373, 25, 25, 0, 12.5, 12.5],
            [105, 400, 25, 25, 0, 12.5, 12.5],
            [66, 401, 12, 24, 0, 6, 12],
            [132, 373, 21, 21, 0, 10.5, 10.5],
            [80, 401, 21, 21, 0, 10.5, 10.5],
            [132, 396, 20, 20, 0, 10, 10],
            [132, 418, 28, 7, 0, 14, 3.5],
            [37, 383, 28, 7, 0, 14, 3.5],
            [67, 383, 4, 16, 0, 2, 8],
            [155, 373, 14, 20, 0, 7, 10],
            [171, 370, 27, 13, 0, 13.5, 8],
            [171, 385, 24, 13, 0, 12, 6.5],
            [183, 307, 14, 20, 0, 7, 10],
            [183, 329, 13, 9, 0, 6.5, 4.5],
            [199, 302, 24, 14, 0, 12, 7],
            [199, 318, 22, 8, 0, 11, 4],
            [226, 296, 20, 14, 0, 10, 7],
            [202, 328, 16, 19, 0, 8, 9.5],
            [202, 349, 16, 18, 0, 8, 9],
            [154, 396, 15, 18, 0, 7.5, 9],
            [171, 400, 16, 17, 0, 8, 8.5],
            [189, 400, 8, 19, 0, 4, 9.5],
            [225, 312, 15, 15, 0, 7.5, 7.5],
            [242, 312, 13, 14, 0, 6.5, 7],
            [242, 328, 13, 14, 0, 6.5, 7],
            [220, 329, 15, 15, 0, 7.5, 7.5],
            [220, 346, 14, 14, 0, 7, 7],
            [220, 362, 14, 13, 0, 7, 8],
            [197, 385, 11, 13, 0, 6.000005, 7.000006],
            [199, 400, 9, 14, 0, 4.5, 7],
            [200, 370, 8, 13, 0, 4, 6.5],
            [210, 369, 8, 8, 0, 4, 4],
            [210, 379, 10, 14, 0, 5, 7],
            [210, 395, 10, 14, 0, 5, 7],
            [210, 411, 12, 14, 0, 6, 7],
            [222, 377, 12, 13, 0, 6, 6.5],
            [222, 392, 10, 14, 0, 5, 7],
            [224, 408, 9, 14, 0, 4.5, 7],
            [234, 392, 9, 14, 0, 4.5, 7],
            [235, 408, 9, 14, 0, 4.5, 7],
            [246, 344, 9, 14, 0, 4.5, 7],
            [246, 360, 9, 14, 0, 4.5, 7],
            [246, 376, 9, 14, 0, 4.5, 7],
            [245, 392, 9, 14, 0, 4.5, 7],
            [246, 408, 9, 14, 0, 4.5, 7]
        ],
        
        "animations":{
            "buttonBack": { "frames": [0] },
            "buttonHelp": { "frames": [1] },
            "buttonNext": { "frames": [2] },
            "buttonOptions": { "frames": [3] },
            "buttonStart": { "frames": [4] },
            "buttonUI": { "frames": [5] },
            "Ship1": { "frames": [6, 7],
                "speed":0.25 },
            "Ship2": { "frames": [8, 9],
                "speed":0.25 },
            "Laser5_Shoot": { "frames": [36, 10] },
            "Ship3": { "frames": [11, 12],
                "speed":0.25 },
            "Arc5": { "frames": [13] },
            "Arc5_Shoot": { "frames": [14] },
            "Enemy10": { "frames": [15] },
            "Enemy12": { "frames": [16] },
            "Enemy7": { "frames": [17] },
            "Enemy9": { "frames": [18] },
            "Enemy11": { "frames": [19] },
            "Enemy13": { "frames": [20] },
            "Enemy3": { "frames": [21] },
            "Laser5_Hit": { "frames": [22, 23] },
            "Enemy5": { "frames": [24] },
            "Enemy8": { "frames": [25] },
            "Laser4_Shoot": { "frames": [37] },
            "Enemy": { "frames": [27] },
            "Enemy2": { "frames": [28] },
            "Laser1_Hit": { "frames": [49, 29, 30, 48] },
            "Arc4": { "frames": [31] },
            "Enemy4": { "frames": [32] },
            "Enemy6": { "frames": [33] },
            "Laser5": { "frames": [34, 35] },
            "Laser4_Hit": { "frames": [38, 39] },
            "Laser4": { "frames": [40] },
            "Laser3_Hit": { "frames": [41, 42] },
            "Arc4_Shoot": { "frames": [43] },
            "Thrusters": { "frames": [44, 45] },
            "Laser2": { "frames": [46] },
            "Bullet": { "frames": [47] },
            "Laser1": { "frames": [50] },
            "Arc2": { "frames": [51] },
            "Laser1_Shoot": { "frames": [54, 52] },
            "Arc2_Shoot": { "frames": [53] },
            "Laser3_Shoot": { "frames": [55, 56] },
            "Laser2_Shoot": { "frames": [58] },
            "Laser3": { "frames": [59] },
            "Laser2_Hit": { "frames": [60, 63] },
            "Laser_Hit": { "frames": [73, 61, 62, 65] },
            "Arc3": { "frames": [64] },
            "Arc1": { "frames": [66] },
            "Enemy10_Shot": { "frames": [67] },
            "Enemy_Shot": { "frames": [68] },
            "Arc_Shoot": { "frames": [69] },
            "Enemy11_Shot": { "frames": [70] },
            "Enemy13_Shot": { "frames": [71] },
            "Laser_Shoot": { "frames": [82, 72] },
            "Enemy2_Shot": { "frames": [74] },
            "Enemy3_Shot": { "frames": [75] },
            "Enemy4_Shot": { "frames": [76] },
            "Enemy5_Shot": { "frames": [77] },
            "Enemy6_Shot": { "frames": [78] },
            "Enemy7_Shot": { "frames": [79] },
            "Enemy8_Shot": { "frames": [80] },
            "Enemy9_Shot": { "frames": [81] }
        }
    }

    assetManifest = [
        {id: "background", src:"./Assets/background.png"},
        {id: "bg1", src:"./Assets/9999.png"},
        {id: "aircraft", src:"./Assets/Aircraft.png"},
        {id: "panelInfo", src:"./Assets/panelInfo.png"},
        {id: "panelUI", src:"./Assets/panelUI.png"},
        {id: "HUD", src:"./Assets/HUD.png"}
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
        if(currentState != managers.Game.currentScene) {
            console.log(managers.Game.currentScene);
            Main();
        }

        currentScene.Update();

        stage.update();
    }

    function clickableButtonMouseClick():void {
        console.log("AHHHHHHH");
    }

    function Main() {
        console.log("Game Start...");

        // Finite State Machine
        switch(managers.Game.currentScene) {
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