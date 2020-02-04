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

class YoungFemale extends Female {
    constructor (_moleculeId, _x, _y) {
        super(_moleculeId, _x, _y);
        this.exciteRadMax = 50;
        this.exciteSpeed = 10;
        this.colour = "#E936A7";
    }
}

class OldGirl extends Female {
    constructor (_moleculeId, _x, _y) {
        super(_moleculeId, _x, _y);
        this.exciteRadMax = 5;
        this.exciteSpeed = 0.1;
        this.colour = "#FCB1E0";
        this.velocity = createVector(random(-2, 2), random(-2, 2));
    }
}