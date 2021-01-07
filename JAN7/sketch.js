// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.7
// "Generate some rules, then follow them by hand on paper."
// https://genuary2021.github.io/

// Data from:
// https://massmoca.org/sol-lewitt/
// https://solvingsol.com/solutions/

let data, rm;

function preload() {
  data = loadStrings("data/lewitt.txt");
}

function setup() {
  createCanvas(512, 512);
  noStroke();
  fill(0, 0, 255);
  textFont("Monospace", 32);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  noLoop();
  
  rm = RiTa.markov(4);
  rm.addText(data);
}

function draw() {
  let rawInstructions = rm.generate(1).join(" ").split(" ");
  let formattedInstructions = [];
  let line = "";
  for (let i of rawInstructions) {
    if (textWidth(line + " " + i) > width - 20) {
      formattedInstructions.push(line.substring(1));
      line = "";
    } else {
      line += " " + i;
    }
  }
  formattedInstructions.push(line.substring(1));
  
  background(255, 255, 0);
  text(formattedInstructions.join("\n"), 10, 10);
}