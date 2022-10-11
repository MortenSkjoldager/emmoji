import Phaser from 'phaser'
import preloader from './scenes/preloader'
import zone1 from './scenes/zone1'
import zone2 from './scenes/zone2'
import zone3 from './scenes/zone3'
import chat from './scenes/chat'
import login from './scenes/login'

export default {
    type: Phaser.AUTO,
    dom: {
        createContainer: true
      },
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0},
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'body',
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [preloader, login, zone1, zone2, zone3, chat ]
};