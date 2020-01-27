class Female extends Human {
    constructor() {
        super();
        this.strokeColour = "#DF90FF";
        this.colour = "#FF00D5";
    }

    renderFemale() {
        push();
        stroke(this.strokeColour);
        fill(this.colour);
        ellipse(0, 0, this.radius * 1.5, this.radius * 1.5);
        pop();
    }

    // step() {
    //     super.step();
    // }

    // checkEdges() {
    //     super.checkEdges();
    // }
}