let humans = [];
let numOfHumans = 1;

function setup() {
    createCanvas(700, 700);
    background(0);

    for (let i = 0; i < numOfHumans; i++) {
        // humans.push(new Human(i, random(10, 600), random(10, 600)));
        humans.push(new Male(i, random(10, 600), random(10, 600)));
        humans.push(new Female(i, random(10, 600), random(10, 600)));
    }
}

function draw() {
    background(0);
     humans.forEach(human => {
        human.render();
       human.step();
        human.checkEdges();
     });
}