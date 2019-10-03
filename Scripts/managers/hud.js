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
var managers;
(function (managers) {
    var HUD = /** @class */ (function (_super) {
        __extends(HUD, _super);
        // Constructor
        function HUD(assetManager) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            return _this;
        }
        // Methods
        HUD.prototype.Start = function () { };
        HUD.prototype.Update = function () { };
        HUD.prototype.Main = function () { };
        HUD.prototype.PlayerLives = function () {
            //this.playerLivesImage = new objects.Image(this.assetManager, "playerLives", 100, 100);
            //if(this.player.lives >= 0)
            //    this.playerLives = new objects.Label(
            //        "x" + this.player.lives, "30px", "OptimusPrinceps","#000000", 240, 240, false );
        };
        HUD.prototype.PlayerBombs = function () {
        };
        HUD.prototype.PlayerPower = function () {
        };
        HUD.prototype.PlayerScore = function () {
        };
        return HUD;
    }(createjs.Container));
    managers.HUD = HUD;
})(managers || (managers = {}));
//# sourceMappingURL=hud.js.map