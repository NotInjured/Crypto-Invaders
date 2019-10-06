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
            [1, 876, 34, 38, 0, 0, 0],
            [37, 876, 34, 38, 0, 0, 0],
            [73, 876, 34, 38, 0, 0, 0],
            [109, 876, 42, 30, 0, 21, 15],
            [109, 908, 28, 7, 0, 14, 3.5],
            [139, 908, 28, 7, 0, 14, 3.5],
            [153, 876, 21, 30, 0, 10.5, 15],
            [169, 908, 16, 4, 0, 8, 2],
            [176, 876, 29, 29, 0, 14.5, 14.5],
            [187, 907, 19, 8, 0, 9.5, 4],
            [208, 723, 190, 49, 0, 95, 24.5],
            [193, 723, 13, 9, 0, 6.5, 4.5],
            [193, 734, 11, 13, 0, 6, 7],
            [400, 723, 31, 28, 0, 15.5, 14],
            [433, 723, 30, 28, 0, 15, 14],
            [465, 723, 16, 19, 0, 8, 9.5],
            [465, 744, 16, 18, 0, 8, 9],
            [400, 753, 30, 28, 0, 15, 14],
            [208, 774, 190, 49, 0, 95, 24.5],
            [193, 825, 190, 49, 0, 95, 24.5],
            [207, 876, 29, 29, 0, 14.5, 14.5],
            [432, 753, 30, 26, 0, 15, 13],
            [464, 764, 16, 17, 0, 8, 8.5],
            [432, 781, 29, 20, 0, 14.5, 10],
            [400, 783, 29, 20, 0, 14.5, 10],
            [463, 783, 15, 18, 0, 7.5, 9],
            [238, 876, 28, 29, 0, 14, 14.5],
            [268, 876, 28, 29, 0, 14, 14.5],
            [298, 876, 25, 25, 0, 12.5, 12.5],
            [298, 903, 24, 12, 0, 12, 6],
            [325, 876, 25, 25, 0, 12.5, 12.5],
            [352, 876, 21, 21, 0, 10.5, 10.5],
            [352, 899, 15, 15, 0, 7.5, 7.5],
            [369, 899, 15, 15, 0, 7.5, 7.5],
            [375, 876, 21, 21, 0, 10.5, 10.5],
            [386, 899, 26, 14, 0, 13, 7],
            [431, 803, 27, 13, 0, 13.5, 8],
            [414, 805, 14, 20, 0, 7, 10],
            [398, 825, 14, 14, 0, 7, 7],
            [460, 803, 20, 14, 0, 10, 7],
            [430, 818, 26, 14, 0, 13, 7],
            [385, 841, 24, 14, 0, 12, 7],
            [385, 857, 24, 13, 0, 12, 6.5]
        ],
        
        "animations": {
            "HUD": { "frames": [0] },
            "panelInfo": { "frames": [1] },
            "panelUI": { "frames": [2] },
            "buttonBack": { "frames": [3] },
            "buttonHelp": { "frames": [4] },
            "buttonNext": { "frames": [5] },
            "Ship1": { "frames": [6] },
            "Ship2": { "frames": [7] },
            "Ship3": { "frames": [8] },
            "Arc5": { "frames": [9] },
            "Thrusters": { "frames": [10, 11] },
            "Arc4": { "frames": [12] },
            "Laser2": { "frames": [13] },
            "Laser5_Hit": { "frames": [14, 26] },
            "Laser3": { "frames": [15] },
            "buttonOptions": { "frames": [16] },
            "Arc2": { "frames": [17] },
            "Arc1": { "frames": [18] },
            "Laser5_Shoot": { "frames": [23, 19] },
            "Laser4_Shoot": { "frames": [27] },
            "Laser3_Shoot": { "frames": [21, 22] },
            "buttonStart": { "frames": [24] },
            "buttonUI": { "frames": [25] },
            "Laser2_Shoot": { "frames": [28, 31] },
            "Laser5": { "frames": [29, 30] },
            "Enemy": { "frames": [32] },
            "Enemy2": { "frames": [33] },
            "Laser4_Hit": { "frames": [34, 36] },
            "Laser4": { "frames": [35] },
            "Laser3_Hit": { "frames": [37, 40] },
            "Laser2_Hit": { "frames": [38, 39] },
            "Laser1_Hit": { "frames": [48, 41, 46, 42] },
            "Laser1": { "frames": [43] },
            "Arc3": { "frames": [44] },
            "Laser1_Shoot": { "frames": [45, 47] }
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