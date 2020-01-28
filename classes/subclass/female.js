class Female extends Human {
    constructor(_moleculeId,_x, _y) {
        super(_moleculeId, _x, _y);
        this.strokeColour = "#DF90FF";
        this.colour = "#FF00D5";
    }

    renderFemale() {
        // stroke(this.strokeColour);
        // fill(this.colour);
        // push();
        // ellipse(_x, _y, this.radius * 1.5, this.radius * 1.5);
        // pop();
        super.render();
    }

    // step() {
    //     super.step();
    // }

    // checkEdges() {
    //     super.checkEdges();
    // }
}