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
            [384, 192, 184, 186, 0, 95, 90],
            [576, 0, 187, 181, 0, 94, 85],
            [0, 767, 182, 184, 0, 86, 88],
            [763, 0, 184, 180, 0, 95, 84],
            [0, 951, 184, 174, 0, 95, 78],
            [0, 1125, 189, 168, 0, 96, 72],
            [0, 1293, 188, 164, 0, 96, 68],
            [0, 1457, 176, 111, 0, 90, 15],
            [576, 181, 188, 155, 0, 96, 59],
            [764, 180, 173, 173, 0, 88, 77],
            [568, 336, 190, 49, 0, 95, 24.5],
            [758, 353, 180, 124, 0, 92, 28],
            [192, 572, 190, 49, 0, 95, 24.5],
            [190, 621, 185, 146, 0, 95, 50],
            [182, 767, 168, 171, 0, 86, 78],
            [184, 938, 167, 155, 0, 88, 59],
            [189, 1093, 155, 160, 0, 77, 64],
            [189, 1253, 165, 85, 0, 85, -8],
            [188, 1338, 181, 136, 0, 93, 40],
            [176, 1474, 190, 49, 0, 95, 24.5],
            [384, 378, 175, 100, 0, 90, 5],
            [559, 385, 185, 140, 0, 95, 44],
            [744, 477, 190, 49, 0, 95, 24.5],
            [379, 478, 139, 77, 0, 69, -11],
            [382, 555, 155, 156, 0, 73, 73],
            [537, 525, 159, 142, 0, 90, 63],
            [696, 526, 170, 126, 0, 82, 44],
            [866, 526, 128, 137, 0, 65, 63],
            [375, 711, 190, 49, 0, 95, 24.5],
            [375, 760, 190, 49, 0, 95, 24.5],
            [565, 667, 145, 146, 0, 73, 72],
            [710, 652, 146, 147, 0, 73, 73],
            [856, 663, 137, 145, 0, 64, 73],
            [350, 809, 126, 124, 0, 63, 62],
            [351, 933, 143, 146, 0, 71, 72],
            [476, 813, 126, 120, 0, 63, 60],
            [494, 933, 145, 146, 0, 73, 72],
            [602, 813, 126, 117, 0, 63, 58],
            [728, 799, 126, 122, 0, 63, 61],
            [854, 808, 136, 145, 0, 63, 73],
            [639, 930, 145, 146, 0, 73, 72],
            [351, 1079, 190, 49, 0, 95, 24.5],
            [344, 1128, 190, 49, 0, 95, 24.5],
            [344, 1177, 190, 49, 0, 95, 24.5],
            [354, 1226, 118, 112, 0, 59, 45],
            [369, 1338, 146, 144, 0, 73, 73],
            [784, 953, 146, 144, 0, 73, 73],
            [472, 1226, 126, 111, 0, 63, 55],
            [515, 1337, 143, 145, 0, 70, 73],
            [366, 1482, 131, 66, 0, 81, 59],
            [541, 1079, 136, 145, 0, 63, 73],
            [677, 1097, 135, 145, 0, 63, 73],
            [812, 1097, 135, 145, 0, 63, 73],
            [658, 1242, 135, 145, 0, 63, 73],
            [793, 1242, 132, 145, 0, 63, 73],
            [658, 1387, 132, 140, 0, 63, 72],
            [790, 1387, 132, 139, 0, 63, 72],
            [497, 1482, 75, 48, 0, 37, -25],
            [947, 0, 45, 48, 0, 22.5, 24],
            [930, 953, 45, 48, 0, 22.5, 24],
            [572, 1482, 45, 48, 0, 22.5, 24],
            [617, 1482, 41, 48, 0, 20.5, 24],
            [947, 48, 45, 48, 0, 22.5, 24],
            [930, 1001, 45, 48, 0, 22.5, 24],
            [930, 1049, 45, 48, 0, 22.5, 24],
            [947, 96, 45, 48, 0, 22.5, 24],
            [598, 1224, 45, 48, 0, 22.5, 24],
            [598, 1272, 45, 48, 0, 22.5, 24],
            [537, 667, 28, 29, 0, 14, 14.5],
            [784, 921, 31, 32, 0, 15.5, 16],
            [815, 921, 31, 32, 0, 15.5, 16],
            [947, 144, 41, 48, 0, 20.5, 24],
            [937, 192, 41, 48, 0, 20.5, 24],
            [937, 240, 40, 48, 0, 22.5, 24],
            [977, 240, 17, 48, 0, 7.5, 24],
            [937, 288, 40, 48, 0, 22.5, 24],
            [977, 288, 17, 48, 0, 7.5, 24],
            [518, 478, 34, 43, 0, 17, 21.5],
            [176, 1523, 34, 43, 0, 17, 21.5],
            [210, 1523, 34, 43, 0, 17, 21.5],
            [244, 1523, 34, 43, 0, 17, 21.5],
            [278, 1523, 34, 43, 0, 17, 21.5],
            [312, 1523, 34, 43, 0, 17, 21.5],
            [947, 1097, 35, 48, 0, 17.5, 24],
            [947, 1145, 35, 48, 0, 17.5, 24],
            [947, 1193, 35, 48, 0, 17.5, 24],
            [350, 767, 25, 25, 0, 12.5, 12.5],
            [346, 1523, 20, 29, 0, 10, 14.5],
            [938, 336, 40, 48, 0, 22.5, 24],
            [938, 384, 35, 48, 0, 17.5, 24],
            [938, 432, 35, 48, 0, 17.5, 24],
            [934, 480, 38, 36, 0, 19, 18],
            [925, 1242, 35, 48, 0, 17.5, 24],
            [960, 1241, 34, 29, 0, 17, 14.5],
            [973, 384, 21, 30, 0, 10.5, 15],
            [925, 1290, 42, 30, 0, 21, 15],
            [973, 414, 17, 48, 0, 7.5, 24],
            [925, 1320, 32, 31, 0, 16, 15.5],
            [925, 1351, 32, 31, 0, 16, 15.5],
            [677, 1076, 21, 21, 0, 10.5, 10.5],
            [698, 1076, 21, 21, 0, 10.5, 10.5],
            [744, 385, 14, 20, 0, 7, 10],
            [744, 405, 14, 20, 0, 7, 10],
            [978, 336, 16, 19, 0, 8, 9.5],
            [978, 355, 16, 18, 0, 8, 9],
            [497, 1530, 31, 31, 0, 15.5, 15.5],
            [528, 1530, 31, 31, 0, 15.5, 15.5],
            [559, 1530, 31, 31, 0, 15.5, 15.5],
            [590, 1530, 31, 31, 0, 15.5, 15.5],
            [621, 1530, 30, 31, 0, 15, 15.5],
            [598, 1320, 16, 17, 0, 8, 8.5],
            [960, 1270, 20, 20, 0, 10, 10],
            [568, 192, 8, 19, 0, 4, 9.5],
            [537, 696, 15, 15, 0, 7.5, 7.5],
            [346, 1552, 15, 18, 0, 7.5, 9],
            [696, 652, 14, 14, 0, 7, 7],
            [967, 1290, 20, 29, 0, 10, 14.5],
            [957, 1320, 30, 31, 0, 15, 15.5],
            [957, 1351, 29, 30, 0, 14.5, 15],
            [552, 696, 13, 14, 0, 6.5, 7],
            [643, 1224, 26, 14, 0, 13, 7],
            [643, 1238, 15, 15, 0, 7.5, 7.5],
            [719, 1076, 26, 14, 0, 13, 7],
            [719, 1090, 28, 7, 0, 14, 3.5],
            [614, 1320, 27, 13, 0, 13.5, 8],
            [745, 1076, 24, 14, 0, 12, 7],
            [747, 1090, 28, 7, 0, 14, 3.5],
            [710, 799, 13, 14, 0, 6.5, 7],
            [744, 425, 14, 13, 0, 7, 8],
            [176, 1457, 12, 14, 0, 6, 7],
            [350, 792, 24, 13, 0, 12, 6.5],
            [651, 1530, 28, 29, 0, 14, 14.5],
            [679, 1527, 31, 28, 0, 15.5, 14],
            [710, 1527, 30, 28, 0, 15, 14],
            [740, 1527, 30, 28, 0, 15, 14],
            [770, 1527, 29, 29, 0, 14.5, 14.5],
            [799, 1526, 29, 29, 0, 14.5, 14.5],
            [828, 1526, 30, 26, 0, 15, 13],
            [858, 1526, 25, 25, 0, 12.5, 12.5],
            [990, 414, 4, 16, 0, 2, 8],
            [518, 521, 12, 24, 0, 6, 12],
            [728, 921, 13, 9, 0, 6.5, 4.5],
            [883, 1526, 20, 14, 0, 10, 7],
            [934, 516, 22, 8, 0, 11, 4],
            [769, 1076, 9, 14, 0, 4.5, 7],
            [975, 953, 12, 13, 0, 6, 6.5],
            [973, 462, 11, 13, 0, 6, 7],
            [846, 921, 8, 8, 0, 4, 4],
            [568, 211, 8, 8, 0, 4, 4],
            [669, 1224, 8, 8, 0, 4, 4],
            [846, 929, 8, 8, 0, 4, 4],
            [568, 219, 8, 8, 0, 4, 4],
            [846, 937, 8, 8, 0, 4, 4],
            [846, 945, 8, 8, 0, 4, 4],
            [568, 227, 8, 8, 0, 4, 4],
            [568, 235, 8, 8, 0, 4, 4],
            [568, 243, 8, 8, 0, 4, 4],
            [568, 251, 8, 8, 0, 4, 4],
            [568, 259, 8, 8, 0, 4, 4],
            [568, 267, 8, 8, 0, 4, 4],
            [978, 373, 12, 8, 0, 10, -27]
        ],
        
        "animations": {
            "Explosion": { "frames": [32, 7, 0, 1, 2, 3, 4, 5, 6, 10, 22, 33, 34, 57], "speed": 0.5 },
            "Buff": { "frames": [65, 31, 25, 28, 15, 19, 26, 29, 21, 16, 14, 13, 9, 8, 12, 11, 17, 23, 24], "speed": 0.5  },
            "buttonBack": { "frames": [18] },
            "buttonContinue": { "frames": [20] },
            "buttonDecrease": { "frames": [27] },
            "buttonHelp": { "frames": [30] },
            "Shield": { "frames": [55, 45, 43, 46, 41, 35, 42, 44, 48, 38, 39, 53, 54, 56, 40, 47, 58, 59, 60, 61, 62, 63, 64, 52, 168], "speed": 0.5  },
            "buttonIncrease": { "frames": [36] },
            "buttonNext": { "frames": [37] },
            "buttonOptions": { "frames": [49] },
            "buttonStart": { "frames": [50] },
            "buttonUI": { "frames": [51] },
            "B_coin": { "frames": [66, 67, 69, 91, 82, 92, 81, 68], "speed": 0.25 },
            "E_coin": { "frames": [70, 71, 79, 93, 84, 97, 83, 72], "speed": 0.25  },
            "L_coin": { "frames": [73, 74, 80, 98, 104, 100, 96, 75], "speed": 0.25  },
            "Enemy12": { "frames": [76] },
            "Enemy10": { "frames": [77] },
            "Enemy7": { "frames": [78] },
            "Ship1": { "frames": [85, 86], "speed": 0.25  },
            "Ship2": { "frames": [87, 88], "speed": 0.25  },
            "Ship3": { "frames": [89, 90], "speed": 0.25  },
            "Laser4_Hit": { "frames": [94, 146] },
            "Laser5": { "frames": [95, 124] },
            "BlueBox": { "frames": [99] },
            "Arc5_Shoot": { "frames": [101] },
            "Arc4": { "frames": [102] },
            "Arc5": { "frames": [103] },
            "Enemy5": { "frames": [105] },
            "Enemy8": { "frames": [106] },
            "Laser3_Hit": { "frames": [107, 108] },
            "Bullet": { "frames": [109] },
            "Laser1": { "frames": [110] },
            "Laser3_Shoot": { "frames": [111, 112] },
            "Enemy11": { "frames": [113] },
            "Enemy2": { "frames": [114] },
            "Enemy6": { "frames": [115] },
            "Enemy9": { "frames": [116] },
            "Enemy1": { "frames": [117] },
            "Laser2_Shoot": { "frames": [118, 122] },
            "Arc4_Shoot": { "frames": [119] },
            "Laser3": { "frames": [120] },
            "Laser2_Hit": { "frames": [121, 129], "speed": 0.25  },
            "Arc3": { "frames": [123] },
            "Enemy4": { "frames": [125] },
            "Enemy3": { "frames": [126] },
            "Laser_Hit": { "frames": [153, 127, 135, 136], "speed": 0.25  },
            "Laser1_Hit": { "frames": [138, 128, 130, 132], "speed": 0.25  },
            "Thrusters": { "frames": [131, 134] },
            "Laser1_Shoot": { "frames": [150, 133] },
            "Laser_Shoot": { "frames": [152, 137] },
            "Enemy13": { "frames": [139] },
            "Laser5_Shoot": { "frames": [142, 140] },
            "Laser4_Shoot": { "frames": [145] },
            "Laser5_Hit": { "frames": [143, 144] },
            "Laser2": { "frames": [147] },
            "Laser4": { "frames": [148] },
            "Arc2": { "frames": [149] },
            "Arc2_Shoot": { "frames": [151] },
            "Arc1": { "frames": [154] },
            "Arc_Shoot": { "frames": [155] },
            "Enemy10_Shot": { "frames": [156] },
            "Enemy12_Shot": { "frames": [157] },
            "Enemy13_Shot": { "frames": [158] },
            "Enemy1_Shot": { "frames": [159] },
            "Enemy2_Shot": { "frames": [160] },
            "Enemy3_Shot": { "frames": [161] },
            "Enemy4_Shot": { "frames": [162] },
            "Enemy5_Shot": { "frames": [163] },
            "Enemy6_Shot": { "frames": [164] },
            "Enemy7_Shot": { "frames": [165] },
            "Enemy8_Shot": { "frames": [166] },
            "Enemy9_Shot": { "frames": [167] }
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