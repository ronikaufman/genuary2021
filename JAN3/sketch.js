// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.3
// "Make something human."
// https://genuary2021.github.io/

let MAX_ITER = 150;

function setup() {
  createCanvas(512, 512);
  noLoop();
}

function draw() {
  noStroke();
  for (let x = 0; x < width; x += 0.5) {
    let x0 = map(x, 0, width, -1.25, 1.25);
    for (let y = 0; y < height; y += 0.5) {
      let y0 = map(y, 0, height, -1.4, 1.1);
      let v = when_diverges_mandelbrot(y0, x0)/MAX_ITER*255;
      fill(255-v, 255-v, v);
      square(x, y, 0.5);
    }
  }
  
  noFill();
  strokeWeight(7);
  stroke(0, 0, 255);
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = color(0, 0, 255);
  // legs
  line(width/2 - 50, height/2 + 100, width/2 - 60, height/2 + 225);
  line(width/2 + 50, height/2 + 100, width/2 + 60, height/2 + 225);
  // feet
  line(width/2 - 60, height/2 + 225, width/2 - 90, height/2 + 222);
  line(width/2 + 60, height/2 + 225, width/2 + 90, height/2 + 222);
  
  strokeWeight(5)
  stroke(255, 255, 0);
  // eyes
  line(width/2 - 13, 60, width/2 - 13, 75);
  line(width/2 + 13, 60, width/2 + 13, 75);
  // mouth
  arc(width/2, 84, 60, 60, 0.1, PI - 0.1);
}

function when_diverges_mandelbrot(x0, y0) {
  let xn = 0;
  let yn = 0;
  for (let i = 1; i < MAX_ITER; i++) {
	let xnp1 = xn*xn - yn*yn + x0;
	let ynp1 = 2*xn*yn + y0;
	xn = xnp1;
	yn = ynp1;
	if (xn**2 + yn**2 > 4) {
		return i;
	}
  }
  return MAX_ITER;
}