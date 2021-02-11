import { Body } from './body';
import { Dummy } from './ais/dummy';

export class QuestPerson extends Body {
  constructor() {
    super({ imageName: 'quest_person', speed: 5 });
    this.ai = new Dummy();
    this.ai.control(this);
  }

  update(time) {
    this.ai.update(time);
    super.update(time);
  }
}
