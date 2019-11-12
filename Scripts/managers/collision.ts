module managers {
    export class Collision {

        // Check collisions using AABB (Axis-aligned Bounding Box)
        public static CheckAABB(object1: objects.GameObject, object2: objects.GameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y)
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y)
            let effect:objects.Effect
            let explosion:objects.Effect

            let coin = managers.Game.coinsManager.GetCoin()

            // CHECK ALL BOUNDS
            //if((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
            //    (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
            //    (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
            //    (object1.y - object1.halfH) < (object2.y + object2.halfH))
            //    {
                    
                    switch(object2.name) {
                        case "Enemy1":
                        case "Enemy2":
                        case "Enemy3":
                        case "Enemy5":
                        case "Enemy6":
                        case "Enemy7":
                        case "Enemy9":
                        case "Enemy10":
                        case "Enemy11":
                            if((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH)){
                                    managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                                    managers.Game.highscore = managers.Game.hud.Score
                                    managers.Game.hud.ScoreMult += 1;
                                    let hit1 = createjs.Sound.play("hit");
                                    hit1.volume = 0.2;
                                    coin.IsDropped = true;
                                    coin.EnemyDropped = true;
                                    coin.x = object2.x
                                    coin.y = object2.y
                                    coin.scaleX = 0.25
                                    coin.scaleY = 0.25
                                    let rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                                    if(rand == 5)
                                        managers.Game.currentSceneObject.addChild(coin)

                                    object1.Reset()
                                    explosion = new objects.Effect("tile", object2.x+15, object2.y +10);
                                    if(managers.Game.player.ShipType == config.Ship.Botcoin)
                                        effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                    else if(managers.Game.player.ShipType == config.Ship.Lightcoin)
                                        effect = new objects.Effect("Laser1_Hit", object1.x + 10, object1.y - object1.halfH);

                                    effect.scaleX *= 2;
                                    effect.scaleY *= 2;
                                    explosion.scaleX = 0.4
                                    explosion.scaleY = 0.4

                                    managers.Game.currentSceneObject.addChild(explosion)
                                    managers.Game.currentSceneObject.addChild(effect);
                                    object2.Reset();
                                }
                        break;
                        case "Enemy4":
                        case "Enemy8":
                        case "Enemy12":
                        case "Enemy13":
                            if((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)){
                                    managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                                    effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                    effect.scaleX *= 2;
                                    effect.scaleY *= 2;
                                    
                                    managers.Game.currentSceneObject.addChild(effect);
                                    managers.Game.boss1Hp -= 1;
                                    let hit2 = createjs.Sound.play("hit");
                                    hit2.volume = 0.2;
                                    object1.Reset()
                                    console.log(managers.Game.boss1Hp)
                                    if(managers.Game.boss1Hp < 0){
                                        managers.Game.boss1IsDead = true;
                                        explosion = new objects.Effect("tile", object2.x + 65, object2.y +65);
                                        managers.Game.currentSceneObject.addChild(explosion)
                                        managers.Game.currentSceneObject.removeChild(object2)
                                        managers.Game.hud.ScoreMult += 100;
                                        managers.Game.hud.Score += Math.round(10000 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                                    }
                                }
                        break;
                        case "Ship1":
                        case "Ship2":
                        case "Ship3":
                            if(
                                (object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW/4) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW/4) &&
                                (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH/4) &&
                                (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH/4)
                                ){
                                if(!managers.Game.player.IsInvincible && !managers.Game.player.isDead){
                                    explosion = new objects.Effect("tile", object2.x, object2.y);
                                    console.log("Player Hit");
                                    let death = createjs.Sound.play("playerDeath");
                                    death.volume = 0.3;
                                    explosion.x = object2.x + 20
                                    explosion.y = object2.y + 20
                                    explosion.scaleY = 0.5
                                    explosion.scaleX = 0.5
                                    managers.Game.currentSceneObject.addChild(explosion)
                                    managers.Game.hud.Lives -= 1
                                    managers.Game.hud.ScoreMult = 0;
                                    object1.Reset()
                                    object2.Reset();
                                }
                            }
                        break;
                        case "Shield":
                            if(
                                (object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                                (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                                (object1.y - object1.halfH) < (object2.y + object2.halfH)
                                ){
                                if(object2.alpha == 1)
                                    object1.Reset()
                            }
                        break;
                        case "B_coin":
                        case "E_coin":
                        case "L_coin":
                            if(
                                (object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW/4) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW/4) &&
                                (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH/4) &&
                                (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH/4)
                                ){
                                    managers.Game.hud.Score += Math.round(100 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                                    object2.Reset()
                                }
                        break;
                    }
                //}
        }
    }
}