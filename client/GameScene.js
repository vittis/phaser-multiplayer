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
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.player = null;
            _this.playerMap = {};
            return _this;
        }
        Object.defineProperty(GameScene, "Instance", {
            get: function () {
                return this._instance || (this._instance = new this());
            },
            enumerable: true,
            configurable: true
        });
        GameScene.prototype.create = function () {
            GameScene._instance = this;
            this.game.stage.backgroundColor = 'rgb(19,58,43)';
            this.music = this.add.audio('music', 1, false);
            //this.music.play();
            //onmouseclick
            this.game.input.onDown.add(Client.pingCheck, this);
            //input wsad
            this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
            this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
            this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
            this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
            this.game.world.setBounds(0, 0, 4000, 2800);
            var posicoesMarcas = new Array();
            for (var i = 0; i < 12; i++) {
                var pos = new Phaser.Point(0, 0);
                do {
                    pos.x = Math.floor(this.game.world.bounds.randomX);
                    pos.y = Math.floor(this.game.world.bounds.randomY);
                    var perto = false;
                    posicoesMarcas.forEach(function (element) {
                        if (pos.distance(element) < 600)
                            perto = true;
                    });
                } while (perto);
                posicoesMarcas.push(pos);
                this.game.add.sprite(pos.x, pos.y, 'marca_chao' + this.randomInt(1, 5));
            }
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.input.addMoveCallback(this.mouseMoved, this);
            Client.askNewPlayer();
        };
        GameScene.prototype.mouseMoved = function () {
            if (this.player != null) {
                var rotation = this.game.physics.arcade.angleToPointer(this.player);
                Client.sendMousePos(rotation);
            }
        };
        GameScene.prototype.update = function () {
            if (this.player == null)
                return;
            this.player.rotation = this.game.physics.arcade.angleToPointer(this.player);
            for (var key in this.playerMap) {
                this.playerMap[key].body.velocity.x = 0;
                this.playerMap[key].body.velocity.y = 0;
                if (key != this.player.id)
                    this.physics.arcade.collide(this.player, this.playerMap[key]);
            }
            //this.player.body.velocity.x =0;
            //this.player.body.velocity.y =0;
            if (this.upKey.isDown) {
                Client.sendInput('up');
                //this.player.body.velocity.y =-450;
            }
            if (this.downKey.isDown) {
                Client.sendInput('down');
                //this.player.body.velocity.y =450;
            }
            if (this.leftKey.isDown) {
                Client.sendInput('left');
                //this.player.body.velocity.x =-450;
            }
            if (this.rightKey.isDown) {
                Client.sendInput('right');
                //this.player.body.velocity.x =450;
            }
        };
        GameScene.prototype.setPlayerID = function (id) {
            this.player = this.playerMap[id];
            this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
            this.player.body.collideWorldBounds = true;
        };
        GameScene.prototype.randomInt = function (low, highExclusive) {
            return Math.floor(Math.random() * (highExclusive - low) + low);
        };
        GameScene.prototype.addNewPlayer = function (id, x, y, name) {
            this.playerMap[id] = new Kodo.Player(this.game, x, y, id, name);
        };
        GameScene.prototype.removePlayer = function (id) {
            this.playerMap[id].nameText.destroy();
            this.playerMap[id].destroy();
            delete this.playerMap[id];
        };
        GameScene.prototype.movePorInput = function (data) {
            this.playerMap[data.id].move(data.x, data.y);
        };
        GameScene.prototype.setRotation = function (data) {
            this.playerMap[data.id].rotate(data.rotation);
        };
        GameScene.prototype.updateAllPos = function (data) {
            for (var i = 0; i < data.length; i++) {
                this.playerMap[data[i].id].move(data[i].x, data[i].y);
            }
        };
        return GameScene;
    }(Phaser.State));
    GameScene._instance = null;
    Kodo.GameScene = GameScene;
})(Kodo || (Kodo = {}));
