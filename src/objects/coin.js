export default class Coin extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'coin')
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setCollideWorldBounds(true)
            .setBounce(0.6)
            .setInteractive()
            .on('pointerdown', () => {
                this.setVelocityY(-460)
            })
        
    }
}