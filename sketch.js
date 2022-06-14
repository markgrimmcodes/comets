function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}
let cometX = 0;
let cometY = 0;
let cometSize = 0;

function draw() {
  background(0, 0, 0, 20);
  circle(cometX, cometY, (cometSize += 0.5));
  cometX++;
  cometY++;

  if (cometX > 400) {
    cometX = 0;
    cometY = 0;
    cometSize = 0;
  }
}
