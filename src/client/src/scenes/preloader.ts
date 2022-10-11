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
        this.load.html('chat', 'assets/domelements/chat.html');
        this.load.html('login', 'assets/domelements/login.html');
        this.load.image('grass', '/assets/png/ninjikin/GRASS+.png')
        this.load.tilemapTiledJSON('zone3', './tilemaps/zone3.tmj');
        this.load.image('player', '/assets/png/1f468-1f3fe-200d-1f33e.png');
    }

    create() {
        this.scene.start('zone3')
    }
}