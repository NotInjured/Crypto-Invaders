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
            [1, 1, 480, 720, 0, 0, 0],
            [483, 1, 437, 456, 0, 218.5, 228],
            [483, 459, 437, 456, 0, 218.5, 228],
            [1, 723, 190, 49, 0, 95, 24.5],
            [1, 774, 190, 49, 0, 95, 24.5],
            [1, 825, 190, 49, 0, 95, 24.5],
            [1, 876, 34, 43, 0, 17, 21.5],
            [37, 876, 34, 43, 0, 17, 21.5],
            [73, 876, 34, 43, 0, 17, 21.5],
            [109, 876, 34, 43, 0, 17, 21.5],
            [145, 876, 34, 43, 0, 17, 21.5],
            [181, 876, 34, 43, 0, 17, 21.5],
            [217, 723, 190, 49, 0, 95, 24.5],
            [193, 723, 22, 8, 0, 11, 4],
            [193, 733, 21, 30, 0, 10.5, 15],
            [193, 765, 21, 21, 0, 10.5, 10.5],
            [409, 723, 42, 30, 0, 21, 15],
            [453, 723, 28, 29, 0, 14, 14.5],
            [453, 754, 28, 29, 0, 14, 14.5],
            [409, 755, 34, 29, 0, 17, 14.5],
            [217, 774, 190, 49, 0, 95, 24.5],
            [193, 825, 190, 49, 0, 95, 24.5],
            [193, 788, 21, 21, 0, 10.5, 10.5],
            [445, 755, 4, 16, 0, 2, 8],
            [193, 811, 13, 9, 0, 6.5, 4.5],
            [445, 785, 31, 28, 0, 15.5, 14],
            [409, 786, 30, 28, 0, 15, 14],
            [441, 815, 30, 28, 0, 15, 14],
            [409, 816, 30, 26, 0, 15, 13],
            [473, 815, 8, 19, 0, 4, 9.5],
            [473, 836, 8, 13, 0, 4, 6.5],
            [385, 825, 20, 29, 0, 10, 14.5],
            [407, 844, 29, 29, 0, 14.5, 14.5],
            [385, 856, 20, 29, 0, 10, 14.5],
            [217, 887, 29, 29, 0, 14.5, 14.5],
            [217, 876, 8, 8, 0, 4, 4],
            [227, 876, 28, 7, 0, 14, 3.5],
            [438, 845, 28, 7, 0, 14, 3.5],
            [468, 851, 13, 14, 0, 6.5, 7],
            [438, 854, 27, 13, 0, 13.5, 8],
            [467, 867, 14, 20, 0, 7, 10],
            [438, 869, 26, 14, 0, 13, 7],
            [407, 875, 26, 14, 0, 13, 7],
            [248, 891, 25, 25, 0, 12.5, 12.5],
            [257, 876, 24, 13, 0, 12, 6.5],
            [275, 891, 25, 25, 0, 12.5, 12.5],
            [283, 876, 14, 13, 0, 7, 8],
            [299, 876, 12, 13, 0, 6, 6.5],
            [302, 891, 12, 24, 0, 6, 12],
            [313, 876, 11, 13, 0, 6, 7],
            [435, 885, 24, 14, 0, 12, 7],
            [461, 889, 20, 20, 0, 10, 10],
            [316, 901, 16, 18, 0, 8, 9],
            [334, 901, 15, 18, 0, 7.5, 9],
            [351, 901, 16, 17, 0, 8, 8.5],
            [369, 876, 14, 20, 0, 7, 10],
            [385, 887, 20, 14, 0, 10, 7],
            [369, 898, 14, 14, 0, 7, 7],
            [385, 903, 15, 15, 0, 7.5, 7.5],
            [402, 903, 15, 15, 0, 7.5, 7.5],
            [419, 891, 13, 14, 0, 6.5, 7],
            [434, 901, 12, 14, 0, 6, 7],
            [448, 901, 9, 14, 0, 4.5, 7],
            [326, 876, 16, 19, 0, 8, 9.5]
        ],
        
        "animations": {
            "HUD": { "frames": [0] },
            "panelInfo": { "frames": [1] },
            "panelUI": { "frames": [2] },
            "buttonBack": { "frames": [3] },
            "buttonHelp": { "frames": [4] },
            "buttonNext": { "frames": [5] },
            "Ship1": { "frames": [6, 7],
                    "speed": 0.25 },
            "Ship2": { "frames": [8, 9],
                    "speed": 0.25 },
            "Ship3": { "frames": [10, 11],
                    "speed": 0.25 },
            "buttonOptions": { "frames": [12] },
            "Arc2_Shoot": { "frames": [13] },
            "Arc4": { "frames": [14] },
            "Laser3_Hit": { "frames": [15, 22] },
            "Arc5": { "frames": [16] },
            "Enemy": { "frames": [17] },
            "Enemy2": { "frames": [18] },
            "Arc5_Shoot": { "frames": [19] },
            "buttonStart": { "frames": [20] },
            "buttonUI": { "frames": [21] },
            "Laser2": { "frames": [23] },
            "Arc2": { "frames": [24] },
            "Laser5_Shoot": { "frames": [27, 25] },
            "Laser4_Shoot": { "frames": [28] },
            "Laser3": { "frames": [29] },
            "Enemy_Shot": { "frames": [30] },
            "Laser5": { "frames": [31, 33] },
            "Laser5_Hit": { "frames": [32, 34] },
            "Arc_Shoot": { "frames": [35] },
            "Thrusters": { "frames": [36, 37] },
            "Laser_Hit": { "frames": [47, 38, 60, 46] },
            "Laser1_Hit": { "frames": [44, 41, 42, 39] },
            "Bullet": { "frames": [40] },
            "Laser4_Hit": { "frames": [43, 45] },
            "Laser4": { "frames": [48] },
            "Arc1": { "frames": [49] },
            "Laser1_Shoot": { "frames": [56, 50] },
            "Arc4_Shoot": { "frames": [51] },
            "Laser3_Shoot": { "frames": [63] },
            "Laser2_Shoot": { "frames": [54] },
            "Laser1": { "frames": [55] },
            "Arc3": { "frames": [57] },
            "Laser2_Hit": { "frames": [58, 59] },
            "Laser_Shoot": { "frames": [62, 61] }
        }
    }

    assetManifest = [
        {id: "background", src:"./Assets/background.png"}
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