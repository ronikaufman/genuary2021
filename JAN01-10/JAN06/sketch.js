// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.6
// "Triangle subdivision."
// https://genuary2021.github.io/

// https://en.wikipedia.org/wiki/Pinwheel_tiling

let rand112 = () => (random([1,1,2]));

function setup() {
  createCanvas(512, 512);
  noFill();
  stroke(0, 0, 255);
  noLoop();
}

function draw() {
  background(255, 255, 0);
  let n = 5;
  pinwheel(width, 0, width, height/2, 0, 0, n);
  pinwheel(0, height/2, 0, 0, width, height/2, n);
  pinwheel(width, height/2, width, height, 0, height/2, n);
  pinwheel(0, height, 0, height/2, width, height, n);
  strokeWeight(2);
  rect(0, 0, width, height);
}

/*
(x2,y2)
  | \
  |      \
  |           \
  |                \
  |_______________________
(x1,y1)                (x3,y3)
*/
function pinwheel(x1, y1, x2, y2, x3, y3, n) {
  if (n <= 0) {
    triangle(x1, y1, x2, y2, x3, y3);
  } else {
    let x4 = (4*x2+x3)/5;
    let y4 = (4*y2+y3)/5;
    let x5 = (x1+x3)/2;
    let y5 = (y1+y3)/2;
    let x6 = (x1+x4)/2;
    let y6 = (y1+y4)/2;
    let x7 = (x3+x4)/2;
    let y7 = (y3+y4)/2;
    pinwheel(x4, y4, x2, y2, x1, y1, n-rand112());
    pinwheel(x6, y6, x1, y1, x5, y5, n-rand112());
    pinwheel(x6, y6, x4, y4, x5, y5, n-rand112());
    pinwheel(x7, y7, x5, y5, x4, y4, n-rand112());
    pinwheel(x7, y7, x5, y5, x3, y3, n-rand112());
  }
}