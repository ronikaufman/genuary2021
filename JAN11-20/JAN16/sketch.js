// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.16
// "Circles only"
// https://genuary2021.github.io/

// After http://paulbourke.net/fractals/apollony/

const N = 10000000;
const s = 1.7320508076; // sqrt(3)
const scaleMult = 64;

function setup() {
  createCanvas(512, 512);
  noStroke();
  noLoop();
}

function draw() {
  background(255, 255, 0);
  fill(0, 0, 255);
  translate(width/2, height/2);
  let v = [0.2, 0.3];
  for (let i = 0; i < N; i++) {
    if (i > 100) circle(v[0]*scaleMult, v[1]*scaleMult, 0.25);
    let r = random();
    if (r < 1/3) {
      v = f1(v);
    } else if (r < 2/3) {
      v = f2(v);
    } else {
      v = f3(v);
    }
  }
}

function f1(v) {
  let a = 1+s-v[0];
  let x = 3*a/(sq(a)+sq(v[1])) - (1+s)/(2+s);
  let y = 3*v[1]/(sq(a)+sq(v[1]));
  return [x, y];
}

function f2(v) {
  let f1v = f1(v);
  let f1x = f1v[0], f1y = f1v[1];
  let a = 0.5/(sq(f1x)+sq(f1y));
  let x = a*(-f1x+s*f1y);
  let y = a*(s*f1x+f1y);
  return [x, y];
}

function f3(v) {
  let f1v = f1(v);
  let f1x = f1v[0], f1y = f1v[1];
  let a = 0.5/(sq(f1x)+sq(f1y));
  let x = a*(-f1x-s*f1y);
  let y = a*(-s*f1x+f1y);
  return [x, y];
}