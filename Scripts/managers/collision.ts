module managers {
    export class Collision {

        // Check collisions using AABB (Axis-aligned Bounding Box)
        public static CheckAABB(object1: objects.GameObject, object2: objects.GameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);
            let effect = new objects.Effect("Laser_Hit", object2.x - object2.halfW, object2.y - object2.halfH);
            effect.scaleX *= 2;
            effect.scaleY *= 2;

            // CHECK ALL BOUNDS
            if((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                (object1.y - object1.halfH) < (object2.y + object2.halfH))
                {
                    
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
                            managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                            managers.Game.hud.ScoreMult += 1;
                            managers.Game.currentSceneObject.addChild(effect);
                            object1.Reset();
                            object2.Reset();
                        break;
                        case "Enemy4":
                        case "Enemy8":
                        case "Enemy12":
                        case "Enemy13":
                        break;
                        case "Ship1":
                        case "Ship2":
                        case "Ship3":
                            console.log("Player Hit");
                            let death = createjs.Sound.play("playerDeath");
                            death.volume = 0.5;
                            managers.Game.currentSceneObject.removeChild(object1);
                            managers.Game.hud.Lives -= 1
                            managers.Game.hud.ScoreMult = 0;
                            object2.Reset();
                        break;
                    }
                }
        }
    }
}