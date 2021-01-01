// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.1
// "// TRIPLE NESTED LOOP"
// https://genuary2021.github.io/

let n = 3;

function setup() {
  createCanvas(512, 512);
  noLoop();
  noStroke();
  blendMode(DIFFERENCE);
  fill(255);
}

function draw() {
  background(0, 0, 255);
  scale(width/(2*n**3 + 2*n**2 + 2*n + 3), height/(2*n**3 + 2*n**2 + 2*n + 3));
  translate(1, 1);
  square(0, 0, 2*n**3 + 2*n**2 + 2*n + 1, 1);
  for (let i = 0; i < n**2; i++) {
    push();
    translate(1 + 2*(i%n)*(n**2 + n + 1), 1 + 2*floor(i/n)*(n**2 + n + 1));
    square(0, 0, 2*n**2 + 2*n + 1, 1);
    for (let ii = 0; ii < n**2; ii++) {
      push();
      translate(1 + 2*(ii%n)*(n+1), 1 + 2*floor(ii/n)*(n+1));
      square(0, 0, 2*n+1, 1);
      for (let iii = 0; iii < n**2; iii++) {
        push();
        translate(1 + (iii%n)*2, 1 + floor(iii/n)*2);
        square(0, 0, 1, 1);
        pop();
      }
      pop();
    }
    pop();
  }
}