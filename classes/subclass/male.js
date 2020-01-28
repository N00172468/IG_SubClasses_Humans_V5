class Male extends Human {
    constructor(_moleculeId,_x, _y) {
        super(_moleculeId, _x, _y);
        this.strokeColour = "#87ABFF";
        this.colour = "#004CFF";
    }

    renderMale() {
        // stroke(this.strokeColour);
        // fill(this.colour);
        // push();
        // ellipse(_x, _y, this.radius * 2, this.radius * 2);
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