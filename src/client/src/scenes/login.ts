import Phaser from 'phaser';
import Player from '../characters/player'

export default class Login extends Phaser.Scene
{
    form: any;
    player!: any;
    directionX: integer;
    directionY: integer;
    speed: integer;
    directions: integer[];
    constructor ()
    {
        super({
            key: 'login'
        });

        this.directions = [
            -1,0,1
        ]
        this.speed = 100;
        this.directionX = 100;
        this.directionY = 0;
        setInterval(() => {
            this.directionX = this.getRandomDirection();
            this.directionY = this.getRandomDirection();
        }, 2500)
    }

    preload() {
        
    }

    getRandomDirection(){
        let min = 1;
        let max = 3;

        let random = Math.floor(Math.random()*(max-min+1)+min) - 1;

        return this.directions[random] * this.speed;
    }

    update() {
        this.player.setVelocityX(this.directionX);
        this.player.setVelocityY(this.directionY);
    }

    create() {
        const map = this.make.tilemap({ key: 'zone3'});
        const tileSet = map.addTilesetImage('grass', 'grass', 16, 16, 0, 0);
        map.createLayer('Ground', tileSet);
        this.physics.world.setBounds(0,0,300*16,300*16);

        var scale = 1/(72 / 16);
        this.player = this.add.player(1200, 1200, 'player');
        this.player.setScale(scale,scale);
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.zoom = 2;

        this.scene.launch('loginOverlay');

    }
}