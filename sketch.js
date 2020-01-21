let humans = [];
let numOfHumans = 1;

function setup() {
    createCanvas(500, 500);
    background(122);

    for (let i = 0; i < numOfHumans; i++) {
        humans.push(new Human(i));
    }
}

function draw() {
    background(122);
    humans.forEach(human => {
        human.render();
    });
}