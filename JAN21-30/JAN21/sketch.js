// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.21
// "function f(x) {DRAW(x);f(1 * x / 4);f(2 * x / 4);f(3 * x / 4);}"
// https://genuary2021.github.io/

let s = 640;

function setup() {
  createCanvas(512, 512);
  noLoop();
  noStroke();
  rectMode(CENTER);
  fill(255);
}

function draw() {
  background(255, 255, 0);
  blendMode(DIFFERENCE)
  translate(width/2, height/2);
  f(random(1000));
}

function f(x) { 
  if (s < 1) return;
  DRAW(x); 
  f(1 * x / 4); 
  f(2 * x / 4); 
  f(3 * x / 4); 
}

function DRAW(x) {
  push();
  rotate(log(x));
  square(0, 0, s);
  s -= s/16;
  pop();
}