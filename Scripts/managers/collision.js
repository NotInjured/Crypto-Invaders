var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // Check collisions using AABB (Axis-aligned Bounding Box)
        Collision.CheckAABB = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            // CHECK ALL BOUNDS
            if ((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                (object1.y - object1.halfH) < (object2.y + object2.halfH)) {
                switch (object2.name) {
                    case "Enemy":
                        managers.Game.hud.Score += Math.round(100 * Math.pow(1.1, managers.Game.hud.ScoreMult));
                        managers.Game.hud.ScoreMult += 1;
                        //let explosion = new objects.Explosion(object2.x - object2.halfW, object2.y - object2.halfH);
                        //managers.Game.currentSceneObject.addChild(explosion);
                        managers.Game.stage.removeChild(object2);
                        managers.Game.stage.removeChild(object1);
                        //managers.Game.currentSceneObject.removeChild(object1);
                        //managers.Game.currentSceneObject.removeChild(object2);
                        object1.Reset();
                        object2.Reset();
                        break;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map