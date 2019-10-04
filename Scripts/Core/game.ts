// Immediate Invoked Anonymous Function

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
            "./Assets/Sprites/Spritesheet.png"
        ],

        "framerate": 20,
        "frames": [
            [0, 0, 34, 38, 0, 0, 0],
            [34, 0, 34, 38, 0, 0, 0],
            [68, 0, 34, 38, 0, 0, 0],
            [102, 0, 29, 29, 0, 0, 0],
            [131, 0, 29, 29, 0, 0, 0],
            [0, 38, 14, 19, 0, 0, 0],
            [0, 58, 11, 13, 0, 0, 0],
            [11, 71, 14, 9, 0, 0, 0],
            [25, 71, 14, 14, 0, 0, 0],
            [39, 71, 14, 20, 0, 0, 0],
            [53, 71, 21, 15, 0, 0, 0],
            [0, 25, 437, 456, 0, 0, 0],
            [0, 556, 190, 49, 0, 0, 0],
            [0, 605, 190, 49, 0, 0, 0],
            [0, 654, 190, 49, 0, 0, 0],
            [0, 703, 190, 49, 0, 0, 0],
            [0, 752, 190, 49, 0, 0, 0],
            [0, 801, 190, 49, 0, 0, 0],
            [437, 0, 480, 720, 0, 0, 0]
        ],

        "animations": {
            "Ship1": { "frames": [0] },
            "Ship2": { "frames": [1] },
            "Ship3": { "frames": [2] },
            "Enemy": { "frames": [3] },
            "Enemy2": { "frames": [4] },
            "Bullet": { "frames": [5] },
            "Arc1": { "frames": [6] },
            "Arc2": { "frames": [7] },
            "Arc3": { "frames": [8] },
            "Arc4": { "frames": [9] },
            "Arc5": { "frames": [10] },
            "InfoPanel": { "frames": [11] },
            "BackButton": { "frames": [12] },
            "NextButton": { "frames": [13] },
            "StartButton": { "frames": [14] },
            "HelpButton": { "frames": [15] },
            "OptionsButton": { "frames": [16] },
            "UIButton": { "frames": [17] },
            "HUD": { "frames": [18] }
            
        },
    }

    assetManifest = [
        {id: "hud", src:"./Assets/HUD.png"},
        {id: "infoPanel", src:"./Assets/infopanel.png"},
        {id: "toggleHud", src:"./Assets/UIButton.png"},
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
        if(currentState != objects.Game.currentScene) {
            console.log(objects.Game.currentScene);
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
        switch(objects.Game.currentScene) {
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

        currentState = objects.Game.currentScene;
    }

    window.onload = Init;
})();