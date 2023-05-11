import * as Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({key: 'MenuScene'});
    }

    create() {
        //this.scene.start("GameScene");
        //Menu buttons setup
        this.playb = this.add.image(0,0, 'filename').setScale(1); //button sprite
        this.playb.setInteractive({ useHandCursor: true });
        this.playb.on('pointerover', function(){this.playb.setTexture('filename');}, this); //button pressed sprite
        this.playb.on('pointerout', function(){this.playb.setTexture('filename');}, this); //button sprite
        this.playb.on('pointerdown', () => this.activePButton());
    }

    //Active button function
    activePButton() {
        this.scene.start("GameScene");
        this.scene.stop();
     }
}
  