"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerPlayer_1 = require("./ServerPlayer");
var GameServer = (function () {
    function GameServer() {
        this.lastPlayerID = 0;
        this.clients = {};
        console.log("gameserver instanciado");
    }
    GameServer.prototype.addPlayer = function (x, y, name) {
        var player = new ServerPlayer_1.ServerPlayer(this.lastPlayerID, x, y, name);
        this.clients[player.id] = player;
        this.lastPlayerID++;
        return player;
    };
    GameServer.prototype.lastPlayer = function () {
        return this.clients[this.lastPlayerID];
    };
    GameServer.prototype.onDisconnect = function (id) {
        delete this.clients[id];
    };
    return GameServer;
}());
exports.GameServer = GameServer;
