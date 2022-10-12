import Phaser from 'phaser';
import Player from '../characters/player'
export default class preloader extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'preloader'
        });
    }

    preload() {

        Phaser.GameObjects.GameObjectFactory.register('player', function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, texture: string, frame?: string | number) {
            var sprite = new Player(this.scene, x, y, texture, frame)
        
            this.displayList.add(sprite)
            this.updateList.add(sprite)
        
            this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY)
        
            sprite.body.setSize(sprite.width * 0.5, sprite.height * 0.8)
        
            return sprite
        })

        this.load.html('chat', 'assets/domelements/chat.html');
        this.load.html('login', 'assets/domelements/login.html');
        this.load.image('grass', '/assets/png/ninjikin/GRASS+.png')
        this.load.tilemapTiledJSON('zone3', './tilemaps/zone3.tmj');
        this.load.image('player', '/assets/png/1f468-1f3fe-200d-1f33e.png');
    }

    create() {
        this.scene.start('login')
    }
}