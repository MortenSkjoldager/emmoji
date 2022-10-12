import Phaser from 'phaser';
import Player from '../characters/player'

export default class loginOverlay extends Phaser.Scene
{
    form: any;
    constructor ()
    {
        super({
            key: 'loginOverlay'
        });
    }

    create() {

        this.form = this.add.dom(600,500).createFromCache('login').setScrollFactor(0,0);
        
        var element = this.form.getChildByID('login-button')
        element.addEventListener('click', (event) => {
            var username = this.form.getChildByID('username').value;
            var password = this.form.getChildByID('password').value;

            return true;
        });

        this.cameras.main.zoom = 2;

    }
}