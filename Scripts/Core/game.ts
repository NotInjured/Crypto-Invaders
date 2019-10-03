// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene and state information
    let currentScene:objects.Scene;
    let currentState:number

    assetManifest = [
        {id: "backButton", src:"./Assets/BackButton.png"},
        {id: "startButton", src:"./Assets/StartButton.png"},
        {id: "background", src:"./Assets/background.png"},
        {id: "player1", src:"./Assets/Ship1.png"},
        {id: "enemy", src:"./Assets/ship.png"},
        {id: "optionButton", src:"./Assets/OptionsButton.png"},
        {id: "helpButton", src:"./Assets/HelpButton.png"},
        {id: "logo", src:"./Assets/StartButton.png"},
        {id: "infoPanel", src:"./Assets/infopanel.png"}
    ];

    function Init() {
        console.log("Initialization Start");
        // Start();

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
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START; 

        Main();
    }

    function Update() {
        // Has my state changed since the last check?
        if(currentState != objects.Game.currentScene) {
            console.log("Changing scenes to" + objects.Game.currentScene);
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
                currentScene = new scenes.IntroScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.OPTIONS:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.HELP:
                stage.removeAllChildren();
                currentScene = new scenes.HelpScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
            break;
        }

        currentState = objects.Game.currentScene;
    }

    window.onload = Init;
})();