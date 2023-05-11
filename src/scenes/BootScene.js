import * as Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        //Load assets for the loading game animation
        this.load.image('coin', 'assets/imgs/coin.png');
    }

    create() {
        //Start the preloader scene for the loading animation
        this.scene.start("GameScene");
    }
}
