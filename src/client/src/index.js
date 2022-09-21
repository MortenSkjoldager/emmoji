import Phaser from 'phaser';
import zone1 from './scenes/zone1'
import zone2 from './scenes/zone2'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0},
            debug: true
        }
    },
    scene: [ zone1, zone2 ]
};

const game = new Phaser.Game(config);