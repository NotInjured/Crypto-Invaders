var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        // Constructor
        function Keyboard() {
            this.enabled = true;
            this.cooldown = 1000;
            this.counter = 0;
            // Listen for keyup and keydown events through DOM
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Methods
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Keys.UP_ARROW:
                    this.moveUp = true;
                    break;
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = true;
                    break;
                case config.Keys.DOWN_ARROW:
                    this.moveDown = true;
                    break;
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = true;
                    break;
                case config.Keys.X:
                    this.shoot = true;
                    break;
                case config.Keys.Z:
                    this.special = true;
                    break;
                case config.Keys.SPACE:
                    this.swap = true;
                    break;
                case config.Keys.ESC:
                    this.pause = true;
                    break;
                case config.Keys.SHIFT:
                    this.shift = true;
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                    break;
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                    break;
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                    break;
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                    break;
                case config.Keys.X:
                    this.shoot = false;
                    break;
                case config.Keys.Z:
                    this.special = false;
                    break;
                case config.Keys.SPACE:
                    this.swap = false;
                    break;
                case config.Keys.ESC:
                    this.pause = false;
                    break;
                case config.Keys.SHIFT:
                    this.shift = false;
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map