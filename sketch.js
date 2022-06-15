let canvasBase = 400;

let comets = [];

function createRandomComet() {
  let comet = {
    x: random(0, canvasBase),
    y: random(0, 0.5 * canvasBase),
    diameter: random(5, 30),
    velocity: random(1.5, 4),
  };

  comets.push(comet);
}

function setup() {
  createCanvas(canvasBase, canvasBase);
  background("black");

  noStroke();

  let cometCount = random(4, 8);
  for (let i = 0; i < cometCount; i++) {
    createRandomComet();
  }
}

function draw() {
  background(0, 0, 0, 20);

  for (let i = 0; i < comets.length; i++) {
    renderComet(comets[i], canvasBase);
  }
  let colors = ["firebrick", "lightblue", "orange"];
  let color = random(colors);
  fill(color);
}

function renderComet(comet, threshold) {
  threshold = threshold + comet.diameter;
  comet.x = comet.x + comet.velocity;
  comet.y = comet.y + comet.velocity;

  circle(comet.x, comet.y, comet.diameter);

  if (comet.x > threshold || comet.y > threshold) {
    comet.x = random(0, canvasBase);
    comet.y = random(0, 0.5 * canvasBase);
  }
}
