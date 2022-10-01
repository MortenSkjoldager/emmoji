import Phaser from 'phaser';

export default class zone1 extends Phaser.Scene
{
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private obstacles : any;
    private player: any;

    constructor ()
    {
        super({
            key: 'zone1'
        });
    }

    preload ()
    {
        this.load.image('bg', '/assets/png/1f331.png');
        this.load.image('player', '/assets/png/1f468-1f3fe-200d-1f33e.png');
        this.load.image('tree1', '/assets/png/1f332.png');
    }

    create ()
    {
        this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
        this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);

        this.add.tileSprite(0,0,1920 * 4,1080 * 4,"bg");
        this.obstacles = this.add.group();
        var tree1 = this.physics.add.image(200, 200, 'tree1');
        var tree2 = this.physics.add.image(100, 100, 'tree1');

        this.obstacles.add(tree1);
        this.obstacles.add(tree2);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.player = this.physics.add.image(400, 300, 'player');
        this.physics.add.overlap(this.player, this.obstacles, this.onMeetObstacle);
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player);

        this.cameras.main.followOffset.set(0, 0);
    }

    onMeetObstacle() {
        this.scene.start("zone2");
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
