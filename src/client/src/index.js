import Phaser from 'phaser';

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', '/assets/png/1f331.png');
        this.load.image('ship', '/assets/png/1f468-1f3fe-200d-1f33e.png');
    }

    create ()
    {
        this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
        this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);

        this.add.tileSprite(0,0,1920 * 2,1080 * 2,"bg")

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(400, 300, 'ship');

        this.player.setCollideWorldBounds(true);

        this.cameras.main.startFollow(this.player);

        this.cameras.main.followOffset.set(-300, 0);
    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-500);
            this.player.setFlipX(true);
            this.cameras.main.followOffset.x = 300;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(500);
            this.player.setFlipX(false);
            this.cameras.main.followOffset.x = -300;
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-500);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(500);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
    },
    scene: [ Example ]
};

const game = new Phaser.Game(config);