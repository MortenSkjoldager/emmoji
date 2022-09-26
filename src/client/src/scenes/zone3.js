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
  
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'zone3'});
        const tileSet = map.addTilesetImage('grass', 'grass');

        map.createLayer('Ground', tileSet, 0, 0);
        var obstaclesLayer = map.createLayer('Obstacles', tileSet, 0, 0);
        obstaclesLayer.setCollisionByProperty({ collides: true});
    }

    update ()
    {
        
    }
}
