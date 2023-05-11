import * as Phaser from 'phaser';
import BootScene from './src/scenes/BootScene';
import BaseScene from './src/scenes/BaseScene';
import PreloaderScene from './src/scenes/PreloaderScene';
import MenuScene from './src/scenes/MenuScene';
import GameScene from './src/scenes/GameScene';
import ControlsPlugin from './src/plugins/ControlsPlugin';

const DEFAULT_WIDTH = 1024
const DEFAULT_HEIGHT = 768

const config = {
    name: 'mygame',
    type: Phaser.AUTO,
    backgroundColor: '#2f3640',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    plugins: {
        scene: [
            {key: ControlsPlugin, plugin: ControlsPlugin, start: true, mapping: 'controls'}
        ]
    },
    input: {
        keyboard: true,
        mouse: true,
        gamepad: true,
    },
    autoFocus: true,
    disableContextMenu: true,
    pixelArt: true,
    roundPixels: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1800},
            debug: true
        }
    },
    scene: [BootScene,BaseScene,GameScene]
    //scene: [BootScene, PreloaderScene, MenuScene, GameScene]
};

window.game = new Phaser.Game(config)