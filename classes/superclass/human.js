class Human {
  constructor() {
    this.radius = 75;
    this.position = createVector(
      random(this.radius, width - this.radius * 2),
      random(this.radius, height - this.radius * 2)
    );
    this.velocity = createVector(random(-10, 10), random(-10, 10));
  }

  render() {
    translate(this.position.x, this.position.y);
    var m = new Male();
    var f = new Female();

    m.renderMale();
    f.renderFemale();
  }

  step() {
    this.position.add(this.velocity);
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
