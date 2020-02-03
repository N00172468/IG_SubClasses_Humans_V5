class Human {
  constructor(_moleculeId, _x, _y) {
    this.radius = 50;
    this.strokeColour = "#fff";
    this.colour = "#fff";
    this.position = createVector(_x, _y);
    this.velocity = createVector(random(-10, 10), random(-10, 10));
    this.pulseRadMin = 0;
    this.pulseRadMax = 15;
    this.pulseSpeed = 1;
  }

  render() {
    strokeWeight(2);
    stroke(this.strokeColour);
    fill(this.colour);
    push();
      translate(this.position.x, this.position.y);
      ellipse(0, 0, this.radius * 2, this.radius * 2);
    pop();
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

  pulseHuman() {
    if (this.pulseRadMin < this.pulseRadMax) {
      this.pulseRadMin += this.pulseSpeed;
    } else {
      this.pulseRadMin = 0;
    }
    push()
      noFill();
      stroke(this.strokeColour);
      translate(this.position.x, this.position.y);
      ellipse(0, 0, (this.radius + this.pulseRadMin) * 2, (this.radius + this.pulseRadMin) * 2);
    pop()
  }
}
