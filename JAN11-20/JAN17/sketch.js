// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.17
// "Draw a line, pick a new color, move a bit."
// https://genuary2021.github.io/

const variables = ["A", "B"];
const constants = ["F", "+", "−"];
const axioms = "A";
const rules = ["+BF−AFA−FB+", "−AF+BFB+FA−"];
const angle = 90;

function setup() {
  createCanvas(512, 512);
  angleMode(DEGREES);
  strokeCap(PROJECT);
  noLoop();
}

function draw() {
  background(255, 255, 0);
  strokeWeight(5);
  let n = 6;
  let s = width/(2**n);
  let text = rewrite(n, axioms);
  translate(s/2, s/2);
  turtle(text, s);
}

// start: starting string
// n: number of rewrites
function rewrite(n, start) {
  let text = start;
  while (n-- > 0) {
    let i = 0;
    while (i < text.length) {
      let v = variables.indexOf(text[i]);
      if (v !== -1) {
        let r = rules[v];
        text = text.slice(0, i) + r + text.slice(i+1);
        i += r.length;
      } else {
        // it's a constant
        i++;
      }
    }
  }
  return text;
}

// text: instruction
// s: how much "move forward" is
function turtle(text, s) {
  //push();
  //let plus = 0;
  //let minus = 0;
  let count = 0;
  for (let i of text.split("")) {
    switch (i) {
      case "F":
        if (count++ % 2 == 0) {
          stroke(255, 0, 0);
        } else {
          stroke(0, 0, 255)
        }
        line(0, 0, s, 0);
        translate(s, 0);
        break;
      case "+":
        //plus++
        rotate(angle);
        break;
      case "−":
        //minus++
        rotate(-angle);
        break;
    }
  }
  //rotate(plus*angle-minus*angle); // reset rotation
  //pop();
}