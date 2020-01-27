class Human {
  constructor() {
    this.radius = 50;
    this.position = createVector(
      random(this.radius, width - this.radius * 2),
      random(this.radius, height - this.radius * 2)
    );
    this.velocity = createVector(random(-10, 10), random(-10, 10));
    // this.x = random(width);
    // this.y = random(height);
    // this.speed = random(1, 10);
  }

  render() {
    translate(this.position.x, this.position.y);
    var m = new Male();
    m.renderMale();

    var f = new Female();
    f.renderFemale();
  }

  step() {
    this.position.add(this.velocity);
    // this.x += random(-this.speed, this.speed);
    // this.y += random(-this.speed, this.speed);

    // var f = new Female();
    // f.stepFemale();
  }

  checkEdges() {
    if (
      this.position.x < this.radius ||
      this.position.x > width - this.radius
    ) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (
      this.position.y < this.radius ||
      this.position.y > height - this.radius
    ) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}
