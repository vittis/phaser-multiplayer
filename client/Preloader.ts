module Kodo {
 
    export class Preloader extends Phaser.State {
 
        preloadBar: Phaser.Sprite;
 
        preload() {
 
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
 
            //  Load our actual games assets
            this.load.image('titlepage', 'assets/titlepage.jpg');
            this.load.image('logo', 'assets/logo.png');
            this.load.audio('music', 'assets/title.mp3', true);

            this.load.image('marca_chao1', 'assets/marca_chao1.png');
            this.load.image('marca_chao2', 'assets/marca_chao2.png');
            this.load.image('marca_chao3', 'assets/marca_chao3.png');
            this.load.image('marca_chao4', 'assets/marca_chao4.png');


            this.load.image('player_corpo', 'assets/player_corpo.png');
            this.load.image('player_mao', 'assets/player_mao.png');
            
        }
 
        create() {
 
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
            
        }   
 
        startMainMenu() {
 
            //this.game.state.start('MainMenu', true, false); //descomentar pra ir pro menu
            this.game.state.start('GameScene', true, false);
        }
 
    }
 
}