import Phaser from 'phaser';
import preloader from './scenes/preloader';
import zone1 from './scenes/zone1'
import zone2 from './scenes/zone2'
import zone3 from './scenes/zone3'
export default {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0},
            debug: true
        }
    },
    scale: {
        zoom: 2
    },
    scene: [ preloader, zone1, zone2, zone3 ]
};