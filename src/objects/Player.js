class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this);
        config.scene.physics.world.enable(this);

        this.acceleration = 600;
        this.maxVelocity.x = 200;
        this.maxVelocity.y = 400;

        this.jumpTimer = 0;
        this.attackCoolDown = 0;
        this.alive = true;
    }

    update() {
        
    }
}