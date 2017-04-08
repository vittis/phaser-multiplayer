module Kodo {
    export class Player extends Phaser.Sprite {

        name : string = "unknown";
        nameText : Phaser.Text;
        mao : Phaser.Sprite;
        mao2 : Phaser.Sprite;
        maoSpeed=1;

        constructor(game: Phaser.Game, x: number, y: number, public id, name : string) {
            super(game, x, y, 'player_corpo', 0);
            this.name = name;
            this.game.physics.arcade.enable(this);
            this.anchor.setTo(0.5, 0.5);
            this.setText();

            var mao = this.game.add.sprite(this.x, this.y, 'player_mao');
            var mao2 = this.game.add.sprite(this.x, this.y, 'player_mao');

            mao.anchor.setTo(0.5, 0.5);
            mao2.anchor.setTo(0.5, 0.5);

            this.addChild(mao);
            mao.x = 19;
            mao.y = -40;

            this.addChild(mao2);
            mao2.x = 19;
            mao2.y = 40;

            this.mao = mao;
            this.mao2 = mao2;
            game.add.existing(this);
        }

        move(x, y) {
            this.x = x;
            this.y = y;            
        }

        rotate(r) {
            this.rotation = r;
        }   

        update() {
            
            //GameScene._instance.playerMap[this.id].rotation = this.game.physics.arcade.angleToPointer(this);


            this.nameText.position.set(this.x, this.y-this.height/2 - 35);
            
            this.mao2.y += this.maoSpeed * 0.15;
            this.mao.y -= this.maoSpeed * 0.15;


            if (this.mao2.y <= 40)
                this.maoSpeed *= -1;
            if (this.mao2.y >= 44)
                this.maoSpeed *= -1;

        }

        setText() {
            var style = { font: "Baloo Paaji", fill: "white", wordWrap: true, /*wordWrapWidth: this.width,*/ align: "center" };
            this.nameText = this.game.add.text(0, 0, this.name, style);
            this.nameText.anchor.setTo(0.5, 0.5);
            this.nameText.fontSize = 20;
        }

 
    }
 
}