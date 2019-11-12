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
            [0, 0, 192, 192, 0, 96, 96],
            [0, 192, 192, 192, 0, 96, 96],
            [192, 0, 192, 192, 0, 96, 96],
            [0, 384, 192, 192, 0, 96, 96],
            [192, 192, 192, 192, 0, 96, 96],
            [384, 0, 192, 192, 0, 96, 96],
            [0, 576, 190, 191, 0, 94, 95],
            [192, 384, 187, 188, 0, 91, 92],
            [384, 192, 182, 184, 0, 86, 88],
            [576, 0, 168, 171, 0, 86, 78],
            [0, 767, 155, 156, 0, 73, 73],
            [744, 0, 159, 142, 0, 90, 63],
            [903, 0, 170, 126, 0, 82, 44],
            [0, 923, 190, 49, 0, 95, 24.5],
            [192, 572, 190, 49, 0, 95, 24.5],
            [190, 621, 146, 147, 0, 73, 73],
            [155, 768, 145, 146, 0, 73, 72],
            [336, 621, 143, 146, 0, 71, 72],
            [384, 376, 190, 49, 0, 95, 24.5],
            [379, 425, 145, 146, 0, 73, 72],
            [524, 425, 145, 146, 0, 73, 72],
            [479, 571, 146, 144, 0, 73, 73],
            [479, 715, 146, 144, 0, 73, 73],
            [336, 767, 143, 145, 0, 70, 73],
            [479, 859, 190, 49, 0, 95, 24.5],
            [479, 908, 190, 49, 0, 95, 24.5],
            [625, 571, 137, 145, 0, 64, 73],
            [625, 716, 132, 140, 0, 63, 72],
            [576, 171, 190, 49, 0, 95, 24.5],
            [566, 220, 136, 145, 0, 63, 73],
            [702, 220, 136, 145, 0, 63, 73],
            [574, 365, 190, 49, 0, 95, 24.5],
            [669, 414, 135, 145, 0, 63, 73],
            [669, 856, 126, 111, 0, 63, 55],
            [762, 559, 135, 145, 0, 63, 73],
            [766, 142, 131, 66, 0, 81, 59],
            [838, 208, 135, 145, 0, 63, 73],
            [764, 365, 190, 49, 0, 95, 24.5],
            [804, 414, 132, 145, 0, 63, 73],
            [954, 353, 132, 139, 0, 63, 72],
            [936, 492, 128, 137, 0, 65, 63],
            [897, 629, 126, 117, 0, 63, 58],
            [762, 704, 126, 120, 0, 63, 60],
            [888, 746, 126, 122, 0, 63, 61],
            [795, 868, 126, 124, 0, 63, 62],
            [921, 868, 118, 112, 0, 59, 45],
            [0, 972, 42, 30, 0, 21, 15],
            [382, 571, 45, 48, 0, 22.5, 24],
            [427, 571, 45, 48, 0, 22.5, 24],
            [1023, 629, 41, 48, 0, 20.5, 24],
            [1023, 677, 45, 48, 0, 22.5, 24],
            [757, 824, 31, 32, 0, 15.5, 16],
            [42, 972, 29, 30, 0, 14.5, 15],
            [190, 914, 45, 48, 0, 22.5, 24],
            [235, 914, 45, 48, 0, 22.5, 24],
            [300, 768, 35, 48, 0, 17.5, 24],
            [897, 559, 35, 48, 0, 17.5, 24],
            [300, 816, 35, 48, 0, 17.5, 24],
            [300, 864, 35, 48, 0, 17.5, 24],
            [71, 972, 21, 30, 0, 10.5, 15],
            [788, 824, 31, 32, 0, 15.5, 16],
            [819, 824, 38, 36, 0, 19, 18],
            [857, 824, 31, 31, 0, 15.5, 15.5],
            [744, 142, 20, 29, 0, 10, 14.5],
            [280, 914, 40, 48, 0, 22.5, 24],
            [320, 912, 45, 48, 0, 22.5, 24],
            [365, 912, 45, 48, 0, 22.5, 24],
            [410, 912, 45, 48, 0, 22.5, 24],
            [1023, 725, 45, 48, 0, 22.5, 24],
            [1014, 773, 41, 48, 0, 20.5, 24],
            [1014, 821, 34, 43, 0, 17, 21.5],
            [1055, 773, 31, 31, 0, 15.5, 15.5],
            [1055, 804, 31, 31, 0, 15.5, 15.5],
            [936, 414, 17, 48, 0, 7.5, 24],
            [1064, 492, 17, 48, 0, 7.5, 24],
            [455, 912, 17, 48, 0, 7.5, 24],
            [92, 972, 34, 29, 0, 17, 14.5],
            [857, 855, 27, 13, 0, 13.5, 8],
            [126, 972, 31, 28, 0, 15.5, 14],
            [157, 972, 30, 28, 0, 15, 14],
            [903, 126, 41, 48, 0, 20.5, 24],
            [944, 126, 40, 48, 0, 22.5, 24],
            [984, 126, 40, 48, 0, 22.5, 24],
            [1024, 126, 35, 48, 0, 17.5, 24],
            [897, 174, 32, 31, 0, 16, 15.5],
            [929, 174, 32, 31, 0, 16, 15.5],
            [961, 174, 31, 31, 0, 15.5, 15.5],
            [992, 174, 35, 48, 0, 17.5, 24],
            [1027, 174, 34, 43, 0, 17, 21.5],
            [973, 222, 34, 43, 0, 17, 21.5],
            [973, 265, 34, 43, 0, 17, 21.5],
            [973, 308, 34, 43, 0, 17, 21.5],
            [1007, 222, 34, 43, 0, 17, 21.5],
            [1007, 265, 30, 31, 0, 15, 15.5],
            [1007, 296, 30, 31, 0, 15, 15.5],
            [1007, 327, 30, 26, 0, 15, 13],
            [1048, 835, 29, 29, 0, 14.5, 14.5],
            [1039, 864, 29, 29, 0, 14.5, 14.5],
            [1039, 893, 28, 29, 0, 14, 14.5],
            [1039, 922, 28, 29, 0, 14, 14.5],
            [1039, 951, 30, 28, 0, 15, 14],
            [973, 205, 16, 17, 0, 8, 8.5],
            [1064, 540, 20, 29, 0, 10, 14.5],
            [897, 607, 21, 21, 0, 10.5, 10.5],
            [1064, 569, 21, 21, 0, 10.5, 10.5],
            [1073, 0, 13, 14, 0, 6.5, 7],
            [1073, 14, 13, 14, 0, 6.5, 7],
            [1064, 590, 20, 20, 0, 10, 10],
            [1041, 217, 25, 25, 0, 12.5, 12.5],
            [1041, 242, 25, 25, 0, 12.5, 12.5],
            [921, 980, 26, 14, 0, 13, 7],
            [947, 980, 26, 14, 0, 13, 7],
            [973, 980, 24, 14, 0, 12, 7],
            [997, 980, 24, 13, 0, 12, 6.5],
            [888, 704, 9, 14, 0, 4.5, 7],
            [1064, 610, 22, 8, 0, 11, 4],
            [932, 559, 4, 16, 0, 2, 8],
            [936, 462, 12, 24, 0, 6, 12],
            [155, 914, 13, 9, 0, 6.5, 4.5],
            [1064, 618, 16, 19, 0, 8, 9.5],
            [574, 414, 28, 7, 0, 14, 3.5],
            [669, 559, 28, 7, 0, 14, 3.5],
            [1059, 126, 14, 20, 0, 7, 10],
            [918, 607, 14, 20, 0, 7, 10],
            [1064, 637, 16, 18, 0, 8, 9],
            [1064, 655, 15, 18, 0, 7.5, 9],
            [1021, 980, 20, 14, 0, 10, 7],
            [1059, 146, 15, 15, 0, 7.5, 7.5],
            [1041, 979, 15, 15, 0, 7.5, 7.5],
            [1059, 161, 14, 13, 0, 7, 8],
            [1056, 979, 14, 14, 0, 7, 7],
            [566, 192, 8, 19, 0, 4, 9.5],
            [1073, 28, 12, 14, 0, 6, 7],
            [1061, 174, 12, 13, 0, 6, 6.5],
            [1073, 42, 11, 13, 0, 6, 7],
            [566, 365, 8, 8, 0, 4, 4],
            [766, 208, 12, 8, 0, 10, -27],
            [838, 353, 8, 8, 0, 4, 4],
            [190, 962, 8, 8, 0, 4, 4],
            [795, 856, 8, 8, 0, 4, 4],
            [1014, 746, 8, 8, 0, 4, 4],
            [1077, 835, 8, 8, 0, 4, 4],
            [1068, 864, 8, 8, 0, 4, 4],
            [888, 718, 8, 8, 0, 4, 4],
            [168, 914, 8, 8, 0, 4, 4],
            [566, 211, 8, 8, 0, 4, 4],
            [1061, 187, 8, 8, 0, 4, 4],
            [1073, 55, 8, 8, 0, 4, 4],
            [778, 208, 8, 8, 0, 4, 4]
        ],
        
        "animations": {
            "tile": { "frames": [10, 7, 0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 12, 35],"speed":0.5  },
            "buttonBack": { "frames": [13] },
            "buttonDecrease": { "frames": [14] },
            "Shield": { "frames": [33, 41, 42, 43, 44, 40, 17, 19, 20, 16, 15, 21, 22, 23, 26, 29, 30, 32, 34, 36, 38, 27, 39, 45, 136],"speed":0.5  },
            "buttonHelp": { "frames": [18] },
            "buttonIncrease": { "frames": [24] },
            "buttonNext": { "frames": [25] },
            "buttonOptions": { "frames": [28] },
            "buttonStart": { "frames": [31] },
            "buttonUI": { "frames": [37] },
            "Arc5": { "frames": [46] },
            "B_coin": { "frames": [47, 48, 49, 55, 73, 56, 64, 50],"speed":0.25  },
            "Enemy10": { "frames": [51] },
            "Enemy3": { "frames": [52] },
            "E_coin": { "frames": [53, 54, 69, 57, 74, 58, 81, 65],"speed":0.25  },
            "Arc4": { "frames": [59] },
            "Enemy7": { "frames": [60] },
            "BlueBox": { "frames": [61] },
            "Enemy11": { "frames": [62] },
            "Laser5": { "frames": [63, 102] },
            "L_coin": { "frames": [66, 67, 80, 83, 75, 87, 82, 68],"speed":0.25  },
            "Ship1": { "frames": [70, 88],"speed":0.25  },
            "Enemy2": { "frames": [71] },
            "Enemy6": { "frames": [72] },
            "Arc5_Shoot": { "frames": [76] },
            "Laser1_Hit": { "frames": [113, 110, 111, 77],"speed":0.25  },
            "Laser5_Shoot": { "frames": [100, 78] },
            "Laser4_Shoot": { "frames": [95] },
            "Enemy5": { "frames": [84] },
            "Enemy8": { "frames": [85] },
            "Enemy9": { "frames": [86] },
            "Ship2": { "frames": [89, 90],"speed":0.25  },
            "Ship3": { "frames": [91, 92],"speed":0.25  },
            "Enemy1": { "frames": [93] },
            "Enemy4": { "frames": [94] },
            "Laser5_Hit": { "frames": [96, 97] },
            "Enemy12": { "frames": [98] },
            "Enemy13": { "frames": [99] },
            "Laser2_Shoot": { "frames": [101, 125] },
            "Laser3_Hit": { "frames": [103, 104] },
            "Laser_Hit": { "frames": [133, 105, 106, 129],"speed":0.25  },
            "Arc4_Shoot": { "frames": [107] },
            "Laser4_Hit": { "frames": [108, 109] },
            "Laser1_Shoot": { "frames": [126, 112] },
            "Laser_Shoot": { "frames": [114, 132] },
            "Arc2_Shoot": { "frames": [115] },
            "Laser2": { "frames": [116] },
            "Laser4": { "frames": [117] },
            "Arc2": { "frames": [118] },
            "Laser3_Shoot": { "frames": [119, 124] },
            "Thrusters": { "frames": [120, 121] },
            "Bullet": { "frames": [122] },
            "Laser1": { "frames": [123] },
            "Laser2_Hit": { "frames": [127, 128] },
            "Arc3": { "frames": [130] },
            "Laser3": { "frames": [131] },
            "Arc1": { "frames": [134] },
            "Arc_Shoot": { "frames": [135] },
            "Enemy10_Shot": { "frames": [137] },
            "Enemy12_Shot": { "frames": [138] },
            "Enemy13_Shot": { "frames": [139] },
            "Enemy1_Shot": { "frames": [140] },
            "Enemy2_Shot": { "frames": [141] },
            "Enemy3_Shot": { "frames": [142] },
            "Enemy4_Shot": { "frames": [143] },
            "Enemy5_Shot": { "frames": [144] },
            "Enemy6_Shot": { "frames": [145] },
            "Enemy7_Shot": { "frames": [146] },
            "Enemy8_Shot": { "frames": [147] },
            "Enemy9_Shot": { "frames": [148] }
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