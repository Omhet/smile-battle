class Shot {
  constructor(x, y, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.d = 10;
    this.r = this.d / 2;
    this.speed = 10;
    this.color = color;
    this.alive = true;
  }

  update() {
    this.move();

    if (this.x < 0 || this.x > 1600 || this.y < 0 || this.y > 1600) {
      this.alive = false;
    }
  }

  move() {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
  }

  draw() {
    if (!this.alive) {
      return;
    }
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.d);
    pop();
  }
}
