// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.8
// "Curve only."
// https://genuary2021.github.io/

let colors = [[255, 255, 0], [0, 0, 255]];

function setup() {
  createCanvas(512, 512);
  noLoop();
  noFill();
}

function draw() {
  let y0 = -10;
  let freq = random(15, 25);
  let offsetIncr = random(-0.1, 0.1);
  let offset = 0;
  while (y0 < height + 10) {
    let bandSize = random(6, 8);
    strokeWeight(bandSize);
    stroke(random(colors));
    beginShape();
    for (x = -10; x < width + 10; x += 5) {
      let y = y0 + sin(offset + x/freq)*10;
      curveVertex(x, y);
    }
    endShape();
    y0 += bandSize - 2;
    freq += random(-0.1, 0.1);
	offset += offsetIncr;
  }
}