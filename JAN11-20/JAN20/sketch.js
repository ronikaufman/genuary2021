// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.20
// "No loops."
// https://genuary2021.github.io/

let margin;

function setup() {
  createCanvas(512, 512);
  noLoop();
  noStroke();
  blendMode(DIFFERENCE);
  fill(255);
  margin = width/81;
}

function draw() {
  background(255, 255, 0);
  square(margin, margin, width - 2*margin, margin);
  divide(margin, margin, width - 2*margin, 0, 2);
}

function divide(x, y, w, count, n) {
  if (n < 0 || count > 8) return;
  let smol = (w-4*margin)/3;
  let xi = x + margin*(1+count%3) + smol*(count%3);
  let yi = y + margin*(1+floor(count/3)) + smol*floor(count/3);
  square(xi, yi, smol, margin);
  divide(x, y, w, count+1, n);
  divide(xi, yi, smol, 0, n-1);
}