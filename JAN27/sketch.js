// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.27
// "Monochrome gradients without lines."
// https://genuary2021.github.io/

function setup() {
  createCanvas(512, 512);
  noStroke();
  noLoop();
  rectMode(CENTER);
}

function draw() {
  let s = 4;
  for (let x = s/2; x < width; x += s) {
    for (let y = s/2; y < height; y += s) {
      let d = dist(x, y, width/2, height/2)/16;
      let theta = atan2(y-height/2, x-width/2);
      let v = (sin(sin(d)*2+theta*3+PI/2)+1)/2;
      if (v < 0.5) {
        fill(0, 0, 255);
        square(x, y, s);
        fill(255, 255, 0);
        circle(x, y, s*3*v)
      } else {
        fill(255, 255, 0);
        square(x, y, s);
        fill(0, 0, 255);
        circle(x, y, s*3*(v-0.5))
      }
    }
  }
}
