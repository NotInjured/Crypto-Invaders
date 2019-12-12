module managers {
    export class Collision {

        // Check collisions using AABB (Axis-aligned Bounding Box)
        public static CheckAABB(object1: objects.GameObject, object2: objects.GameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y)
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y)
            let effect:objects.Effect
            let explosion:objects.Effect
            let hit

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
                        case "Enemy7":
                        case "Enemy8":
                        case "Enemy9":
                        case "Enemy10":
                        case "Enemy11":
                        case "Enemy12":
                            if((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH)){
                                    managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult
                                    managers.Game.hud.ScoreMult += 1;
                                    hit = createjs.Sound.play("hit");
                                    hit.volume = 0.2;
                                    coin.IsDropped = true;
                                    coin.EnemyDropped = true;
                                    coin.x = object2.x
                                    coin.y = object2.y
                                    coin.scaleX = 0.25
                                    coin.scaleY = 0.25
                                    managers.Game.currentSceneObject.addChild(coin)
                                    object1.Reset()
                                    explosion = new objects.Effect("Explosion", object2.x+15, object2.y +10);
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
                            if((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)){
                                    managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult
                                    effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                    effect.scaleX *= 2;
                                    effect.scaleY *= 2;
                                    
                                    managers.Game.currentSceneObject.addChild(effect);
                                    managers.Game.boss1Hp -= 1;
                                    hit = createjs.Sound.play("hit");
                                    hit.volume = 0.2;
                                    object1.Reset()
                                    if(managers.Game.boss1Hp == 0 || (managers.Game.boss1Hp < 0 && Math.abs(managers.Game.boss1Hp) % 200 == 0)){
                                        explosion = new objects.Effect("Explosion", object2.x + 65, object2.y +65);
                                        managers.Game.currentSceneObject.addChild(explosion)
                                        object2.Reset()
                                        if(managers.Game.hud.Lives < 9){
                                            managers.Game.hud.Lives += 1
                                            managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives-1].alpha = 1
                                        }
                                        let coin = managers.Game.coinsManager.GetCoin()
                                        coin.IsDropped = true;
                                        coin.EnemyDropped = true
                                        coin.x = object2.x
                                        coin.y = object2.y
                                        coin.scaleX = 0.75
                                        coin.scaleY = 0.75
                                        managers.Game.currentSceneObject.addChild(coin)

                                        if(managers.Game.hud.Power < 201)
                                            managers.Game.hud.Power += 25
                                        managers.Game.hud.ScoreMult += 100;
                                        managers.Game.hud.Score += 2500000
                                    }
                                }
                        break;
                        case "Enemy5":
                            if((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)){
                                    managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult
                                    effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                    effect.scaleX *= 2;
                                    effect.scaleY *= 2;
                                    
                                    managers.Game.currentSceneObject.addChild(effect);
                                    managers.Game.eEliteHp -= 1;
                                    hit = createjs.Sound.play("hit");
                                    hit.volume = 0.2;
                                    object1.Reset()
                                    console.log(managers.Game.eEliteHp)
                                    if(managers.Game.eEliteHp == 0 || (managers.Game.eEliteHp < 0 && Math.abs(managers.Game.eEliteHp) % 25 == 0)){
                                        let coin = managers.Game.coinsManager.GetCoin()
                                        coin.IsDropped = true;
                                        coin.EnemyDropped = true
                                        coin.x = object2.x
                                        coin.y = object2.y
                                        coin.scaleX = 0.75
                                        coin.scaleY = 0.75
                                        managers.Game.currentSceneObject.addChild(coin)
                                        explosion = new objects.Effect("Explosion", object2.x + 65, object2.y +65);
                                        managers.Game.currentSceneObject.addChild(explosion)
                                        object2.Reset()
                                        managers.Game.currentSceneObject.removeChild(object2)
                                        managers.Game.hud.ScoreMult += 10;
                                        managers.Game.hud.Score += 25000 * managers.Game.hud.ScoreMult
                                    }
                                }
                        break;
                        case "Enemy6":
                            if((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)){
                                    managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult
                                    effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                    effect.scaleX *= 2;
                                    effect.scaleY *= 2;
                                    
                                    managers.Game.currentSceneObject.addChild(effect);
                                    managers.Game.eMinionHp--
                                    console.log(managers.Game.eMinionHp)
                                    hit = createjs.Sound.play("hit");
                                    hit.volume = 0.2;
                                    object1.Reset()
                                    if(managers.Game.eMinionHp == 0 || (managers.Game.eMinionHp < 0 && Math.abs(managers.Game.eMinionHp) % 10 == 0)){
                                        explosion = new objects.Effect("Explosion", object2.x + 65, object2.y +65);
                                        managers.Game.currentSceneObject.addChild(explosion)
                                        let coin = managers.Game.coinsManager.GetCoin()
                                        coin.IsDropped = true;
                                        coin.EnemyDropped = true
                                        coin.x = object2.x
                                        coin.y = object2.y
                                        coin.scaleX = 0.75
                                        coin.scaleY = 0.75
                                        managers.Game.currentSceneObject.addChild(coin)
                                        object2.Reset()
                                        managers.Game.currentSceneObject.removeChild(object2)
                                        managers.Game.hud.ScoreMult += 5;
                                        managers.Game.hud.Score += Math.round(1250 * Math.pow(1.05, managers.Game.hud.ScoreMult));
                                    }
                                }

                        break;
                        case "Destroyer":
                            if((object1.x + object1.halfW) > ((object2.x + 65) - object2.halfW/4) &&
                                (object1.x - object1.halfW) < ((object2.x + 65) + object2.halfW/4) &&
                                (object1.y + object1.halfH) > ((object2.y - 130) - object2.halfH/4) &&
                                (object1.y - object1.halfH) < ((object2.y - 130) + object2.halfH/4) ||
                                (object1.x + object1.halfW) > ((object2.x + 65) - object2.halfW/7) &&
                                (object1.x - object1.halfW) < ((object2.x + 65) + object2.halfW/7) &&
                                (object1.y + object1.halfH) > ((object2.y - 50) - object2.halfH/4) &&
                                (object1.y - object1.halfH) < ((object2.y - 50) + object2.halfH/4)){
                                effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                effect.scaleX *= 2;
                                effect.scaleY *= 2;
                                
                                managers.Game.boss2Hp--
                                managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult
                                managers.Game.currentSceneObject.addChild(effect);

                                hit = createjs.Sound.play("hit");
                                hit.volume = 0.2;

                                object1.Reset()
                                console.log(managers.Game.boss2Hp)
                                if(managers.Game.boss2Hp == 0 || (managers.Game.boss2Hp < 0 && Math.abs(managers.Game.boss2Hp) % 300 == 0)){
                                    let coin = managers.Game.coinsManager.GetCoin()
                                        coin.IsDropped = true;
                                        coin.EnemyDropped = true
                                        coin.x = object2.x
                                        coin.y = object2.y
                                        coin.scaleX = 0.75
                                        coin.scaleY = 0.75
                                        managers.Game.currentSceneObject.addChild(coin)

                                    explosion = new objects.Effect("Explosion", object2.x +225, object2.y + 75);
                                    explosion.scaleX = 2
                                    explosion.scaleY = 2
                                    managers.Game.currentSceneObject.addChild(explosion)
                                    object2.Reset()
                                    managers.Game.hud.Lives++
                                    if(managers.Game.hud.Power < 201)
                                        managers.Game.hud.Power += 25
                                    managers.Game.hud.ScoreMult += 100;
                                    managers.Game.hud.Score += 5000000
                                }
                            }
                        break;
                        case "F5S2":
                            if((object1.x + object1.halfW) > ((object2.x - 25) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 25) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 50) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 50) + object2.halfH )){
                                    managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult
                                    effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                    effect.scaleX *= 2;
                                    effect.scaleY *= 2;
                                    
                                    managers.Game.currentSceneObject.addChild(effect);
                                    managers.Game.boss3_1Hp -= 1;
                                    console.log(managers.Game.boss3_1Hp)
                                    hit = createjs.Sound.play("hit");
                                    hit.volume = 0.2;
                                    object1.Reset()

                                    if(managers.Game.boss3_1Hp == 0 || (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)){
                                        explosion = new objects.Effect("Explosion", object2.x + 65, object2.y +65);
                                        let coin = managers.Game.coinsManager.GetCoin()
                                        coin.IsDropped = true;
                                        coin.EnemyDropped = true
                                        coin.x = object2.x
                                        coin.y = object2.y
                                        coin.scaleX = 0.75
                                        coin.scaleY = 0.75
                                        managers.Game.currentSceneObject.addChild(coin)

                                        managers.Game.currentSceneObject.addChild(explosion)
                                        managers.Game.currentSceneObject.removeChild(object2)
                                        object2.Reset()
                                        if(managers.Game.hud.Lives < 9){
                                            managers.Game.hud.Lives += 1
                                            managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives-1].alpha = 1
                                        }
                                        if(managers.Game.hud.Power < 201)
                                            managers.Game.hud.Power += 25
                                        managers.Game.hud.ScoreMult += 100;
                                        managers.Game.hud.Score += 10000000
                                    }

                                    
                                }
                        break;
                        case "F5S4":
                            if((object1.x + object1.halfW) > ((object2.x - 25) - object2.halfW/2) &&
                                (object1.x - object1.halfW) < ((object2.x - 25) + object2.halfW/2) &&
                                (object1.y + object1.halfH) > ((object2.y - 50) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 50) + object2.halfH) ||
                                (object1.x + object1.halfW) > ((object2.x - 27) - object2.halfW) &&
                                (object1.x - object1.halfW) < ((object2.x - 27) + object2.halfW) &&
                                (object1.y + object1.halfH) > ((object2.y - 100) - object2.halfH) &&
                                (object1.y - object1.halfH) < ((object2.y - 100) + object2.halfH)){
                                    managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult
                                    effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                                    effect.scaleX *= 2;
                                    effect.scaleY *= 2;
                                    
                                    managers.Game.currentSceneObject.addChild(effect);
                                    managers.Game.boss3_2Hp -= 1;
                                    console.log(managers.Game.boss3_2Hp)
                                    hit = createjs.Sound.play("hit");
                                    hit.volume = 0.2;
                                    object1.Reset()

                                    if(managers.Game.boss3_2Hp == 0 || (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0)){
                                        explosion = new objects.Effect("Explosion", object2.x + 65, object2.y +65);
                                        let coin = managers.Game.coinsManager.GetCoin()
                                        coin.IsDropped = true;
                                        coin.EnemyDropped = true
                                        coin.x = object2.x
                                        coin.y = object2.y
                                        coin.scaleX = 0.75
                                        coin.scaleY = 0.75
                                        managers.Game.currentSceneObject.addChild(coin)

                                        managers.Game.currentSceneObject.addChild(explosion)
                                        managers.Game.currentSceneObject.removeChild(object2)
                                        object2.Reset()
                                        if(managers.Game.hud.Lives < 9){
                                            managers.Game.hud.Lives += 1
                                            managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives-1].alpha = 1
                                        }
                                        if(managers.Game.hud.Power < 201)
                                            managers.Game.hud.Power += 25

                                        managers.Game.hud.ScoreMult += 100;
                                        managers.Game.hud.Score += 10000000
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
                                    explosion = new objects.Effect("Explosion", object2.x, object2.y);
                                    console.log("Player Hit");
                                    let death = createjs.Sound.play("playerDeath");
                                    death.volume = 0.3;
                                    explosion.x = object2.x + 20
                                    explosion.y = object2.y + 20
                                    explosion.scaleY = 0.5
                                    explosion.scaleX = 0.5
                                    managers.Game.currentSceneObject.addChild(explosion)
                                    managers.Game.hud.Lives -= 1
                                    managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives].alpha = 0.5
                                    managers.Game.hud.ScoreMult = 1
                                    managers.Game.hud.Score = Math.floor(managers.Game.hud.Score/2)
                                    managers.Game.hud.Power = Math.floor(managers.Game.hud.Power/2)
                                    object1.Reset()
                                    object2.Reset()
                                
                            }
                        break;
                        case "Shield":
                            if(
                                (object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                                (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                                (object1.y - object1.halfH) < (object2.y + object2.halfH)
                                ){
                                if(object2.alpha > 0)
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
                                    if(object2.scaleX == 0.75 && object2.scaleY == 0.75){
                                        let buff = new objects.Effect("Buff", object1.x + 2, object1.y - 40)
                                        buff.scaleX = 0.5
                                        buff.scaleY = 0.7

                                        managers.Game.currentSceneObject.addChild(buff)
                                        managers.Game.hud.Score += 25000
                                        if(managers.Game.hud.Power < 201)
                                            managers.Game.hud.Power += 25
                                        managers.Game.currentSceneObject.removeChild(object2)
                                    }
                                    managers.Game.hud.Score += 100 * managers.Game.hud.ScoreMult
                                    if(managers.Game.hud.Power < 201)
                                        managers.Game.hud.Power += 1
                                    object2.Reset()
                                }
                        break;
                    }
                //}
        }
    }
}