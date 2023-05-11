import Coin from "../objects/coin";
import Fps from "../objects/fps";

import BaseScene from './BaseScene';

export default class GameScene extends BaseScene {
    constructor() {
        super({key: 'GameScene'});
    }

    preload() {
        this.load.image('coin', 'assets/imgs/coin.png');
    }

    create() {

        new Coin(this, game.config.width / 2, 0)
        this.fps = new Fps(this)

        this.add.image(
            game.config.width / 2,
            game.config.height / 2,
            'coin'
        ).setScale(0.5);

        const config2 = {
            name: 'AAA',
            type: 'keyboard',
            default: true,
            active: true,
            controls: {
                up: 'E',
                down: 'S',
                left: 'A',
                right: 'D',
                attack: 'X'
            }
        };

        this.controls.add(config2);
        this.controls.editKey("AAA", "up", "Q");
        let mama = this.controls.get("AAA-edited");
        console.log(mama);
        //console.log(this.controls);
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        this.fps.update();
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.mamt(); 
        }
    }
}