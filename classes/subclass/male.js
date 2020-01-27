class Male extends Human {
    constructor() {
        super();
        this.strokeColour = "#87ABFF";
        this.colour = "#004CFF";
    }

    renderMale() {
        push();
        stroke(this.strokeColour);
        fill(this.colour);
        ellipse(0, 0, this.radius * 2, this.radius * 2);
        pop();
    }

    // step() {
    //     super.step();
    // }

    // checkEdges() {
    //     super.checkEdges();
    // }
}