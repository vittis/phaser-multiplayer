import {ServerPlayer} from './ServerPlayer';


export class GameServer {
    lastPlayerID = 0;

    clients : { [key:number]: ServerPlayer; } = {};

    constructor() {
        console.log("gameserver instanciado");
    }

    addPlayer(x, y, name) : ServerPlayer {
        var player = new ServerPlayer(this.lastPlayerID, x, y, name);
        this.clients[player.id] = player;
        this.lastPlayerID++;
        return player;
    }

    lastPlayer() : ServerPlayer {
        return this.clients[this.lastPlayerID];
    }
    onDisconnect(id) : void {
        delete this.clients[id];
    }
}
