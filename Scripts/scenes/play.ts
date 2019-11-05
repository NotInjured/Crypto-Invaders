module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private aircraft: objects.Image;

        private stageName: objects.Label;

        private player:objects.Player;
        private effect:objects.Effect;

        private hudImage: objects.Image;
        private hud:managers.HUD;

        //private eType2: objects.Enemy;
        private eType1: objects.Enemy[];
        private eType2: objects.Enemy[];
        private eType3: objects.Enemy[];

        private ammoManager:managers.Ammo;
        private enemyAmmoManager:managers.EnemyAmmo;

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
            this.bgm = createjs.Sound.play("bgm");
            this.bgm.loop = -1;
            this.bgm.volume = 0.05;

            this.stageName = new objects.Label("Stage 1: Invasion", "36px", "OptimusPrinceps", "#FFFFFF", 530, 240, true);

            this.player = new objects.Player("Ship1", 555, 690, false, 1);

            this.aircraft = new objects.Image("aircraft", 418, 450);
            
            this.ammoManager = new managers.Ammo();
            managers.Game.ammoManager = this.ammoManager;
            managers.Game.player = this.player;
            managers.Game.timer = 600;

            //this.eType2 = new objects.Enemy("Enemy2");
            this.eType1 = new Array<objects.Enemy>();
            this.eType2 = new Array<objects.Enemy>();
            this.eType3 = new Array<objects.Enemy>();
            //managers.Game.eType2 =this.eType2;

            console.log(managers.Game.difficulty)
            switch(managers.Game.difficulty){
                case 0:
                    for(let i = 0; i < 2; i++){
                        this.eType1[i] = new objects.Enemy("Enemy1");
                        this.eType2[i] = new objects.Enemy("Enemy2");
                        this.eType3[i] = new objects.Enemy("Enemy3");
                    }
                break;
                case 1:
                    for(let i = 0; i < 4; i++){
                        this.eType1[i] = new objects.Enemy("Enemy1");
                        this.eType2[i] = new objects.Enemy("Enemy2");
                        this.eType3[i] = new objects.Enemy("Enemy3");
                    }
                break;
                case 2:
                    for(let i = 0; i < 6; i++){
                        this.eType1[i] = new objects.Enemy("Enemy1");
                        this.eType2[i] = new objects.Enemy("Enemy2");
                        this.eType3[i] = new objects.Enemy("Enemy3");
                    }
                break;
            }

            this.hudImage = new objects.Image("HUD", 342, 0);  

            this.hud = new managers.HUD;
            managers.Game.hud = this.hud;
            if(managers.Game.normal){
                managers.Game.hud.Lives = 3;
                managers.Game.hud.Bombs = 1;
            }
            if(managers.Game.hard){
                managers.Game.hud.Lives = 2;
                managers.Game.hud.Bombs = 1;
            }
            if(managers.Game.hell){
                managers.Game.hud.Lives = 1;
                managers.Game.hud.Bombs = 1;
            }

            this.Main();
        }

        public Update(): void {
            managers.Game.highscore = this.hud.Score;
            this.aircraft.y += 3;
            if(this.aircraft.y > 720){
                this.removeChild(this.aircraft);
            }
            this.ammoManager.Update();
            console.log(managers.Game.timer);
                this.background.Update();
                this.player.Update();
                //this.ChangeShip();
                this.CheckCollisions()
            
                if(managers.Game.timer >= 598 && managers.Game.timer <= 600){
                    if(this.player.y > 550)
                    this.player.y -= 1;
                }
                if(managers.Game.timer >= 597 && managers.Game.timer <= 598){
                    if(this.player.y < 675)
                    this.player.y += 1;
                }
                if(managers.Game.timer <= 596){
                    this.addChild(this.stageName)
                }
                if(managers.Game.timer <= 591){
                    this.removeChild(this.stageName)
                    this.eType1.forEach(e =>{
                        if(!e.isDead){
                            e.Update();
                            e.FindPlayer(this.player);
                        }
                    })
                    
                    this.eType2.forEach(e =>{
                        if(!e.isDead){
                            e.Update();
                            e.FindPlayer(this.player);
                        }
                    })
                    this.eType3.forEach(e =>{
                        if(!e.isDead){
                            e.Update();
                            e.FindPlayer(this.player);
                        }
                    })
                }
        }

        public Main(): void {
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.SpawnTimer()
            
            this.eType1.forEach(e =>{
                this.addChild(e);
            })
            this.eType2.forEach(e =>{
                this.addChild(e);
            })
            this.eType3.forEach(e =>{
                this.addChild(e);
            })
            this.addChild(this.aircraft);
            this.addChild(this.player);

            this.ammoManager.Ammo.forEach(ammo =>{
                this.addChild(ammo);
            })

            this.addChild(this.hudImage);
            this.addChild(this.hud);
        }

        public CheckCollisions():void{
            this.ammoManager.Ammo.forEach(ammo =>{
                this.eType1.forEach(e =>{
                    managers.Collision.CheckAABB(ammo, e);
                })
                this.eType2.forEach(e =>{
                    managers.Collision.CheckAABB(ammo, e);
                })
                this.eType3.forEach(e =>{
                    managers.Collision.CheckAABB(ammo, e);
                })
            })
        }
        
        public ChangeShip():void{
            let ticker:number = createjs.Ticker.getTicks();
    
                if(managers.Game.keyboardManager.swap && (ticker % 50 == 0)){
                    let playerPosX = this.player.x;
                    let playerPosY = this.player.y;
                    this.removeChild(this.player);
                    this.ammoManager.Ammo.forEach(ammo =>{
                        this.removeChild(ammo);
                    });
                    
                    switch(this.player.ShipType){
                        case config.Ship.Botcoin:
                            this.addChild(this.player = new objects.Player("Ship2", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Lightcoin;
                            console.log("Changing to Lightcoin Ship"); 
                            console.log(this.player.ShipType);
                                                    
                            this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                            this.ammoManager.Ammo.forEach(ammo =>{
                                this.addChild(ammo);
                            });
                        break;       
                        case config.Ship.Lightcoin:
    
                            this.addChild(this.player = new objects.Player("Ship3", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Enderium;
                            console.log("Changing to Enderium Ship");
                            console.log(this.player.ShipType);
    
                            
                            this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                            this.ammoManager.Ammo.forEach(ammo =>{
                                this.addChild(ammo);
                            });
                        break;
                        case config.Ship.Enderium:
    
                            this.addChild(this.player = new objects.Player("Ship1", playerPosX, playerPosY, true, this.player.POWER));
                            this.player.ShipType = config.Ship.Botcoin;
                            console.log("Changing to Botcoin Ship");
                            console.log(this.player.ShipType); 
                            
                            this.ammoManager.buildAmmoPool(this.player.ShipType, this.player.POWER);
                            this.ammoManager.Ammo.forEach(ammo =>{
                                this.addChild(ammo);
                            });
                        break;
                    }
                }
        }

        public SpawnTimer():void{

            let interval = setInterval(() =>{
                managers.Game.timer--;
                if(managers.Game.timer < 0){
                    clearInterval(interval);
                }
            }, 1000)
            
        }
    }
}