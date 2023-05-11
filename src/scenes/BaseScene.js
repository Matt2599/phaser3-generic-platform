import * as Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {
    constructor(sceneName) {
        super(sceneName);
    }

    preload() {
        //Load assets for the loading game animation
        this.load.image('coin', 'assets/imgs/coin.png');
    }

    init() {
        const config = {
            name: 'test',
            type: 'keyboard',
            default: true,
            active: true,
            controls: {
                up: 'W',
                down: 'S',
                left: 'A',
                right: 'D',
                attack: 'X'
            }
        };

        this.controls.add(config);
    }

    mamt() {
        //console.log("mamt");
        console.log(this.controls.schemes);
    }
}