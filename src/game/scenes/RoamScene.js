import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import { Preloader } from './Preloader';
import { PC } from '../objects/Entity';

export class RoamScene extends Scene {
    
    player;
    KeyObjects;
    sprinting;
    speed = 2.5;
    prevVelocity;

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

        this.KeyObjects = this.input.keyboard.addKeys({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D',
            //rotateRight: 'E',
            //rotateLeft: 'Q',
            sprint: 'SHIFT',
            //changeScene: 'SPACE'
        });  // this.KeyObjects.up, this.KeyObjects.down, this.KeyObjects.left, this.KeyObjects.right

    }

    // This function loads initial game logic
    // And initiates all the game objects
    async create() {
        
        // Create the map
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('hyptosis_tile-art-batch-1', 'tiles1');
        const tileset2 = map.addTilesetImage('hyptosis_til-art-batch-2', 'tiles2');

        // Create the layers
        const floor = map.createLayer('Floor', [tileset, tileset2], 0, 0);
        const floorDecal = map.createLayer('FloorDecal', [tileset, tileset2], 0, 0);
        const collides = map.createLayer('Collides', [tileset, tileset2], 0, 0);
        
        // Locate the spawnpoint
        const spawnpoint = map.findObject("Interactables", obj => obj.name === "Spawnpoint");

        // Create the player
        this.player = this.matter.add
        .sprite(spawnpoint.x, spawnpoint.y, 'red')
        .setSize(32, 32)
        .setFixedRotation();
        
        // Create the layers after the player
        const collidesDecal = map.createLayer('CollidesDecal', [tileset, tileset2], 0, 0);
        const decal = map.createLayer('Decal', [tileset, tileset2], 0, 0);
        const collisions = map.createLayer('Collision', [tileset, tileset2], 0, 0);
        collisions.setCollisionByProperty({Collides: true});
        this.matter.world.convertTilemapLayer(collisions);
        collisions.setVisible(false);
        
        // set up animations
        const anims = this.anims;
        
        // Assign the camera to a variable to make it easier to work with
        const camera = this.cameras.main;
        // Set the bounds of the camera to be the size of the map
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        camera.startFollow(this.player);

        EventBus.emit('current-scene-ready', this);        
    }

    changeScene() {
        this.scene.start('BattleScene');
    }

    update() {
        /* input */
        // Get angular velocity of the player
        this.prevVelocity = this.player.getAngularVelocity();
        
        
        this.player.setVelocity(0);

        // Horizontal movement
        if (this.KeyObjects.left.isDown) {
            this.player.setVelocityX(-this.speed);
        } else if (this.KeyObjects.right.isDown) {
            this.player.setVelocityX(this.speed);
        }

        // Vertical movement
        if (this.KeyObjects.up.isDown) {
            this.player.setVelocityY(-this.speed);
        } else if (this.KeyObjects.down.isDown) {
            this.player.setVelocityY(this.speed);
        }

        
        if (this.KeyObjects.sprint.isDown) {
            this.speed = 5;
        }

        if (this.KeyObjects.sprint.isUp) {
            this.speed = 2.5;
        }

        if (this.KeyObjects.up.isDown) {
            this.player.anims.play('mc-up-run-anim', true);
        } else if (this.KeyObjects.down.isDown) {
            this.player.anims.play('mc-down-run-anim', true);
        } else if (this.KeyObjects.right.isDown) {
            this.player.flipX = false;
            this.player.anims.play('mc-right-run-anim', true);
        } else if (this.KeyObjects.left.isDown) {
            this.player.flipX = true;
            this.player.anims.play('mc-left-run-anim', true);
        } else {
            this.player.anims.play('mc-idle-anim', true);
        }

    }
}