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
    var HelpScene = /** @class */ (function (_super) {
        __extends(HelpScene, _super);
        // Constructor
        function HelpScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        HelpScene.prototype.Start = function () { };
        HelpScene.prototype.Update = function () { };
        HelpScene.prototype.Main = function () { };
        return HelpScene;
    }(objects.Scene));
    scenes.HelpScene = HelpScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=help.js.map