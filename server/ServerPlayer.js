"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var ServerPlayer = (function () {
    function ServerPlayer(id, x, y, name) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.name = name;
    }
    ServerPlayer.prototype.movePlayer = function (keyCode) {
        if (keyCode == 'up') {
            this.y -= GameConfig_1.GameConfig.PLAYER_MOVE;
        }
        if (keyCode == 'down') {
            this.y += GameConfig_1.GameConfig.PLAYER_MOVE;
        }
        if (keyCode == 'left') {
            this.x -= GameConfig_1.GameConfig.PLAYER_MOVE;
        }
        if (keyCode == 'right') {
            this.x += GameConfig_1.GameConfig.PLAYER_MOVE;
        }
    };
    return ServerPlayer;
}());
exports.ServerPlayer = ServerPlayer;
