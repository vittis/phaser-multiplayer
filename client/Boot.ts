module Kodo {
    export class Boot extends Phaser.State {
       
        preload() {
            this.load.image('preloadBar', 'assets/loader.png');
            
        }

        create() {
            document.body.style.margin = '0px';
            
            this.input.maxPointers = 1;
            
            this.stage.disableVisibilityChange = true;
            this.game.scale.setResizeCallback(function() {this.scale.setGameSize(window.innerWidth, window.innerHeight);}, this);

            this.game.state.start('Preloader', true, false);      
                  
        }
    }
    
}