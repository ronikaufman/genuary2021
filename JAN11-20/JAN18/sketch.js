// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.18
// "One process grows, another process prunes."
// https://genuary2021.github.io/

function setup() {
  createCanvas(512, 512);
  noStroke();
  fill(255);
  noLoop();
}

function draw() {
  blendMode(BLEND);
  background(255, 255, 0);
  blendMode(DIFFERENCE);

  divide(0, 0, width, height);
}

function divide(x, y, w, h) {
  let p = map(x, 0, width, 1, 0);
  if ((w < 4) || (h < 4)) return;
  rect(x+w/3, y+h/3, w/3, h/3, 4);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (random() < sq(p)) divide(x+i*w/3, y+j*h/3, w/3, h/3);
    }
  }
}