let canvasBase = 400;

let comet1 = {
  x: 0,
  y: 0,
  diameter: 30,
  velocity: 1,
};

let comet2 = {
  x: 50,
  y: 0,
  diameter: 20,
  velocity: 1.5,
};

let comet3 = {
  x: 25,
  y: 0,
  diameter: 5,
  velocity: 4,
};

function setup() {
  createCanvas(canvasBase, canvasBase);
  background("black");

  noStroke();
}

function draw() {
  background(0, 0, 0, 10);
  renderComet(comet1, canvasBase);
  renderComet(comet2, canvasBase);
  renderComet(comet3, canvasBase);
}

function renderComet(comet, threshold) {
  comet.x = comet.x + comet.velocity;
  comet.y = comet.y + comet.velocity;

  circle(comet.x, comet.y, comet.diameter);

  if (comet.x > threshold || comet.y > threshold) {
    comet.x = random(0, 100);
    comet.y = 0;
  }
}
