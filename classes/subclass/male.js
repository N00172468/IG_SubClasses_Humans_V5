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
        ellipse(250 / 2, 250, this.radius, this.radius);
        pop();
    }
}