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
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy2":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy3":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        object1.Reset();
                        object2.Reset();
                        break;
                        case "Enemy4":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        object1.Reset();
                        object2.Reset();
                        break;
                        case "Enemy5":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        object1.Reset();
                        object2.Reset();
                        break;
                        case "Enemy6":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy7":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy8":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy9":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy10":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy11":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy12":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy13":
                        managers.Game.hud.Score += Math.round(50 * Math.pow(1.01, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        managers.Game.currentSceneObject.addChild(effect);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        break;
                        case "Enemy_Shot":
                            console.log("Player Hit");
                            managers.Game.currentSceneObject.removeChild(object2);
                            managers.Game.hud.Lives--;
                            managers.Game.hud.ScoreMult = 0;
                            object1.Reset();
                        break;
                    }
                }
        }
    }
}