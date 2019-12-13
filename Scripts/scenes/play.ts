module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private aircraft: objects.Image;
        private P1aircraft: objects.Image;
        private P2aircraft: objects.Image;

        private stageName: objects.Label;

        private Splayer:objects.Player;
        private P1:objects.Player;
        private P2:objects.Player;
        private shields:objects.Sprite[]
        private effect:objects.Effect;
        private P1Tag:objects.Label;
        private P2Tag:objects.Label;

        private hudImage: objects.Image;
        private hud:managers.HUD;

        private level1Enemies: objects.Enemy[][]
        private level2Enemies: objects.Enemy[][]
        private level3Enemies: objects.Enemy[][]
        private eliteUnits: objects.Enemy[][]
        private bosses: objects.Enemy[]

        private coinsManager: managers.Coins;
        private testCoin: objects.Coins;

        private bulletManager:managers.Bullet;
        private missileManager:managers.Missile;

        private P1bulletManager:managers.P1Bullet;
        private P1missileManager:managers.Missile;

        private P2bulletManager:managers.P2Bullet;
        private P2missileManager:managers.Missile;

        private enemyBulletManager:managers.EnemyBullet;

        private bgm:createjs.AbstractSoundInstance;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background();
            this.background.y = -32500
            this.aircraft = new objects.Image("aircraft", 418, 350);
            this.P1aircraft = new objects.Image("aircraft", 368, 475);
            this.P1aircraft.scaleX = 0.5
            this.P1aircraft.scaleY = 0.5
            this.P2aircraft = new objects.Image("aircraft", 568, 475);
            this.P2aircraft.scaleX = 0.5
            this.P2aircraft.scaleY = 0.5

            this.stageName = new objects.Label("Stage 1: Invasion", "36px", "OptimusPrinceps", "#FFFFFF", 530, 240, true);

            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("bgm2");
            this.bgm.loop = -1;
            this.bgm.volume = 0.05;

            this.Splayer = new objects.Player("Ship1", 555, 570, false);
            this.Splayer.name = "Single"

            this.P1 = new objects.Player("Ship1", 445, 570, false);
            this.P2 = new objects.Player("Ship1", 645, 570, false);
            this.P1.name = "P1"
            this.P2.name = "P2"

            this.P1Tag = new objects.Label("P1", "10px,", "OptimusPrinceps", "#FFFFFF", this.P1.x, this.P1.y, true)
            this.P2Tag = new objects.Label("P2", "10px,", "OptimusPrinceps", "#FFFFFF", this.P2.x, this.P2.y, true)

            this.eliteUnits = []
            this.level1Enemies = []
            this.level2Enemies = []
            this.level3Enemies = []
            this.bosses = new Array<objects.Enemy>();
            this.bosses[0] = new objects.Enemy("Enemy4")
            this.bosses[1] = new objects.Enemy("Destroyer")
            this.bosses[2] = new objects.Enemy("F5S2")
            this.bosses[3] = new objects.Enemy("F5S4")
            this.bosses.forEach(e =>{
                e.isDead = false
                e.isInvincible = false
            })

            this.shields = new Array<objects.Sprite>();
            this.shields[0] = new objects.Sprite("Shield", this.Splayer.x + 20, this.Splayer.y-5);
            this.shields[0].alpha = 0;
            this.shields[0].scaleX = 0.6
            this.shields[0].scaleY = 0.6

            this.shields[1] = new objects.Sprite("Shield", this.P1.x + 20, this.P1.y-5);
            this.shields[1].alpha = 0;
            this.shields[1].scaleX = 0.6
            this.shields[1].scaleY = 0.6

            this.shields[2] = new objects.Sprite("Shield", this.P2.x + 20, this.P2.y-5);
            this.shields[2].alpha = 0;
            this.shields[2].scaleX = 0.6
            this.shields[2].scaleY = 0.6

            // Single
            managers.Game.player = this.Splayer

            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            this.missileManager = new managers.Missile()
            managers.Game.missileManager = this.missileManager

            // P1
            managers.Game.P1 = this.P1
            this.P1bulletManager = new managers.P1Bullet();
            managers.Game.P1BulletManager = this.P1bulletManager;

            this.P1missileManager = new managers.Missile()
            managers.Game.P1MissileManager = this.P1missileManager

            // P2
            managers.Game.P2 = this.P2
            this.P2bulletManager = new managers.P2Bullet();
            managers.Game.P2BulletManager = this.P2bulletManager;

            this.P2missileManager = new managers.Missile()
            managers.Game.P2MissileManager = this.P2missileManager

            this.enemyBulletManager = new managers.EnemyBullet();
            managers.Game.enemyBulletManager = this.enemyBulletManager;

            this.coinsManager = new managers.Coins();
            managers.Game.coinsManager = this.coinsManager;

            managers.Game.timer = 600

            if(managers.Game.single){
                managers.Game.boss1Hp = 200
                managers.Game.boss2Hp = 300
                managers.Game.boss3_1Hp = 250
                managers.Game.boss3_2Hp = 250
            }
            if(managers.Game.multi){
                managers.Game.boss1Hp = 400
                managers.Game.boss2Hp = 600
                managers.Game.boss3_1Hp = 250
                managers.Game.boss3_2Hp = 250
            }
            
            managers.Game.eEliteHp = 25
            managers.Game.eMinionHp = 10

            managers.Game.level1 = true
            managers.Game.level2 = false
            managers.Game.level3 = false
            managers.Game.level1Completed = false
            managers.Game.level2Completed = false
            managers.Game.level3Completed = false
            managers.Game.boss1IsDead = false
            managers.Game.boss2IsDead = false
            managers.Game.boss3_1IsDead = false
            managers.Game.boss3_2IsDead = false

            switch(managers.Game.difficulty){
                case 0:
                    if(managers.Game.single){
                        for(let i = 0; i < 3; i++){
                            this.level1Enemies[i] = []
                            this.level2Enemies[i] = []
                            this.level3Enemies[i] = []
                            for(let j = 0; j < 2; j++){
                                if(i == 0){
                                    this.level1Enemies[0][j] = new objects.Enemy("Enemy1")
                                    this.level2Enemies[0][j] = new objects.Enemy("Enemy7")
                                    this.level3Enemies[0][j] = new objects.Enemy("Enemy10")
                                }
                                if(i == 1){
                                    this.level1Enemies[1][j] = new objects.Enemy("Enemy2")
                                    this.level2Enemies[1][j] = new objects.Enemy("Enemy8")
                                    this.level3Enemies[1][j] = new objects.Enemy("Enemy11")
    
                                }
                                if(i == 2){
                                    this.level1Enemies[2][j] = new objects.Enemy("Enemy3")
                                    this.level2Enemies[2][j] = new objects.Enemy("Enemy9")
                                    this.level3Enemies[2][j] = new objects.Enemy("Enemy12")
    
                                }
                            }
                        }
    
                        for(let i = 0; i <8; i++){
                            this.eliteUnits[i] = []
                            for(let j = 0; j < 3; j++){
                                this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                                this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                                this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
    
                                this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25
                                this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25
    
                            }
                        }
                    }
                    
                    if(managers.Game.multi){
                        for(let i = 0; i < 3; i++){
                            this.level1Enemies[i] = []
                            this.level2Enemies[i] = []
                            this.level3Enemies[i] = []
                            for(let j = 0; j < 3; j++){
                                if(i == 0){
                                    this.level1Enemies[0][j] = new objects.Enemy("Enemy1")
                                    this.level2Enemies[0][j] = new objects.Enemy("Enemy7")
                                    this.level3Enemies[0][j] = new objects.Enemy("Enemy10")
                                }
                                if(i == 1){
                                    this.level1Enemies[1][j] = new objects.Enemy("Enemy2")
                                    this.level2Enemies[1][j] = new objects.Enemy("Enemy8")
                                    this.level3Enemies[1][j] = new objects.Enemy("Enemy11")
    
                                }
                                if(i == 2){
                                    this.level1Enemies[2][j] = new objects.Enemy("Enemy3")
                                    this.level2Enemies[2][j] = new objects.Enemy("Enemy9")
                                    this.level3Enemies[2][j] = new objects.Enemy("Enemy12")
    
                                }
                            }
                        }
    
                        for(let i = 0; i <8; i++){
                            this.eliteUnits[i] = []
                            for(let j = 0; j < 3; j++){
                                this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                                this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                                this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
    
                                this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25
                                this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25
    
                            }
                        }
                    }
                break;
                case 1:
                    if(managers.Game.single){
                        for(let i = 0; i < 3; i++){
                            this.level1Enemies[i] = []
                            this.level2Enemies[i] = []
                            this.level3Enemies[i] = []
                            for(let j = 0; j < 4; j++){
                                if(i == 0){
                                    this.level1Enemies[0][j] = new objects.Enemy("Enemy1")
                                    this.level2Enemies[0][j] = new objects.Enemy("Enemy7")
                                    this.level3Enemies[0][j] = new objects.Enemy("Enemy10")
                                }
                                if(i == 1){
                                    this.level1Enemies[1][j] = new objects.Enemy("Enemy2")
                                    this.level2Enemies[1][j] = new objects.Enemy("Enemy8")
                                    this.level3Enemies[1][j] = new objects.Enemy("Enemy11")
    
                                }
                                if(i == 2){
                                    this.level1Enemies[2][j] = new objects.Enemy("Enemy3")
                                    this.level2Enemies[2][j] = new objects.Enemy("Enemy9")
                                    this.level3Enemies[2][j] = new objects.Enemy("Enemy12")
    
                                }
                            }
                        }
    
                        for(let i = 0; i <2; i++){
                            this.eliteUnits[i] = []
                            for(let j = 0; j < 3; j++){
                                this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                                this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                                this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
    
                                this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25
                                this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25
    
                            }
                        }
                    }

                    if(managers.Game.multi){
                        for(let i = 0; i < 3; i++){
                            this.level1Enemies[i] = []
                            this.level2Enemies[i] = []
                            this.level3Enemies[i] = []
                            for(let j = 0; j < 6; j++){
                                if(i == 0){
                                    this.level1Enemies[0][j] = new objects.Enemy("Enemy1")
                                    this.level2Enemies[0][j] = new objects.Enemy("Enemy7")
                                    this.level3Enemies[0][j] = new objects.Enemy("Enemy10")
                                }
                                if(i == 1){
                                    this.level1Enemies[1][j] = new objects.Enemy("Enemy2")
                                    this.level2Enemies[1][j] = new objects.Enemy("Enemy8")
                                    this.level3Enemies[1][j] = new objects.Enemy("Enemy11")
    
                                }
                                if(i == 2){
                                    this.level1Enemies[2][j] = new objects.Enemy("Enemy3")
                                    this.level2Enemies[2][j] = new objects.Enemy("Enemy9")
                                    this.level3Enemies[2][j] = new objects.Enemy("Enemy12")
    
                                }
                            }
                        }
    
                        for(let i = 0; i <2; i++){
                            this.eliteUnits[i] = []
                            for(let j = 0; j < 3; j++){
                                this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                                this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                                this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
    
                                this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25
                                this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25
    
                            }
                        }
                    }
                    
                break;
                case 2:
                    if(managers.Game.single){
                        for(let i = 0; i < 3; i++){
                            this.level1Enemies[i] = []
                            this.level2Enemies[i] = []
                            this.level3Enemies[i] = []
                            for(let j = 0; j < 6; j++){
                                if(i == 0){
                                    this.level1Enemies[0][j] = new objects.Enemy("Enemy1")
                                    this.level2Enemies[0][j] = new objects.Enemy("Enemy7")
                                    this.level3Enemies[0][j] = new objects.Enemy("Enemy10")
                                }
                                if(i == 1){
                                    this.level1Enemies[1][j] = new objects.Enemy("Enemy2")
                                    this.level2Enemies[1][j] = new objects.Enemy("Enemy8")
                                    this.level3Enemies[1][j] = new objects.Enemy("Enemy11")
    
                                }
                                if(i == 2){
                                    this.level1Enemies[2][j] = new objects.Enemy("Enemy3")
                                    this.level2Enemies[2][j] = new objects.Enemy("Enemy9")
                                    this.level3Enemies[2][j] = new objects.Enemy("Enemy12")
    
                                }
                            }
                        }
    
                        for(let i = 0; i <8; i++){
                            this.eliteUnits[i] = []
                            for(let j = 0; j < 3; j++){
                                this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                                this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                                this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
    
                                this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25
                                this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25
    
                            }
                        }
                    }
                    if(managers.Game.multi){
                        for(let i = 0; i < 3; i++){
                            this.level1Enemies[i] = []
                            this.level2Enemies[i] = []
                            this.level3Enemies[i] = []
                            for(let j = 0; j < 9; j++){
                                if(i == 0){
                                    this.level1Enemies[0][j] = new objects.Enemy("Enemy1")
                                    this.level2Enemies[0][j] = new objects.Enemy("Enemy7")
                                    this.level3Enemies[0][j] = new objects.Enemy("Enemy10")
                                }
                                if(i == 1){
                                    this.level1Enemies[1][j] = new objects.Enemy("Enemy2")
                                    this.level2Enemies[1][j] = new objects.Enemy("Enemy8")
                                    this.level3Enemies[1][j] = new objects.Enemy("Enemy11")
    
                                }
                                if(i == 2){
                                    this.level1Enemies[2][j] = new objects.Enemy("Enemy3")
                                    this.level2Enemies[2][j] = new objects.Enemy("Enemy9")
                                    this.level3Enemies[2][j] = new objects.Enemy("Enemy12")
    
                                }
                            }
                        }
    
                        for(let i = 0; i <8; i++){
                            this.eliteUnits[i] = []
                            for(let j = 0; j < 3; j++){
                                this.eliteUnits[i][0] = new objects.Enemy("Enemy6");
                                this.eliteUnits[i][1] = new objects.Enemy("Enemy5");
                                this.eliteUnits[i][2] = new objects.Enemy("Enemy6");
    
                                this.eliteUnits[i][0].x = this.eliteUnits[i][1].x - 25
                                this.eliteUnits[i][2].x = this.eliteUnits[i][1].x + 25
    
                            }
                        }
                    }
                break;
            }

            this.hudImage = new objects.Image("HUD", 342, 0);  

            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            if(managers.Game.single){
                if(managers.Game.normal){
                    managers.Game.hud.Lives = 9;
                }
                if(managers.Game.hard){
                    managers.Game.hud.Lives = 6;
                }
                if(managers.Game.hell){
                    managers.Game.hud.Lives = 3;
                }
            }
            if(managers.Game.multi){
                if(managers.Game.normal){
                    managers.Game.hud.P1Lives = 9;
                    managers.Game.hud.P2Lives = 9;
                }
                if(managers.Game.hard){
                    managers.Game.hud.P1Lives = 6;
                    managers.Game.hud.P2Lives = 6;
                }
                if(managers.Game.hell){
                    managers.Game.hud.P1Lives = 3;
                    managers.Game.hud.P2Lives = 3;
                }
            }

            this.Main();
        }

        public Update(): void {
            this.hud.Update()

            this.background.Update();
            if(managers.Game.single){
                if(!managers.Game.bossRush){
                    this.aircraft.y += 3;

                    if(this.aircraft.y > 600)
                        this.removeChild(this.aircraft);
    
                    this.bulletManager.Update()
                    this.missileManager.Update()
                    this.enemyBulletManager.Update()
                    this.coinsManager.Coin.forEach(coin =>{
                        if(coin.IsDropped){
                            coin.FindPlayer(this.Splayer)
                            coin.Update()
                        }
                    })
    
                    this.ChangeShip();
                    this.CheckCollisions()
                    this.Splayer.Update();
    
                    if(this.Splayer.IsInvincible){
                        this.shields[0].x = this.Splayer.x +20
                        this.shields[0].y = this.Splayer.y +10
                        this.shields[0].alpha = 1;
                    }
        
                    if(!this.Splayer.IsInvincible)
                        this.shields[0].alpha = 0;
        
                    if(!this.Splayer.isDead){
                        if(managers.Game.hud.Power < 40 && !managers.Game.p1){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p1 = true
                        }
                        if((managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) && !managers.Game.p2){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p2 = true
                        }
                        if((managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) && !managers.Game.p3){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p3 = true
                        }
                        if((managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) && !managers.Game.p4){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p4 = true
                        }
                        if(managers.Game.hud.Power >= 160 && !managers.Game.p5){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p5 = true
                        }    
                    }
        
                    if(this.Splayer.isDead){
                        if(managers.Game.hud.Power >= 0 && managers.Game.hud.Power < 40){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 160){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }    
                    }
    
                    if(managers.Game.level1){
                        if(managers.Game.timer >= 598 && managers.Game.timer <= 600){
                            if(this.Splayer.y > 450)
                                this.Splayer.y -= 1;
                            if(this.P1.y > 450)
                                this.P1.y -= 1;
                            if(this.P2.y > 450)
                                this.P2.y -= 1;
                        }
                        if(managers.Game.timer >= 597 && managers.Game.timer <= 598){
                            if(this.Splayer.y < 550)
                                this.Splayer.y += 1;
                            if(this.P1.y < 550)
                                this.P1.y += 1;
                            if(this.P2.y < 550)
                                this.P2.y += 1;
                        }
                        if(managers.Game.timer > 591 && managers.Game.timer <= 596){
                            this.addChild(this.stageName)
                        }
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 591){
                            this.removeChild(this.stageName)
                           
                            
                            this.level1Enemies[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 581){
                            this.level1Enemies[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                            this.eliteUnits[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                        }
        
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 576){
                            this.level1Enemies[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 536){
                            this.eliteUnits[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer < 481){
                            this.level1Enemies[0].forEach(e =>{
                                e.y += 10;
                            })
                            this.level1Enemies[1].forEach(e =>{
                                e.x -= 10;
                            })
                            this.level1Enemies[2].forEach(e =>{
                                e.y -= 10;
                            })
                        }
        
                        if(managers.Game.timer == 480){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bossMusic");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer < 479){
                            this.bosses[0].isInvincible = false
                            this.background.y += 0;
                            if(!this.bosses[0].isDead){
                                this.bosses[0].FindPlayer(this.Splayer)
                                this.bosses[0].Update();
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[0])
                                })
                            }
                        }
        
                        if(managers.Game.boss1Hp == 0){
                            this.removeChild(this.bosses[0])
                            this.bosses[0].isInvincible = true;
                            this.bosses[0].isDead = true;
                            managers.Game.boss1IsDead = true;
                            this.bosses[0].DropCoins(50)
        
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);
                                    managers.Game.level1Completed = true;
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level2){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm3");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 2: HQ"
                            this.stageName.x = 575
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer > 505 && managers.Game.timer < 595){
                            this.removeChild(this.stageName)
                            this.level2Enemies[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        
                        if(managers.Game.timer > 505 && managers.Game.timer < 590){
                            this.level2Enemies[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                            this.eliteUnits[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer > 505 && managers.Game.timer < 585){
                            this.level2Enemies[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer > 505 && managers.Game.timer < 550){
                            this.eliteUnits[3].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer < 504){
                            this.level2Enemies[0].forEach(e =>{
                                e.y -= 10;
                            })
                            this.level2Enemies[1].forEach(e =>{
                                e.x += 10;
                            })
                            this.level2Enemies[2].forEach(e =>{
                                e.y += 10;
                            })
                        }
        
                        if(managers.Game.timer == 504){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bossMusic");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer < 503){
                            if(!this.bosses[1].isDead){
                                this.bosses[1].isInvincible = false
                                this.bosses[1].FindPlayer(this.Splayer)
                                this.bosses[1].Update()
        
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[1])
                                })
                            }
                        }
        
                        if(managers.Game.boss2Hp == 0){
                            this.removeChild(this.bosses[1])
                            this.bosses[1].isInvincible = true;
                            this.bosses[1].isDead = true;
                            managers.Game.boss2IsDead = true;
                            this.bosses[1].DropCoins(50)
                            let counter2 = 5;
        
                            let interval = setInterval(() =>{
                                counter2--;
                                if(counter2 < 0){
                                    clearInterval(interval);
                                    managers.Game.level2Completed = true
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level3){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 3: Journey"
                            this.stageName.x = 525
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer >= 505 && managers.Game.timer < 595){
                            this.removeChild(this.stageName)
                            this.level3Enemies[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                            this.eliteUnits[4].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        if(managers.Game.timer >= 505 && managers.Game.timer < 590){
                            this.level3Enemies[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer >= 505 && managers.Game.timer < 587){
                            this.eliteUnits[4].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer >= 505 && managers.Game.timer < 585){
                            this.level3Enemies[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        if(managers.Game.timer >= 505 && managers.Game.timer < 565){
                            this.eliteUnits[3].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    e.FindPlayer(this.Splayer);
                                    this.missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer < 506){
                            this.level3Enemies[0].forEach(e =>{
                                e.y -= 10;
                            })
                            this.level3Enemies[1].forEach(e =>{
                                e.x += 10;
                            })
                            this.level3Enemies[2].forEach(e =>{
                                e.y += 10;
                            })
                        }
        
                        if(managers.Game.timer == 505){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bossMusic");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
                        if(managers.Game.timer < 504){
                            if(!this.bosses[2].isDead){
                                this.bosses[2].isInvincible = false
                                this.bosses[2].FindPlayer(this.Splayer)
                                this.bosses[2].Update();
        
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                            }
                            if(!this.bosses[3].isDead){
                                this.bosses[3].isInvincible = false
                                this.bosses[3].FindPlayer(this.Splayer)
                                this.bosses[3].Update();
        
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[3])
                                })
                            }
                        }
        
                        if(managers.Game.boss3_1Hp == 0){
                            this.removeChild(this.bosses[2])
                            this.bosses[2].isInvincible = true;
                            this.bosses[2].isDead = true;
                            managers.Game.boss3_1IsDead = true;
                            this.bosses[2].DropCoins(50)
                        }
                        if(managers.Game.boss3_2Hp == 0){
                            this.bosses[3].isInvincible = true;
                            this.bosses[3].isDead = true;
                            managers.Game.boss3_2IsDead = true;
                            this.bosses[3].DropCoins(50)
                        }
        
                        if((managers.Game.boss3_1Hp == 0 || 
                            (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)) && 
                            (managers.Game.boss3_2Hp == 0 || 
                            (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0))){
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);     
                                    managers.Game.level3Completed = true;
                                }
                            }, 1000)
                        }
                    }
                }

                if(managers.Game.bossRush){
                    this.aircraft.y += 3;

                    if(this.aircraft.y > 600)
                        this.removeChild(this.aircraft);
    
                    this.bulletManager.Update()
                    this.missileManager.Update()
                    this.enemyBulletManager.Update()
                    this.coinsManager.Coin.forEach(coin =>{
                        if(coin.IsDropped){
                            coin.FindPlayer(this.Splayer)
                            coin.Update()
                        }
                    })
    
                    this.ChangeShip();
                    this.CheckCollisions()
                    this.Splayer.Update();
    
                    if(this.Splayer.IsInvincible){
                        this.shields[0].x = this.Splayer.x +20
                        this.shields[0].y = this.Splayer.y +10
                        this.shields[0].alpha = 1;
                    }
        
                    if(!this.Splayer.IsInvincible)
                        this.shields[0].alpha = 0;
        
                    if(!this.Splayer.isDead){
                        if(managers.Game.hud.Power < 40 && !managers.Game.p1){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p1 = true
                        }
                        if((managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80) && !managers.Game.p2){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p2 = true
                        }
                        if((managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120) && !managers.Game.p3){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p3 = true
                        }
                        if((managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160) && !managers.Game.p4){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p4 = true
                        }
                        if(managers.Game.hud.Power >= 160 && !managers.Game.p5){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.p5 = true
                        }    
                    }
        
                    if(this.Splayer.isDead){
                        if(managers.Game.hud.Power >= 0 && managers.Game.hud.Power < 40){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 40 && managers.Game.hud.Power < 80){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 80 && managers.Game.hud.Power < 120){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 120 && managers.Game.hud.Power < 160){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.Power >= 160){
                            this.bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.bulletManager.buildBulletPool(this.Splayer.ShipType)
            
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }    
                    }
    
                    if(managers.Game.level1){
                        if(managers.Game.timer >= 598 && managers.Game.timer <= 600){
                            if(this.Splayer.y > 450)
                                this.Splayer.y -= 1;
                        }
                        if(managers.Game.timer >= 597 && managers.Game.timer <= 598){
                            if(this.Splayer.y < 550)
                                this.Splayer.y += 1;
                        }
                        if(managers.Game.timer > 591 && managers.Game.timer <= 596){
                            this.addChild(this.stageName)
                        }
                        if(managers.Game.timer <= 591){
                            this.removeChild(this.stageName)

                            this.bosses[0].isInvincible = false
                            if(!this.bosses[0].isDead){
                                this.bosses[0].FindPlayer(this.Splayer)
                                this.bosses[0].Update();
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[0])
                                })
                            }
                        }

                        if(managers.Game.boss1Hp == 0){
                            this.removeChild(this.bosses[0])
                            this.bosses[0].isInvincible = true;
                            this.bosses[0].isDead = true;
                            managers.Game.boss1IsDead = true;
                            this.bosses[0].DropCoins(50)
        
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);
                                    this.Splayer.alpha = 0
                                    managers.Game.level1Completed = true;
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level2){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm3");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 2: HQ"
                            this.stageName.x = 575
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer < 595){
                            this.removeChild(this.stageName)

                            if(!this.bosses[1].isDead){
                                this.bosses[1].isInvincible = false
                                this.bosses[1].FindPlayer(this.Splayer)
                                this.bosses[1].Update()
        
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[1])
                                })
                            }
                        }

                        if(managers.Game.boss2Hp == 0){
                            this.removeChild(this.bosses[1])
                            this.bosses[1].isInvincible = true;
                            this.bosses[1].isDead = true;
                            managers.Game.boss2IsDead = true;
                            this.bosses[1].DropCoins(50)
                            let counter2 = 5;
        
                            let interval = setInterval(() =>{
                                counter2--;
                                if(counter2 < 0){
                                    clearInterval(interval);
                                    managers.Game.level2Completed = true
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level3){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 3: Journey"
                            this.stageName.x = 525
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer < 595){
                            this.removeChild(this.stageName)

                            if(!this.bosses[2].isDead){
                                this.bosses[2].isInvincible = false
                                this.bosses[2].FindPlayer(this.Splayer)
                                this.bosses[2].Update();
        
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                            }
                            if(!this.bosses[3].isDead){
                                this.bosses[3].isInvincible = false
                                this.bosses[3].FindPlayer(this.Splayer)
                                this.bosses[3].Update();
        
                                this.missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[3])
                                })
                            }
                        }

                        if(managers.Game.boss3_1Hp == 0){
                            this.removeChild(this.bosses[2])
                            this.bosses[2].isInvincible = true;
                            this.bosses[2].isDead = true;
                            managers.Game.boss3_1IsDead = true;
                            this.bosses[2].DropCoins(50)
                        }
                        if(managers.Game.boss3_2Hp == 0){
                            this.bosses[3].isInvincible = true;
                            this.bosses[3].isDead = true;
                            managers.Game.boss3_2IsDead = true;
                            this.bosses[3].DropCoins(50)
                        }
        
                        if((managers.Game.boss3_1Hp == 0 || 
                            (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)) && 
                            (managers.Game.boss3_2Hp == 0 || 
                            (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0))){
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);     
                                    managers.Game.level3Completed = true;
                                }
                            }, 1000)
                        }
                    }
                }

                if(managers.Game.hud.Lives < 0)
                    managers.Game.currentScene = config.Scene.OVER;
            }

            if(managers.Game.multi){
                if(!managers.Game.bossRush){
                    this.P1aircraft.y += 3;
                    this.P2aircraft.y += 3;
                    this.P1Tag.x = this.P1.x - 17
                    this.P1Tag.y = this.P1.y - 50
    
                    this.P2Tag.x = this.P2.x - 17
                    this.P2Tag.y = this.P2.y - 50
    
                    if(this.P1aircraft.y > 720 ){
                        this.removeChild(this.P1aircraft);
                        this.removeChild(this.P2aircraft);
                    }
    
                    this.enemyBulletManager.Update()
                    this.coinsManager.Coin.forEach(coin =>{
                        if(coin.IsDropped){
                            if(coin.p1)
                                coin.FindPlayer(this.P1);
                            if(coin.p2)
                                coin.FindPlayer(this.P2);
                            coin.Update()
                        }
                    })
    
                    this.ChangeShip();
                    this.P1Collisions()
                    this.P2Collisions()
                    
                    // P1
                    this.P1.Update()
                    this.P1bulletManager.Update()
                    this.P1missileManager.Update()
                    if(this.P1.IsInvincible){
                        this.shields[1].x = this.P1.x +20
                        this.shields[1].y = this.P1.y +10
                        this.shields[1].alpha = 1;
                    }
        
                    if(!this.P1.IsInvincible)
                        this.shields[1].alpha = 0;
    
                    if(!this.P1.isDead){
                        if(managers.Game.hud.P1Power < 40 && !managers.Game.P1p1){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p1 = true
                        }
                        if((managers.Game.hud.P1Power >= 40 && managers.Game.hud.P1Power < 80) && !managers.Game.P1p2){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p2 = true
                        }
                        if((managers.Game.hud.P1Power >= 80 && managers.Game.hud.P1Power < 120) && !managers.Game.P1p3){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p3 = true
                        }
                        if((managers.Game.hud.P1Power >= 120 && managers.Game.hud.P1Power < 160) && !managers.Game.P1p4){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p4 = true
                        }
                        if(managers.Game.hud.P1Power >= 160 && !managers.Game.P1p5){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p5 = true
                        }    
                    }
        
                    if(this.P1.isDead){
                        if(managers.Game.hud.P1Power >= 0 && managers.Game.hud.P1Power < 40){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 40 && managers.Game.hud.P1Power < 80){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 80 && managers.Game.hud.P1Power < 120){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 120 && managers.Game.hud.P1Power < 160){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 160){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }    
                    }
                    
                    // P2
                    this.P2.Update()
                    this.P2bulletManager.Update()
                    this.P2missileManager.Update()
    
                    if(this.P2.IsInvincible){
                        this.shields[2].x = this.P2.x +20
                        this.shields[2].y = this.P2.y +10
                        this.shields[2].alpha = 1;
                    }
        
                    if(!this.P2.IsInvincible)
                        this.shields[2].alpha = 0;
    
                    if(!this.P2.isDead){
                        if(managers.Game.hud.P2Power < 40 && !managers.Game.P2p1){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p1 = true
                        }
                        if((managers.Game.hud.P2Power >= 40 && managers.Game.hud.P2Power < 80) && !managers.Game.P2p2){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p2 = true
                        }
                        if((managers.Game.hud.P2Power >= 80 && managers.Game.hud.P2Power < 120) && !managers.Game.P2p3){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p3 = true
                        }
                        if((managers.Game.hud.P2Power >= 120 && managers.Game.hud.P2Power < 160) && !managers.Game.P2p4){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p4 = true
                        }
                        if(managers.Game.hud.P2Power >= 160 && !managers.Game.P2p5){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p5 = true
                        }    
                    }
        
                    if(this.P2.isDead){
                        if(managers.Game.hud.P2Power >= 0 && managers.Game.hud.P2Power < 40){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 40 && managers.Game.hud.P2Power < 80){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 80 && managers.Game.hud.P2Power < 120){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 120 && managers.Game.hud.P2Power < 160){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 160){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }    
                    }
    
                    if(managers.Game.level1){
                        if(managers.Game.timer >= 598 && managers.Game.timer <= 600){
                            if(this.P1.y > 450)
                                this.P1.y -= 1;
                            if(this.P2.y > 450)
                                this.P2.y -= 1;
                        }
                        if(managers.Game.timer >= 597 && managers.Game.timer <= 598){
                            if(this.P1.y < 550)
                                this.P1.y += 1;
                            if(this.P2.y < 550)
                                this.P2.y += 1;
                        }
                        if(managers.Game.timer > 591 && managers.Game.timer <= 596){
                            this.addChild(this.stageName)
                        }
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 591){
                        //if(managers.Game.timer <= 591){
                            this.removeChild(this.stageName)
                            
                            this.level1Enemies[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 581){
                            this.level1Enemies[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                            this.eliteUnits[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                        }
        
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 576){
                            this.level1Enemies[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer >= 481 && managers.Game.timer <= 536){
                            this.eliteUnits[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
    
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer < 481){
                            this.level1Enemies[0].forEach(e =>{
                                e.y += 10;
                            })
                            this.level1Enemies[1].forEach(e =>{
                                e.x -= 10;
                            })
                            this.level1Enemies[2].forEach(e =>{
                                e.y -= 10;
                            })
                        }
        
                        if(managers.Game.timer == 480){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bossMusic");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer < 479){
                            this.bosses[0].isInvincible = false
                            this.background.y += 0;
                            if(!this.bosses[0].isDead){
                                let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                if(rand == 1)
                                    this.bosses[0].FindPlayer(this.P1)
                                if(rand == 2)
                                    this.bosses[0].FindPlayer(this.P2)
                                this.bosses[0].Update();
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[0])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[0])
                                })
                            }
                        }
        
                        if(managers.Game.boss1Hp == 0){
                            this.removeChild(this.bosses[0])
                            this.bosses[0].isInvincible = true;
                            this.bosses[0].isDead = true;
                            managers.Game.boss1IsDead = true;
                            this.bosses[0].DropCoins(50)
        
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);
                                    managers.Game.level1Completed = true;
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level2){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm3");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 2: HQ"
                            this.stageName.x = 575
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer > 505 && managers.Game.timer < 595){
                            this.removeChild(this.stageName)
                            
                            this.level2Enemies[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        
                        if(managers.Game.timer > 505 && managers.Game.timer < 590){
                            this.level2Enemies[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                            this.eliteUnits[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer > 505 && managers.Game.timer < 585){
                            this.level2Enemies[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer > 505 && managers.Game.timer < 550){
                            this.eliteUnits[3].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer < 504){
                            this.level2Enemies[0].forEach(e =>{
                                e.y -= 10;
                            })
                            this.level2Enemies[1].forEach(e =>{
                                e.x += 10;
                            })
                            this.level2Enemies[2].forEach(e =>{
                                e.y += 10;
                            })
                        }
        
                        if(managers.Game.timer == 504){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bossMusic");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer < 503){
                            if(!this.bosses[1].isDead){
                                this.bosses[1].isInvincible = false
                                let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        this.bosses[1].FindPlayer(this.P1);
                                    if(rand == 2)
                                        this.bosses[1].FindPlayer(this.P2);
                                this.bosses[1].Update()
        
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[1])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[1])
                                })
                            }
                        }
        
                        if(managers.Game.boss2Hp == 0){
                            this.removeChild(this.bosses[1])
                            this.bosses[1].isInvincible = true;
                            this.bosses[1].isDead = true;
                            managers.Game.boss2IsDead = true;
                            this.bosses[1].DropCoins(50)
                            let counter2 = 5;
        
                            let interval = setInterval(() =>{
                                counter2--;
                                if(counter2 < 0){
                                    clearInterval(interval);
                                    managers.Game.level2Completed = true
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level3){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 3: Journey"
                            this.stageName.x = 525
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer >= 505 && managers.Game.timer < 595){
                            this.removeChild(this.stageName)
                            
                            this.level3Enemies[1].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
        
                            this.eliteUnits[4].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        if(managers.Game.timer >= 505 && managers.Game.timer < 590){
                            this.level3Enemies[0].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer >= 505 && managers.Game.timer < 587){
                            this.eliteUnits[4].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer >= 505 && managers.Game.timer < 585){
                            this.level3Enemies[2].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
                        if(managers.Game.timer >= 505 && managers.Game.timer < 565){
                            this.eliteUnits[3].forEach(e =>{
                                if(!e.isDead){
                                    e.isInvincible = false;
                                    e.Update();
                                    let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        e.FindPlayer(this.P1);
                                    if(rand == 2)
                                        e.FindPlayer(this.P2);
                                    this.P1missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                    this.P2missileManager.Missile.forEach( m => {
                                        m.FindEnemies(e)
                                    })
                                }
                            })
                        }
        
                        if(managers.Game.timer < 506){
                            this.level3Enemies[0].forEach(e =>{
                                e.y -= 10;
                            })
                            this.level3Enemies[1].forEach(e =>{
                                e.x += 10;
                            })
                            this.level3Enemies[2].forEach(e =>{
                                e.y += 10;
                            })
                        }
        
                        if(managers.Game.timer == 505){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bossMusic");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
                        if(managers.Game.timer < 504){
                            if(!this.bosses[2].isDead){
                                this.bosses[2].isInvincible = false
                                this.bosses[2].FindPlayer(this.P1)
                                this.bosses[2].Update();
        
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                            }
                            if(!this.bosses[3].isDead){
                                this.bosses[3].isInvincible = false
                                this.bosses[3].FindPlayer(this.P2)
                                this.bosses[3].Update();
        
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                            }
                        }
        
                        if(managers.Game.boss3_1Hp == 0){
                            this.removeChild(this.bosses[2])
                            this.bosses[2].isInvincible = true;
                            this.bosses[2].isDead = true;
                            managers.Game.boss3_1IsDead = true;
                            this.bosses[2].DropCoins(50)
                        }
    
                        if(managers.Game.boss3_2Hp == 0){
                            this.bosses[3].isInvincible = true;
                            this.bosses[3].isDead = true;
                            managers.Game.boss3_2IsDead = true;
                            this.bosses[3].DropCoins(50)
                        }
        
                        if((managers.Game.boss3_1Hp == 0 || 
                            (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)) && 
                            (managers.Game.boss3_2Hp == 0 || 
                            (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0))){
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);     
                                    managers.Game.level3Completed = true;
                                }
                            }, 1000)
                        }
                    }
    
                    if(managers.Game.hud.P1Lives < 0 && managers.Game.hud.P2Lives < 0){
                        managers.Game.currentScene = config.Scene.OVER;
                    }
    
                    if(managers.Game.hud.P1Lives < 0){
                        this.P1.isDead = true
                        this.P1.alpha = 0
                        this.P1Tag.alpha = 0
                    }
                    if(managers.Game.hud.P2Lives < 0){
                        this.P2.isDead = true
                        this.P2.alpha = 0
                        this.P2Tag.alpha = 0
                    }
                }

                if(managers.Game.bossRush){
                    this.P1aircraft.y += 3;
                    this.P2aircraft.y += 3;
                    this.P1Tag.x = this.P1.x - 17
                    this.P1Tag.y = this.P1.y - 50
    
                    this.P2Tag.x = this.P2.x - 17
                    this.P2Tag.y = this.P2.y - 50
    
                    if(this.P1aircraft.y > 720 ){
                        this.removeChild(this.P1aircraft);
                        this.removeChild(this.P2aircraft);
                    }
    
                    this.enemyBulletManager.Update()
                    this.coinsManager.Coin.forEach(coin =>{
                        if(coin.IsDropped){
                            if(coin.p1)
                                coin.FindPlayer(this.P1);
                            if(coin.p2)
                                coin.FindPlayer(this.P2);
                            coin.Update()
                        }
                    })
    
                    this.ChangeShip();
                    this.P1Collisions()
                    this.P2Collisions()
                    
                    // P1
                    this.P1.Update()
                    this.P1bulletManager.Update()
                    this.P1missileManager.Update()
                    if(this.P1.IsInvincible){
                        this.shields[1].x = this.P1.x +20
                        this.shields[1].y = this.P1.y +10
                        this.shields[1].alpha = 1;
                    }
        
                    if(!this.P1.IsInvincible)
                        this.shields[1].alpha = 0;
    
                    if(!this.P1.isDead){
                        if(managers.Game.hud.P1Power < 40 && !managers.Game.P1p1){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p1 = true
                        }
                        if((managers.Game.hud.P1Power >= 40 && managers.Game.hud.P1Power < 80) && !managers.Game.P1p2){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p2 = true
                        }
                        if((managers.Game.hud.P1Power >= 80 && managers.Game.hud.P1Power < 120) && !managers.Game.P1p3){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p3 = true
                        }
                        if((managers.Game.hud.P1Power >= 120 && managers.Game.hud.P1Power < 160) && !managers.Game.P1p4){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p4 = true
                        }
                        if(managers.Game.hud.P1Power >= 160 && !managers.Game.P1p5){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P1p5 = true
                        }    
                    }
        
                    if(this.P1.isDead){
                        if(managers.Game.hud.P1Power >= 0 && managers.Game.hud.P1Power < 40){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 40 && managers.Game.hud.P1Power < 80){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 80 && managers.Game.hud.P1Power < 120){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 120 && managers.Game.hud.P1Power < 160){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P1Power >= 160){
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P1BulletManager.buildBulletPool(this.P1.ShipType)
            
                            this.P1bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }    
                    }
                    
                    // P2
                    this.P2.Update()
                    this.P2bulletManager.Update()
                    this.P2missileManager.Update()
    
                    if(this.P2.IsInvincible){
                        this.shields[2].x = this.P2.x +20
                        this.shields[2].y = this.P2.y +10
                        this.shields[2].alpha = 1;
                    }
        
                    if(!this.P2.IsInvincible)
                        this.shields[2].alpha = 0;
    
                    if(!this.P2.isDead){
                        if(managers.Game.hud.P2Power < 40 && !managers.Game.P2p1){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p1 = true
                        }
                        if((managers.Game.hud.P2Power >= 40 && managers.Game.hud.P2Power < 80) && !managers.Game.P2p2){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p2 = true
                        }
                        if((managers.Game.hud.P2Power >= 80 && managers.Game.hud.P2Power < 120) && !managers.Game.P2p3){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p3 = true
                        }
                        if((managers.Game.hud.P2Power >= 120 && managers.Game.hud.P2Power < 160) && !managers.Game.P2p4){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p4 = true
                        }
                        if(managers.Game.hud.P2Power >= 160 && !managers.Game.P2p5){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                            managers.Game.P2p5 = true
                        }    
                    }
        
                    if(this.P2.isDead){
                        if(managers.Game.hud.P2Power >= 0 && managers.Game.hud.P2Power < 40){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 40 && managers.Game.hud.P2Power < 80){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 80 && managers.Game.hud.P2Power < 120){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 120 && managers.Game.hud.P2Power < 160){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }
                        if(managers.Game.hud.P2Power >= 160){
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            managers.Game.P2BulletManager.buildBulletPool(this.P2.ShipType)
            
                            this.P2bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        }    
                    }
    
                    if(managers.Game.level1){
                        if(managers.Game.timer >= 598 && managers.Game.timer <= 600){
                            if(this.P1.y > 450)
                                this.P1.y -= 1;
                            if(this.P2.y > 450)
                                this.P2.y -= 1;
                        }
                        if(managers.Game.timer >= 597 && managers.Game.timer <= 598){
                            if(this.P1.y < 550)
                                this.P1.y += 1;
                            if(this.P2.y < 550)
                                this.P2.y += 1;
                        }
                        if(managers.Game.timer > 591 && managers.Game.timer <= 596){
                            this.addChild(this.stageName)
                        }
                        if(managers.Game.timer <= 591){
                            this.removeChild(this.stageName)

                            this.bosses[0].isInvincible = false
                            if(!this.bosses[0].isDead){
                                let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                if(rand == 1)
                                    this.bosses[0].FindPlayer(this.P1)
                                if(rand == 2)
                                    this.bosses[0].FindPlayer(this.P2)
                                this.bosses[0].Update();
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[0])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[0])
                                })
                            }

                        }

                        if(managers.Game.boss1Hp == 0){
                            this.removeChild(this.bosses[0])
                            this.bosses[0].isInvincible = true;
                            this.bosses[0].isDead = true;
                            managers.Game.boss1IsDead = true;
                            this.bosses[0].DropCoins(50)
        
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);
                                    managers.Game.level1Completed = true;
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level2){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm3");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 2: HQ"
                            this.stageName.x = 575
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer < 595){
                            this.removeChild(this.stageName)
                            if(!this.bosses[1].isDead){
                                this.bosses[1].isInvincible = false
                                let rand = Math.floor(Math.random() * (2 - 1 + 1) + 1)
                                    if(rand == 1)
                                        this.bosses[1].FindPlayer(this.P1);
                                    if(rand == 2)
                                        this.bosses[1].FindPlayer(this.P2);
                                this.bosses[1].Update()
        
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[1])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[1])
                                })
                            }

                        }
        
                        if(managers.Game.boss2Hp == 0){
                            this.removeChild(this.bosses[1])
                            this.bosses[1].isInvincible = true;
                            this.bosses[1].isDead = true;
                            managers.Game.boss2IsDead = true;
                            this.bosses[1].DropCoins(50)
                            let counter2 = 5;
        
                            let interval = setInterval(() =>{
                                counter2--;
                                if(counter2 < 0){
                                    clearInterval(interval);
                                    managers.Game.level2Completed = true
                                }
                            }, 1000)
                        }
                    }
                    
                    if(managers.Game.level3){
                        if(managers.Game.timer == 600){
                            createjs.Sound.stop();
                            this.bgm = createjs.Sound.play("bgm");
                            this.bgm.loop = -1;
                            this.bgm.volume = 0.05;
                        }
        
                        if(managers.Game.timer > 595 && managers.Game.timer <= 599){
                            this.stageName.text = "Stage 3: Journey"
                            this.stageName.x = 525
                            this.addChild(this.stageName)
                        }
        
                        if(managers.Game.timer < 595){
                            this.removeChild(this.stageName)
                            if(!this.bosses[2].isDead){
                                this.bosses[2].isInvincible = false
                                this.bosses[2].FindPlayer(this.P1)
                                this.bosses[2].Update();
        
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                            }
                            if(!this.bosses[3].isDead){
                                this.bosses[3].isInvincible = false
                                this.bosses[3].FindPlayer(this.P2)
                                this.bosses[3].Update();
        
                                this.P1missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                                this.P2missileManager.Missile.forEach( m => {
                                    m.FindEnemies(this.bosses[2])
                                })
                            }
                        }
                        
                        if(managers.Game.boss3_1Hp == 0){
                            this.removeChild(this.bosses[2])
                            this.bosses[2].isInvincible = true;
                            this.bosses[2].isDead = true;
                            managers.Game.boss3_1IsDead = true;
                            this.bosses[2].DropCoins(50)
                        }
    
                        if(managers.Game.boss3_2Hp == 0){
                            this.bosses[3].isInvincible = true;
                            this.bosses[3].isDead = true;
                            managers.Game.boss3_2IsDead = true;
                            this.bosses[3].DropCoins(50)
                        }
        
                        if((managers.Game.boss3_1Hp == 0 || 
                            (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)) && 
                            (managers.Game.boss3_2Hp == 0 || 
                            (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0))){
                            let counter = 5;
        
                            let interval = setInterval(() =>{
                                counter--;
                                if(counter < 0){
                                    clearInterval(interval);     
                                    managers.Game.level3Completed = true;
                                }
                            }, 1000)
                        }
                    }
    
                    if(managers.Game.hud.P1Lives < 0 && managers.Game.hud.P2Lives < 0){
                        managers.Game.currentScene = config.Scene.OVER;
                    }
    
                    if(managers.Game.hud.P1Lives < 0){
                        this.P1.isDead = true
                        this.P1.alpha = 0
                        this.P1Tag.alpha = 0
                    }
                    if(managers.Game.hud.P2Lives < 0){
                        this.P2.isDead = true
                        this.P2.alpha = 0
                        this.P2Tag.alpha = 0
                    }
                }
                
            }
        }

        public Main(): void {
            // Order matters when adding game objects.
            this.addChild(this.background)
            
            if(managers.Game.single){
                if(!managers.Game.bossRush){
                    this.GameTimer()
                    this.addChild(this.aircraft)
                    this.level1Enemies.forEach(e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
        
                    this.level2Enemies.forEach(e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
        
                    this.level3Enemies.forEach(e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
        
                    this.eliteUnits.forEach( e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
                    this.bosses.forEach(e =>{
                        this.addChild(e)
                    })
        
                    this.bulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
        
                    this.missileManager.Missile.forEach(m => {
                        this.addChild(m)
                    })
                    
                    this.addChild(this.Splayer)
                    this.shields.forEach(s =>{
                        this.addChild(s)
                    })
        
                    this.enemyBulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                }

                if(managers.Game.bossRush){
                    this.GameTimer()
                    this.addChild(this.aircraft)

                    this.bosses.forEach(e =>{
                        this.addChild(e)
                    })
        
                    this.bulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
        
                    this.missileManager.Missile.forEach(m => {
                        this.addChild(m)
                    })
                    
                    this.addChild(this.Splayer)
                    this.shields.forEach(s =>{
                        this.addChild(s)
                    })
        
                    this.enemyBulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                }
                
            }
            
            if(managers.Game.multi){
                if(!managers.Game.bossRush){
                    this.GameTimer()

                    this.addChild(this.P1aircraft)
                    this.addChild(this.P2aircraft)
    
                    this.level1Enemies.forEach(e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
        
                    this.level2Enemies.forEach(e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
        
                    this.level3Enemies.forEach(e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
        
                    this.eliteUnits.forEach( e =>{
                        e.forEach(f =>{
                            this.addChild(f)
                        })
                    })
                    this.bosses.forEach(e =>{
                        this.addChild(e)
                    })
    
                    this.P1bulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                    this.P1missileManager.Missile.forEach(m =>{
                        this.addChild(m)
                    })
    
                    this.P2bulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                    this.P2missileManager.Missile.forEach(m =>{
                        this.addChild(m)
                    })
    
                    this.addChild(this.P1)
                    this.addChild(this.P1Tag)
    
                    this.addChild(this.P2)
                    this.addChild(this.P2Tag)
                    this.shields.forEach(s =>{
                        this.addChild(s)
                    })
    
                    this.enemyBulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                }

                if(managers.Game.bossRush){
                    this.GameTimer()

                    this.addChild(this.P1aircraft)
                    this.addChild(this.P2aircraft)

                    this.bosses.forEach(e =>{
                        this.addChild(e)
                    })
    
                    this.P1bulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                    this.P1missileManager.Missile.forEach(m =>{
                        this.addChild(m)
                    })
    
                    this.P2bulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                    this.P2missileManager.Missile.forEach(m =>{
                        this.addChild(m)
                    })
    
                    this.addChild(this.P1)
                    this.addChild(this.P1Tag)
    
                    this.addChild(this.P2)
                    this.addChild(this.P2Tag)
                    this.shields.forEach(s =>{
                        this.addChild(s)
                    })
    
                    this.enemyBulletManager.Bullet.forEach(bullet =>{
                        this.addChild(bullet)
                    })
                }
            }

            this.addChild(this.hudImage)
            this.addChild(this.hud)
        }

        public CheckCollisions():void{
            this.bulletManager.Bullet.forEach(bullet =>{
                if(bullet.y > 0){
                    this.level1Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.Splayer)
                            }
                        })
                    })
    
                    this.level2Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.Splayer)
                            }
                        })
                    })
    
                    this.level3Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.Splayer)
                            }
                        })
                    })
                    
                    this.eliteUnits.forEach(e => {
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.Splayer)
                            }
                        })
                    })
                    this.bosses.forEach(e=>{
                        if(!e.isInvincible && !managers.Game.boss1IsDead)
                            managers.Collision.CheckAABB(bullet,e)
                        if(!e.isInvincible && !managers.Game.boss2IsDead)
                            managers.Collision.CheckAABB(bullet, e)
                        if(!e.isInvincible && !managers.Game.boss3_1IsDead)
                            managers.Collision.CheckAABB(bullet, e)
                        if(!e.isInvincible && !managers.Game.boss3_2IsDead)
                            managers.Collision.CheckAABB(bullet, e)
                    })

                    this.shields.forEach(s=>{
                        managers.Collision.CheckAABB(bullet, s)
                    })
                }
            })

            this.missileManager.Missile.forEach(m =>{
                this.level1Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.level2Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.level3Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.eliteUnits.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.bosses.forEach(e=>{
                    if(!e.isInvincible && !managers.Game.boss1IsDead)
                        managers.Collision.CheckAABB(m,e)
                    if(!e.isInvincible && !managers.Game.boss2IsDead)
                        managers.Collision.CheckAABB(m, e)
                    if(!e.isInvincible && !managers.Game.boss3_1IsDead)
                        managers.Collision.CheckAABB(m, e)
                    if(!e.isInvincible && !managers.Game.boss3_2IsDead)
                        managers.Collision.CheckAABB(m, e)
                })
            })

            this.coinsManager.Coin.forEach(c =>{
                managers.Collision.CheckAABB(this.Splayer, c)
            })

            this.enemyBulletManager.Bullet.forEach(b =>{
                if(!this.Splayer.IsInvincible && !this.Splayer.isDead)
                    managers.Collision.CheckAABB(b, this.Splayer)
                if(this.Splayer.IsInvincible)
                    managers.Collision.CheckAABB(b, this.shields[0])
            })
        }

        public P1Collisions():void{
            this.P1bulletManager.Bullet.forEach(bullet =>{
                if(bullet.y > 0){
                    this.level1Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P1Collision.CheckAABB(bullet, f)
                                managers.P1Collision.CheckAABB(f, this.P1)
                            }
                        })
                    })
    
                    this.level2Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P1Collision.CheckAABB(bullet, f)
                                managers.P1Collision.CheckAABB(f, this.P1)
                            }
                        })
                    })
    
                    this.level3Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P1Collision.CheckAABB(bullet, f)
                                managers.P1Collision.CheckAABB(f, this.P1)
                            }
                        })
                    })
                    
                    this.eliteUnits.forEach(e => {
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P1Collision.CheckAABB(bullet, f)
                                managers.P1Collision.CheckAABB(f, this.P1)
                            }
                        })
                    })
                    this.bosses.forEach(e=>{
                        if(!e.isInvincible && !managers.Game.boss1IsDead)
                            managers.P1Collision.CheckAABB(bullet,e)
                        if(!e.isInvincible && !managers.Game.boss2IsDead)
                            managers.P1Collision.CheckAABB(bullet, e)
                        if(!e.isInvincible && !managers.Game.boss3_1IsDead)
                            managers.P1Collision.CheckAABB(bullet, e)
                        if(!e.isInvincible && !managers.Game.boss3_2IsDead)
                            managers.P1Collision.CheckAABB(bullet, e)
                    })

                    this.shields.forEach(s=>{
                        managers.P1Collision.CheckAABB(bullet, s)
                    })
                }
            })

            this.P1missileManager.Missile.forEach(m =>{
                this.level1Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P1Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.level2Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P1Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.level3Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P1Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.eliteUnits.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P1Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.bosses.forEach(e=>{
                    if(!e.isInvincible && !managers.Game.boss1IsDead)
                        managers.P1Collision.CheckAABB(m, e)
                    if(!e.isInvincible && !managers.Game.boss2IsDead)
                        managers.P1Collision.CheckAABB(m, e)
                    if(!e.isInvincible && !managers.Game.boss3_1IsDead)
                        managers.P1Collision.CheckAABB(m, e)
                    if(!e.isInvincible && !managers.Game.boss3_2IsDead)
                        managers.P1Collision.CheckAABB(m, e)
                })
            })

            this.coinsManager.Coin.forEach(c =>{
                managers.P1Collision.CheckAABB(this.P1, c)
            })

            this.enemyBulletManager.Bullet.forEach(b =>{
                if(!this.P1.IsInvincible && !this.P1.isDead)
                    managers.P1Collision.CheckAABB(b, this.P1)
                if(this.P1.IsInvincible)
                    managers.P1Collision.CheckAABB(b, this.shields[1])
            })
        }

        public P2Collisions():void{
            // P2
            this.P2bulletManager.Bullet.forEach(bullet =>{
                if(bullet.y > 0){
                    this.level1Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P2Collision.CheckAABB(bullet, f)
                                managers.P2Collision.CheckAABB(f, this.P2)
                            }
                        })
                    })
    
                    this.level2Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P2Collision.CheckAABB(bullet, f)
                                managers.P2Collision.CheckAABB(f, this.P2)
                            }
                        })
                    })
    
                    this.level3Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P2Collision.CheckAABB(bullet, f)
                                managers.P2Collision.CheckAABB(f, this.P2)
                            }
                        })
                    })
                    
                    this.eliteUnits.forEach(e => {
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > 0){
                                managers.P2Collision.CheckAABB(bullet, f)
                                managers.P2Collision.CheckAABB(f, this.P2)
                            }
                        })
                    })
                    this.bosses.forEach(e=>{
                        if(!e.isInvincible && !managers.Game.boss1IsDead)
                            managers.P2Collision.CheckAABB(bullet,e)
                        if(!e.isInvincible && !managers.Game.boss2IsDead)
                            managers.P2Collision.CheckAABB(bullet, e)
                        if(!e.isInvincible && !managers.Game.boss3_1IsDead)
                            managers.P2Collision.CheckAABB(bullet, e)
                        if(!e.isInvincible && !managers.Game.boss3_2IsDead)
                            managers.P2Collision.CheckAABB(bullet, e)
                    })

                    this.shields.forEach(s=>{
                        managers.P2Collision.CheckAABB(bullet, s)
                    })
                }
            })

            this.P2missileManager.Missile.forEach(m =>{
                this.level1Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P2Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.level2Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P2Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.level3Enemies.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P2Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.eliteUnits.forEach(e =>{
                    e.forEach(f =>{
                        if(!f.isInvincible){
                            managers.P2Collision.CheckAABB(m, f)
                        }
                    })
                })

                this.bosses.forEach(e=>{
                    if(!e.isInvincible && !managers.Game.boss1IsDead)
                        managers.P2Collision.CheckAABB(m,e)
                    if(!e.isInvincible && !managers.Game.boss2IsDead)
                        managers.P2Collision.CheckAABB(m, e)
                    if(!e.isInvincible && !managers.Game.boss3_1IsDead)
                        managers.P2Collision.CheckAABB(m, e)
                    if(!e.isInvincible && !managers.Game.boss3_2IsDead)
                        managers.P2Collision.CheckAABB(m, e)
                })
            })

            this.coinsManager.Coin.forEach(c =>{
                managers.P2Collision.CheckAABB(this.P2, c)
            })
            
            this.enemyBulletManager.Bullet.forEach(b =>{
                if(!this.P2.IsInvincible && !this.P2.isDead)
                    managers.P2Collision.CheckAABB(b, this.P2)
                if(this.P2.IsInvincible)
                    managers.P2Collision.CheckAABB(b, this.shields[1])
            })
        }
        
        public ChangeShip():void{
            let ticker:number = createjs.Ticker.getTicks();
                if(managers.Game.single){
                    if(managers.Game.keyboardManager.Sswap && (ticker % 50 == 0)){
                        let playerPosX = this.Splayer.x;
                        let playerPosY = this.Splayer.y;
                        this.removeChild(this.Splayer);
                        this.bulletManager.Bullet.forEach(ammo =>{
                            this.removeChild(ammo);
                        });
                        
                        switch(this.Splayer.ShipType){
                            case config.Ship.Botcoin:
                                this.addChild(this.Splayer = new objects.Player("Ship2", playerPosX, playerPosY, true));
                                this.Splayer.ShipType = config.Ship.Lightcoin;
                                this.bulletManager.buildBulletPool(this.Splayer.ShipType);
                                this.bulletManager.Bullet.forEach(bullet =>{
                                    this.addChild(bullet);
                                });
                            break;       
                            case config.Ship.Lightcoin:
        
                                this.addChild(this.Splayer = new objects.Player("Ship1", playerPosX, playerPosY, true));
                                this.Splayer.ShipType = config.Ship.Botcoin;
                                this.bulletManager.buildBulletPool(this.Splayer.ShipType);
                                this.bulletManager.Bullet.forEach(bullet =>{
                                    this.addChild(bullet);
                                });
                            break;
                        }
                    }
                }
                if(managers.Game.multi){
                    if(this.P1.name == "P1"){
                        if(managers.Game.keyboardManager.P1swap && (ticker % 50 == 0)){
                            let playerPosX = this.P1.x;
                            let playerPosY = this.P1.y;
                            this.removeChild(this.P1);
                            this.P1bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            switch(this.P1.ShipType){
                                case config.Ship.Botcoin:
                                    this.addChild(this.P1 = new objects.Player("Ship2", playerPosX, playerPosY, true));
                                    this.P1.name = "P1"
                                    this.P1.ShipType = config.Ship.Lightcoin;
                                    this.P1bulletManager.buildBulletPool(this.P1.ShipType);
                                    this.P1bulletManager.Bullet.forEach(bullet =>{
                                        this.addChild(bullet);
                                    });
                                break;       
                                case config.Ship.Lightcoin:
                                    this.addChild(this.P1 = new objects.Player("Ship1", playerPosX, playerPosY, true));
                                    this.P1.name = "P1"
                                    this.P1.ShipType = config.Ship.Botcoin;
                                    this.P1bulletManager.buildBulletPool(this.P1.ShipType);
                                    this.P1bulletManager.Bullet.forEach(bullet =>{
                                        this.addChild(bullet);
                                    });
                                break;
                            }
                        }
                    }

                    if(this.P2.name == "P2"){
                        if(managers.Game.keyboardManager.P2swap && (ticker % 50 == 0)){
                            let playerPosX = this.P2.x;
                            let playerPosY = this.P2.y;
                            this.removeChild(this.P2);
                            this.P2bulletManager.Bullet.forEach(ammo =>{
                                this.removeChild(ammo);
                            });
                            
                            switch(this.P2.ShipType){
                                case config.Ship.Botcoin:
                                    this.addChild(this.P2 = new objects.Player("Ship2", playerPosX, playerPosY, true));
                                    this.P2.name = "P2"
                                    this.P2.ShipType = config.Ship.Lightcoin;
                                    this.P2bulletManager.buildBulletPool(this.P2.ShipType);
                                    this.P2bulletManager.Bullet.forEach(bullet =>{
                                        this.addChild(bullet);
                                    });
                                break;       
                                case config.Ship.Lightcoin:
                                    this.addChild(this.P2 = new objects.Player("Ship1", playerPosX, playerPosY, true));
                                    this.P2.name = "P2"
                                    this.P2.ShipType = config.Ship.Botcoin;
                                    this.P2bulletManager.buildBulletPool(this.P2.ShipType);
                                    this.P2bulletManager.Bullet.forEach(bullet =>{
                                        this.addChild(bullet);
                                    });
                                break;
                            }
                        }
                    }
                    
                }
               
        }

        public GameTimer():void{
            let interval = setInterval(() =>{
                managers.Game.timer--;
                if(managers.Game.timer < 0 || managers.Game.currentScene == config.Scene.START){
                    clearInterval(interval);
                }
            }, 1000)
        }

        public SpawnTimer():void{
            let counter = 1;
            let interval = setInterval(() =>{
                counter--;
                if(counter < 0){
                    clearInterval(interval);
                }
            }, 1000)
        }
    }
}
