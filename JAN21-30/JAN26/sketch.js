// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.26
// "2D Perspective."
// https://genuary2021.github.io/

let count = 0;

function setup() {
  createCanvas(512, 512);
  noLoop();
  stroke(0, 0, 255);
}

function draw() {
  background(255, 255, 0);
  translate(width/2, height/2+16);
  drawTriangle(128, 6);
}

function drawTriangle(s, n) {
  let corners = [createVector(-s, -s*sqrt(3)/2),
                 createVector(s, -s*sqrt(3)/2),
                 createVector(0, s*sqrt(3)/2)];
  let r = 2*s/n;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < n; j++) {
      let x = map(j, 0, n-1, corners[i].x, corners[(i+1)%3].x);
      let y = map(j, 0, n-1, corners[i].y, corners[(i+1)%3].y);
      drawCube(x, y, r);
    }
  }
  
  count++;
  let x = -s + 2*s/(n-1);
  let y = -s*sqrt(3)/2;
  translate(x, y);
  rotate(2*PI/3);
  drawFacet(r);
  rotate(2*PI/3);
  drawFacet(r);
}

function drawCube(x, y, r) {
  push();
  translate(x, y);
  for (let i = 0; i < 3; i++) {
    drawFacet(r);
    rotate(2*PI/3);
  }
  pop();
}

function drawFacet(r) {
  let p1 = p5.Vector.fromAngle(0, r);
  let p2 = p5.Vector.fromAngle(PI/3, r);
  let p3 = p5.Vector.fromAngle(5*PI/3, r);
  if (++count % 3 == 0) {
    fill(0, 0, 255);
  } else if (count % 3 == 1) {
    fill(255, 255, 0);
  } else {
    fill(255, 0, 0)
  }
  quad(p1.x, p1.y, p2.x, p2.y, 0, 0, p3.x, p3.y);
}