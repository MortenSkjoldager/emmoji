import Phaser from 'phaser'



declare global
{
	namespace Phaser.GameObjects
	{
		interface GameObjectFactory
		{
			player(x: number, y: number, texture: string, frame?: string | number): Player
		}
	}
}

export default class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number)
	{
		super(scene, x, y, texture, frame)
    }

    preUpdate(t: number, dt: number)
	{
		super.preUpdate(t, dt)
    }

    update (cursors: Phaser.Types.Input.Keyboard.CursorKeys)
    {
        let speed = 100;
        this.setVelocity(0);

        if (cursors.left.isDown)
        {
            this.setVelocityX(-1*speed);
            this.setFlipX(true);
        }
        else if (cursors.right.isDown)
        {
            this.setVelocityX(1*speed);
            this.setFlipX(false);
        }

        if (cursors.up.isDown)
        {
            this.setVelocityY(-1*speed);
        }
        else if (cursors.down.isDown)
        {
            this.setVelocityY(1*speed);
        }
    }
}

