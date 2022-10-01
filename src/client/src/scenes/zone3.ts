import Phaser from 'phaser';

export default class zone3 extends Phaser.Scene
{
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    player!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
    
    constructor ()
    {
        super({
            key: 'zone3'
        });
    }

    preload ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
  
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'zone3'});
        const tileSet = map.addTilesetImage('grass', 'grass', 16, 16, 0, 0);

        map.createLayer('Ground', tileSet);
        
        var scale = 1/(72 / 16);
        this.player = this.physics.add.image(50, 50, 'player');
        this.player.setScale(scale,scale);

        var obstaclesLayer = map.createLayer('Obstacles', tileSet);
        obstaclesLayer.setCollisionByProperty({ collides: true })

        this.physics.add.collider(this.player, obstaclesLayer);
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player);

        this.cameras.main.followOffset.set(0, 0);
    }

    onCollide() {
        console.log('collide')
        this.player.setVelocity(0);
    }

    update ()
    {
        let speed = 100;
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-1*speed);
            this.player.setFlipX(true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(1*speed);
            this.player.setFlipX(false);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-1*speed);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(1*speed);
        }
    }
}
