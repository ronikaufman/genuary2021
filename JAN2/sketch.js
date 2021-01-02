// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.2
// "Rule 30 (elementary cellular automaton)"
// https://genuary2021.github.io/

function setup() {
  createCanvas(512, 512);
  noLoop();
  noStroke();
}

function draw() {
  background(0, 0, 255);
  fill(255, 255, 0)
  drawAutomaton(generateAutomaton(64));
}

function generateAutomaton(n) {
  let cells = [];
  // first line (completely random)
  let firstLine = [];
  for (let i = 0; i < n; i++) {
    firstLine.push(random([0, 1]));
  }
  cells.push(firstLine);
  // following (n-1) lines
  for (let l = 0; l < n-1; l++) {
    let line = [];
    for (let i = 0; i < n; i++) {
      let left = cells[l][(i > 0) ? (i-1) : (n-1)];
      let central = cells[l][i];
      let right = cells[l][(i+1)%n];
      line.push(left ^ (central | right)); // rule 30
    }
    cells.push(line);
  }
  return cells;
}

function drawAutomaton(cells, r, g, b) {
  let n = cells.length;
  push();
  scale(width/n, height/n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (cells[j][i] == 1) {
        square(i, j, 1, 1);
        if ((j < n-1) && (cells[j+1][i] == 1)) {
          square(i, j+0.5, 1, 0);
        }
        if ((i < n-1) && (cells[j][i+1] == 1)) {
          square(i+0.5, j, 1, 0);
        }
      }
    }
  }
  pop();
}