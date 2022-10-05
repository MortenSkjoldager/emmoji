import Phaser from 'phaser';
import * as signalR from '@microsoft/signalr'
export default class Chat extends Phaser.Scene
{
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    player!: any;
    messages!: any;
    connection!: any;
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
        this.connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7123/chatHub")
        .build();
    

        this.form = this.add.dom(105,555).createFromCache('chat').setScrollFactor(0,0);
        var element = this.form.getChildByID('message-box')
        element.addEventListener('keyup', (event) => {
            this.callback(event)
        });

        this.messages = this.form.getChildByID('messages');

        this.connection.on("ReceiveMessage", (user, message) => {
            this.pushMessage(user, message);
        });

        this.connection.start();
    }

    pushMessage(user, message) {
        if (!this.isEmptyOrSpaces(message))
        {
            let existingText = this.messages.innerText;
        
            this.messages.innerText = `${existingText} \n ${user}: ${message}`;
        }
    }

    callback(event) {
        if (event.keyCode == 32) {
            event.target.value = `${event.target.value} `;
        }
        if (event.keyCode == 13) {
            
            const message = event.target.value;
            
            if (!this.isEmptyOrSpaces(message))
            {
                this.pushMessage('me', message)
                this.connection.invoke("SendMessage", 'my username', message)
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
