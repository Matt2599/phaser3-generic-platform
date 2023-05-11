import * as Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: 'PreloadScene'});
    }

    preload() {
        //Setup loading bar
        //loader mask (over the loadBar)
        this.add.sprite(0,0, "filename").setOrigin(0,0).setScale(1);
        //loader background
        this.add.sprite(0,0, "filename").setOrigin(0,0).setDepth(1).setScale(1);

        //Callback for loading progress update
        this.load.on('progress', this.onProgress, this);
        this.load.on('complete', this.onComplete, this);

        //Loading all required files
    }

    onProgress(value) {
        //Setup the loadBar
        this.loadBar = this.add.sprite(0,0, "filename").setOrigin(0,0).setScale(1);
        //Calculate width/height based on loading value (0.0 ... 1.0)
        var w = -this.loadBar.width * value;
        //Set width/height of the sprite bar
        this.loadBar.frame.cutWidth = w;
    }

    onComplete() {
        //Start the next scene
        this.scene.start("TitleScene");
    }

    create() {
        //Create global animations
    }
}

  