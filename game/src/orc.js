import { Body } from './body';
import { Dummy } from './ais/dummy';
import { EndScript } from './ais/endScript';
import { Peaceful } from './ais/peaceful';
import { isAgressive } from './ais/isAgressive';
import { deathOrcPlayAudio } from './audio-playback/audios';
import { deathOrcs } from './get-quest';

export class Orc extends Body {
  constructor(player, aiType = 'peaceful') { // Передаём игрока, чтобы орк мог следить за ним и атаковать его
    super({ imageName: 'orc', speed: 50 });
    if (aiType == 'dummy') this.ai = new Dummy();
    if (aiType == 'endScript') this.ai = new EndScript();
    if (aiType == 'peaceful') this.ai = new Peaceful(player);

    this.allDeathOrks = 0;
    this.name = 'orc';// Для коллайдера, что опознать этот объект
    this.ai.control(this);
  }

  update(time) {
    if (this.ai) {
      this.ai.update(time);// Если ИИ не отключен
    }
    super.update(time);
  }

  death() {
    deathOrcs();
    deathOrcPlayAudio();
    this.ai = null;// Отключаем ИИ
    isAgressive.becomeAgressive();
    super.death();
  }
}
