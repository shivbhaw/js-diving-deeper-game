import Scenes from './scenes';

export const GameConfig: Phaser.Types.Core.GameConfig = {
    title: 'js-diving-deeper-game',
    url: 'https://github.com/shivbhaw/js-diving-deeper-game',
    version: '0.0.1',
    width: 800,
    height: 600,
    backgroundColor: 0x3a404d,
    type: Phaser.AUTO,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: Scenes
};