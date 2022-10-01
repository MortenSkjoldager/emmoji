import Phaser from 'phaser';

export default class zone2 extends Phaser.Scene
{
    private player: any;
    private cursors: any;
    private obstacles: any;
    
    constructor ()
    {
        super({
            key: 'zone2'
        });
    }

    preload ()
    {
        this.load.image('bg1', '/assets/png/1f3fc.png');
        this.load.image('home', '/assets/png/1f3e0.png');        
    }

    create ()
    {
        this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
        this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);

        this.add.tileSprite(0,0,1920 * 4,1080 * 4,"bg1");
        
        this.obstacles = this.add.group();
        var home = this.physics.add.image(100, 100, 'home');
        this.obstacles.add(home);

        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.player = this.physics.add.image(400, 300, 'player');
        this.physics.add.overlap(this.player, this.obstacles, this.onMeetObstacle);
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player);

        this.cameras.main.followOffset.set(0, 0);
    }

    onMeetObstacle() {
        this.scene.start("zone1");
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
