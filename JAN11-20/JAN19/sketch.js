// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.19
// "Increase the randomness along the Y-axis."
// https://genuary2021.github.io/

let n = 32;

function setup() {
  createCanvas(512, 512);
  noStroke();
  noLoop();
}

function draw() {
  background(255, 255, 0);
  
  let s = width/n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let x = i*s, y = j*s;
      if ((i+j)%2 == 0) {
        if (random() < map(j, 0, n-1, 1, 0)) {
          fill(0, 0, 255);
          arc(x, y, s, s, 0, HALF_PI);
          arc(x+s, y+s, s, s, PI, 3*HALF_PI);
        } else {
          fill(0, 0, 255);
          square(x, y, s);
          fill(255, 255, 0);
          arc(x+s, y, s, s, HALF_PI, PI);
          arc(x, y+s, s, s, 3*HALF_PI, 0);
        }
      } else {
        if (random() < map(j, 0, n-1, 1, 0)) {
          fill(0, 0, 255);
          arc(x, y+s, s, s, 3*HALF_PI, 0);
          arc(x+s, y, s, s, HALF_PI, PI);
        } else {
          fill(0, 0, 255);
          square(x, y, s);
          fill(255, 255, 0);
          arc(x, y, s, s, 0, HALF_PI);
          arc(x+s, y+s, s, s, PI, 3*HALF_PI);
        }
      }
    }
  }
}