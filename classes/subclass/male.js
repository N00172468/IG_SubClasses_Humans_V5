class Male extends Human {
    constructor(_moleculeId,_x, _y) {
        super(_moleculeId, _x, _y);
        this.strokeColour = "#87ABFF";
        this.colour = "#004CFF";
    }

    renderMale() {
        super.render();
    }
}