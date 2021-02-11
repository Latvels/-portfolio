import { Scene } from '../scene';

export class GameOver extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  update(time) {
    if (this.game.control.enter) { // При нажатии на "enter" начать новую игру
      this.finish(Scene.START_GAME);
    }
  }

  render(time) {
    this.update(time);
    this.game.screen.drawImage(0, 0, 'title_bg');
    this.game.screen.drawImage(0, 0, 'game_over');
    super.render(time);
  }
}
