// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.9
// "Interference patterns."
// https://genuary2021.github.io/

function setup() {
  createCanvas(512, 512);
  noLoop();
  noFill();
  stroke(255, 255, 0);
}

function draw() {
  background(0, 0, 255);
  for (let r = 0; r < 512; r += 2) {
    circle(width/2, height/2, r*2);
    let angleStep = TWO_PI/128;
    beginShape();
    for (let theta = 0; theta < TWO_PI + 3*angleStep; theta += angleStep) {
      let size = r + sin(r/128+theta) * map(r, 0, 512, 0, 32);
      let x = width/2 + size * cos(theta);
      let y = height/2 + size * sin(theta);
      curveVertex(x, y);
    }
    endShape();
  }
}