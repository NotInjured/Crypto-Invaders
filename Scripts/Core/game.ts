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
            [193, 723, 190, 49, 0, 95, 24.5],
            [385, 723, 34, 38, 0, 17, 19],
            [385, 763, 34, 38, 0, 17, 19],
            [421, 723, 34, 38, 0, 17, 19],
            [421, 763, 42, 30, 0, 21, 15],
            [457, 723, 21, 30, 0, 10.5, 15],
            [421, 795, 29, 29, 0, 14.5, 14.5],
            [452, 795, 29, 29, 0, 14.5, 14.5],
            [465, 755, 12, 24, 0, 6, 12],
            [465, 781, 13, 9, 0, 6.5, 4.5],
            [1, 774, 190, 49, 0, 95, 24.5],
            [193, 803, 190, 49, 0, 95, 24.5],
            [1, 825, 190, 49, 0, 95, 24.5],
            [385, 826, 31, 28, 0, 15.5, 14],
            [385, 803, 26, 14, 0, 13, 7],
            [413, 803, 4, 16, 0, 2, 8],
            [193, 854, 190, 49, 0, 95, 24.5],
            [418, 826, 28, 29, 0, 14, 14.5],
            [385, 856, 28, 29, 0, 14, 14.5],
            [415, 857, 30, 28, 0, 15, 14],
            [447, 857, 20, 29, 0, 10, 14.5],
            [448, 826, 30, 28, 0, 15, 14],
            [385, 887, 30, 26, 0, 15, 13],
            [417, 887, 25, 25, 0, 12.5, 12.5],
            [444, 888, 25, 25, 0, 12.5, 12.5],
            [469, 856, 8, 19, 0, 4, 9.5],
            [193, 774, 28, 7, 0, 14, 3.5],
            [223, 774, 28, 7, 0, 14, 3.5],
            [253, 774, 27, 13, 0, 13.5, 8],
            [193, 783, 26, 14, 0, 13, 7],
            [221, 783, 24, 14, 0, 12, 7],
            [282, 774, 24, 13, 0, 12, 6.5],
            [308, 774, 21, 21, 0, 10.5, 10.5],
            [331, 774, 21, 21, 0, 10.5, 10.5],
            [354, 774, 16, 19, 0, 8, 9.5],
            [372, 774, 11, 13, 0, 6, 7],
            [1, 876, 20, 29, 0, 10, 14.5],
            [23, 876, 20, 14, 0, 10, 7],
            [45, 876, 16, 18, 0, 8, 9],
            [23, 892, 14, 20, 0, 7, 10],
            [63, 876, 16, 17, 0, 8, 8.5],
            [81, 876, 15, 18, 0, 7.5, 9],
            [63, 895, 14, 20, 0, 7, 10],
            [39, 896, 15, 15, 0, 7.5, 7.5],
            [98, 876, 15, 15, 0, 7.5, 7.5],
            [115, 876, 14, 14, 0, 7, 7]
        ],
        
        "animations": {
            "HUD": { "frames": [0] },
            "panelInfo": { "frames": [1] },
            "panelUI": { "frames": [2] },
            "buttonBack": { "frames": [3] },
            "buttonHelp": { "frames": [4] },
            "Ship1": { "frames": [5] },
            "Ship2": { "frames": [6] },
            "Ship3": { "frames": [7] },
            "Arc5": { "frames": [8] },
            "Arc4": { "frames": [9] },
            "Laser5_Hit": { "frames": [10, 11] },
            "Laser4": { "frames": [12] },
            "Arc2": { "frames": [13] },
            "buttonNext": { "frames": [14] },
            "buttonOptions": { "frames": [15] },
            "buttonStart": { "frames": [16] },
            "Laser5_Shoot": { "frames": [25, 17] },
            "Laser1_Hit": { "frames": [35, 18, 33, 32] },
            "Laser2": { "frames": [19] },
            "buttonUI": { "frames": [20] },
            "Enemy": { "frames": [21] },
            "Enemy2": { "frames": [22] },
            "Laser4_Shoot": { "frames": [26] },
            "Laser5": { "frames": [24, 40],
                        "speed" : 0.1
                    },
            "Laser4_Hit": { "frames": [27, 28] },
            "Laser3": { "frames": [29] },
            "Thrusters": { "frames": [30, 31] },
            "Laser1_Shoot": { "frames": [41] },
            "Laser3_Hit": { "frames": [36, 37] },
            "Laser3_Shoot": { "frames": [38, 42] },
            "Arc1": { "frames": [39] },
            "Bullet": { "frames": [43] },
            "Laser2_Shoot": { "frames": [44, 45] },
            "Laser1": { "frames": [46] },
            "Laser2_Hit": { "frames": [47, 48] },
            "Arc3": { "frames": [49] }
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
    }

    window.onload = Init;
})();