module managers {
    export class Collision {
        public static Check(object1: objects.GameObject, object2: objects.GameObject) {
            // Create 2 temp Vec2 objects used for collision detection
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if(math.Vec2.Distance(P1, P2) < (object1.halfH + object2.halfH)) {
                if(!object2.isColliding) {
                    // React to our collision
                    console.log("Collision with " + object2.name);
                    object2.isColliding = true;
                }
            } 
            else
            {
                object2.isColliding = false;
            }
        }
    }
}