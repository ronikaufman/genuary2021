// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.22
// "Draw a line. Wrong answers only."
// https://genuary2021.github.io/

function setup() {
  createCanvas(512, 512);
  noLoop();
  textFont("monospace", 24);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
}

function draw() {
  background(255, 255, 0);
  
  stroke(0, 0, 255);
  strokeWeight(2);
  line(36, height/2, width - 36, height/2);
  
  noStroke();
  fill(0, 0, 255);
  text("Ceci n'est pas une ligne.", width/2, height - 64);
}