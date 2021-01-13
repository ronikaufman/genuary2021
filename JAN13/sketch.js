// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.13
// "Do not repeat."
// https://genuary2021.github.io/

// https://en.wikipedia.org/wiki/Heap's_algorithm

let w = "genuary";
let permutations = [];
const MAX_Y = 691;

function setup() {
  createCanvas(512, 512);
  noStroke();
  fill(255);
  textFont("Monospace");
  textAlign(LEFT, TOP);
  noLoop();
   
  heap_algo(w, w.length);
}

function draw() {
  background(255, 255, 0);
  blendMode(DIFFERENCE);
  
  textSize(1);
  let xunit = textWidth(w);
  let n = 1;
  let size = width/xunit;
  let x = 0; y = 0;
  
  textSize(size);
  for (let p of permutations) {
    text(p[0].toUpperCase()+p.slice(1), x, y);
    x += xunit*size;
    if (x >= width) {
      x = 0;
      y += size/MAX_Y*height;
      n += 1;
      size = width/(n*xunit);
      textSize(size);
    }
  }
}

function heap_algo(word, n) {
  if (n == 1) {
    permutations.push(word);
    return;
  }
  heap_algo(word, n-1);
  for (let i = 0; i < n-1; i++) {
    heap_algo(swap(word, i, n-1), n-1);
  }
}

// Swap the characters at indices i and j (with i<j) in str, and return it
function swap(str, i, j) {
  let a = str[i], b = str[j];
  return str.slice(0, i) + b + str.slice(i+1, j) + a + str.slice(j+1);
}