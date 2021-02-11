import { Screen } from './screen';
import { Loading } from './scenes/loading';
import { Menu } from './scenes/menu';
import { GameLevel } from './scenes/game-level';
import { Scene } from './scene';
import { ControlState } from './control-state';
import { GameOver } from './scenes/game-over';
import { GameWin } from './scenes/game-win';

export class Game {
  constructor({ width = 640, height = 640 } = {}) {
    this.screen = new Screen(width, height);
    this.screen.loadImages({
      orc: 'img/orc.png',
      elf: 'img/dark-elf.png',
      player: 'img/player2.png',
      title_bg: 'img/bg_title.png',
      title_name: 'img/game_name.png',
      title_start: 'img/start_game.png',
      title_option: 'img/option_game.png',
      title_exit: 'img/exit_game.png',
      you_win: 'img/you_win.png',
      game_over: 'img/game_over.png',
      tiles: 'img/tiles.png',
      tiles2: 'img/tiles2.png',
      quest_person: 'img/girl-for-cave.png',
    });

    this.control = new ControlState();

    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this),
      gameLevel: new GameLevel(this),
      gameOver: new GameOver(this),
      gameWin: new GameWin(this),
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  changeScene(status) {
    switch (status) {
      case Scene.LOADED:
        return this.scenes.menu;
      case Scene.START_GAME:
        return this.scenes.gameLevel;
      case Scene.GAME_OVER:
        return this.scenes.gameOver;
      case Scene.GAME_WIN:
        return this.scenes.gameWin;
      default:
        return this.scenes.menu;
    }
  }

  frame(time) {
    if (this.currentScene.status != Scene.WORKING) {
      this.currentScene = this.changeScene(this.currentScene.status);
      this.currentScene.init();
    }
    this.currentScene.render(time);
    requestAnimationFrame((time) => this.frame(time));
  }

  run() {
    requestAnimationFrame((time) => this.frame(time));
  }
}
