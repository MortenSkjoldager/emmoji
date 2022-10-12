import Phaser from 'phaser';
import Player from '../characters/player'

export default class Login extends Phaser.Scene
{
    form: any;
    player!: any;
    direction: integer;
    constructor ()
    {
        super({
            key: 'login'
        });

        this.direction = 1;

        setInterval(() => {
            this.direction = this.getRandomNumberBetween(1,8)
        }, 2500)
    }

    preload() {
        
    }

    getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    update() {
        let speed = 100;
        if (this.direction == 1) { //east
            this.player.setVelocityX(speed);
            this.player.setVelocityY(0);
        }

        if (this.direction == 2) { //south east 
            this.player.setVelocityX(speed);
            this.player.setVelocityY(speed);
        }
        if (this.direction == 3) { //south
            this.player.setVelocityX(0);
            this.player.setVelocityY(speed);
        }
        if (this.direction == 4) { //south west
            this.player.setVelocityX(speed*-1);
            this.player.setVelocityY(speed);
        }

        if (this.direction == 5) { //west
            this.player.setVelocityX(speed*-1);
            this.player.setVelocityY(0);
        }

        if (this.direction == 5) { //north west
            this.player.setVelocityX(speed*-1);
            this.player.setVelocityY(speed*-1);
        }

        if (this.direction == 6) { //north
            this.player.setVelocityX(0);
            this.player.setVelocityY(speed*-1);
        }

        if (this.direction == 7) { //north east 
            this.player.setVelocityX(speed);
            this.player.setVelocityY(speed*-1);
        }

    }

    create() {
        const map = this.make.tilemap({ key: 'zone3'});
        const tileSet = map.addTilesetImage('grass', 'grass', 16, 16, 0, 0);
        map.createLayer('Ground', tileSet);

        var scale = 1/(72 / 16);
        this.player = this.add.player(50, 50, 'player');
        this.player.setScale(scale,scale);
        this.player.setCollideWorldBounds(true);
        this.form = this.add.dom(400,200).createFromCache('login').setScrollFactor(0,0);
        this.cameras.main.startFollow(this.player, true);
        var element = this.form.getChildByID('login-button')
        element.addEventListener('click', (event) => {
            var username = this.form.getChildByID('username').value;
            var password = this.form.getChildByID('password').value;

            this.scene.start('zone3')
        });

        this.cameras.main.zoom = 2;

    }
}