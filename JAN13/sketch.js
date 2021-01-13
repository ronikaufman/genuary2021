// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.13
// "Do not repeat."
// https://genuary2021.github.io/

// https://en.wikipedia.org/wiki/Heap's_algorithm#cite_note-3

let word = "genuary";
let permutations = [];
const MAX_Y = 691;

function setup() {
  createCanvas(512, 512);
  noStroke();
  fill(255);
  textFont("Monospace");
  textAlign(LEFT, TOP);
  noLoop();
   
  heap_algo(word, word.length);
}

function draw() {
  background(255, 255, 0);
  blendMode(DIFFERENCE);
  
  textSize(1);
  let xunit = textWidth(word);
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
    if (i%2 == 0) {
      word = swap(word, 0, n-1);
    } else {
      word = swap(word, i, n-1);
    }
    heap_algo(word, n-1);
  }
}

// Swap the characters at indices i and j (with i<j) in str, and return it
function swap(str, i, j) {
  let a = str[i], b = str[j];
  return str.substring(0, i) + b + str.substring(i+1, j) + a + str.substring(j+1);
}