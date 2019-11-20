module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private aircraft: objects.Image;

        private stageName: objects.Label;

        private player:objects.Player;
        private shield:objects.Sprite;
        private effect:objects.Effect;

        private hudImage: objects.Image;
        private hud:managers.HUD;

        private level1Enemies: objects.Enemy[][]
        private level2Enemies: objects.Enemy[][]
        private level3Enemies: objects.Enemy[][]
        private eliteUnits: objects.Enemy[][]
        private eBoss1: objects.Enemy;
        private eBoss2: objects.Enemy;
        private eMinion1: objects.Enemy
        private eMinion2: objects.Enemy
        private eShip: objects.Enemy


        private coinsManager: managers.Coins;
        private testCoin: objects.Coins;

        private bulletManager:managers.Bullet;
        private missileManager:managers.Missile;

        private enemyBulletManager:managers.EnemyBullet;
        private testEnemyBullet:objects.EnemyBullet;

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
            
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("bgm2");
            this.bgm.loop = -1;
            this.bgm.volume = 0.05;

            this.stageName = new objects.Label("Stage 1: Invasion", "36px", "OptimusPrinceps", "#FFFFFF", 530, 240, true);

            this.player = new objects.Player("Ship1", 555, 690, false, 1);

            this.aircraft = new objects.Image("aircraft", 418, 450);

            this.shield = new objects.Sprite("Shield", this.player.x + 20, this.player.y-5);
            this.shield.alpha = 0;
            this.shield.scaleX = 0.6
            this.shield.scaleY = 0.6
            
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            this.enemyBulletManager = new managers.EnemyBullet();
            managers.Game.enemyBulletManager = this.enemyBulletManager;

            this.coinsManager = new managers.Coins();
            managers.Game.coinsManager = this.coinsManager;

            this.missileManager = new managers.Missile()
            managers.Game.missileManager = this.missileManager

            //this.testEnemyBullet = new objects.EnemyBullet("Enemy1_Shot", false);
            //this.testEnemyBullet.x = this.player.x;
            //this.testEnemyBullet.y = this.player.y - 100;

            managers.Game.player = this.player
            managers.Game.timer = 600
            managers.Game.boss1Hp = 200
            managers.Game.boss2Hp = 300
            managers.Game.boss3Hp = 400
            managers.Game.eEliteHp = 25
            managers.Game.eMinionHp = 10
            
            this.eliteUnits = []
            this.level1Enemies = []
            this.level2Enemies = []
            this.level3Enemies = []
            this.eBoss1 = new objects.Enemy("Enemy4");
            this.eBoss2 = new objects.Enemy("Destroyer")

            //this.testCoin = new objects.Coins("B_coin", true)
            //this.testCoin.x = 550
            //this.testCoin.y = 100

            switch(managers.Game.difficulty){
                case 0:
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
                break;
                case 1:
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
                break;
                case 2:
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
                break;
            }

            this.hudImage = new objects.Image("HUD", 342, 0);  

            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            if(managers.Game.normal){
                managers.Game.hud.Lives = 9;
                managers.Game.hud.Bombs = 1;
            }
            if(managers.Game.hard){
                managers.Game.hud.Lives = 6;
                managers.Game.hud.Bombs = 1;
            }
            if(managers.Game.hell){
                managers.Game.hud.Lives = 3;
                managers.Game.hud.Bombs = 1;
            }

            this.Main();
        }

        public Update(): void {
            managers.Game.highscore = this.hud.Score;
            this.hud.Update()
            this.aircraft.y += 3;
            if(this.aircraft.y > 720){
                this.removeChild(this.aircraft);
            }

            this.bulletManager.Update();
            this.missileManager.Update()
            
            this.enemyBulletManager.Update()
            this.coinsManager.Coin.forEach(coin =>{
                if(coin.IsDropped){
                    coin.FindPlayer(this.player)
                    coin.Update()
                }
            })

            console.log(managers.Game.timer);
            this.background.Update();
            this.player.Update();
            if(this.player.IsInvincible){
                this.shield.x = this.player.x +20
                this.shield.y = this.player.y +10
                this.shield.alpha = 1;
            }
            if(!this.player.IsInvincible)
                this.shield.alpha = 0;

            this.ChangeShip();
            this.CheckCollisions()
            //this.testCoin.FindPlayer(this.player)
            //this.testCoin.Update()

            
            if(managers.Game.level1){
                if(managers.Game.timer >= 598 && managers.Game.timer <= 600){
                    if(this.player.y > 550)
                    this.player.y -= 1;
                }
                if(managers.Game.timer >= 597 && managers.Game.timer <= 598){
                    if(this.player.y < 675)
                    this.player.y += 1;
                }
                if(managers.Game.timer > 591 && managers.Game.timer <= 596){
                    this.addChild(this.stageName)
                }
                //if(managers.Game.timer >= 481 && managers.Game.timer <= 591){
                if(managers.Game.timer <= 591){
                    this.removeChild(this.stageName)

                    this.eliteUnits[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })
                    /*
                    if(!this.eBoss2.isDead){
                        this.eBoss2.isInvincible = false
                        this.eBoss2.FindPlayer(this.player)
                        this.eBoss2.Update()
                    }
                        
                    
                    this.level1Enemies[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })
                    
                    if(!this.eBoss1.isDead){
                        this.eBoss1.isInvincible = false
                        this.eBoss1.FindPlayer(this.player)
                        this.eBoss1.Update();

                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.eBoss1)
                        })
                    }*/
                }/*
                if(managers.Game.timer >= 481 && managers.Game.timer <= 581){
                    this.level1Enemies[1].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })

                    this.eliteUnits[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                        if(managers.Game.eEliteHp == 0 || (managers.Game.eEliteHp < 0 && Math.abs(managers.Game.eEliteHp) % 25 == 0))
                            e.DropCoins(5)
                    })

                }
                if(managers.Game.timer >= 481 && managers.Game.timer <= 576){
                    this.level1Enemies[2].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
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
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                        if(managers.Game.eEliteHp == 0 || (managers.Game.eEliteHp < 0 && Math.abs(managers.Game.eEliteHp) % 25 == 0))
                            e.DropCoins(5)
                    })
                }

                if(managers.Game.timer < 481){
                    this.level1Enemies[0].forEach(e =>{
                        e.y -= 10;
                    })
                    this.level1Enemies[1].forEach(e =>{
                        e.x += 10;
                    })
                    this.level1Enemies[2].forEach(e =>{
                        e.y += 10;
                    })
                }
                if(managers.Game.timer == 480){
                    createjs.Sound.stop();
                    this.bgm = createjs.Sound.play("bossMusic");
                    this.bgm.loop = -1;
                    this.bgm.volume = 0.05;
                }
                if(managers.Game.timer < 479){
                    this.eBoss1.isInvincible = false
                    this.addChild(this.eBoss1)
                    this.background.y += 0;
                    if(!this.eBoss1.isDead){
                        this.eBoss1.FindPlayer(this.player)
                        this.eBoss1.Update();
                        this.missileManager.Missile.forEach( m => {
                            m.FindEnemies(this.eBoss1)
                        })
                    }
                }
                if(managers.Game.boss1Hp == 0){
                    this.removeChild(this.eBoss1)
                    this.eBoss1.isInvincible = true;
                    this.eBoss1.isDead = true;
                    managers.Game.boss1IsDead = true;
                    managers.Game.hud.Lives + 1
                    this.eBoss1.DropCoins(50)
                    this.WaitTimer()
                }*/
            }
            /*
            if(managers.Game.level2){
                if(managers.Game.timer == 600){
                    createjs.Sound.stop();
                    this.bgm = createjs.Sound.play("bgm2");
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
                    
                    this.level2Enemies[2].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })
                }

                if(managers.Game.timer < 590){
                    this.level2Enemies[1].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })

                    this.eliteUnits[2].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                        if(managers.Game.eEliteHp == 0 || (managers.Game.eEliteHp < 0 && Math.abs(managers.Game.eEliteHp) % 25 == 0))
                            e.DropCoins(5)
                    })
                }
                if(managers.Game.timer < 585){
                    this.level2Enemies[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                    })
                }

                if(managers.Game.timer < 545){
                    this.eliteUnits[0].forEach(e =>{
                        if(!e.isDead){
                            e.isInvincible = false;
                            e.Update();
                            e.FindPlayer(this.player);
                            this.missileManager.Missile.forEach( m => {
                                m.FindEnemies(e)
                            })
                        }
                        if(managers.Game.eEliteHp == 0 || (managers.Game.eEliteHp < 0 && Math.abs(managers.Game.eEliteHp) % 25 == 0))
                            e.DropCoins(5)
                    })
                }
            }*/
            if(managers.Game.hud.Lives < 0){
                managers.Game.currentScene = config.Scene.OVER;
            }
            
        }

        public Main(): void {
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.aircraft)
            
            this.GameTimer()

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
            
            this.addChild(this.eBoss1)
            this.addChild(this.eBoss2)

            this.bulletManager.Bullet.forEach(bullet =>{
                this.addChild(bullet)
            })

            this.missileManager.Missile.forEach(m => {
                this.addChild(m)
            })
            
            this.addChild(this.player)
            this.addChild(this.shield)

            this.enemyBulletManager.Bullet.forEach(bullet =>{
                this.addChild(bullet)
            })
            //this.coinsManager.Coin.forEach(coin =>{
            //    this.addChild(coin)
            //})

            this.addChild(this.hudImage)
            this.addChild(this.hud)
            //this.addChild(this.testEnemyBullet)
            //this.addChild(this.testCoin)
        }

        public CheckCollisions():void{
            this.bulletManager.Bullet.forEach(bullet =>{
                if(bullet.y > 0){
                    this.level1Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > -5){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.player)
                            }
                        })
                    })
    
                    this.level2Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > -5){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.player)
                            }
                        })
                    })
    
                    this.level3Enemies.forEach(e =>{
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > -5){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.player)
                            }
                        })
                    })
                    
                    this.eliteUnits.forEach(e => {
                        e.forEach(f =>{
                            if(!f.isInvincible && f.y > -5){
                                managers.Collision.CheckAABB(bullet, f)
                                managers.Collision.CheckAABB(f, this.player)
                            }
                        })
                    })
    
                    if(!this.eBoss2.isInvincible && !managers.Game.boss2IsDead)
                        managers.Collision.CheckAABB(bullet, this.eBoss2)
    
                    //if(!this.eBoss1.isInvincible && !managers.Game.boss1IsDead)
                    //    managers.Collision.CheckAABB(bullet, this.eBoss1)
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


                if(!this.eBoss1.isInvincible && !managers.Game.boss1IsDead)
                    managers.Collision.CheckAABB(m, this.eBoss1)
            })

            this.coinsManager.Coin.forEach(c =>{
                managers.Collision.CheckAABB(this.player, c)
            })

            this.enemyBulletManager.Bullet.forEach(b =>{
                if(!this.player.IsInvincible && !this.player.isDead)
                    managers.Collision.CheckAABB(b, this.player)
                if(this.player.IsInvincible)
                    managers.Collision.CheckAABB(b, this.shield)
            })

            //managers.Collision.CheckAABB(this.testEnemyBullet, this.player)
        }
        
        public ChangeShip():void{
            let ticker:number = createjs.Ticker.getTicks();
    
                if(managers.Game.keyboardManager.swap && (ticker % 50 == 0)){
                    let playerPosX = this.player.x;
                    let playerPosY = this.player.y;
                    this.removeChild(this.player);
                    this.bulletManager.Bullet.forEach(ammo =>{
                        this.removeChild(ammo);
                    });
                    
                    switch(this.player.ShipType){
                        case config.Ship.Botcoin:
                            this.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Lightcoin;
                            console.log("Changing to Lightcoin Ship"); 
                            console.log(this.player.ShipType);
                                                    
                            this.bulletManager.buildBulletPool(this.player.ShipType, this.player.POWER);
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        break;       
                        case config.Ship.Lightcoin:
    
                            this.addChild(this.player = new objects.Player("Ship3", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Enderium;
                            console.log("Changing to Enderium Ship");
                            console.log(this.player.ShipType);
    
                            
                            this.bulletManager.buildBulletPool(this.player.ShipType, this.player.POWER);
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        break;
                        case config.Ship.Enderium:
    
                            this.addChild(this.player = new objects.Player("Ship1", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Botcoin;
                            console.log("Changing to Botcoin Ship");
                            console.log(this.player.ShipType); 
                            
                            this.bulletManager.buildBulletPool(this.player.ShipType, this.player.POWER);
                            this.bulletManager.Bullet.forEach(bullet =>{
                                this.addChild(bullet);
                            });
                        break;
                    }
                }
        }

        public GameTimer():void{
            let interval = setInterval(() =>{
                managers.Game.timer--;
                if(managers.Game.timer < 0){
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

        public WaitTimer():void{
            let counter = 5;

            let interval = setInterval(() =>{
                counter--;
                if(counter < 0){
                    clearInterval(interval);
                    managers.Game.level1Completed = true;
                    //managers.Game.currentScene = config.Scene.OVER;
                }
            }, 1000)
        }
    }
}