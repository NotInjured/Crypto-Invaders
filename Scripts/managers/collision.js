var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // Check collisions using AABB (Axis-aligned Bounding Box)
        Collision.CheckAABB = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            var effect;
            var explosion;
            var hit;
            var coin = managers.Game.coinsManager.GetCoin();
            // CHECK ALL BOUNDS
            //if((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
            //    (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
            //    (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
            //    (object1.y - object1.halfH) < (object2.y + object2.halfH))
            //    {
            switch (object2.name) {
                case "Enemy1":
                case "Enemy2":
                case "Enemy3":
                case "Enemy7":
                case "Enemy8":
                case "Enemy9":
                case "Enemy10":
                case "Enemy11":
                case "Enemy12":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                        (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH)) {
                        managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult;
                        managers.Game.hud.ScoreMult += 1;
                        hit = createjs.Sound.play("hit");
                        hit.volume = 0.2;
                        coin.IsDropped = true;
                        coin.EnemyDropped = true;
                        coin.x = object2.x;
                        coin.y = object2.y;
                        coin.scaleX = 0.25;
                        coin.scaleY = 0.25;
                        var rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                        if (rand == 5)
                            managers.Game.currentSceneObject.addChild(coin);
                        object1.Reset();
                        explosion = new objects.Effect("Explosion", object2.x + 15, object2.y + 10);
                        if (managers.Game.player.ShipType == config.Ship.Botcoin)
                            effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                        else if (managers.Game.player.ShipType == config.Ship.Lightcoin)
                            effect = new objects.Effect("Laser1_Hit", object1.x + 10, object1.y - object1.halfH);
                        effect.scaleX *= 2;
                        effect.scaleY *= 2;
                        explosion.scaleX = 0.4;
                        explosion.scaleY = 0.4;
                        managers.Game.currentSceneObject.addChild(explosion);
                        managers.Game.currentSceneObject.addChild(effect);
                        object2.Reset();
                    }
                    break;
                case "Enemy4":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                        (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)) {
                        managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult;
                        effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                        effect.scaleX *= 2;
                        effect.scaleY *= 2;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.boss1Hp -= 1;
                        hit = createjs.Sound.play("hit");
                        hit.volume = 0.2;
                        object1.Reset();
                        if (managers.Game.boss1Hp == 0 || (managers.Game.boss1Hp < 0 && Math.abs(managers.Game.boss1Hp) % 200 == 0)) {
                            explosion = new objects.Effect("Explosion", object2.x + 65, object2.y + 65);
                            managers.Game.currentSceneObject.addChild(explosion);
                            object2.Reset();
                            if (managers.Game.hud.Lives < 9) {
                                managers.Game.hud.Lives += 1;
                                managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives - 1].alpha = 1;
                            }
                            managers.Game.numOfMissiles += 1;
                            managers.Game.hud.ScoreMult += 100;
                            managers.Game.hud.Score += 2500000;
                            var counter_1 = 5;
                            var interval_1 = setInterval(function () {
                                counter_1--;
                                if (counter_1 < 0) {
                                    clearInterval(interval_1);
                                    managers.Game.level1Completed = true;
                                }
                            }, 1000);
                        }
                    }
                    break;
                case "Enemy5":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                        (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)) {
                        managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult;
                        effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                        effect.scaleX *= 2;
                        effect.scaleY *= 2;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.eEliteHp -= 1;
                        hit = createjs.Sound.play("hit");
                        hit.volume = 0.2;
                        object1.Reset();
                        console.log(managers.Game.eEliteHp);
                        if (managers.Game.eEliteHp == 0 || (managers.Game.eEliteHp < 0 && Math.abs(managers.Game.eEliteHp) % 25 == 0)) {
                            var coin_1 = managers.Game.coinsManager.GetCoin();
                            coin_1.IsDropped = true;
                            coin_1.EnemyDropped = true;
                            coin_1.x = object2.x;
                            coin_1.y = object2.y;
                            coin_1.scaleX = 0.75;
                            coin_1.scaleY = 0.75;
                            managers.Game.currentSceneObject.addChild(coin_1);
                            explosion = new objects.Effect("Explosion", object2.x + 65, object2.y + 65);
                            managers.Game.currentSceneObject.addChild(explosion);
                            object2.Reset();
                            managers.Game.currentSceneObject.removeChild(object2);
                            managers.Game.hud.ScoreMult += 10;
                            managers.Game.hud.Score += 25000 * managers.Game.hud.ScoreMult;
                        }
                    }
                    break;
                case "Enemy6":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                        (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)) {
                        managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult;
                        effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                        effect.scaleX *= 2;
                        effect.scaleY *= 2;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.eMinionHp--;
                        console.log(managers.Game.eMinionHp);
                        hit = createjs.Sound.play("hit");
                        hit.volume = 0.2;
                        object1.Reset();
                        if (managers.Game.eMinionHp == 0 || (managers.Game.eMinionHp < 0 && Math.abs(managers.Game.eMinionHp) % 10 == 0)) {
                            explosion = new objects.Effect("Explosion", object2.x + 65, object2.y + 65);
                            managers.Game.currentSceneObject.addChild(explosion);
                            object2.Reset();
                            managers.Game.currentSceneObject.removeChild(object2);
                            managers.Game.hud.ScoreMult += 5;
                            managers.Game.hud.Score += Math.round(1250 * Math.pow(1.05, managers.Game.hud.ScoreMult));
                        }
                    }
                    break;
                case "Destroyer":
                    if ((object1.x + object1.halfW) > ((object2.x + 65) - object2.halfW / 4) &&
                        (object1.x - object1.halfW) < ((object2.x + 65) + object2.halfW / 4) &&
                        (object1.y + object1.halfH) > ((object2.y - 130) - object2.halfH / 4) &&
                        (object1.y - object1.halfH) < ((object2.y - 130) + object2.halfH / 4) ||
                        (object1.x + object1.halfW) > ((object2.x + 65) - object2.halfW / 7) &&
                            (object1.x - object1.halfW) < ((object2.x + 65) + object2.halfW / 7) &&
                            (object1.y + object1.halfH) > ((object2.y - 50) - object2.halfH / 4) &&
                            (object1.y - object1.halfH) < ((object2.y - 50) + object2.halfH / 4)) {
                        effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                        effect.scaleX *= 2;
                        effect.scaleY *= 2;
                        managers.Game.boss2Hp--;
                        managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult;
                        managers.Game.currentSceneObject.addChild(effect);
                        hit = createjs.Sound.play("hit");
                        hit.volume = 0.2;
                        object1.Reset();
                        console.log(managers.Game.boss2Hp);
                        if (managers.Game.boss2Hp == 0 || (managers.Game.boss2Hp < 0 && Math.abs(managers.Game.boss2Hp) % 300 == 0)) {
                            var coin_2 = managers.Game.coinsManager.GetCoin();
                            coin_2.IsDropped = true;
                            coin_2.EnemyDropped = true;
                            coin_2.x = object2.x;
                            coin_2.y = object2.y;
                            coin_2.scaleX = 0.75;
                            coin_2.scaleY = 0.75;
                            managers.Game.currentSceneObject.addChild(coin_2);
                            explosion = new objects.Effect("Explosion", object2.x + 225, object2.y + 75);
                            explosion.scaleX = 2;
                            explosion.scaleY = 2;
                            managers.Game.currentSceneObject.addChild(explosion);
                            object2.Reset();
                            managers.Game.hud.Lives++;
                            managers.Game.numOfMissiles += 1;
                            managers.Game.hud.ScoreMult += 100;
                            managers.Game.hud.Score += 5000000;
                            var counter2_1 = 5;
                            var interval_2 = setInterval(function () {
                                counter2_1--;
                                if (counter2_1 < 0) {
                                    clearInterval(interval_2);
                                    managers.Game.level2Completed = true;
                                    console.log(managers.Game.level2Completed);
                                }
                            }, 1000);
                        }
                    }
                    break;
                case "F5S2":
                    if ((object1.x + object1.halfW) > ((object2.x - 25) - object2.halfW) &&
                        (object1.x - object1.halfW) < ((object2.x - 25) + object2.halfW) &&
                        (object1.y + object1.halfH) > ((object2.y - 50) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 50) + object2.halfH)) {
                        managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult;
                        effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                        effect.scaleX *= 2;
                        effect.scaleY *= 2;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.boss3_1Hp -= 1;
                        console.log(managers.Game.boss3_1Hp);
                        hit = createjs.Sound.play("hit");
                        hit.volume = 0.2;
                        object1.Reset();
                        if (managers.Game.boss3_1Hp == 0 || (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)) {
                            explosion = new objects.Effect("Explosion", object2.x + 65, object2.y + 65);
                            var coin_3 = managers.Game.coinsManager.GetCoin();
                            coin_3.IsDropped = true;
                            coin_3.EnemyDropped = true;
                            coin_3.x = object2.x;
                            coin_3.y = object2.y;
                            coin_3.scaleX = 0.75;
                            coin_3.scaleY = 0.75;
                            managers.Game.currentSceneObject.addChild(coin_3);
                            managers.Game.currentSceneObject.addChild(explosion);
                            managers.Game.currentSceneObject.removeChild(object2);
                            object2.Reset();
                            if (managers.Game.hud.Lives < 9) {
                                managers.Game.hud.Lives += 1;
                                managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives - 1].alpha = 1;
                            }
                            managers.Game.numOfMissiles += 1;
                            managers.Game.hud.ScoreMult += 100;
                            managers.Game.hud.Score += 10000000;
                        }
                        if ((managers.Game.boss3_1Hp == 0 ||
                            (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 5 == 0)) &&
                            (managers.Game.boss3_2Hp == 0 ||
                                (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 5 == 0))) {
                            var counter_2 = 5;
                            var interval_3 = setInterval(function () {
                                counter_2--;
                                if (counter_2 < 0) {
                                    clearInterval(interval_3);
                                    managers.Game.level3Completed = true;
                                }
                            }, 1000);
                        }
                    }
                    break;
                case "F5S4":
                    if ((object1.x + object1.halfW) > ((object2.x - 25) - object2.halfW / 2) &&
                        (object1.x - object1.halfW) < ((object2.x - 25) + object2.halfW / 2) &&
                        (object1.y + object1.halfH) > ((object2.y - 50) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 50) + object2.halfH) ||
                        (object1.x + object1.halfW) > ((object2.x - 27) - object2.halfW) &&
                            (object1.x - object1.halfW) < ((object2.x - 27) + object2.halfW) &&
                            (object1.y + object1.halfH) > ((object2.y - 100) - object2.halfH) &&
                            (object1.y - object1.halfH) < ((object2.y - 100) + object2.halfH)) {
                        managers.Game.hud.Score += 50 * managers.Game.hud.ScoreMult;
                        effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
                        effect.scaleX *= 2;
                        effect.scaleY *= 2;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.boss3_2Hp -= 1;
                        console.log(managers.Game.boss3_2Hp);
                        hit = createjs.Sound.play("hit");
                        hit.volume = 0.2;
                        object1.Reset();
                        if (managers.Game.boss3_2Hp == 0 || (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0)) {
                            explosion = new objects.Effect("Explosion", object2.x + 65, object2.y + 65);
                            var coin_4 = managers.Game.coinsManager.GetCoin();
                            coin_4.IsDropped = true;
                            coin_4.EnemyDropped = true;
                            coin_4.x = object2.x;
                            coin_4.y = object2.y;
                            coin_4.scaleX = 0.75;
                            coin_4.scaleY = 0.75;
                            managers.Game.currentSceneObject.addChild(coin_4);
                            managers.Game.currentSceneObject.addChild(explosion);
                            managers.Game.currentSceneObject.removeChild(object2);
                            object2.Reset();
                            if (managers.Game.hud.Lives < 9) {
                                managers.Game.hud.Lives += 1;
                                managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives - 1].alpha = 1;
                            }
                            managers.Game.numOfMissiles += 1;
                            managers.Game.hud.ScoreMult += 100;
                            managers.Game.hud.Score += 10000000;
                        }
                        if ((managers.Game.boss3_1Hp == 0 ||
                            (managers.Game.boss3_1Hp < 0 && Math.abs(managers.Game.boss3_1Hp) % 250 == 0)) &&
                            (managers.Game.boss3_2Hp == 0 ||
                                (managers.Game.boss3_2Hp < 0 && Math.abs(managers.Game.boss3_2Hp) % 250 == 0))) {
                            var counter_3 = 5;
                            var interval_4 = setInterval(function () {
                                counter_3--;
                                if (counter_3 < 0) {
                                    clearInterval(interval_4);
                                    managers.Game.level3Completed = true;
                                }
                            }, 1000);
                        }
                    }
                    break;
                case "Ship1":
                case "Ship2":
                case "Ship3":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW / 4) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW / 4) &&
                        (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH / 4) &&
                        (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH / 4)) {
                        if (!managers.Game.player.IsInvincible && !managers.Game.player.isDead) {
                            explosion = new objects.Effect("Explosion", object2.x, object2.y);
                            console.log("Player Hit");
                            var death = createjs.Sound.play("playerDeath");
                            death.volume = 0.3;
                            explosion.x = object2.x + 20;
                            explosion.y = object2.y + 20;
                            explosion.scaleY = 0.5;
                            explosion.scaleX = 0.5;
                            managers.Game.currentSceneObject.addChild(explosion);
                            managers.Game.numOfMissiles -= 1;
                            managers.Game.hud.Lives -= 1;
                            managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives].alpha = 0.5;
                            console.log(managers.Game.hud.playerLivesSprite[managers.Game.hud.Lives]);
                            console.log(managers.Game.hud.Lives);
                            managers.Game.hud.ScoreMult = 1;
                            managers.Game.hud.Score = Math.floor(managers.Game.hud.Score / 2);
                            object1.Reset();
                            object2.Reset();
                        }
                    }
                    break;
                case "Shield":
                    if ((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                        (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                        (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                        (object1.y - object1.halfH) < (object2.y + object2.halfH)) {
                        if (object2.alpha > 0)
                            object1.Reset();
                    }
                    break;
                case "B_coin":
                case "E_coin":
                case "L_coin":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW / 4) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW / 4) &&
                        (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH / 4) &&
                        (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH / 4)) {
                        if (object2.scaleX == 0.75 && object2.scaleY == 0.75) {
                            var buff = new objects.Effect("Buff", object1.x + 2, object1.y - 40);
                            buff.scaleX = 0.5;
                            buff.scaleY = 0.7;
                            managers.Game.currentSceneObject.addChild(buff);
                            managers.Game.numOfMissiles += 1;
                            managers.Game.hud.Score += 5000 * managers.Game.hud.ScoreMult;
                            managers.Game.currentSceneObject.removeChild(object2);
                        }
                        managers.Game.hud.Score += 100 * managers.Game.hud.ScoreMult;
                        object2.Reset();
                    }
                    break;
            }
            //}
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map