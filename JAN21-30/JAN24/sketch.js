// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.24
// "500 lines."
// https://genuary2021.github.io/

let numPoints = 500; // number of points
let r = 223; // radius of the circle
let mult = 9; // multiplication factor

function setup() {
  createCanvas(512, 512);
  noLoop();
  stroke(255, 255, 0);
  strokeWeight(1);
}

function draw() {
  background(0, 0, 255);
  
  for (let i = 0; i < numPoints; i++) {
    let theta1 = map(i, 0, numPoints, 0, TWO_PI);
    let p1 = p5.Vector.fromAngle(theta1, r);
    p1.add(width/2, height/2);
		
    let j = floor((i * mult) % numPoints);
    let theta2 = map(j, 0, numPoints, 0, TWO_PI);
    let p2 = p5.Vector.fromAngle(theta2, r)
    p2.add(width/2, height/2);

    if ((p1.x === p2.x) && (i !== j)) {
	  // vertical line
	  line(p1.x, 0, p1.x, height);
	} else {
	  // y = a * x + b
      let a = (p2.y - p1.y) / (p2.x - p1.x);
      let b = p1.y - a * p1.x;
      if (abs(a) < 1) {
        let y1 = b;
        let y2 = a * width + b;
        line(0, y1, width, y2);
      } else {
        let x1 = -b / a;
        let x2 = (height - b) / a;
        line(x1, 0, x2, height);
      }
	}
  }
}