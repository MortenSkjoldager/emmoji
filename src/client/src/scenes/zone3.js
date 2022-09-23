import Phaser from 'phaser';

export default class zone3 extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'zone3'
        });
    }

    preload ()
    {
        this.load.image('bg1', '/assets/png/1f3fc.png');
        this.load.image('home', '/assets/png/1f3e0.png');        
    }

    create ()
    {

    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-500);
            this.player.setFlipX(true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(500);
            this.player.setFlipX(false);
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
