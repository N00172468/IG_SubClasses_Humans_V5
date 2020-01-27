class Human {
    constructor() {
        this.radius = 75;
        // this.strokeColour = (255);
        // this.colour = (255, 255, 67);
    }

    render() {
        var m = new Male();
        var f = new Female();

        m.renderMale();
        f.renderFemale();
    }
}

