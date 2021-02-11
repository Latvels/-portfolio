import { Body } from './body';
import { Dummy } from './ais/dummy';

export class Elf extends Body {
  constructor() {
    super({ imageName: 'elf', speed: 60 });
    this.ai = new Dummy();
    this.ai.control(this);
  }

  update(time) {
    this.ai.update(time);
    super.update(time);
  }
}
