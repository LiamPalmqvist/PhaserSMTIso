import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import { Preloader } from './Preloader';
import { PC } from '../objects/Entity';

export class RoamScene extends Scene {
    
    constructor() {
        super('RoamScene');
    }
    
    // This function is the function that loads the assets
    preload ()
    {

        // Load data needed
        this.sprinting = 1;

        // the "this" keyword refers to the current scene
        // the "load" object is used to load assets
        //this.load.setBaseURL('assets');

        //this.load.image('sky', 'images/59a.jpg');
        // this.load.image('logo', 'sprites/');
        // this.load.image('red', 'sprites/PFP.jpg');
        //this.load.image('logo', 'sprites/PFP.jpg');

        //this.load.atlas("attack", "sprites/sheets/03.png", "sprites/sheets/03.json");

        this.keyObjects = this.input.keyboard.addKeys({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D',
            sprint: 'SHIFT',
            changeScene: 'SPACE'
        });  // keyObjects.up, keyObjects.down, keyObjects.left, keyObjects.right

    }

    // This function loads initial game logic
    // And initiates all the game objects
    async create() {
        
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('hyptosis_tile-art-batch-1', 'tiles1');
        const tileset2 = map.addTilesetImage('hyptosis_til-art-batch-2', 'tiles2');

        //const outside_tilemap = this.make.tilemap({ key: "outside", tileWidth: 32, tileHeight: 64 });
        //const outside_tiles = outside_tilemap.addTilesetImage('iso-64x64-outside', 'tiles');
 
        
        const floor = map.createLayer('Floor', [tileset, tileset2], 0, 0);
        const collides = map.createLayer('Collides', [tileset, tileset2], 0, 0);
        
        // adds a background image
        // the "add" object is used to add game objects
        // this.add.image(400, 300, 'sky');
        
        // add the PC in before the aboveLayer so that the aboveLayer is rendered after the PC
        //this.pc = new PC(this, this.game.config.width/2, this.game.config.height/2, "logo", "Liam", 10, 100, 20, 20, 20, 20, 20, 20, 20)
        //.setDisplaySize(32, 32);
        //this.matter.add.gameObject(this.pc);
        //this.pc.setCollidesWith = playerLayer;
        //this.pc.setCollideWorldBounds(true);
        //this.pc.setCollisionByProperty({ Collides: true });
        
        
        const decal = map.createLayer('Decal', [tileset, tileset2], 0, 0);
        const collidesDecal = map.createLayer('CollidesDecal', [tileset, tileset2], 0, 0);
        
        collides.setCollisionFromCollisionGroup({Collides: true});
        //this.matter.world.convertTilemapLayer(playerLayer);
        //playerLayer.setCollisionByProperty({ Collides: true });

        // const debugGraphics = this.add.graphics().setAlpha(0.75);
        // this.physics.world.createDebugGraphic();
        // this.physics.add.image(0, 0, 'tiles');
        // collides.renderDebug(debugGraphics, {
        // tileColor: null, // Color of non-colliding tiles
        // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        // });


        //this.pc.renderDebug();

        //this.physics.add.collider(this.pc, playerLayer);
        
        
        //this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        //this.cameras.main.startFollow(this.pc);

        
        //this.cameras.main.setBackgroundColor(0xFF0000);

        
        // this.anims.create({
        //     key: "idle",
        //     frames: this.anims.generateFrameNames("attack", {
        //         prefix: "idle/frame",
        //         start: 0,
        //         end: 12
        //     }),
        //     framerate: 60,
        //     repeat: -1
        // })

        // this.add.text(0, 0, "Press SPACE to change scene", {font: "16px Courier", fill: "#00ff00"});

        //this.physics.add.existing(pc);
        //pc.setVelocity(100, 300)
        //pc.setBounce(1,1);
        //pc.setCollideWorldBounds(true);

        // entities.push(new Entity(this, game.config.width/2, game.config.height/2, "red", "Mail", 10, 100, 20, 20, 20, 20, 20, 20, 20))
        // // adds particles to the game
        // // properties are stored in the initialiser
        // const particles = this.add.particles(0, 0, 'logo', {
        //     speed: 100,
        //     scale: {start: 0.1, end: 0},
        //     rotate: {start: 0, end: 360},
        //     blendMode: 'ADD'
        // })


        // adds physics to the loaded logo
        //const logo = this.physics.add.image(400, 100, 'red')
        //    .setSize(32, 32)
        //    .setDisplaySize(32, 32);

        // logo physics properties
        //logo.setVelocity(100, 300);
        //logo.setBounce(1, 1);
        //logo.setCollideWorldBounds(true);

        // makes the particles follow the logo
        // particles.startFollow(pc);
        

        this.cameras.main.setBackgroundColor(0x00ffFF);

        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
        this.scene.start('BattleScene');
    }

    update() {
        
        /* input */
        
        // if (this.keyObjects.up.isDown) {
        //    this.pc.y -= this.sprinting/* * collidingUp*/;
        // }

        // if (this.keyObjects.down.isDown) {
        //     this.pc.y += this.sprinting/* * collidingDown*/;
        // }

        // if (this.keyObjects.left.isDown) {
        //     this.pc.x -= this.sprinting/* * collidingLeft*/;
        // }

        // if (this.keyObjects.right.isDown) {
        //     this.pc.x += this.sprinting/* collidingRight*/;
        // }
        
        
        // if (this.keyObjects.sprint.isDown) {
        //     this.sprinting = 2;
        // }

        // if (this.keyObjects.sprint.isUp) {
        //     this.sprinting = 1;
        // }

    
        // if (this.keyObjects.changeScene.isDown) {
        //     this.scene.pause();
        //     //this.scene.launch("BattleScene");
        //     this.scene.switch("BattleScene");
        // }
        /* end input */

        /*
        pc.updatePosition();
        for (let i in entities) {
            i.updatePosition();
        }
        */

    }
}