class Female extends Human {
    constructor(_moleculeId,_x, _y) {
        super(_moleculeId, _x, _y);
        this.strokeColour = "#DF90FF";
        this.colour = "#FF00D5";
    }

    renderFemale() {
        super.render();
    }
}