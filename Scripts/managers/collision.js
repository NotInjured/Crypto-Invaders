var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // Check collisions using AABB (Axis-aligned Bounding Box)
        Collision.CheckAABB = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            var effect = new objects.Effect("Laser_Hit", object1.x + 10, object1.y - object1.halfH);
            var explosion = new objects.Effect("tile", object1.x + 10, object1.y - object1.halfH);
            effect.scaleX *= 2;
            effect.scaleY *= 2;
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
                case "Enemy5":
                case "Enemy6":
                case "Enemy7":
                case "Enemy9":
                case "Enemy10":
                case "Enemy11":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                        (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH)) {
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.highscore = managers.Game.hud.Score;
                        managers.Game.hud.ScoreMult += 1;
                        var hit1 = createjs.Sound.play("hit");
                        hit1.volume = 0.2;
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
                        managers.Game.currentSceneObject.addChild(effect);
                        object2.Reset();
                    }
                    break;
                case "Enemy4":
                case "Enemy8":
                case "Enemy12":
                case "Enemy13":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW) &&
                        (object1.y + object1.halfH) > ((object2.y - 5) - object2.halfH) &&
                        (object1.y - object1.halfH) < ((object2.y - 5) + object2.halfH)) {
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.boss1Hp -= 1;
                        var hit2 = createjs.Sound.play("hit");
                        hit2.volume = 0.2;
                        object1.Reset();
                        console.log(managers.Game.boss1Hp);
                        if (managers.Game.boss1Hp < 0) {
                            managers.Game.boss1IsDead = true;
                            managers.Game.currentSceneObject.addChild(explosion);
                            managers.Game.currentSceneObject.removeChild(object2);
                            managers.Game.hud.ScoreMult += 100;
                            managers.Game.hud.Score += Math.round(10000 * Math.pow(1.01, managers.Game.hud.ScoreMult));
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
                        console.log("Player Hit");
                        var death = createjs.Sound.play("playerDeath");
                        death.volume = 0.5;
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.hud.Lives -= 1;
                        managers.Game.hud.ScoreMult = 0;
                        object2.Reset();
                    }
                    break;
                case "B_coin":
                case "E_coin":
                case "L_coin":
                    if ((object1.x + object1.halfW) > ((object2.x - 10) - object2.halfW / 4) &&
                        (object1.x - object1.halfW) < ((object2.x - 10) + object2.halfW / 4) &&
                        (object1.y + object1.halfH) > ((object2.y - 10) - object2.halfH / 4) &&
                        (object1.y - object1.halfH) < ((object2.y - 10) + object2.halfH / 4)) {
                        managers.Game.hud.Score += Math.round(100 * Math.pow(1.01, managers.Game.hud.ScoreMult));
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