// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.14
// "// SUBDIVISION"
// https://genuary2021.github.io/

let points = [];

function setup() {
  createCanvas(512, 512);
  noLoop();
  noStroke();
  textFont("monospace", 14);
  
  points = [createVector(273, 508),
            createVector(262, 484),
            createVector(154, 424),
            createVector(102, 373),
            createVector(38, 343),
            createVector(77, 308),
            createVector(182, 354),
            createVector(206, 273),
            createVector(182, 164),
            createVector(178, 64),
            createVector(210, 64),
            createVector(234, 167),
            createVector(266, 234),
            createVector(268, 152),
            createVector(282, 26),
            createVector(316, 22),
            createVector(322, 148),
            createVector(324, 224),
            createVector(336, 172),
            createVector(352, 56),
            createVector(391, 59),
            createVector(385, 178),
            createVector(374, 245),
            createVector(403, 203),
            createVector(430, 116),
            createVector(462, 124),
            createVector(442, 214),
            createVector(420, 264),
            createVector(419, 387),
            createVector(406, 448),
            createVector(409, 504)];
}

function draw() {
  background(255, 255, 0);
  blendMode(DIFFERENCE);
  fill(255);
  rect(0, 0, width/2, height/2);
  rect(width/2, height/2, width/2, height/2);
  for (let i = 0; i < 4; i++) {
    drawPoints(i);
    splitPoint();
    averagePoints();
  }
}

function drawPoints(i) {
  push();
  translate(width*(i%2)/2, height*floor(i/2)/2 - 4);
  /*
  if (i%2 == 0) {
    translate(width/2, 0);
    scale(-1, 1);
  }
  */
  beginShape();
  for (let p of points) {
    //circle(p.x/2, p.y/2, 3)
    vertex(p.x/2, p.y/2);
  }
  endShape();
  text(points.length, 4, height/2);
  pop();
}

function splitPoint() {
  for (let i = 0; i < points.length; i += 2) {
    let p1 = points[i];
    let p2 = points[(i+1)%points.length];
    let middle = createVector((p1.x+p2.x)/2, (p1.y+p2.y)/2);
    points.splice(i+1, 0, middle);
  }
}

function averagePoints() {
  let p0 = points[0]; // saved for last average
  for (let i = 0; i < points.length-1; i++) {
    let p1 = points[i];
    let p2 = points[i+1];
    points[i] = createVector((p1.x+p2.x)/2, (p1.y+p2.y)/2);
  }
  let pn_1 = points[points.length-1];
  points[points.length-1] = createVector((p0.x+pn_1.x)/2, (p0.y+pn_1.y)/2);
}