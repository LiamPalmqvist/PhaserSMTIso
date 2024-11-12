import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { RoamScene } from './scenes/RoamScene';
import { BattleScene } from './scenes/BattleScene';
import Phaser, { Physics } from 'phaser';
import { Preloader } from './scenes/Preloader';

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        RoamScene,
        BattleScene,
        Game,
        GameOver,
    ],
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: false,
        },
    },
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });
}

export default StartGame;
