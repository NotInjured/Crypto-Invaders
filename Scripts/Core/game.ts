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
        ],"framerate": 20,
        "frames": [
            [1, 1, 192, 192, 0, 96, 96],
            [1, 195, 192, 192, 0, 96, 96],
            [195, 1, 192, 192, 0, 96, 96],
            [195, 195, 192, 192, 0, 96, 96],
            [389, 1, 192, 192, 0, 96, 96],
            [389, 195, 192, 192, 0, 96, 96],
            [583, 1, 190, 191, 0, 94, 95],
            [583, 194, 187, 188, 0, 91, 92],
            [775, 1, 182, 184, 0, 86, 88],
            [959, 1, 168, 171, 0, 86, 78],
            [1, 389, 190, 49, 0, 95, 24.5],
            [1, 440, 190, 49, 0, 95, 24.5],
            [193, 389, 190, 49, 0, 95, 24.5],
            [193, 440, 190, 49, 0, 95, 24.5],
            [385, 389, 190, 49, 0, 95, 24.5],
            [385, 440, 190, 49, 0, 95, 24.5],
            [1129, 1, 131, 66, 0, 81, 59],
            [583, 384, 190, 49, 0, 95, 24.5],
            [577, 435, 190, 49, 0, 95, 24.5],
            [959, 174, 170, 126, 0, 82, 44],
            [775, 187, 159, 142, 0, 90, 63],
            [775, 331, 155, 156, 0, 73, 73],
            [1129, 69, 45, 48, 0, 22.5, 24],
            [1129, 119, 45, 48, 0, 22.5, 24],
            [1176, 69, 45, 48, 0, 22.5, 24],
            [1223, 69, 42, 30, 0, 21, 15],
            [1176, 119, 45, 48, 0, 22.5, 24],
            [1223, 101, 41, 48, 0, 20.5, 24],
            [1131, 169, 45, 48, 0, 22.5, 24],
            [1131, 219, 45, 48, 0, 22.5, 24],
            [1178, 169, 45, 48, 0, 22.5, 24],
            [1225, 151, 40, 48, 0, 22.5, 24],
            [1225, 201, 40, 48, 0, 22.5, 24],
            [1178, 219, 45, 48, 0, 22.5, 24],
            [1225, 251, 40, 48, 0, 22.5, 24],
            [936, 187, 21, 30, 0, 10.5, 15],
            [1131, 269, 45, 48, 0, 22.5, 24],
            [1178, 269, 41, 48, 0, 20.5, 24],
            [936, 219, 17, 48, 0, 7.5, 24],
            [936, 269, 17, 48, 0, 7.5, 24],
            [1221, 301, 41, 48, 0, 20.5, 24],
            [932, 331, 35, 48, 0, 17.5, 24],
            [932, 381, 35, 48, 0, 17.5, 24],
            [932, 431, 35, 48, 0, 17.5, 24],
            [969, 302, 35, 48, 0, 17.5, 24],
            [1006, 302, 35, 48, 0, 17.5, 24],
            [969, 352, 35, 48, 0, 17.5, 24],
            [1043, 302, 34, 43, 0, 17, 21.5],
            [969, 402, 34, 43, 0, 17, 21.5],
            [1006, 352, 34, 43, 0, 17, 21.5],
            [1079, 302, 34, 43, 0, 17, 21.5],
            [969, 447, 34, 29, 0, 17, 14.5],
            [932, 481, 22, 8, 0, 11, 4],
            [1115, 302, 14, 20, 0, 7, 10],
            [955, 302, 12, 24, 0, 6, 12],
            [1005, 402, 17, 48, 0, 7.5, 24],
            [1024, 397, 34, 43, 0, 17, 21.5],
            [1042, 352, 34, 43, 0, 17, 21.5],
            [1078, 347, 31, 32, 0, 15.5, 16],
            [1060, 397, 31, 32, 0, 15.5, 16],
            [1078, 381, 26, 14, 0, 13, 7],
            [1093, 397, 30, 31, 0, 15, 15.5],
            [1005, 452, 31, 31, 0, 15.5, 15.5],
            [1038, 442, 31, 31, 0, 15.5, 15.5],
            [1038, 475, 26, 14, 0, 13, 7],
            [1066, 475, 24, 14, 0, 12, 7],
            [1071, 431, 30, 31, 0, 15, 15.5],
            [1103, 430, 32, 31, 0, 16, 15.5],
            [1103, 463, 30, 26, 0, 15, 13],
            [577, 389, 4, 16, 0, 2, 8],
            [1071, 464, 13, 9, 0, 6.5, 4.5],
            [1106, 381, 20, 14, 0, 10, 7],
            [1125, 397, 31, 31, 0, 15.5, 15.5],
            [1137, 430, 32, 31, 0, 16, 15.5],
            [1135, 463, 25, 25, 0, 12.5, 12.5],
            [1111, 351, 30, 28, 0, 15, 14],
            [1115, 324, 25, 25, 0, 12.5, 12.5],
            [1142, 319, 29, 30, 0, 14.5, 15],
            [1173, 319, 31, 31, 0, 15.5, 15.5],
            [1143, 351, 28, 29, 0, 14, 14.5],
            [1173, 352, 31, 28, 0, 15.5, 14],
            [1128, 382, 27, 13, 0, 13.5, 8],
            [1206, 351, 29, 29, 0, 14.5, 14.5],
            [1237, 351, 28, 29, 0, 14, 14.5],
            [1158, 382, 29, 29, 0, 14.5, 14.5],
            [1189, 382, 30, 28, 0, 15, 14],
            [1221, 382, 20, 29, 0, 10, 14.5],
            [1243, 382, 20, 29, 0, 10, 14.5],
            [1158, 413, 15, 15, 0, 7.5, 7.5],
            [1206, 319, 13, 14, 0, 6.5, 7],
            [1206, 335, 13, 14, 0, 6.5, 7],
            [969, 478, 28, 7, 0, 14, 3.5],
            [1162, 463, 21, 21, 0, 10.5, 10.5],
            [1092, 464, 9, 14, 0, 4.5, 7],
            [1175, 413, 20, 20, 0, 10, 10],
            [1197, 412, 21, 21, 0, 10.5, 10.5],
            [1220, 413, 24, 13, 0, 12, 6.5],
            [1171, 435, 16, 19, 0, 8, 9.5],
            [1189, 435, 28, 7, 0, 14, 3.5],
            [1246, 413, 16, 17, 0, 8, 8.5],
            [1024, 442, 8, 8, 0, 4, 4],
            [956, 481, 8, 8, 0, 4, 4],
            [1189, 444, 16, 18, 0, 8, 9],
            [1185, 464, 14, 20, 0, 7, 10],
            [1207, 444, 15, 18, 0, 7.5, 9],
            [1201, 464, 15, 15, 0, 7.5, 7.5],
            [1220, 428, 14, 14, 0, 7, 7],
            [1224, 444, 8, 19, 0, 4, 9.5],
            [1201, 481, 8, 8, 0, 4, 4],
            [1211, 481, 8, 8, 0, 4, 4],
            [1218, 465, 12, 14, 0, 6, 7],
            [1221, 481, 8, 8, 0, 4, 4],
            [1236, 428, 8, 8, 0, 4, 4],
            [1246, 432, 14, 13, 0, 7, 8],
            [1236, 438, 8, 8, 0, 4, 4],
            [1234, 448, 11, 13, 0, 6, 7],
            [1247, 447, 12, 13, 0, 6, 6.5],
            [1231, 481, 8, 8, 0, 4, 4],
            [936, 319, 8, 8, 0, 4, 4],
            [1060, 431, 8, 8, 0, 4, 4],
            [1092, 480, 8, 8, 0, 4, 4],
            [1232, 465, 8, 8, 0, 4, 4],
            [1242, 463, 8, 8, 0, 4, 4]
        ],

        "animations": {
            "tile": { "frames": [21, 7, 0, 1, 2, 3, 4, 5, 6, 8, 9, 20, 19, 16],  
            "speed":0.5  },
            "buttonBack": { "frames": [10] },
            "buttonDecrease": { "frames": [11] },
            "buttonHelp": { "frames": [12] },
            "buttonIncrease": { "frames": [13] },
            "buttonNext": { "frames": [14] },
            "buttonOptions": { "frames": [15] },
            "buttonStart": { "frames": [17] },
            "buttonUI": { "frames": [18] },
            "B_coin": { "frames": [22, 23, 27, 41, 38, 42, 31, 24],  
                "speed":0.25 },
            "Arc5": { "frames": [25] },
            "E_coin": { "frames": [26, 28, 37, 43, 39, 44, 32, 29] ,  
            "speed":0.25 },
            "L_coin": { "frames": [30, 33, 40, 45, 55, 46, 34, 36],  
            "speed":0.25  },
            "Arc4": { "frames": [35] },
            "Ship1": { "frames": [47, 48],  
            "speed":0.25  },
            "Ship2": { "frames": [49, 50] ,  
            "speed":0.25 },
            "Arc5_Shoot": { "frames": [51] },
            "Arc2_Shoot": { "frames": [52] },
            "Bullet": { "frames": [53] },
            "Laser4": { "frames": [54] },
            "Ship3": { "frames": [56, 57],  
            "speed":0.25  },
            "Enemy10": { "frames": [58] },
            "Enemy7": { "frames": [59] },
            "Laser1_Hit": { "frames": [96, 60, 64, 81] },
            "Enemy1": { "frames": [61] },
            "Enemy11": { "frames": [62] },
            "Enemy2": { "frames": [63] },
            "Laser1_Shoot": { "frames": [71, 65] },
            "Enemy4": { "frames": [66] },
            "Enemy5": { "frames": [67] },
            "Laser4_Shoot": { "frames": [68, 75] },
            "Laser2": { "frames": [69] },
            "Arc2": { "frames": [70] },
            "Enemy6": { "frames": [72] },
            "Enemy8": { "frames": [73] },
            "Laser4_Hit": { "frames": [74, 76] },
            "Enemy3": { "frames": [77] },
            "Enemy9": { "frames": [78] },
            "Enemy12": { "frames": [79] },
            "Laser5_Shoot": { "frames": [85, 80] },
            "Laser5_Hit": { "frames": [82, 84] },
            "Enemy13": { "frames": [83] },
            "Laser5": { "frames": [86, 87] },
            "Laser2_Hit": { "frames": [88, 105] },
            "Laser_Hit": { "frames": [116, 89, 90, 113],  
                "speed":0.25  },
            "Thrusters": { "frames": [91, 98] },
            "Laser3_Hit": { "frames": [92, 95] },
            "Laser_Shoot": { "frames": [93, 110] },
            "Arc4_Shoot": { "frames": [94] },
            "Laser3_Shoot": { "frames": [97, 102] },
            "Laser2_Shoot": { "frames": [99, 104] },
            "Arc_Shoot": { "frames": [100] },
            "Enemy10_Shot": { "frames": [101] },
            "Laser1": { "frames": [103] },
            "Arc3": { "frames": [106] },
            "Laser3": { "frames": [107] },
            "Enemy12_Shot": { "frames": [108] },
            "Enemy13_Shot": { "frames": [109] },
            "Enemy1_Shot": { "frames": [111] },
            "Enemy2_Shot": { "frames": [112] },
            "Enemy3_Shot": { "frames": [114] },
            "Arc1": { "frames": [115] },
            "Enemy4_Shot": { "frames": [117] },
            "Enemy5_Shot": { "frames": [118] },
            "Enemy6_Shot": { "frames": [119] },
            "Enemy7_Shot": { "frames": [120] },
            "Enemy8_Shot": { "frames": [121] },
            "Enemy9_Shot": { "frames": [122] }
        }
    }

    assetManifest = [
        {id: "bg1", src:"./Assets/9999.png"},
        {id: "aircraft", src:"./Assets/Aircraft.png"},
        {id: "panelInfo", src:"./Assets/panelInfo.png"},
        {id: "panelUI", src:"./Assets/panelUI.png"},
        {id: "logo", src:"./Assets/Logo.png"},
        {id: "HUD", src:"./Assets/HUD.png"},
        {id: "backgroundB", src:"./Assets/B_background.png"},
        {id: "backgroundL", src:"./Assets/L_background.png"},
        {id: "backgroundE", src:"./Assets/E_background.png"},
        {id: "bgm", src:"./Assets/Sounds/Mysterious_Mountain.mp3"},
        {id: "bgm2", src:"./Assets/Sounds/RFN_III.ogg"},
        {id: "bgm3", src:"./Assets/Sounds/The_Truth_Never_Spoken.mp3"},
        {id: "playerDeath", src:"./Assets/Sounds/1516.mp3"},
        {id: "laser", src:"./Assets/Sounds/laser.mp3"},
        {id: "bossMusic", src:"./Assets/Sounds/Sudden_Death.ogg"},
        {id: "mainMenu", src:"./Assets/Sounds/cyberspace.exe.ogg"},
        {id: "hit", src:"./Assets/Sounds/hit.wav"}
    ];

    function Init() {
        console.log("Initialization Start");
        // Start();

        textureSprite = new window.createjs.SpriteSheet(textureSpriteData);

        assetManager = new window.createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new window.createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20); 
        window.createjs.Ticker.framerate = 60; // 60 FPS
        window.createjs.Ticker.on("tick", Update);

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
                currentScene = new scenes.OptionsScene();
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