import Player from '../characters/player'
import Phaser from 'phaser';
export default class zone3 extends Phaser.Scene
{
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    player!: any;
    
    constructor ()
    {
        super({
            key: 'zone3'
        });
    }

    preload ()
    {
        Phaser.GameObjects.GameObjectFactory.register('player', function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, texture: string, frame?: string | number) {
            var sprite = new Player(this.scene, x, y, texture, frame)
        
            this.displayList.add(sprite)
            this.updateList.add(sprite)
        
            this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY)
        
            sprite.body.setSize(sprite.width * 0.5, sprite.height * 0.8)
        
            return sprite
        })

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
        obstaclesLayer.setCollisionByProperty({ collides: true })

        this.physics.add.collider(this.player, obstaclesLayer);
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player, true);

        this.cameras.main.followOffset.set(0, 0);
    }

    update ()
    {
        if (this.player)
		{
			this.player.update(this.cursors)
		}
    }
}
