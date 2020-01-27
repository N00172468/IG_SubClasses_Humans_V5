class Human {
  constructor() {
    this.radius = 75;
    this.position = createVector(
      random(this.radius, width - this.radius * 2),
      random(this.radius, height - this.radius * 2)
    );
    this.velocity = createVector(random(-1, 1), random(-1, 1));
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
}
