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

class YoungMale extends Male {
    constructor (_moleculeId, _x, _y) {
        super(_moleculeId, _x, _y);
        this.pulseRadMax = 50;
        this.pulseSpeed = 10;
    }
}

class OldBoy extends Male {
    constructor (_moleculeId, _x, _y) {
        super(_moleculeId, _x, _y);
        this.pulseRadMax = 5;
        this.pulseSpeed = 0.1;
    }
}