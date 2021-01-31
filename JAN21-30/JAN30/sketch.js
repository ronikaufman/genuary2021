// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.30
// "Replicate a natural concept (e.g. gravity, flocking, path following)."
// https://genuary2021.github.io/

let grid = [];
const n = 512; // number of squares per side
//const MAX_STEPS = 524288;
const MAX_STEPS = 134217728;
//const rules = ["L", "R", "R", "R", "R", "L", "L", "L", "R", "R", "R"];
//const rules = ["L", "R", "R", "R", "R", "R", "L", "L", "R"];
const rules = ["R", "R", "L", "L"];
let ant = {
  x: 300,
  y: n/2,
  dir: 2
}

function setup() {
  createCanvas(512, 512);
  noLoop();
  noStroke();
  fill(0, 0, 255);
  rectMode(CENTER);
  
  for (let i = 0; i < n; i++) {
    let line = [];
    for (let j = 0; j < n; j++) {
      line.push(0);
    }
    grid.push(line);
  }
}

function draw() {
  background(255, 255, 0);
  beginShape();
  for (i = 0; i < MAX_STEPS; i++) {
    oneStep(ant);
  }
  drawGrid();
  endShape();
}

function oneStep(ant) {
  let state = grid[ant.y][ant.x];
  grid[ant.y][ant.x] = (grid[ant.y][ant.x] + 1)%rules.length;
  if (rules[state] == "R") {
    ant.dir = (ant.dir+1)%4;
  } else if (rules[state] == "L") {
    ant.dir = (ant.dir+3)%4;
  }
  moveForward(ant);
}

function moveForward(ant) {
  switch (ant.dir) {
    case 0: // up
      ant.y = (ant.y-1+n)%n;
      break;
    case 1: // right
      ant.x = (ant.x+1)%n;
      break;
    case 2: // down
      ant.y = (ant.y+1)%n;
      break;
    case 3: // left
      ant.x = (ant.x-1+n)%n;
      break;
  }
}

function drawGrid() {
  let s = width/n;
  let m = rules.length-1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let g = grid[j][i];
      if (g > 0) {
        square((i+1/2)*s, (j+1/2)*s, s*g/m);
      }
    }
  }
}