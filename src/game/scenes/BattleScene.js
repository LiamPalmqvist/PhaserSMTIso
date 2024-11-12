import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

//var battle;

export class BattleScene extends Scene {

    constructor () 
    {
        super('BattleScene');
    }
   
    // This function is the function that loads the assets
    preload()
    {
        /*
        // Load data needed
        this.sprinting = 0;

        // the "this" keyword refers to the current scene
        // the "load" object is used to load assets
        this.load.setBaseURL('assets');

        this.load.image('background', 'images/Background.png');
        // this.load.image('logo', 'sprites/');
        // this.load.image('red', 'sprites/PFP.jpg');
        this.load.image('logo', 'sprites/PFP.jpg');

        this.load.atlas("attack", "sprites/sheets/03.png", "sprites/sheets/03.json");

        this.keyObjects = this.input.keyboard.addKeys({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D',
            sprint: 'SHIFT',
            changeScene: 'SPACE'
        });  // keyObjects.up, keyObjects.down, keyObjects.left, keyObjects.right
    */
    }

    // This function loads initial game logic
    // And initiates all the game objects
    async create() {

        // // adds a background image
        // // the "add" object is used to add game objects
        // this.add.image(game.config.width/2, game.config.height/2, 'background');

        // /*this.anims.create({
        //     key: "idle",
        //     frames: this.anims.generateFrameNames("attack", {
        //         prefix: "idle/frame",
        //         start: 0,
        //         end: 12
        //     }),
        //     framerate: 60,
        //     repeat: -1
        // })*/

        // //this.physics.add.existing(pc);
        // //pc.setVelocity(100, 300)
        // //pc.setBounce(1,1);
        // //pc.setCollideWorldBounds(true);

        // entities.push(new Entity(this, game.config.width/2, game.config.height/2, "red", "Not Mail", 10, 100, 20, 20, 20, 20, 20, 20, 20))
        // // adds particles to the game
        // // properties are stored in the initialiser
        // const particles = this.add.particles(0, 0, 'logo', {
        //     speed: 100,
        //     scale: {start: 0.1, end: 0},
        //     rotate: {start: 0, end: 360},
        //     blendMode: 'ADD'
        // })

        // battle = new Battle([pc], entities);

        // // adds physics to the loaded logo
        // //const logo = this.physics.add.image(400, 100, 'red')
        // //    .setSize(32, 32)
        // //    .setDisplaySize(32, 32);

        // // logo physics properties
        // //logo.setVelocity(100, 300);
        // //logo.setBounce(1, 1);
        // //logo.setCollideWorldBounds(true);

        // // makes the particles follow the logo
        // particles.startFollow(pc);

        EventBus.emit('current-scene-ready', this);

    }

    changeScene ()
    {
        this.scene.start('Game');
    }

    update() {
        // // load everything before actually going anywhere
        // if (!loaded) {
        //     return false;
        // }

        // /* input */
        // if (this.keyObjects.up.isDown) {
        //     pc.y -= 1 * this.sprinting/* * collidingUp*/;
        // }

        // if (this.keyObjects.down.isDown) {
        //     pc.y += 1 * this.sprinting/* * collidingDown*/;
        // }

        // if (this.keyObjects.left.isDown) {
        //     pc.x -= 1 * this.sprinting/* * collidingLeft*/;
        // }

        // if (this.keyObjects.right.isDown) {
        //     pc.x += 1 * this.sprinting/* * collidingRight*/;
        // }
        
        // if (this.keyObjects.sprint.isDown) {
        //     this.sprinting = 2;
        // }

        // if (this.keyObjects.sprint.isUp) {
        //     this.sprinting = 1;
        // }

        // if (this.keyObjects.changeScene.isDown) {
        //     this.scene.resume("RoamScene");
        //     this.scene.stop();
        //     this.scene.switch("RoamScene");
        //     //battle = new Battle([playerCharacter], [entity]);
        //     //battle.update();
        // }
        // /* end input */

        // /*
        // pc.updatePosition();
        // for (let i in entities) {
        //     i.updatePosition();
        // }
        // */

    }
}