import Phaser from 'phaser';

export default class Login extends Phaser.Scene
{
    form: any;
    constructor ()
    {
        super({
            key: 'login'
        });
    }

    preload() {

    }

    create() {
        console.log('hello login');
        this.form = this.add.dom(400,200).createFromCache('login');
        var element = this.form.getChildByID('login-button')
        element.addEventListener('click', (event) => {
            var username = this.form.getChildByID('username').value;
            var password = this.form.getChildByID('password').value;

            this.scene.start('zone3')
        });

    }
}