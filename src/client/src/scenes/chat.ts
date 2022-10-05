import Phaser from 'phaser';
export default class Chat extends Phaser.Scene
{
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    player!: any;
    messages!: any;
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
        this.form = this.add.dom(105,555).createFromCache('chat').setScrollFactor(0,0);
        var element = this.form.getChildByID('message-box')
        element.addEventListener('keyup', (event) => {
            this.callback(event)
        });

        this.messages = this.form.getChildByID('messages');
    }

    callback(event) {
        if (event.keyCode == 32) {
            event.target.value = `${event.target.value} `;
        }
        if (event.keyCode == 13) {
            
            const message = event.target.value;
            
            if (!this.isEmptyOrSpaces(message))
            {
                let existingText = this.messages.innerText;
            
                this.messages.innerText = `${existingText} \n me: ${message}`;
    
                event.target.value = '';
            }
        }

        return true;
    }

    isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    update ()
    {

    }
}
