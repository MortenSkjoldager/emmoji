import Player from '../characters/player'
import Phaser from 'phaser';
export default class zone3 extends Phaser.Scene
{
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    player!: any;
    form: any;
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
        this.player = this.add.player(50, 50, 'player');
        this.player.setScale(scale,scale);
        var obstaclesLayer = map.createLayer('Obstacles', tileSet);
        obstaclesLayer.setCollisionByProperty({ collides: true });
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, obstaclesLayer);
        this.physics.world.setBounds(0,0,300*16,300*16);
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.zoom = 2;
        this.scene.launch('chat');

    }

    update ()
    {
        if (this.player)
		{
			this.player.update(this.cursors)
		}
    }
}
