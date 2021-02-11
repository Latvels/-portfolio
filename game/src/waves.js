import { Orc } from './orc';

export class Waves {
  constructor(game) {
    this.game = game;
    this.orcArmy = game.currentScene.orcArmy;// Массив, содержащий всех существующих орков. Этот класс пополняет этот массив новыми орками

    this.collider = game.currentScene.collider;// Будем добавлять орков в коллайдер
    this.player = game.currentScene.player;// Передаём игрока, чтобы орк мог следить за ним и атаковать его
    this.lastTime = 0;
    this.timeLeftForNextWave = 500;// Таймер для обратного отсчёта. Первая волна начнётся через 1000 мс
    this.timeForNextWave = 10000;// Константа, следующая волная будет через это время
  }

  init() {
    // this.waves = 0;
  }

  update(time) {
    if (this.lastTime == 0) {
      this.lastTime = time;
    }
    if (this.timeLeftForNextWave < 0) {
      this.nextWave(time);
    }
    this.timeLeftForNextWave -= (time - this.lastTime);
    this.lastTime = time;
  }

  nextWave(time) {
    const orcSquad = [];// Создать за один раз нескольких орков
    for (let i = 0; i < 2; i++) {
      const orc = new Orc(this.player);// Передаём игрока, чтобы орк мог следить за ним и атаковать его
      orc.x = 1246;// После отладки сделай 1350
      orc.y = 1030 + i * 70;
      orcSquad.push(orc);
    }
    orcSquad.forEach((orc) => {
      this.collider.addKinematicBody(orc);
      this.orcArmy.push(orc);
    });

    this.timeLeftForNextWave = this.timeForNextWave;
  }
}
