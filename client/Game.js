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
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = 
            //super('100', '100', Phaser.AUTO, document.getElementById('game'), null);
            _super.call(this, '100', '100', Phaser.AUTO, document.getElementById('game'), null) || this;
            _this.state.add('Boot', Kodo.Boot, false);
            _this.state.add('Preloader', Kodo.Preloader, false);
            _this.state.add('MainMenu', Kodo.MainMenu, false);
            _this.state.add('GameScene', Kodo.GameScene, false);
            _this.state.start('Boot');
            return _this;
        }
        return Game;
    }(Phaser.Game));
    Kodo.Game = Game;
})(Kodo || (Kodo = {}));
