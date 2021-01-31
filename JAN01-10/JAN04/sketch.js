// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.4
// "Small areas of symmetry."
// https://genuary2021.github.io/

// inspired by https://twitter.com/concinnus/status/1345927953872531462?s=09

function setup() {
  createCanvas(512, 512);
  noStroke();
  noLoop();
  fill(255);
}

function draw() {
  background(255, 255, 0);
  blendMode(DIFFERENCE);
  rect(0, 0, width/2, height);
  
  let smallR = 10;
  let n = 1;
  translate(width/2, height/2);
  circle(0, 0, smallR*2);
  
  let maxR = sqrt(width**2 + height**2)/2;
  for (let r = 50; r < maxR; r += maxR/7) {
    n++;
    smallR = 10 + (r*r/4e4);
    for (let theta = 0; theta < TWO_PI - 1e-3; theta += TWO_PI/(n*6)) {
      push();
      translate(r*cos(theta), r*sin(theta));
      rotate(theta);
      for (let theta2 = 0; theta2 < TWO_PI - 1e-3; theta2 += TWO_PI/n) {
        let x = 0.75*smallR*cos(theta2), y = 0.75*smallR*sin(theta2);
        circle(x, y, smallR*2);
      }
      pop();
    }
  }
}