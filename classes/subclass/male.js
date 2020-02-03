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
        this.exciteRadMax = 50;
        this.exciteSpeed = 10;
        this.colour = "#0000FF";
    }
}

class OldBoy extends Male {
    constructor (_moleculeId, _x, _y) {
        super(_moleculeId, _x, _y);
        this.exciteRadMax = 5;
        this.exciteSpeed = 0.1;
        this.colour = "#5E5EBB";
        this.velocity = createVector(random(-2, 2), random(-2, 2));
    }
}