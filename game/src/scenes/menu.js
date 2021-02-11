import { Scene } from '../scene';

export class Menu extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  update(time) {
    if (this.game.control.enter) {
      this.finish(Scene.START_GAME);
    }
  }

  render(time) {
    this.update(time);
    this.game.screen.drawImage(0, 0, 'title_bg');
    this.game.screen.drawImage(0, 0, 'title_name');
    this.game.screen.drawImage(0, 0, 'title_start');
    this.game.screen.drawImage(0, 0, 'title_option');
    this.game.screen.drawImage(0, 0, 'title_exit');
    super.render(time);
  }
}
