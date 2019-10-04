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
            [109, 876, 28, 29, 0, 14, 14.5],
            [139, 876, 28, 29, 0, 14, 14.5],
            [169, 876, 14, 20, 0, 7, 10],
            [169, 898, 21, 15, 0, 10.5, 7.5],
            [185, 876, 14, 20, 0, 7, 10],
            [192, 898, 14, 14, 0, 7, 7],
            [208, 723, 190, 49, 0, 95, 24.5],
            [193, 723, 11, 13, 0, 6, 7],
            [193, 774, 190, 49, 0, 95, 24.5],
            [193, 825, 190, 49, 0, 95, 24.5],
            [201, 876, 14, 9, 0, 7, 4.5]
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
            "Enemy": { "frames": [9] },
            "Enemy2": { "frames": [10] },
            "Arc4": { "frames": [11] },
            "Arc5": { "frames": [12] },
            "Bullet": { "frames": [13] },
            "Arc3": { "frames": [14] },
            "buttonOptions": { "frames": [15] },
            "Arc1": { "frames": [16] },
            "buttonStart": { "frames": [17] },
            "buttonUI": { "frames": [18] },
            "Arc2": { "frames": [19] }
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