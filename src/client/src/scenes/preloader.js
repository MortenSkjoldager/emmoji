import Phaser from 'phaser';

export default class preloader extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'preloader'
        });
    }

    preload() {
        this.load.image('grass', '/assets/png/ninjikin/GRASS+.png')
        this.load.tilemapTiledJSON('zone3', './tilemaps/zone3.tmj');
    }

    create() {
        this.scene.start('zone3')
    }
}