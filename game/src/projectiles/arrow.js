import { Projectile } from '../projectile';
import { SpriteSheet } from '../sprite-sheet';

export class Arrow extends Projectile {
  constructor(direction, speed, x, y) {
    super(direction, speed, x, y);
    this.sprites = {};
    this.name = 'arrow';
    const tiles = new SpriteSheet({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640,
    });
    this.sprites.left = tiles.getSprite(9);
    this.sprites.right = tiles.getSprite(10);
    this.sprites.down = tiles.getSprite(19);
    this.sprites.up = tiles.getSprite(20);
    this.view = this.sprites[direction];
  }

  fly(x, y, direction) {
    super.fly(x, y, direction);
    this.view = this.sprites[direction];
  }
}
