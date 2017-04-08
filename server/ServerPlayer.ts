import {GameConfig} from './GameConfig';

export class ServerPlayer {
    id;
    name : string;
    x;
    y;

    constructor(id, x, y, name) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.name = name;
    }
    
    movePlayer(keyCode) : void {
        if (keyCode == 'up') {
            this.y -= GameConfig.PLAYER_MOVE;
        }
        if (keyCode == 'down') {
            this.y += GameConfig.PLAYER_MOVE;
        }
        if (keyCode == 'left') {
            this.x -= GameConfig.PLAYER_MOVE;
        }
        if (keyCode == 'right') {
            this.x += GameConfig.PLAYER_MOVE;
        }
        
    }

}



