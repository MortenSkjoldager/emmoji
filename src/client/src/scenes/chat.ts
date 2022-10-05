import Phaser from 'phaser';
export default class Chat extends Phaser.Scene
{
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    player!: any;
    form: any;
    constructor ()
    {
        super({
            key: 'chat'
        });
    }

    initialize() {

    }

    preload ()
    {
  
    }

    create ()
    {        
        this.form = this.add.dom(105,755).createFromCache('chat').setScrollFactor(0,0);
        var element = this.form.getChildByID('message-box')
        element.addEventListener('keyup', this.callback);
    }

    callback(event, key) {
        if (event.keyCode == 13) {
            const message = event.target.value;
            alert(message)
        }

        return true;
    }

    update ()
    {

    }
}
