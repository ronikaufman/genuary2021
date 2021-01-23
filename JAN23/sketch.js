// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.23
// "#264653 #2a9d8f #e9c46a #f4a261 #e76f51, no gradients."
// https://genuary2021.github.io/

// https://tilings.math.uni-bielefeld.de/substitution/armchair/

let colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

function setup() {
  createCanvas(512, 512);
  stroke(colors[0]);
  noLoop();
}

function draw() {
  let a = 512/4;
  let n = 4;
  tileL(0, a, a, a, a, 3*a, 2*a, 3*a, 2*a, 4*a, 0, 4*a, n);
  tileL(2*a, 3*a, a, 3*a, a, a, 0, a, 0, 0, 2*a, 0, n);
  translate(2*a, 0);
  tileL(0, a, a, a, a, 3*a, 2*a, 3*a, 2*a, 4*a, 0, 4*a, n);
  tileL(2*a, 3*a, a, 3*a, a, a, 0, a, 0, 0, 2*a, 0, n);
}

function prop(xA, yA, xB, yB, k) {
  let xC = (1-k)*xA + k*xB;
  let yC = (1-k)*yA + k*yB;
  return [xC, yC];
}

function tileL(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, n, i) {
  if (i) fill(colors[i]);
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x3, y3);
  vertex(x4, y4);
  vertex(x5, y5);
  vertex(x6, y6);
  endShape(CLOSE);
  
  if (n > 0) {
    let [x7, y7] = prop(x1, y1, x6, y6, 1/6);
    let [x8, y8] = prop(x2, y2, x3, y3, 3/4);
    let [x9, y9] = prop(x1, y1, x6, y6, 4/6);
    let [x10, y10] = prop(x9, y9, x4, y4, 3/4);
    let [x11, y11] = prop(x6, y6, x5, y5, 1/4);
    let [x12, y12] = prop((x1+x2)/2, (y1+y2)/2, x11, y11, 1/6);
    let [x13, y13] = prop((x1+x2)/2, (y1+y2)/2, x11, y11, 3/6);
    let [x14, y14] = prop((x4+x5)/2, (y4+y5)/2, (x6+x9)/2, (y6+y9)/2, 1/4);
    let [x15, y15] = prop((x4+x5)/2, (y4+y5)/2, (x6+x9)/2, (y6+y9)/2, 3/4);
    
    tileL(x8, y8, x13, y13, x12, y12, x7, y7, x1, y1, x2, y2, n-1, 1);
    tileL(x7, y7, x12, y12, x13, y13, x8, y8, x3, y3, x9, y9, n-1, 2);
    tileL(x10, y10, x14, y14, x15, y15, x11, y11, x6, y6, x9, y9, n-1, 3);
    tileL(x11, y11, x15, y15, x14, y14, x10, y10, x4, y4, x5, y5, n-1, 4);
  }
}