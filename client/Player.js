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
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y, id, name) {
            var _this = _super.call(this, game, x, y, 'player_corpo', 0) || this;
            _this.id = id;
            _this.name = "unknown";
            _this.maoSpeed = 1;
            _this.name = name;
            _this.game.physics.arcade.enable(_this);
            _this.anchor.setTo(0.5, 0.5);
            _this.setText();
            var mao = _this.game.add.sprite(_this.x, _this.y, 'player_mao');
            var mao2 = _this.game.add.sprite(_this.x, _this.y, 'player_mao');
            mao.anchor.setTo(0.5, 0.5);
            mao2.anchor.setTo(0.5, 0.5);
            _this.addChild(mao);
            mao.x = 19;
            mao.y = -40;
            _this.addChild(mao2);
            mao2.x = 19;
            mao2.y = 40;
            _this.mao = mao;
            _this.mao2 = mao2;
            game.add.existing(_this);
            return _this;
        }
        Player.prototype.move = function (x, y) {
            this.x = x;
            this.y = y;
        };
        Player.prototype.rotate = function (r) {
            this.rotation = r;
        };
        Player.prototype.update = function () {
            //GameScene._instance.playerMap[this.id].rotation = this.game.physics.arcade.angleToPointer(this);
            this.nameText.position.set(this.x, this.y - this.height / 2 - 35);
            this.mao2.y += this.maoSpeed * 0.15;
            this.mao.y -= this.maoSpeed * 0.15;
            if (this.mao2.y <= 40)
                this.maoSpeed *= -1;
            if (this.mao2.y >= 44)
                this.maoSpeed *= -1;
        };
        Player.prototype.setText = function () {
            var style = { font: "Baloo Paaji", fill: "white", wordWrap: true, /*wordWrapWidth: this.width,*/ align: "center" };
            this.nameText = this.game.add.text(0, 0, this.name, style);
            this.nameText.anchor.setTo(0.5, 0.5);
            this.nameText.fontSize = 20;
        };
        return Player;
    }(Phaser.Sprite));
    Kodo.Player = Player;
})(Kodo || (Kodo = {}));
