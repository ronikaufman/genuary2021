// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.11
// "Use something other than a computer as an autonomous process (or use a non-computer random source)."
// https://genuary2021.github.io/

let data;

function preload() {
  data = loadStrings("data/throws.txt");
}

function setup() {
  createCanvas(512, 512);
  textFont("Monospace", 26);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  noLoop();
  strokeCap(SQUARE);
  strokeWeight(3);
}

function draw() {
  background(255, 255, 0);

  noStroke();
  fill(0, 0, 255);
  rect(0, 0, width, 64);
  fill(255, 255, 0);
  let title = "Is my origami die well-balanced?";
  text(title, width / 2, 19);

  let results = [1, 2, 3, 4, 5, 6].map(count);
  textSize(20);
  stroke(0, 0, 255);
  line(64, height - 64, width - 64, height - 64);
  const bar_width = 48;
  const inter_bar_width = 16;
  let x = 64 + (width - 128 - 6*bar_width - 5*inter_bar_width)/2;
  
  for (let i = 0; i < 6; i++) {
    let bar_height = results[i] * 15;
    rect(x, height - 64 - bar_height, bar_width, bar_height);
    text(str(i + 1), x + bar_width / 2, height - 54)
    x += inter_bar_width+bar_width;
  }
  
  const mean_height = height - 64 - 100 / 6 * 15;
  strokeWeight(1.5);
  line(64, mean_height, width - 64, mean_height);
  noStroke();
  fill(0, 0, 255);
  textSize(14);
  text("1/6", width - 42, mean_height-7);
  
  text("(100 throws)", width/2, height-20);
}

function count(n) {
  return data.filter(x => (x == str(n))).length;
}