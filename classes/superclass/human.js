class Human {
    constructor() {

    }

    render() {
        push(); // Start a new drawing state
        stroke(120,161,255);
        fill(0, 0, 255);
        ellipse(250, 250, 50, 50);
        pop(); // Restore original state
    }
}

