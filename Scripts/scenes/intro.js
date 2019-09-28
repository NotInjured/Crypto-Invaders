var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var IntroScene = /** @class */ (function (_super) {
        __extends(IntroScene, _super);
        // Constructor
        function IntroScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        IntroScene.prototype.Start = function () {
            //this.background = new objects.Background(this.assetManager);
            this.logo = new objects.Background(this.assetManager);
            this.Main();
        };
        IntroScene.prototype.Update = function () {
        };
        IntroScene.prototype.Main = function () {
            //this.addChild(this.background);
            this.addChild(this.logo);
        };
        return IntroScene;
    }(objects.Scene));
    scenes.IntroScene = IntroScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map