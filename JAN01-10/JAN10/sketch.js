// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.10
// "// TREE"
// https://genuary2021.github.io/

function setup() {
  createCanvas(512, 512);
  noLoop();
  stroke(255, 255, 0);
  strokeWeight(1);
  fill(255, 255, 0);
}

function draw() {
  background(0, 0, 255);
  let n = 6;
  let s = 232;
  translate(width/2, height/2);
  branch(0, -s*sqrt(3)/2, -s, s*sqrt(3)/2, n);
  branch(0, -s*sqrt(3)/2, s, s*sqrt(3)/2, n);
}

function branch(x1, y1, x2, y2, n) {
  circle(x1, y1, (n+1)*2);
  line(x1, y1, x2, y2);
  if (n > 0) {
    let delta = 1.5; // to add a small space between branches
    if (x1 < x2) delta *= -1;
    branch(x1, y1, (x1+x2)/2, (y1+y2)/2, n-1);
    branch((x1+x2)/2, (y1+y2)/2, x2, y2, n-1);
    branch((x1+x2)/2, (y1+y2)/2, x1-delta, y2, n-1);
    //branch(x1, y2, (x1+x2)/2, (y1+y2)/2, n-1);
  }
}