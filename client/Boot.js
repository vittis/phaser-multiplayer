var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kodo;
(function (Kodo) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            document.body.style.margin = '0px';
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            this.game.scale.setResizeCallback(function () { this.scale.setGameSize(window.innerWidth, window.innerHeight); }, this);
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    }(Phaser.State));
    Kodo.Boot = Boot;
})(Kodo || (Kodo = {}));
